var popupLinks = document.getElementsByClassName("popup-link");
for (var i = 0; i < popupLinks.length; i++) {
    popupLinks[i].addEventListener("click", function(){
        var popupContainer = document.getElementById("popup-container");
        popupContainer.style.display = "block";
    });
}

var popContents = document.getElementsByClassName("pop-content");
for (var i = 0; i < popContents.length; i++){
    popContents[i].addEventListener("click", function(){
        var popupContainer = document.getElementById("popup-container");
        popupContainer.style.display = "none";
    });
}
