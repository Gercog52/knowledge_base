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
