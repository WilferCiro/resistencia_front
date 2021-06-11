import NProgress from 'nprogress';
import Cookie   from 'js-cookie';
import jwt      from 'jsonwebtoken';
import ConstantServer from '@/components/ConstantServer';

class Constant{
	static instance = null;
	// general
	static URL_webpage = "https://kiwipyme.herokuapp.com";
	static URL_public = ConstantServer["URL_public"];
	static URL_private = ConstantServer["URL_private"];

	// Dev
	//static URL_server = "http://127.0.0.1:8000";
	// prod
	static URL_server = ConstantServer["URL_server"];


	constructor(){
		if (Constant.instance!==null){
			return Constant.instance;
		}
		Constant.instance = this;

		this.privatePages = [];
		this.noLoggedPages = [];

		/// Routes

		this.route_index               ='/';
		this.route_index_alias         ='/';

		this.route_actividades           ='/actividades';
		this.route_actividades_alias     ='/actividades';
		this.route_actividad_page        = '/actividades/[pagina]'
		this.route_actividad_page_alias  = '/actividades/{0}'
		this.route_arengas               ='/arengas';
		this.route_arengas_alias         ='/arengas';
		this.route_flayers               ='/flayers';
		this.route_flayers_alias         ='/flayers';
		this.route_paginas               ='/paginas';
		this.route_paginas_alias         ='/paginas';

		this.route_page                  = '/paginas/[pagina]';
		this.route_page_alias            = '/paginas/{0}';

		/*** IMÁGENES ***/
		this.img_logo                    = "/images/general/logo.png";
		this.img_quienes_somos           = "/images/index/quienes_somos.jpg";
		this.img_objetivos               = "/images/index/objetivos.jpg";
		this.img_play_store              = "/images/footer/play_store.png";
		this.img_apk_download            = "/images/footer/apk_download.png";


	}

	formatString(s) {
		s = s.toLowerCase();
		s = s.charAt(0).toUpperCase() + s.slice(1)
		return s;
	}

	getServer() {
		return Constant.URL_server;
	}
	getPublicEndpoint() {
		return Constant.URL_server + Constant.URL_public;
	}

	get_key() {
		return "123";
	}


}

export default  new Constant();

/**
 * @returns {string} a
 * @memberof Constant
 */
String.prototype.format = function () {
    let a = this;
    for (let k in arguments) {
        a = a.replace("{" + k + "}", encodeURIComponent(arguments[k]));
    }
    return a
};

/**
 * @param {number} decimales -Decimales aproximación
 * @param {number}  valor -Valor
 * @returns {number}
 * @memberof Constant
 */
String.prototype.redondear = (valor,decimales) => {
    decimales = (decimales===undefined && decimales == null)?2:decimales;
    return Math.round(parseFloat(valor) * Math.pow(10, parseFloat(decimales))) / Math.pow(10, parseFloat(decimales));
}

String.prototype.removeAccents  = function (name ){
	let data = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	data = data.replace(/\//g, '-');
	return data.replace(/ /g, "-");
}
