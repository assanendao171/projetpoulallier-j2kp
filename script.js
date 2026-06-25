let rec=document.querySelectorAll(".btnprod")
rec.forEach(function(btn){
btn.addEventListener("click",function(){
    alert("Ce produit a été ajouter au panier")
})
})

let send=document.getElementById("sent")
let div=document.getElementById("div")
send.addEventListener("click",function(){
div.innerText="votre message est bien envoyer avec succes";


  setTimeout(function() {
    div.style.display = "none";
  }, 2000);
})