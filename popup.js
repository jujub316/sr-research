// add a click listener for the button
$('button#myWordButton').click(function(event) {
  pasteSelection();
  event.preventDefault();
});

// process JSON and add the results to the page
function displayResults(originalWord, json) {
  $('div#results').empty();
  $('input#myWord').val('');
  $('h3#wordHeader').text('Results for: ' + originalWord);
  var res = document.getElementById('results'); 
  // http://api.jquery.com/jquery.each/
  $.each(json, function(partOfSpeech, wordList) {

    // display part of speech as a header
    $('div#results').append('<h4>' + partOfSpeech + '</h4>');

    // create a list of words based on type
    if (wordList.syn !== undefined) {
      createList('synonyms', wordList.syn);
    }
    if (wordList.ant !== undefined) {
      createList('antonyms', wordList.ant);
    }
    if (wordList.rel !== undefined) {
      createList('related terms', wordList.rel);
    }
    if (wordList.sim !== undefined) {
      createList('similar terms', wordList.sim);
    }
  });
}


function createList(id, words) {
  $('div#results').append('<h5>' + id + '</h5>');
  $('div#results').append('<ul id="' + id + '"></ul>');
  
  words.forEach(function(el, i, arr) {
    $('ul#' + id).append('<li>' + el + '</li>');
  });
}

/*$(function(){
  $('#paste').click(function(){pasteSelection();});
});*/


function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var textbox = document.getElementById('text'); 
      words = String(response.data);
      textbox.innerHTML = words;

      words = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      words = words.replace(/\s{2,}/g," ");
      words = words.replace(/['"]+/g, '');
      var wordsArr = words.split(" ");
      var wordsMap = {};

      for (i = 0; i < wordsArr.length; i++) 
      { 
         w = wordsArr[i];
         if (!(w in wordsMap))
            wordsMap[w] = 1;
         else 
          wordsMap[w] = wordsMap[w]+1;
      }

for (var key in wordsMap) {
  if (wordsMap.hasOwnProperty(key)) {
    console.log(key + " -> " + wordsMap[key]);
  }
}

      word = "science";

      var headera = document.getElementById('wordHeader'); 
      headera.innerHTML = ('Results for: ' + word);

//from above
    if (word.length > 0) {
      // console.log("bar");
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/' + word + '/json',
      success: function(json) {
        displayResults(word, json);
      }
    });
  } else {
    alert("You must highlight a single word!");
  }
//from above


    });
  });
}


// function foo(myString) {
//   return String(myString);

  // var x = "http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/" + myString.toString() + "/json";
  // var text = document.getElementById('text'); 
  // text.innerHTML = x+"Be";   
  // $.getJSON(x, function( data ) {
  //   var words = "apple";
  //   $.each( data, function(key, val) 
  //   {
  //   words = words + " " + String(data[key[value]]);
  //   });    
  // });

//start of ss change
// var words = [];
// Object obj = $.getJSON("http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/hi/json"); 
//   JSONObject jsonObject = (JSONObject) obj; 
//   JSONObject jsonChildObject = (JSONObject)jsonObject.get("noun");
//   JSONObject jsonChildObject = (JSONObject)jsonObject.get("noun"); for (Map.Entry in jsonChildOBject.entrySet()) { words.push(("Key = " + entry.getKey() + ", Value = " + entry.getValue())); }

// var x;
// for each (var word in words){
//   x = x + ", " + String(word);
// }
// text.innerHTML = x;

// alert("hi");

//end of ss change



