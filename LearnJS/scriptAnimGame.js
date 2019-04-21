function shotGreenBeam() {
    var shot = document.getElementById("ShotOne").style.marginLeft = "1400px";
    var speed = document.getElementById("ShotOne").style.transition = "3s";
    var ridley = document.getElementById("ridley");
    

    if (shot && ridley) {
        document.getElementById("ridley").style.marginLeft = "80px";
        document.getElementById("ridley").style.marginTop = "120px";
        document.getElementById("ridley").style.transition = "1.2s";

    }
}


function battleFunc() {
    var GirlAxeMecha = document.getElementById("mechaGirlAxe").style.transform = "translate(-225px)";
    var speed = document.getElementById("mechaGirlAxe").style.transition = "13s";
    
}