
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

// function checkBdate() {
//     var yyyy = document.form1.year.value;
//     console.log(yyyy);
//     var currentDate=new Date;

//     if(yyyy==currentDate.getFullYear()){
        
//     }
//     var mm=document.form1.month.value;
//     console.log(mm);
    // if()
    // <script type="text/javascript">
	// 										var dt = new Date();
	// 										var allMonths=[Jan,Feb,March,April,May,June,July,Aug,Sep,Oct,Nov,Dec];
	// 										var MonthDateMap={Jan:31,Feb:29,March:31,
	// 														  April:30,May:31,June:30,
	// 														  july:31,Aug:31,Sep:30,
	// 														  Oct:31,Nov:30,Dec:31
	// 														}
	// 										var Dates=[1,2,3,4,5,6,7,8,9,10,
	// 													11,12,13,14,15,16,17,18,19,20,
	// 													21,22,23,24,25,26,27,28,29,30,31];
	// 										for(var i=0; i<=11; i++) {
	// 											document.write("<option value = '"+i+"'>" +arr[i] +"</option>" );
	// 										}
	// 										</script> 
	// var dd = document.form1.day.value;
	// var mm =  document.form1.month.value;
	// var yyyy = document.form1.year.value;

    // var bDate = new Date(yyyy, mm, dd);
    // console.log(bdate);
	// var today = new Date();

	// if((bDate.getMonth()  != mm) || (bDate.getDate() != dd) ||
	// 		(bDate.getFullYear() != yyyy) || (bDate > today)) {

	// 			document.getElementById("date_error").style.visibility = "visible";
	// 			document.getElementById("date_error").innerHTML = "Please select valid date";
	// 			document.forms["form1"]["age"].value = "";
	// 			return false;
    // }
    // if((bDate.getFullYear())==(today.getFullYear())){
    //     var x=bDate.getMonth();
    //     for(i=x;i<=11;i++)
    //     {
    //         document.getElementById("months").style.visibility="hidden";
    //         document.forms["form1"]["age"].value = "";
				
    //     }
    //     // return false;
    // // document.getElementById("date_error").style.visibility = "visible";
	// // 			document.getElementById("date_error").innerHTML = "do not select tomorrows date";
	// // 			document.forms["form1"]["age"].value = "";
	// // 			return false;
    // }
	// else {
	// 	var y = today.getFullYear() - bDate.getFullYear();
	// 	// var m = today.getMonth() - bDate.getMonth();
	// 	var age = y +" years";
    //     document.forms["form1"]["age"].value = age;
        
	// 	document.getElementById("date_error").style.visibility = "hidden";
	// 	return true;
	// }

// }
function myfunction() {
    let monthArray = [
      "month",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    document.getElementById("month").innerHTML = "";
  
    // month options dynamically
  
    if (document.getElementById("year").value == new Date().getFullYear()) {
      max_month = new Date().getMonth() + 1;
  
      document.getElementById("month").innerHTML = "";
  
      for (m = 0; m <= max_month; m++) {
        let month_option = document.createElement("option");
        month_option.value = m;
        month_option.innerHTML = monthArray[m];
        document.getElementById("month").appendChild(month_option);
      }
    } else {
      for (m = 0; m < monthArray.length; m++) {
        let month_option = document.createElement("option");
        month_option.value = m;
        month_option.innerHTML = monthArray[m];
        document.getElementById("month").appendChild(month_option);
      }
    }
  }
  
  //getting days value from this function
  
  function getday() {
    let max_day = 0;
    if (
      document.getElementById("year").value == new Date().getFullYear() &&
      document.getElementById("month").value == new Date().getMonth() + 1
    ) {
      max_day = new Date().getDate();
  
      // document.getElementById("day").innerHTML = "";
      for (let j = 1; j <= max_day; j++) {
        let day_option = document.createElement("option");
        day_option.value = j;
        day_option.innerHTML = j;
        document.getElementById("day").appendChild(day_option);
      }
    } else {
      // document.getElementById("day").innerHTML = "";
      max_day = 31;
      for (let j = 1; j <= max_day; j++) {
        let day_option = document.createElement("option");
        day_option.value = j;
        day_option.innerHTML = j;
        document.getElementById("day").appendChild(day_option);
      }
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