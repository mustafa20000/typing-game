const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words= [];
let wordIndex=0;

let startTime= Date.now();

const quoteElement= document.getElementById('quote');
const messageElement= document.getElementById('message');
const typedValueElement= document.getElementById('typed-value');

document.getElementById('start').addEventListener('click',()=> {

    const quoteIndex= Math.floor(Math.random()*quotes.length);
    const quote= quotes[quoteIndex];

    words= quote.split(' ');
    wordIndex=0;

    const spanWords= words.map(function(word) {return `<span>${word} </span>`});
   
    quoteElement.innerHTML= spanWords.join('');

    quoteElement.childNodes[0].className= 'highlight';

    messageElement.innerText= '';

    typedValueElement.value= '';

    typedValueElement.focus();

    startTime= new Date().getTime();
    
});

typedValueElement.addEventListener('input' , () =>{
    const currentWord= words[wordIndex];

    const typedvalue= typedValueElement.value;

    if(typedvalue === currentWord && wordIndex === words.length -1){
        const elapsedTime = new Date().getTime()- startTime;
        const message= `CONGRATUALTIONS! You Finished in ${elapsedTime /1000} Seconds.`; 
        messageElement.innerText = message;
    } else if (typedvalue.endsWith(' ') && typedvalue.trim() === currentWord){
       typedValueElement.value = '';
       wordIndex++;
       
       for(const wordElement of quoteElement.childNodes){
        wordElement.className= '';
    }
    quoteElement.childNodes[wordIndex].className= 'highlight';
    } else if(currentWord.startsWith(typedvalue)){
        typedValueElement.className= '';
    } else{
        typedValueElement.className= 'error';
    }
});
