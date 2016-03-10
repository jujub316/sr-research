$(function(){
  $('#paste').click(function(){pasteSelection();});
});
function pasteSelection() {
  //start of changes
      alert("1");
      $.getJSON("http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/cool/json", function(json) {
      console.log(json);
      alert("2"); 
      //end of changes
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var text = document.getElementById('text'); 
      text.innerHTML = response.data;
    });
  });
}
