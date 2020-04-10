var helper = {
    lastClickedMc: {},
    lastName: "",
    clickMc: function (event, iName, callee) {
        // console.log('​clickMc iName', iName);
        var clickedMc = event.currentTarget

        // console.log('helper.lastClickedMc.name', helper.lastClickedMc.name);
        // console.log('​clickedMc.name', clickedMc.name);

        if (helper.lastName) {
            if (helper.lastName == iName) {
                //same clicked
                console.log('​same clicked');
                return false;
            } else {
                //not same clicked
                // console.log('​not Îsame clicked');
                if (helper.lastName.charAt(0) == iName.charAt(0)) {
                    //correct
                    console.log('​correct');
                    helper.showAnswer(helper.lastClickedMc.parent["mc_corr_" + iName.charAt(0)], "correct")
                    clickedMc.play();
                    reset("correct")
                    return false;
                } else {
                    // incorrect
                    console.log('​incorrect');
                    helper.lastClickedMc.play();
                    reset("in correct")
                    return false;
                }
            }
        } else {
            //first click
            console.log('​first click');
            set("init")
            clickedMc.play();
        }

        function set(callee) {
            console.log('​set -> callee', callee);
            helper.lastName = iName
            helper.lastClickedMc = clickedMc;
        }

        function reset(callee) {
            console.log('​reset -> callee', callee);
            helper.lastName = ""
            helper.lastClickedMc = "";
        }

        console.log('​this.assigned');

    },
    showAnswer: function (corMc, callee) {
        corMc.visible = true
    }
}

var myHelper = function (callee) {
    console.log('​myHelper -> callee', callee);

}