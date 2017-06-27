export interface BcafParam {
		getMinimalDP():number;
		getHargaKendaraan():number;
		getUangMuka():number;
		getTahunKendaraan():number;
		getAsuransi():number;
		getZonaWilayah():number;
		getKondisiKendaraan():number;

		/**
		  * Validate parameter
		  */
		isValid():boolean;

		/**
		 * getError after isValidate
		 */
		 getError():string; 
}

export class DefaultBcafParamImpl implements BcafParam {
	/*Minimal DP should be set from the system */
	minimalDP:number=25;
	hargaKendaraan:number=0;
	uangMuka:number=0;
	tahunKendaraan:number=0;
	asuransi:number=0;
	zonaWilayah:number=0;
	kondisiKendaraan:number=0;
	error:string="";

	constructor(hargaKendaraan:number,uangMuka:number,
			  tahunKendaraan:number,asuransi:number,zonaWilayah:number,
			  kondisiKendaraan:number			  
			 ) {
		this.hargaKendaraan=hargaKendaraan;
		this.uangMuka=uangMuka;
		this.tahunKendaraan=tahunKendaraan;
		this.asuransi=asuransi;
		this.zonaWilayah=zonaWilayah;
		this.kondisiKendaraan=kondisiKendaraan;
	}

	isValid():boolean {
		/*
		if (this.minimalDP<25) {
			this.error=this.minimalDP+" ==> %DP minimum "+this.minimalDP +"%";
			return false;
		}
		*/
		if (this.tahunKendaraan<2007 || this.tahunKendaraan > 2017) {
			this.error=this.tahunKendaraan+" ==> Tahun Kendaraan harus antara 2007-2017";
			return false
		}
		if (this.hargaKendaraan<10000000 || this.hargaKendaraan > 10000000000){
			this.error=this.hargaKendaraan+" ==>Harga Kendaraan antara 10.000.000 - 10.000.000.000";
			return false
		}
		var percentageUangMuka:number = this.uangMuka/this.hargaKendaraan;
		if (percentageUangMuka>=this.minimalDP) {
			this.error=percentageUangMuka+" ==> Uang muka "+percentageUangMuka;
			return false;
		}
		return true;
	}

	getError():string{
		return this.error;
	}


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

