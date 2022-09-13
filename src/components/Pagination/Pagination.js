import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
     let [width, setWidth] = useState(window.innerWidth);
     // console.log(width);
     let updateDimension = () => {
          setWidth(window.innerWidth);
     }
     useEffect(() => {
          window.addEventListener("resize", updateDimension)
          return () => window.removeEventListener("resize", updateDimension);
     }, [width])
     return (
          // because it is taking time add the ? 
          // if info exists then add pages
          <>
          <style jsx='true'>
          {`
          @media (max-width: 768px){
               .nxt, .prv {
                    display: none;
               }
               .pagination{
                    font-size: 14px;
               }
          }
          `}
          </style>
          
          <ReactPaginate 
          className='pagination justify-content-center gap-4 my-4' nextLabel="Next >" previousLabel="< Prev"  
          nextLinkClassName="btn btn-primary nxt"
          previousLinkClassName='btn btn-primary prv'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          activeClassName='active'
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
          forcePage={pageNumber === 1? 0: pageNumber-1}
          onPageChange={(data) => {
               setPageNumber(data.selected+1);
          }}
          pageCount={info?.pages} />
          </>
     )
}

export default Pagination;