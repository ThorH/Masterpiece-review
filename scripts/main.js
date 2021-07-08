import Modal from './modal.js'

const modal = Modal()

const openButton = document.querySelector('.login .signup')

openButton.addEventListener("click", event => {
    event.preventDefault() /* para tirar o # da url */
    
    modal.open()
}
)

// openButton.addEventListener("click", handleClick)

// function handleClick(event, check = true){
//     event.preventDefault() 

//     modal.open()
// }