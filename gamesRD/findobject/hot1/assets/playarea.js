function processSVG(callee) {
    var farmmap = document.getElementById("map"),
        zoneinfo = document.getElementById("zone-info"),
        allzones = farmmap.querySelectorAll("g");
    // console.log('​farmmap', farmmap);
    // console.log('​allzones', allzones);
    farmmap.correctCount = 0;
    farmmap.addEventListener("click", function (e) {
        // console.log('​e.target.nodeName', e.target.nodeName);
        var zone = e.target.parentNode;
        var ansNode = e.target.parentNode.parentNode;
        if (ansNode.id.indexOf("correct") > -1) {
            // console.log('​processSVG innnnnn -> e.target.nodeName', e.target.nodeName);
            for (var i = 0; i < allzones.length; i++) {
                // allzones[i].classList.remove("active");
            }
            if (ansNode.id == "correct") {
                zone.classList.add("active");
                // console.log('​zone.clicked', zone.clicked);
                if (!zone.clicked == true) {
                    farmmap.correctCount++;
                    console.log('​farmmap.correctCount', farmmap.correctCount);
                }
                zone.clicked = true;

                if (farmmap.correctCount == ansNode.childElementCount) {
                    console.log('​all correct');
                    addImage("all correct");
                    playAudio();
                }

            } else {
                zone.classList.add("incorrect");
            }

            // console.log('​ouuuuuuttttt farmmap.correctCount', farmmap.correctCount);
            // console.log('​e.target.classList', e.target.classList);

        } else {
            console.log('​processSVG elseeeeeeeeee -> e.target.nodeName', e.target.nodeName);
        }
    })
}

function addImage(callee) {
    var svgimg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    svgimg.setAttributeNS(null, 'id', 'image2');
    svgimg.setAttributeNS(null, 'height', '768');
    svgimg.setAttributeNS(null, 'width', '1024');
    svgimg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'assets/shape1.svg');
    $('#bg').append(svgimg);
}

function playAudio(params) {
    /**
     * http://www.orangefreesounds.com/category/loops/drum-loops/page/2/
     */
    myAudio = new Audio('assets/drum2.mp3');
    myAudio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
}

function playAudio1(params) {
    var audio = new Audio("assets/drum2.mp3");

    audio.addEventListener('canplaythrough', function () {
        this.currentTime = this.duration - 10;
        this.loop = true;
        this.play();
    });
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
    processAjax("assets/playarea1.svg")
});