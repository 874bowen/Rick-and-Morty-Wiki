import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Category/InputGroup';

const Locations = () => {
     let [id, setId] = useState(1);
     let [info, setInfo] = useState([]);
     let api = `https://rickandmortyapi.com/api/location/${id}`;
     let {name, type, dimension} = info;
     let [results, setResults] = useState([]);

     useEffect(() => {
          (async function(){
               let data = await fetch(api).then((res) => res.json());
               setInfo(data);

               let allCharImgs = await Promise.all(
                    data.residents.map((char) => {
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
                         Location : <span className="text-primary">{name === ""? "Unknown" : name}</span>
                    </h1>
                    <h5 className="text-center">
                    Dimension : {dimension === ""?  "Unknown" : dimension}
                    </h5>
                    <h6 className="text-center">
                    Type : {type === ""?  "Unknown" : type}
                    </h6>
               </div>
               <div className="row">
                    <div className="col-3">
                         <h4 className="text-center mb-4">
                              Pick Location 
                         </h4>
                         <InputGroup setId ={setId} name="Location" total={126} />
                    </div>
                    <div className="col-8">
                         <div className="row">
                              <Cards page="/locations/" results={results} />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Locations;