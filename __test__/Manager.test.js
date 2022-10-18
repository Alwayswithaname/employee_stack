const { default: test } = require("node:test");
const Manager = require("../lib/Manager");

test("can set office nymber via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});


test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
});


test("can get office number via getoffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber).toBe(testValue);
});