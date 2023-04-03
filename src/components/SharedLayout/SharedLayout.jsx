import {Outlet} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
    return (
      <div>
        <header className={css.header}>
          <nav className={css.nav}>
            <NavLink className={css.navLink} to="/" >Home</NavLink>
            <NavLink className={css.navLink} to="/movies">Movies</NavLink>
            
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </div>
    );
  };
  