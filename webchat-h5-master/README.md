
## 依赖列表
1. [Swiper][4] --> 用于实现页面的整屏滚动
2. [Animate.css][5] --> 用于提供CSS动画
3. [jQuery][6] --> 用于操作DOM
4. [Normalize.css][7] --> 用于CSS Reset

## 项目结构

        /app
            /dist               --> 项目文件的分发版本，所有的文件均由Gulp任务生成，请勿手动修改
                /audios         --> 从app/src/audios复制而来
                /fonts          --> 从app/src/fonts和在config/vendors.js中指定的第三方字体复制而来
                /images         --> 由app/src/images下的图片经Imagemin压缩优化生成
                /javascripts    --> 由app/src/javascripts下的文件经Browserify打包生成
                /stylesheets    --> 由app/src/scss下的文件编译生成
                index.html      --> 由app/src/index.html经Gulp-inject插入bundle.(min.).css和bundle.(min.).js后生成
            /src                --> 项目的源码，所有文件都可编辑
                /audios         --> 存放音频、视频文件
                /fonts          --> 存放字体文件
                /images         --> 存放图片文件
                /javascripts    --> JS源文件，经Browserify打包后生成app/dist/javascripts/bundle.js
                /scss           --> SCSS文件，经过编译后生成app/dist/stylesheets/bundle.css
                index.html      --> 页面HTML，经过Gulp-inject处理后生成app/dist/index.html
        /config
            vendors.js          --> 第三方CSS、JS、Fonts列表，详见vendors.js说明
        .gitignore
        gulpfile.js             --> Gulp任务
        package.json
        

## 开发流程

   npm install
   //npm install gulp -g(如已安装可以省略)
   gulp dev


## 发布流程

1. 执行gulp prod任务

    gulp prod

    该任务将在app/dist文件夹中生成两个新文件bundle.min.css和bundle.min.js，并删除原有的bundle.css和bundle.js。
    
2. 发布时，只需要将app/dist文件夹中的文件上传到服务器即可，其他文件都不是必需的。app/dist中的CSS、JS和图片文件都是经过压缩优化的。

## Lisence
[MIT][22]
