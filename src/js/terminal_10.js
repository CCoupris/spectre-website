const button_open = document.querySelector('.button_console')
const button_close = document.querySelector('.button_close')
const terminal = document.querySelector('.console')
const consoleInputBegin = document.querySelector('.console_begin_box')
const help = document.querySelector('.help')
let value = null
const password_box = document.querySelector('.console_password')

// Ouverture du terminal

button_open.addEventListener('click', function(){
    terminal.style.display = 'block'
    document.getElementById("message").value = "";
    document.getElementById("password").value = "";
    help.style.display = 'none'
    password_box.style.display = 'none'
})

//Fermeture de la console

button_close.addEventListener('click', function(){
    terminal.style.display = 'none'
})

// Initialisation de la console 



// Apparition du bouton terminal pour le perso 1

const card1 = document.querySelector('.nb1')

card1.addEventListener('click', function(){
    button_open.style.display = 'flex'
    startTerminal01()
})


//Fonction du terminal en fonction du personnage

function startTerminal01 (){
    const consoleInputBegin = document.querySelector('.console_begin_box')
    const help = document.querySelector('.help')
    let value = null
    const password_box = document.querySelector('.console_password')

    // Terminal de commande
    consoleInputBegin.addEventListener('keydown', function(_event)
    {
        value = consoleInputBegin.value
 
        console.log(value)
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
    const link_01 = document.querySelector('.link_01')
    const image_01 = document.querySelector('.image_01')

    consoleInputPassword.addEventListener('keydown', function(_event){
        value_password = consoleInputPassword.value

        if(_event.key === 'Enter' && value_password === 'metal' || value_password === 'Metal'){
            wrong.style.display= 'none'
            right.style.display = 'block'
            
            link_01.setAttribute('href', 'characters/character01.html')
            image_01.setAttribute('src', '../pictures/memberPictures/character01.png')
            image_01.setAttribute('class', 'new')

        }else if(_event.key == 'Enter' && value_password !=  'metal' || value_password === 'Metal'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}

//Card 2
const card2 = document.querySelector('.nb2')

card2.addEventListener('click', function(){
    button_open.style.display = 'flex'
    startTerminal02()
})


//Fonction du terminal en fonction du personnage

function startTerminal02 (){
    const consoleInputBegin = document.querySelector('.console_begin_box')
    const help = document.querySelector('.help')
    let value = null
    const password_box = document.querySelector('.console_password')

    // Terminal de commande
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

        if(_event.key === 'Enter' && value_password === 'Mardi' || value_password === 'mardi'){
            wrong.style.display= 'none'
            right.style.display = 'block'
        }else if(_event.key == 'Enter' && value_password != 'Mardi' || value_password != 'mardi'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}

const card10 = document.querySelector('.nb10')

card2.addEventListener('click', function(){
    button_open.style.display = 'flex'
    startTerminal10()
})

function startTerminal10 (){
    const consoleInputBegin = document.querySelector('.console_begin_box')
    const help = document.querySelector('.help')
    let value = null
    const password_box = document.querySelector('.console_password')

    // Terminal de commande
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

        if(_event.key === 'Enter' && value_password === 'Metal' || value_password === 'metal'){
            wrong.style.display= 'none'
            right.style.display = 'block'
        }else if(_event.key == 'Enter' && value_password != 'Metal' || value_password != 'metal'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}








