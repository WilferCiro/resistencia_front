import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import SliderImages   from '@/containers//SliderImages';
import Cookie   from 'js-cookie';

class FlayersPage extends BasePanel{
	constructor(props) {
		super(props);

		this.state = {
			flayers: null
		}

		this.searchFlayers = this.searchFlayers.bind(this);
		this.successSearchFlayers = this.successSearchFlayers.bind(this);
	}

	componentDidMount() {
		this.searchFlayers();
	}

	searchFlayers(){
		let ciudad = Cookie.get("ciudad") ? Cookie.get("ciudad").toString() : "1";
		this.send({
			endpoint: Constant.getPublicEndpoint() + "flayer",
			method: 'GET',
			success: this.successSearchFlayers,
			body: {
				"modelo" : "activos",
				"campos" : {
					"ciudad" : parseInt(ciudad)
				}
			}
		});
	}

	successSearchFlayers(data) {
		if(data["estado_p"] === 200) {
			this.setState({
				flayers: data["data"]
			});
		}
	}

	render() {
		return (
			<div className="page-center">
				<div className="flayer-container">
				{
					(this.state.flayers !== null && this.state.flayers !== undefined) ?
						<SliderImages
							images={this.state.flayers}
							width={500}
							height={600}
						/>
					:
						<div>Cargando...</div>
				}

				</div>
			</div>
		);
	}
}

FlayersPage.getInitialProps = async ({query}) => {
	return {query};
}

export default FlayersPage;
