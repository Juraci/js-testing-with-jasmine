describe("Calculator", function() {
  beforeEach(function() {
    Calculator.screenvalue = 0;
  });

  it("should store the screen value at all times", function(){
    expect(Calculator.screenvalue).toBeDefined();
  });

  it("should start the screen value with 0", function(){
    expect(Calculator.screenvalue).toEqual(0);
  });

  it("should reset the screen value", function(){
    Calculator.screenvalue = 20;
    Calculator.reset();
    expect(Calculator.screenvalue).toEqual(0);
  });

  describe("When adding numbers", function() {
    it("should add numbers", function() {
      expect(Calculator.add(5)).toEqual(5);
    });

    it("should add any number of numbers", function() {
      expect(Calculator.add(1,2,3)).toEqual(6);
      expect(Calculator.add(1,2,3,4)).toEqual(16);
    });
  });

  describe("When subtracting numbers", function() {
    it("should subtract numbers", function() {
      expect(Calculator.subtract(5)).toEqual(-5);
    });

    it("should add any number of numbers", function() {
      expect(Calculator.subtract(1,2,3)).toEqual(-6);
    });
  });
});
