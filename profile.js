const loginForm = document.getElementById("login-form");
    const profileDiv = document.getElementById("profile");
    const fullNameSpan = document.getElementById("full-name");

    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");

    // Check if user data exists in localStorage
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");

    if (storedFirstName && storedLastName) {
        // User is already logged in
        showProfile(storedFirstName, storedLastName);
    }

    loginButton.addEventListener("click", function () {
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();

        if (firstName && lastName) {
            // Save to localStorage
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);

            // Show profile
            showProfile(firstName, lastName);
        } else {
            alert("Please enter both your first and last name.");
        }
    });

    logoutButton.addEventListener("click", function () {
        // Remove user data from localStorage
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");

        // Show login form
        loginForm.classList.remove("hidden");
        profileDiv.classList.add("hidden");
    });

    function showProfile(firstName, lastName) {
        fullNameSpan.textContent = `${firstName} ${lastName}`;
        loginForm.classList.add("hidden");
        profileDiv.classList.remove("hidden");
    }