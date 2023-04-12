let cardDeck = [];

let suitMap = {
    D: 'diamonds',
    S: 'spades',
    H: 'hearts',
    C: 'clubs'
}

const multipleDecks = () => {
    for (let numOfDecks = 0; numOfDecks < 3; numOfDecks++) {
        cardDeck.concat(...buildDeck())
    }
    shuffle(cardDeck)
    console.log(cardDeck);
    console.log(cardDeck.length);
}

const buildDeck = () => {
    let deck = [];
    for (let suit in suitMap) {
        for (let points = 1; points <= 13; points++) {
            deck.push(createCardObj(points, suit))
        }
        return shuffle(deck);
    }
}

const createCardObj = (points, suit) => {
    let card = {
        points: points,
        suit: suit
    }
    let imgURL = "";

    if (points > 1 && points <= 10) {
        imgURL = `images/${points}_of_${suitMap[suit]}.png`
    }

    switch (points) {
        case 1:
            imgURL = `images/ace_of_${suitMap[suit]}.png`
            break;
        case 11:
            card.points = 10;
            imgURL = `images/jack_of_${suitMap[suit]}.png`
            break;
        case 12:
            card.points = 10;
            imgURL = `images/queen_of_${suitMap[suit]}.png`
            break;
        case 13:
            card.points = 10;
            imgURL = `images/king_of_${suitMap[suit]}.png`
            break;
    }
    card.imgURL = imgURL
    return card;
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

multipleDecks();