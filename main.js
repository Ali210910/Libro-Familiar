var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i=0;
function nextslide() {
  i++;
  var numero=5;
  if (i>numero){
    i=0;
  }
  var actualiza_imagen=images[i]; var actualiza_nombres=names[i];
  document.getElementById("album").src=actualiza_imagen;
  document.getElementById("Family").innerHTML=actualiza_nombres;
}
