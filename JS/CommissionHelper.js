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
					"<button class='ex_emoteExists' onclick=" + "emote_updateVisibility(this,'New','Old')" + " id='ex_" + i + "'>New</button>" +
					"<button class='ex_animType' onclick=" + "emote_updateVisibility(this,'Frame','Vector')" + " id='" + i + "_1'>Vector</button>" +
					"<input type='number' min='2' max='99' value='5' class='ex_frameCount' onkeyup='emote_calcTotal()'  onclick='emote_calcTotal()' id='" + i + "_1_1'><br>"
    }

    document.getElementById("ex").innerHTML = menuDiv

    emote_calcTotal()
}

function emote_updateVisibility(element, yes, no) {

    var id = element.id
    var el = document.getElementById(id + "_1")

    if (element.innerHTML == yes) {
        element.innerHTML = no
        if (el != null)el.style.visibility = "hidden"

        if (id.length > 0 && id.length < 3) {
            document.getElementById(id + "_1_1").style.visibility = "hidden"
            if (el != null)el.textContent = "Vector"
            document.getElementById("ex_" + id).style.visibility = "hidden"
        }
    }
    else {
        element.innerHTML = yes
        if (el != null)el.style.visibility = "visible"
        
        if (id.length > 0 && id.length < 3) {
            document.getElementById("ex_" + id).style.visibility = "visible"
        }
    }

    emote_calcTotal()
}

function emote_calcTotal() {

    const isAnimated = document.getElementsByClassName("ex_anim")
    const isNew = document.getElementsByClassName("ex_emoteExists")
    const animType = document.getElementsByClassName("ex_animType")
    const Frames = document.getElementsByClassName("ex_frameCount")

    var amtEmotes = document.getElementById("ex_input").value
    var animated = 0
    var normal = 0
    var total = 0
    var param = ""

    for (var i = 0; i < amtEmotes; i++) {
        total += 20

        if (isAnimated[i].innerHTML == "✔️") {
            param += "[animated"

            if (animType[i].innerHTML == "Vector") {
                total += 30
                param += "(v)"
            }
            else {
                var frameCount = Math.round(Frames[i].value)
                if (frameCount <= 1)amtEmotes = 2
                if (frameCount > 99)amtEmotes = 99
                Frames[i].value = frameCount

                total += (3 * frameCount)
                param += "(f:" + frameCount + ")"
            }

            if (isNew[i].innerHTML == "Old") {
                total -= 20
                param += "E"
            }

            animated += 1
            param += "]"
        }
        else {
            normal += 1
            param += "[normal]"
        }
    }

    if (amtEmotes >= 5)total *= 0.9;
    
    document.getElementById("ex_total_E").textContent = amtEmotes
    document.getElementById("ex_total_P").textContent = total
    document.getElementById("ex_total_N").textContent = normal
    document.getElementById("ex_total_A").textContent = animated
    
    param = normal + "n+" + animated + "a:" + param + "=" + total
    document.getElementById("ex_param").value = param
}

function emote_copyParam() {

    var toCopy = document.getElementById("ex_param").value
    navigator.clipboard.writeText(toCopy)
}

emote_drawSettings(true)
emote_calcTotal()