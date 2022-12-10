const signUp = document.getElementById("sign-up");
signUp.addEventListener("click", function(){
    const loginArea= document.getElementById("login");
    loginArea.style.display= "none";
    const formArea = document.getElementById("form");
    formArea.style.display= "block";
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbyI37yHRXYtskZsgrhSqV5IY7HXVEVb6Ma40jWOvwUzHDN9m_ulgERE3GuXwL0JyEfycA/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Message Sent Succesfully"
      setTimeout(function(){
          msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})