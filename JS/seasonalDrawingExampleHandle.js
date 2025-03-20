var current = [3,3,3];

function nextPicture(offer) {
    let prevOffer = current[offer]
    current[offer] -= 1;

    if (current[offer] < 1) {
        current[offer] = 5;
    }

    setNewStuff(offer+1, current[offer], prevOffer)
}

function prevPicture(offer) {
    let prevOffer = current[offer]
    current[offer] += 1;

    if (current[offer] > 5) {
        current[offer] = 1;
    }

    setNewStuff(offer+1, current[offer], prevOffer)
}

// month is global varriable for current month from seasonalDrawingSelector.js
function setNewStuff(offer, newSelected, prevSelected) {

    document.getElementById("img" + offer + "_" + newSelected).style.scale = 1.3
    document.getElementById("img" + offer + "_" + prevSelected).style.scale = 1
    
    const images = [
        "_1_1.png","_1_2.png","_1_0.png","_1_3.png","_1_4.png",
        "_2_1.png","_2_2.png","_2_0.png","_2_3.png","_2_4.png",
        "_3_1.png","_3_2.png","_3_0.png","_3_3.png","_3_4.png",
    ]

    document.getElementById("YCH" + offer + "_img").src = "Images/SeasonalArt/" + month + images[(offer-1)*5 + (newSelected-1)]
}