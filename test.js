// Hide the registration form by default
$('.register-form').hide(); 

// Toggle to registration form
$('.message#p2 a').click(function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    $('.login-form').hide(); // Hide the login form
    $('.register-form').show(); // Show the registration form
});

// Toggle to login form
$('.message#p1 a').click(function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    $('.register-form').hide(); // Hide the registration form
    $('.login-form').show(); // Show the login form
});
