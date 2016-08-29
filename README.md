## About
Simple boilerplate project to jumpstart SCSS/Sass experiments.
Just clone this and you’re set to build stuff.


## Instructions
1. Run `npm install`
1. Run `npm run watch-css`
1. A browser window should have opened `http://localhost:3000/`.
Now every time you change `scss/main.scss` or `index.html`, that page will
reload automatically and show you your latest SCSS changes.


## Commands

### `npm run build-css`
Compiles SCSS files from `scss/` into CSS to `public/css/`.

### `npm run watch-css`
Keeps a running `npm run build-css` every times SCSS files change and opens up
a page with auto reload.

### `npm run clean-css`
Deletes any compiled files inside `public/`.

### `npm run minify-css`
Minifies already built `public/css/main.css` into `public/css/main.min.css`.


## Acknowledgements
- Most of this setup was inspired by [Brian Han][1]’s [Medium article][2].

  [1]: https://twitter.com/thisisbrianhan
  [2]: https://medium.com/@thisisbrianhan/watch-compile-your-sass-with-npm-9ba2b878415b
