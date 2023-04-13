let Signupbtn = document.getElementById("Signupbtn");
let Signinbtn = document.getElementById("Signinbtn");

let namef = document.getElementById("name");
let title = document.getElementById("title");

Signinbtn.onclick = function(){
    namef.style.maxHeight = "60px";
    title.innerHTML= "Sign In";
    Signinbtn.classList.remove("disable");
    Signupbtn.classList.add("disable");
}

Signupbtn.onclick = function(){
    namef.style.maxHeight="100px";
    title.innerHTML="Sign Up";

    Signinbtn.classList.remove("disable");
    Signupbtn.classList.add("disable");
}

// namef.onclick= style.placeholder = "non"