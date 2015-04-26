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
				  // Handler for .ready() called.
				/*$('.cc-slider').carouFredSel({
					width : "400px",
			        height : "auto",
			        responsive : true,
			        auto : true,
			        scroll : { fx : "crossfade" },
			        items: 1
				}); */
				});  