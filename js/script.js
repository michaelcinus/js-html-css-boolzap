//RICERCA CHAT
function ricercaChat () {

  var target = $("#ricerca-chat");
  target.keyup(serchKeyup);
 }

 function serchKeyup(event) {
  
  var input = $(this);
  var txt = input.val();

  var contacts = $(".contatti .contatto")
  contacts.each( function(){

    var contact = $(this);
    var nomeContatto = contact.find(".nome").text();

    if (nomeContatto.toLowerCase().includes(txt.toLowerCase))
     {
      contact.show();
    }else {
      contact.hide();
    }

  });

} 



//inviat funzione 
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
    setTimeout("receivedMessage()", 1000);
  }

}

//click su messaggio e eliminazione di esso
$(document).on("click", ".message-options", mostraPanel () );
$(document).on("click", ".message-options", cancellaMessage () );


function mostraPanel () {
  var btn = $(this);
  var panel = btn.find("message-options-panel");
  panel.toggle();
}

function cancellaMessage () {
  var btn = $(this);
  btn.parents("message").remove;
}


//INVIO MESSAGGIO
function sendMessage(txt) {
  
  var template = $("#template-message-sent > div").clone();
  var target = $("#right-messages");

  template.find(".message-text").text(txt);
  template.find(".message-time").text(getActualHour());

  target.append(template);

}


//RICEVI MESSAGGIO
function receivedMessage() {
  
  var template = $("#template-message-received > div").clone();
  var target = $("#right-messages");

  template.find(".message-text").text("OK");
  template.find(".message-time").text(getActualHour());

  target.append(template);

}


//GENERA ORARIO
function getActualHour(){

  var date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}


//INIT
function init() {

  addSentListener();
}

$(document).ready(init);
