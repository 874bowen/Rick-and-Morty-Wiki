import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css'


// navlink is imported because it has a propery called activeClassName to design the active page
const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg mb-4 navbar-light bg-light">
     <div className='container'>
     <Link to="/" className="navbar-brand fs-2 fw-bold ubuntu">Rick & Morty <span className="text-primary">Wiki</span></Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <style jsx>
          {`
          button[aria-expanded="false"] > .close {
            dispay: none;
          }
          button[aria-expanded="true"] > .open {
            dispay: none;
          }
          `}
        </style>
       <i className='fas fa-bars fw-bold text-dark open'></i>
       <i className='fas fa-times fw-bold text-dark close'></i>
     </button>
     <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
       <div className="navbar-nav fs-5">
         <NavLink to='/' activeClassName="active" className="nav-link" >Characters</NavLink>
         <NavLink to='/episodes' className=" nav-link" >Episodes</NavLink>
         <NavLink to='/locations' className="nav-link" >Locations</NavLink>
       </div>
     </div>
     </div>
   </nav>
  )
}

export default Navbar