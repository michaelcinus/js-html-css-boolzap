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
  var contatti = $(".contatti .contatto");

  contatti.removeClass("active");

  clickContatto.addClass("active");

  var conv = $(".container-messaggio");
  var convSelez = $(".container-messaggio[data-id=" + id + "]");
  var ant = $(".img-header-dx");
  var antSelez = $(".img-header-dx[data-id=" + id + "]");


  conv.removeClass("active");
  convSelez.addClass("active");
  ant.removeClass("active");
  antSelez.addClass("active");

}

//click su messaggio e eliminazione di esso
function mostraPanel() {
 
  $(document).on("click", ".opzioni-messaggio", clickMessageOption );

}


function clickMessageOption() {

  var msgBtn = $(this);
  var msgOption = msgBtn.siblings(".pannello-opzioni");

  msgOption.toggle();

 } 


function eliminaMsg() {

  $(document).on("click", ".cancella-messaggio", clickMessageDestroy );

}

function clickMessageDestroy() {

  var destroy = $(this);
  var msg = destroy.closest(".messaggio");

  msg.remove();

}


//INVIO MESSAGGIO
function sendMessage(txt) {
  
  var template = $("#template-messaggio-inviato > div").clone();
  var target = $("#container-messaggio.active");

  template.find(".testo-messaggio").text(txt);
  template.find(".ora-messaggio").text(getActualHour());

  target.append(template);

}


//RICEVI MESSAGGIO
function receivedMessage() {
  
  var template = $("#template-messaggio-ricevuto > div").clone();
  var target = $("#container-messaggio.active");

  template.find(".testo-messaggio").text("OK");
  template.find(".ora-messaggio").text(getActualHour());

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

