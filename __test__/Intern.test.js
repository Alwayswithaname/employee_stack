const { default: test } = require("node:test");
const Intern = require("../lib/Intern");

test("can set shcool via constructor", () => {
    const testValue = "UCB";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", 'UCB');
    expect(e.getRole).toBe(testValue);
});

test("can get school via getSchool()", () => {
    const testValue = "UCB";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});