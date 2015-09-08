describe('coolCryptosquare', function () {
  it("removes the spaces from a given string", function () {
    expect(coolCryptosquare("I like turtles")).to.equal("iliketurtles");
  });

  it("downcases all characters in a given string", function () {
    expect(coolCryptosquare("I like turtles")).to.equal("iliketurtles");
  });
});
describe('findSquare', function() {
  it("attempts to find the proper square for the input val", function () {
    expect(findSquare(12)).to.equal(4); //The closest square is 4x4=16, looking for the 4.
  });
});
