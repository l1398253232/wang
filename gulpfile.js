var gulp=require("gulp");
var minifyHtml=require("gulp-minify-html");
var minifyCss=require("gulp-clean-css");
//html压缩
gulp.task("htmltask",function(){
	gulp.src("*.html")
	.pipe(minifyHtml())
	.pipe(gulp.dest('dist'))
});
//压缩css
gulp.task("csstask",function(){
	gulp.src("./css/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("dist/css"))
});
