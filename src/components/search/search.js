import React from 'react';
import { Button, Input } from 'reactstrap';
import styles from "./Search.module.scss";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className='d-flex flex-sm-row  flex-column align-items-center justify-content-center gap-4 mb-3'>
          <Input 
          onChange={(e)=>{
               // for search to begin from page number 1               
               setPageNumber(1);
               setSearch(e.target.value);
          }}
          placeholder='Search for characters' type="text" className={styles.input}/>
          <Button
           onClick={(e) => {
               e.preventDefault();
           }}
           outline color='primary' className={`${styles.btn} btn`}>Search</Button> 
    </form>
  )
}

export default Search