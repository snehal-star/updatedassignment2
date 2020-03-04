
function checkFirstName(){
    var num=/[0-9]/;
    var specialChar= /[!@#\$%\^\&*\)\(+=._-]/;
    let firstName = document.forms["form1"]["firstname"].value;

    if(firstName == ""){
        // window.alert("Enter your First Name");
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="Enter fname";
        return false;
    }
     else if(num.test(firstName)){
         
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="numbers are not allowed in name";
        return false;
    }
    else if(specialChar.test(firstName)){
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="special charecters are not allowed";
        return false;
    }
    
    else{
        document.getElementById("fname").style.visibility="hidden";
        return true;
    }
    
}
function checkLastname(){
    var num=/[0-9]/;
    var specialChar= /[!@#\$%\^\&*\)\(+=._-]/;
    let lastName = document.forms["form1"]["lastname"].value;
    if(lastName == ""){
        document.getElementById("lname").style.visibility="visible";
        document.getElementById("lname").innerHTML="Enetr Last name";
        return false;
    }
    else if(num.test(lastName)){
         
        document.getElementById("lname").style.visibility="visible";
        document.getElementById("lname").innerHTML="numbers are not allowed in name";
        return false;
    }
    else if(specialChar.test(lastName)){
        document.getElementById("lname").style.visibility="visible";
        document.getElementById("lname").innerHTML="special charecters are not allowed";
        return false;
    }
    
    else{
        document.getElementById("lname").style.visibility="hidden";
        return true;
    }


}
 function checkPhoneNo(){
     let phoneNo = document.forms["form1"]["phone"].value;
    
    var num=/[0-9]/;
     if(phoneNo==""){
        document.getElementById("phone_error").style.visibility="visible";
        document.getElementById("phone_error").innerHTML="Enetr Phone Number";
        return false;
     }
     if(isNaN(phoneNo)){
        
        document.getElementById("phone_error").style.visibility="visible";
        document.getElementById("phone_error").innerHTML="Only numbers are allowed";
        return false;
     }
     if(phoneNo.length<10){
        document.getElementById("phone_error").style.visibility="visible";
        document.getElementById("phone_error").innerHTML="Enter 10 digit phone no.";
        return false;
     }
     else{
        document.getElementById("phone_error").style.visibility="hidden";
         return true;
     }
 }

 function checkOfficeNo(){
    let officeNo = document.forms["form1"]["officeNo"].value;

    var officeNoPattern=/[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    if(officeNo==""){
       document.getElementById("officeNo_error").style.visibility="visible";
       document.getElementById("officeNo_error").innerHTML="Enetr Office Number";
       return false;
    }
    // if(isNaN(officeNo)){
    //    //  console.log("in num");
    //    document.getElementById("officeNo_error").style.visibility="visible";
    //    document.getElementById("officeNo_error").innerHTML="Only numbers are allowed";
    //    return false;
    // }
    // if(officeNo.length<10)
    // {
    //     document.getElementById("officeNo_error").style.visibility="visible";
    //    document.getElementById("officeNo_error").innerHTML="Mobile no must be 10 digit";
    //    return false;
    // }
    if(!(officeNoPattern.test(officeNo))){
        document.getElementById("officeNo_error").style.visibility="visible";
        document.getElementById("officeNo_error").innerHTML="follow the pattern 123-456-9999";
        return false; 
    }
    else{
       document.getElementById("officeNo_error").style.visibility="hidden";
        return true;
    }
}

function checkEmail(){
    var specialChar= /[!@#\$%\^\&*\)\(+=._-]/;
    let emailId = document.forms["form1"]["email"].value;
    // let first_index=/[0-9!@#\$%\^\&*\)\(+=._-]/;
    var emailIdPattern=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(emailId=="")
    {
        document.getElementById("email_error").style.visibility="visible";
       document.getElementById("email_error").innerHTML="Enter Email";
       return false;
    }
    // if(specialChar.test(emailId)){
    //     document.getElementById("email_error").style.visibility="visible";
    //     document.getElementById("email_error").innerHTML="start with spl char is invalid";
    //     return false;

    // }
    if((emailId.indexOf('@')==0) || (emailId.indexOf('!')==0) || (emailId.indexOf('#')==0) || (emailId.indexOf('$')==0)){
        document.getElementById("email_error").style.visibility="visible";
        document.getElementById("email_error").innerHTML="start with special charecter is invalid";
        return false;
    }
    if(!(emailIdPattern.test(emailId))){
        document.getElementById("email_error").style.visibility="visible";
        document.getElementById("email_error").innerHTML="Invalid Email Id Pattern";
        return false;
    }
    else{
        document.getElementById("email_error").style.visibility="hidden";
         return true;
     }
}

function checkPassword(){
    var passwordPattern=/[0-9]/;
    // var password_spl_char=//;
    var specialChar= /[!@#\$%\^\&*\)\(+=._-]/;

    let password=document.forms["form1"]["password"].value;
    if(password=="")
    {
        document.getElementById("password_error").style.visibility="visible";
        document.getElementById("password_error").innerHTML="Enetr password";
        return false;
    }
    if(passwordPattern.test(password)){
        document.getElementById("password_error").style.visibility="visible";
        document.getElementById("password_error").innerHTML="Numeric values are not allowed";
        return false;
    }
    if(specialChar.test(password)){
        document.getElementById("password_error").style.visibility="visible";
        document.getElementById("password_error").innerHTML="Special charecters are not allowed";
        return false;
    }
    if(password.length<8 || password.length>12){
        document.getElementById("password_error").style.visibility="visible";
        document.getElementById("password_error").innerHTML="password length should be between 8-12";
        return false;   
    }
    else{
        document.getElementById("password_error").style.visibility="hidden";
         return true;
     }
}
function confirmPassword(){
    let confirmPassword=document.forms["form1"]["cpassword"].value;
    if(confirmPassword=="")
    {
        document.getElementById("confirmPassword_error").style.visibility="visible";
        document.getElementById("confirmPassword_error").innerHTML="Re-enetr password";
        return false;
    }
    if(!((document.forms["form1"]["password"].value)==confirmPassword))
    {
        document.getElementById("confirmPassword_error").style.visibility="visible";
        document.getElementById("confirmPassword_error").innerHTML="Password does not match";
        return false;
    }
    else{
        document.getElementById("confirmPassword_error").style.visibility="hidden";
         return true;
     }
}