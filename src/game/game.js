let game = {
  lockMode: false,
  firstCard: null,
  secondCard: null,

  icons: [
    "cat",
    "baleia",
    "dog",
    "jacare",
    "rato",
    "girafa",
    "leao",
    "raposa",
    "tartaruga",
    "elefante",
  ],

  setCard: function (id) {
    let card = this.cards.filter((card) => card.id === id)[0];

    if (card.flipped || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped = true;
      this.lockMode = true;
      return true;
    }
  },

  checkMatch: function () {
    if (!this.firstCard || !this.secondCard) {
      return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  unflipCard: function () {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
  },

  checkGameOver() {
    return this.cards.filter((card) => !card.flipped).length === 0;
  },

  cards: null,

  //Criando os ícones
  createCardFromIcons: function () {
    this.cards = [];

    this.icons.forEach((icon) => {
      this.cards.push(this.createPairFromIcons(icon));
    });
    this.cards = this.cards.flatMap((pair) => pair);
    this.mistureCards();
    return this.cards;
  },

  //Criando os pares dos ícones
  createPairFromIcons: function (icon) {
    return [
      {
        id: this.createIdWidthIcons(icon),
        icon: icon,
        flipped: false,
      },
      {
        id: this.createIdWidthIcons(icon),
        icon: icon,
        flipped: false,
      },
    ];
  },

  createIdWidthIcons: function (icon) {
    return icon + parseInt(Math.random() * 1000);
  },

  mistureCards: function () {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[randomIndex], this.cards[currentIndex]] = [
        this.cards[currentIndex],
        this.cards[randomIndex],
      ];
    }
  },

  flipCard: function (cardId, gameOverCallBack, onMatchCard) {
    if (this.setCard(cardId)) {
      if (this.secondCard) {
        if (this.checkMatch()) {
          this.clearCards();

          setTimeout(() => {
            if (this.checkGameOver()) {
              gameOverCallBack();
            }
          }, 1000);
        } else {
          setTimeout(() => {
            this.unflipCard();
            onMatchCard();
          }, 1000);
        }
      }
    }
  },
};

export default game;
