// Your code goes here
//1

let fun = document.querySelector("h1");
fun .addEventListener('mouseover',(event) => event.target.style.color = 'red');

//2
let title = document.querySelector('.intro h2');
title.addEventListener('dblclick', (e) => e.target.style.background = 'pink');

//3
let bus = document.querySelector('.intro img');
bus.addEventListener('mouseover', (e) => {
    console.log(e);
    bus.style.transform = 'scale(1.1)';
    bus.style.transform = 'transform 0.5s';
});

//4
bus.addEventListener('mouseleave', (e) => e.target.style.opacity = '.5');


// 5
const bodyRed = document.querySelector('body');
bodyRed.addEventListener('click', e => {
  bodyRed.style.backgroundColor ='red';
})

//6
let destImage = document.querySelector('.content-destination img')
destImage.addEventListener('click', (e) => e.target.style.opacity = '.5');



//7
let btn = document.querySelector('.btn');
btn.addEventListener('dblclick',(e) => e.target.style.backgroundColor = 'blue');


//8
let footer = document.querySelector('.footer p');
footer.addEventListener('click', (e) => e.target.style.fontSize = '2rem');

//9
let destinations = document.querySelectorAll('.destination h4');
destinations.forEach(a => a.addEventListener('mouseover', (e) => e.target.style.color = 'lightpink'));

//10
const backgroundColor = document.querySelector('.text-content p');
backgroundColor.addEventListener('mouseover', (e) => {
  backgroundColor.style.backgroundColor ="yellow";
  console.log(`event bubbled up again`);
})

