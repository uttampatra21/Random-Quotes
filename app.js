const quotes = {
    "- william" : "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "- nicolla" : "The way to get started is to quit talking and begin doing. -Walt Disney",
    "- Steve Jobs" : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    "- peter" : "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "- mark" : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "- Robbert" : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "- Hasan" : "Life is what happens when you're busy making other plans. -John Lennon",
}
const button = document.querySelector("button").addEventListener("click", () =>{
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()* authors.length)];
    let quote = quotes[author];
    console.log(quote);

    const container = document.querySelector(".container");
    container.innerHTML =`
        <P class="qoute">${quote}</P>
        <em class="author">${author}</em>
        `
});