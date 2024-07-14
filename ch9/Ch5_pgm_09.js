var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName.toUpperCase()); // 1) Display the player's name in upper case
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName(player1.name);
showPlayerName(player2.name);

// Change the function to show the player's name in lower case
showPlayerName = function (playerName) {
    console.log(playerName.toLowerCase()); // 2) Display the player's name in lower case
};

showPlayerName(player1.name);
showPlayerName(player2.name);
