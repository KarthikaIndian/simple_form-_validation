function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateform(){
    let name=document.myform.fname.value; 
  
    let e=document.myform.email1.value;
    let email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    let add=document.myform.add.value; 
   let num=document.myform.num.value;
   let gender=document.myform.gender.value;
   let lann=document.myform.lan;
   var flag=false;

   for(var i=0;i<lann.length;i++ ){
        if(lann[i].checked==true) {
            flag=true;
           
            printError("lanval", "");

            return ;
        } else{
            printError("lanval", "Please select language");
        }
 }


    let nameval = emailval = numval  =genderval=lanval= addval=true;
    
    if(name == "") {
        
        document.getElementById("nameval").innerHTML="Please enter your name";
    }
        else {
            printError("nameval", "");
            nameval = false;
        }
    if (!email.test(e))  
    {   
        printError("emailval", "Please enter yourValid mail id");

    }  
    else{
        printError("emailval","");
        emailval=false;
    }
    if(gender == "") {
        printError("genderval", "Please select your gender");
    } else {
        printError("genderval", "");
        genderval = false;
    }
if (isNaN(num) || num==""){
  document.getElementById("numval").innerHTML="Enter Numeric value only";
}else{
    printError("numval","");
    numval=false;
}

if(add == "") {
    printError("addval", "Please enter your Address");
} else {
    printError("addval", "");
    addval = false;
}

}
   