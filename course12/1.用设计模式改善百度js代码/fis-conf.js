fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{jpg.css.js.png}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});