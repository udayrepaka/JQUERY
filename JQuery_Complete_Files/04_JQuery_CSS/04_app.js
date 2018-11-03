// Get the HTML Elements
var cardHeader = $('#form-card-header');
var cardHeaderMsg = $('.card-title');
var buttonElement = $('#submit-button');

// Login Button Logic
$('#login-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning')
              .addClass('bg-success');
    cardHeaderMsg.text('Login Here');
    buttonElement.removeClass('btn-teal').removeClass('btn-warning')
                 .addClass('btn-success').text('Login');
});

// Register Button Logic
$('#register-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-success')
        .addClass('bg-warning');
    cardHeaderMsg.text('Register Here');
    buttonElement.removeClass('btn-teal').removeClass('btn-success')
        .addClass('btn-warning').text('Register');
});

// Signup Button Logic
$('#signup-button').click(function() {
    cardHeader.removeClass('bg-warning').removeClass('bg-success')
        .addClass('bg-teal');
    cardHeaderMsg.text('Signup Here');
    buttonElement.removeClass('btn-warning').removeClass('btn-success')
        .addClass('btn-teal').text('Signup');
});