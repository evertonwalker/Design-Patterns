function fabricarPessoa(nome, sobrenome) {

    let pessoa = {};

    //A função nome formal, tem o propósito de trazer apenas o primeiro nome e o último da pessoa.
    function nomeFormal() {

        let sobrenomeQuebrado = sobrenome.split(' ');

        if (sobrenomeQuebrado.length > 1) {

            // Aqui retornamos o último nome da pessoa
            return `${nome} ${sobrenomeQuebrado.pop()}`;

        } else {
            return `${nome} ${sobrenome}`;
        }

    }
    pessoa.nomeFormal = nomeFormal;

    return pessoa;
}

let pessoaA = fabricarPessoa('Everton', 'Walker');
let pessoaB = fabricarPessoa('Edileuza', 'Maria do Nascimento da Silva');

// É interessante entender que, podemos ter acesso a função pois foi atribuida ao usuário -> e ao retorno, o que torna isso público
console.log(pessoaA.nomeFormal()); // ->> Everton Walker -
console.log(pessoaB.nomeFormal()); // ->> Edileuza Silva
// Embora não temos acessos aos dados separados, pois a regra de negócio não queria isso no retorno.
console.log(pessoaA.nome, pessoaA.sobrenome); //->>>  undefined undefined
