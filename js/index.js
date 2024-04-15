let signinName =document.getElementById("signinName");
let signinEmail =document.getElementById("signinEmail");
let signinPassword =document.getElementById("signinPassword");
let inputrequired =document.getElementById("inputrequired");
let success =document.getElementById("success");
let incorrect =document.getElementById("incorrect");
let btnSignin =document.getElementById("btnSignin");
let btnSignout =document.getElementById("btnSignout");
let forSignin =document.getElementById("forSignin");
let forSignout =document.getElementById("forSignout");

let arrList = []
let myUserName =localStorage.getItem("userId")



if (localStorage.getItem("alldata")!= null) {
    arrList = JSON.parse(localStorage.getItem("alldata"))
}




if (forSignout!= null) {
    forSignout.addEventListener("click" , function() {
        signinName.classList.remove("d-none")
        btnSignout.classList.remove("d-none")
        btnSignin.classList.add("d-none")
        forSignin.classList.remove("d-none")
        forSignout.classList.add("d-none")
    })
}




if (forSignout!= null) {
btnSignout.addEventListener("click" , function() {
if (signinName.value !="" &&signinEmail.value !="" &&signinPassword.value !="" ) {
    let users = {
        userName : signinName.value,
        userEmail : signinEmail.value,
        userPassword : signinPassword.value
        }
        arrList.push(users);
        localStorage.setItem("alldata" , JSON.stringify(arrList))
        console.log(arrList);
        clear()
        success.classList.remove("d-none")
       
}
else{
    inputrequired.classList.remove("d-none") 
}
})
 }



function clear() {
    signinName.value=""
    signinEmail.value=""
    signinPassword.value=""
}




if (forSignout!= null) {
forSignin.addEventListener("click" , function() {
    signinName.classList.add("d-none")
    btnSignout.classList.add("d-none")
    btnSignin.classList.remove("d-none")
    forSignin.classList.add("d-none")
    forSignout.classList.remove("d-none")
    success.classList.add("d-none")
    inputrequired.classList.add("d-none") 
})
}



if (forSignout!= null) {
btnSignin.addEventListener("click" , function(){
   for (let i = 0; i < arrList.length; i++) {
    if (arrList[i].userEmail == signinEmail.value && arrList[i].userPassword == signinPassword.value ) {
        btnSignin.setAttribute("href" ,"./home.html")
        localStorage.setItem("userId" ,arrList[i].userName)
    }
    else if (signinEmail.value =="" || signinPassword.value =="" ) {
        inputrequired.classList.remove("d-none") 
    } else {
        incorrect.classList.remove("d-none")  
        inputrequired.classList.add("d-none") 
    }
   }
})
 }




function displayUser(){
    document.getElementById("formContent").innerHTML = `Welcome ${myUserName}`
}



function logout(){
    localStorage.removeItem("userId")
}