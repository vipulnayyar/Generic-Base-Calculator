
$(document).ready(function () {




var select_first_html="";
select_first_html= select_first_html +"<select id=\"first_select\">";
select_first_html= select_first_html +"<option name=\"base1\" value=\"0\" id=\"base1_0\">Select the base to start</option>";

for (var i = 2; i <=520; i++) {
select_first_html=select_first_html+"<option name=\"base1\" value=\""+i+"\" id=\"base1_"+i+"\">"+i+"</option>";
};

select_first_html= select_first_html + "</select>";

$("#select_first").html(select_first_html);








$("#first_select").change(
	
	function() {

		
					var body_html_first=button_html_1($("#first_select").val());

					$("#body_first").html(body_html_first);
					$("#body_first").slideDown("slow");

					$("#second").slideDown("slow");
					$("#third").slideUp("slow");
					$("#fourth").slideUp("slow");
					$("#final").slideUp("slow");




				}



	);






/*      End of main ready function ---------------------------------------------------  */

});
