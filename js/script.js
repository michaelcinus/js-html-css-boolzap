function addSentListener () {

  var target = $("#msg");
  target.keyup(sendKeyup);
 }

 function sendKeyup(event) {
  
  var key = event.which;
  var input = $(this);
  var txt = input.val();

  if (key === 13  && txt.length > 0) {
    input.val(" ");
    sendMessage(txt);
  }

}

function sendMessage(txt) {
  console.log(txt);
  
  var template = $("#template-message-sent > div").clone();
  var target = $(".right-messages");

  template.find(".message-text").text(txt);
  //template.find(".message-time").text(getActualHour());

  target.append(template);

  console.log(target);
  
}

function getActualHour(){

  var date = new Date();
  return date.getHours() + ":" + date.getMinutes;
}

function init() {

  addSentListener();
}

$(document).ready(init);
