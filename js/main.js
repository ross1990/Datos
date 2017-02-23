var arr = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleaños : "23 de enero" },
 { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleaños : "25 de noviembre" },
 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleaños : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleaños : "10 de octubre" },
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleaños : "23 de enero" } ]
//var coder = document.getElementById("coder");
arr.forEach(function(e){
  document.write("<div><ul><li>" + "Nombre: " + e.nombre + "<li>" +
   "Apellido: " + e.apellido + "<li>" + "Rol: " + e.rol + "<li>" +
   "Cumpleaños: " +  e.cumpleaños + "</div></ul></li>")
});
