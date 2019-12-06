
var now = new Date();
var hrs = now.getHours();
var msg = "";

if (hrs >  0) msg = "Good morning";      
if (hrs > 12) msg = "Good afternoon";    
if (hrs > 17) msg = "Good evening";             

alert(msg);

