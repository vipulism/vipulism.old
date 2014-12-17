function checkForm()
{
	//ok=true;
		
	if(document.loginform.contact.value=="")
	{
		alert("Please Enter Contact Person Name.")
		document.loginform.contact.focus()
		return false;
	}
	if(document.loginform.product.value=="")
	{
		alert("Please Enter Your Product Category.")
		document.loginform.product.focus()
		return false;
	}
	if(document.loginform.company.value=="")
	{
		alert("Please Enter Your Company Name.")
		document.loginform.company.focus()
		return false;
	}
	if(document.loginform.code.value=="")
	{
		alert("Please Enter Your Product Code.")
		document.loginform.code.focus()
		return false;
	}
	if(document.loginform.phone.value=="")
	{
		alert("Please Enter Your Contact No..")
		document.loginform.phone.focus()
		return false;
	}
	if(document.loginform.colour.value=="")
	{
		alert("Please Enter Colour.")
		document.loginform.colour.focus()
		return false;
	}
	if(document.loginform.email.value=="")
	{
		alert("Please Enter Your Email.")
		document.loginform.email.focus()
		return false;
	}
		else
	{
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.loginform.email.value;
   if(reg.test(address) == false)
    {
      alert('Invalid Email Address');
      return false;
    }

	}
	
	
	
	if(document.loginform.quantity.value=="")
	{
		alert("Please Enter Your Quantity.")
		document.loginform.quantity.focus()
		return false;
	}
}

function ValidateNum(input,event){
			var keyCode = event.which ? event.which : event.keyCode;
			if(parseInt(keyCode)>=48 && parseInt(keyCode)<=57){
				return true;
			}
			return false;
		}// JavaScript Document