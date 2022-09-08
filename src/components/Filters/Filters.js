import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = () => {
  return (
    <div className='col-3'>
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div style={{cursor: "pointer"}} className="text-center mb-4 text-primary text-decoration-underline">Clear Filters</div>

      <div className="accordion" id="accordionExample">
        <Species />
        <Status />
        <Gender />
</div>
    </div>
  )
}

export default Filters