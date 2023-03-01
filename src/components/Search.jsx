import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/actions/search";

const Search = () => {
	const [inputValue, setInputValue] = React.useState('');

	const dispatch = useDispatch()
	const { search } = useSelector(({ search }) => {
		return ({
			search: search.bySearch
		})
	})

	const gatSearch = (value) => {
		setInputValue(value)
	}

	const handleSearch = () => {
		dispatch(setSearch(inputValue))
		setInputValue("")
	}

	return (
		<div className="header__search">
			<input
				type="text"
				value={inputValue}
				placeholder='Пошук по сайту '
				name="Поиск по сайту"
				id="search"
				onChange={event => gatSearch(event.target.value)}
			/>
			<Link to={'/searchPages'} onClick={() => handleSearch()} href="#"> <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
				<title id="title">Search Icon
				</title>
				<desc id="desc">A magnifying glass icon.</desc>
				<g className="search-path" fill="none" stroke="#848F91">
					<path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
					<circle cx="8" cy="8" r="7" />
				</g>
			</svg>
			</Link>
		</div>
	);
}

export default Search;
