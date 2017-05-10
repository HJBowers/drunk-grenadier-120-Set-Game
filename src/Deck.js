export default class Deck {
  constructor() {
    this.cards = [
      {
        image: require("../public/cards/01.gif"),
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid",
        selected: false,
        className: "rdt1"
      },
      {
        image: require("../public/cards/02.gif"),
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/03.gif"),
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/04.gif"),
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/05.gif"),
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/06.gif"),
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/07.gif"),
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/08.gif"),
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/09.gif"),
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/10.gif"),
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/11.gif"),
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/12.gif"),
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/13.gif"),
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/14.gif"),
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/15.gif"),
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/16.gif"),
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/17.gif"),
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/18.gif"),
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/19.gif"),
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/20.gif"),
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/21.gif"),
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/22.gif"),
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/23.gif"),
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/24.gif"),
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/25.gif"),
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/26.gif"),
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/27.gif"),
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../public/cards/28.gif"),
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/29.gif"),
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/30.gif"),
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/31.gif"),
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/32.gif"),
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/33.gif"),
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/34.gif"),
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/35.gif"),
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/36.gif"),
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/37.gif"),
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/38.gif"),
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/39.gif"),
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/40.gif"),
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/41.gif"),
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/42.gif"),
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/43.gif"),
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/44.gif"),
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/45.gif"),
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/46.gif"),
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/47.gif"),
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/48.gif"),
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/49.gif"),
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/50.gif"),
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/51.gif"),
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/52.gif"),
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/53.gif"),
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/54.gif"),
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../public/cards/55.gif"),
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/56.gif"),
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/57.gif"),
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/58.gif"),
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/59.gif"),
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/60.gif"),
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/61.gif"),
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/62.gif"),
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/63.gif"),
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/64.gif"),
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/65.gif"),
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/66.gif"),
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/67.gif"),
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/68.gif"),
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/69.gif"),
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/70.gif"),
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/71.gif"),
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/72.gif"),
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/73.gif"),
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/74.gif"),
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/75.gif"),
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/76.gif"),
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/77.gif"),
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/78.gif"),
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/79.gif"),
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/80.gif"),
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../public/cards/81.gif"),
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      }
    ],
    this.nullCard = {
      image: require("../public/cards/cardback.png"),
      number: null,
      color: "Red",
      shape: "Squiggle",
      shading: "Solid",
      selected: false
    }
  }

}
