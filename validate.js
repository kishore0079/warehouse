function validate() {
    var x = document.getElementById("username").value;
    var w = document.getElementById("password").value;

    if (x.includes("goeff.knight@sainsburys.co.uk") && w == "12345678") {
                window.location = "page2.html"

    }
    else {
        alert("incorrect email or password");
    }
}