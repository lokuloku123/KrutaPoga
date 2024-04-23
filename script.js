const poga = document.querySelector('.js-poga');

let punkti = 10


let randomColor = Math.floor(Math.random()*16777215).toString(16);

poga.addEventListener('click', () => {
    punkti = punkti - 1
    console.log(punkti)
    poga.style.backgroundColor = "#" + randomColor;

    if(punkti === 0){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        punkti = punkti + 10;
        poga.innerHTML = `Nospied mani vēl ${punkti}x`;
        poga.style.backgroundColor = "#" + randomColor;


    }else{
        poga.innerHTML = `Nospied mani vēl ${punkti}x`;
        poga.style.backgroundColor = "#" + randomColor;


}} )



