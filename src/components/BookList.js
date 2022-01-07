import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
	static contextType = ThemeContext;

	render() {
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;
		return (
			<div
				className='book-list'
				style={{ background: theme.bg, color: theme.text }}>
				<ul>
					<li style={{ background: theme.ui }}>In Search of Lost Time</li>
					<li style={{ background: theme.ui }}>Ulysses</li>
					<li style={{ background: theme.ui }}>War & Peace</li>
				</ul>
			</div>
		);
	}
}

export default BookList;
