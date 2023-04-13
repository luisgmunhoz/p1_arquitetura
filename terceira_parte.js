//reescrever a função calculoRapidinho sem usar o atalho Promise.resolve
//ou seja, usando new Promise

function calculoRapidinho(n){
  
}

function calculoRapidinho(n){
  return Promise.resolve((n * (n + 1)) / 2)
}

const pConcluida = calculoRapidinho(10)
pConcluida.then(res => console.log(res))


function calculoDemorado(n){
  const p = new Promise(function(resolve, reject){
    let res = 0
    for (let i = 1; i <= n; i++) res += i
    resolve(res)
  })
  return p
}
const minhaPromise = calculoDemorado(10)


minhaPromise.then((resultado) => {console.log(resultado)})
// const fs = require ('fs')
// const abrirArquivo = (nomeArquivo) => {
//   const exibirConteudo = (erro, conteudo) => {
//     if (erro)
//       console.log("Erro: " + erro)
//     else{
//       console.log("Conteúdo: " + conteudo.toString())
//       const resultado = +conteudo.toString() * 2
//       const finalizar = (erro) => {
//         //condicao ? v1 : v2
//         console.log(erro ? "Erro: " + erro : "Escrita ok")
//       }
//       fs.writeFile('dobro.txt', resultado.toString(), finalizar)
//     }
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')


// function demorada(){
//   const atualMais2Segundos = new Date().getTime() + 2000
//   while(new Date().getTime() <= atualMais2Segundos);//no-op
//   const d = 8 + 4
//   return d
// }

// const a = 2 + 3
// const b = 5 + 9
// setTimeout(() => {
//   const d = demorada()
//   console.log("d: " + d)
// }, 0)

// const e = 2 + a + b
// const dataMais10Segundos = new Date().getTime() + 10000
// while (new Date().getTime() <= dataMais10Segundos);
// console.log("e: " + e)


// const a = 2 + 7
// const b = 5
// console.log(a + b)


// console.log('Eu primeiro...')
// console.log("Agora eu...")
// console.log('Sempre vou ser a última...:(')