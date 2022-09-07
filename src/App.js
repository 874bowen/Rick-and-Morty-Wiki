import React, { Component, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';

function App() {
  let [pageNumber, setPageNumber] = useState(1); 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let [fetchedData, updateFetchedData] = useState({});
  // destructuring which is same as fetchedData.rasults
  let {info, results} = fetchedData;
  useEffect(() => {
    (async function (){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center my-2 ubuntu">Rick & Morty <span className="text-primary">Wiki</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
          <div className='row'>
            <Cards results={results} />
          </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
