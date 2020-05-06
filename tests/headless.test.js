
// these tests use puppeteer and headless chrome

var run = async() => {
    await describe("headless browser tests", async () => {
        await it("gets the browser version",  async () => {
            var version = await browser.version();
            console.log("browser version: " + version);
            expect(version).toBeTruthy();
        });
        
        await it("gets a page object",  async () => {
            const page = await browser.newPage();
            console.log("page: " + page);
            expect(page).toBeTruthy();
        });

        await it("gets a page title",  async () => {
            const page = await browser.newPage();
            const url = "http://127.0.0.1:3000/html/index.html";
            await page.goto(url);
            var title = await page.title();
            console.log("page title is: " + title);
            expect(title).toBe("Test page");
        });

    });
};

run();
