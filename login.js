function login(username,password){
    if(username === "admin" && password === "password123"){
        return "login";
    }
    else{
        return "invalid";
    }
    }
console.log(login("admin", "password123"));
