let produit=document.querySelectorAll('.product')
console.log(produit);
let prixinitial=document.querySelectorAll('prix')
console.log(prixinitial);
let bouton1=document.querySelectorAll('plus')
console.log(bouton1);
let bouton2=document.querySelectorAll('moins')
console.log(bouton2);
let totalprix=document.querySelectorAll('total')
 console.log(totalprix);
 for (let i = 0; i <= produit.length; i++)
 {
  let prix=prixinitial[i].value
  console.log(prix);
  let (click,function()
  {
   let totalprix=prixinitial[i].value*price[i].value
 price[i].value+=i
  })
  }
