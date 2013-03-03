

function convert_init(){

$("#fourth").slideUp("slow");
$("#final").slideUp("slow");



$("#second_heading").html("<h3> <i> Conversion Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

var convert_html="";
convert_html= convert_html +"<select id=\"third_convert_select\"  onclick=\"convert_show_ans();\">";
convert_html= convert_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=520; i++) {
convert_html=convert_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

convert_html= convert_html + "</select>";

$("#third").html(convert_html);

$("#third").hide();


$("#third").slideDown("slow");






}


function convert_show_ans(){


	if($("#third_convert_select").val()!=0){

var final_html= "";
final_html ="<h2><i> The converted number is  </i></h2>";

		
var result=convert_backup($("#field1").val(),list[$("#first_select").val()],list[$("#third_convert_select").val()]);

final_html= final_html + "<b>" + result + "</b>";
$("#final").html(final_html);

console.log("start");
	console.log( result );





$("#final").slideUp("slow");
$("#final").slideDown("slow");  

   }


}

