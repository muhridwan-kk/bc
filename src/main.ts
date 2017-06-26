import {BcafCalc,BcafParam} from "./bcafcalc";

class BcafParamImpl implements BcafParam {
	minimalDP:number=25;
	hargaKendaraan:number=0;
	uangMuka:number=0;
	tahunKendaraan:number=0;
	asuransi:number=0;
	zonaWilayah:number=0;
	kondisiKendaraan:number=0;

	getMinimalDP():number {
		return this.minimalDP;
	}

	getHargaKendaraan():number {
		return this.hargaKendaraan;
	}

	getUangMuka():number {
		return this.uangMuka;
	}
	getTahunKendaraan():number{
		return this.tahunKendaraan;
	}
	getAsuransi():number{
		return this.asuransi;
	}
	getZonaWilayah():number{
		return this.zonaWilayah;
	}
	getKondisiKendaraan():number{
		return this.kondisiKendaraan;
	}

}

var param = new BcafParamImpl();
console.log(param.getMinimalDP());


