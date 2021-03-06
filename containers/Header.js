import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Image          from 'next/image'
import ImageLocal     from '@/components//ImageLocal';
import { useRouter } from "next/router";
import {RiMenuFill}   from 'react-icons/ri';
import FormSelect     from '@/formcomponents//FormSelect';
import Cookie   from 'js-cookie';

class Header extends BasePanel{
	constructor(props) {
		super(props);
		this.state = {
			selected : this.props.currentRoute,
			menuOpen : false
		}

		this.setSelected = this.setSelected.bind(this);
		this.goTo = this.goTo.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.changeCity  = this.changeCity.bind(this);

		this.refSelectCiudad = React.createRef();
	}
	componentDidMount() {
		let ciudad = Cookie.get("ciudad") ? Cookie.get("ciudad").toString() : "1";
		this.refSelectCiudad.current.setValue(ciudad);
	}

	setSelected(item){
		this.setState({
			selected: item,
			menuOpen: false
		})
	}
	goTo(route, route_alias, id) {
		this.setSelected(id);
		this.redirectPage(route, route_alias);
	}

	toggleMenu() {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	changeCity(value) {
		Cookie.set("ciudad", value.toString());

		this.goTo(this.constants.route_index, this.constants.route_index_alias, "/");
	}

	render() {
		let routes = [
			{"route" : this.constants.route_index, "route_alias" : this.constants.route_index_alias, "label" : "Inicio", "id" : "/"},
			{"route" : this.constants.route_actividades, "route_alias" : this.constants.route_actividades_alias, "label" : "Actividades", "id" : "/actividades/"},
			{"route" : this.constants.route_arengas, "route_alias" : this.constants.route_arengas_alias, "label" : "Arengas", "id" : "/arengas/"},
			{"route" : this.constants.route_flayers, "route_alias" : this.constants.route_flayers_alias, "label" : "Flayers", "id" : "/flayers/"},
			{"route" : this.constants.route_paginas, "route_alias" : this.constants.route_paginas_alias, "label" : "P??ginas de inter??s", "id" : "/paginas/"},
		]
		return (
			<header>
				<div className="header-logo">
					<div className="img-logo" onClick={(e) => {this.goTo(this.constants.route_index, this.constants.route_index_alias, "inicio")}}>
						<ImageLocal
							image={{"imagen" : this.constants.img_logo, "descripcion" : "Logo"}}
							width={500}
							height={500}
							/>
					</div>
				</div>
				<div>
					<button className="btn-icon header-buttons-toggle" onClick={(e) => {this.toggleMenu()}}><RiMenuFill /></button>
					<div className={(this.state.menuOpen) ? "menu-header menu-header-show" : "menu-header"}>
						<button className="btn-icon btn-icon-min header-buttons-toggle" onClick={(e) => {this.toggleMenu()}}>X</button>
						<div className="header-buttons">
							{
								(routes).map((item, index) => {
									return <a key={Math.random()} className={(this.state.selected === item["id"]) ? "selected" : ""} onClick={(e) => this.goTo(item["route"], item["route_alias"], item["id"])}>{item["label"]}</a>
								})
							}
							<div className="select-header">
								<FormSelect
									ref={this.refSelectCiudad}
									options={this.props.ciudades}
									onChange={this.changeCity}
									/>
							</div>
						</div>
					</div>
				</div>
			</header>

		);
	}
}

export default Header;
