const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  const user = new User('mel_yef', '123', 24);

  it("logs a user in if the password is correct", () => {
    user.login('123'); // Call the login method
    expect(user.LoggedIn).toBe(true); // Check if LoggedIn is true
  });

  it("throws an error if the password is incorrect", () => {
    expect(() => user.login('222')).toThrow("Incorrect Password");
  });
});

describe("user.logout()", () => {
  const user = new User('mel_yef', '123', 24);

  it("logs a user out", () => {
    user.login('123'); // Log in first
    user.logout(); // Log out
    expect(user.LoggedIn).toBe(false); // Check if LoggedIn is false
  });
});
