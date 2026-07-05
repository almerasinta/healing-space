const quotes = [
"Kamu sudah melakukan yang terbaik hari ini. 🤍",
"Pelan-pelan juga tidak apa-apa.",
"Jangan lupa istirahat, kamu bukan mesin.",
"Semua akan membaik pada waktunya.",
"Kamu lebih kuat daripada yang kamu kira.",
"Hari buruk bukan berarti hidupmu buruk."
];

function newQuote(){
const random = Math.floor(Math.random()*quotes.length);
document.getElementById("quote").innerText = quotes[random];
}
