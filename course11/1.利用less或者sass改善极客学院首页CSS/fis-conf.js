

//scss->css
fis.match('*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {
        // options...
        //release: '../template/$0'
    })
})


fis.match('*.{css,less,scss}', {
    //autoprefixer浏览器前缀
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true,

    }),
    useHash: true,              //加时间戳
    useSprite: true,                       //雪碧图
    optimizer: fis.plugin('clean-css')    //css文件压缩
})


//加时间戳
fis.match('*.{js,jpg,png}', {
    useHash: true
});

//course目录下的文件不带时间戳，因为js中要根据选中动态显示。
fis.match('img/course/*',{
    useHash: false
});


fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});

//文件压缩
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')   //png文件压缩
});

fis.match('*.html', {
    //invoke fis-optimizer-html-minifier
    optimizer: fis.plugin('html-minifier')
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
