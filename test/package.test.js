var strategy = require('..');
var mocha = require('mocha');
var should = require('chai').should();
var expect = require('chai').expect;

console.log(strategy);

describe('passport-bluemix', function() {
  
  it('should export Strategy constructor directly from package', function() {
    expect(strategy).to.be.a('function');
    expect(strategy).to.equal(strategy.BlueMixOAuth2Strategy);
  });
});