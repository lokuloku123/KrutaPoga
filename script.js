const poga = document.querySelector('.js-poga');

let punkti = 10

poga.addEventListener('click', () => {
    punkti = punkti - 1
    console.log(punkti)

    if(punkti === 0){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        punkti = punkti + 10;
        poga.innerHTML = `Nospied mani vēl ${punkti}x`;

    }else{
        poga.innerHTML = `Nospied mani vēl ${punkti}x`;

}} )



