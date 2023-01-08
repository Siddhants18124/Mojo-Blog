import  {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Mojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;
<nav className="navbar">
    <h1>The Dojo Blog</h1>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create"></Link>
    </div>
</nav>