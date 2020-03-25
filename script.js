//selected color by its class name
const colorBtn = document.querySelector('.colorBtn');
//selecting by tag name of body
const bodyBcg = document.querySelector('body');

//array of background colors well use
const colors = ['yellow', 'red', 'green', '#3b5998'];

//add event listener on click go to callbackfunction
colorBtn.addEventListener('click', changeColor);

function changeColor (){
    //grabbing body, selecting style, and background color
    bodyBcg.style.backgroundColor = colors[2];
}