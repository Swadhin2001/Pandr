import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/new-white-logo.png'

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0" style= {{"animation": "transitionIn 2s"}}>
        <div className="container-fluid mx-4 ">
          <Link className="navbar-brand text-light" href="/Home_page" style={{"fontWeight":"600", "fontSize":"16px"}}>
            <Image
              src = {logo}
              alt = " "
              style = {{"width": "38%", "height": "18%"}}
              className='p-2 mx-4'
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-3" >
                  <Link className="nav-link active text-light" aria-current="page" href='/Aboutus_page' style={{"fontWeight":"600", "fontSize":"16px"}}>About Us</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" href="/Our_team" style={{"fontWeight":"600", "fontSize":"16px"}}>Our Team</Link>
              </li>
              <div className="dropdown mx-3">
                <button className="nav-link dropdown-toggle text-light" href="#" id="dropdownMenuButton" type="button" data-mdb-toggle="dropdown" aria-expanded="false" style={{"fontWeight":"600", "fontSize":"16px"}}>
                  Services
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item text-dark" href="/Consulting">Consulting</Link></li>
                  <li><Link className="dropdown-item text-dark" href="/Accounting">Accounting</Link></li>
                  <li><Link className="dropdown-item text-dark" href="/Assurance">Assurance</Link></li>
                  <li><Link className="dropdown-item text-dark" href="/Tax">Tax</Link></li>
                </ul>
              </div>
              <li className="nav-item mx-3 ">
                <Link className="nav-link text-light" href="/WorkWithUs" style={{"fontWeight":"600", "fontSize":"16px"}}>Work With Us</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" href="/Contact_us" style={{"fontWeight":"600", "fontSize":"16px"}}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar