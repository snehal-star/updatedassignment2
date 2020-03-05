
function checkFirstName(){
    var num=/[0-9]/;
    // var specialChar= /[!@#\$%\^\&*\)\(+=._-\``\/\\\[]/;
    var specialChar= /[!@#\$%\^\&*\)\(+=._-\``\/]/;

    // const regFirstName = /^[]$/

    let firstName = document.forms["form1"]["firstname"];

    if(firstName.value == ""){
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="Enter first name";
        return false;
    }
    if(num.test(firstName.value)){
         console.log(typeof firstName);
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="numbers are not allowed in name";
        return false;
    }
    if(specialChar.test(firstName.value)){
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
    let emailId = document.forms["form1"]["email"].value;
    var emailIdPattern=/^([a-zA-Z_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(emailId=="")
    {
        document.getElementById("email_error").style.visibility="visible";
       document.getElementById("email_error").innerHTML="Enter Email";
       return false;
    }
   
    if((emailId.indexOf('@')==0) || (emailId.indexOf('!')==0) || (emailId.indexOf('#')==0) || (emailId.indexOf('$')==0)){
        document.getElementById("email_error").style.visibility="visible";
        document.getElementById("email_error").innerHTML="start with special charecter is invalid";
        return false;
    }
    for(i=0;i<=9;i++){
        if(emailId.indexOf(i)==0){
            document.getElementById("email_error").style.visibility="visible";
        document.getElementById("email_error").innerHTML="start with numeric value is invalid";
        return false;
        }
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
function checkBdate() {
	var dd = document.form1.day.value;
	var mm =  document.form1.month.value;
	var yyyy = document.form1.year.value;

	var bDate = new Date(yyyy, mm, dd);
	var today = new Date();

	if((bDate.getMonth()  != mm) || (bDate.getDate() != dd) ||
			(bDate.getFullYear() != yyyy) || (bDate > today)) {

				document.getElementById("date_error").style.visibility = "visible";
				document.getElementById("date_error").innerHTML = "Please select valid date";
				document.forms["form1"]["age"].value = "";
				return false;
	}
	else {
		var y = today.getFullYear() - bDate.getFullYear();
		// var m = today.getMonth() - bDate.getMonth();
		var age = y +" years";
        document.forms["form1"]["age"].value = age;
        
		document.getElementById("date_error").style.visibility = "hidden";
		return true;
	}

}
function checkGender(){
    if(document.form1.radio[0].checked == false &&
		document.form1.radio[1].checked == false) {
			document.getElementById("gender_error").style.visibility = "visible";
			document.getElementById("gender_error").innerHTML = "select a gender";
			
			return false;
    }
    else{
        document.getElementById("gender_error").style.visibility = "hidden";
		return true;
    }
}
function  checkInterest(){
    if( document.form1.checkbox_sample18.checked == false 
    && document.form1.checkbox_sample19.checked == false 
    && document.form1.checkbox_sample20.checked == false) {
    
        document.getElementById("interest_error").style.visibility = "visible";
        document.getElementById("interest_error").innerHTML = "select atleast one interest";
    return false;
}
else{
    document.getElementById("interest_error").style.visibility = "hidden";
    return true;
}
}
function checkTextArea(){
    var message=document.forms["form1"]["write"].value;
    // if(document.form1.radio[0].checked == false &&
	// 	document.form1.radio[1].checked == false) {
	// 		document.getElementById("gender_error").style.visibility = "visible";
	// 		document.getElementById("gender_error").innerHTML = "select a gender";
			
	// 		return false;
	// }
    // if( document.form1.checkbox_sample18.checked == false 
	// 	&& document.form1.checkbox_sample19.checked == false 
	// 	&& document.form1.checkbox_sample20.checked == false) {
		
	// 		document.getElementById("interest_error").style.visibility = "visible";
	// 		document.getElementById("interest_error").innerHTML = "select atleast one interest";
	// 	return false;
	// }
    if(message=="")
    {   
        document.getElementById("textarea_error").style.visibility = "visible";
		document.getElementById("textarea_error").innerHTML = "Write about you";
        return false;
    }
    else{
        
        document.getElementById("textarea_error").style.visibility="hidden";
        return true;
    }
}
// var isValid = false;
function testValidation(){
    checkFirstName();
    checkLastname();
    checkPhoneNo();
    checkOfficeNo();
    checkEmail();
    checkPassword();
    confirmPassword();
    checkBdate();
    checkGender();
    checkInterest();
    checkTextArea();
    if((!checkFirstName()||!checkLastname()||!checkPhoneNo()||!checkOfficeNo()||!checkEmail()||
    !checkPassword()||!confirmPassword()||!checkBdate()||!checkGender()||!checkInterest()||!checkTextArea())
    ){
        document.getElementById("errorOnSubmit").style.visibility = "visible";
        document.getElementById("errorOnSubmit").innerHTML = "check if any field is empty";
        // document.getElementById("textarea_error").style.visibility = "visible";
		// document.getElementById("textarea_error").innerHTML = "Write about you";
        return false;
    }
    else{
        document.getElementById("errorOnSubmit").style.visibility="hidden";
        return true;
    }
}

// function dateValidation(){
//     var year = today.getFullYear();
//     var m = today.getMonth()+1;
//     var d = today.getDate();

//     if( d>0 && d<=9){
//         date="0"+d;
//     }
//     if( m>0 && m<=9){
//         month="0"+m;
//     }
   
//     var maxDate = year+"-"+month+"-"+date;
//     document.getElementById("bdate").max = maxDate;
// }