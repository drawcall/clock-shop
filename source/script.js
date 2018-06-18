var map = require('map-stream');
var vfs = require('vinyl-fs');

var replace = function (file, cb) {
    var content = file.contents;
    content = content.toString('utf8');
    content = content.replace('/banner.jpg','../banner.jpg').replace('/font/','../font/')
    file.contents = Buffer.from(content);
    
    cb(null, file);
};

vfs.src(['./dist/css/*.css'])
    .pipe(map(replace))
    .pipe(vfs.dest('./dist/css/'));