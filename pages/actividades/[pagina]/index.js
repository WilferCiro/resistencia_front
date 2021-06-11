import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import {RiFullscreenExitFill} from 'react-icons/ri';
import ImageLocal     from '@/components//ImageLocal';

class PaginasPage extends BasePanel{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		let pagina = this.props.pagina;
		return (
			<div className="page-center">
				{
					(pagina) ?
					<div>
						<h2>{pagina.titulo}</h2>
						<div dangerouslySetInnerHTML={{
							__html: pagina.descripcion.replaceAll("\n", "<br />")
						}} />
						<div className="image-pagina">
							<ImageLocal
								image={{"imagen" : pagina.portada, "descripcion" : "Logo"}}
								width={1024}
								height={300}
								/>
						</div>
					</div>
					:
					<div>Cargando...</div>
				}

			</div>
		);
	}
}

PaginasPage.getInitialProps = async ({query}) => {
	let pagina = [];

	let [_paginas] = await Promise.all([
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "actividad",
			method: 'GET',
			body: {
				"modelo" : "activos",
				"campos" : {
					"pk" : query.pagina
				}
			}
		}),
	]);
	if(_paginas !== undefined && _paginas["estado_p"] === 200) {
		pagina = _paginas["data"][0];
	}
	return {query, pagina};
}

export default PaginasPage;
