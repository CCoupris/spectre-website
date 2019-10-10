
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

        if(_event.key === 'Enter' && value_password === 'brother' || value_password === 'Brother'){
            wrong.style.display= 'none'
            right.style.display = 'block'
            
            link_01.setAttribute('href', 'characters/character01.html')
            image_01.setAttribute('src', image01)
            image_01.setAttribute('alt', 'new')

        }else if(_event.key == 'Enter' && value_password !=  'brother' || value_password === 'Brother'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}


//card 02

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
    const link_02 = document.querySelector('.link_02')
    const image_02 = document.querySelector('.image_02')

    consoleInputPassword.addEventListener('keydown', function(_event){
        value_password = consoleInputPassword.value

        if(_event.key === 'Enter' && value_password === 'jewel' || value_password === 'Jewel'){
            wrong.style.display= 'none'
            right.style.display = 'block'
            
            link_02.setAttribute('href', 'characters/character02.html')
            image_02.setAttribute('src', image02)
            image_02.setAttribute('alt', 'new')

        }else if(_event.key == 'Enter' && value_password !=  'jewel' || value_password === 'Jewel'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}


//card 04

const card4 = document.querySelector('.nb4')

card4.addEventListener('click', function(){
    button_open.style.display = 'flex'
    startTerminal04()
})


//Fonction du terminal en fonction du personnage

function startTerminal04 (){
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
    const link_04 = document.querySelector('.link_04')
    const image_04 = document.querySelector('.image_04')

    consoleInputPassword.addEventListener('keydown', function(_event){
        value_password = consoleInputPassword.value

        if(_event.key === 'Enter' && value_password === 'revenge' || value_password === 'Revenge'){
            wrong.style.display= 'none'
            right.style.display = 'block'
            
            link_04.setAttribute('href', 'characters/character04.html')
            image_04.setAttribute('src', 'pictures/memberPictures/character04.png')
            image_04.setAttribute('alt', 'new')

        }else if(_event.key == 'Enter' && value_password !=  'revenge' || value_password === 'Revenge'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}

//card 5

const card05 = document.querySelector('.nb5')

card05.addEventListener('click', function(){
    button_open.style.display = 'flex'
    startTerminal05()
})


//Fonction du terminal en fonction du personnage

function startTerminal05 (){
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
    const link_05 = document.querySelector('.link_05')
    const image_05 = document.querySelector('.image_05')

    consoleInputPassword.addEventListener('keydown', function(_event){
        value_password = consoleInputPassword.value

        if(_event.key === 'Enter' && value_password === 'casino' || value_password === 'Casino'){
            wrong.style.display= 'none'
            right.style.display = 'block'
            
            link_05.setAttribute('href', 'characters/character05.html')
            image_05.setAttribute('src', 'pictures/memberPictures/character05.png')
            image_05.setAttribute('alt', 'new')

        }else if(_event.key == 'Enter' && value_password !=  'casino' || value_password === 'Casino'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}


//card 7

const card07 = document.querySelector('.nb7')

card07.addEventListener('click', function(){
    button_open.style.display = 'flex'
    startTerminal07()
})


//Fonction du terminal en fonction du personnage

function startTerminal07 (){
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
    const link_07 = document.querySelector('.link_07')
    const image_07 = document.querySelector('.image_07')

    consoleInputPassword.addEventListener('keydown', function(_event){
        value_password = consoleInputPassword.value

        if(_event.key === 'Enter' && value_password === 'pale' || value_password === 'Pale'){
            wrong.style.display= 'none'
            right.style.display = 'block'
            
            link_07.setAttribute('href', 'characters/character07.html')
            image_07.setAttribute('src', image07)
            image_07.setAttribute('alt', 'new')

        }else if(_event.key == 'Enter' && value_password !=  'pale' || value_password === 'Pale'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}

//card 10

const card10 = document.querySelector('.nb10')

card10.addEventListener('click', function(){
    button_open.style.display = 'flex'
    startTerminal10()
})


//Fonction du terminal en fonction du personnage

function startTerminal10 (){
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
    const link_10 = document.querySelector('.link_10')
    const image_10 = document.querySelector('.image_10')

    consoleInputPassword.addEventListener('keydown', function(_event){
        value_password = consoleInputPassword.value

        if(_event.key === 'Enter' && value_password === 'metal' || value_password === 'Metal'){
            wrong.style.display= 'none'
            right.style.display = 'block'
            
            link_10.setAttribute('href', 'characters/character10.html')
            image_10.setAttribute('src', 'pictures/memberPictures/character10.png')
            image_10.setAttribute('alt', 'new')

        }else if(_event.key == 'Enter' && value_password !=  'metal' || value_password === 'Metal'){
            wrong.style.display = 'block'
            right.style.display = 'none'
        }
    })
}



