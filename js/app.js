const emojis = [
    "😀","😄","😁","😆","😅","😂","🤣","🥲","🥹","😊","😇","🙃","😉","😌","😍","🥰","😘","😗","😋",
    "😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😣","🙁","😖","🥺","😭",
    "😤","😡","🤯","😳","🥶","😱","😰","🫣","🤗","🫡","🤔","🤫","😶‍🌫️","😑","😬","🫠","🙄","🥱","😴",
    "🤤","😵","😵‍💫","🤐","🥴","🤢","🤮","🤧","😷","🤑","🤠","😈","👿","👹", "👺", "🤡","💩","👻","💀",
    "☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","👌","🤘","👍","👊","👏","🫶",
    "🤝","🫀","🧠","👀","🧕","👩‍🦳","🧒","👱‍♀️","👨‍⚕️","🧑‍🌾","👩‍🎓","🧑‍🎓","👩‍🏫","🧑‍🏫","👩‍🏭","👩‍💻","🧑‍💻","👩‍💼","👩‍🔧","👩‍🔬","👩‍🎨",
    "🧑‍🎨","👰‍♀️","🧑‍🚀","🧑‍✈️","🤵","🥷","👸","🦸‍♀️","🦸‍♂️","🎅","🧚‍♀️","🧌","👼","🙅‍♀️","🤦‍♂️","💇‍♀️","👩‍❤️‍👨","👨‍👩‍👧‍👦","💃","🤌🏻","🤲🏻"
    ,"🧑🏻‍🦳","👨🏻‍🚒","🚴🏻‍♀️","🤹🏻","🤽🏻‍♀️","🏊🏻‍♂️","🏄🏻‍♂️","🚣🏻‍♀️","🧗🏻‍♀️","🏇🏻","🏂🏻","🛌🏻","🤸🏻‍♂️","🤾🏻","🧘🏻‍♀️","👩🏽‍🔬","🧝🏽‍♀️","🧜🏽‍♂️","🙆🏽‍♀️","💅🏾"
];

const generateBtn = document.querySelector(".color-generate-btn");
const emoji = document.querySelector(".emoji");
const moon = document.querySelector("#moon");
const light = document.querySelector("#light");

//generate random number 

generateRandomNumber = ()=>{
    return Math.floor(Math.random()*emojis.length);
}

//generate random color
generateBtn.addEventListener("click", ()=>{
    emoji.textContent = emojis[generateRandomNumber()];
})

  light.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
  });

  moon.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
  });

