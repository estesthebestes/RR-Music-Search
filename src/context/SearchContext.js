import { createContext, useRef } from 'react';

export const SearchContext = createContext({
	term: useRef(''),
	handleSearch: () => {},
});
