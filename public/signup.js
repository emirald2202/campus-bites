function goDashboard() {
    window.location.href = "index.html";
}

document.getElementById("sendOtp").onclick = function () {

    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (email == "" || (!emailInput.checkValidity())) {
        alert("Please Enter a valid email");
        return;
    }

    fetch("http://localhost:3000/check-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    })
        .then(res => res.json())
        .then(data => {

            if (data.exists) {

                const goLogin = confirm("Email already in use\nPlease Login");

                if (goLogin) {
                    window.location.href = "login.html";
                }

            } else {



                fetch("http://localhost:3000/send-otp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: email })
                })
                    .then(res => res.json())
                    .then(data => {
                        alert(data.message);
                    });

                document.getElementById("otp").classList.remove("hidden");
                document.getElementById("versign").classList.remove("hidden");


            }

        });



}




document.getElementById("versign").addEventListener("click", function (e) {

    e.preventDefault();
    const otp = document.getElementById("otp").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (otp == "") {
        alert("Please Enter OTP");
        return;
    }

    fetch("http://localhost:3000/signup-ver-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, otp: otp })
    })
        .then(res => res.json())
        .then(data => {

            if (data.message == "OTP verified") {
                const user = { name, email, password };
                fetch("http://localhost:3000/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        alert(data.message);
                        localStorage.setItem("user", user.name);
                        localStorage.setItem("userEmail", user.email);

                        goDashboard();


                        return;
                    });


                //alert(data.message);




            }
            else {
                alert(data.message);
            }
        });




});