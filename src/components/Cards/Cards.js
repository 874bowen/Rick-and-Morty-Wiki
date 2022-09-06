import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

const Cards = ({results}) => {
  let display;
  console.log(results);
  if (results){
    display = results.map(result => {
      let {name, image, status, location, species} = result;
      return(
        <div key={result.id} className='col-4 mb-2 position-relative'>
          <Card>
            <CardImg src={image} className="imgs-fluid" alt={name}/>
            <CardBody>
                <CardTitle className='fs-4 fw-bold'>{name}</CardTitle>
                <div className='fs-6'>Last location</div>
                <CardText className='fs-5'>{location.name}</CardText>
            </CardBody>
        </Card>
        <div className='position-absolute badge bg-danger'>{status}</div>
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