
function or_init(){

$("#fourth").slideUp("slow");
$("#final").slideUp("slow");


$("#second_heading").html("<h3> <i> OR Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

var or_html="";
or_html= or_html +"<select id=\"third_or_select\"  onclick=\"or_button();\">";
or_html= or_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=500; i++) {
or_html=or_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

or_html= or_html + "</select> <div id=\"third_or_button\" style=\"display:none\" > </div> ";

$("#third").html(or_html);
$("#third").hide();

$("#third").slideDown("slow");

}


function or_button(){

if($("#third_or_select").val()!=0){

	var or_button_html="";

	or_button_html=or_button_html + button_html_2($("#third_or_select").val());

	$("#third_or_button").html(or_button_html);
	$("#third_or_button").slideDown("slow");
	$("#fourth").html("<button onclick=\" or_show_ans(); \"> Get OR </button>");
	$("#fourth").slideDown("slow");






    }




}










function or_show_ans(){


	if($("#third_or_select").val()!=0){
		$("#final").slideUp("slow");



var result1=convert_backup($("#field1").val(),list[$("#first_select").val()],"2");
var result2=convert_backup($("#field2").val(),list[$("#third_or_select").val()],"2");

var final_html= "";
final_html ="<h2><i> The OR of the two numbers is  </i></h2>";


final_html= final_html + " In base " + $("#first_select").val() + " : <b>" + convert_backup(or(result1,result2),"2", list[$("#first_select").val()]) + "</b>";

if($("#first_select").val() != $("#third_or_select").val() )
final_html= final_html + " <br/><br/>In base " + $("#third_or_select").val() + " : <b>" + convert_backup(or(result1,result2),"2", list[$("#third_or_select").val()]) + "</b>";

console.log(and(result1,result2));
$("#final").html(final_html);




$("#final").slideDown("slow");     }


}

