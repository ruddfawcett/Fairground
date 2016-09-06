'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('fair service', function() {
  it('registered the fairs service', () => {
    assert.ok(app.service('fairs'));
  });
});
