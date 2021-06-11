import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Calendar from 'react-calendar';

class SidePanel extends BasePanel{
	constructor(props) {
		super(props);

	}
	componentDidMount() {
	}



	render() {
		return (
			<div className="side-panel">
				<div className="side-panel-header">
					Eventos de los próximos días
				</div>
				<div className="side-panel-body">
					{/*<Calendar/>*/}
					<div className="side-panel-events">
						<div className="event">
							<div>
								<img />
							</div>
							<div>
								<h4>Chocolatada en barrio gaitán</h4>
								<p>12 de marzo de 2021 - 05:30 pm</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SidePanel;
