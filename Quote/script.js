
'use strict';

const e = React.createElement;
const {useState, useEffect} = React;
const url = 'https://api.quotable.io/random';

const generateQuote = () =>{
  const generateQuoteColor = () =>{
    const letters = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i <6 ; i++){
      color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
  };
  const [color ,setColor] = useState('');

  useEffect(() =>{
    const interval = setInterval(() =>{
      setColor(generateQuoteColor());
    },7000);
    return () =>{
      clearInterval(interval);
    }
  },[]);

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = async () =>{
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Could not fetch the  Quote");
      }
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    }
    catch(err){
      console.error("Could not display quote")
    }
  }
  useEffect(() =>{
    const quoteId = setInterval(() =>{
      getQuote();
    },9000);
    return () =>{
      clearInterval(quoteId);
    }
  },[]);

  return(
    e('div', {style:{backgroundColor: color}},
    e('div', {style:{backgroundColor:color, color:'white', fontSize:'1.2rem', transition:'1s', borderRadius: '15px',opacity:'0.8'}}, quote),
    e('p', {style:{fontStyle:'italic', color:'darkblue', fontWeight:'800'}},`_${author}`))
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  e(generateQuote)
)