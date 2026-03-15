document.getElementById("loginPassword").onclick = function () {
    const email = document.getElementById("email");
    const emailf = document.getElementById("email").value;


    if (emailf == "" || (!email.checkValidity())) {
        alert("Please Enter a valid email");
        return;
    }
    document.getElementById("sendOtp").classList.add("hidden");

    fetch("http://localhost:3000/check-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: emailf })
    })
        .then(res => res.json())
        .then(data => {

            if (data.exists) {

                document.getElementById("password").classList.remove("hidden");
                document.getElementById("login").classList.remove("hidden");
                document.getElementById("loginPassword").classList.add("hidden");
                document.getElementById("sendOtp").classList.add("hidden");
                document.getElementById("email").classList.add("hidden");

                fetch("http://localhost:3000/send-otp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: emailf })
                });

            } else {

                const goSignup = confirm("User not found.\nPlease signup first.");

                if (goSignup) {
                    window.location.href = "signup.html";
                }

            }

        });

}

document.getElementById("sendOtp").onclick = function () {

    const email = document.getElementById("email");
    const emailf = email.value;

    if (emailf == "" || (!email.checkValidity())) {
        alert("Please Enter a valid email");
        return;
    }

    fetch("http://localhost:3000/check-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: emailf })
    })
        .then(res => res.json())
        .then(data => {

            if (data.exists) {

                document.getElementById("otp").classList.remove("hidden");
                document.getElementById("verifyOtp").classList.remove("hidden");
                document.getElementById("sendOtp").classList.add("hidden");
                document.getElementById("loginPassword").classList.add("hidden");
                document.getElementById("email").classList.add("hidden");


                fetch("http://localhost:3000/send-otp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: emailf })
                });



            } else {

                const goSignup = confirm("User not found.\nPlease signup first.");

                if (goSignup) {
                    window.location.href = "signup.html";
                }

            }

        });

}


document.getElementById("verifyOtp").onclick = function () {

    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;


    if (otp === "") {
        alert("Please enter OTP");
        return;
    }

    fetch("http://localhost:3000/log-ver-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            otp: otp
        })
    })
        .then(res => res.json())
        .then(data => {
             console.log(data);

            if (data.message === "OTP verified") {
                alert("Login successful");
                localStorage.setItem("user", data.name);
                localStorage.setItem("userEmail", data.email);


                window.location.href = "index.html";
            }
            else {
                alert("Invalid OTP");
            }

        });

};

document.getElementById("login").onclick = function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;



    if (password === "") {
        alert("Please enter password");
        return;
    }

    fetch("http://localhost:3000/login-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => res.json())
        .then(data => {

            if (data.message === "Login successful") {
                alert("Login successful");
                localStorage.setItem("user", data.name);
                localStorage.setItem("userEmail", data.email);


                window.location.href = "index.html";
            }
            else {
                alert("Incorrect password");
            }

        });

};