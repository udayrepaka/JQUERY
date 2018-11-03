// Get all the HTML Elements
var firstNumberElement = $('#first_number');
var secondNumberElement = $('#second_number');
var operatorElement = $('#operator');
var equalsButtonElement = $('#equals_button');
var resultButtonElement = $('#result_button');
var plusButtonElement = $('#plus-button');
var minusButtonElement = $('#minus-button');
var mulButtonElement = $('#mul-button');
var divButtonElement = $('#div-button');
var clearButtonElement = $('#clear-button');

// Click event for PlusButton
plusButtonElement.click(function() {
    operatorElement.text($(this).text());
});

// Click event for MinusButton
minusButtonElement.click(function() {
    operatorElement.text($(this).text());
});

// Click event for divButton
divButtonElement.click(function() {
    operatorElement.text($(this).text());
});

// Click event for mulButton
mulButtonElement.click(function() {
    operatorElement.text($(this).text());
});

// Click event for EqualsButton
equalsButtonElement.click(function() {
    var firstNumber = firstNumberElement.val();
    var secondNumber = secondNumberElement.val();
    var operator = operatorElement.text().trim();
    var result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            default:
                result = 'RESULT';
                break;
        }
        resultButtonElement.text(result);
    }
    else{
        resultButtonElement.text('RESULT');
    }
});

// click event for clear Button
clearButtonElement.click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorElement.text('+');
    resultButtonElement.text('RESULT');
});
