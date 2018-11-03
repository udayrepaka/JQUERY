// Click on load-images-button
$('#load-images-btn').click(function() {

    // Call AJAX using JQuery
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/3015687e74bd35b261f9c7f257fcf01d/raw/1aa01b59f629b429ffd5d39d9e1eb52f924ca291/06102018.json',function(data) {
       var contactList = data.contacts;
       var imageSelector = '#image';
       var nameSelector = '_name';
       for(var i=0; i<contactList.length; i++){
           var image = contactList[i].picture.large;
           var fullName = contactList[i].name.first + " " + contactList[i].name.last;
           $(imageSelector + (i+1)).attr('src',image);
           $(imageSelector + (i+1) + nameSelector).text(fullName);
       }
    });
});