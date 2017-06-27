'use strict';

var expect = require('chai').expect;
var bcaf = require('../dist/bcafparam.js');

describe('#parameter', function() {

    //minimalDP, hargaKendaraan, uangMuka, tahunKendaraan, asuransi, zonaWilayah, kondisiKendaraan
    it("hargaKendaraan=10.000.000, RpDP=2.500.000,tahunKendaraan=2007", function() {
        var bcafParam = new bcaf.DefaultBcafParamImpl(10000000,2500000,2007,0,0,0);
        var result = bcafParam.isValid();
        expect(result).to.equal(true);
        //console.log(bcafParam.getError());
    });

    it("hargaKendaraan=9.000.000, RpDP=2.500.000,tahunKendaraan=2007", function() {
        var bcafParam = new bcaf.DefaultBcafParamImpl(9000000,2500000,2007,0,0,0);
        var result = bcafParam.isValid();
        expect(result).to.equal(false);
    });

    it("hargaKendaraan=10.000.000.001, RpDP=2.500.000,tahunKendaraan=2007", function() {
        var bcafParam = new bcaf.DefaultBcafParamImpl(10000000001,2500000,2007,0,0,0);
        var result = bcafParam.isValid();
        expect(result).to.equal(false);
    });

    it("hargaKendaraan=100.000.000, RpDP=24.999.999,tahunKendaraan=2007", function() {
        var bcafParam = new bcaf.DefaultBcafParamImpl(100000000,24999999,2007,0,0,0);
        var result = bcafParam.isValid();
        expect(result).to.equal(true);
    });

    it("hargaKendaraan=100.000.000, RpDP=24.999.999,tahunKendaraan=2007", function() {
        var bcafParam = new bcaf.DefaultBcafParamImpl(100000000,24999999,2007,0,0,0);
        var result = bcafParam.isValid();
        expect(result).to.equal(true);
    });

});
