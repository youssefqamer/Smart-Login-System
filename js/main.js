let nameInput=document.getElementById("username");
let emailInput=document.getElementById("email");
let passInput=document.getElementById("password");
let signupBtn=document.getElementById("signup");
let login=document.getElementById("login")
let signinLink=document.getElementById('signin')
let signupForm=document.querySelector('.signup-form')
let signinForm=document.querySelector('.signin-form')
let homePage=document.querySelector('.home-page')
let logOutBtn=document.querySelector('.logout-btn')
let welcome=document.getElementById('welcome')
let emailLogin=document.getElementById('emial-login')
let passLogin=document.getElementById('password-login')
let signUpAlert=document.getElementById('signUpAlert')
let signInAlert=document.getElementById('signInAlert')
let errorData=document.getElementById('errorData')
let dataList=[];
if(localStorage.getItem("UserData")==null){
    dataList=[];
}else{
dataList=JSON.parse(localStorage.getItem("UserData"))
}
function collectData(){
let data={
    uName:nameInput.value, 
    uEmail:emailInput.value, 
    uPassword:passInput.value, 
}
dataList.push(data);
localStorage.setItem('UserData',JSON.stringify(dataList));
clearForm()

}
signupBtn.addEventListener('click',function(){
    if(nameInput.value==''||emailInput.value==''||passInput.value==''){
        signUpAlert.classList.remove('d-none')
    }else{
        collectData()
        signUpAlert.classList.add('d-none')
    }
});

function clearForm(){
    nameInput.value=null;
    emailInput.value=null;
    passInput.value="";
}

signinLink.addEventListener('click',function(){
   signupForm.classList.add('hidden-form')
   signinForm.classList.remove('hidden-form')
})

function loginForm(){
 
    for(i=0;i<dataList.length;i++){
        if(dataList[i].uEmail==emailLogin.value && dataList[i].uPassword==passLogin.value){
           let userName=dataList[i].uName
           localStorage.setItem('userName',userName)
            welcome.textContent=`Welcome ${localStorage.getItem('userName')}`
            signupForm.classList.add('hidden-form')
            signinForm.classList.add('hidden-form')
            homePage.classList.remove('hidden-form')
            errorData.classList.add('d-none')
            clearlogin()
        }else{
           errorData.classList.remove('d-none')
        }
    }
}
login.addEventListener('click',function(){
    if(emailLogin.value==''||passLogin.value==''){
        signInAlert.classList.remove('d-none')
    }else{
        loginForm()
        signInAlert.classList.add('d-none')
    }
});
function clearlogin(){
    emailLogin.value=null
    passLogin.value=null
}
logOutBtn.addEventListener('click',function(){
    localStorage.removeItem('userName')
    homePage.classList.add('hidden-form')
    signinForm.classList.remove('hidden-form')
})
