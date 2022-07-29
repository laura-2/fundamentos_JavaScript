const apresentacaoo = function(nome, idade, cidade){
    nome = nome,
    idade = idade,
    cidade = cidade

    this.getNome = function(){
        return nome;
    }
    this.getIdade = function(){
        return idade;
    }
    this.getCidade = function(){
        return cidade;
    }
}

const mim = new apresentacaoo("laura", "19", "curitiba")
console.log(mim.getNome())


class apresentacao {
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    apresentar(){
        console.log(`oi, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}`)
    }
}
const eu = new apresentacao("laura", "19", "curitiba");
eu.apresentar()

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }
  
console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica))

