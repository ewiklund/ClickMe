// Select an element:
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  alert('YOU CLICKED ME UGHHHH!!');
});

btn.addEventListener('click', () => {
  console.log('Second time!!');
});

btn.addEventListener('mouseover', () => {
  console.log("MOUSED OVER ME!");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;

});

btn.addEventListener('click', () => {
  btn.innerText = "YOU GOT ME!";
  document.body.style.backgroundColor = "green";
} );
btn.addEventListener('mouseout', () => {
  btn.innerText = "Click Me!";
});

window.addEventListener('scroll', () => {
  console.log("Stop scrolling!!")
  
});




