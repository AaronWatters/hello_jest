
// These end-to-end tests use puppeteer and headless chrome using the default jest-environment configuration.

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
        await page.goto(url, {waitUntil: 'networkidle2'});
        // Wait for jQuery to become available indicating that javascript has loaded
        await page.waitForFunction(async () => !!(window.jQuery));
        var content = await page.evaluate(async () => window.test_function());
        //console.log("function content is: " + content);
        var expected_content = "hi there!";
        expect(content).toBe(expected_content);
    },
    120000, // timeout in 2 minutes...
    );

    it("sets the html using the plugin",  async () => {
        //await jestPuppeteer.debug();
        const page = await browser.newPage();
        const url = "http://127.0.0.1:3000/html/index.html";
        await page.goto(url, {waitUntil: 'networkidle2'});
        //console.log(" ... now waiting for window.jQuery ...")
        await page.waitForFunction(async () => !!(window.jQuery));
        //console.log(" ... now awaiting window.jQuery.ready_for_tests")
        await page.waitForFunction(async () => !!(window.jQuery.ready_for_tests));
        // Validate that the plugin code executed.
        var content = await page.evaluate(async () => window.jQuery('#target').text());
        //console.log("target content is: " + content);
        var expected_content = "plugin is working";
        expect(content).toBe(expected_content);
    },
    120000, // timeout in 2 minutes...
    );
});
