import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom'

export const SharedLayout = () => {
    return (
      <div>
        <header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
            <Link to="/movieinfo">MovieInfo</Link>
          </nav>
        </header>
        <Outlet />
      </div>
    );
  };
  