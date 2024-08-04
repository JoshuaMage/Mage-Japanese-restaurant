import Bfast1 from "../image/menu-image/1-img.png";
import Bfast2 from "../image/menu-image/2-img.png";
import Bfast3 from "../image/menu-image/3-img.png";
import hoverB1 from "../image/menu-hover-image/hover1.jpg"
import hoverB2 from "../image/menu-hover-image/hover2.jpg"
import hoverB3 from "../image/menu-hover-image/hover3.jpg"

import starter1 from "../image/menu-image/4-img.png";
import starter2 from "../image/menu-image/5-img.png";
import starter3 from "../image/menu-image/6-img.png";
import hoverS1 from "../image/menu-hover-image/hover4.png"
import hoverS2 from "../image/menu-hover-image/hover5.jpg"
import hoverS3 from "../image/menu-hover-image/hover6.jpg"

import ramen1 from "../image/menu-image/7-img.webp";
import ramen2 from "../image/menu-image/8-img.webp";
import ramen3 from "../image/menu-image/9-img.webp";
import hoverR1 from "../image/menu-hover-image/hover7.png"
import hoverR2 from "../image/menu-hover-image/hover8.jpg"
import hoverR3 from "../image/menu-hover-image/hover9.png"

import noodles1 from "../image/menu-image/10-img.png";
import noodles2 from "../image/menu-image/11-img.png";
import noodles3 from "../image/menu-image/12-img.png";
import hoverN1 from "../image/menu-hover-image/hover10.webp"
import hoverN2 from "../image/menu-hover-image/hover11.png"
import hoverN3 from "../image/menu-hover-image/hover12.png"

import hotdishes1 from "../image/menu-image/13-img.webp";
import hotdishes2 from "../image/menu-image/14-img.png";
import hotdishes3 from "../image/menu-image/15-img.png";
import hoverH1 from "../image/menu-hover-image/hover13.jpeg"
import hoverH2 from "../image/menu-hover-image/hover14.jpg"
import hoverH3 from "../image/menu-hover-image/hover15.jpg"

import desserts1 from "../image/menu-image/16-img.png";
import desserts2 from "../image/menu-image/17-img.png";
import desserts3 from "../image/menu-image/18-img.png";
import hoverD1 from "../image/menu-hover-image/hover16.jpg"
import hoverD2 from "../image/menu-hover-image/hover17.jpg"
import hoverD3 from "../image/menu-hover-image/hover18.jpg"

export const MENUPRODUCTS = {
  BreakFast: [
    {
      id: "1",
      img: Bfast1,
      hoverimg: hoverB1,
      product: "TAKAO OMURAISU FROM THE GARDEN OF WORDS",
      description:
        "Fried rice, scrambled eggs, eel, ketchup, romano lettuce, cherry tomatoes and gomadare sauce",
      cart: "$10.50 - ADD TO CART",
    },
    {
      id: "2",
      img: Bfast2,
      hoverimg: hoverB2,
      product: "TAKI SOUFFLÉ PANCAKES FROM YOUR NAME",
      description:
        "Japanese air pancakes, chocolate sauce, strawberry cream sauce",
      cart: "$7.80 - ADD TO CART",
    },
    {
      id: "3",
      img: Bfast3,
      hoverimg: hoverB3,
      product: "OKAYU FROM KIKI'S DELIVERY SERVICE",
      description: "Japanese rice porridge, umeboshi, scallion, sesame seeds",
      cart: "$6.20 - ADD TO CART",
    },
  ],

  Starters: [
    {
      id: "1",
      img: starter1,
      hoverimg: hoverS1,
      product: "YUKIHIRA ONIGIRI FROM SHOKUGEKI NO SOMA",
      description:
        "Rice, salmon, cream cheese, furikake / rice, crab, cream cheese, yam powder / rice, tuna, mentaiko sauce, matcha and soy sauce",
      cart: "$13.50 - ADD TO CART",
    },

    {
      id: "2",
      img: starter2,
      hoverimg: hoverS2,
      product: "KORO TAKOYAKI FROM ASSASSINATION CLASS",
      description:
        "Fish broth dough, octopus / shrimp / eel, takoyaki sauce, tuna shavings",
      cart: "$9 - ADD TO CART",
    },
    {
      id: "3",
      img: starter3,
      hoverimg: hoverS3,
      product: "CAYMAN GYOZA FROM DOROHEDORO",
      description:
        "Japanese fried dumplings with salmon, pork and chicken, cream sauce, green onions",
      cart: "$6.20 - ADD TO CART",
    },
  ],

  Ramen: [
    {
      id: "1",
      img: ramen1,
      hoverimg: hoverR1,
      product: "UZUMAKI RAMEN FROM NARUTO",
      description:
        "Chashu pork, ramen noodles, miso motodare, pork broth, adzitama egg, shriracha, soybean sprouts, tsukudani kombu, green onions, sesame seeds, nori seaweed",
      cart: "$20 - ADD TO CART",
    },

    {
      id: "2",
      img: ramen2,
      hoverimg: hoverR2,
      product: "SENKU RAMEN FROM DR. STONE",
      description:
        "SENKU RAMEN FROM DR. STONEChicken fillet, ramen noodles, soy broth, miso, pepper paste, shiitake, spicy corn, adzitama egg, green onion, sesame oil, sesame",
      cart: "$14.10 - ADD TO CART",
    },
    {
      id: "3",
      img: ramen3,
      hoverimg: hoverR3,
      product: "GOKU RAMEN FROM DRAGON BALL",
      description:
        "GOKU RAMEN FROM DRAGON BALLBeef, ramen noodles, beef broth, adzitama egg, tsukudani kombu, green onions, pickled bamboo, miso motodare, sesame oil, sesame",
      cart: "$14.80 - ADD TO CART",
    },
  ],

  Noodles: [
    {
      id: "1",
      img: noodles1,
      hoverimg: hoverN1,
      product: "TANJIRO UDON FROM DEMON SLAYER",
      description:
        "TANJIRO UDON FROM DEMON SLAYERUdon noodles, marbled beef, beef broth, shimiji mushrooms, adzitama egg, tofu, green onions, sesame, shriracha, soybean sprouts, tsukudani kombu, green onions, sesame seeds, nori seaweed",
      cart: "$11.40 - ADD TO CART",
    },

    {
      id: "2",
      img: noodles2,
      hoverimg: hoverN2,
      product: "KANDA YAKISOBA FROM D.GRAY-MAN",
      description:
        "Egg soba noodles, muer and shimiji mushrooms, leeks, shiitake, bok choy, crispy onions, edamame, sesame, microgreens, yaki udon sauce",
      cart: "$16.20 - ADD TO CART",
    },
    {
      id: "3",
      img: noodles3,
      hoverimg:hoverN3,
      product: "NENE SOBA FROM SHOKUGEKI NO SOMA",
      description:
        "Sarashina soba, kakiage sakura shrimp, dashi, soy sauce, mirin",
      cart: "$23- ADD TO CART",
    },
  ],

  Hotdishes: [
    {
      id: "1",
      img: hotdishes1,
      hoverimg: hoverH1,
      product: "YORIKO NIKUJAGA FROM TOKYO GHOUL",
      description:
        "Pork brisket, shirataki noodles, onions, potatoes, peas, carrots, dried shiitake mushrooms, green beans, sake, soy sauced",
      cart: "$8.20 - ADD TO CART",
    },

    {
      id: "2",
      img: hotdishes2,
      hoverimg: hoverH2,
      product: "YURI KATSUDON FROM YURI ON ICE",
      description:
        "Breaded pork tonkatsu chop, rice, peking cabbage with yuzu dressing, soy sauce",
      cart: "$7.50 - ADD TO CART",
    },
    {
      id: "3",
      img: hotdishes3,
      hoverimg: hoverH3,
      product: "SATORU KARE-RAISU FROM ERASED",
      description:
        "Marble beef, rice, potatoes, carrots, onions, curry sauce, ground ginger",
      cart: "$7.10 - ADD TO CART",
    },
  ],

  Desserts: [
    {
      id: "1",
      img: desserts1,
      hoverimg: hoverD1,
      product: "SEBASTIAN'S LEMON PIE FROM BLACK BUTLERL",
      description:
        "Sweet dough with sugar and almonds powder, lemon cream, french meringue",
      cart: "$5.80 - ADD TO CART",
    },

    {
      id: "2",
      img: desserts2,
      hoverimg: hoverD2,
      product: "DEKU TAIYAKI FROM MY HERO ACADEMIA",
      description:
        "Japanese fish waffle in flavors: vanilla-raspberry / banana-nutella / raspberry-basil /anko jam made of adzuki beans",
      cart: "$4.20 - ADD TO CART",
    },
    {
      id: "3",
      img: desserts3,
      hoverimg: hoverD3,
      product: "ITACHI DANGO FROM NARUTO",
      description:
        "Colored rice flour balls with soy sauce, sugar and starch syrup",
      cart: "$3.50 - ADD TO CART",
    },
  ],
};
