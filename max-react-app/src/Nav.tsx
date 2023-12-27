
const Nav = () => {
  return (
    <div>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Bio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Booking</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" >Testimony</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" >Videos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" >Contact</a>
                </li>
  
            </ul>
         </nav>
  </div>
  )
}

export default Nav