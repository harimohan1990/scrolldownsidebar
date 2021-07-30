
function scollFunction(){
  if(document.body.scrollTo > 20 || document.documentElement.scrollTop > 20){
     document.querySelector(".headerrr").style.top="0"
  }
  else{
     document.querySelector(".headerrr").style.top="-100px"
  }
}

window.onscroll = function(){scollFunction();}
