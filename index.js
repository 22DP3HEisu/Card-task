var Modal = document.getElementById("Modal");
var CloseModal = document.getElementById("CloseModal");

var Buttons = document.getElementsByClassName("LearnMore");

var info = {
    "Keyboard": "A keyboard is an input device that uses a set of keys to send data to a computer or other device. The keys are used to type letters, numbers, and symbols into a word processor, text editor, or other program. They can also be used to execute commands and perform other functions.",
    "Mouse": "A mouse is an input device that is used to control the movement of the cursor on a computer screen. It is a small handheld device that is moved across a flat surface to move the cursor. The mouse typically has two buttons, a left button and a right button, and a scroll wheel.",
    "Monitor": "A monitor is an output device that displays information on a computer screen. It is used to view text, images, videos, and other content. Monitors come in various sizes and resolutions, and can be connected to a computer using a variety of cables, such as HDMI, VGA, and DisplayPort.",
}

for (var i = 0; i < Buttons.length; i++) {
    var Button = Buttons[i];

    Button.onclick = function() {
        var Card = this.parentElement;
        var Header = Card.querySelector("h4").innerText;

        Modal.querySelector("h2").innerText = Header;
        Modal.querySelector("p").innerText = info[Header];
        Modal.style.display = "block";
    }
}

CloseModal.onclick = function() {
    Modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Modal) {
        Modal.style.display = "none";
    }
}