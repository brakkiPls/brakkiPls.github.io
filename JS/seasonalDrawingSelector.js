//const today = new Date()
//var month = today.getMonth();
var month = 5;

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

    document.getElementById("YCH1_hl").innerHTML = hl1[month];
    document.getElementById("YCH1_desc").innerHTML = desc1[month];
    document.getElementById("YCH1_img").src = "Images/SeasonalArt/" + month + "_1_0.png"

    document.getElementById("YCH2_hl").innerHTML = hl2[month];
    document.getElementById("YCH2_desc").innerHTML = desc2[month];
    document.getElementById("YCH2_img").src = "Images/SeasonalArt/" + month + "_2_0.png"
    
    document.getElementById("YCH3_hl").innerHTML = hl3[month];
    document.getElementById("YCH3_desc").innerHTML = desc3[month];
    document.getElementById("YCH3_img").src = "Images/SeasonalArt/" + month + "_3_0.png"

    const images = [
        "_1_1.png","_1_2.png","_1_0.png","_1_3.png","_1_4.png",
        "_2_1.png","_2_2.png","_2_0.png","_2_3.png","_2_4.png",
        "_3_1.png","_3_2.png","_3_0.png","_3_3.png","_3_4.png",
    ]
    
    let exapmleSources = document.getElementsByClassName("example_img")

    for (var i = 0; i<exapmleSources.length; i++) {
        exapmleSources[i].src = "Images/SeasonalArt/" + month + images[i]
    }
    
    document.getElementById("img1_3").style.scale = 1.3
    document.getElementById("img2_3").style.scale = 1.3
    document.getElementById("img3_3").style.scale = 1.3
}