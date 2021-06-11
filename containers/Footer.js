import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import ImageLocal     from '@/components//ImageLocal';

class Footer extends BasePanel{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}

	render() {
		return (
			<footer>
				<div className="footer-divider">
					<div>
						Creado por: Wilfer Daniel Ciro Maya <br />
						<a href="mailto:wilcirom@gmail.com" target="_blank">wilcirom@gmail.com</a>
					</div>
					<div className="iconos-footer">
						<a title="Descargar aplicación en la play store de Android" className="download-btn" href="https://play.google.com/store/apps/details?id=com.flutterflow.paro" target="_blank">
							<ImageLocal
								image={{"imagen" : this.constants.img_play_store, "descripcion" : "Logo"}}
								width={150}
								height={80}
								/>
						</a>
						<a title="Descargar aplicación directamente con el apk" className="download-btn" href="/resistencia.apk" target="_blank">
							<ImageLocal
								image={{"imagen" : this.constants.img_apk_download, "descripcion" : "Logo"}}
								width={150}
								height={80}
								/>
						</a>

					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
