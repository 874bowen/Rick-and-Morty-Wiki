import React from 'react'

const InputGroup = ( {total, name, setId} ) => {
     total = [...Array(total).keys()];
     return (
          <div className="input-group mb-3">
          <select onChange={(e)=>setId(e.target.value)} className="form-select" id="inputGroupSelect01">
               <option value="1" selected>Choose...</option>
               {total.map((x) => {
                    return(
                         <option value={x+1}>{name} - {x+1}</option>
                    );
               })}
          </select>
          </div>
     )
}

export default InputGroup