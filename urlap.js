window.onload = indit;
function indit(){

   szulEv();

}
function szulEv(){
  var i, selectv, szoveg, optionv, ldiv;
  var selectv = document.createElement("select");
  selectv.setAttribute("name","Születési éve");
  for(i=1960; i<=2005; i++){
    var szoveg = document.createTextNode(i);
    var optionv = document.createElement("option");
    optionv.setAttribute("value",i);
    optionv.appendChild(szoveg);
    selectv.appendChild(optionv);
  }
  var ldiv = document.getElementById("listadiv");
  ldiv.appendChild(selectv);
}
function kuldes(esemeny){
  var elkuld = true;
  elkuld = elkuld && confirm("Biztosan elküldöd?");
  if(!elkuld){
    if (typeof esemeny.preventDefault != "undefined"){
      esemeny.preventDefault();
    } else if(typeof window.event.returnValue != "undefined"){
      window.event.returnValue = false;
    } else { return false; }
  }
}
