import React from 'react';
import { NavLink, Link } from 'react-router-dom';


// navlink is imported because it has a propery called activeClassName to design the active page
const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className='container'>
     <Link to="/" className="navbar-brand fs-2 fw-bold ubuntu">Rick & Morty <span className="text-primary">Wiki</span></Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
       <div className="navbar-nav fs-5">
         <NavLink to='/' className="nav-link active" >Characters</NavLink>
         <NavLink to='/episodes' className=" nav-link" >Episodes</NavLink>
         <NavLink to='/locations' className="nav-link" >Locations</NavLink>
       </div>
     </div>
     </div>
   </nav>
  )
}

export default Navbar