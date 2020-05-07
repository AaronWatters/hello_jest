
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

    async function check_truthy(js_expression_str) {
        var is_truthy = await page.evaluate("!!(" + js_expression_str + ")");
        if (is_truthy) {
            console.log("truthy: " + js_expression_str);
        } else {
            console.log("FALSY: " + js_expression_str);
        }
    };

    it("calls the test function",  async () => {
        //await jestPuppeteer.debug();
        const page = await browser.newPage();
        const url = "http://127.0.0.1:3000/html/index.html";
        await page.goto(url);
        //await jestPuppeteer.debug();
        // sleep a second to let the page execute javascript
        await sleep(1000);
        check_truthy("window.test_function");
        await page.waitForFunction(() => !!(window.test_function));
        var content = await page.evaluate(() => window.test_function());
        check_truthy("window.test_function");
        console.log("function content is: " + content);
        var expected_content = "hi there!";
        expect(content).toBe(expected_content);
    },
    //120000, // timeout in 2 minutes...
    );

    it("sets the html using the plugin",  async () => {
        //await jestPuppeteer.debug();
        const page = await browser.newPage();
        const url = "http://127.0.0.1:3000/html/index.html";
        await page.goto(url);
        //await jestPuppeteer.debug();
        // sleep a second to let the page execute javascript
        await sleep(1000);
        check_truthy("window");
        check_truthy("window.js_loaded")
        check_truthy("window.jQuery")
        //return;
        console.log(" ... now waiting for js_loaded ...")
        //await page.waitForFunction(() => !!(window.js_loaded));
        await page.waitForFunction(() => !!(window.jQuery));
        check_truthy("window");
        check_truthy("window.js_loaded");
        console.log("function eval: " + await page.evaluate(() => !!(window.js_loaded)))
        check_truthy("window.jQuery")
        console.log("string repr for window.jQuery: " + await page.evaluate(() => ("" + window.jQuery)));
        //check_truthy("window.jQuery('#target')")
        var content = await page.evaluate(() => window.jQuery('#target').html());
        console.log("target content is: " + content);
        var expected_content = "<em>plugin is working</em>";
        expect(content).toBe(expected_content);
    },
    //120000, // timeout in 2 minutes...
    );
});
