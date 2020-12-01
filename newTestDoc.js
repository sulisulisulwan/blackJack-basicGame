
// SPLIT ACE TEST DECK
//const deck = [' A of spades', ' A of diamonds',' A of spades', ' A of diamonds'];
//reserveDeck = [' 2 of spades', ' 2 of diamonds',' 2 of hearts', ' 2 of clubs', ' 3 of spades', ' 3 of diamonds', ' 3 of hearts', ' 3 of clubs', ' 4 of spades', ' 4 of diamonds', ' 4 of hearts', ' 4 of clubs', ' 5 of spades', ' 5 of diamonds', ' 5 of hearts', ' 5 of clubs', ' 6 of spades', ' 6 of diamonds', ' 6 of hearts', ' 6 of clubs', ' 7 of spades', ' 7 of diamonds', ' 7 of hearts', ' 7 of clubs', ' 8 of spades', ' 8 of diamonds', ' 8 of hearts', ' 8 of clubs', ' 9 of spades', ' 9 of diamonds', ' 9 of hearts', ' 9 of clubs', ' 10 of spades', ' 10 of diamonds', ' 10 of hearts', ' 10 of clubs', ' J of spades', ' J of diamonds', ' J of hearts', ' J of clubs', ' Q of spades', ' Q of diamonds', ' Q of hearts', ' Q of clubs', ' K of spades', ' K of diamonds', ' K of hearts', ' K of clubs'];


//ORIGINAL DECK SINGLE
//const deck = [' A of spades', ' A of diamonds', ' A of hearts', ' A of clubs', ' 2 of spades', ' 2 of diamonds',' 2 of hearts', ' 2 of clubs', ' 3 of spades', ' 3 of diamonds', ' 3 of hearts', ' 3 of clubs', ' 4 of spades', ' 4 of diamonds', ' 4 of hearts', ' 4 of clubs', ' 5 of spades', ' 5 of diamonds', ' 5 of hearts', ' 5 of clubs', ' 6 of spades', ' 6 of diamonds', ' 6 of hearts', ' 6 of clubs', ' 7 of spades', ' 7 of diamonds', ' 7 of hearts', ' 7 of clubs', ' 8 of spades', ' 8 of diamonds', ' 8 of hearts', ' 8 of clubs', ' 9 of spades', ' 9 of diamonds', ' 9 of hearts', ' 9 of clubs', ' 10 of spades', ' 10 of diamonds', ' 10 of hearts', ' 10 of clubs', ' J of spades', ' J of diamonds', ' J of hearts', ' J of clubs', ' Q of spades', ' Q of diamonds', ' Q of hearts', ' Q of clubs', ' K of spades', ' K of diamonds', ' K of hearts', ' K of clubs'];
//const reserveDeck = [' A of spades', ' A of diamonds', ' A of hearts', ' A of clubs', ' 2 of spades', ' 2 of diamonds',' 2 of hearts', ' 2 of clubs', ' 3 of spades', ' 3 of diamonds', ' 3 of hearts', ' 3 of clubs', ' 4 of spades', ' 4 of diamonds', ' 4 of hearts', ' 4 of clubs', ' 5 of spades', ' 5 of diamonds', ' 5 of hearts', ' 5 of clubs', ' 6 of spades', ' 6 of diamonds', ' 6 of hearts', ' 6 of clubs', ' 7 of spades', ' 7 of diamonds', ' 7 of hearts', ' 7 of clubs', ' 8 of spades', ' 8 of diamonds', ' 8 of hearts', ' 8 of clubs', ' 9 of spades', ' 9 of diamonds', ' 9 of hearts', ' 9 of clubs', ' 10 of spades', ' 10 of diamonds', ' 10 of hearts', ' 10 of clubs', ' J of spades', ' J of diamonds', ' J of hearts', ' J of clubs', ' Q of spades', ' Q of diamonds', ' Q of hearts', ' Q of clubs', ' K of spades', ' K of diamonds', ' K of hearts', ' K of clubs'];

//ALL ACES
//const deck = [' A of spades', ' A of diamonds', ' A of hearts', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs']
//const reserveDeck = [' A of spades', ' A of diamonds', ' A of hearts', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs', ' A of clubs']

//ALL KINGS
//const deck = [' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds']
//const reserveDeck = [' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds']

//KINGS AND ACES
const deck = [' K of diamonds', ' K of diamonds', ' K of diamonds', ' K of diamonds', ' A of spades', ' A of spades', ' A of spades', ' A of spades']

var hand1 = [];//Interface card values 
var hand2 = [];//Interface card values
var hand3 = [];//Interface card values
var hand4 = []; //Interface card values
var dealerHand = [];//Interface card values

var hand1InValues = []; //Background card values
var hand2InValues = []; //Background card values
var hand3InValues = []; //Background card calues
var hand4InValues = []; //Background card values
var dealerHandInValues = []; //Background card values

let quarantineAce1 = []; //Separates aces from the running total to allow their value to be redetermined 
let quarantineAce2 = [];//Separates aces for hand2
let quarantineAce3 = [];//Separates aces for hand3
var quarantineAce4 = [];//Separates aces for hand4
var dealerquarantineAce = [];//Separates aces for the dealer's hand.

var hand1Total; //Background running total.  Doesn't include values for aces as those are mutable
var hand2Total;
var hand3Total;
var hand4Total;
var bustDetermination;
var dealerHandTotal;

var hand1TotalDisplay; //Running total interface variable
var hand2TotalDisplay;
var hand3TotalDisplay;
var hand4TotalDisplay;
var dealerHandTotalDisplay;

var inTheSplitZone = false
var splitHappenedInThisRound = false
var splitPossible = false; //Determines whether or not 'split' will show up as a choice in window prompt.
var splitIdentifierToken = 1;
var dealtSplitHandOrForgoedAdditionalSplit = false;
var outOfSplits = false;
var doubledDown = false;
var bustedOnDoubleDown = false;
var bustNobust = [];
var handsPlaying;
var proceedToDealerTurn = false

var push = false;

var yourMoneyDisplay = document.getElementById("money-amount");

var hand1Bet;
var hand1BetElement = document.getElementById("hand1Bet");
var hand2Bet;
var hand2BetElement = document.getElementById("hand2Bet");
var hand3Bet;
var hand3BetElement = document.getElementById("hand3Bet");
var hand4Bet;
var hand4BetElement = document.getElementById("hand4Bet")

var hitButton = document.createElement("button");
var stayButton = document.createElement("button");
var doubleDownButton = document.createElement("button");
var splitButton = document.createElement("button");
var nextRoundButton = document.createElement("button");

var hand1ContentDisplay = document.getElementById("hand1-content");
var hand2ContentDisplay = document.getElementById("hand2-content");
var hand3ContentDisplay = document.getElementById("hand3-content");
var hand4ContentDisplay = document.getElementById("hand4-content");
var dealerHandContentDisplay = document.getElementById("dealer-hand-content");

var hand1Title = "hand1-title";
var hand2Title = "hand2-title";
var hand3Title = "hand3-title";
var hand4Title = "hand4-title";

var runningTotalNodeHand1 = document.getElementById("your-running-total-hand1");
var runningTotalNodeHand2 = document.getElementById("your-running-total-hand2");
var runningTotalNodeHand3 = document.getElementById("your-running-total-hand3");
var runningTotalNodeHand4 = document.getElementById("your-running-total-hand4");
var runningTotalNodeDealerHand = document.getElementById("dealer-running-total");

var yourMoney = 1000
var betAmount;
var bettingCounter = document.getElementById("submitBet");

yourMoneyDisplay.innerHTML = yourMoney;
bettingCounter.onclick = function () {submitBet()};

function submitBet() { 
    betAmount = document.getElementById("betAmount").value; 

    if (betAmount > yourMoney) {
        alert("You must bet an amount within the limits of your money. :)");
        return;
    } else if (betAmount < 5) {
        alert("You must reach the minimum bet to play");
    } else {
        yourMoney = yourMoney - betAmount;
        hand1Bet = betAmount;
        document.getElementById("money-amount").innerHTML = yourMoney;
        document.getElementById("betting-counter").innerHTML = "";
        document.getElementById("hand1Bet").innerHTML = "Bet: $" + hand1Bet;
        beginGame();
    }
};

function setUpBettingCounter() {
    document.getElementById("betting-counter").innerHTML = "<label for=\"betAmount\">Bet amount (minimum bet = $5):</label><input type=\"number\" id=\"betAmount\" name=\"betAmount\" min=\"5\">";
    var bettingCounter = document.createElement("button")
    bettingCounter.innerHTML = "Bet!";
    document.getElementById("betting-counter").appendChild(bettingCounter)
    bettingCounter.onclick = function () {submitBet()};
};

function beginGame() {
    var dealCardsButton = document.createElement("button");
    dealCardsButton.innerHTML = "Deal me in!";
    document.getElementById("Deal").appendChild(dealCardsButton);
    dealCardsButton.onclick = function() {
        dealNewHand();
    };
};

function checkDeck(deck, reserveDeck) {//before every hit, split, or double down a code checks if there are any cards left in the deck
    if (deck.length === 0) {
        //if no, the reserveDeck is duplicated into "deck" and the code continues
        deck = reserveDeck.slice(0, reserveDeck.length)
        alert("A new deck has begun ...fyi for all you card counters ;) ")
    };//if yes, the code continues as normal
};

function dealNewHand() { //Deals a fresh hand at the beginning of the round
    document.getElementById("Deal").innerHTML = "";
    var randomCard; 
    for (let i = 2; i > 0; i--) { 
    randomCard = Math.floor(Math.random() * deck.length);
    hand1.push(deck.splice(randomCard, 1));
    randomCard = Math.floor(Math.random() * deck.length);
    dealerHand.push(deck.splice(randomCard, 1));
    }
    console.log(hand1);
    console.log(dealerHand);
    hand1ContentDisplay.innerHTML = hand1;
    dealerHandContentDisplay.innerHTML = "The dealer shows:" + dealerHand[1];

    determineValue(hand1, hand1InValues);
    hand1Total = determineTotal(hand1InValues, quarantineAce1)
    hand1TotalDisplay = aceValueDetermination(quarantineAce1, hand1Total, hand1Bet, hand1BetElement) //sets player's running total after executing Ace value determination of their hand.
    runningTotalNodeHand1.innerHTML = hand1TotalDisplay
    determineValue(dealerHand, dealerHandInValues);
    dealerHandTotal = determineTotal(dealerHandInValues, dealerquarantineAce);
    dealerHandTotalDisplay = aceValueDetermination(dealerquarantineAce, dealerHandTotal, "It's the dealer");
    runningTotalNodeDealerHand.innerHTML = dealerHandTotalDisplay;

    if (dealerHandTotal === 21) {//if the dealer has blackJack on the deal, player loses immediately unless they have Black jack themselves, continue to next round
        if (hand1Total === 21) {
                alert("You have Black Jack!  Click 'okay' to see the dealer's card!")
            dealerHandContentDisplay.innerHTML = dealerHand;
            hand1BetElement.innerHTML = "Push. $" + hand1Bet; 
            yourMoneyDisplay.innerHTML = yourMoney + hand1Bet;
            document.get
            nextRoundTurnAround;
        } else {
            dealerHandContentDisplay.innerHTML = dealerHand;
                alert("Dealer has 21.  God damnit!  You lose $" + hand1Bet + " on this hand.")
            hand1BetElement.innerHTML = "Dealer Blackjack.  You lose $" + hand1Bet + " on this hand.";
            nextRoundTurnAround;  
        };
    };
    if (hand1Total === 21 & dealerHandTotal !== 21) {//if player has 21 on the deal and dealer does not, dealer pays 3 to 2 on bet and continue to next round
            alert("You have Black Jack!  Click 'okay' to see the dealer's card!")
        dealerHandContentDisplay.innerHTML = dealerHand;
            alert("YOU WIN!  Payout is 3:2!  Woohoo!");
        hand1BetElement.innerHTML = "Black Jack!  3:2 on $" + hand1Bet + ": " + (hand1Bet * 3) / 2;
        hand1Bet = (hand1Bet * 3) / 2;
        yourMoney = yourMoney + hand1Bet;
        yourMoneyDisplay.innerHTML = "$ " + yourMoney;
        nextRoundTurnAround;
    };
    firstHittingRound(hand1, hand1InValues)
    playerChoice();
};

function determineValue(hand, handInValues) { //Refreshes the determination of card values for backend use.  Aces remain as a string ' A ' to be quarantined and determined later.
    for (let i = 0; i < handInValues.length; i) {//Refreshes handInValues
        handInValues.pop();
    };
    var card
    for (let j = 0; j < hand.length; j++) {
        card = hand[j].toString()
        card = card.substr(0, 3)
        if (card === ' J ' || card === ' Q ' || card === ' K ') {
            card = 10
        } else if (card !== ' A ') {
            card = Number(card)
        }
        handInValues.push(card);
    };
    return
};

function determineTotal(hand, aceQuar) { //Refreshes the hand total minus the aces.  Aces are quarantined out in this function.
    let total = 0;
    for (let i = 0; i < aceQuar.length; i) {//Refreshes aceQuar
        aceQuar.pop();
    };
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] === ' A ') {
            aceQuar.push(hand.splice(i, 1));
            i = i - 1;
        } else {
            total = total + hand[i];
        };
    };
    return total; 
};

function aceValueDetermination(aceQuar, handTotal, handBet, handBetElement) {//Ace values are determined as either 1 or 11 depending upon hand1Total. 
    if (aceQuar.length === 0) {
        y = 0;
        if (handTotal < 21) {
            x = 2
        } else if (handTotal === 21) {
            x = 3
        } else {
            x = 4
        };
    } else if (aceQuar.length === 1) { //where (x = case; y = total value of aces equaling 1)
        y = 1;
        if  (handTotal <= 9) {
            x = 1;
        } else if (handTotal >= 11 & handTotal <= 19) {
            x = 2;
        } else if (handTotal === 10 || handTotal === 20) {
            x = 3;
        } else {
            x = 4;
        }
    } else if (aceQuar.length === 2) {
        y = 2; 
        if (handTotal <= 8) {
            x = 1;
        } else if (handTotal >= 10 & handTotal <= 18) {
            x = 2;
        } else if (handTotal === 9 || handTotal === 19) {
            x = 3
        } else {
            x = 4
        };
    } else if (aceQuar.length === 3) {
        y = 3;
        if (handTotal <= 7) {
            x = 1;
        } else if (handTotal >= 9 & handTotal <= 17) {
            x = 2;
        } else if (handTotal === 8 || handTotal === 18) {
            x = 3
        } else {
            x = 4
        };
    } else if (aceQuar.length === 4) {
        y = 4
        if (handTotal <= 6) {
            x = 1
        } else if (handTotal >= 8 & handTotal <= 16) {
            x = 2
        } else if (handTotal === 7 || handTotal === 17) {
            x = 3
        } else {
            x = 4
        };
    };
    switch (x) {
        case 1: 
            if (handBet === "It's the dealer") {
            totalDisplay = 'Total is either ' + (handTotal + y) + ' or ' + (handTotal + 11 + (y - 1)) + '<br><br>';
            } else {
            totalDisplay = 'Total is either ' + (handTotal + y) + ' or ' + (handTotal + 11 + (y - 1)) + '<br><br>';
            bustDetermination = handTotal + 11 + (y - 1);
            };
            break;
        case 2:
            if (handBet === "It's the dealer") {
                totalDisplay = 'Total is ' + (handTotal + y);
            } else {
            totalDisplay = 'Total is ' + (handTotal + y);
            bustDetermination = handTotal + y
            };
            break;
        case 3:
            if (handBet === "It's the dealer") {
                dealerHandTotal = 21
                totalDisplay = 'Total is 21.' + '<br><br>';
            } else {
                if (inTheSplitZone === false) {
                    hand1Total = 21
                } else if (splitIdentifierToken === 4) {
                    hand4Total = 21
                } else if (splitIdentifierToken === 3) {
                    hand3Total = 21
                } else if (splitIdentifierToken === 2) {
                    hand2Total = 21
                };
            totalDisplay = 'You\'ve hit 21!' + '<br><br>';
            bustDetermination = 21
            };
            break;
        case 4:
            if (handBet === "It's the dealer") {
                totalDisplay = 'Total is ' + (handTotal + y) + '.  Dealer BUSTS!  HELL YEH!';
            } else {
                totalDisplay = 'Total is ' + (handTotal + y) + '.';
                bustDetermination = handTotal + y;
                if (inTheSplitZone === false) {
                    bust(handBet);
                } else {
                    bustOnSplit(handBet, handBetElement);
                };            
            };
            break;
    };
    return totalDisplay;
};

function firstHittingRound(hand, handInValues) {//allows browser to load elements and prepares conditions to bring up choices for player
    var card1
    var card2
    if (hand.length === 2) {//This hand has NO ACES
    card1 = hand[0].toString();
    card1 = card1.substr(0, 3);
    card2 = hand[1].toString();
    card2 = card2.substr(0, 3);
        if (card1 === card2) {//this hand has a splitting pair.
            splitPossible = true;
        } else {//this hand doesn not have a splitting pair
            splitPossible = false;
        };
    } else if (hand.length === 1) {//This hand has 1 ACE
        splitPossible = false;
    } else if (hand.length === 0) { //This hand has 2 ACES
        splitPossible = true;
    }; 
};

function playerChoice() {//stops the round if the player busts.  creates next round button.
    if (bustDetermination > 21) {
        nextRoundTurnAround;
    } else if (bustDetermination === 21) {
        if (doubledDown === true) {
            document.getElementById("your-running-total-hand1").innerHTML = "YOU REACHED 21!";
            dealerTurn()
        } else {
            document.getElementById("your-running-total-hand1").innerHTML = "YOU REACHED 21!";
            stayButton.innerHTML = "STAY";
            document.getElementById("stay-button").appendChild(stayButton);
            stayButton.onclick = function() {
                splitPossible = false
                document.getElementById("player-choices-textbox").innerHTML = "";
                document.getElementById("player-chose").innerHTML = "You decided to STAY";
                clearPlayerActionArea();
                dealerTurn()
            };
        }
    } else {//reveals player action buttons
        if (doubledDown === true) {
            dealerTurn();
        } else {
            document.getElementById("player-choices-textbox").innerHTML = "Would you like to hit, stay, double down, or split?"
            hitButton.innerHTML = "HIT";
            document.getElementById("hit-button").appendChild(hitButton);
            stayButton.innerHTML = "STAY";
            document.getElementById("stay-button").appendChild(stayButton);
            doubleDownButton.innerHTML = "DOUBLE DOWN";
            document.getElementById("double-down-button").appendChild(doubleDownButton);
            if (splitPossible === true) {//This reveals the split button
                splitButton.innerHTML = "SPLIT";
                document.getElementById("split-button").appendChild(splitButton);
                splitButton.onclick = function() {
                    document.getElementById("player-chose").innerHTML = "You decided to SPLIT";
                    splitZone();
                };
            };
        };
        hitButton.onclick = function() {
            document.getElementById("player-choices-textbox").innerHTML = "";
            document.getElementById("player-chose").innerHTML = "You decided to HIT";
            hit(hand1, hand1InValues, hand1Total, quarantineAce1, hand1TotalDisplay, runningTotalNodeHand1, hand1ContentDisplay, hand1Bet, hand1BetElement)
        }; //i learned a valuable lesson here about onclick.  you must let it equal a function which calls another function rather than let it equal to the function you want to call.  this is because letting it equal the function you want to call will reassign the button to the value that that function returns.
        stayButton.onclick = function() {
            splitPossible = false
            document.getElementById("player-choices-textbox").innerHTML = "";
            document.getElementById("player-chose").innerHTML = "You decided to STAY";
            clearPlayerActionArea();
            dealerTurn()
        };
        doubleDownButton.onclick = function() {
            if ((yourMoney - hand1Bet) < 0) {
                alert("You don't have enough money to double down!")
                return;
            } else {
            document.getElementById("player-choices-textbox").innerHTML = "";
            document.getElementById("player-chose").innerHTML = "You decided to DOUBLE DOWN";
            doubleDown(hand1, hand1InValues, hand1Total, quarantineAce1, hand1TotalDisplay, runningTotalNodeHand1, hand1ContentDisplay, hand1Bet, hand1BetElement)
            };
        };
        splitButton.onclick = function() {
            if ((yourMoney - hand1Bet) < 0) {
                alert("You don't have enough money to split!")
                return;
            } else {
            handsPlaying = 2 //eventually used for bustNoBust which helps determine if all hands were busted in the splitZone which in turn determines if, after the final hand is played, the round continues to the dealer or starts anew.
            document.getElementById("player-choices-textbox").innerHTML = "";
            document.getElementById("player-chose").innerHTML = "You decided to SPLIT";
            splitIdentifierToken++
            hand2Bet = hand1Bet; 
            yourMoney = yourMoney - hand2Bet;
            document.getElementById("money-amount").innerHTML = yourMoney;
            inTheSplitZone = true  
            splitZone()
            };
        };
    };
    return;
};

function hit(hand, handInValues, handTotal, aceQuar, handTotalDisplay, runningTotalNodeHand, handContentDisplay, handBet, handBetElement) {
    splitPossible = false
    clearPlayerAceQuarantines();

    randomCard = Math.floor(Math.random() * deck.length);
    hand.push(deck.splice(randomCard, 1));
    handContentDisplay.innerHTML = hand1;
    determineValue(hand, hand1InValues);
    
    handTotal = determineTotal(handInValues, aceQuar)
    handTotalDisplay = aceValueDetermination(aceQuar, handTotal, handBet, handBetElement) //sets player's running total after executing Ace value determination of their hand.
    document.getElementById(runningTotalNodeHand).innerHTML = handTotalDisplay        
    clearPlayerActionArea();
    playerChoice()
};

function doubleDown(hand, handInValues, handTotal, aceQuar, handTotalDisplay, runningTotalNodeHand, handContentDisplay, handBet, handBetElement) {
    splitPossible = false

    doubledDown = true;
    yourMoney = yourMoney - handBet;
    document.getElementById("money-amount").innerHTML = yourMoney;
    handBet = 2 * handBet;
    handBetElement.innerHTML = "$" + handBet;

    randomCard = Math.floor(Math.random() * deck.length);
    hand.push(deck.splice(randomCard, 1));
    handContentDisplay.innerHTML = hand;
    determineValue(hand, handInValues);
    
    handTotal = determineTotal(handInValues, aceQuar)
    handTotalDisplay = aceValueDetermination(aceQuar, handTotal, handBet, handBetElement) //sets player's running total after executing Ace value determination of their hand.
    document.getElementById(runningTotalNodeHand).innerHTML = handTotalDisplay        
    clearPlayerActionArea();
    playerChoice();
};

function splitZone() {
    if (splitIdentifierToken === 0) {
        for (let i = 0; i < handsPlaying; i++) {//Check for 'N' using for loop
            if (bustNobust[i] === 'N') {
                proceedToDealerTurn = true
            };
        };
        if (proceedToDealerTurn === true) {
            dealerTurn();
        } else {
            nextRoundTurnAround();
            return;
        }
    };
    if (splitIdentifierToken === 1) {
        dealtSplitHandOrForgoedAdditionalSplit = false
        hitOnSplit(hand1, hand1InValues, quarantineAce1, hand1Bet, hand1BetElement);
        firstHittingRound(hand1, hand1InValues);
        playerChoiceOnSplit(hand1, hand1InValues, quarantineAce1, hand1Bet, hand1BetElement, hand1Total, hand1Total);
    };
    if (splitIdentifierToken === 2) {
        document.getElementById("hand2Bet").innerHTML = "Bet: $" + hand2Bet;

        if (dealtSplitHandOrForgoedAdditionalSplit === true) {
            if (hand2.length < 2) {
                hitOnSplit(hand2, hand2InValues, quarantineAce2, hand2Bet, hand2BetElement)
                playerChoiceOnSplit(hand2, hand2InValues, quarantineAce2, hand2Bet, hand2BetElement, hand2Total, hand2Total);
            } else {
                playerChoiceOnSplit(hand2, hand2InValues, quarantineAce2, hand2Bet, hand2BetElement, hand2Total);  
            };
        } else {
            splitPossible = false
            clearPlayerAceQuarantines();
        
            document.getElementById("hand1-title").innerHTML = "<p><h4>Hand 1:</h4></p>";
            document.getElementById("hand2-title").innerHTML = "<p><h4>Hand 2:</h4></p>";
            document.getElementById("runningtotal-hand1-TITLE").innerHTML = "<p><h4>Hand 1 Total:</h4></p>";
            document.getElementById("runningtotal-hand2-TITLE").innerHTML = "<p><h4>Hand 2 Total:</h4></p>";
            
            hand2 = hand1.pop()//Splits the hand up into two hands
        
            hand1ContentDisplay.innerHTML = hand1;//Displays hand1 and splithand
            hand2ContentDisplay.innerHTML = hand2

            determineValue(hand1, hand1InValues);
            hand1Total = determineTotal(hand1InValues, quarantineAce1)
            hand1TotalDisplay = aceValueDetermination(quarantineAce1, hand1Total, hand1Bet, hand1BetElement);
            runningTotalNodeHand1.innerHTML = hand1TotalDisplay
            
            hitOnSplit(hand2, hand2InValues, quarantineAce2, hand2Bet, hand2BetElement);
            if (dealtSplitHandOrForgoedAdditionalSplit === true) {
                outOfSplits = true;
                splitZone();
            } else {
                firstHittingRound(hand2, hand2InValues);
                dealtSplitHandOrForgoedAdditionalSplit = true 
                playerChoiceOnSplit(hand2, hand2InValues, quarantineAce2, hand2Bet, hand2BetElement);
            };
        };
    } else if (splitIdentifierToken === 3) {
        hand3Bet = hand1Bet
        document.getElementById("hand3Bet").innerHTML = "Bet: $" + hand3Bet;

        if (dealtSplitHandOrForgoedAdditionalSplit === true){
            outOfSplits = true
            if (hand3.length < 2) {
                hitOnSplit(hand3, hand3InValues, quarantineAce3, hand3Bet, hand3BetElement)
                playerChoiceOnSplit(hand3, hand3InValues, quarantineAce3, hand3Bet, hand3BetElement, hand3Total);  
            } else {
                playerChoiceOnSplit(hand3, hand3InValues, quarantineAce3, hand3Bet, hand3BetElement, hand3Total); 
            };
        } else {
            document.getElementById(hand3Title).innerHTML = "<p><h4>Hand 3:</h4></p>";
            document.getElementById("runningtotal-hand3-TITLE").innerHTML = "<p><h4>Hand 3 Total:</h4></p>";
            yourMoney = yourMoney - hand3Bet;
            document.getElementById("money-amount").innerHTML = yourMoney;

            hand3 = hand2.pop();

            hand2ContentDisplay.innerHTML = hand2
            hand3ContentDisplay.innerHTML = hand3

            determineValue(hand2, hand2InValues);
            hand2Total = determineTotal(hand2InValues, quarantineAce2)
            hand2TotalDisplay = aceValueDetermination(quarantineAce2, hand2Total, hand2Bet, hand2BetElement); 
            runningTotalNodeHand2.innerHTML = hand2TotalDisplay

            hitOnSplit(hand3, hand3InValues, quarantineAce3, hand3Bet, hand3BetElement);
            if (dealtSplitHandOrForgoedAdditionalSplit === true) {
                outOfSplits = true
                splitZone();
            } else {
                firstHittingRound(hand3, hand3InValues);
                dealtSplitHandOrForgoedAdditionalSplit = true
                playerChoiceOnSplit(hand3, hand3InValues, quarantineAce3, hand3Bet, hand3BetElement, hand3Total);
            };
        };
    } else if (splitIdentifierToken === 4) {
        hand4Bet = hand1Bet
        document.getElementById("hand4Bet").innerHTML = "Bet: $" + hand4Bet;
        if (dealtSplitHandOrForgoedAdditionalSplit === true) {
            playerChoiceOnSplit(hand4, hand4InValues, quarantineAce4, hand4Bet, hand4BetElement, hand4Total)
        } else {
            document.getElementById(hand4Title).innerHTML = "<p><h4>Hand 4:</h4></p>";
            document.getElementById("runningtotal-hand4-TITLE").innerHTML = "<p><h4>Hand 4 Total:</h4></p>";

            yourMoney = yourMoney - hand4Bet;
            document.getElementById("money-amount").innerHTML = yourMoney;

            hand4 = hand3.pop();

            hand3ContentDisplay.innerHTML = hand3
            hand4ContentDisplay.innerHTML = hand4

            determineValue(hand3, hand3InValues);
            hand3Total = determineTotal(hand3InValues, quarantineAce3)
            hand3TotalDisplay = aceValueDetermination(quarantineAce3, hand3Total, hand3Bet, hand3BetElement);
            runningTotalNodeHand3.innerHTML = hand3TotalDisplay

            hitOnSplit(hand4, hand4InValues, quarantineAce4, hand4Bet, hand4BetElement);
            firstHittingRound(hand4, hand4InValues);
            dealtSplitHandOrForgoedAdditionalSplit = true
            //Below determines if the split was on an Ace
            let card = hand1[0].toString();
            card = card.substr(0, 3);
            if (hand1[0] === ' A ') {
                outofSplits = true
                //NO MORE HITTING.  HIT EACH HAND AND DETERMINE RESULTS!  SEND TO processSplitResults()
            } else {
                outOfSplits = true
                playerChoiceOnSplit(hand4, hand4InValues, quarantineAce4, hand4Bet, hand4BetElement, hand4Total);
            };
        };
    };
    return
};

function playerChoiceOnSplit(hand, handInValues, aceQuar, handBet, handBetElement, handTotal) {
    if (handTotal > 21) {
        bustOnSplit(handBet, handBetElement);
        splitZone();
        return;
    } else if (handTotal === 21) {
        handBetElement.innerHTML = "YOU REACHED 21!";
        stayButton.innerHTML = "STAY";
        document.getElementById("stay-button").appendChild(stayButton);
    } else {//reveals player action buttons

        document.getElementById("player-choices-textbox").innerHTML = "Would you like to hit, stay, double down, or split?"
        hitButton.innerHTML = "HIT";
        document.getElementById("hit-button").appendChild(hitButton);
        stayButton.innerHTML = "STAY";
        document.getElementById("stay-button").appendChild(stayButton);
        doubleDownButton.innerHTML = "DOUBLE DOWN";
        document.getElementById("double-down-button").appendChild(doubleDownButton);
    };
    if (splitPossible === true & outOfSplits === false) {//This reveals the split button
        splitButton.innerHTML = "SPLIT";
        document.getElementById("split-button").appendChild(splitButton);
    };
    hitButton.onclick = function() {
        document.getElementById("player-choices-textbox").innerHTML = "";
        document.getElementById("player-chose").innerHTML = "You decided to HIT";
        hitOnSplit(hand, handInValues, aceQuar, handBet, handBetElement);
        clearPlayerActionArea();
        splitZone();
    }; 
    stayButton.onclick = function() {
        splitPossible = false
        bustNobust.push('N')//there was no bust on this hand.  The round will continue to dealerTurn() after all hands played.
        handBetElement.innerHTML = "Bet: $" + handBet + " STAY";
        document.getElementById("player-choices-textbox").innerHTML = "";
        document.getElementById("player-chose").innerHTML = "You decided to STAY";
        splitIdentifierToken--
        clearPlayerActionArea();
        splitZone();
    };  
    doubleDownButton.onclick = function() {
        if ((yourMoney - hand1Bet) < 0) {
            alert("You don't have enough money to double down!")
            return;
        } else {
        document.getElementById("player-choices-textbox").innerHTML = "";
        document.getElementById("player-chose").innerHTML = "You decided to DOUBLE DOWN";
        doubleDownOnSplit(hand, handInValues, aceQuar, handBet, handBetElement)
        clearPlayerActionArea();
        splitZone();
        };
    };
    splitButton.onclick = function() {
        if ((yourMoney - hand1Bet) < 0) {
            alert("You don't have enough money to split!")
            return;
        } else {
        handsPlaying++ //for bustNoBust. 
        document.getElementById("player-choices-textbox").innerHTML = "";
        document.getElementById("player-chose").innerHTML = "You decided to SPLIT";
        splitIdentifierToken++ 
        dealtSplitHandOrForgoedAdditionalSplit = false;  
        clearPlayerActionArea();
        splitZone();
        };
    };
    return;
};

function hitOnSplit (hand, handInValues, aceQuar, handBet, handBetElement) {
    
    var handContentDisplay = tokenHandContentDisplay()
    var runningTotalNodeDisplay = tokenRunningTotalDisplay()
    
    splitPossible = false
    clearPlayerAceQuarantines()
    randomCard = Math.floor(Math.random() * deck.length);
    hand.push(deck.splice(randomCard, 1));
    handContentDisplay.innerHTML = hand;
    determineValue(hand, handInValues);
    
    handTotal = determineTotal(handInValues, aceQuar)
    handTotalDisplay = aceValueDetermination(aceQuar, handTotal, handBet, handBetElement) //sets player's running total after executing Ace value determination of their hand.
    document.getElementById(runningTotalNodeDisplay).innerHTML = handTotalDisplay
    return
};

function doubleDownOnSplit (hand, handInValues, aceQuar, handBet, handBetElement) {
    
    var handContentDisplay = tokenHandContentDisplay()
    var runningTotalNodeDisplay = tokenRunningTotalDisplay()
    
    splitIdentifierToken--
    splitPossible = false
    doubledDown = true;

    yourMoney = yourMoney - handBet;
    document.getElementById("money-amount").innerHTML = yourMoney;
    handBet = 2 * handBet;
    handBetElement.innerHTML = "$" + handBet;
    
    randomCard = Math.floor(Math.random() * deck.length);
    hand.push(deck.splice(randomCard, 1));
    handContentDisplay.innerHTML = hand;
    
    determineValue(hand, handInValues);
    handTotal = determineTotal(handInValues, aceQuar)
    handTotalDisplay = aceValueDetermination(aceQuar, handTotal, handBet, handBetElement) 
    document.getElementById(runningTotalNodeDisplay).innerHTML = handTotalDisplay
    outOfSplits = true;
    if (bustedOnDoubleDown === false) {
        bustNobust.push('N')//place at end of Stay or successful double down
    };
    return; 
};

function bust(handBet) {
    document.getElementById(hand1BetElement).innerHTML = "YOU BUSTED!  You lose $" + handBet + " on this hand.";
    handBet = 0
    document.getElementById("player-choices-textbox").innerHTML = "";
    clearPlayerActionArea();
    nextRoundTurnAround()
};

function bustOnSplit(handBet, handBetElement) {
    var display = handBetElement
    display.innerHTML = "YOU BUSTED! You lose $" + handBet +" on this hand.";
    dealtSplitHandOrForgoedAdditionalSplit = true;
    handBet = 0
    bustNobust.push('B')//place at end of bustOnSplit function
    if (doubledDown === false) {
        splitIdentifierToken--;
        return;
    } else {
        doubledDown = false;
        bustedOnDoubleDown = true;//for bustNobust
        return;
    };
    return;
};

function tokenRunningTotalDisplay() {
    switch (splitIdentifierToken) {
        case 1:
            return runningTotalNodeHand1
        case 2:
            return runningTotalNodeHand2
            case 3:
                return runningTotalNodeHand3
        case 4:
            return runningTotalNodeHand4
    };
};

function tokenHandContentDisplay() {
    switch (splitIdentifierToken) {
        case 1:
            return hand1ContentDisplay
            case 2:
                return hand2ContentDisplay
                case 3:
                    return hand3ContentDisplay
                    case 4:
                        return hand4ContentDisplay
                    };
                };
function processInitialSplitResults() {
    //NEEDS TO TAKE INTO CONSIDERING ANY LOSSES FROM BUSTNG BEFORE DEALER TURN
    hand1Bet
    hand2Bet
    hand3Bet
    hand4Bet
    dealerTurn(); 
};


function win() {
    document.getElementById("result").innerHTML = "YOU WIN!";
    //ADD MONEY WIN HERE
    nextRoundTurnAround()   
}

function nextRoundTurnAround() {
    nextRoundButton.innerHTML = "Go to next betting round";
    document.getElementById("next-round").appendChild(nextRoundButton);
    nextRoundButton.onclick = function() {
        clearHands(hand1, dealerHand, quarantineAce1, quarantineAce2, quarantineAce3, quarantineAce4, dealerquarantineAce, hand2, hand3, hand4, hand1InValues, dealerHandInValues, hand2InValues, hand3InValues, hand4InValues)
        clearTitlesVariablesEtc();
        setUpBettingCounter();
    };
};

function dealerTurn() {
    document.getElementById("dealer-turn-button").innerHTML = "Dealer Button turns on here!";
};

function clearHands(hand1, dealerHand, quarantineAce1, quarantineAce2, quarantineAce3, quarantineAce4, dealerquarantineAce, hand2, hand3, hand4, hand1InValues, dealerHandInValues, hand2InValues, hand3InValues, hand4InValues) {//discards all cards both interface and backend for the next round
    for (let i = 0; i < hand1.length; i) {//Refreshes handInValues
        hand1.pop();
    };
    for (let i = 0; i < hand1InValues.length; i) {//Refreshes handInValues
        hand1InValues.pop();
    };
    for (let i = 0; i < hand2.length; i) {//Refreshes handInValues
        hand2.pop();
    };
    for (let i = 0; i < hand2InValues.length; i) {//Refreshes handInValues
        hand2InValues.pop();
    };
    for (let i = 0; i < hand3.length; i) {//Refreshes handInValues
        hand3.pop();
    };
    for (let i = 0; i < hand3InValues.length; i) {//Refreshes handInValues
        hand3InValues.pop();
    };
    for (let i = 0; i < hand4.length; i) {//Refreshes handInValues
        hand4.pop();
    };
    for (let i = 0; i < hand4InValues.length; i) {//Refreshes handInValues
        hand4InValues.pop();
    };
    for (let i = 0; i < dealerquarantineAce.length; i) {//Refreshes handInValues
        dealerquarantineAce.pop();
    };
    clearPlayerAceQuarantines();
    whichHandSplitFrom = 0;
};

function clearPlayerAceQuarantines() {
    for (let i = 0; i < quarantineAce1.length; i) {//Refreshes handInValues
        quarantineAce1.pop();
    };
    for (let i = 0; i < quarantineAce2.length; i) {//Refreshes handInValues
        quarantineAce2.pop();
    };
    for (let i = 0; i < quarantineAce3.length; i) {//Refreshes handInValues
        quarantineAce3.pop();
    };
    for (let i = 0; i < quarantineAce4.length; i) {//Refreshes handInValues
        quarantineAce4.pop();
    };           
};

function clearPlayerActionArea() {
    document.getElementById("hit-button").innerHTML = "";
    document.getElementById("stay-button").innerHTML = "";
    document.getElementById("double-down-button").innerHTML = "";
    document.getElementById("split-button").innerHTML = "";
    document.getElementById("player-choices-textbox").innerHTML = "";
};

function clearTitlesVariablesEtc() {
    document.getElementById("hand1-title").innerHTML = "<p><h4>Your hand:</h4></p>";
    document.getElementById("hand2-title").innerHTML = "";
    document.getElementById("hand3-title").innerHTML = "";
    document.getElementById("hand4-title").innerHTML = "";
    document.getElementById("hand1-content").innerHTML = "";
    document.getElementById("hand2-content").innerHTML = "";
    document.getElementById("hand3-content").innerHTML = "";
    document.getElementById("hand4-content").innerHTML = "";
    document.getElementById("hand1Bet").innerHTML = "";
    document.getElementById("hand2Bet").innerHTML = "";
    document.getElementById("hand3Bet").innerHTML = "";
    document.getElementById("hand4Bet").innerHTML = "";
    document.getElementById("runningtotal-hand1-TITLE").innerHTML = "";
    document.getElementById("runningtotal-hand2-TITLE").innerHTML = "";
    document.getElementById("runningtotal-hand3-TITLE").innerHTML = "";
    document.getElementById("runningtotal-hand4-TITLE").innerHTML = "";
    document.getElementById("your-running-total-hand1").innerHTML = "";
    document.getElementById("your-running-total-hand2").innerHTML = "";
    document.getElementById("your-running-total-hand3").innerHTML = "";
    document.getElementById("your-running-total-hand4").innerHTML = "";
    document.getElementById("next-round").innerHTML = "";
    document.getElementById("dealer-hand-content").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("player-chose").innerHTML = "";
    hand1Total = 0;
    hand2Total = 0;
    hand3Total = 0;
    hand4Total = 0;
    bustDetermination = 0;
    dealerHandTotal = 0;
    hand1TotalDisplay = 0;
    hand2TotalDisplay = 0;
    hand3TotalDisplay = 0;
    hand4TotalDisplay = 0;
    dealerHandTotalDisplay = 0;
    splitHappenedInThisRound = false
    splitPossible = false; 
    splitIdentifierToken = 1;
    dealtSplitHandOrForgoedAdditionalSplit = false;
    outOfSplits = false;
    doubledDown = false;
    inTheSplitZone = false;
    bustedOnDoubleDown = false;
    bustNobust = [];
    handsPlaying;
    proceedToDealerTurn = false;
};