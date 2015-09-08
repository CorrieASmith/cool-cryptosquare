describe('coolCryptosquare', function () {
  it("removes the spaces from a given string", function () {
    expect(coolCryptosquare("I like turtles")).to.equal("iliketurtles");
  });

  it("downcases all characters in a given string", function () {
    expect(coolCryptosquare("I like turtles")).to.equal("iliketurtles");
  });
});
