let family = {
    father:"C.Lakshmanan",
    mother:"L.Sujatha",
    son:"L.Kumaresan",
   MotherFamily : {
      father : "T.Thiruvengadam",
      mother:"T.Chandra",
      siblings:{
        brother:"T.Thiruppathy",
        sister:"T.Cellamani"
      }
   },
   FatherFamily : {
     father : "L.Chidambaranadhan",
     mother: "C.Puspam",
     siblings:{
        brother:"C.Jayabalan",
        sisters:["C.Chandra","C.Dhanam","C.Eswari"]
     }
   }
}
//console.log(family.son);
family.MotherFamily.siblings.brother="T.Neelakandan";
//console.log(family.MotherFamily.siblings.brother);
console.log(family);