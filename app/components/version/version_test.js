'use strict';

describe('PTF.version module', function() {
  beforeEach(module('PTF.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
