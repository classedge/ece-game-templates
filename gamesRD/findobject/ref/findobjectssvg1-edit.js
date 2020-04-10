function processSVG(callee) {
    var farmmap = document.getElementById("map"),
        zoneinfo = document.getElementById("zone-info"),
        allzones = farmmap.querySelectorAll("g");
    console.log('​farmmap', farmmap);
    console.log('​allzones', allzones);
    farmmap.addEventListener("click", function (e) {
        console.log('​e.target.nodeName', e.target.nodeName);
        var zone = e.target.parentNode;
        // console.log('​zone', zone);
        if (e.target.nodeName == "path", "polygon", "polyline", "ellipse") {
            console.log('​e.target.nodeName', e.target.nodeName);
            for (var i = 0; i < allzones.length; i++) {
                // allzones[i].classList.remove("active");
            }
            console.log('​e.target.classList', e.target.classList);
            zone.classList.add("active");
        }
    })
}
/**
 * load of svg
 * @param {*} url 
 */
function processAjax(url) {
    if (window.XMLHttpRequest) { // Non-IE browsers 
        req = new XMLHttpRequest();
        req.onreadystatechange = setContent;
        try {
            req.open("GET", url, true);
        } catch (e) {
            alert(e);
        }
        req.send(null);
    } else if (window.ActiveXObject) { // IE 
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            req.onreadystatechange = setContent;
            req.open("GET", url, true);
            req.send();

        }
    }
    return false;
}
/**
 * set div content on load of svg
 */
function setContent() {
    if (req.readyState == 4) { // Complete 
        if (req.status == 200) { // OK response 
            var div = document.getElementById("containerDiv");
            div.innerHTML = req.responseText;
            processSVG("on set svg content");
            /**
             * Remove the def tag to remove the css styles from svg
             * 
             * wh  xy
             * 768 462
             * 497 370.5
             */
            $("defs").remove();
        } else {
            alert("Problem: " + req.statusText);
        }
    }
}

$(document).ready(function () {
    // processAjax("./nature_web1.svg")
    processAjax("./find1web2.svg")
});


