# url() references in css files do not use assetPrefix in transformed urls
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
