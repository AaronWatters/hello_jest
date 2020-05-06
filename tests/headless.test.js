
// these tests use puppeteer and headless chrome

describe("headless browser tests", async () => {
    it("can get the browser version",  async () => {
        var version = await browser.version();
        console.log("browser version: " + version);
        expect(version).toBeTruthy();
    });
    it("can get a page object",  async () => {
        const page = await browser.newPage();
        console.log("page: " + page);
        expect(page).toBeTruthy();
    });
})