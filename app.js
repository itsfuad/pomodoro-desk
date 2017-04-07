(function () { 'use strict';
  var source=document.getElementById('source'),result=document.getElementById('result');
  document.getElementById('analyze').onclick=function(){
    try{result.textContent=JSON.stringify(Project.analyze(source.value),null,2);}
    catch(error){result.textContent='Input error: '+error.message;}
  };
  document.getElementById('clear').onclick=function(){source.value='';result.textContent='';};
}());
