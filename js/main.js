
// Beginner Questions
var questNum = 0;
var mySpirit = 5;
var myPublicOpinion = 3;
var mySaintMoral = 4;
var myFinance = 2;

// Questions ------> The Beginnings (1820 -1831)
const qOne = {
        type:"Financial", 
        text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
        correctOpt:"Go to Dig" , 
        incorrectOpt:"Stay on the Farm", 
        correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects Public Opinion. ", 
        incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 
        correctRes: raiseFinance(),
        incorrectRes: dropOpinion(),
    };

const qTwo = {
    type:"Spiritual", 
    text:"A man comes to you, Joseph Smith, while living in Harmony Pennsylvania. He says he has had a vision and want to see the plate and help you. You can either trust him or keep your distance.", 
    correctOpt:"Trust Him" , 
    incorrectOpt:"Keep Distance", 
    correctExp:"Good Intuition! This is Oliver Cowdery. He will be essential in the translation of the Book of Mormon and support you for much of your life. Spirituality rises.", 
    incorrectExp: "As you dismiss this portential helpin hand the Spirit tells you that He was sent by God. Spirituality drops.", 
    correctRes: raiseSprit(),
    incorrectRes: dropSpirit(),
};

const qThree =  {
    type:"Financial", 
    text:"You, Oliver Cowdrey, are working with Joseph Smith to translate the Book of Mormon.  ", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 

};

const qFour = {
    type:"Financial", 
    text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 

};




                               

// Questions ------> Two Church Centers (1831-1838)
const qFive =  {
    type:"Financial", 
    text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 

};

const qSix =  {
    type:"Financial", 
    text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 

};

const qSeven =  {
    type:"Financial", 
    text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 

};

const qEight =  {
    type:"Financial", 
    text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 

};

// Questions ------> Nauvoo (1839 -1846)

const qNine =  {
    type:"Financial", 
    text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 
    Spirit: 0,
    PublicOpinion: 0,
    SaintMoral: -1,
    Finance: 1,
}
const qTen =  {
    type:"Financial", 
    text:"You are a young Joseph Smith working on the farm with your Dad. Money is tight, but you manage. A neighbor offers to pay you to look for burried treasure on his property. Do you go?", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 
    Spirit: 0,
    PublicOpinion: 0,
    SaintMoral: -1,
    Finance: 1,
}
const qEleven = {
    type:"Spiritual", 
    text:"You, the prophet Joseph Smith, have just been approached by a group of women hoping to provide chartiable support ot men working on the temple. They ask for your advice and how they can help. You can either instruct them that they are to watch over their families with greater care, or that they should help the poor.", 
    correctOpt:"Focus on the poor" , 
    incorrectOpt:"Focus on your family", 
    correctExp:"Excellent choice. This organization of women was to be in the order of the priesthood and become what we know today as the Relief Society. Saint Moral increases.", 
    incorrectExp: "Although this is excellent advice, the women were already supporting their families and were asking to do something more. Saint Moral drops.", 
    Spirit: 0,
    PublicOpinion: 0,
    SaintMoral: 1,
    Finance: 0,
}

const qTwelve = {
    type:"Spiritual", 
    text:"You have just restored the priesthood and established the Relief Society. ", 
    correctOpt:"Go to Dig" , 
    incorrectOpt:"Stay on the Farm", 
    correctExp:"Great work! You decide to help support the family. Unfortunately, your reputation will be tarnished and people will spread rumors about you being a 'gold digger.' This negativley affects future Saint Moral. ", 
    incorrectExp: "You decide to stay on the farm and lose out on the financial benefits", 
    Spirit: 0,
    PublicOpinion: 0,
    SaintMoral: -1,
    Finance: 1,
}
// Questions ------> Chruch in the West (1846-1950)

var questions = [ qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen, qEleven, qTwelve, qThriteen, qFourteen, qFifteen, qSixteen,]
var degrees = ["Terrible", "Very Poor", "Poor", "Decent", "Good" , "Excellent"]


function dropSpirit(){
    mySpirit = mySpirit - 1; 
}
function dropFinance(){
    myFinance = myFinance - 1; 
}

function dropMoral(){
    mySaintMoral = mySaintMoral - 1; 
}

function dropOpinion(){
    myPublicOpinion = myPublicOpinion - 1; 
}

function raiseSprit(){
    mySpirit = mySpirit + 1; 
}
function raiseFinance(){
    myFinance = myFinance + 1; 
}

function raiseMoral(){
    mySaintMoral = mySaintMoral + 1; 
}

function raiseOpinion(){
    myPublicOpinion = myPublicOpinion + 1; 
}