var gulp = require('gulp');
var sass = require('gulp-sass');
var scss_src = './wp-content/themes/blankslate/used/scss/**/*.scss';
var css_src = './wp-content/themes/blankslate/used/css/';
 
// Sassコンパイルタスク
gulp.task('sass', function(){
  gulp.src(scss_src) // どのフォルダのsassを参照するのか設定
    .pipe(sass())
    .pipe(gulp.dest(css_src)); // コンパイルしたｓcssの出力先を設定
});
 
 
// watchタスク(**/*.scss変更時に実行するタスク)
gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch(scss_src, ['sass']); 
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
 
 
// gulpのデフォルト動作としてsass-watchを実行
gulp.task('default', ['sass-watch']);