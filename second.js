var company= document.getElementById('CompanyOverview');
company[2].onclick =function(){
    company.scr=company[2].scr;
}
const age=parseInt(prompt("Enter your Age ="));
if(age>18){
    console.log("you are selected for next round");
}
else{
    console.log("You are not viliginle");
}