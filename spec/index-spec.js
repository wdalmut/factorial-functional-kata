const fact = require('../index');

describe("Factorial", () => {
  it("should compute 0!", () => {
    expect(fact(0)).toBe(1);
  });

  it("should compute 1!", () => {
    expect(fact(1)).toBe(1);
  });

  it("should compute 2!", () => {
    expect(fact(2)).toBe(2);
  });

  it("should compute 3!", () => {
    expect(fact(3)).toBe(6);
  });

  it("should compute 4!", () => {
    expect(fact(4)).toBe(24);
  });

  it("should compute 5!", () => {
    expect(fact(5)).toBe(120);
  });

  it("should compute 6!", () => {
    expect(fact(6)).toBe(720);
  });
});
