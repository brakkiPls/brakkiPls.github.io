function changeBody(show, hide) {

    document.getElementById(show).style.display = 'flex';
    document.getElementById(hide).style.display = 'none';
}

function buttonMove(button) {

    const div = document.getElementById(button)
    div.addEventListener("mouseenter", startsCutely);
    div.addEventListener("mousemove", transformCutely);
    div.addEventListener("mouseleave", resetCutely);
}

const settings = {

    max: 1,
    perspective: 150,
    scale: 1.1,
    initScale: 1,
}

function startsCutely(event) {

    setTransition(event.currentTarget);
}

function transformCutely(event) {

    const width = event.currentTarget.offsetWidth;
    const height = event.currentTarget.offsetHeight;
    const centerX = event.currentTarget.offsetLeft + width/2;
    const centerY = event.currentTarget.offsetTop + height/2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateX = (-1 * settings.max * mouseY / (height / 2)).toFixed(2)
    const rotateY = (settings.max * mouseX / (width / 2)).toFixed(2)

    event.currentTarget.style.transform =   'perspective(' + settings.perspective + 'px)' +
                                            'rotateX(' + rotateX + 'deg) ' +
                                            'rotateY(' + rotateY + 'deg)' +
                                            'scale3d(' + settings.scale + ', ' + settings.scale + ', ' + settings.scale + ')';
}

function resetCutely(event) {

    event.currentTarget.style.transform =   'perspective(' + settings.perspective + 'px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    setTransition(event.currentTarget);
}

function setTransition (target) {
    target.style.transition = "transform 300ms cubic-bezier(0.3, 0.98, 0.52, 0.99)"
    setTimeout(() => {
        target.style.transition = "";
    }, 300); 
}

var path = window.location.pathname;
var page = path.split("/").pop();

switch (page) {
    case 'comms.html':
        settings.max = 1;
        settings.scale = 1.1;
        settings.initScale = 1;
        buttonMove('emoteButton');
        buttonMove('artworkButton');
        buttonMove('drawingButton');
        break;

    case 'index.html':
    case '':
        settings.max = 10;
        settings.scale = 1.1;
        settings.initScale = 1;
        buttonMove('kofi');
        buttonMove('twitch');
        buttonMove('youtube');
        buttonMove('github');
        buttonMove('discord');
        break;
}
