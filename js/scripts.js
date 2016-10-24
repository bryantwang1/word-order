var sentence;
var count=[];
var index=0;
var theArray=[];
var finalArray=[];
function uniqueArrayDiego(words){
  var wordsArray = words.split(" ");
  theArray.push(wordsArray[0]);
  wordsArray.forEach(function(word1){
    console.log("the Array is: "+ theArray)
    theArray.forEach(function(word2){
      // console.log(theArray);
      if(word1!==word2){
        theArray.push(word1);
      };
    });
  });
  console.log(theArray);
};

//Generates an array where each string appears only once.
function uniqueArrayBryant(sentence) {
  var wordsArray = sentence.split(" ");

  wordsArray.forEach(function(word) {
    function checkWord(check) {
      return check == word;
    };

    if(theArray.find(checkWord) == word) {
    } else {
      theArray.push(word);
      console.log("push: " + theArray);
    };
  });
};
function addValues(word, count){
  finalArray.push({words:word,tmpCount:count})
}

function sortThem(){
  finalArray =  finalArray.sort(function (a, b) {
      if (a.tmpCount < b.tmpCount) {
        return 1;
      }
      if (a.tmpCount > b.tmpCount) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
}

function countWords(sentence) {
  var countArray = sentence.split(" ");
  uniqueArrayBryant(sentence);

  theArray.forEach(function(word1){
    function filterWord(word2) {
      return word2 == word1;
    };

    var tempCount = countArray.filter(filterWord).length;
    addValues(word1, tempCount);
    sortThem();
    console.log(finalArray);
  });
};

$(function() {
  $("body").append("<div class=\"container\"></div>");
  $(".container").append("<form></form>");
  $("form").append("<div class=\"form-group\"></div>");
  $(".form-group").append("<label for=\"sentence\">Input something:</label>");
  $(".form-group").append("<input id=\"sentence\" class=\"form-control\" type=\"text\">");
  $("form").append("<button type=\"submit\" class=\"btn\">Submit</button>");
  $("body").append("<div class=\"results\"></div>");
  $(".results").append("<ul></ul>");

  $("form").submit(function(event){
    event.preventDefault();
    $("ul").empty();
    theArray = [];
    finalArray=[];
    sentence=$("#sentence").val();

    countWords(sentence);


    for(var i=0;i<finalArray.length;i++){
      $("ul").append("<li>"+ finalArray[i].words + " "+finalArray[i].tmpCount+"</li>");
    }


    // finalArray.forEach(function(wordAndCount) {
    //   $("ul").append("<li>"+ wordAndCount +"</li>");
    // });
  });
});
