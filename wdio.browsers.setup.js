"use strict";

// Require default config file from selenium-standalone package to ensure project kept up to date if dependencies change
// Note - this seems to be somewhat out of date, so specific versions are explicitly given below to keep project up to date
const defaultConfiguration = require(".//node_modules//selenium-standalone//lib//default-config.js");

/* 
In order to ensure we use the 32 bit version of IE11 everytime and not have to maintain other browsers, this file is passed into wdio.conf.js
to override the version of IE11 used but use whatever @wdio/selenium-standalone-service wants for other browsers.
See: https://stackoverflow.com/questions/43235474/how-i-can-start-ie-in-32bit-mode-in-webdriver-io
*/

module.exports = {
    baseURL: defaultConfiguration.baseURL,
    version: "3.141.59",
    drivers: {
        chrome: {
            // Update with latest version number from here: https://chromedriver.chromium.org/downloads
            version: "83.0.4103.39",
            arch: defaultConfiguration.drivers.chrome.arch,
            baseURL: defaultConfiguration.drivers.chrome.baseURL,
        },
        // Download and use 32 bit version of Internet Explorer (due to https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/5116#c9)
        // See https://www.selenium.dev/downloads/ for latest stable version of IE Driver Server
        ie: {
            version: "3.150.1",
            arch: "ia32",
            baseURL: "https://selenium-release.storage.googleapis.com",
        },
        firefox: {
            version: "0.26.0",
            arch: defaultConfiguration.drivers.firefox.arch,
            baseURL: defaultConfiguration.drivers.firefox.baseURL,
        },
        // This is essentially redundant if passing javaArgs below for MS Edge, however if WebDriverIO update project in future then can switch back to this
        edge: {
            version: defaultConfiguration.drivers.edge.version,
        },
    },
    // See guidance for adding javaArgs for MS Edge here: https://github.com/webdriverio/webdriverio/issues/3196#issuecomment-450656116
    javaArgs: [
        "-Dwebdriver.edge.driver=C:\\Windows\\System32\\MicrosoftWebDriver.exe",
    ],
};
