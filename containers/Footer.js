import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import ImageLocal     from '@/components//ImageLocal';

class Footer extends BasePanel{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}

	render() {
		return (
			<footer>
				<div>
					Creado por: Wilfer Daniel Ciro Maya <br />
					<a href="mailto:wilcirom@gmail.com" target="_blank">wilcirom@gmail.com</a>
				</div>
			</footer>
		);
	}
}

export default Footer;
