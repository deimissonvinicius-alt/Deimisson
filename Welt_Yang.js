// //CONCAT
// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]

// let arraysUnidos = array1.concat(array2);
// console.log(arraysUnidos);//[1, 2, 3, 4, 5, 6]

// let arraysUnidos2 = array2.concat(array1);
// console.log(arraysUnidos2);//[4, 5, 6, 1, 2, 3]

// //JOIN
// console.log(arraysUnidos.join());//1,2,3,4,5,6
// console.log(arraysUnidos.join(' | '));//1 | 2 | 3 | 4 | 5 | 6 
// console.log(arraysUnidos.join(', '));//1, 2m 3, 4, 5, 6
// console.log(arraysUnidos.join(''));//123456
// console.log(arraysUnidos.join(` é antecessor de  \n e `));

// ===== Welt Yang - Herrscher of Reason =====
// Arquivo de dados e funcionalidades para o site sobre Welt Yang

// Dados do Personagem
const weltYang = {
    nome: "Welt Yang",
    nomeAlternativo: "Welt Joyce",
    titulo: "Herrscher of Reason",
    raridade: "S-Rank",
    elemento: "Física",
    tipo: "Ataque",
    organização: "Anti-Entropy",
    
    descricao: "Welt Yang é o Herrscher of Reason, um ser lendário com poder imenso. Ele é estratégico, inteligente e possuiu um profundo senso de responsabilidade pela humanidade.",
    
    stats: {
        hp: 95,
        ataque: 98,
        defesa: 85,
        velocidade: 80,
        critico: 75,
        resistencia: 90
    },
    
    frases: [
        "A Razão é a ferramenta mais poderosa que temos.",
        "Vou proteger este mundo com toda minha força.",
        "Isso é apenas o começo de nossa jornada.",
        "O poder sem propósito é destruição pura."
    ]
};

// Dados sobre o Lore
const loreDados = {
    background: "Em uma realidade alternativa, Welt Joyce se tornou o Herrscher of Reason após eventos cataclísmicos.",
    transformacao: "Quando sua realidade chegou ao fim, Welt foi transportado para o universo principal.",
    missao: "Aqui, encontrou Kiana e suas amigas, unindo-se na luta contra a Honkai.",
    filosofia: "Diferente de outros Herrschers, Welt mantém sua razão e humanidade intactas.",
    futuro: "Continua sua jornada buscando coexistência pacífica enquanto se prepara para ameaças desconhecidas."
};

// Curiosidades
const curiosidades = [
    {
        titulo: "Gameplay Único",
        descricao: "Excelente em controle de multidões graças suas habilidades gravitacionais"
    },
    {
        titulo: "Design Mecanizado",
        descricao: "Seu traje reflete a natureza mecânica de seus poderes com padrões geométricos"
    },
    {
        titulo: "Arma Lendária",
        descricao: "O Sceptro dos Reis canaliza diretamente seu poder de Herrscher"
    },
    {
        titulo: "Tema Musical Épico",
        descricao: "Sua música encapsula a essência da Razão e do poder cósmico"
    }
];

// Funções de Interatividade

function renderizarDadosWeltYang() {
    const container = document.getElementById("personagemConteudo");

    if (!container) return;

    const statsHtml = Object.entries(weltYang.stats)
        .map(([stat, valor]) => `<li><strong>${stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> ${valor}</li>`)
        .join("");

    const frase = weltYang.frases[Math.floor(Math.random() * weltYang.frases.length)];

    container.innerHTML = `
        <div class="personagem-card">
            <h3>${weltYang.nome}</h3>
            <p><strong>Título:</strong> ${weltYang.titulo}</p>
            <p><strong>Raridade:</strong> ${weltYang.raridade}</p>
            <p><strong>Elemento:</strong> ${weltYang.elemento}</p>
            <p><strong>Descrição:</strong> ${weltYang.descricao}</p>

            <h4>Stats</h4>
            <ul>${statsHtml}</ul>

            <h4>Frase de Welt</h4>
            <blockquote>${frase}</blockquote>
        </div>
    `;
}

function renderizarCalculosWeltYang() {
    const container = document.getElementById("calculosConteudo");

    if (!container) return;

    const poderTotal = calcularPoderTotal();
    const forcaCombate = calcularForcaCombate();

    container.innerHTML = `
        <div class="personagem-card">
            <h3>Resumo de Cálculos</h3>
            <p><strong>Poder Total:</strong> ${poderTotal}</p>
            <p><strong>Força de Combate:</strong> ${forcaCombate}</p>
            <p><strong>Quantidade de Stats:</strong> ${Object.keys(weltYang.stats).length}</p>
        </div>
    `;
}

// Função para exibir informações do personagem no console
function exibirInfoWeltYang() {
    console.log("=== WELT YANG - HERRSCHER OF REASON ===");
    console.log(`Nome: ${weltYang.nome}`);
    console.log(`Título: ${weltYang.titulo}`);
    console.log(`Raridade: ${weltYang.raridade}`);
    console.log(`Elemento: ${weltYang.elemento}`);
    console.log(`Tipo: ${weltYang.tipo}`);
    console.log("\n--- Stats ---");
    Object.entries(weltYang.stats).forEach(([stat, valor]) => {
        console.log(`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${valor}`);
    });
}

// Função para listar todas as habilidades
function listarHabilidades() {
    console.log("=== HABILIDADES DE WELT YANG ===");
    weltYang.habilidades.forEach((hab, index) => {
        console.log(`\n${index + 1}. ${hab.icone} ${hab.nome}`);
        console.log(`   Descrição: ${hab.descricao}`);
        console.log(`   Poder: ${hab.poder}/100`);
    });
}

// Função para obter uma frase aleatória
function obterFraseAleatoria() {
    const frase = weltYang.frases[Math.floor(Math.random() * weltYang.frases.length)];
    console.log(`💭 ${frase}`);
    return frase;
}

// Função para calcular poder total
function calcularPoderTotal() {
    const stats = Object.values(weltYang.stats);
    const media = stats.reduce((a, b) => a + b, 0) / stats.length;
    return Math.round(media);
}

// Função para comparar stats
function compararStats(novoStat) {
    console.log("=== Comparação de Stats ===");
    const poderAtual = calcularPoderTotal();
    console.log(`Poder Atual: ${poderAtual}`);
    console.log(`Novo Poder: ${novoStat}`);
    const diferenca = novoStat - poderAtual;
    console.log(`Diferença: ${diferenca > 0 ? '+' : ''}${diferenca}`);
    return diferenca;
}

// Função para filtrar habilidades por poder mínimo
function filtrarHabilidadesPorPoder(poderMinimo) {
    return weltYang.habilidades.filter(hab => hab.poder >= poderMinimo);
}

// Função para adicionar uma nova habilidade
function adicionarHabilidade(nome, descricao, icone, poder) {
    const novaHabilidade = { nome, descricao, icone, poder };
    weltYang.habilidades.push(novaHabilidade);
    console.log(`✅ Habilidade "${nome}" adicionada com sucesso!`);
    return weltYang.habilidades;
}

// Função para calcular força de combate
function calcularForcaCombate() {
    const ataque = weltYang.stats.ataque;
    const defesa = weltYang.stats.defesa;
    const hp = weltYang.stats.hp;
    const velocidade = weltYang.stats.velocidade;
    
    const forcaCombate = (ataque * 2 + hp * 0.5 + defesa * 0.8 + velocidade * 0.6) / 4;
    return Math.round(forcaCombate);
}

// Função para exibir resumo completo
function exibirResumoBatalha() {
    console.log("╔═══════════════════════════════════════╗");
    console.log("║  ANÁLISE DE COMBATE - WELT YANG      ║");
    console.log("╚═══════════════════════════════════════╝");
    console.log(`\nNome: ${weltYang.nome}`);
    console.log(`Título: ${weltYang.titulo}`);
    console.log(`\n--- Estatísticas ---`);
    console.log(`HP: ${weltYang.stats.hp}/100`);
    console.log(`Ataque: ${weltYang.stats.ataque}/100`);
    console.log(`Defesa: ${weltYang.stats.defesa}/100`);
    console.log(`Velocidade: ${weltYang.stats.velocidade}/100`);
    console.log(`\n--- Análise ---`);
    console.log(`Poder Médio: ${calcularPoderTotal()}/100`);
    console.log(`Força de Combate: ${calcularForcaCombate()}/100`);
    console.log(`Total de Habilidades: ${weltYang.habilidades.length}`);
    console.log(`\nClassificação: S-RANK ⭐⭐⭐⭐⭐`);
}

// Função para criar um array com todas as informações
function obterTodasAsInformacoes() {
    return {
        personagem: weltYang,
        lore: loreDados,
        curiosidades: curiosidades,
        poderTotal: calcularPoderTotal(),
        forcaCombate: calcularForcaCombate()
    };
}

// Inicializar - Executar ao carregar
console.log("🌟 Bem-vindo ao site de Welt Yang!");
console.log("Use as funções disponíveis para explorar mais sobre o Herrscher of Reason\n");

// Funções úteis para o usuário:
console.log("Funções disponíveis:");
console.log("- exibirInfoWeltYang()");
console.log("- listarHabilidades()");
console.log("- obterFraseAleatoria()");
console.log("- calcularPoderTotal()");
console.log("- calcularForcaCombate()");
console.log("- exibirResumoBatalha()");
console.log("- obterTodasAsInformacoes()");
console.log("- filtrarHabilidadesPorPoder(poder)");
console.log("- adicionarHabilidade(nome, descricao, icone, poder)");

// Executar demonstração
renderizarDadosWeltYang();
renderizarCalculosWeltYang();
exibirResumoBatalha();
console.log("\n---\n");
listarHabilidades();