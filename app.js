const quotes = {
    "- william" : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "- nicolla" : "The way to get started is to quit talking and begin doing.",
    "- Steve Jobs" : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    "- peter" : "If life were predictable it would cease to be life, and be without flavor.",
    "- mark" : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "- Robbert" : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "- Hasan" : "Life is what happens when you're busy making other plans. -John Lennon",
    "- Gareeb" : "Tum gareeb ho",
    "- Parapar" : "Kabhi aar kabhi par",
}
const button = document.querySelector("button").addEventListener("click", () =>{
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()* authors.length)];
    let quote = quotes[author];
    const container = document.querySelector(".container");
    container.innerHTML =`
        <P class="qoute">${quote}</P>
        <em class="author">${author}</em>
        `
});
const color = () =>{
    let random = Math.random();
    let randomColor = Math.floor(Math.random() * 16777215);
    let randomColorCode = "#" + randomColor.toString(16);
    document.querySelector("body").style.backgroundColor = randomColorCode;
}
const colorbtn = document.querySelector("button").addEventListener("click", ()=>{
    color();
});
const colorbtnn = () =>{
    let random = Math.random();
    let randomColor = Math.floor(Math.random() * 16777215);
    let randomColorCode = "#" + randomColor.toString(16);
    document.querySelector(".author").style.color = randomColorCode;
}
const colorbt = document.querySelector("button").addEventListener("click", ()=>{
    colorbtnn();
});