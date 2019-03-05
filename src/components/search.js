import React from 'react';

const SearchView = () => (
	<div>
		<div className="input-field col s6">
			<i className="material-icons prefix">search</i>
			<input id="icon_prefix" type="text" className="validate" />
			<label htmlFor="icon_prefix">Search</label>
		</div>
	</div>
);

export default SearchView;
