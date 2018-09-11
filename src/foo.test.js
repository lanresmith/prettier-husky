// remove the spacing before expect(1).toBe(1); and try to commit. Prettier will automatically format the line by adding the tab width specifed in your 'prettier' command
test("ugly", () => {
  expect(1).toBe(1);
});

// remove at least a semicolon and try to commit, you will see that Prettier automatically inserts the semicolon(s).
test("semicolon", () => {
  expect(1).toBe(1);
});

// change one '1' to e.g. '2' and try to commit, the commit should fail.
test("fail", () => {
  expect(1).toBe(1);
});
// remove the new line below and try to commit. Prettier will automatically insert a new EOF line.
