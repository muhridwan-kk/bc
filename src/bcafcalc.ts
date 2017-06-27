import {BcafParam} from "./bcafparam";

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

