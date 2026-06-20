
const btn = document.getElementById("btn");
const passwordBox = document.getElementById("password");


btn.addEventListener( "click" , () =>{ 

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // (!~@#$%^&*()_+={}||\[];:></?) use it when you say

  let password = "";

  for(let i =0;  i<8; i++){
    let randomIndex =
        Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];

  }
      passwordBox.textContent = password;

});

  
















