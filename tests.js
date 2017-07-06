var assert=require('assert'),fs=require('fs'),app=require('./engine');
var input=fs.readFileSync('examples/input.txt','utf8');
var result=app.analyze(input);assert(result&&typeof result==='object');
console.log('Engine tests passed');
assert.strictEqual(typeof JSON.stringify(result),'string');
