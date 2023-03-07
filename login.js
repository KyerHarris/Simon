function login() {
  const nameEl = document.querySelector("#name");
  const passEl = document.querySelector("#password")
  if(localStorage.getItem("userName") != nameEl.value){
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", passEl.value);
  }
  else{
    if(localStorage.getItem("password") != passEl){
      
    }
  }
  window.location.href = "play.html";
}
