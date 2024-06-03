var Elementusername = document.getElementById("username");
var ElementEmail = document.getElementById("Email");
var Elementpassword = document.getElementById("password");
var ElementEmailLogin = document.getElementById("EmailLogin");
var ElementpasswordLogin = document.getElementById("PasswordLogin");
var WelName = document.getElementById("WelcomeName");
var UserList =[];

function EmptyData(){
  if(Elementusername.value == "" || ElementEmail.value == "" || Elementpassword.value == ""){
   return false;
  }
  else
  {
    return true;
  }
}

function already(){
  UserList =  JSON.parse(localStorage.getItem('UserData'))
  for(let i = 0; i < UserList.length; i++)
  {
    if(UserList[i].SetEmail == ElementEmail.value )
    {
      
      return false;
    }

    else
    {
      return true;
    }
  }
}

function SaveDB(){


  if(EmptyData() == false)
  {
    
    document.getElementById("inValidData").innerHTML = ` <span class="form-text d-flex justify-content-center align-items-center text-danger m-0" style="visibility: visible;" id="inValidData" >All inputs is required</span>    `

    return false;
  }

  else if(already() == false)
  {
    document.getElementById("inValidData").innerHTML = ` <span class="form-text d-flex justify-content-center align-items-center text-danger m-0" style="visibility: visible;" id="inValidData" >email already exists</span>    `

      return false;
  }



  else 
  {
    var user = {
      SetUserName: Elementusername.value,
      SetEmail: ElementEmail.value,
      SetPassword: Elementpassword.value,
    };
    UserList.push(user);
    localStorage.setItem("UserData", JSON.stringify(UserList));
    document.getElementById("inValidData").innerHTML = ` <span class="form-text d-flex justify-content-center align-items-center text-success m-0" style="visibility: visible;" id="inValidData" >success</span>    `
    window.location.hash = '#login';
    }
  

}
function EmptyDataLogin(){
  if(ElementEmailLogin.value == "" || ElementpasswordLogin.value == "" ){
   return false;
  }
  else
  {
    return true;
  }
}

function alreadyLogin(){
  UserList =  JSON.parse(localStorage.getItem('UserData'))
  for(let i = 0; i < UserList.length; i++)
  {
    if(UserList[i].SetEmail == ElementEmailLogin.value || UserList[i].SetPassword == ElementpasswordLogin.value )
    {
      
      return true;
    }

    else
    {
      return false;
    }
  }
}

function LoginDB(){

  if(EmptyDataLogin() == false)
  {
    
    document.getElementById("LoginData").innerHTML = ` <span class="form-text d-flex justify-content-center align-items-center text-danger m-0" style="visibility: visible;" id="LoginData" >All inputs is required</span>    `

    return false;
  }

  else if(alreadyLogin() == false)
  {
    document.getElementById("LoginData").innerHTML = ` <span class="form-text d-flex justify-content-center align-items-center text-danger m-0" style="visibility: visible;" id="LoginData" >incorrect email or password</span>    `

      return false;
  }

  else
  {
    window.location="./welcome.html";

  }
}

function LogOut(){
  window.location="./index.html";

}
