import { useState } from 'react';
import {FcSearch} from 'react-icons/fc';
import css from './SearchBar.module.css';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const SearchBar = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState('');

   const hendleInputChange = (e) => {
    setInputValue(e.currentTarget.value.toLowerCase().trim())

   }

    const hendleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
      if(!inputValue.trim()){
        Notiflix.Notify.info('PLease, fill search field.');
        return;
      }
      setInputValue('');
    }

    return (
    <div className={css.searchbar}>    
        <form  className={css.searchForm} onSubmit={hendleSubmit}>
        <button type="submit" className={css.searchFormbutton} >
         <FcSearch style={{marginRight:8, width:"20", height:"20"}}/>
        </button>
  
        <input
          className={css.searchForminput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={hendleInputChange}
          value={inputValue}
        />
      </form>
     </div>
    )
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func,

}
