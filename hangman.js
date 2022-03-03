function hangman() {
    // Pick a random word
    var word = randomWord();
    console.log(word);

    // Make a "guess" string with underbars
    // where each letter will go. We will fill
    // this in with letters as we find them.
    var guess = '';
    for(var i=0; i<word.length;  i++) {
        guess += '_';
    }

    // The HTML for the page
    var html = '<p id="image"><img width="125" height="300" src="images/hm0.png"></p>';
    var img = 0;

    html += '<p id="guess"></p>';
    html += '<form>';
    html += '<input type="hidden" id="word" value="' + word + '">';
    html += '<p><label for="letter">Letter: </label><input type="text" id="letter"></p>';
    html += '<p><input type="submit" id="try" value="Guess!"> <input type="submit" id="new" value="New Game"> </p>';
    html += '<p id="message">&nbsp;</p>';
    html += '</form>';

    document.getElementById("play-area").innerHTML = html;

    setGuess(guess);

    document.getElementById("try").onclick = function(event) {
        var user = document.getElementById("letter").value;
        if(img < 6) {
            if (user === null || user === "") {
                document.getElementById("message").innerHTML = "You must enter a letter!";
            } else if (user.length != 1) {
                img = img + 1;
                document.getElementById("message").innerHTML = "&nbsp;";


            }else{
                document.getElementById("message").innerHTML = "&nbsp;";
                var string = document.getElementById("word").value;
                var guess = '';
                var userGuess = document.getElementById("guess").innerHTML;
                var oldGuess = '';
                for(var i=0; i<userGuess.length; i++){
                    if(userGuess.charAt(i) != ' '){
                        oldGuess += userGuess.charAt(i);
                    }
                }
                var correct = false;
                for(var j=0; j<string.length;  j++){
                    if(string.charAt(j) === user){
                        guess += user;
                        correct = true;
                    }else{
                        guess += oldGuess.charAt(j);
                    }
                }

                setGuess(guess);

                if(guess.indexOf('_') === -1){
                    document.getElementById("message").innerHTML = "You Win!";
                }
                if (!correct){
                    img++;
                }

            }

            document.getElementById("image").innerHTML = '<img width="125" height="300" src="images/hm' + img + '.png">';

        }
        if(img >= 6){
            var wrong = document.getElementById("word").value;
            setGuess(wrong);
            document.getElementById("message").innerHTML = "You guessed poorly!";

        }

        event.preventDefault();
    }


    document.getElementById("new").onclick = function(event) {
        event.preventDefault();
        var word = randomWord();
        console.log(word);
        var guess = '';
        for(var i=0; i<word.length;  i++) {
            guess += '_';
        }

        document.getElementById("word").value = word;
        setGuess(guess);

        img = 0;
        document.getElementById("message").innerHTML = "&nbsp;";
        document.getElementById("image").innerHTML = '<img width="125" height="300" src="images/hm' + img + '.png">';

    }

}

// Set the guess in the from
function setGuess(guess) {
    var g = '';
    for(var i=0; i<guess.length; i++) {
        g += guess.charAt(i) + ' ';
    }

    document.getElementById("guess").innerHTML = g;
}


function randomWord() {
    var words = ["moon","home","mega","blue","send","frog","book","hair","late",
        "club","bold","lion","sand","pong","army","baby","baby","bank","bird","bomb","book",
        "boss","bowl","cave","desk","drum","dung","ears","eyes","film","fire","foot","fork",
        "game","gate","girl","hose","junk","maze","meat","milk","mist","nail","navy","ring",
        "rock","roof","room","rope","salt","ship","shop","star","worm","zone","cloud",
        "water","chair","cords","final","uncle","tight","hydro","evily","gamer","juice",
        "table","media","world","magic","crust","toast","adult","album","apple",
        "bible","bible","brain","chair","chief","child","clock","clown","comet","cycle",
        "dress","drill","drink","earth","fruit","horse","knife","mouth","onion","pants",
        "plane","radar","rifle","robot","shoes","slave","snail","solid","spice","spoon",
        "sword","table","teeth","tiger","torch","train","water","woman","money","zebra",
        "pencil","school","hammer","window","banana","softly","bottle","tomato","prison",
        "loudly","guitar","soccer","racket","flying","smooth","purple","hunter","forest",
        "banana","bottle","bridge","button","carpet","carrot","chisel","church","church",
        "circle","circus","circus","coffee","eraser","family","finger","flower","fungus",
        "garden","gloves","grapes","guitar","hammer","insect","liquid","magnet","meteor",
        "needle","pebble","pepper","pillow","planet","pocket","potato","prison","record",
        "rocket","saddle","school","shower","sphere","spiral","square","toilet","tongue",
        "tunnel","vacuum","weapon","window","sausage","blubber","network","walking","musical",
        "penguin","teacher","website","awesome","attatch","zooming","falling","moniter",
        "captain","bonding","shaving","desktop","flipper","monster","comment","element",
        "airport","balloon","bathtub","compass","crystal","diamond","feather","freeway",
        "highway","kitchen","library","monster","perfume","printer","pyramid","rainbow",
        "stomach","torpedo","vampire","vulture"];

    return words[Math.floor(Math.random() * words.length)];
}
