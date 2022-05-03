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
    card.classList.add('card-off')
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//flip your card
function flipCard() {
  new Audio('../ressources/audio/Card-flip-sound-effect.mp3').play()
  this.classList.toggle('card-click')
  this.classList.remove('card-off')
  this.classList.add('card-on')
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', 'ressources/'+cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

function checkForMatch () {
  const cards = document.querySelectorAll('.grid  img')
  console.log(cards)
  const choiceIdOne = cardsChosenId[0]
  const choiceIdTwo = cardsChosenId[1]
  if(choiceIdOne == choiceIdTwo) {
    new Audio('../ressources/audio/Fail-sound.mp3').play()
    cards[choiceIdOne].classList.remove('card-on')
    cards[choiceIdOne].classList.add('card-off')
    cards[choiceIdOne].setAttribute('src', 'ressources/images/Back.png')
  }
  else if(cardsChosen[0] === cardsChosen[1]) {
    new Audio('../ressources/audio/Level-up-sound-effect.mp3').play()
    resultDisplay.textContent++
    cards[choiceIdOne].setAttribute('src', 'ressources/images/white.png')
    cards[choiceIdTwo].setAttribute('src', 'ressources/images/white.png')
    cards[choiceIdOne].removeEventListener('click', flipCard)
    cards[choiceIdTwo].removeEventListener('click', flipCard)
  } else {
    new Audio('../ressources/audio/Fail-sound.mp3').play()
    cardsChosenId.forEach((id) => {
    cards[id].classList.remove('card-on')
    cards[id].classList.add('card-off')
    cards[id].setAttribute('src', 'ressources/images/Back.png')
    cards[id].setAttribute('src', 'ressources/images/Back.png')
    })

  }
  cardsChosen = []
  cardsChosenId = []
}

createBoard()
console.log(cardArray)