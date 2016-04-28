// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.method == "getSelection")
// {
// 	  var focused = document.activeElement;
// 	  var selectedText;
// 	  if (focused) 
// 	  {
// 	    try
// 	   	{
// 	      selectedText = focused.value.substring(
// 	          focused.selectionStart, focused.selectionEnd);
// 	    } 
// 	    catch (err) 
// 	    {
// 	    }
// 	  }
// 	  if (selectedText == undefined) 
// 	  {
// 	    var sel = window.getSelection();
// 	    selectedText = sel.toString();
// 	  }
//     sendResponse({data: window.getSelection().toString()});
// }
//   else
//     sendResponse({}); // snub them.
// });


//chrome.extension.onMessage.addListener

chrome.extension.sendRequest(function(request, sender, sendResponse) {
  if (request.method == "getSelection") 
    sendResponse({data: window.getSelection().toString()});
  else
    sendResponse({data: "other"}); // snub them.
});