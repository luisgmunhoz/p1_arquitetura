//objetos literais Javascript
//(JSON) Javascript Object Notation
//calculadora que soma dois valores e subtrair um valor de outro
// let calc = {
//   soma: (a, b) => a + b,
//   subtracao: function(a, b){
//     return a - b
//   }
// }

// console.log(calc.soma(2, 3))
// console.log(calc['subtracao'](5, 2))



//Uma concessionária tem CNPJ e endereço (logradouro e número). Ela possui três veículos no seu estoque. Cada veículo tem modelo, marca e ano de fabricação.

// let concessionaria = {
//   cnpj: '00011122210001-45',
//   endereco: {
//     logradouro: 'Rua B',
//     numero: 121
//   },
//   veiculos: [
//     {
//       marca: 'VW',
//       modelo: 'Fusca',
//       anoFabricacao: '1970'
//     },
//     {
//       marca: 'Chevrolet',
//       modelo: 'Corsa',
//       anoFabricacao: 2005
//     },
//     {
//       marca: 'Ford',
//       modelo: 'Fiesta',
//       anoFabricacao: 2015
//     }
//   ]
// }

// for (let veiculo of concessionaria.veiculos){
//   console.log(veiculo.marca, veiculo['modelo'], veiculo.anoFabricacao)
// }

//uma pessoa que se chama Maria, tem 21 anos e mora na Rua B, numero 121
//objeto aninhado
// let pessoa = {
//   nome: 'Maria',
//   idade: 21,
//   endereco: {
//     logradouro: 'Rua B',
//     numero: 121
//   }
// }

// console.log(pessoa.endereco.logradouro)
// console.log(pessoa.endereco['logradouro'])
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa['endereco'].numero)

//uma pessoa que se chama João e tem 17 anos
// let pessoa = {
//   nome: 'João',
//   idade: 17
// }
// //. e [""]
// console.log(pessoa.nome)
// console.log(pessoa["idade"])

// RA do aluno, nome Do aluno
// 12345, Maria
// 6555443, Joao

// pessoa["RA do aluno"]





// function eAgora(){
//   let cont = 1
//   function f1(){
//     console.log(cont)
//   }
//   cont++
//   function f2(){
//     console.log(cont)
//   }
//   return {f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()


// function  saudacoesFactory (saudacao, nome){
//   return function (){
//     console.log(saudacao + ", " + nome)  
//   }
// }

// let olaJoao = saudacoesFactory("Olá", "João")
// let tchauJoao = saudacoesFactory("Tchau", "João")

// olaJoao()
// tchauJoao()

// function f(){
//   let nome = 'João'
//   function g(){
//     let a
//     console.log(nome)
//   }
//   g()
// }
// f()


// function f (funcao){
//   funcao()
// }

// function g (){
//   function outraFuncao(){
//     console.log("Fui criada por g")
//     return function (){
//       console.log("Até logo")
//     }
//   }
//   return outraFuncao
// }

// f(g()())

// f(g)

// f(g())




// f(function(){
//   console.log("Estou sendo passada para f")
// })

// const gResult = g()
// gResult()

// g()()() //undefined()
//clojures
// let umaFuncao = function (){
//   console.log("Fui armazenada em uma variável")
// }
// umaFuncao()

















//funções


// const dobro = valor => valor * 2
// console.log(dobro(2))

// const ehPar = (n) =>
//   n % 2 === 0


// console.log(ehPar(3))

// const hello = () => console.log("Hello")
// console.log(hello())

// const teste = (a, b, c) => a * b * c
// console.log(teste(1, 2, 3))
// a => {console.log(a)}
// (a, b) => console.log(a + b) //syntax sugar


//valor padrão para um parâmetro
// const triplo = function(n = 5){
//   return n * 3
// }
// console.log(triplo())
// console.log(triplo(7))

// const dobro = function (n){
//   return 2 * n
// }
// const res = dobro(5)
// const res2 = dobro(15)
// console.log(res)
// function soma(a, b){
//   return a + b
// }
// console.log(soma(2, 3))
// function hello(){
//   console.log('Hello')
// }
// hello()

// function hello(nome){
//   console.log('Hello ' + nome)
// }
// hello('Flavia')



// public class Teste{
//   public void hello(){

//   }
//   public void hello(){

//   }
// }

// Teste t = new Teste();
// t.hello();

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)


// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const letrasIniciais = nomes.map((nome) => {return nome.charAt(0)})
// console.log(letrasIniciais)

// const numeros = [1, 2, 3, 4, 5]
// console.log(numeros.map((n) => {return n * n}))
//[1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

// const resultado = nomes.filter((nome) => {return nome.startsWith("A")})
// console.log(resultado)
//mapeamento
//['Ana', 'Pedro'] => ['A', 'P']


// const n1 = 'Flavia'
// const n2 = "Rodrigo"
// const n3 = `Silvia`



//filter
//arrow function
// const teste = () => {console.log("minha arrow function")}
// teste()
// const a = 1



// function soma(a, b){
//   return(
//     a + b
//   );
// }
// console.log(soma(2, 3))
// v = [2, 'abc', true]

//1.5 vetores
// v1 = []
// v1[0] = 3.4
// v1[10] = 2
// console.log(v1)
// for (let i = 0; i < v1.length; i++)
//   console.log(v1[i])


// console.log(true == 1)
// console.log(1 == [1])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// console.log(new Object() == new Object())


// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log(1 === '1')


// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// //coerção explícita
// const n4 = n1 + Number(n2)
// int a;
// let a

// var a;

// @Deprecated

// Thread.stop()
// var idade = 18
// // console.log ("Oi, " + nome)
// if (idade >= 18){
//   let nome = "João"//içamento hoist
//   console.log (nome + ", você pode dirigir")
// }
// console.log("Até mais, " + nome)


// var linguagem = "Javascript"
// console.log ("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)


// var endereco = "Rua C"
// console.log(endereco)
// endereco = "Rua B"
// console.log(endereco)
// console.log(typeof(endereco))

//ECMAScript2015
//const, let, var
// let a = 2
// let b = "abc"
// console.log(typeof(b))
// b = 12
// console.log(typeof(b))
// b = true
// console.log(typeof(b))
// const nome1 = "Ana"
// const nome2 = 'Pedro'
// const nome3 = `José`

// console.log(typeof(nome1))
// console.log(typeof(nome2))
// console.log(typeof(nome3))

// nome1 = "João"

//REPL: Read, Evaluate, Print, Loop