console.log('js ЗАПУЩЕН');

let btn = document.querySelector('.theme')
let title = document.querySelector('.title')
let txt = document.querySelector('.txt')
let img = document.querySelectorAll('.img')

console.log('переменная btn', btn);
console.log('переменная title', title);
console.log('переменная txt', txt);
console.log('переменная img', img);
function theme_change(){
    if(title.style.color == 'white'){
        document.body.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,93,110,1) 100%);'
        title.style.color = 'black'
        txt.style.color = 'black'
        img.src = 'https://kartinki.pics/uploads/posts/2022-03/1646186638_1-kartinkin-net-p-krasivie-kartinki-oblaka-1.jpg'
        btn.innerText = 'тема:светлая'
    }else {
        document.body.style.background = 'linear-gradient(36deg, rgba(89, 131, 252, 1) 0%, rgba(29, 74, 103, 1) 46%)'
        title.style.color = 'white'
        txt.style.color = 'white'
        img.src = 'https://kartinki.pics/uploads/posts/2022-03/1646186638_1-kartinkin-net-p-krasivie-kartinki-oblaka-1.jpg'
        btn.innerText = 'тема: темная'
    }
}


btn.addEventListener('click', theme_change)