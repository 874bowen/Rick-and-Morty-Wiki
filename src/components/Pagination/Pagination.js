import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
     
     return (
          // because it is taking time add the ? 
          // if info exists then add pages
          <ReactPaginate 
          className='pagination justify-content-center' nextLabel="Next" previousLabel="Prev"  
          nextClassName="btn btn-primary"
          previousClassName='btn btn-primary'
          pageCount={info?.pages} />
     )
}

export default Pagination