var map = require('map-stream');
var vfs = require('vinyl-fs');

vfs.src(['./dist/css/*.css'])
    .pipe(map(function (file, cb) {
        var content = file.contents;
        content = content.toString('utf8');
        content = content.replace('/banner.jpg', '../banner.jpg').replace(/\/font\//ig, '../font/')
        file.contents = Buffer.from(content);

        cb(null, file);
    }))
    .pipe(vfs.dest('./dist/css/'));

vfs.src(['./dist/js/*.js'])
    .pipe(map(function (file, cb) {
        var content = file.contents;
        content = content.toString('utf8');
        content = content.replace('/data.yaml', './data.yaml');
        file.contents = Buffer.from(content);

        cb(null, file);
    }))
    .pipe(vfs.dest('./dist/js/'));