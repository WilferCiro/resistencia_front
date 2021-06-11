import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Image          from 'next/image'
import ImageLocal     from '@/components//ImageLocal';
import { useRouter } from "next/router";

class Header extends BasePanel{
	constructor(props) {
		super(props);
		this.state = {
			selected : "inicio"
		}

		this.setSelected = this.setSelected.bind(this);
		this.goTo = this.goTo.bind(this);
	}
	componentDidMount() {
	}

	setSelected(item){
		this.setState({
			selected: item
		})
	}
	goTo(route, route_alias, id) {
		this.setSelected(id);
		this.redirectPage(route, route_alias);
	}

	render() {
		let routes = [
			{"route" : this.constants.route_index, "route_alias" : this.constants.route_index_alias, "label" : "Inicio", "id" : "inicio"},
			{"route" : this.constants.route_actividades, "route_alias" : this.constants.route_actividades_alias, "label" : "Actividades", "id" : "actividades"},
			{"route" : this.constants.route_arengas, "route_alias" : this.constants.route_arengas_alias, "label" : "Arengas", "id" : "arengas"},
			{"route" : this.constants.route_flayers, "route_alias" : this.constants.route_flayers_alias, "label" : "Flayers", "id" : "flayers"},
			{"route" : this.constants.route_paginas, "route_alias" : this.constants.route_paginas_alias, "label" : "Páginas de interés", "id" : "paginas"},
		]
		return (
			<header>
				<div className="header-logo">
					<div className="img-logo">
						<ImageLocal
							image={{"imagen" : this.constants.img_logo, "descripcion" : "Logo"}}
							width={500}
							height={500}
							/>
					</div>
				</div>
				<div>
					<button className="btn-icon btn-icon-min header-buttons-toggle">M</button>
					<div className="menu-header">
						<div className="header-buttons">
							{
								(routes).map((item, index) => {
									return <a key={Math.random()} className={(this.state.selected === item["id"]) ? "selected" : ""} onClick={(e) => this.goTo(item["route"], item["route_alias"], item["id"])}>{item["label"]}</a>
								})
							}
						</div>
					</div>
				</div>
			</header>

		);
	}
}

export default Header;
