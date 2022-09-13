import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Category/InputGroup';

const Episodes = () => {
     let [id, setId] = useState(1);
     let [info, setInfo] = useState([]);
     let api = `https://rickandmortyapi.com/api/episode/${id}`;
     let {air_date, name} = info;
     let [results, setResults] = useState([]);

     useEffect(() => {
          (async function(){
               let data = await fetch(api).then((res) => res.json());
               setInfo(data);

               let allCharImgs = await Promise.all(
                    data.characters.map((char) => {
                         return fetch(char).then((res) => res.json());
                    })
               )
               setResults(allCharImgs);
          })();
     }, [api])
     return (
          <div className="container">
               <div className="row mb-4">
                    <h1 className="text-center mb-4">
                         Episode : <span className="text-primary">{name === ""? "Unknown" : name}</span>
                    </h1>
                    <h5 className="text-center">
                    Air Date {air_date === ""?  "Unknown" : air_date}
                    </h5>
               </div>
               <div className="row">
                    <div className="col-3">
                         <h4 className="text-center mb-4">
                              Pick Episodes 
                         </h4>
                         <InputGroup setId ={setId} name="Episode" total={51} />
                    </div>
                    <div className="col-8">
                         <div className="row">
                              <Cards page="/episodes/" results={results} />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Episodes;