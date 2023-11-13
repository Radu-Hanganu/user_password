function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check for admin credentials
    if (username === "admin" && password === "admin123") {
        alert("Welcome, Admin!");
        // Redirect or perform admin-specific actions here
    } else {
        alert("Invalid username or password. Try again.");
    }
}