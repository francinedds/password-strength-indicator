let password = document.getElementById("password");
let message = document.getElementById("message");
let strength = document.getElementById("strength");

password.addEventListener('input', () => {
    if(password.value.length > 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }
    //separador
    if(password.value.length < 4){
        strength.innerHTML = "weak";
        password.style.borderColor = "red";
        message.style.color = "red";
    }else if(password.value.length >= 4 && password.value.length < 8){
        strength.innerHTML = "medium";
        password.style.borderColor = "orange";
        message.style.color = "orange";
    }else if(password.value.length >= 8){
        strength.innerHTML = "strong";
        password.style.borderColor = "green";
        message.style.color = "green";
    }
});
