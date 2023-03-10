import '../Search/search.css';
import {ReactComponent as SearchIcon} from '../images/ic-search.svg';
import {ReactComponent as CloseIcon} from '../images/ic-close-input.svg';


function Search({changeInput}) {
  return (
   <form className="search">
        <input type="text" className='search__input' placeholder='Поиск' onInput = {changeInput} />
        <button className='search__btn'>
            <SearchIcon/>
            {false && <CloseIcon/>}
        </button>
   </form>
  )
}

export default Search;
