
var { series , parallel, src , dest , watch } = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');
var fileInclude = require('gulp-file-include');
var webserver = require('gulp-webserver');


// 文件的操作
function fileTask(){
    // src()方法返回的是一个stream流
    /* return src('./src/a.txt')
            .pipe(dest('./dist')); */
   /* return src(['./src/a.txt','./src/b.txt','./src/c.txt'])
            .pipe(dest('./dist')); */

    //找到src下的所有txt文件进行读取
    /* return src('./src/*.txt')
            .pipe(dest('./dist')); */
    //找到src下的所有文件(类型不限)
    return src('./src/**')
            .pipe(dest('./dist'));
}

// 编写一个sass任务
function sassTask(){
    return src('./index/*.scss')
            .pipe(sass())
            .pipe(dest('./dist'))
}

// 编写一个自动化添加浏览器前缀的任务
function autoTask(){
    /* return src('./src/*.css')
            .pipe(autoprefixer({
                browsers: ['> 0%']   //不建议在这里进行配置，最好在package.json中进行配置
            }))
            .pipe(dest('./dist')); */
    return src('./index/*.css')
            .pipe(autoprefixer())
            .pipe(dest('./dist'));
}

// 编写一个css文件压缩的任务
function cssminTask(){
    return src('./index/*.css')
            .pipe(cssmin())
            .pipe(rename(function(path){
                path.basename = path.basename + '.min';
            })) 
            .pipe(dest('./dist'))
}
// 编写完整的css任务
function cssTask(){
    return src('./index/*.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cssmin())
            .pipe(rename(function(path){
                path.basename = path.basename + '.min';
            })) 
            .pipe(dest('./dist'))
}
// 编写一个把ES6 -> ES5 的 任务
function babelTask(){
    return src('./index/*.js')
            .pipe(babel({
                presets: ['es2015']   // 针对ES6代码进行转换
            }))
            .pipe(dest('./dist'))
}
// 编写一个JS压缩的任务
function uglifyTask(){
    return src('./index/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(dest('./dist'))
}
function cleanTask(){
    //allowEmpty : 允许要操作的文件可以不存在
    return src('./dist',{ allowEmpty : true }).pipe(clean());
}

// 编写压缩HTML的任务
function htmlminTask(){
    return src('./index/*.html')
            .pipe(htmlmin({
                collapseWhitespace: true, // 去除空格
                removeEmptyAttributes: true, // 移出空的属性
                minifyCSS: true, // 压缩 style 标签
                minifyJS: true, // 压缩 script 标签
                removeComments: true   // 去除注释
            }))
            .pipe(dest('./dist'));
}

// 编写代码片段的任务
function fileIncludeTask(){
    return src('./index/*.html')
            .pipe(fileInclude({
                prefix : '@',
                basepath : './src/templates'   // 指定代码片段的路径
            }))
            .pipe(dest('./dist'));
}

// 编写 实时监听 src 目录变化 的 任务
function watchTask(){
    // 第一个参数：要监听变化的文件  第二个参数：执行对应的任务
    watch('./index/*.html', fileIncludeTask);
    watch('./index/*.scss', sassTask);
}

// 编写 一个 启动服务器的 任务
function webserverTask(){
    return src('./dist').
            pipe(webserver({
                host : 'localhost',
                port : 3000,
                open : './index.html',   // 服务器启动成功后，自动打开的页面
                livereload : true      // 热更新 -> 再不刷新浏览器的时候，也能自动更新页面
            }))
}


module.exports = {
    dev:series(cleanTask),
    build:series(cleanTask)
};