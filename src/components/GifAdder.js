import React, { useState, useEffect } from 'react';

const path = '/images/gif/'

let arrayOfGifs = []

while (arrayOfGifs.length < 15){
    var id = Math.floor(Math.random() * 38) + 1;
    if(arrayOfGifs.indexOf(id) === -1) arrayOfGifs.push(id);
}

const GifAdder = () => {

  const [gifsToShow, setGifsToShow] = useState([]);

  const [count, setCount] = useState(0);

  function tick() {
    setCount(prev => {
      if (prev <= 15) {
        return prev + 1
      }
      else {
        return 0
      }
    })

    setGifsToShow(() => {
      return count === 0 ? [arrayOfGifs[count]] : [...gifsToShow, arrayOfGifs[count]]
    })
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 2000);
    return () => clearInterval(interval)
  })

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
