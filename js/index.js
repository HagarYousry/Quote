var Quotes=[
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde",
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:"Bernard M. Baruch",
    },
    {
        quote:"You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth.",
        author:"William W. Purkey",
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:" Mae West",
    },
    {
        quote:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        author:"Mark Twain",
    },
    {
        quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author:"Maya Angelou",
    },
    {
        quote:"We accept the love we think we deserve.",
        author:"Stephen Chbosky",
    },
    {
        quote:"I am so clever that sometimes I don't understand a single word of what I am saying.",
        author:"Oscar Wilde",
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author:"Ralph Waldo Emerson",
    },
];
var lastNumber;
var Diplayed=[];
function generateQuote(){
    if(Diplayed.length==Quotes.length){
        Diplayed=[];
    }
    do{

        var Number=Math.floor(Math.random()*Quotes.length);
    }
    while(lastNumber==Number||Diplayed.includes(Number));
     lastNumber=Number;
     Diplayed.push(Number);
    console.log(Number);
document.getElementById("quote").innerHTML=Quotes[Number].quote;
document.getElementById("author").innerHTML=Quotes[Number].author;
}