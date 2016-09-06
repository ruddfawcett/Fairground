'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('volunteer service', function() {
  it('registered the volunteers service', () => {
    assert.ok(app.service('volunteers'));
  });
});
