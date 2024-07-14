var showLine = function (length) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += "-";
    }
    console.log(line);
};


var showPlayerNameBox = function (playerName) {
    var nameLength = playerName.length + 4; // Adding padding and borders
    showLine(nameLength);
    console.log("| " + playerName + " |");
    showLine(nameLength);
};

// Example usage:
showPlayerNameBox("Kandra");
showPlayerNameBox("Dax");


var showLine = function (length) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += "*";
    }
    console.log(line);
};

// Example usage with box:
var showPlayerNameBox = function (playerName) {
    var nameLength = playerName.length + 4; // Adding padding and borders
    showLine(nameLength);
    console.log("* " + playerName + " *");
    showLine(nameLength);
};

// Example usage:
showPlayerNameBox("Kandra");
showPlayerNameBox("Dax");

