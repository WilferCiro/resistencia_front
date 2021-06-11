import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import {RiArrowRightLine} from 'react-icons/ri';

class ActividadesPage extends BasePanel{
	constructor(props) {
		super(props);

		this.goToPage = this.goToPage.bind(this);
	}

	componentDidMount() {
	}

	goToPage(page) {
		this.redirectPage(this.constants.route_actividad_page, this.constants.route_actividad_page_alias.formatUnicorn({0:page}));
	}

	render() {
		let paginas = this.props.paginas;
		return (
			<div className="page-center">
				<h2>Actividades próximas a realizarse</h2>
				<div className="arengas-list">
					{
						(paginas) ?
							(paginas).map((item, index) => {
								return <section key={Math.random()}>
									<h4>{item.titulo}</h4>
									<div className="section-body-right">
										<p>{item.fecha} - {item.hora}</p>
										<div>
											<button className="btn-icon" onClick={(e) => {this.goToPage(item.pk)}} title="Ampliar información"><RiArrowRightLine /></button>
										</div>
									</div>
								</section>
							})
						:
						<div>No hay páginas</div>
					}
				</div>
			</div>
		);
	}
}

ActividadesPage.getInitialProps = async ({query}) => {
	let paginas = [];

	let [_paginas] = await Promise.all([
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "actividad",
			method: 'GET',
			body: {
				"modelo" : "activos_titulos",
				"campos" : {
					"ciudad" : 1
				}
			}
		}),
	]);
	if(_paginas !== undefined && _paginas["estado_p"] === 200) {
		paginas = _paginas["data"];
	}
	console.log(paginas);
	return {query, paginas};
}

export default ActividadesPage;
