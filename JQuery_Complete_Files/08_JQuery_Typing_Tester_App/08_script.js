// Get the Elements
var originalTextElement = $('#original-text');
var textAreaElement = $('#text-area');
var messageCard = $('#message-card');
var messageElement = $('#message');
var minutesElement = $('#minutes');
var secondsElement = $('#seconds');
var milliSecondsElement = $('#milli-seconds');
var resetButton = $('#reset-button');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var interval = 0;
var timerRunning = false;

// keypress event for Text-Area
textAreaElement.keypress(function() {
    var textEnteredLength = $(this).val().length;
    if(textEnteredLength === 0 && !timerRunning){
        // start timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

// keyup event for TextArea
textAreaElement.keyup(function() {
    var originalText = originalTextElement.text();
    var textEntered = $(this).val();
    var partialText = originalText.substr(0,textEntered.length);
    if(textEntered === ''){
        // gray
        messageCard.removeClass('bg-teal').removeClass('bg-success')
            .removeClass('bg-danger').addClass('bg-light');
        messageElement.text('');
    }
    else{
        if(textEntered === originalText){
            // green
            messageCard.removeClass('bg-teal').removeClass('bg-light')
                .removeClass('bg-danger').addClass('bg-success');
            messageElement.text('Congratulations');
            // stop the timer
            clearInterval(interval);

        }
        else{
            if(textEntered === partialText){
                // teal
                messageCard.removeClass('bg-success').removeClass('bg-light')
                    .removeClass('bg-danger').addClass('bg-teal');
                messageElement.text('Correct !!');
            }
            else{
                // red
                messageCard.removeClass('bg-success').removeClass('bg-light')
                    .removeClass('bg-teal').addClass('bg-danger');
                messageElement.text('Wrong !!');
            }
        }
    }
});

// Click event for Reset Button
resetButton.click(function() {
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;
    textAreaElement.val('');
    messageCard.removeClass('bg-teal').removeClass('bg-success')
        .removeClass('bg-danger').addClass('bg-light');
    messageElement.text('');
    minutesElement.text('00');
    secondsElement.text('00');
    milliSecondsElement.text('00');

    // get random Text
    getRandomText();

});


// start Timer function
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));
    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));
    timer++;
}

// leading Zero
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

// Generate Random Text
function getRandomText() {
    var randomIndex = Math.round(Math.random() * 10);
    var randomString = textArray[randomIndex];
    originalTextElement.text(randomString);
}
