/* Estimate focused work sessions and short breaks from task minutes */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.Project=factory();}(this,function(){
  'use strict';
  function analyze(text){

var tasks=String(text).split(/\r?\n/).map(function(s){return parseInt(s,10);}).filter(function(n){return !isNaN(n)&&n>0;});
var work=tasks.reduce(function(x,y){return x+y;},0),sessions=Math.ceil(work/25);
return {tasks:tasks.length,focusMinutes:work,sessions:sessions,breakMinutes:Math.max(0,sessions-1)*5};
  }
  return {analyze:analyze};
}));
