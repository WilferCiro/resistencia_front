import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import ImageLocal from '@/components//ImageLocal'
import GridProducts from '@/containers//GridProducts';
import Image from 'next/image'
import SliderImages from '@/containers/SliderImages';
import Link from 'next/link'


class Home extends BasePanel{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		let {query} = this.props;
		return (
			<div className="page-center">
				<h2>Inicio de la página</h2>
				<div className="section-div-2">
					<section>
						<h4>¿Quiénes somos?</h4>
						<div className="section-body-left">
						<ImageLocal
							image={{"imagen" : this.constants.img_quienes_somos, "descripcion" : "Logo"}}
							width={150}
							height={150}
							/>
							<p>Somos una organización independiente que desea generar un espacio donde los diferentes comités del paro a nivel departamental puedan plantar sus ideas y propuestas, permitiendo tener una organización de la información y actividades.</p>
						</div>
					</section>
					<section>
						<h4>¿Cuáles son nuestros objetivos?</h4>
						<div className="section-body-right">
							<p>Se desea dar un soporte actualizado de eventos y demás aspectos relacionados al Paro Nacional, permitiendo generar espacios de información actualizables.</p>
							<ImageLocal
								image={{"imagen" : this.constants.img_objetivos, "descripcion" : "Logo"}}
								height={150}
								width={150}
								/>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

Home.getInitialProps = async ({query}) => {
	let indexCiudades = [];
	let [_ciudades] = await Promise.all([
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "ciudad",
			method: 'GET',
			body: {
				"modelo" : "todo",
				"ordenar_por":"nombre"
			}
		})
	]);
	if(_ciudades !== undefined && _ciudades["estado_p"] === 200) {
		indexCiudades = _ciudades["data"];
	}

	return {query, indexCiudades};
}

export default Home;
