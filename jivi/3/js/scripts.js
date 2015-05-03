var hdrH = $('nav').height(),
	ftrH = $('footer').height();
	winH = $(document).height();

//callback handler for form submit
/*$("#ajaxform").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) 
        {
            //data: return data from server
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            //if fails      
        }
    });
    e.preventDefault(); //STOP default action
    e.unbind(); //unbind. to stop multiple form submit.
});
 
$("#ajaxform").submit(); //Submit  the FORM

*/

function validate() {


		var frmStatus = $('.all-slides').css("marginLeft");

		if ($('.sd1').val() != "") {

			console.log($('.sd1').val());
			
		$('.all-slides').animate({ marginLeft: '-=130px'});
		
		} else {
			
			  console.log('fill 1')
		} 


	}






	$('.main2').height(winH - hdrH - ftrH );
	$('.phn-frm button').click(validate)
	$('.phn-frm').animate({ top:'50%', opacity:'1'}, 600, 'linear');


	$(document).ready(function() {


/*================================
=            skip btn            =
================================*/


function scrollToSecond () {
	var sclrollNow = $(window).height();
	 $('body').animate({scrollTop: sclrollNow}, 600);
}
$('.skip').on('click', function  () {	
	  
	 scrollToSecond();
})


/*-----  End of skip btn  ------*/




				  // Handler for .ready() called.
				/*$('.cc-slider').carouFredSel({
					width : "400px",
			        height : "auto",
			        responsive : true,
			        auto : true,
			        scroll : { fx : "crossfade" },
			        items: 1
				}); */

    var slideW = $('.slide-f').width()+5,
    moveMax = slideW*2;
    $('.nxt-btn').on('click', function  () {
checkForm();
console.log($('.all-slides').css('margin-left')+', '+ slideW);
        
            $('.all-slides').animate({ 
                marginLeft: '-='+slideW
                 }, { 
        step: function( now, fx ) {
   var sliderMargin = $('.all-slides').css('margin-left');
        	
             if (sliderMargin == -slideW+"px") {

            	  $('.nxt-btn').replaceWith("<button class='nxt-btn right'>Submit</button>");

            } 
            if (sliderMargin == -moveMax+"px") {

            	  $('form .left, form .right').fadeOut();

            }else if(sliderMargin == -(slideW*3)+"px") {
              
                	 $('.all-slides').finish();
               
            } 
        }
    })
    });

  

				});  

/*==================================
=            validation            =
==================================*/
  function goTo (val) {

    	$('.all-slides').animate({
    		marginLeft: val
    	})
    	
    }

function checkForm()
{
	var emailF = "0px",
	nameF ="-130px",
	phoneF ="-260px";
		

	if(document.jiviform.email.value=="")
	{

		alert("Please Enter Your Email.")
		document.jiviform.email.focus()
		return false;
	}
		else
	{
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.jiviform.email.value;
   if(reg.test(address) == false)
    {
		
      alert('Invalid Email Address');
      return false;
    }

	}

	if(document.jiviform.uname.value=="")
	{
		
		alert("Please Enter Your Name.")
		document.jiviform.uname.focus()
		return false;
	}

	if(document.jiviform.phone.value=="")
	{
	
		alert("Please Enter Your Contact No..")
	
		document.jiviform.phone.focus()
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


/*-----  End of validation  ------*/

