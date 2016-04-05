import java.io.FileNotFoundException; 
import java.io.FileReader; 
import java.io.IOException; 
import java.util.Iterator; 
import org.json.simple.JSONArray; 
import org.json.simple.JSONObject; 
import org.json.simple.parser.JSONParser; 
import org.json.simple.parser.ParseException;

$(function(){
  $('#paste').click(function(){pasteSelection();});
});
function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      foo(response.data);
    });
  });
}
function foo(myString) {
  // $.getJSON("http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/hi/json", function( data ) {
  //   var words = ["apple";]
  //   $.each( data, function(key, val) 
  //   {
  //   words = words + " " + String(data[key[value]]);
  //   });

  //   text.innerHTML = words;
  //     //var text = document.getElementById('text'); 
  //     //text.innerHTML = String(data);    
  // });

//start of ss change
var words = [];
Object obj = $.getJSON("http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/hi/json"); 
  JSONObject jsonObject = (JSONObject) obj; 
  JSONObject jsonChildObject = (JSONObject)jsonObject.get("noun");
  JSONObject jsonChildObject = (JSONObject)jsonObject.get("noun"); for (Map.Entry in jsonChildOBject.entrySet()) { words.push(("Key = " + entry.getKey() + ", Value = " + entry.getValue())); }

var x;
for each (var word in words){
  x = x + ", " + String(word);
}
text.innerHTML = x;

alert("hi");

//end of ss change
}
