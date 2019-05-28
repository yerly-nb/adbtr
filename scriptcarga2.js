(function(){
    
    var preload = document.getElementById("recarga");
    var loading = 0;
    var id = setInterval(frame, 64);
    
    function frame(){
        if(loading == 45){
            clearInterval(id);
            window.open("home.html", "_self");
        }else {
            loading = loading + 1;
            if(loading){
                preload.style.animation = "fadeout 1s ease";
            }
        }
    }
})();