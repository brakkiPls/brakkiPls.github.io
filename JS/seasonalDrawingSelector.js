function getCurrSeasonalDrawings () {

    const hl1 = [
        "Seasonal Drawing (January) - ",
        "Seasonal Drawing (February) - ",
        "Seasonal Drawing (March) - ",
        "Seasonal Drawing (April) - ",
        "Seasonal Drawing (May) - ",
        "Seasonal Drawing (June) - Pride Flag",
        "Seasonal Drawing (July) - ",
        "Seasonal Drawing (August) - ",
        "Seasonal Drawing (September) - ",
        "Seasonal Drawing (October) - ",
        "Seasonal Drawing (November) - ",
        "Seasonal Drawing (December) - ",
    ];

    const desc1 = [
        //jan
        "",
        //feb
        "",
        //mar
        "",
        //apr
        "",
        //may
        "",
        //jun
        "Show your Pride with a big flag! Make your Character carry a huge Pride Flag of your chosing." +
		"What are they doing with that flag? Who knows maybe they Sleep in it like a blanket or use it like a glider?" +
		"It can be whatever you can think of when you chose to get this Seasonal Drawing.",
        //jul
        "",
        //aug
        "",
        //sep
        "",
        //oct
        "",
        //nov
        "",
        //dec
        "",
    ];

    const hl2 = [
        "Seasonal Drawing (January) - ",
        "Seasonal Drawing (February) - ",
        "Seasonal Drawing (March) - ",
        "Seasonal Drawing (April) - ",
        "Seasonal Drawing (May) - ",
        "Seasonal Drawing (June) - Pride Heart",
        "Seasonal Drawing (July) - ",
        "Seasonal Drawing (August) - ",
        "Seasonal Drawing (September) - ",
        "Seasonal Drawing (October) - ",
        "Seasonal Drawing (November) - ",
        "Seasonal Drawing (December) - ",
    ];
    
    const desc2 = [
        //jan
        "",
        //feb
        "",
        //mar
        "",
        //apr
        "",
        //may
        "",
        //jun
        "You love hugs? What about having your character hug a HUGE Pride Heart!" +
		"This Seasonal Drawing lets you do exactly that! Maybe you don't want to hug?" +
		"Maybe you want to use the Heart as a sleeping pillow, or hold it into the air to show everyone what your Heart is?" +
		"It's all up to your imagination!",
        //jul
        "",
        //aug
        "",
        //sep
        "",
        //oct
        "",
        //nov
        "",
        //dec
        "",
    ];

    const hl3 = [
        "Seasonal Drawing (January) - ",
        "Seasonal Drawing (February) - ",
        "Seasonal Drawing (March) - ",
        "Seasonal Drawing (April) - ",
        "Seasonal Drawing (May) - ",
        "Seasonal Drawing (June) - Pride Sippies",
        "Seasonal Drawing (July) - ",
        "Seasonal Drawing (August) - ",
        "Seasonal Drawing (September) - ",
        "Seasonal Drawing (October) - ",
        "Seasonal Drawing (November) - ",
        "Seasonal Drawing (December) - ",
    ];

    const desc3 = [
        //jan
        "",
        //feb
        "",
        //mar
        "",
        //apr
        "",
        //may
        "",
        //jun
        "Ever wanted to sip on some Gay Nectar? Maybe some Trans Tea, Bi Juice or even Non Binary Beverages." +
		"Look no further! This Drawing will be of your Character sipping on a Punch of Pride." +
		"Feel free to customize the drinking cup, the expression and the pose to whatever you want!" +
		"Maybe you want to raise a glass of Lesbian Liquor sassily; it's all up to you!",
        //jul
        "",
        //aug
        "",
        //sep
        "",
        //oct
        "",
        //nov
        "",
        //dec
        "",
    ];

    //const today = new Date()
    //let drawing = today.getMonth();
    // console.log(drawing)
    let drawing = 5;

    document.getElementById("YCH1_hl").innerHTML = hl1[drawing];
    document.getElementById("YCH1_desc").innerHTML = desc1[drawing];
    document.getElementById("YCH1_img").src = "Images/SeasonalArt/" + drawing + "_1_0.png"
    console.log(hl1[drawing] + "\n" + desc1[drawing] + "\n" + "Images/SeasonalArt/" + drawing + "_1_0.png")

    document.getElementById("YCH2_hl").innerHTML = hl2[drawing];
    document.getElementById("YCH2_desc").innerHTML = desc2[drawing];
    document.getElementById("YCH2_img").src = "Images/SeasonalArt/" + drawing + "_2_0.png"
    console.log(hl2[drawing] + "\n" + desc2[drawing] + "\n" + "Images/SeasonalArt/" + drawing + "_2_0.png")
    
    document.getElementById("YCH3_hl").innerHTML = hl3[drawing];
    document.getElementById("YCH3_desc").innerHTML = desc3[drawing];
    document.getElementById("YCH3_img").src = "Images/SeasonalArt/" + drawing + "_3_0.png"
    console.log(hl3[drawing] + "\n" + desc3[drawing] + "\n" + "Images/SeasonalArt/" + drawing + "_3_0.png")
}