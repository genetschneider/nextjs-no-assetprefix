const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = false // in prod mode
const app = next({ dev: dev, customServer: true })
const handle = app.getRequestHandler()
const assetPrefix = '/prefix-a';

// Setup asset prefix on server side
app.setAssetPrefix(assetPrefix)

app.prepare().then(() => {
  const server = express()

  server.use((req, res, next) => {
    // Ensure all static requests have 'assetPrefix'
    if (req.url.includes('_next/static') && !req.url.startsWith(assetPrefix)) {
      res.status(404).send();

      return;
    }

    // mock asset prefix
    req.url = req.url.replace(assetPrefix, '');

    next();
  });

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
