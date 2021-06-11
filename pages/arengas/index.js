import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import {RiYoutubeFill}  from "react-icons/ri";
import Arenga         from '@/components//Arenga';

class ArengasPage extends BasePanel{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		let arengas = this.props.arengas;
		return (
			<div className="page-center">
				<h2>Arengas</h2>
				<div className="arengas-list">
					{
						(arengas).map((item, index) => {
							return <Arenga
								key={Math.random()}
								title={item.titulo}
								body={item.cuerpo}
								youtube={item.youtube ? item.youtube.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/") : null}
							/>
						})
					}
				</div>
			</div>
		);
	}
}

ArengasPage.getInitialProps = async ({query}) => {
	let arengas = [];

	let [_arengas] = await Promise.all([
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "arenga",
			method: 'GET',
			body: {
				"modelo" : "todo"
			}
		}),
	]);
	if(_arengas !== undefined && _arengas["estado_p"] === 200) {
		arengas = _arengas["data"];
	}

	return {query, arengas};
}

export default ArengasPage;
