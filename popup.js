$(function(){
  $('#paste').click(function(){pasteSelection();});
});
function pasteSelection() {
 
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var text = document.getElementById('text'); 
      text.innerHTML = response.data;
       //start of changes
       //$.getJSON("http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/word/json", function(json) {
             //  if (1==0){
                //     alert("u failed");
               //      console.log("heyo");
                 
              // } else {
              //       $.getJSON("http://words.bighugelabs.com/api/2/fa90ea6b99f8e8552983850e993a1f7c/word/json", function(json) {
               //         alert(json);
               //         console.log("peyo");
                        //console.log(json);
               //      });
             //     }
          //   });
      //end of changes
    });
  });
}
