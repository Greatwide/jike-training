
fis.match('::packager', {
   spriter: fis.plugin('csssprites')
 });

//加时间戳
fis.match('*.{js,css,jpg,png}', {
  useHash: true
});

//skin目录下的文件不带时间戳，因为选中预览时js文件是根据选中的行、列来找到图片，加了时间戳就找不到了。
fis.match('img/skin/*',{
    useHash: false
});

//文件压缩
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

//CssSprite图片合并。同时对原HTML和CSS做了修改，未完整修改，只修改了页面中“猜你喜欢”中的各链接网站的图标，其他图片未做
fis.match('*.css', {
  useSprite: true,                       //雪碧图
  optimizer: fis.plugin('clean-css')    //css文件压缩
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')   //png文件压缩
});

//开发的时候不需要压缩、合并图片、也不需要 hash
fis.media('debug').match('*.{js,css,png}', {
    useHash: false,
    useSprite: false,
    optimizer: null
})


//发布到ouput目录下
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: './output'
    })
})
