function eMath(){
}
eMath.prototype.mean = function(parArray){
  var n = parArray.length;
  var sum = 0;
  for(var i=0;i<n;i++){
    sum+=parArray[i];
  }
  return sum/n;
};
eMath.prototype.stdev = function(parArray){
  return Math.sqrt(this.variance(parArray));
}
eMath.prototype.variance = function(parArray){
  var n = parArray.length;
  var mean = this.mean(parArray);
  var sum = 0;
  for(var i=0;i<parArray.length;i++){
    sum += Math.pow(parArray[i]-mean,2);
  }
  return sum/(n-1);
}
