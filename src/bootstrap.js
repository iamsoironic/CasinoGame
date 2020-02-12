


const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Player{
    constructor(name, money){
      this.name = name
      this.wallet = money
    }
  
  } 
  const player = new Player("Challenger", 100);
  console.log(`${player.name} => ${player.wallet}`)

  
function greeting(){
    const greet = prompt("This is a game of War! Are you prepared for battle!?")
    if (greet == 'yes') {
        return ("Let the battle Begin!");
    } else (greet == 'no')
        return alert("You Are not strong enough!! Goodbye!");
        
}
console.log(greeting())

function startGame(){
    let start = prompt("Your starting balance will be $100 Dollars!\n Each bet will cost you $5 dollars.\n Is this understood?")
    if (start == 'yes') {
        return ("Release the cards!!")
    } else ( start == 'no')
        return alert("Goodbye!");
}    

console.log(startGame())



  
  const valuePoints = {
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    10 : 10,
    "J" : 10,
    "Q" : 10,
    "K" : 10,
    "A" : 11
  }
  
  
  
  const deckShapes = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
  
  const randomNum = deck[Math.floor(Math.random()* deck.length)]
  const randomShape = deckShapes[Math.floor(Math.random()* deckShapes.length)]
  
  console.log(randomNum, randomShape)
  
  
  const deck2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  
  const deckShapes2 = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
  
  const randomNum2 = deck2[Math.floor(Math.random()* deck2.length)]
  const randomShape2 = deckShapes2[Math.floor(Math.random()* deckShapes2.length)]
  
  console.log(randomNum2, randomShape2)

function deal(){
    
    if (player.wallet < 5) {
        alert("You do not have enough to bet again!");
        alert(`Your current funds are $${player.wallet.toFixed(2)}`);
        alert("You have lost the battle!")
        playAgain = prompt("\nWould you like to play again? [ y / n ] ")
        if (playAgain == "y") {
            player.wallet = prompt("Another $100 dollars have been placed in your wallet!");
        } else (playAgain == "n");
            alert(`Thanks for playing! Cash out amout is - $${player.wallet.toFixed(2)}`)
        
    }
   
} 
            

    if (deck > deck2) {
        alert("The House Wins!");
        player.wallet -= 5;
        alert(`Your current winnings are $${player.wallet.toFixed(2)}`);
    } else if (deck < deck2) {
         alert("You Win!!");
         alert(`Your current winnings are $${player.wallet.toFixed(2)}`);
        player.wallet += 5;
        } else (deck == deck2);
            alert("Its a Tie!! Deal again");
            alert(`Your current winnings are $${player.wallet.toFixed(2)}`);
    

