//atividade 1

// let livro ={
//     titulo: 'RE:Zero',
//     autor: 'Tapei Nagatsuki',
//     ano: 2014,
//     disponivel: true
// };
// console.log(livro.titulo);
// console.log(livro.autor);
// console.log(livro.ano);
// console.log(livro.disponivel);

//atividade 2

// let maquina ={
//     codigo: '67',
//     modelo: "Aura67's",
//     horasUso: 6767,
//     ativa: true
// };
// maquina.horasUso = 676767;
// maquina.setor = 'setor 67';
// console.log(maquina.horasUso);
// console.log(maquina.setor);

//atividade 3

// let aluno ={
//     nome: 'Aura67',
//     matricula: 6767,
//     turma: '67A',
//     notas:[6.7, 8.0, 2.3, 9.8],
// };
// let soma = 0;
// for(let nota of aluno.notas){
//     soma += nota;
// }let media = soma / aluno.notas.length;
// console.log(`A média do aluno ${aluno.nome} é: ${media.toFixed(2)}`);

//atividade 4

// let produto ={
//     nome: 'Notebook',
//     preco: 3000,
//     quantidade: 5,
// };
// for(let chave in produto){
//     console.log(`${chave}: ${produto[chave]}`);
// }

//atividade 5

// let pessoa ={
//     nome: 'Aura67',
//     idade: 18,
//     Endereco:{
//         cidade: 'Chapecó',
//         estado: 'SC',
//     }
// };
// console.log(pessoa.Endereco.cidade);
// console.log(pessoa.Endereco.estado);

//atividade 6

// let veiculo ={
//     marca: 'Chevrolet',
//     modelo: 'Onix',
// };
// for(let chave in veiculo){
//     console.log(`${chave}: ${veiculo[chave]}`);
// }

//atividade 7

// let jogo ={
//     nome: 'Terraria',
//     genero: 'Aventura',
//     plataforma: 'PC',
// };
// console.log(Object.keys(jogo));
// console.log(Object.values(jogo));
// console.log(Object.entries(jogo));

//atividade 8

// let cadastro ={
//     nome: 'Aura67',
//     email: 'aura67@gmail.com',
//     telefone: '6767-6767',
// }
// console.log(Object.hasOwn(cadastro, 'email'));//True