let AllData=document.querySelector(".quotes")


let dataQuotes=[
 "The only way to do great work is to love what you do.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"The best way to predict the future is to create it." ,
"Don't watch the clock; do what it does. Keep going." ,
"Believe you can and you're halfway there." , 
"What we think, we become." ,
"The only limit to our realization of tomorrow is our doubts of today.",
"Difficult roads often lead to beautiful destinations.",
"Be yourself; everyone else is already taken." ,
"Do not wait to strike till the iron is hot, but make it hot by striking.",
"Dream big and dare to fail." ,
"Happiness is not something ready-made. It comes from your own actions." ,
"The harder you work for something, the greater you’ll feel when you achieve it." ,
"Start where you are. Use what you have. Do what you can." ,
"It always seems impossible until it’s done." ,
"Success is not how high you have climbed, but how you make a positive difference to the world.",
"The greatest glory in living lies not in never falling, but in rising every time we fall." ,
"The purpose of our lives is to be happy",
];


function  qutoesGenertae()
{
    const a=Math.floor(Math.random() *dataQuotes.length);
    console.log(a)
    AllData.textContent=dataQuotes[a]
}