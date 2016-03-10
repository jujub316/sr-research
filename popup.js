$(function(){
  //changed
  
  $('#paste').click(function(){pasteSelection();});
});
function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      alert("1");
  $.getJSON("http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/cool/json", function(json) {
         console.log(json);
         //changed ends
         alert("2");
      var text = document.getElementById('text'); 
      text.innerHTML = response.data;
    });
  });
}
