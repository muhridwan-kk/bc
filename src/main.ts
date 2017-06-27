import {BcafCalc} from "./bcafcalc";
import {BcafParam,DefaultBcafParamImpl} from "./bcafparam";

/*
	construct(minimalDP,hargaKendaraan,uangMuka,tahunKendaraan,asuransi,zonaWilayah,kondisiKendaraan)
*/
var param = new DefaultBcafParamImpl(10000000,2500000,2007,0,0,0);
console.log(param.getMinimalDP());
console.log(param.getHargaKendaraan());
console.log(param.getUangMuka());
console.log(param.getTahunKendaraan());


