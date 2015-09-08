var coolCryptosquare = function (sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/\s/g, '');
  return sentence;
};

var findSquare = function(strLength) {
  var count = 1;
  while ((count * count) < strLength) {
    count += 1;
  };
  return count;
};
