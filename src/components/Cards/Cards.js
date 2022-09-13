import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';


const Cards = ({results, page}) => {
  let display;
  console.log(results);
  if (results){
    display = results.map(result => {
      let {id, name, image, status, location} = result;
      return(
        <Link style={{textDecoration: "none"}} to={`${page}${id}`} key={id} className='col-4 mb-2 position-relative text-dark'>
          <Card className={`${styles.cards }`}>
            <CardImg src={image} className="imgs-fluid" alt={name}/>
            <CardBody>
                <CardTitle className='fs-4 fw-bold'>{name}</CardTitle>
                <div className='fs-6'>Last location</div>
                <CardText className='fs-5'>{location.name}</CardText>
            </CardBody>
        </Card>
        {(function() {
          if(status === "Dead"){
            return(
              <div className={`${styles.badge} position-absolute badge bg-danger`} >{status}</div>
            );
          } else if( status === "Alive"){
            return(
              <div className={`${styles.badge} position-absolute badge bg-success`} >{status}</div>
            );
          } else{
            return(
              <div className={`${styles.badge} position-absolute badge bg-secondary`} >{status}</div>
            );
          }
        })()}
        </Link>
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