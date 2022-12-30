import './styles.css'
const Navbar = () => {
  return (
    <nav className="bg-primary navbar navbar-dark navbar-expand-md bg-primary main-nav">
    <div className="container-fluid">
      <a href="link" className="nav-logo-text">
        <h4>Carros Top</h4>
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav offset-md-2 main-menu">
          <li>
            <a href="link" className='active'>Home</a>
          </li>
          <li>
            <a href="link">Catálogo</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
