const signUp = document.getElementById("sign-up");
signUp.addEventListener("click", function(){
    const loginArea= document.getElementById("login");
    loginArea.style.display= "none";
    const formArea = document.getElementById("form");
    formArea.style.display= "block";
})