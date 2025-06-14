function emote_drawSettings(onload) {

    var amtEmotes = 1
    var menuDiv = ""

    if (!onload) {
        amtEmotes = fixNumber(document.getElementById("ex_input"), 2, 20)
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
                var frameCount = fixNumber(Frames[i], 1, 99)

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

function emote_copyParam(id) {

    var toCopy = document.getElementById(id).value
    navigator.clipboard.writeText(toCopy)
}

function art_updateVisibility(element, yes, no) {
    var id = element.id
    var state = "visible"

    if (element.innerHTML == yes) {
        element.innerHTML = no
        state = "hidden"
    }
    else {
        element.innerHTML = yes
    }

    switch (id) {
        case "at_style":
            document.getElementById("at_hide").style.visibility = state
            
            if (element.innerHTML == no) {
                document.querySelector(".at_ills").style.display = "none"
                document.querySelector(".at_paint").style.display = ""
            }
            else {
                document.querySelector(".at_ills").style.display = ""
                document.querySelector(".at_paint").style.display = "none"
            }
            break

        case "at_lines":
            document.getElementById("at_li").style.visibility = state
            break
            
        case "at_shade":
            document.getElementById("at_si").style.visibility = state
            document.getElementById("at_sp").style.visibility = state
            break
            
        case "at_back":
            document.getElementById("at_bi").style.visibility = state
            document.getElementById("at_bp").style.visibility = state
            break
            
        case "at_spice":
            var filter = ""
            if (element.innerHTML == yes)filter = "blur(3px)"

            at_blur(filter)
            break
    }

    at_calcTotal()
}

function at_blur(filter) {
    
    var guys = document.getElementsByClassName("guy")

    for (var i = 0; i<guys.length; i++) {
        guys[i].style.filter = filter
    }
}

function at_summonDudes() {

    var amtDudes = fixNumber(document.getElementById("at_numChars"), 1, 5)
    var guys_i = ""
    var guys_p = ""

    for (var i = 0; i < amtDudes; i++) {
        guys_i += '<div class="at_preview"><img src="Images/ArtComissionHelper/ills_char.png" alt="iguy" class="at_img guy"></div>'
    }
    for (var i = 0; i < amtDudes; i++) {
        guys_p += '<div class="at_preview"><img src="Images/ArtComissionHelper/paint_char.png" alt="pguy" class="at_img guy"></div>'
    }

    document.querySelector(".at_guywrapper_i").innerHTML = guys_i
    document.querySelector(".at_guywrapper_p").innerHTML = guys_p

    if (document.getElementById("at_spice").innerHTML == "✔️")at_blur("blur(3px)")

    at_calcTotal()
}

function at_calcTotal() {

    const artType = document.getElementById("at_style").innerHTML
    const yes = '✔️'
    
    var total = 30
    var param = artType

    const charCount = document.getElementById("at_numChars").value
    total += 30 * (charCount - 1)

    if (artType == "Painted") {
        total += 15
    }
    if (artType == "Illustrated" && document.getElementById("at_lines").innerHTML == yes) {
        total += 15
        param += "(lines)"
    }
    if (document.getElementById("at_shade").innerHTML == yes) {
        total += 15
        param += "(shading)"
    }
    if (document.getElementById("at_back").innerHTML == yes) {
        total += 15
        param += "(background)"
    }
    if (document.getElementById("at_spice").innerHTML == yes) {
        total += 15
        param += "(spicy)"
    }

    document.getElementById("at_total").textContent = total
    
    if (charCount > 1)param += ".chars:" + charCount
    param += "=" + total
    document.getElementById("at_param").value = param
}

function fixNumber(el, min, max) {

    var newVal = Math.round(el.value)

    if (newVal < min)newVal = min
    if (newVal > max)newVal = max

    el.value = newVal
    return newVal
}

emote_drawSettings(true)
emote_calcTotal()
document.querySelector(".at_paint").style.display = "none"
at_summonDudes()