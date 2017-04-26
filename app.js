(function () { 'use strict';
  var source=document.getElementById('source'),result=document.getElementById('result');
  document.getElementById('analyze').onclick=function(){
    try{result.textContent=JSON.stringify(Project.analyze(source.value),null,2);}
    catch(error){result.textContent='Input error: '+error.message;}
  };
  var key='pomodoro-desk.entries.v1';
  try{source.value=localStorage.getItem(key)||'';}catch(ignore){}
  source.oninput=function(){try{localStorage.setItem(key,source.value);}catch(ignore){}};
  document.getElementById('clear').onclick=function(){source.value='';result.textContent='';};
}());
