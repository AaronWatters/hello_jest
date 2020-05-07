
// these tests use puppeteer and headless chrome using the default jest-environment configuration.

describe("headless browser tests", async () => {
    it("gets the browser version",  async () => {
        var version = await browser.version();
        console.log("browser version: " + version);
        expect(version).toBeTruthy();
    });
    
    it("gets a page object",  async () => {
        const page = await browser.newPage();
        console.log("page: " + page);
        expect(page).toBeTruthy();
    });

    //it("runs the debugger",  async () => {
    //    await jestPuppeteer.debug();
    //});

    it("gets a page title",  async () => {
        const page = await browser.newPage();
        const url = "http://127.0.0.1:3000/html/index.html";
        await page.goto(url);
        var title = await page.title();
        console.log("page title is: " + title);
        expect(title).toBe("Test page");
    });

    function sleep(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
    };

    it("sets the html using the plugin",  async () => {
        //await jestPuppeteer.debug();
        const page = await browser.newPage();
        const url = "http://127.0.0.1:3000/html/index.html";
        await page.goto(url);
        //await jestPuppeteer.debug();
        // sleep a second to let the page execute javascript
        await sleep(1000);
        var wqd = await page.evaluate("!!window");
        console.log("window is defined? " + wqd);
        var jsld = await page.evaluate(() => window.js_loaded);
        console.log("js_loaded gets: " + jsld);
        //return;
        await page.waitForFunction("window.js_loaded");
        var content = await page.evaluate("jQuery('#target').html()");
        console.log("target content is: " + content);
        var expected_content = "<em>plugin is working</em>";
        expect(content).toBe(expected_content);
    },
    //120000, // timeout in 2 minutes...
    );
});
