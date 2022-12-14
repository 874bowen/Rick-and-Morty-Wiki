import React from 'react'

const FilterBtn = ({ item, name, index, task, setPageNumber }) => {
  return (
    <div>
      <style jsx="true">
      {`

      .inp:checked + label {
        background-color: #0b5ed7;
        color: white;
      }

      input[type='radio']{
        display: none;
      }
      `}
      </style>
      <div className="form-check">
        <input
         onClick={()=>{
          setPageNumber(1);
          task(item);
         }}
         className="form-check-input inp" type="radio" name={name} id={`${name}-${index}`} />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`} >{item}</label>
      </div>
    </div>
  )
}

export default FilterBtn