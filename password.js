document.getElementById("generate").addEventListener("click", function() {
    let length = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;
    let passwordAllowBase = "";
    let password = "";

    if (uppercase) {
        passwordAllowBase += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
        passwordAllowBase += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
        passwordAllowBase += "0123456789";
    }
    if (symbols) {
        passwordAllowBase += "!@#$%^&*_=+-/";
    }

    for (let i = 0; i < length; i++) {
        let randomCharIndex = Math.floor(Math.random() * passwordAllowBase.length);
        password += passwordAllowBase.charAt(randomCharIndex);
    }
    document.getElementById("password").value = password;
});

document.getElementById("copy").addEventListener("click", function() {
    let password = document.getElementById("password");
    password.select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
});

document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("password").value = "";
});
