function makeid(l) {
    // write your code here
    let password="";
    const str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for(let i=0 ; i<l ; i++){
   password=password+str.charAt(Math.floor(Math.random()*str.length));

   

    }return password;
  }
  
  // Do not change the code below.
  const l = prompt("Enter a number.");
  alert(makeid(l));
