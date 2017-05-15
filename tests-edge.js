var assert=require('assert'),engine=require('./engine');
try{assert(typeof engine.analyze('')==='object');}catch(error){assert(error instanceof Error);}
