window.onload = feldolgoz;
function feldolgoz(){
  adatsor = "";
  kif = document.location.search;
  kif = kif.slice(1);
  szk = /\+/g;
  kif = kif.replace(szk," ");
  t = kif.split("&");
  for(var i=0; i<t.length;i++){
      t[i] = t[i].split("=");
      for(var j=0; j<t[i].length;j+=2){
         t[i][j]=t[i][j].split("_");
               for(var k=0; k<t[i][j].length;k++){
				t[i][j] = unescape(t[i][j]);
				t[i][j+1] = unescape(t[i][j+1]);
	 }

         adatsor +=t[i][j] +":"+ "&nbsp; "+t[i][j+1] + "&nbsp; ";
      }
    adatsor += "<br />";
  }
  document.getElementById("AdatKiir").innerHTML = adatsor;
  document.getElementById("Vissza").onclick = Vissza;
}
function Vissza(){
  history.back();
}
