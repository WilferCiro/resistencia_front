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
				<section>
					<h4>¿Quiénes somos?</h4>
					<div className="section-body-left">
						<img />
						<p>Somos una ...</p>
					</div>
				</section>
				<section>
					<h4>¿Cuáles son nuestros objetivos?</h4>
					<div className="section-body-right">
						<p>Somos una ...</p>
						<img />
					</div>
				</section>
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
