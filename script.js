// XML_HTTP Methods : 
// Purpose : it is used to interact with Server Via API

//For interaction, there are 5 Steps 

//Step 1 : Create a XML_HTTP Object
var request  = new XMLHttpRequest();

//Step 2 : Open a Request
// By what method we are receiving our data from server
request.open("GET","https://restcountries.com/v3.1/all")

//Step 3 : Kickstart a request
//this is the path by we receive the data from server
request.send(); 

//Step 4 : 
//Server status Code 200 ( which means that successfully loaded from the server)
//Once the data Successfully loaded from the server , we use this Event 
//String to Object => using JSON.parse()
request.onload = function(){
 var res = JSON.parse(request.response);
 console.log(res);

  // Question 2 Solution :
 //Display all the Countries Flag in the Console
 for( var i = 0 ; i<res.length ; i++){
//Solution 1 : Print of Nested Flags Objects
    console.log(res[i].flags);
//Solution 2 : Print of Flags alt value only by accessing Objects
    console.log(res[i].flags.alt);
 }


//Question 3 Solution :
//Display all the Countries name , region , sub-region and populations in the Console
//Solution 1 : Nested with Objects in Names properties
for(var i=0 ; i<res.length ; i++){
    console.log(res[i].name) ;
    console.log(res[i].region  + " , " + res[i].subregion + " , " + res[i].population);
    // console.log(res[i].subregion);
    // console.log(res[i].population);
 }

 //Question 3 Solution :
//Display all the Countries name , region , sub-region and populations in the Console
//Solution 2 : Extracted values from Nested Objects in Names properties
for(var i=0 ; i<res.length ; i++){
    console.log(res[i].name.common + " , " + res[i].region  + " , " + res[i].subregion + " , " + res[i].population) ;
    // console.log(res[i].region  + " , " + res[i].subregion + " , " + res[i].population);
    
 }
}
 








