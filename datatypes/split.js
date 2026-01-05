

var headCount = 4 ;

var totel = 300 ;

var gst =8 ;

var addgst = (gst/100)*totel;
console.log(addgst);

var billTotel = gst + addgst;
console.log(billTotel);

var individualSplit = billTotel/headCount;
console.log(individualSplit);



