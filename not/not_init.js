

function not_init(){

	
$("#fourth").slideUp("slow");
$("#final").slideUp("slow");



$("#second_heading").html("<h3> <i> NOT Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

/*

var not_html="";
not_html= not_html +"<select id=\"third_not_select\"  onclick=\"not_show_ans();\">";
not_html= not_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=500; i++) {
not_html=not_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

not_html= not_html + "</select>";

$("#third").html(not_html);

$("#third").hide();


$("#third").slideDown("slow");
*/

not_show_ans();





}


function not_show_ans(){


	if($("#third_not_select").val()!=0){

		$("#final").slideUp("slow");


if($("#third_not_select").val() != "2" )
var result1=convert_backup($("#field1").val(),list[$("#first_select").val()],"2");
else 
var result1 = $("#field1").val();

var final_html= "";
final_html ="<h2><i> The Not of the given number is  </i></h2>";

final_html= final_html + " In base " + $("#first_select").val() +" : <b>" + convert_backup(not(result1),"2",list[$("#first_select").val()]) + "</b>";

console.log(not(result1));
$("#final").html(final_html);

$("#final").slideDown("slow");     }


}

