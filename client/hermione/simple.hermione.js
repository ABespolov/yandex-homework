const assert = require('assert');

describe('Web page tests: ', function() {
    it('Filter component', async function() {
        await this.browser.url('/');
        await this.browser.assertView('filter', '[class*="filter"]');
    });
});