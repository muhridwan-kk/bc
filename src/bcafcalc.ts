export interface BcafParam {
	getMinimalDP():number;
	getHargaKendaraan():number;
	getUangMuka():number;
	getTahunKendaraan():number;
	getAsuransi():number;
	getZonaWilayah():number;
	getKondisiKendaraan():number;

}

export  class BcafCalc {
	static roundNumber(rnum:number, rlength:number) {
		var newnumber = Math.ceil(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
		return newnumber;
	}

	param:BcafParam;
	constructor(param:BcafParam) {
		this.param = param;
	}


}

export default BcafCalc;

