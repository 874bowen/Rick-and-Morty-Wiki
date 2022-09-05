import React from 'react'

const Cards = ({results}) => {
  let display;
  if (results){
    display = results.map(result => {
      return(
        <div key={result.id} className='col-4'>
         { result.name}
        </div>
      );
    });
  } else {
    display = "No cards found 😢"
  }
  return (
     <>
          {display}
     </>
  )
}

export default Cards