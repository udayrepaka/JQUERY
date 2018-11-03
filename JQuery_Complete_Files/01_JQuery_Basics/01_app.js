$('#success-button').click(function () {
    var buttonText = $(this).attr('value').trim();
    $('#success-card').fadeToggle();
    if(buttonText === "HIDE"){
        $(this).attr('value','SHOW');
    }
    else{
        $(this).attr('value','HIDE');
    }
});