//Run this Code in the EDS CustomLink Mapping Profile Check Page @ http://profile-check.ebsco-gss.net/

var getMain1 = window.document.getElementById('customlinks');
var getMain2 = Array.prototype.slice.call(getMain1.getElementsByClassName('label label-danger'));
var cl = [];
for(var x=0;x<getMain2.length;x++){
var eachElem = getMain2[x].parentElement.parentElement.childNodes[0].textContent;;
cl.push(eachElem);
}
alert("No Databases."+"\n"+cl.join("\n"));

