$(document).ready(init(){

  
});

function init() {

  addSentListener();
}


function addSentListener{

 var target = $("#new-message-input");
 target.keyup(endKeyup);
}

function sendKeyup() {
  
  var key = event.which;
  
  if (key === 13) {
    var input = $(this);
    var txt = input.val();

    input.val(" ");

    function sendMessage (txt);
    
  }
}

function sendMessage (txt) {
  var template = $("#template-message-sent > div").clone();
  var target = $("#right-messages");

  template.find("#message-text").text(txt);
  template.find("#message-time").text(getActualHour());


  target.append(template);
}

function getActualHour(){

  var date = new date();
  return date.getHours() + ":" + date.getMinutes;
}
