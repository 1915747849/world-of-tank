
var { src , dest , series , parallel , watch } = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var fileInclude = require('gulp-file-include');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var fileInclude = require('gulp-file-include');

function cleanTask(){
    return src('./dist',{ allowEmpty : true})
            .pipe(clean());
}

//html文件的处理
function htmlTask(){
    return src('./index/index/view/*.html')
        .pipe(fileInclude({
            prefix : '@',
            basepath : './index/index/view/templates'
        }))
        .pipe(dest('./dist/view'));
}
//监听文件
function watchTask(){
    watch('./index/index/view/**' , htmlTask);
}

//gulp启动web服务器
function webTask(){
    return src('./dist').
            pipe(webserver({
                host : 'localhost',
                port : 3000,
                open : './view/index.html',   // 服务器启动成功后，自动打开的页面
                livereload : true      // 热更新 -> 再不刷新浏览器的时候，也能自动更新页面
            }));
}
function autoTask(){
    /* return src('./src/*.css')
            .pipe(autoprefixer({
                browsers: ['> 0%']   //不建议在这里进行配置，最好在package.json中进行配置
            }))
            .pipe(dest('./dist')); */
    return src('./index/index/css/*.css')
            .pipe(autoprefixer())
            .pipe(dest('./dist/css'));
}
function fileTask(){
    return src('./index/index/img/**')
            .pipe(dest('./dist/view/img'));
}

module.exports = {
    // 开发调用的命令
    dev : series(cleanTask , parallel(htmlTask,autoTask,fileTask) , parallel(watchTask,webTask) ),
    // 生产调用的命令
    build : series(cleanTask)
};