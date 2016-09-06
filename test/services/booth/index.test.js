'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('booth service', function() {
  it('registered the booths service', () => {
    assert.ok(app.service('booths'));
  });
});
