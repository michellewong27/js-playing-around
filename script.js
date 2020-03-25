//selected color by its class name
const colorBtn = document.querySelector('.colorBtn');
//selecting by tag name of body
const bodyBcg = document.querySelector('body');

//array of background colors well use
const colors = ['yellow', 'red', 'green', '#3b5998'];

//add event listener on click go to callbackfunction
colorBtn.addEventListener('click', changeColor);

function changeColor (){
    //grabbing body, selecting style, background color & set to random color in array
        //math random is in between 0 and 0.999 but now making sure it rounds down now
            // & multiply by array length which will give 4
            //So, gives up number in between 0 and 4
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}