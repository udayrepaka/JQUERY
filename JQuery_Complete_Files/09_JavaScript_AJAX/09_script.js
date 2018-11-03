function getAJAX() {

    // Create an AJAX Request
    var http =  new XMLHttpRequest();

    // prepare the AJAX request object
    http.open('GET','persons.xml',true);

    // Send the AJAX request
    http.send();

    // Process the response
    http.onreadystatechange = function () {
        if(http.readyState === 4 && http.status === 200){
            // process
            process(this);
        }
    };
}

// XML Processing
function process(xml){
    var imageDiv = document.querySelector('#image-gallery-div');
    var imageString = '';
    var xmlData = xml.responseXML;
    var contactsList = xmlData.getElementsByTagName('contacts');
    for(var i=0; i<contactsList.length; i++){
        var imgSrc = contactsList[i].childNodes[21].childNodes[1].textContent;
        imageString += '<img src="' + imgSrc +'">' ;
    }
    imageDiv.innerHTML = imageString;
}