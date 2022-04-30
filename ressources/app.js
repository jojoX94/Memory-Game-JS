const cardArray = [
  {
    name: 'Cherry',
    img: 'images/Cherry.png'
  },
  {
    name: 'Dog',
    img: 'images/Dog.png'
  },
  {
    name: 'Fire',
    img: 'images/Fire.png'
  },
  {
    name: 'Globe',
    img: 'images/Globe.png'
  },
  {
    name: 'Lion',
    img: 'images/Lion.png'
  },
  {
    name: 'Lock',
    img: 'images/Lock.png'
  },
  {
    name: 'Piano',
    img: 'images/Piano.png'
  },
  {
    name: 'Pizza',
    img: 'images/Pizza.png'
  },
  {
    name: 'Present',
    img: 'images/Present.png'
  },
  {
    name: 'Dolphin',
    img: 'images/Dolphin.png'
  },
  {
    name: 'Sunflower',
    img: 'images/Sunflower.png'
  },
  {
    name: 'Target',
    img: 'images/Target.png'
  },
  {
    name: 'Cherry',
    img: 'images/Cherry.png'
  },
  {
    name: 'Dog',
    img: 'images/Dog.png'
  },
  {
    name: 'Fire',
    img: 'images/Fire.png'
  },
  {
    name: 'Globe',
    img: 'images/Globe.png'
  },
  {
    name: 'Lion',
    img: 'images/Lion.png'
  },
  {
    name: 'Lock',
    img: 'images/Lock.png'
  },
  {
    name: 'Piano',
    img: 'images/Piano.png'
  },
  {
    name: 'Pizza',
    img: 'images/Pizza.png'
  },
  {
    name: 'Present',
    img: 'images/Present.png'
  },
  {
    name: 'Dolphin',
    img: 'images/Dolphin.png'
  },
  {
    name: 'Sunflower',
    img: 'images/Sunflower.png'
  },
  {
    name: 'Target',
    img: 'images/Target.png'
  },
]

cardArray.sort(() => 0.5 - Math.random() )

const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

const createBoard = () => {
  for (let i=0; i < cardArray.length;i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'ressources/images/Back.png')
    card.setAttribute('data-id', i)
    card.classList.add('card')
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', 'ressources/'+cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()