const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./imagenes/pokerror.gif");
            
        }
        else {
            return res.json();
            
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pkNum = data.id;
            pokeNumero(pkNum, pokeName);
            console.log(pkNum);

            let pktype1 = data.types[0].type.name;
            let pktype2 = "";
            if(data.types[1]) pktype2 = data.types[1].type.name;
            pokeTipo(pktype1, pktype2);

            let s0 = data.stats[0].base_stat;
            let s1 = data.stats[1].base_stat;
            let s2 = data.stats[2].base_stat;
            let s3 = data.stats[3].base_stat;
            let s4 = data.stats[4].base_stat;
            let s5 = data.stats[5].base_stat;
            pokeStats(s0, s1, s2, s3, s4, s5);
            
            let m1 = data.moves[0].move.name;
            let m2 = data.moves[1].move.name;
            let m3 = data.moves[2].move.name;
            let m4 = data.moves[3].move.name;
            pokeMovimientos(m1, m2, m3, m4);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNumero = (pknumber, pkName) => {
    const numero = document.getElementById("pokeNombre");
    numero.innerHTML = "#" + pknumber + " - " + pkName;
}

const pokeTipo = (pkTipo1, pkTipo2) =>{
    const tipo = document.getElementById("pokeTipo");
    if(pkTipo2 != ""){
        tipo.innerHTML = "Tipo: " + pkTipo1 + "/" + pkTipo2;
    }else{
        tipo.innerHTML = "Tipo: " + pkTipo1;
    }
    
}

const pokeStats = (pkHp, pkAtaque, pkDefensa, pkSpAtaque, pkSpDefensa, pkVelocidad) =>{
    const hp = document.getElementById("pkHp");
    const ataque = document.getElementById("pkAtaque");
    const defensa = document.getElementById("pkDefensa");
    const sAtaque = document.getElementById("pkAtEspecial");
    const sDefensa = document.getElementById("pkDefEspecial");
    const velocidad = document.getElementById("pkVelocidad");

    hp.innerHTML = "Hp: " + pkHp;
    ataque.innerHTML = "Ataque: " + pkAtaque;
    defensa.innerHTML = "Defensa: " + pkDefensa;
    sAtaque.innerHTML = "Ataque especial: " + pkSpAtaque;
    sDefensa.innerHTML = "Defensa especial: " + pkSpDefensa;
    velocidad.innerHTML = "Velocidad: " + pkVelocidad;
}

const pokeMovimientos = (pkM1, pkM2, pkM3, pkM4) =>{
    const m1 = document.getElementById("pkMov1");
    const m2 = document.getElementById("pkMov2");
    const m3 = document.getElementById("pkMov3");
    const m4 = document.getElementById("pkMov4");

    m1.innerHTML = pkM1;
    m2.innerHTML = pkM2;
    m3.innerHTML = pkM3;
    m4.innerHTML = pkM4;
}