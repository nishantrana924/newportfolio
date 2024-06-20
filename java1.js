/*
https://youtu.be/zwl3kZPZ8H8
*/

const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");
// card javasript
var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
// contact
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

// conatct
function sendwhatsapp(){
  var phonenumber = "9898975280";

  var name = document.querySelector(".Name").value;
 
  var email = document.querySelector(".email").value;
  var message = document.querySelector(".message").value;
 
  var url = "https://wa.me/" + phonenumber + "?text="
  +"*Name :* "+name+"%0a"
  +"*Email :* "+email+"%0a"
  +"*Message :* "+message
  +"%0a%0a"
  +"This is an example of send HTML form data to WhatsApp";

  window.open(url, '_blank').focus();
}