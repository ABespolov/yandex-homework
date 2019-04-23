const assert = require("assert");

describe("Web page tests: ", function() {
    it("Notes filter", async function() {
        await this.browser.url("/");
        await this.browser.click('[class*="color"]:first-child');
        await this.browser.assertView("filter", '[class*="filter"]');
    });
    it("Show note form", async function() {
        await this.browser.url("/");
        await this.browser.click('[class*="addButton"]');
        await this.browser.assertView("addButton", 'form[class*="noteForm"]');
    });
    it("Add note", async function() {
        await this.browser.url("/");
        await this.browser.click('[class*="addButton"]');
        await this.browser.setValue('input[name=header]', 'Тест');
        await this.browser.setValue('textarea[name=text]', 'Тестовый текст');
        await this.browser.click('[type="submit"]').pause(1000);
        await this.browser.assertView("addNote", '[class*="notesWrapper"]');
    });
    it("Show note controls", async function() {
        await this.browser.url("/");
        await this.browser.moveToObject('[class*="Note"]:first-child').pause(500);
        await this.browser.assertView("showControls", '[class*="Note"]:first-child');
    });
    it("Edit note", async function() {
        await this.browser.url("/");
        await this.browser.moveToObject('[class*="Note"]:first-child').pause(500);
        await this.browser.click('[class*="editCard"]');
        await this.browser.assertView("edit", 'form[class*="noteForm"]');
    });
    it("Add note to archive", async function() {
        await this.browser.url("/");
        await this.browser.moveToObject('[class*="Note"]:first-child').pause(500);
        await this.browser.click('[class*="addToArchive"]');
        await this.browser.click('[class*="disable-control"]').pause(500);
        await this.browser.assertView("archive", '[class*="notesWrapper"]');
    });
});
