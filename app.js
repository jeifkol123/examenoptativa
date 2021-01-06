const tabla = document.getElementById("tabla");

function abrir() {
    const ventanaAdd = document.querySelector('.addFecha');
    ventanaAdd.classList.toggle('show')
}

function save(){

    // INPUTS VALUE
    let donante = document.getElementById("Donante").value;
    let gasto = document.getElementById("Fecha").value;
    let descrip = document.getElementById("Detail").value;

    //VERIFICAR
    if(donante.length == 0 ){
        const donanteInput = document.getElementById('donanteInput');
        document.getElementById('Donante').focus();
        donanteInput.classList.add("danger");
        return;
    }else{
        donanteInput.classList.remove("danger")
    }
    if(gasto.length == 0 ){
        console.log(gasto)
        const gastoInput = document.getElementById('gastoInput')
        document.getElementById('Fecha').focus();
        gastoInput.classList.add("danger");
        return;
    }else{
        donanteInput.classList.remove("danger")
    }
    if(descrip.length == 0 ){
        const descripInput = document.getElementById('descripInput')
        document.getElementById('Detail').focus();
        descripInput.classList.add("danger");
        return;
    }else{
        descripInput.classList.remove("danger")
    }


    // JUNTAR TODO EN UN OBJETO
    const gastoValue = {
        donante: donante,
        gasto: gasto,
        descrip: descrip
    }

    if(localStorage.getItem("Fechas") == null){
        let gastos = [];
        gastos.push(gastoValue);
        localStorage.setItem("Fechas", JSON.stringify(gastos));
    }else{
        let gastos = JSON.parse(localStorage.getItem("Fechas"))
        gastos.push(gastoValue);
        localStorage.setItem("Fechas", JSON.stringify(gastos))
    }

    document.getElementById("Donante").value = "";
    document.getElementById("Fecha").value = "";
    document.getElementById("Detail").value = "";

    abrir();
    getTable();
}

function getTable(){

    if(!(localStorage.getItem("Fechas") == null)){
        
        let gastos = JSON.parse(localStorage.getItem("Fechas"))
        console.log(gastos)
        
        tabla.innerHTML = ``;
        for(x = 0; x < gastos.length; x++){
    
            let donante = gastos[x].donante;
            let gasto = gastos[x].gasto;
            let descrip = gastos[x].descrip;

            if(descrip.length > 10){
                let descripMin = gastos[x].descrip.split("").slice(0,8).join("");

                tabla.innerHTML += `
                <tr class="cuerpo">
                    <td class="move" onclick="modal('${donante}', '${gasto}', '${descrip}')">${donante}</td>
                    <td class="move" onclick="modal('${donante}', '${gasto}', '${descrip}')">${gasto}</td>
                    <td class="move" onclick="modal('${donante}', '${gasto}', '${descrip}')">${descripMin}...</td>
                    <td onclick="removeTable('${donante}')" class="icon" ><i class="far fa-trash-alt"></i></td>
                </tr>   
                `;
            }else{
                tabla.innerHTML += `
                <tr class="cuerpo">
                    <td class="move" onclick="modal('${donante}', '${gasto}', '${descrip}')">${donante}</td>
                    <td class="move" onclick="modal('${donante}', '${gasto}', '${descrip}')">${gasto}</td>
                    <td class="move" onclick="modal('${donante}', '${gasto}', '${descrip}')">${descrip}</td>
                    <td onclick="removeTable('${donante}')" class="icon" ><i class="far fa-trash-alt"></i></td>
                </tr>   `;
            }
    
        }
    }
    gastosTotales()
}

function removeTable(donante){

    let gastos = JSON.parse(localStorage.getItem("Fechas"));
    console.log(gastos);

    for(x = 0; x < gastos.length; x++){
        if( gastos[x].donante == donante){
            gastos.splice(x, 1);
        }
    }

    localStorage.setItem("Fechas", JSON.stringify(gastos));
    getTable();
    gastosTotales();
}

function gastosTotales(){
    let tablaTotal = document.getElementById("Total");
    let dineros = JSON.parse(localStorage.getItem("Fechas"));
    console.log(dineros.length)
    let gastosTotal = 0;

    if(dineros.length == 0){
        tablaTotal.innerHTML = ``;
    }else{
        for(x = 0; x < dineros.length; x++ ){
    
            let dinero = Number(dineros[x].gasto);
            gastosTotal = gastosTotal + dinero;
            tablaTotal.innerHTML = ``;
        }
    }
    
}
getTable()
gastosTotales()

function modal(donante, gasto, descrip){

    const modal = document.getElementById("Modal");
    const modalContetn = document.getElementById("modalContetn");
    modal.classList.toggle("modalShow");

    modalContetn.innerHTML = `

    <header onclick="modal()">
        <i class="fas fa-times"></i>
    </header>

    <div class="donante">Datos</div>
        <div class="textos">
            <div class="texto texto-cab">
            <p>Donante: </p>
            <span>${donante}</span>
        </div>
        <div class="texto texto-cab">
            <p>Monto: </p>
            <span>${gasto}</span>
        </div>
        <div class="texto">
            <p>Detalle: </p>
            <span>${descrip}</span>
 <div class="bton">
               <a href="nuevadonacion.html"> <h1>CERRAR</h1></a>
            </div>
    </div>
</div>
    
    `;
}