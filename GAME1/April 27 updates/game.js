document.addEventListener("DOMContentLoaded",()=> 
{
    //cards options
    const cardArray =[
    {
        name: "jackClubs",
        img: "images/JC.png"
    },
    {
        name: "jackClubs",
        img: "images/JC.png"
    },
    {
        name: "jackDiamonds",
        img: "images/JD.png" 
    },
    {
        name: "jackDiamonds",
        img: "images/JD.png" 
    },
    {
        name: "jackHearts",
        img: "images/JH.png" 
    },
    {
        name: "jackHearts",
        img: "images/JH.png" 
    },
    {
        name: "jackSpades",
        img: "images/JS.png" 
    },
    {
        name: "jackSpades",
        img: "images/JS.png" 
    },
    {
        name: "queenClubs",
        img: "images/QC.png"
    },
    {
        name: "queenClubs",
        img: "images/QC.png"
    },
    {
        name: "queenDiamonds",
        img: "images/QD.png" 
    },
    {
        name: "queenDiamonds",
        img: "images/QD.png" 
    },
    {
        name: "queenHearts",
        img: "images/QH.png" 
    },
    {
        name: "queenHearts",
        img: "images/QH.png" 
    },
    {
        name: "queenSpades",
        img: "images/QS.png" 
    },
    {
        name: "queenSpades",
        img: "images/QS.png" 
    },
    {
        name: "kingClubs",
        img: "images/KC.png"
    },
    {
        name: "kingClubs",
        img: "images/KC.png"
    },
    {
        name: "kingDiamonds",
        img: "images/KD.png" 
    },
    {
        name: "kingDiamonds",
        img: "images/KD.png" 
    },
    {
        name: "kingHearts",
        img: "images/KH.png" 
    },
    {
        name: "kingHearts",
        img: "images/KH.png" 
    },
    {
        name: "kingSpades",
        img: "images/KS.png" 
    },
    {
        name: "kingSpades",
        img: "images/KS.png" 
    }
    ]

    var shuffleDeck=function(){
    // Using the Fisher-Yates (Knuth) shuffle
    var currentIndex = cardArray.length
    , temporaryValue
    , randomIndex;
    // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
      // And swap it with the current element.
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
        }
    }

    shuffleDeck();
    console.log(cardArray);

    const grid = document.querySelector(".grid")
    var resultDisplay1 = document.querySelector("#result1")
    var resultDisplay2 = document.querySelector("#result2")
    var playerTurn = document.getElementById("currentPlayer")
    var cardsChosen = []
    var cardsChosenId = []
    var currentPlayer = 1
    var cardsWonPlayer1 = []
    var cardsWonPlayer2 = []

    // creating our board, create a loop to go through the cards array

    function createBoard(){
        for (let i=0; i < cardArray.length; i++) 
        {
            var card = document.createElement("img") //create a variable for each card
            card.setAttribute("src", "images/purple_back.png")
            card.setAttribute("data-id", i)
            //create an event listner for when the card is clicked on 
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }    
    createBoard()

    //function to flip card
    function flipCard() 
    {
        console.log("flipCard")
        
        var cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        console.log(cardsChosen)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 600)
        }
    }
 
    //check if cards matched
    function checkForMatch()
    {
        console.log("checkForMatch")
        var cards = document.querySelectorAll("img")
        var optionOneId = cardsChosenId[0]
        var optionTwoId = cardsChosenId[1]
        var cardsWonPlayer 
        // flag = true;
        
        if(currentPlayer ==1 ){
            cardsWonPlayer = cardsWonPlayer1
        }
            else{
                cardsWonPlayer = cardsWonPlayer2
            } 

            if(optionOneId == optionTwoId)
            {
                cards[optionOneId].setAttribute("src", "images/purple_back.png")
                cards[optionTwoId].setAttribute("src", "images/purple_back.png")
                alert("You have clicked the same image! Pick another card")
            }
            else if(cardsChosen[0] === cardsChosen[1])
            {
                alert("You win this pair! Go again!")
                cards[optionOneId].setAttribute("src", "images/blank.png")
                cards[optionTwoId].setAttribute("src", "images/blank.png")
                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionTwoId].removeEventListener('click', flipCard)
                cardsWonPlayer.push(cardsChosen) 
                checkScore()
            }
            else 
            {
                cards[optionOneId].setAttribute("src", "images/purple_back.png")
                cards[optionTwoId].setAttribute("src", "images/purple_back.png")
                alert ("Sorry! You lost this pair. Another player's turn now.")
            } 
        
        if(currentPlayer ==1 ){
               currentPlayer=2;
            }
             else{
                   currentPlayer=1;
                } 
        
        playerTurn.textContent = currentPlayer
        cardsChosen = []
        cardsChosenId=[]

    } 

    function checkScore(){
        if(cardsWonPlayer1.length === cardArray.length/4)
        {
        alert("Congratulations Player 1! You won!")
        return;
        }
        if(cardsWonPlayer2.length === cardArray.length/4)
        {
        alert("Congratulations Player 2! You won!")
        return;
        }
        if(cardsWonPlayer1.length===cardArray.length/4 && cardsWonPlayer2.length === cardArray.length/4)
        {
        alert("Congratulations to you both! It's a DRAW!")
        return;
        }

        resultDisplay1.textContent = cardsWonPlayer1.length *100
        resultDisplay2.textContent = cardsWonPlayer2.length *100  
    }
 
       
})
    
