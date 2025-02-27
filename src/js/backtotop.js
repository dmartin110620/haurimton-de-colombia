window.onscroll = function () {
    if (pageYOffset >= 300) {
        document.getElementById('topbtn').style.visibility = "visible";
        document.getElementById('whabtn').style.marginBottom = "65px";
    } else {
        document.getElementById('topbtn').style.visibility = "hidden";
        document.getElementById('whabtn').style.marginBottom = "10px";
    }
};

// document.getElementById('topbtn').onclick = function()
// {
//     scrollTo(document.body, 0, 0);
// }