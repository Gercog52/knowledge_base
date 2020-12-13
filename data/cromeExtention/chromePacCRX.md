```javascript
const fs = require('fs');
const path = require('path');
const NodeRSA = require('node-rsa');
const ChromeExtension = require('crx');

const key = new NodeRSA({b: 2048});

const crx = new ChromeExtension({
  privateKey: key.exportKey('pkcs1-pem')
});
 
crx.load('./build')
  .then(crx => crx.pack())
  .then(crxBuffer => {
    fs.writeFileSync('./foobar.crx', crxBuffer);
    console.log('все')
  });
/*
var fs = require('fs');
var gulp = require('gulp');
var crx = require('gulp-crx-pack');
var manifest = require('./build/manifest.json');

const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 2048});

fs.writeFileSync('key.pem',key.exportKey('pkcs1-pem'))

gulp.task('crx', function() {
  return gulp.src('./build')
    .pipe(crx({
      privateKey: key.exportKey('pkcs1-pem'),
      filename: manifest.name + '.crx'
    }))
    .pipe(gulp.dest('./'));
});

function defaultTask(cb) {
  console.log('start');
  cb();
}

exports.default = defaultTask
*/
```