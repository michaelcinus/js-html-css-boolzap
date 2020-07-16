//RICERCA CHAT
function ricercaChat () {

  var target = $("#ricerca-chat");
  target.keyup(searchKeyup);
 }

 function searchKeyup(event) {
  
  var input = $(this);
  var txt = input.val();

  var contacts = $(".contatti .contatto")
  contacts.each( function(){

    var contact = $(this);
    var nomeContatto = contact.find(".nome").text();

    if (nomeContatto.toLowerCase().includes(txt.toLowerCase()))
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


//RICERCA CONTATTO NELLA LISTA
function ricercaContatto (){

  var contatti = $(".contatti .contatto")
  contatti.click(contactClick);

}

function contactClick (){

  var clickContatto = $(this);
  var id = clickContatto.data("id");
  var contatti = $(".contatti .contatto")

  contatti.removeClass("active");

  clickContatto.addClass("active");

  var conv = $(".right-messages");
  var convSelez = $(".right-messages[data-id=" + id + "]");

  conv.removeClass("active");
  convSelez.addClass("active");

}

//click su messaggio e eliminazione di esso
function mostraPanel() {
 
  $(document).on("click", ".message-options", clickMessageOption );

}


function clickMessageOption() {

  var msgBtn = $(this);
  var msgOption = msgBtn.siblings(".message-options-panel");

  msgOption.toggle();

 } 


function eliminaMsg() {

  $(document).on("click", ".message-destroy", clickMessageDestroy );

}

function clickMessageDestroy() {

  var destroy = $(this);
  var msg = destroy.closest(".message");

  msg.remove();

}


//INVIO MESSAGGIO
function sendMessage(txt) {
  
  var template = $("#template-message-sent > div").clone();
  var target = $("#right-messages.active");

  template.find(".message-text").text(txt);
  template.find(".message-time").text(getActualHour());

  target.append(template);

}


//RICEVI MESSAGGIO
function receivedMessage() {
  
  var template = $("#template-message-received > div").clone();
  var target = $("#right-messages.active");

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
  ricercaChat();
  ricercaContatto();
  mostraPanel();
  eliminaMsg();

}

$(document).ready(init);

