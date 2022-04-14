document.getElementById("collapse1").style.transition = "all 1s";
document.getElementById("collapse3").style.transition = "all 0.8s";
document.getElementById("collapse4").style.transition = "all 0.8s";
document.getElementById("collapse5").style.transition = "all 0.8s";
document.getElementById("collapse6").style.transition = "all 1s";
document.getElementById("collapse7").style.transition = "all 1.2s";
document.getElementById("collapse9").style.transition = "all 1.2s";
document.getElementById("collapse10").style.transition = "all 0.8s";
document.getElementById("collapse11").style.transition = "all 0.8s";
document.getElementById("collapse12").style.transition = "all 0.8s";
document.getElementById("collapse16").style.transition = "all 0.8s";


var flag=1;

    function changeStyle(ind1){

        if(flag==1){
          document.getElementsByClassName('up-down-icon')[ind1].innerHTML='<img src="img/chevron-up.svg" width="16" height="16">';
          flag=2;
        }
        else{
          document.getElementsByClassName('up-down-icon')[ind1].innerHTML='<img src="img/chevron-down.svg" width="16" height="16">';
          flag=1;
        }

      }







