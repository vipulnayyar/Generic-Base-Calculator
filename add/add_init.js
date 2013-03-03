
function add_init(){
	
$("#fourth").slideUp("slow");
$("#final").slideUp("slow");


$("#second_heading").html("<h3> <i> Addition Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

var add_html="";
add_html= add_html +"<select id=\"third_add_select\"  onclick=\"add_button();\">";
add_html= add_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=520; i++) {
add_html=add_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

add_html= add_html + "</select> <div id=\"third_add_button\" style=\"display:none\" > </div> ";

$("#third").html(add_html);
$("#third").hide();

$("#third").slideDown("slow");

}


function add_button(){

if($("#third_add_select").val()!=0){

	var add_button_html="";

	add_button_html=add_button_html + button_html_2($("#third_add_select").val());

	$("#third_add_button").html(add_button_html);
	$("#third_add_button").slideDown("slow");

	$("#fourth").html("<button onclick=\" add_show_ans(); \"> Get Sum </button>");
	$("#fourth").slideDown("slow");






    }




}










function add_show_ans(){


	if($("#third_add_select").val()!=0){
$("#final").slideUp("slow");

var num1=convert_backup($("#field1").val(),list[$("#first_select").val()],list[$("#third_add_select").val()]);

var num2=convert_backup($("#field2").val(),list[$("#third_add_select").val()],list[$("#first_select").val()]);




var final_html= "";
final_html ="<h2><i> The Sum of the two numbers is  </i></h2>";

final_html= final_html + "In base " + $("#first_select").val() + " : <b>" + add_start($("#field1").val(),num2,list[$("#first_select").val()])[0] + "</b>";

if($("#first_select").val() != $("#third_add_select").val() )
final_html= final_html + "<br/><br/>In base " + $("#third_add_select").val() + " : <b>" + add_start(num1,$("#field2").val(),list[$("#third_add_select").val()])[0] + "</b>";

$("#final").html(final_html);




$("#final").slideDown("slow");     }


}

