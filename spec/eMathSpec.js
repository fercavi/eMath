describe("eMath", function() {
  var emath;

  beforeEach(function() {
    emath = new eMath();
  });

  it("Should Calculate Mean",function(){
    var array =  [1,2,3,4,5,6,7];
    var result = emath.mean(array);
    expect(result).toEqual(4);
  });
  it("Should calculate standard Deviation",function(){
    var array =  [0,0,0,4,8,8,8];
    var stdev = emath.stdev(array);
    expect(stdev).toEqual(4);
  });
  it("Should calculate variace",function(){
    var array =  [0,0,0,4,8,8,8];
    var variance = emath.variance(array);
    expect(variance).toEqual(16);
  });


}
);
