const form = document.querySelector('.form');
const button = document.getElementById('button');
const errorMessage = document.querySelector('.form__error');
const iconError = document.querySelector('.form__icon__error')
const input = document.querySelector('.form__input');
const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/



form.addEventListener('submit', (event)=>{
    
    event.preventDefault()
    button.style.background = 'rgb(250,214,214)'

    if(regExp.test(input.value)){
        errorMessage.classList.remove('active')
        iconError.classList.remove('active')
        form.reset()
    } else {
        errorMessage.classList.add('active')
        iconError.classList.add('active')
        input.style.border = '2px solid hsl(0, 93%, 68%)'
        
        setTimeout(()=>{
            errorMessage.classList.remove('active')
            iconError.classList.remove('active') 
            input.style.border = '1px solid  rgb(178,156,158)'
        },3000)
    }
    
})

