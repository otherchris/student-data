'use strict';
var Aggregate = require('../lib/Aggregate');

describe('Aggregate', () => {

  describe('constructor', () => {

    it('constructs an Aggregate', () => {
      expect(new Aggregate({name: "Travis"}).name).toEqual("Travis");
    });
  });

  describe('attach', () => {

    it('attaches an object', () => {
      var subject = new Aggregate();
      subject.attach('newData', {eyes: 'brown'});
      expect(subject.newData.eyes).toEqual('brown');
    });

    it('does not duplicate', () => {
      var subject = new Aggregate();
      subject.attach('newData', {eyes: 'brown'});
      subject.attach('newData', {eyes: 'blue'});
      expect(subject.newData.eyes).toEqual('brown');
    });
  });

  describe('detach', () => {

    it('removes data from the key', () => {
      var subject = new Aggregate();
      subject.attach('newData', {eyes: 'brown'});
      subject.detach('newData');
      expect(subject.newData).not.toBeDefined();
    });
  });
});
