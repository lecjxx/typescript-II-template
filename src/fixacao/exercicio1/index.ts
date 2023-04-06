/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/


type Pessoas = {
  nome: string,
  idade: number,
  corFavorita: 'vermelha'|'laranja'|'amarela'|
  'verde'|'azul'|'azul-escuro'|'violeta'
}

enum Cores  {
  Vermelha = 'vermelha',
  Laranja = 'laranja',
  Amarela = 'amarela',
  Verde = 'verde',
  AzulEscuro = 'azul-escuro',
  Violeta = 'violeta'
}


type pessoa01 = Pessoas

const Pessoa01 = {
  nome: "Fulano",
  idade: 2,
  corFavorita: Cores.Amarela
}

type pessoa02 = Pessoas

const Pessoa02 = {
  nome: "Luke",
  idade: 1.5,
  corFavorita: Cores.AzulEscuro
}

type pessoa03 = Pessoas

const Pessoa03 = {
  nome: "Théo",
  idade: 3.2,
  corFavorita: Cores.Violeta
}

