// export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    const openButton = document.querySelector('.login .signup')

    cancelButton.addEventListener("click", close)
    openButton.addEventListener("click", open)

    function open(){
        modalWrapper.classList.add("active")
    }

    function close(){
        modalWrapper.classList.remove("active")
    }

    // return{
    //     open,
    //     close
    // }
// }