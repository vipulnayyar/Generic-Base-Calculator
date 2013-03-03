
var list = new Array();

for (var i = 0; i < 10; i++) list[i]="" + i;

var alpha_small = "abcdefghijklmnopqrstuvwxyz";

var alpha_big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (var j = 0; j < 26; j++) 
for (var k = 0; k < 10; k++) 
list[i++]=alpha_small[j] + k;


for (var j = 0; j < 26; j++) 
for (var k = 0; k < 10; k++) 
list[i++]=alpha_big[j] + k;
