// Write a JavaScript program to extract the username from an email ID.
//Example: user@gmail.com → user

 function extract(emailid){

    let extractemailid = emailid.split("@");

    return extractemailid[0]
 }
console.log(extract("prabi@gmail.com"));


