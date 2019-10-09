const button_open = document.querySelector('.button_console')
const button_close = document.querySelector('.button_close')
const terminal = document.querySelector('.console')

// Ouverture du terminal

button_open.addEventListener('click', function(){
    terminal.style.display = 'block'
})

//Fermeture de la console

button_close.addEventListener('click', function(){
    terminal.style.display = 'none'
})

// Apparition du bouton terminal pour le perso 1

const card1 = document.querySelector('.nb1')

card1.addEventListener('click', function(){
    button_open.style.display = 'flex'
})


// Validation du terminal de commande


const consoleInputBegin = document.querySelector('.console_begin_box')
const help = document.querySelector('.help')
let value = null
const password_box = document.querySelector('.console_password')


consoleInputBegin.addEventListener('keydown', function(_event)
{
    value = consoleInputBegin.value

    if(_event.key === 'Enter' && value === '/help')
    {
        help.style.display = 'block'
        
    }
    if(_event.key === 'Enter' &&  value ===  'pwd'){
        password_box.style.display = 'flex'
    }
})

// Validation du mot de passe

const  consoleInputPassword = document.querySelector('.console_password_box')
let value_password = null
const wrong = document.querySelector('.wrong')
const right = document.querySelector('.true')

consoleInputPassword.addEventListener('keydown', function(_event){
    value_password = consoleInputPassword.value

    if(_event.key === 'Enter' && value_password === 'metal' || value_password === 'Metal'){
        wrong.style.display= 'none'
        right.style.display = 'block'
    }else if(_event.key == 'Enter' && value_password !=  'bonjour'){
        wrong.style.display = 'block'
        right.style.display = 'none'
    }
})

