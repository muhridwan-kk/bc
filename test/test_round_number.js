'use strict';

var expect = require('chai').expect;
var bcaf = require('../dist/bcafcalc.js');

describe('#roundNumber', function() {

    it('123 --> 1000', function() {
        var result = bcaf.BcafCalc.roundNumber(123,-3);
        expect(result).to.equal(1000);
    });
    
    it('1.234 --> 2.000', function() {
        var result = bcaf.BcafCalc.roundNumber(1234,-3);
        expect(result).to.equal(2000);
    });
    it('12.345 --> 13.000', function() {
        var result = bcaf.BcafCalc.roundNumber(12345,-3);
        expect(result).to.equal(13000);
    });
    it('123.456 --> 124.000', function() {
        var result = bcaf.BcafCalc.roundNumber(123456,-3);
        expect(result).to.equal(124000);
    });
    it('1.234.567 --> 1.235.000', function() {
        var result = bcaf.BcafCalc.roundNumber(1234567,-3);
        expect(result).to.equal(1235000);
    });
    it('12.345.678 --> 12.346.000', function() {
        var result = bcaf.BcafCalc.roundNumber(12345678,-3);
        expect(result).to.equal(12346000);
    });
    it('123.456.789 --> 123.457.000', function() {
        var result = bcaf.BcafCalc.roundNumber(123456789,-3);
        expect(result).to.equal(123457000);
    });

});
