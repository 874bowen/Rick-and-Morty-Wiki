import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ( {setSpecies, setGender, setStatus, setPageNumber} ) => {
  clear = () => {
    setSpecies("");
    setGender("");
    setStatus("");
    setPageNumber(1);
    window.location.reload(false);
  }
  return (
    <div className='col-12 col-lg-3 mb-5'>
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div onClick={clear} style={{cursor: "pointer"}} className="text-center mb-4 text-primary text-decoration-underline">Clear Filters</div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
</div>
    </div>
  )
}

export default Filters