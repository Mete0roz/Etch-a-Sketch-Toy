
const container  = document.querySelector('#container');
const select = document.querySelector('#size');
const clean = document.querySelector('#clean');
const brazilian = document.querySelector('#brazilian');
const dark = document.querySelector('#dark');
const colorful = document.querySelector('#colorful');
const erase = document.querySelector("#erase");


function mkGrid(size){
  container.innerHTML = "";

  const numSquares = size * size;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const squareWidth = containerWidth / size;
  const squareHeigth = containerHeight / size;

  for (let i = 0; i < numSquares; i++){
    const createSquares = document.createElement('div');
    createSquares.classList.add("class");
    createSquares.style.background = "white";
    createSquares.style.border = "solid 1px black";
    createSquares.style.width = `${squareWidth}px`;
    createSquares.style.height = `${squareHeigth}px`;
    container.appendChild(createSquares);
  

  clean.addEventListener("click", () =>{
    container.innerHTML = "";

  });

  let changeModeColor = 0;

  brazilian.addEventListener("click", () => {
  changeModeColor = 1;

  let brazilianColors = ["blue", "yellow", "green"];
  let randomBrazilian = brazilianColors[Math.floor(Math.random() * brazilianColors.length)];

  createSquares.addEventListener("mouseover", () => {
    if (changeModeColor === 1){
    createSquares.style.background = randomBrazilian;
    };
});


});

  dark.addEventListener("click", () => {
  changeModeColor = 2;

  let darkColors = ["#000000", "#A9A9A9", "#808080"];
  let randomDark = darkColors[Math.floor(Math.random() * darkColors.length)];

  createSquares.addEventListener("mouseover", () => {
    if (changeModeColor === 2){
      createSquares.style.background = randomDark;
    }
  });
});

  colorful.addEventListener("click", () => {
    changeModeColor = 3;

    let rainbowColors = ["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8B00FF"];
    let rainbowRandom = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];

    createSquares.addEventListener("mouseover", () => {
      if (changeModeColor === 3){
        createSquares.style.background = rainbowRandom;
      }
    })
  });
  
  erase.addEventListener("click", () => {
    changeModeColor = 4;

    let eraseMode = "white";

    createSquares.addEventListener("mouseover", () => {
      if(changeModeColor === 4){
        createSquares.style.background = eraseMode;
      }
    })
  });
};

};


select.addEventListener('change', () =>{
  const numSquares = parseInt(select.value);
  mkGrid(numSquares);
});




  