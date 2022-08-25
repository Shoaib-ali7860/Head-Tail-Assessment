
import { Link } from "react-router-dom";
function WebsiteLayout({
  children,
}) {
 

  return (
    <div>
      <header className="w-100 pt-3  px-3 px-md-0 bg-info d-sm-flex justify-content-around align-items-center ">
      
        <Link to="/" className='text-decoration-none text-dark'>
        <p>Home</p>
        </Link>
        <Link to="/about" className='text-decoration-none text-dark'>
        <p>About Us</p>
        </Link>
        <Link to="/head-and-tail" className='text-decoration-none text-dark'>
        <p>Head and tail </p>
        </Link>
     
      </header>
      <div  style={{minHeight:'70vh'}}>
        {
          children
        }

      </div>
      <footer className="bg-secondary p-5 text-white">
        <div>
          <b>Footer Dummy</b>
        </div>
        <Link to="/about" className='text-decoration-none text-dark'>
          <p className="text-white">About Us</p>
        </Link>
      </footer>
    </div>
  );
}




export default WebsiteLayout
