# No asset prefix
This repo is a reproduction example of a `assetPrefix` bug that occurs in nextjs. References to files in css (i.e url()) are not using assetPrefix when they should.

Consider a font-face in a css file
```
@font-face {
  font-family: custom-font;
  src: url("./fonts/Itim-Regular.ttf");
}
```

This font url will be converted to `/_next/static/media/...` and will not use assetPrefix.

Run this repo to reproduce this example
`npm run build && npm run dev`

Notice the font fails to load because it's url has no `assetPrefix`. All the other static assets are prefixed with `assetPrefix`

# Custom Express Server example

Most of the time the default Next.js server will be enough but there are times you'll want to run your own server to integrate into an existing application. Next.js provides [a custom server api](https://nextjs.org/docs/advanced-features/custom-server).

Because the Next.js server is a Node.js module you can combine it with any other part of the Node.js ecosystem. In this case we are using express.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example custom-server-express custom-server-express-app
# or
yarn create next-app --example custom-server-express custom-server-express-app
```
