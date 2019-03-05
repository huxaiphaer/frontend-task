import React from 'react';
import '../styles/sidebar.scss';

const SideBar = () => (
	<div>
			<div className="sidebar-size "> <b>List of Notes </b></div>
		<div className="sidebar-size">
			<ul className="collection">
				<li className="collection-item">First</li>
				<li className="collection-item">Second</li>
				<li className="collection-item">Third</li>
				<li className="collection-item">Forth</li>
			</ul>
		</div>
	</div>
);

export default SideBar;
