$(document).ready(function () {
  //obtenemos el valor de los input

  $('#adicionar').click(function () {



    var tipo = document.getElementById("tipo").value;
    var detalle = document.getElementById("detalle").value;
    var fecha = document.getElementById("fecha").value;
  

    if (tipo == "") {
      alert("El tipo está vacío");
      return false;
    }
    else
      if (detalle == "") {
        alert("La detalle no puede quedar vacía");
        return false;
      }
      if (fecha== "") {
      alert("La fecha está muy corta");
      return false;
     }
    


    var i = 1; //contador para asignar id al boton que borrara la fila
    var fila = '<tr id="row' + i + '"><td>' + tipo + '</td><td>' + detalle + '</td><td>' + fecha + '</td><td>'<button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

    i++;

    $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header

    var select = document.getElementById("select"),
      txtVal = document.getElementById("tipo").value,
      newOption = document.createElement("OPTION"),
      newOptionVal = document.createTextNode(txtVal);

    newOption.appendChild(newOptionVal);
    select.insertBefore(newOption, select.firstChild);

    document.getElementById("tipo").value = "";
    document.getElementById("detalle").value = "";
    document.getElementById("fecha").value = "";
  
    document.getElementById("tipo").focus();

    $(document).on('click', '.btn_remove', function () {
      var button_id = $(this).attr("id");
      //cuando da click obtenemos el id del boton
      $('#row' + button_id + '').remove(); //borra la fila
      //limpia el para que vuelva a contar las filas de la tabla
      $("#adicionados").text("");
      var nFilas = $("#mytable tr").length;
      $("#adicionados").append(nFilas - 1);
    });
  });

  $('#ag_parametros').click(function () {
    var nombreu = document.getElementById("nombreu").value;
    var correo = document.getElementById("correo").value;
    var passwd = document.getElementById("passwd").value;

    if (nombreu == "") {
      alert("Este campo no puede quedar vacío");
      return false;
    }
    else
      if (correo == "") {
        alert("Este campo no puede quedar vacío");
        return false;
      }

      else
        if (passwd == "") {
          alert("Este campo no puede quedar vacío");
          return false;
          return false;
        }

    var i = 1; //contador para asignar id al boton que borrara la fila
    var fila = '<tr id="row' + i + '"><td>' + nombreu + '</td><td>' + correo + '</td><td>' + passwd + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove2">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

    i++;

    $('#mytableb tr:first').after(fila);
    $("#ag_parametros").text(""); //esta instruccion limpia el div adicionandos para que no se vayan acumulando
    var nFilas = $("#mytableb tr").length;
    $("#ag_parametros").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    document.getElementById("nombreu").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("passwd").value = "";
    document.getElementById("nombreu").focus();


    $(document).on('click', '.btn_remove2', function () {
      var button_id = $(this).attr("id");
      //cuando da click obtenemos el id del boton
      $('#row' + button_id + '').remove(); //borra la fila
      //limpia el para que vuelva a contar las filas de la tabla
      $("#adicionados").text("");
      var nFilas = $("#mytableb tr").length;
      $("#adicionados").append(nFilas - 1);
      $("#ag_parametros").text("");
      $("#ag_parametros").append("Guardar");
    });
  });

  $('#calcular').click(function () {

    var tipo = document.getElementById("tipo").value;
    var hora = document.getElementById("hora").value;
    var detalle = document.getElementById("detalle").value;

    /*  var tmentrada = new Date(document.getElementById("tmentrada").value).getTime();
      var tmsalida =  new Date(document.getElementById("tmsalida").value).getTime();
*/

    var dif = tmsalida - tmentrada;

    var contDias = Math.round(dif / (1000 * 60 * 60 * 24));
    var contHoras = Math.round(dif / (1000 * 60 * 60));
    var contMin = Math.round(dif / (1000 * 60));
    var contSeg = Math.round(dif / (1000));
    var dias = 0;
    var horas = 0;
    var min = 0;

    while (contSeg >= 60) {
      while (contMin >= 60) {
        while (contHoras >= 24) {
          dias++;
          contDias -= 1;
          contHoras -= 24;
          contMin -= 1440;
          contSeg -= 86400;
        }
        if (contMin < 60) {
          break;
        }
        horas++;
        contMin -= 60;
        contSeg -= 3600;

      }
      if (contSeg < 60) {
        break;
      }
      min++;
      contSeg -= 60;

    }
    console.log("Dias: " + dias + " Horas: " + horas + " Minutos: " + min);

    var total = dias * cdias + horas * hora + min * cminutos;
    alert("El total a Pagar es de: " + total);


    if (ctipo == "") {
      alert("Este campo no puede quedar vacío");
      return false;
    }
    else {
      if (hora == "") {
        alert("Este campo no puede quedar vacío");
        return false;
      }

      else {
        if (detalle == "") {
          alert("Este campo no puede quedar vacío");
        }
        return false;
        return false;
      }
    }

  });
}); 