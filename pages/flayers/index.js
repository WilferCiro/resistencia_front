import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import SliderImages   from '@/containers//SliderImages';

class FlayersPage extends BasePanel{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="page-center">
				<div className="flayer-container">
					<SliderImages
						images={this.props.flayers}
						width={500}
						height={600}
					/>
				</div>
			</div>
		);
	}
}

FlayersPage.getInitialProps = async ({query}) => {
	let flayers = [];

	let [_flayers] = await Promise.all([
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "flayer",
			method: 'GET',
			body: {
				"modelo" : "activos",
				"campos" : {
					"ciudad" : 1
				}
			}
		}),
	]);
	if(_flayers !== undefined && _flayers["estado_p"] === 200) {
		flayers = _flayers["data"];
	}

	return {query, flayers};
}

export default FlayersPage;
