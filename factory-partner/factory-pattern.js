function fabricarPessoa(nome, sobrenome){
   
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrnome = sobrenome;

    function nomeCompleto () {
        return `${pessoa.nome} ${pessoa.sobrnome}`;
    }
    pessoa.nomeCompleto = nomeCompleto;

    return pessoa;
}

let pessoaA = fabricarPessoa('everton', 'walker');
console.log(pessoaA.nomeCompleto());
