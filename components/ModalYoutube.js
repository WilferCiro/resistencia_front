import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import {RiCloseFill}  from 'react-icons/ri';

class ModalYoutube extends BasePanel{
	constructor(props) {
		super(props);
		this.state = {
			open : false,
			url: "",
			title: this.props.title
		}
	}
	componentDidMount() {
	}

	close() {
		this.setState({
			open: false
		})
	}

	open(url, title="Video de youtube") {
		this.setState({
			open: true,
			url: url,
			title: title
		})
	}

	render() {
		let classbg = this.state.open ? "open" : "";
		return (
			<div>
				<div className={"modal-background " + classbg} onClick={(e) => this.close()}></div>
				<div className={"modal modal-4 " + classbg}>
					<div className="modal-header">
						<div>{this.state.title}</div>
						<div><button className="btn-icon btn-icon-min" onClick={(e) => this.close()}><RiCloseFill /></button></div>
					</div>
					<div className="modal-body">
						<iframe width="100%" height="450px" src="https://www.youtube.com/embed/7sN8jSDnniY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalYoutube;
