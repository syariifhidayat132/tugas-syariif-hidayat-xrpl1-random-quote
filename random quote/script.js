let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

console.log(quote);
console.log(author);
console.log(btn);


async function getquote(){
     try{
        let result = await fetch('https://dummyjson.com/quotes/random')
        
        let data = await result.json();

        console.log(data);

        quote.innerHTML = data.quote;
        author.innerHTML = data.author;

     } catch(error){
        console.log("error : " + error);
     }
}
