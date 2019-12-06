

// Called when the user clicks on the browser action.
chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
   if( request.message === "open_max_url" ) {
     fullURL = "http://" + request.url;
     chrome.tabs.create({"url": fullURL, "active": true});
   }
 }
);