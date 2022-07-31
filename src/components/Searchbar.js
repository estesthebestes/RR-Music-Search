import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBar(props) {
	const { term, handleSearch } = useContext(SearchContext);

	return (
		<form>
			<input ref={props.ref} type='text' placeholder='Search Here' />
			<button onClick={(e) => handleSearch(e, props.ref.current.value)}>
				Submit
			</button>
		</form>
	);
}

export default SearchBar;
