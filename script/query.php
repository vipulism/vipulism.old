<?php

$contact = $_REQUEST['contact'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$requirement=$_REQUEST['comment'];
$ip=$_SERVER['REMOTE_ADDR'];
$url=$_SERVER['HTTP_REFERER'];
 	
$sub="Enquiry Mail from : ".$_POST['email'];
	 $from=$_POST['email'];
	 $msg ="From Page  :$url\n\n";
	 $msg.="Contact Person:$contact\n";
	 $msg.="Product Category:$product\n";
	 $msg.="Company Name:$company\n";
	 $msg.="Product Code:$code\n";
	 $msg.="Contact No.:$phone\n";
	 $msg.="Colour:$colour\n";
	 $msg.="Email:$email\n";
	 $msg.="Quantity:$quantity\n";
	 $msg.="Ref Url:$url\n\n";
	 $msg.="IP   :$ip\n";
      

   $headers = "From: ${email}\nReply-To: ${email}";
		
       
	    mail("vipul@sdsonline.in ", "Enquiry Mail from :Kenfordindia.com", "$msg", "From:$email");
		//mail("ankitjain04@gmail.com", "Enquiry Mail from :ushawelding.com", "$msg", "From:$email");
         
		
		 echo "<script language=\"JavaScript\">\n";
    echo "<!-- hide from old browser\n\n";
    
    echo "function redirect() {\n";
    echo "window.location = \"" . "http://www.kenfordindia.com/" . "\";\n";
    echo "}\n\n";

    echo "timer = setTimeout('redirect()', '" . ($seconds*1000) . "');\n\n";

    echo "-->\n";
    echo "</script>\n"; 


?>