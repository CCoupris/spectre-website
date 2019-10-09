// Close rules
const button = document.querySelector('.explications_button')
const block = document.querySelector('.explications')

// Animation mdp 
const pass_ID = document.querySelector('.pass_ID')
let count_ID = 0
const limit_ID = 12

const pass_word = document.querySelector('.pass_word')
let count_password = 0
const limit_passWord = 20

button.addEventListener('click', function(){
    block.style.display = 'none';


    const passwordInterval = window.setInterval(function()
    {
        count_ID++

        if(count_ID > limit_ID)
        {
            window.clearInterval(passwordInterval)
        }
        else
        {
            const value = 'a'.repeat(count_ID)
            pass_ID.value = value
        }
    }, 50)

    const timeOutPassword = window.setTimeout(function(){
        const passwordInterval_word = window.setInterval(function()
    {
        count_password++

        if(count_password > limit_passWord)
        {
            window.clearInterval(passwordInterval_word)
        }
        else
        {
            const value = 'a'.repeat(count_password)
            pass_word.value = value
        }
    }, 50)}, 1000
    )
    
})





