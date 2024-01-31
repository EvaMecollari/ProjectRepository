
import { Link,useNavigate } from 'react-router-dom' 
// import Home from './Home'

function Navbar() {
    
    

  return (
    <div className='bg-light'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/home' className="navbar-brand" href="#">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/create/new' className="nav-link active" aria-current="page" href="#">Create</Link>
        </li>
        <li className="nav-item">
          <Link to='/display' className="nav-link" href="#">Display all</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" href="#">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar