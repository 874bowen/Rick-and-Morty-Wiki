import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
     
     return (
          // because it is taking time add the ? 
          // if info exists then add pages
          <ReactPaginate 
          className='pagination justify-content-center gap-4 my-4' nextLabel="Next >" previousLabel="< Prev"  
          nextLinkClassName="btn btn-primary"
          previousLinkClassName='btn btn-primary'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          activeClassName='active'
          forcePage={pageNumber === 1? 0: pageNumber-1}
          onPageChange={(data) => {
               setPageNumber(data.selected+1);
          }}
          pageCount={info?.pages} />
     )
}

export default Pagination;