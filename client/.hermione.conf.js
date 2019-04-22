module.exports = {
    baseUrl: 'http://localhost:3000',
    gridUrl: 'http://0.0.0.0:4444/wd/hub',
    screenshotDelay: 1000,
    browsers: {
        chromeXL: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless'],
                },
            },
            windowSize: '1300x900',
        }
    },

    plugins: {
        'html-reporter/hermione': {
            enabled: true,
            path: 'hermione/hermione-reports',
            defaultView: 'all',
            baseHost: 'http://localhost:3000'
        }
    }
};