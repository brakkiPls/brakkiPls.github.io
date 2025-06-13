function emote_isAnimated(element) {
    const yes = "✔️"
    const no = "❌"
    
    if (element.innerHTML == yes) {
        element.innerHTML = no
        // stuff to the right -> display none
    }
    else {
        element.innerHTML = yes
        // stuff to the right -> display block?
    }

}