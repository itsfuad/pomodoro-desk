(function () { 'use strict';
  var source=document.getElementById('source'),result=document.getElementById('result');
  document.getElementById('analyze').onclick=function(){
    try{result.textContent=JSON.stringify(Project.analyze(source.value),null,2);}
    catch(error){result.textContent='Input error: '+error.message;}
  };
  var key='pomodoro-desk.entries.v1';
  try{source.value=localStorage.getItem(key)||'';}catch(ignore){}
  source.oninput=function(){try{localStorage.setItem(key,source.value);}catch(ignore){}};
  document.getElementById('export').onclick=function(){
    try{var blob=new Blob([JSON.stringify(Project.analyze(source.value),null,2)],{type:'application/json'});
      var url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='pomodoro-desk-export.json';link.click();
      setTimeout(function(){URL.revokeObjectURL(url);},1000);
    }catch(error){result.textContent='Cannot export: '+error.message;}
  };
  source.onkeydown=function(event){if((event.ctrlKey||event.metaKey)&&event.keyCode===13){document.getElementById('analyze').click();}};
  document.getElementById('clear').onclick=function(){source.value='';result.textContent='';try{localStorage.removeItem(key);}catch(ignore){}};
}());
