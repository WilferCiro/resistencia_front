import React          from 'react';
import Carousel       from 'react-multi-carousel';
import BasePanel      from '@/containers/BasePanel';
import {RiYoutubeFill}  from "react-icons/ri";

class Arenga extends BasePanel{
	constructor(props) {
		super(props);

		// Methods
		this.openYoutube = this.openYoutube.bind(this);
	}

	openYoutube() {
		BasePanel.modalYoutube.current.open(this.props.youtube, "Video de: " + this.props.title);
	}

	render() {
		return (
			<section>
				<h4>{this.props.title}</h4>
				<div className="section-body-right">
					<div dangerouslySetInnerHTML={{
					__html: this.props.body.replace(/\n/g, "<br />")
					}}></div>
					<div>
						{
							(this.props.youtube) ?
							<button className="btn-icon btn-red" onClick={(e) => {this.openYoutube()}} title="Ver video de youtube"><RiYoutubeFill /></button>
							:
							null
						}

					</div>
				</div>
			</section>
		);
	}
}

export default Arenga;
