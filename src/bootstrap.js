
let deck1 = {
"2 Hearts": 2,
"3 Hearts": 3,
"4 Hearts": 4,
"5 Hearts": 5,
"6 Hearts": 6,
"7 Hearts": 7,
"8 Hearts": 8,
"9 Hearts": 9,
"10 Hearts": 10,
"J Hearts": 11,
"Q Hearts": 12,
"K Hearts": 13,
"A Hearts": 14,

"2 Diamonds": 2,
"3 Diamonds": 3,
"4 Diamonds": 4,
"5 Diamonds": 5,
"6 Diamonds": 6,
"7 Diamonds": 7,
"8 Diamonds": 8,
"9 Diamonds": 9,
"10 Diamonds": 10,
"J Diamonds": 11,
"Q Diamonds": 12,
"K Diamonds": 13,
"A Diamonds": 14,

"2 Clubs": 2,
"3 Clubs": 3,
"4 Clubs": 4,
"5 Clubs": 5,
"6 Clubs": 6,
"7 Clubs": 7,
"8 Clubs": 8,
"9 Clubs": 9,
"10 Clubs": 10,
"J Clubs": 11,
"Q Clubs": 12,
"K Clubs": 13,
"A Clubs": 14,

"2 Spades": 2,
"3 Spades": 3,
"4 Spades": 4,
"5 Spades": 5,
"6 Spades": 6,
"7 Spades": 7,
"8 Spades": 8,
"9 Spades": 9,
"10 Spades": 10,
"J Spades": 11,
"Q Spades": 12,
"K Spades": 13,
"A Spades": 14
}

let deck2 = {
"2 Hearts": 2,
"3 Hearts": 3,
"4 Hearts": 4,
"5 Hearts": 5,
"6 Hearts": 6,
"7 Hearts": 7,
"8 Hearts": 8,
"9 Hearts": 9,
"10 Hearts": 10,
"J Hearts": 11,
"Q Hearts": 12,
"K Hearts": 13,
"A Hearts": 14,

"2 Diamonds": 2,
"3 Diamonds": 3,
"4 Diamonds": 4,
"5 Diamonds": 5,
"6 Diamonds": 6,
"7 Diamonds": 7,
"8 Diamonds": 8,
"9 Diamonds": 9,
"10 Diamonds": 10,
"J Diamonds": 11,
"Q Diamonds": 12,
"K Diamonds": 13,
"A Diamonds": 14,

"2 Clubs": 2,
"3 Clubs": 3,
"4 Clubs": 4,
"5 Clubs": 5,
"6 Clubs": 6,
"7 Clubs": 7,
"8 Clubs": 8,
"9 Clubs": 9,
"10 Clubs": 10,
"J Clubs": 11,
"Q Clubs": 12,
"K Clubs": 13,
"A Clubs": 14,

"2 Spades": 2,
"3 Spades": 3,
"4 Spades": 4,
"5 Spades": 5,
"6 Spades": 6,
"7 Spades": 7,
"8 Spades": 8,
"9 Spades": 9,
"10 Spades": 10,
"J Spades": 11,
"Q Spades": 12,
"K Spades": 13,
"A Spades": 14
}

let player1cardPick = Object.entries(deck1)[Math.floor(Math.random()*Object.keys(deck1).length)];
let player1cardName = player1cardPick[Object.keys(player1cardPick)[0]];

let player1cardValue = player1cardPick[Object.keys(player1cardPick)[1]];

let player2cardPick = Object.entries(deck2)[Math.floor(Math.random()*Object.keys(deck2).length)];
let player2cardName = player2cardPick[Object.keys(player2cardPick)[0]];

let player2cardValue = player2cardPick[Object.keys(player2cardPick)[1]];

let wallet = 100;
let computer;
let challenger;

function warGame() {
    function greeting(){
        const greet = prompt("This is a game of War! Are you prepared for battle!?")
        if (greet === 'yes') {
            return alert("Let the battle Begin!");
        } else (greet === 'no')
            return alert("You Are not strong enough!! Goodbye!");
            
    }
    greeting()

    function startGame(){
        let start = prompt("Your starting balance will be $100 Dollars!\n Each bet will cost you $5 dollars.\n Is this understood?")
        if (start === 'yes') {
            return alert("Release the cards!!")
        } else (start === 'no')
            return alert("Goodbye!");
    }    

    console.log(startGame())

    function play() {
        function deal() {
            alert(`Computer draws: ${player1cardName}`)
            alert(`Challenger draws: ${player2cardName}`)
            computer = player1cardValue;
            challenger = player2cardValue;
        

            if (computer < challenger) {
                alert("Challenger Wins!");
                wallet += 5;
                return alert(`Your current winnings are $${wallet.toFixed(2)}`);
            
            } else if (computer > challenger) {
                alert("Challenger Loses!");
                wallet -= 5;
                return alert(`Your current winnings are $${wallet.toFixed(2)}`);
            } else if (computer == challenger)
                return alert("Its a tie");
                wallet += 0;
                return alert(`Your current winnings are $${wallet.toFixed(2)}`);
        }
        deal();
  

        const next = prompt("Would you like to play again?")
            if (next === "yes") {
                return deal();
                //alert("Another $100 dollars have been placed in your wallet!");
                // wallet += 100
                //alert(`Your current wallet is: $${wallet.toFixed(2)}\n`);
                //alert('\nNext Round!\n')
            } else if(next === "no")
                return alert(`Your final balance is: $${wallet.toFixed(2)}\n`);
        }
    play();
}
warGame();


