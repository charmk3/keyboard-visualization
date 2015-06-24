window.onload = function(){

    var keyPressed = function(event){
        var key = identify(event);
        pressDown(key);
    };

    var keyReleased = function(event){
        var key = identify(event);
        releaseUp(key);
    }

    var identify = function(event){
        var toAscii = {
            '188': '44',
            '109': '45',
            '190': '46',
            '191': '47',
            '192': '96',
            '220': '92',
            '222': '39',
            '221': '91',
            '219': '93',
            '173': '45',
            '187': '61', //IE Key codes
            '186': '59', //IE Key codes
            '189': '45', //IE Key codes
        };

        var functionKeys = {
            "8" : "backspace",
            "9" : "tab",
            "13" : "enter",
            "16" : "shift",
            "17" : "ctrl",
            "18" : "alt",
            "20" : "caps",
            "32" : "space"
        };

        var keyCode = event.which || event.keyCode;
        var key = "";
        var keyName = "";

        if (toAscii.hasOwnProperty(keyCode)) {
            keyCode = toAscii[keyCode];
            key = String.fromCharCode(keyCode);
        }
        else if(functionKeys.hasOwnProperty(keyCode)){
            key = functionKeys[keyCode];
        }
        else if (event.shiftKey && (keyCode >= 97 && keyCode <= 122)) {
            key = String.fromCharCode(keyCode - 32);
        } else {
            key = String.fromCharCode(keyCode);
        }
        keyName = key.toLowerCase();
        return keyName;
    }

    var pressDown = function(keyName){
        var key = document.getElementsByClassName(keyName);
        for(var i = 0; i < key.length; i++){
            // *old code for adding class to object
            // var className = key[i].className;
            // var classes = className.split(" ");
            // if(classes.indexOf("high-light") === -1){
            //     classes.push("high-light");
            // }
            // className = classes.join(" ");
            // key[i].className = className;
            var container = key[i].getElementsByClassName('container')[0];
            TweenMax.to(container, 0.5, {backgroundColor:"#006600", width: "80%", height: "80%"});
        }
        
    }

    var releaseUp = function(keyName){
        var key = document.getElementsByClassName(keyName);
        for(var i = 0; i < key.length; i++){
            // *old code for removing class from object
            // var className = key[i].className;
            // var classes = className.split(" ");
            // if(classes.indexOf("high-light") != -1){
            //     var index = classes.indexOf("high-light");
            //     classes.splice(index, 1);
            // }
            // className = classes.join(" ");
            // key[i].className = className;
            var container = key[i].getElementsByClassName('container')[0];
            TweenMax.to(container, 0.5, {backgroundColor:"#000000", width: "100%", height: "100%"});
        }
        
    }

    var input = function(event){
        console.log(code);
        var Ascii = {
            '188': '44',
            '109': '45',
            '190': '46',
            '191': '47',
            '192': '96',
            '220': '92',
            '222': '39',
            '221': '91',
            '219': '93',
            '173': '45',
            '187': '61', //IE Key codes
            '186': '59', //IE Key codes
            '189': '45', //IE Key codes
        };
        var code = event.which || event.keyCode;
        var keyChar = "";

        
        if(code == 8){
            content = document.getElementById("output").innerHTML;
            newContent = content.slice(0, content.length - 1);
            document.getElementById("output").innerHTML = newContent;
        }
        else{
            if(code == 13){
                keyChar = "<br />";
            }
            else if(Ascii.hasOwnProperty(code)){
                code = Ascii["code"];
            }
            keyChar = String.fromCharCode(code);
            document.getElementById("output").innerHTML += keyChar;
        }
    }

    // document.onkeydown = keyPressed;
    // document.onkeyup = keyReleased;
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    document.addEventListener("keypress", input);
}