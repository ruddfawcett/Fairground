'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('admin service', function() {
  it('registered the admins service', () => {
    assert.ok(app.service('admins'));
  });
});
