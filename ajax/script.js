// APIs disponíveis para consumir
// https://jsonplaceholder.typicode.com/
// https://reqres.in/
// https://rickandmortyapi.com/
// https://pokeapi.co/docs/v2#pokemon-section


function listarTodos() {
    // Criando objeto do tipo XHttpRequest
    var xhttp = new XMLHttpRequest();

    // Definindo o tipo de resposta
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
            console.log(xhttp);
            console.log(xhttp.response);

            if(this.status == 200){
                alert("Registros encontrados com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }  

    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
}

function listarPeloId(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp);
            console.log(this.response);

            if(this.status == 200){
                alert("O registro foi encontrado com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }        
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id, true);
    xhttp.send();
}

function salvar() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    var objeto = {
        title: "Teste"
    };

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(xhttp);
            console.log(this.response);

            if(this.status == 201){
                alert("Registro salvo com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }   
    };

    xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(objeto)); 
}

function alterar() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    var objeto = {
        id: 1,
        title: "Teste"
    };

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(xhttp);
            console.log(this.response);

            if(this.status == 200){
                alert("Registro alterado com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }  
    };

    xhttp.open("PUT", "https://jsonplaceholder.typicode.com/posts/" + objeto.id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(objeto)); 
}

function deletar(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(xhttp);
            console.log(this.response);

            if(this.status == 200){
                alert("Registro excluído com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }        
    };

    xhttp.open("DELETE", "https://jsonplaceholder.typicode.com/posts/" + id, true);
    xhttp.send();  
}




function getImage() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
            console.log(xhttp);

            let pokemons = xhttp.response.results;
            console.log(pokemons);

            let nomes = pokemons.map(function(pokemon){
                return pokemon.name;
            });

            console.log(nomes);

            if(this.status == 200){
                alert("Registros encontrados com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }  

    };

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
    xhttp.send();
}