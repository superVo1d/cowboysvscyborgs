import React, { useState, useEffect } from 'react';

const path = '/images/gif/'

let arrayOfGifs = []

while (arrayOfGifs.length < 15){
    var r = Math.floor(Math.random() * 38) + 1;
    if(arrayOfGifs.indexOf(r) === -1) arrayOfGifs.push(r);
}

const GifAdder = () => {

  let interval;

  const [gifsToShow, setGifsToShow] = useState([]);

  const [count, setCount] = useState(0);

  function tick() {
    if (count <= 15) {

      //setCount(count + 1);

      setCount(prev => {
        console.log(prev, count)
        return prev + 1
      });
      
      setGifsToShow(() => {
        console.log(gifsToShow)
        return [...gifsToShow, arrayOfGifs[count]]
      })
      console.log(gifsToShow)
    } else {
      setCount(2);
    }
  }

  useEffect(() => {
    interval = setInterval(() => tick(), 3000);
  }, () => clearInterval(interval))

  return gifsToShow.map((item, i) => {
         return (<img  key={i}
                       src={path + item + '.gif'} 
                 className="position-fixed" 
                     style={{top: Math.floor(Math.random() * 80) + '%', 
                            left: Math.floor(Math.random() * 80) + '%',
                          zIndex: 10 + Math.floor(Math.random() * arrayOfGifs.length),
                       maxHeight: "300px",
                        maxWidth: "300px"}} 
               />)
      })
}

export default GifAdder;
