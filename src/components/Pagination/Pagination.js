import React from 'react'
import { Button } from 'reactstrap';

const Pagination = ({ setPageNumber }) => {
     let next = () => {
          setPageNumber(x => x+1);
     };
     let prev = () => {
          setPageNumber(x => x-1);
     };
     return (
     <div className='container d-flex justify-content-center gap-5'>
          <Button onClick={prev} className='btn btn-primary'>Prev</Button>
          <Button onClick={next} className='btn btn-primary'>Next</Button>   
     </div>
     )
}

export default Pagination