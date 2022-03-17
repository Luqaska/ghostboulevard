var estado;
function checkearEstado(){
  try{
    fetch('https://gbs.beikvar.cf/data.json')
      .then(response => response.json())
      .then(function(data){
        if(data["status"]==1){estado="Online";}else if(data["status"]==0){estado="Offline";}else{estado="Error";}
        document.getElementById("estado").innerHTML = "<h2>"+estado+"</h2>";
      });
  }
  catch(err){
    document.getElementById("estado").innerHTML = "<iframe src='https://gbs.beikvar.cf/estado.php' style='border:none;height:50px'></iframe>";
  }
}
checkearEstado();
setInterval(checkearEstado, 5000);
