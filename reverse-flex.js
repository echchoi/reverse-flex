// Initialize the --vh variable and update whenever viewport size changed
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.onload = () => {
  window.addEventListener("resize", () => {
    vh = vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  window.addEventListener("orientationchange", () => {
    window.location = window.location;
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  // Add Event Listeners
  document.addEventListener("click", (e) => {
    alert(`Wow it is ${e.target}, and this is ${e.currentTarget}`);;
  });
});

let container = document.getElementsByClassName("container")[0];
let child1 = document.getElementsByClassName("child1")[0];
let child2 = document.getElementsByClassName("child2")[0];
let containerRect = container.getBoundingClientRect();
let rect1 = child1.getBoundingClientRect();
let rect2 = child2.getBoundingClientRect();

let windowDetail = `Window Height: ${window.innerHeight} (vh: ${vh})`;
let containerDetail = `Container (Top: ${containerRect.top}, Bottom: ${containerRect.bottom})`;
let rect1Detail = `Child 1 (Top: ${rect1.top}, Bottom: ${rect1.bottom})`;
let rect2Detail = `Child 2 (Top: ${rect2.top}, Bottom: ${rect2.bottom})`;

console.log(window.innerHeight);

let windowInfo = document.createElement("p");
windowInfo.textContent = windowDetail;
child1.appendChild(windowInfo);

let containerInfo = document.createElement("p");
containerInfo.textContent = containerDetail;
child1.appendChild(containerInfo);

let rect1Info = document.createElement("p");
rect1Info.textContent = rect1Detail;
child1.appendChild(rect1Info);

let rect2Info = document.createElement("p");
rect2Info.textContent = rect2Detail;
child1.appendChild(rect2Info);

// container.addEventListener("click", () => {
//     alert("I am container");
// });

child1.addEventListener("click", (e) => {
    alert(`I am ${e.target}, and this is ${e.currentTarget}`);
});

// child2.addEventListener("click", () => {
//     alert("I am child 2");
// });

function replaceContent() {
  alert("hi hi");
  const content = `<div id="new"></div>`;
  child2.innerHTML = content;
}
