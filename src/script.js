const buttonNav = document.getElementById('buttonNav')
const buttonNavMain = document.getElementById('buttonNavMain')
const seletores = document.querySelectorAll('li')
const bt1 = document.getElementById('bt1')
const prev1 = document.getElementById('prev1')
const counter = document.getElementById('counter')
const bt2 = document.getElementById('bt2')
const prev2 = document.getElementById('prev2')

console.log(counter)

let index = 1

buttonNavMain.addEventListener('mouseenter', function(ev){
    buttonNav.src = '../img/arrowPurple.png'
})
buttonNavMain.addEventListener('mouseleave', function(ev){
    buttonNav.src = '../img/arrowWhite.png'
})

seletores.forEach((li)=>{
    li.addEventListener('click', ()=>{
        li.classList.toggle('selecionado')
        const p = li.querySelector('p')
        p.classList.toggle('cor')
    })
})

bt1.addEventListener('click', function(ev){
    const selecionados = document.querySelectorAll('.selecionado')


    let relatório = 'Você está escolhendo: ' + '\n'

    selecionados.forEach((escolhido)=>{
        const p = escolhido.querySelector('p')
        const texto = p.innerText

        relatório += texto + '\n' 
    })

    const resposta = confirm(relatório)
    if(resposta){
        index = 2

        counter.innerText = '2'

        const anterior = document.getElementById('1')
        const proximo = document.getElementById(index)
        anterior.style.opacity = 0 
        anterior.style.zIndex = -1
        console.log(anterior, proximo)
        proximo.style.opacity = 1

        const circle = document.querySelector('.circle')
        
        circle.style.borderTop = '4px solid purple'
        circle.style.borderRight = '4px solid purple'
    }
})

prev1.addEventListener('click', function(ev){
    index = 1
    counter.innerText = '1'
    const anterior = document.getElementById('2')
    const proximo = document.getElementById(index)
    anterior.style.opacity = 0 
    console.log(anterior, proximo)
    proximo.style.opacity = 1
    proximo.style.zIndex = 2

    const circle = document.querySelector('.circle')
        
    circle.style.borderTop = '4px solid rgb(91, 97, 124)'
    circle.style.borderRight = '4px solid rgb(91, 97, 124)'
})

bt2.addEventListener('click', function(ev){
    const confirmação  = confirm('Os dados preenchidos estão corretos?')

    if(confirmação){
        index = 3

        counter.innerText = '3'
        
        const circle = document.querySelector('.circle')
        const second = document.getElementById(index-1)
        const third = document.getElementById(index)
        
        second.style.opacity = 0
        third.style.opacity =1
        third.style.zIndex = 1

        circle.style.border = '4px solid purple'
    }
})

prev2.addEventListener('click',function(ev){
    index = 2
    
    counter.innerText = '2'
    const circle = document.querySelector('.circle')
    const second = document.getElementById(index)
    const third = document.getElementById(index + 1)

    third.style.opacity = 0
    third.style.zIndex = -1
    second.style.opacity = 1

    circle.style.borderLeft = '4px solid rgb(91, 97, 124)'
    circle.style.borderBottom = '4px solid rgb(91, 97, 124)'
})


