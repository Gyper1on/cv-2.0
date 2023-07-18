const newView = document.querySelector(".avatar");

newView.onclick = () => {
  newView.setAttribute(
    "src",
    "https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg"
  );
};

// setInterval(() => {
//     newView.setAttribute( 'src','https://sun9-44.userapi.com/impg/ShVI22fRct-vztQrwPKXDTxexltwCEoxi7O8Lw/l_PklzGNTGE.jpg?size=1280x1197&quality=96&sign=e3e46cc48f70ee33e80943d0a0d1ec0e&type=album' )}, 6000
// )
//
// setInterval( () => {
//     newView.setAttribute('src', 'https://sun9-14.userapi.com/impg/M4XoL_a4J4EiqGGcteFEjTRxiI2sNx7TbcsWFA/2Zke5r-faT8.jpg?size=2159x2160&quality=95&sign=01c947c7d19e7808a998897a68f708f1&type=album')}, 12000
// )
//
// setInterval( () => {
//     newView.setAttribute('src', 'https://sun9-53.userapi.com/impg/oBo9jTm2xsF51qVt9phOpHJ1lo-698guZiKKEg/o2lmU-ATY3I.jpg?size=1280x1280&quality=95&sign=6fcbdb8f9d859360be5ee675f06cddc0&type=album')}, 18000
// )
//

const massiveUrl = [
  "https://sun9-44.userapi.com/impg/ShVI22fRct-vztQrwPKXDTxexltwCEoxi7O8Lw/l_PklzGNTGE.jpg?size=1280x1197&quality=96&sign=e3e46cc48f70ee33e80943d0a0d1ec0e&type=album",
  "https://sun9-14.userapi.com/impg/M4XoL_a4J4EiqGGcteFEjTRxiI2sNx7TbcsWFA/2Zke5r-faT8.jpg?size=2159x2160&quality=95&sign=01c947c7d19e7808a998897a68f708f1&type=album",
  "https://sun9-53.userapi.com/impg/oBo9jTm2xsF51qVt9phOpHJ1lo-698guZiKKEg/o2lmU-ATY3I.jpg?size=1280x1280&quality=95&sign=6fcbdb8f9d859360be5ee675f06cddc0&type=album",
];

let index = 0;

setInterval(() => {
  if (index == massiveUrl.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  newView.setAttribute("src", massiveUrl[index]);
}, 5000);

const newBackground = document.querySelector("#name");

newBackground.onclick = () => {
  newBackground.style.backgroundColor = "white";
};

const newBackground2 = document.querySelector("#mail");

newBackground2.onclick = () => {
  newBackground2.style.backgroundColor = "white";
};

const newBackground3 = document.querySelector("#massage");

newBackground3.onclick = () => {
  newBackground3.style.backgroundColor = "white";
};

// node.onclick = () => {
//     node.setAttribute('src', 'https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg')
// }
// let newView = document.getElementsByClassName('avatar') [0]

// setTimeout ( () => {
//     addStylesTo (newView)
// }, 3000)

// function addStylesTo (node)  {
// node.style.width = '400'
// }

// https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg

// const newObject = document.querySelector('.menu')

// newObject.onclick = ()=> {
//     newObject.style.color = 'red'
// }

const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
