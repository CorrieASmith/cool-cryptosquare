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

var divideMessage = function(string) {
  var inString = coolCryptosquare(string);
  var square = findSquare(inString.length);
  var output = "";
  var count = 0;
  var outputArray = [""];
  var total = 0;
  var loopbool = true;
  while (loopbool === true) {
    if (count > square -1) {
      count = 0;
    }
    if (total < square) {
      outputArray[count] = (inString.substring(0 + total,1 + total))
    } else {
    outputArray[count] = outputArray[count] + (inString.substring(0 + total,1 + total))
    }
    count +=1;
    total +=1;
    if (total >= string.length) {
      loopbool=false;
    }
  };

  return outputArray.join("");
};

$(document).ready(function() {
  $("form#cool-cryptosquare").submit(function(event) {
    var sentence = $("input#sentence").val());
    var result = divideMessage(sentence);

  $(".sentence").text(sentence);
  $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
