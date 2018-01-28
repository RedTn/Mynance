'use strict';

const browsers = ['last 1 Chrome versions', 'last 1 Firefox versions', 'last 1 Safari versions'];

/* eslint-disable no-process-env */
const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';
/* eslint-enable no-process-env */

if (isCI || isProduction) {
    browsers.push('ie 11');
}

module.exports = {
    browsers
};
