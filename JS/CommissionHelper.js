function emote_drawSettings(onload) {

    var amtEmotes = 1
    var menuDiv = ""

    if (!onload) {
        amtEmotes = Math.round(document.getElementById("ex_input").value)

        if (amtEmotes <= 0)amtEmotes = 1
        if (amtEmotes > 20)amtEmotes = 20

        document.getElementById("ex_input").value = amtEmotes
    }

    for (var i = 1; i <= amtEmotes; i++) {
        menuDiv += "Emote " + i + ": Animated? <button class='ex_anim' onclick=" + "emote_updateVisibility(this,'✔️','❌')" + " id='" + i + "'>❌</button>" +
					"<button class='ex_animType' onclick=" + "emote_updateVisibility(this,'Frame','Vector')" + " id='" + i + "_1'>Vector</button>" +
					"<input type='number' min='2' max='99' value='5' class='ex_frameCount' id='" + i + "_1_1'><br></br>"
    }

    document.getElementById("ex").innerHTML = menuDiv

    emote_calcTotal()
}

function emote_updateVisibility(element, yes, no) {

    var id = element.id
    var el = document.getElementById(id + "_1")

    if (element.innerHTML == yes) {
        element.innerHTML = no
        el.style.visibility = "hidden"

        if (id = "1") { // dosn't worth for #2
            document.getElementById(id + "_1_1").style.visibility = "hidden"
            el.textContent = "Vector"
        }
    }
    else {
        element.innerHTML = yes
        el.style.visibility = "visible"
    }

    emote_calcTotal()
}

function emote_calcTotal() {

    amtEmotes = document.getElementById("ex_input").value
    const isAnimated = document.getElementsByClassName("ex_anim")
    const animType = document.getElementsByClassName("ex_animType")
    const Frames = document.getElementsByClassName("ex_frameCount")

    var animated = 0
    var normal = 0;
    var total = 0;

    console.log(isAnimated + animType + Frames)
    for (var i = 0; i < amtEmotes; i++) {
        total += 20

        if (isAnimated[i].innerHTML == "✔️") {

            if (animType[i].innerHTML == "Vector") {
                // -20 if they have emote to work with
                total += 30
            }
            else {
                total += (3 * Frames[i].value)
            }

            animated += 1
        }
        else {
            normal += 1
        }
    }

    if (amtEmotes >= 5)total *= 0.9;
    
    console.log(total)

}

emote_drawSettings(true)