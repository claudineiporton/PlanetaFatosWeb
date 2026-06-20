// ==========================================================================
// PLANETA FATOS — APPLICATION LOGIC (SINGLE PAGE WEB APP)
// ==========================================================================

// --- DATABASE: MYSTERY DOSSIERS (HOME GRID) ---
const dossiers = [
    {
        id: "piri_reis",
        title: "O Mapa Impossível de Piri Reis",
        badge: "HISTÓRIA OCULTA",
        image: "images/piri_reis_intro.png",
        shortDesc: "Como um mapa desenhado em 1513 detalha a costa da Antártida livre de gelo, séculos antes de sua descoberta oficial?",
        readTime: "3 min de leitura",
        fullContent: `
            <p><strong>O Dossiê:</strong> Em 1929, durante a restauração do Palácio de Topkapi, em Istambul, teólogos descobriram um fragmento de pergaminho pintado em 1513 pelo almirante e cartógrafo otomano <strong>Piri Reis</strong>.</p>
            <p><strong>O Mistério:</strong> O mapa descreve a costa oeste da África, a costa leste da América do Sul e, de forma inacreditável, a costa norte da <strong>Antártida</strong>. O detalhe mais perturbador é que o mapa mostra a linha costeira da Antártida (Terra da Rainha Maud) sem nenhuma cobertura de gelo, revelando montanhas e vales que só foram mapeados por satélites no século XX.</p>
            <p><strong>A Polêmica:</strong> Piri Reis anotou em seu diário que não explorou as áreas pessoalmente, mas compilou o pergaminho usando mais de 20 mapas antigos de bibliotecas imperiais, incluindo mapas que datavam da época de Alexandre, o Grande. Como essas civilizações antigas sabiam a geografia da Antártida livre de gelo antes da glaciação?</p>
            <p><em>Código do Vídeo para Desbloqueio: <strong>250, 480</strong></em></p>
        `
    },
    {
        id: "heracleion",
        title: "Heracleion: A Atlântida do Egito",
        badge: "ARQUEOLOGIA",
        image: "images/heracleion_intro.png",
        shortDesc: "A majestosa cidade portuária egípcia que desapareceu sob as águas do Mediterrâneo há mais de 1200 anos.",
        readTime: "4 min de leitura",
        fullContent: `
            <p><strong>O Dossiê:</strong> Mencionada por historiadores clássicos como Heródoto, a antiga cidade de <strong>Heracleion</strong> (ou Thonis) era o portal de entrada comercial do Egito no Mediterrâneo antes da fundação de Alexandria.</p>
            <p><strong>O Mistério:</strong> Por volta do século VIII d.C., a cidade inteira sumiu sem deixar rastros, virando lenda. Somente no ano 2000, o arqueólogo subaquático Franck Goddio a redescobriu a 10 metros de profundidade na Baía de Aboukir, enterrada na areia com seus templos, estátuas colossais e moedas de ouro intactos.</p>
            <p><strong>A Explicação Científica:</strong> Estudos geológicos revelam que terremotos massivos seguidos por <em>liquefação do solo</em> fizeram com que a ilha de argila onde a cidade se apoiava colapsasse. A terra literalmente derreteu, fazendo com que monumentos de toneladas escorregassem de uma vez para o fundo do mar.</p>
            <p><em>Código do Vídeo para Desbloqueio: <strong>180, 520</strong></em></p>
        `
    },
    {
        id: "bermeja",
        title: "A Ilha Fantasma de Bermeja",
        badge: "CONSPIRAÇÃO",
        image: "images/bermeja_intro.png",
        shortDesc: "Uma ilha rica em petróleo no Golfo do México que constava em mapas há séculos e simplesmente sumiu do mapa.",
        readTime: "3 min de leitura",
        fullContent: `
            <p><strong>O Dossiê:</strong> Durante os séculos XVI a XIX, navegadores registraram e cartografaram a pequena ilha de <strong>Bermeja</strong>, a 100 quilômetros da Península de Yucatán, no Golfo do México.</p>
            <p><strong>O Mistério:</strong> Em 1997, quando o México e os Estados Unidos iniciaram as negociações para definir os limites territoriais dos valiosos poços de petróleo na área, a ilha simplesmente não foi encontrada. O governo mexicano enviou navios e aeronaves de busca militar, mas os radares apontaram apenas águas profundas vazias.</p>
            <p><strong>Teorias de Conspiração:</strong> A perda de Bermeja fez com que o México perdesse os direitos sobre o gigantesco reservatório de petróleo "Hoyos de Dona". A teoria mais forte aponta que a CIA teria bombardeado a ilha para fazê-la afundar, mudando a fronteira marítima a favor dos EUA de forma proposital.</p>
            <p><em>Código do Vídeo para Desbloqueio: <strong>210, 420</strong></em></p>
        `
    },
    {
        id: "flannan",
        title: "O Desaparecimento no Farol de Flannan",
        badge: "CASO NÃO SOLUCIONADO",
        image: "images/flannan_log.png",
        shortDesc: "Três guardas de um farol isolado na Escócia sumiram no ar, deixando pratos postos e um diário de bordo perturbador.",
        readTime: "4 min de leitura",
        fullContent: `
            <p><strong>O Dossiê:</strong> Em dezembro de 1900, o farol na ilha desabitada de Eilean Mòr, na Escócia, parou de emitir luz. Um navio de suprimentos foi enviado para verificar a situação dos três guardas estacionados.</p>
            <p><strong>O Mistério:</strong> Ao chegarem, a mesa da cozinha estava posta com restos de comida e uma cadeira estava derrubada. Mas os três homens haviam sumido. O diário de bordo do farol continha anotações bizarras sobre tempestades terríveis nos dias anteriores que faziam os experientes marinheiros chorarem de medo, porém, registros da costa confirmavam que o tempo estava perfeitamente limpo naqueles dias.</p>
            <p><strong>Investigação:</strong> A teoria oficial diz que uma onda gigante varreu os homens enquanto tentavam prender equipamentos no penhasco, mas a atmosfera sombria, os registros falsos no diário e a mesa intacta mantêm teorias de loucura coletiva ou sequestro ativas até hoje.</p>
            <p><em>Código do Vídeo para Desbloqueio: <strong>220, 520</strong></em></p>
        `
    },
    {
        id: "nazca",
        title: "O Enigma das Linhas de Nazca",
        badge: "ARQUEOLOGIA",
        image: "images/nazca_intro.png",
        shortDesc: "Desenhos geométricos gigantescos no deserto do Peru que só podem ser compreendidos do céu. Como e por que foram feitos?",
        readTime: "3 min de leitura",
        fullContent: `
            <p><strong>O Dossiê:</strong> Localizadas nos desertos áridos do Peru, as **Linhas de Nazca** são geoglifos maciços esculpidos na terra entre 500 a.C. e 500 d.C. Eles incluem formas geométricas e figuras de macacos, aranhas, condores e uma forma apelidada de "astronauta".</p>
            <p><strong>O Mistério:</strong> A escala das linhas é tão imensa que elas só podem ser reconhecidas voando em aeronaves. Como o povo Nazca conseguiu projetar essas figuras com precisão matemática sem nenhuma perspectiva aérea?</p>
            <p><strong>Teorias:</strong> Arqueólogos acreditam que as linhas serviam como canais rituais de água ou calendários astronômicos. No entanto, teóricos dos astronautas antigos sugerem que as linhas retas eram pistas de pouso criadas para orientar naves espaciais alienígenas.</p>
            <p><em>Código do Vídeo para Desbloqueio: <strong>180, 480</strong></em></p>
        `
    },
    {
        id: "ness",
        title: "O Enigma do Monstro do Lago Ness",
        badge: "CRIPTÍDEOS",
        image: "images/ness_intro.png",
        shortDesc: "A lenda de Nessie atrai milhares de exploradores à Escócia. Haveria uma criatura pré-histórica vivendo no lago?",
        readTime: "3 min de leitura",
        fullContent: `
            <p><strong>O Dossiê:</strong> Desde o século VI d.C., relatos de um "monstro aquático" nas profundezas geladas do Lago Ness assombram a Escócia. A lenda explodiu em 1934 com a famosa foto do cirurgião mostrando uma silhueta de pescoço longo saindo da água.</p>
            <p><strong>A Ciência:</strong> Embora a foto clássica tenha sido revelada como uma fraude de brinquedo de submarino modificado, os avistamentos continuam. O Lago Ness é incrivelmente profundo (230 metros) e possui canais subaquáticos de difícil acesso.</p>
            <p><strong>Expedições:</strong> Sonares avançados detectaram sombras maciças se movendo nas profundezas, e testes recentes de DNA ambiental na água descartaram répteis marinhos gigantes (como plesiossauros), mas apontaram uma quantidade anormalmente alta de DNA de enguias gigantes.</p>
            <p><em>Código do Vídeo para Desbloqueio: <strong>290, 600</strong></em></p>
        `
    }
];

// --- DATABASE: SECRET CODES (DECIFRADOR TERMINAL) ---
const decryptDatabase = {
    flannan: {
        code: "220, 520",
        title: "ARQUIVO FLANNAN_MÒR // CONFIDENCIAL",
        date: "19/12/1900",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Dossiê Secreto da Junta de Faróis do Norte (Escócia):</strong></p>
            <p>Investigações internas revelaram que o diário de bordo do farol continha uma caligrafia que não pertencia a nenhum dos três guardas registrados (Thomas Marshall, James Ducat e Donald MacArthur). A última entrada, descrevendo o fim da tempestade em 15 de dezembro, foi escrita de forma apressada e trêmula.</p>
            <p>Mais assustador ainda: a bota de óleo de MacArthur foi encontrada dentro do farol, o que significa que ele saiu para a suposta tempestade descalço ou de meias — algo impensável para um experiente faroleiro na Escócia. Relatórios de pescadores locais afirmam ter visto luzes estranhas pairando sobre as falésias de Eilean Mòr na noite do desaparecimento.</p>
        `
    },
    nazca: {
        code: "180, 480",
        title: "ARQUIVO NAZCA_GEOGLYPHS // SECRETO",
        date: "04/09/1947",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Notas de Campo da Arqueóloga Maria Reiche:</strong></p>
            <p>Descobrimos que a poeira e as pedras sob a camada superficial do deserto contêm anomalias eletromagnéticas. Quando bússolas são colocadas diretamente sobre as linhas da aranha e do astronauta, a agulha oscila entre 3 a 5 graus de desvio magnético.</p>
            <p>Exames de solo por espectroscopia revelaram níveis anormais de quartzo cristalino magnetizado abaixo das linhas retas de maior extensão. Algumas dessas linhas apontam perfeitamente para portais na cordilheira dos Andes onde moradores locais relatam avistamentos frequentes de objetos voadores luminosos.</p>
        `
    },
    ness: {
        code: "290, 600",
        title: "ARQUIVO LOCH_NESS_SONAR // SECRETO",
        date: "25/08/2003",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Relatório Técnico Confidencial da Operação Deepscan:</strong></p>
            <p>O sonar de varredura lateral detectou um contato biológico móvel de tamanho estimado entre 12 a 15 metros a 190 metros de profundidade, movendo-se a 8 nós. O sinal acústico não bate com nenhuma espécie catalogada de peixe, mamífero marinho ou enguia conhecida.</p>
            <p>O objeto entrou em uma das fendas profundas das cavernas basálticas subaquáticas no fundo do lago, onde o sonar perdeu o rastreamento. Análises físico-químicas da água próxima a essas cavernas indicam presença de calor térmico inexplicável, sugerindo uma fonte geotérmica ou respiradouro ativo no subsolo do lago.</p>
        `
    },
    hope_diamond: {
        code: "180, 500",
        title: "ARQUIVO HOPE_GEM_CURSE // SECRETO",
        date: "12/03/1911",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Memorando Interno do Museu Smithsonian (EUA):</strong></p>
            <p>Documentos recuperados de antigos cartórios franceses confirmam que o negociante Jean-Baptiste Tavernier não comprou a joia, mas a roubou do olho de uma estátua da deusa Sita na Índia. Os sacerdotes do templo lançaram um feitiço de agonia lenta.</p>
            <p>Testes espectrográficos modernos revelam que a coloração azul escura do diamante e o brilho vermelho persistente sob UV ocorrem devido à presença de boro e átomos de impureza dispostos de forma molecular geométrica anormal. Curadores relatam episódios frequentes de vertigem e pesadelos intensos ao manusearem a joia sem luvas protetoras de chumbo.</p>
        `
    },
    aokigahara: {
        code: "250, 420",
        title: "ARQUIVO AOKIGAHARA_SEISMIC // CONFIDENCIAL",
        date: "05/11/1998",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Relatório Geofísico da Província de Yamanashi (Japão):</strong></p>
            <p>As rochas basálticas da floresta de Aokigahara contêm depósitos de magnetita natural altamente concentrados devido à erupção do Monte Fuji em 864 d.C. Isso cria anomalias magnéticas locais severas que anulam a recepção de sinais de rádio VHF e desviam agulhas de bússolas analógicas em até 15 graus.</p>
            <p>Além disso, a estrutura de cavernas de gelo subterrâneas atua como caixas de ressonância natural, absorvendo as ondas sonoras e silenciando a floresta de forma opressora. Microfones de alta sensibilidade registraram frequências de infra-som (abaixo de 20 Hz) constantes na floresta, conhecidas por causar sensação de pavor e alucinações em seres humanos.</p>
        `
    },
    paris_catacombs: {
        code: "120, 620",
        title: "ARQUIVO PARIS_CATACOMBS_LOST // SECRETO",
        date: "22/10/1993",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Relatório da Polícia Subterrânea de Paris (IGC):</strong></p>
            <p>Recuperamos uma câmera de vídeo abandonada em um túnel não catalogado 50 metros abaixo da área de visitação pública. A fita continha registros de um homem correndo em pânico absoluto até deixar cair a câmera e desaparecer na escuridão. Nenhuma pegada ou sinal de outra pessoa foi encontrado na poeira do túnel.</p>
            <p>Em certas seções fechadas, o empilhamento de ossos emite níveis baixos de gás radônio radioativo acumulado nas rochas calcárias. A inalação prolongada desse gás em locais sem ventilação pode causar desorientação extrema, asfixia e alucinações vívidas de sussurros.</p>
        `
    },
    bermeja: {
        code: "210, 420",
        title: "ARQUIVO BERMEJA_HYDROGRAPHIC // SECRETO",
        date: "14/06/1997",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Relatório da Marinha Mexicana (Secretaria de Marina):</strong></p>
            <p>Os levantamentos de sonar de varredura tridimensional na localização exata da Ilha de Bermeja (22° 33' N, 91° 22' O) revelaram uma montanha submarina com o topo plano a 45 metros abaixo do nível do mar.</p>
            <p>Curiosamente, foram encontradas fraturas tectônicas verticais limpas ao redor do monte submarino, inconsistentes com desgaste geológico natural de milênios. Registros confidenciais da guarda costeira americana indicam testes subaquáticos com cargas de profundidade sônicas de alta potência na área semanas antes do desaparecimento oficial da ilha dos radares comerciais.</p>
        `
    },
    heracleion: {
        code: "180, 520",
        title: "ARQUIVO THONIS_HERACLEION // SECRETO",
        date: "15/09/2004",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Relatório de Escavação Arqueológica Subaquática:</strong></p>
            <p>Abaixo do piso do templo principal de Amon, mergulhadores encontraram uma câmara de pedra selada contendo placas de bronze com inscrições gregas e egípcias. O texto descreve rituais de purificação e avisa sobre uma "ira de fogo e água" vinda do céu que destruiria o porto.</p>
            <p>Análises de sedimentos marinhos na baía mostraram que a liquefação que destruiu a cidade foi engatilhada por ondas sísmicas massivas vindas da falha de Creta. A velocidade de afundamento foi tão rápida que a maioria dos moradores não teve tempo de resgatar seus pertences, deixando tesouros intocados nas prateleiras das antigas casas.</p>
        `
    },
    piri_reis: {
        code: "250, 480",
        title: "ARQUIVO PIRI_REIS_SOURCES // CONFIDENCIAL",
        date: "18/06/1956",
        content: `
            <p><strong>[DOCUMENTO OFICIAL DESCRIPTOGRAFADO]</strong></p>
            <p><strong>Relatório Confidencial da Agência de Mapeamento Hidrográfico da Marinha dos EUA:</strong></p>
            <p>A análise matemática das distorções do mapa de Piri Reis indica que ele foi projetado usando uma projeção equidistante cujo centro magnético fica exatamente sobre o **Cairo, Egito**. Isso indica que os mapas de origem compilados por Reis foram criados a partir de observações feitas no topo da Grande Pirâmide de Gizé.</p>
            <p>Ademais, a costa da Antártida mapeada coincide perfeitamente com os dados sísmicos do relevo rochoso oculto sob a calota de gelo coletados pela expedição sueca-britânica em 1949. O gelo cobre essa rocha há pelo menos 12.000 anos, indicando que as fontes cartográficas originais foram feitas antes da última Era Glacial.</p>
        `
    }
};

// --- DATABASE: QUIZZES CONTENT ---
const quizzes = {
    cobras: {
        title: "SOBREVIVÊNCIA NA ILHA DAS COBRAS",
        questions: [
            {
                q: "Você desembarcou ilegalmente na Ilha da Queimada Grande à noite. Qual é o lugar mais seguro para montar acampamento temporário?",
                options: [
                    { text: "Na floresta densa sob as árvores.", correct: false },
                    { text: "Nas rochas abertas da costa batidas pelo vento.", correct: true },
                    { text: "Nas ruínas do farol antigo.", correct: false },
                    { text: "Perto do riacho de água doce.", correct: false }
                ],
                feedback: "As cobras da ilha (Jararaca-ilhoa) são arbóreas e caçam aves nas copas das árvores. Ficar na rocha exposta ao vento diminui o risco de ataques surpresa de cima."
            },
            {
                q: "Você foi picado no braço por uma Jararaca-ilhoa. O veneno é altamente hemorrágico (destrói tecidos). O que você deve fazer imediatamente?",
                options: [
                    { text: "Fazer um torniquete apertado no braço para conter o veneno.", correct: false },
                    { text: "Chupar o veneno com a boca e cuspir.", correct: false },
                    { text: "Lavar com água e sabão e manter o braço imobilizado abaixo do coração.", correct: true },
                    { text: "Fazer um corte em cruz na picada para o veneno escorrer.", correct: false }
                ],
                feedback: "Torniquetes e cortes aumentam a necrose e a chance de amputação. Chupar o veneno é mito e perigoso. O correto é deitar, acalmar-se para o sangue circular devagar, lavar a picada e buscar socorro médico rápido."
            },
            {
                q: "Por que o veneno da Jararaca-ilhoa evoluiu para ser até 5 vezes mais potente que as jararacas do continente?",
                options: [
                    { text: "Para se defender de predadores maiores como jaguares.", correct: false },
                    { text: "Devido à radiação solar intensa na ilha.", correct: false },
                    { text: "Para matar aves migratórias instantaneamente antes que elas voem para longe.", correct: true },
                    { text: "Porque elas se alimentam de peixes venenosos.", correct: false }
                ],
                feedback: "Sem mamíferos na ilha, as cobras passaram a se alimentar de aves. Se a picada demorar para fazer efeito, a ave voa e morre no mar. O veneno ultra-rápido paralisa e mata a presa quase na hora."
            },
            {
                q: "O farol da ilha foi automatizado pela Marinha em 1920. O que aconteceu com o último faroleiro da ilha?",
                options: [
                    { text: "Ele se aposentou e foi morar em Santos.", correct: false },
                    { text: "Ele e toda a sua família morreram após cobras invadirem a casa do farol.", correct: true },
                    { text: "Ele fugiu da ilha nadando até o continente.", correct: false },
                    { text: "Ele foi resgatado após ser mantido refém por piratas.", correct: false }
                ],
                feedback: "A lenda local (confirmada por registros) conta que cobras entraram pelas janelas do farol à noite. A família tentou correr para o barco na praia, mas foi picada e morta ao longo da trilha."
            },
            {
                q: "A Marinha brasileira proíbe visitas sem autorização na ilha. Quem são as únicas pessoas autorizadas a pisar lá hoje?",
                options: [
                    { text: "Turistas que pagam uma taxa de preservação de luxo.", correct: false },
                    { text: "Apenas pescadores locais de Ilha Comprida.", correct: false },
                    { text: "Pesquisadores credenciados e equipes de manutenção do farol da Marinha.", correct: true },
                    { text: "Qualquer pessoa que assine um termo de responsabilidade de morte.", correct: false }
                ],
                feedback: "Apenas biólogos autorizados (como os do Instituto Butantan) para estudar as cobras e militares da Marinha para manter o farol automatizado podem desembarcar legalmente."
            }
        ]
    },
    dyatlov: {
        title: "SOBREVIVÊNCIA NA PASSAGEM DYATLOV",
        questions: [
            {
                q: "Sua tenda foi rasgada de dentro para fora no meio da noite gelada (-30°C). O que você deve priorizar?",
                options: [
                    { text: "Procurar as botas e casacos pesados na escuridão da tenda.", correct: true },
                    { text: "Correr imediatamente para a floresta mesmo descalço.", correct: false },
                    { text: "Ficar dentro da tenda rasgada esperando o amanhecer.", correct: false },
                    { text: "Gritar por socorro na encosta da montanha.", correct: false }
                ],
                feedback: "A hipotermia em -30°C mata em poucos minutos sem roupas. O grupo de Dyatlov fugiu descalço e de meias para a floresta a 1,5 km, o que foi fatal para a maioria deles."
            },
            {
                q: "Você e seu grupo desceram a encosta até o limite da floresta. O vento é cortante. Qual é a melhor ação para se proteger?",
                options: [
                    { text: "Subir em uma árvore alta para fugir do vento.", correct: false },
                    { text: "Fazer uma fogueira aberta sob o vento e ficar ao redor dela.", correct: false },
                    { text: "Cavar um abrigo na neve profunda e cobri-lo com galhos de pinheiro.", correct: true },
                    { text: "Ficar caminhando em círculos para manter o corpo aquecido.", correct: false }
                ],
                feedback: "Um abrigo de neve (toca) isola o frio externo e protege do vento. Quatro dos sobreviventes criaram uma toca de neve na floresta e duraram mais tempo que os outros que ficaram expostos ao redor da fogueira."
            },
            {
                q: "Algumas vítimas apresentaram fraturas internas massivas no tórax e crânio, mas sem marcas externas de agressão física. O que causaria isso?",
                options: [
                    { text: "Ataque violento de tribos locais (Mansis).", correct: false },
                    { text: "Queda de uma árvore ou avalanche de neve compacta pesada.", correct: true },
                    { text: "Ataque de um urso siberiano.", correct: false },
                    { text: "Queda livre de um penhasco alto.", correct: false }
                ],
                feedback: "A pressão de uma placa de neve compacta (avalanche lenta) ou detritos pesados pode quebrar ossos sem cortar a pele. Essa é a teoria científica mais aceita hoje para explicar as fraturas."
            },
            {
                q: "Duas vítimas foram encontradas apenas de roupas íntimas ao redor de uma fogueira apagada. Por que elas se despiram no frio extremo?",
                options: [
                    { text: "Elas foram forçadas por agressores.", correct: false },
                    { text: "Suas roupas molharam e congelaram no corpo.", correct: false },
                    { text: "Hipotermia extrema causa a ilusão de calor insuportável (desnudamento paradoxal).", correct: true },
                    { text: "Era um ritual religioso do grupo.", correct: false }
                ],
                feedback: "Nos estágios finais da hipotermia, o cérebro falha e a pessoa sente uma sensação extrema de calor ardente, fazendo-a tirar as roupas momentos antes de congelar até a morte."
            },
            {
                q: "Quais eram os níveis de radiação encontrados nas roupas das vítimas e o que isso sugere?",
                options: [
                    { text: "Altos níveis de radiação, sugerindo testes militares secretos na área.", correct: true },
                    { text: "Zero radiação, descartando qualquer teoria militar.", correct: false },
                    { text: "Níveis normais de radiação de urânio natural do solo.", correct: false },
                    { text: "Radiação cósmica comum de altitude.", correct: false }
                ],
                feedback: "Algumas roupas tinham níveis elevados de radiação beta. A área ficava perto de instalações secretas de produção de plutônio soviéticas, alimentando a teoria de testes de armas ou detritos de foguetes."
            }
        ]
    }
};

// --- NAVIGATION LOGIC (SPA ROUTER) ---
document.addEventListener("DOMContentLoaded", () => {
    // Navigation items
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const sections = document.querySelectorAll(".content-section");
    const navToggle = document.getElementById("nav-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    // Toggle Mobile Nav Menu
    if (navToggle && mobileNav) {
        navToggle.addEventListener("click", () => {
            mobileNav.classList.toggle("open");
            const icon = navToggle.querySelector("i");
            if (mobileNav.classList.contains("open")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });
    }

    // Router navigation handler
    const handleNavigation = (targetId) => {
        // Hide mobile menu
        if (mobileNav) {
            mobileNav.classList.remove("open");
            if (navToggle) navToggle.querySelector("i").className = "fa-solid fa-bars";
        }

        // Hide all sections, show active
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.add("active");
            } else {
                sec.classList.remove("active");
            }
        });

        // Update active class on nav links
        const updateLinks = (links, activeAttr) => {
            links.forEach(link => {
                const linkTarget = link.getAttribute("data-target");
                if (linkTarget === targetId) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        };

        updateLinks(navLinks, targetId);
        updateLinks(mobileLinks, targetId);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Attach click events to nav links
    const attachNavEvents = (links) => {
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = link.getAttribute("data-target");
                handleNavigation(target);
                // Update url hash quietly
                const hash = link.getAttribute("href");
                history.pushState(null, null, hash);
            });
        });
    };

    attachNavEvents(navLinks);
    attachNavEvents(mobileLinks);

    // Initial load check hash
    const initialHash = window.location.hash;
    if (initialHash) {
        const matchingLink = document.querySelector(`.nav-link[href="${initialHash}"]`);
        if (matchingLink) {
            handleNavigation(matchingLink.getAttribute("data-target"));
        }
    }

    // Expose routing function globally
    window.navigateToSection = handleNavigation;

    // --- RENDER DOSSIERS ON HOME ---
    renderDossiers();

    // --- INITIALIZE PORTALS & ENGINES ---
    initDecifrador();
    initForum();
    initArea51();
    initVisitorCounter();
});

// --- RENDER DOSSIER CARDS (HOME SECTION) ---
function renderDossiers() {
    const grid = document.getElementById("dossier-grid");
    if (!grid) return;

    grid.innerHTML = dossiers.map(item => `
        <div class="dossier-card">
            <div class="dossier-img" style="background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('${item.image}');">
                <span class="dossier-badge">${item.badge}</span>
            </div>
            <div class="dossier-body">
                <h3>${item.title}</h3>
                <p>${item.shortDesc}</p>
                <div class="dossier-footer">
                    <span class="read-time"><i class="fa-regular fa-clock"></i> ${item.readTime}</span>
                    <button class="btn btn-secondary btn-sm" onclick="openDossierModal('${item.id}')">Ler Dossiê</button>
                </div>
            </div>
        </div>
    `).join("");
}

// --- DOSSIER MODAL HANDLERS ---
const modal = document.getElementById("dossier-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

if (modalClose && modal) {
    modalClose.addEventListener("click", () => {
        modal.classList.remove("open");
    });
    
    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
        }
    });
}

function openDossierModal(dossierId) {
    const item = dossiers.find(d => d.id === dossierId);
    if (!item || !modal) return;

    modalTitle.textContent = item.title;
    modalBody.innerHTML = `
        <div class="modal-badge-container" style="margin-bottom: 15px;">
            <span class="dossier-badge" style="position:relative; top:0; left:0;">${item.badge}</span>
        </div>
        ${item.fullContent}
    `;
    modal.classList.add("open");
}

// --- TERMINAL DE DECIFRAÇÃO (DECIFRADOR PORTAL) ---
function initDecifrador() {
    const caseSelect = document.getElementById("case-select");
    const codePrompt = document.getElementById("code-prompt");
    const inputGroup = document.getElementById("input-group");
    const terminalInput = document.getElementById("terminal-code");
    const btnDecrypt = document.getElementById("btn-decrypt");
    const terminalOutput = document.getElementById("terminal-output");
    const secretDossier = document.getElementById("secret-dossier");
    const dossierTitle = document.getElementById("dossier-title");
    const dossierDate = document.getElementById("dossier-date");
    const dossierContent = document.getElementById("dossier-content");

    if (!caseSelect) return;

    // Show input fields when case is selected
    caseSelect.addEventListener("change", () => {
        codePrompt.style.display = "block";
        inputGroup.style.display = "flex";
        terminalInput.value = "";
        terminalInput.focus();
        terminalOutput.className = "terminal-output";
        terminalOutput.textContent = `> CASO SELECIONADO: ${caseSelect.value.toUpperCase()}\n> PRONTO PARA INSERÇÃO DO CÓDIGO DA CHAVE SECRETA...`;
        secretDossier.style.display = "none";
    });

    const runDecryption = () => {
        const caseKey = caseSelect.value;
        const codeValue = terminalInput.value.trim();

        if (!caseKey) {
            printTerminal("> ERRO: SELECIONE UM CASO PRIMEIRO.", "error");
            return;
        }

        if (!codeValue) {
            printTerminal("> ERRO: INSERÇÃO REQUERIDA. DIGITE O CÓDIGO.", "error");
            return;
        }

        printTerminal("> CONECTANDO AO BANCO DE DADOS CONFIDENCIAL...\n> VALIDANDO CHAVE CRIPTOGRÁFICA...");
        btnDecrypt.disabled = true;

        setTimeout(() => {
            const caseData = decryptDatabase[caseKey];
            if (caseData && caseData.code === codeValue) {
                printTerminal("> CÓDIGO DE CHAVE VÁLIDO!\n> INICIANDO DESCRIPTOGRAFIA DO DOSSIÊ DA INVESTIGAÇÃO...\n> ACESSO CONCEDIDO.", "success");
                
                setTimeout(() => {
                    // Populate and show secret dossier
                    dossierTitle.textContent = caseData.title;
                    dossierDate.textContent = caseData.date;
                    dossierContent.innerHTML = caseData.content;
                    secretDossier.style.display = "block";
                    btnDecrypt.disabled = false;
                    
                    // Scroll to decrypted dossier
                    secretDossier.scrollIntoView({ behavior: "smooth" });
                }, 1000);
            } else {
                printTerminal("> ERRO: CÓDIGO DE CHAVE INVÁLIDO.\n> ACESSO NEGADO. TENTE NOVAMENTE.", "error");
                btnDecrypt.disabled = false;
                secretDossier.style.display = "none";
            }
        }, 1200);
    };

    btnDecrypt.addEventListener("click", runDecryption);
    terminalInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") runDecryption();
    });

    function printTerminal(text, statusClass = "") {
        terminalOutput.className = "terminal-output " + statusClass;
        terminalOutput.textContent = text;
    }
}

// --- PORTAL DE SEGURANÇA DA ÁREA 51 ---
function initArea51() {
    const passcode = document.getElementById("area51-passcode");
    const btnUnlock = document.getElementById("btn-unlock-area51");
    const output = document.getElementById("area51-output");
    const lockScreen = document.getElementById("area51-lock-screen");
    const unlockedScreen = document.getElementById("area51-unlocked");

    if (!btnUnlock) return;

    const unlock = () => {
        const value = passcode.value.trim().toUpperCase();

        if (!value) {
            output.textContent = "> ERRO: INSERÇÃO REQUERIDA. DIGITE A CHAVE.";
            return;
        }

        output.textContent = "> CONECTANDO AO SERVIDOR SEGURO...\n> VERIFICANDO CHAVE DE CRIPTOGRAFIA...";
        btnUnlock.disabled = true;

        setTimeout(() => {
            if (value === "SEGRETO51") {
                output.textContent = "> CHAVE VÁLIDA. ACESSO CONCEDIDO.";
                setTimeout(() => {
                    lockScreen.style.display = "none";
                    unlockedScreen.style.display = "block";
                }, 800);
            } else {
                output.textContent = "> ERRO: CHAVE INVÁLIDA. ACESSO NEGADO.";
                btnUnlock.disabled = false;
            }
        }, 1200);
    };

    btnUnlock.addEventListener("click", unlock);
    passcode.addEventListener("keypress", (e) => {
        if (e.key === "Enter") unlock();
    });
}

// --- CONTADOR DE VISITAS ELEGANTE ---
async function initVisitorCounter() {
    const counterElement = document.getElementById("visitor-count");
    if (!counterElement) return;

    // Timeout de 3 segundos para a API não travar a exibição
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
        const response = await fetch("https://api.counterapi.dev/v1/planetafatos/website/up", {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        const data = await response.json();
        if (data && data.value) {
            const formatted = Number(data.value).toLocaleString("pt-BR");
            counterElement.textContent = `${formatted} investigadores já acessaram o portal`;
        } else {
            throw new Error("Dados da API inválidos");
        }
    } catch (error) {
        clearTimeout(timeoutId);
        console.error("Erro ao carregar o contador global:", error);
        
        // Fallback: Simulador de visitas com base fixa + local
        let localHits = localStorage.getItem("pf_local_visits") || "0";
        let count = parseInt(localHits);
        count += 1;
        localStorage.setItem("pf_local_visits", count.toString());
        
        // Base inicial de visitas fictícias para dar credibilidade
        const baseVisits = 142;
        const totalVisits = baseVisits + count;
        
        const formatted = Number(totalVisits).toLocaleString("pt-BR");
        counterElement.textContent = `${formatted} investigadores já acessaram o portal`;
    }
}

// --- QUIZ GAME ENGINE ---
let activeQuizKey = null;
let activeQuestionIndex = 0;
let quizScore = 0;

function startQuiz(quizKey) {
    const quizData = quizzes[quizKey];
    if (!quizData) return;

    activeQuizKey = quizKey;
    activeQuestionIndex = 0;
    quizScore = 0;

    // Toggle cards
    document.getElementById("quiz-selector").style.display = "none";
    document.getElementById("quiz-result").style.display = "none";
    
    const gameCard = document.getElementById("quiz-game");
    gameCard.style.display = "block";
    gameCard.scrollIntoView({ behavior: "smooth" });

    document.getElementById("quiz-title-active").textContent = quizData.title;
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const quizData = quizzes[activeQuizKey];
    const totalQuestions = quizData.questions.length;
    const currentQuestion = quizData.questions[activeQuestionIndex];

    // Update progress numbers
    document.getElementById("quiz-progress-num").textContent = `Questão ${activeQuestionIndex + 1}/${totalQuestions}`;
    
    // Update progress bar
    const progressPercent = ((activeQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;

    // Load question text
    document.getElementById("quiz-question").textContent = currentQuestion.q;

    // Render options
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = currentQuestion.options.map((opt, idx) => `
        <button class="quiz-option-btn" onclick="selectQuizOption(this, ${opt.correct}, '${escapeString(currentQuestion.feedback)}')">
            <span>${opt.text}</span>
            <i class="fa-regular fa-circle"></i>
        </button>
    `).join("");
}

function selectQuizOption(buttonElement, isCorrect, feedbackText) {
    const buttons = document.querySelectorAll(".quiz-option-btn");
    
    // Disable all options immediately to prevent double click
    buttons.forEach(btn => btn.style.pointerEvents = "none");

    // Add classes for styling feedback
    const icon = buttonElement.querySelector("i");
    if (isCorrect) {
        buttonElement.classList.add("correct");
        icon.className = "fa-solid fa-circle-check";
        quizScore++;
    } else {
        buttonElement.classList.add("wrong");
        icon.className = "fa-solid fa-circle-xmark";
        
        // Highlight correct option in green
        buttons.forEach(btn => {
            if (btn !== buttonElement && btn.getAttribute("onclick").includes("true")) {
                btn.classList.add("correct");
                btn.querySelector("i").className = "fa-solid fa-circle-check";
            }
        });
    }

    // Append feedback explanation below options
    const optionsContainer = document.getElementById("quiz-options");
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = "quiz-feedback-box";
    feedbackDiv.style.animation = "fadeIn 0.3s ease";
    feedbackDiv.innerHTML = `
        <p><strong>Explicação:</strong> ${feedbackText}</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 15px; width: 100%;" onclick="nextQuizStep()">Avançar <i class="fa-solid fa-arrow-right"></i></button>
    `;
    optionsContainer.appendChild(feedbackDiv);
}

function nextQuizStep() {
    const quizData = quizzes[activeQuizKey];
    activeQuestionIndex++;

    if (activeQuestionIndex < quizData.questions.length) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById("quiz-game").style.display = "none";
    
    const resultCard = document.getElementById("quiz-result");
    resultCard.style.display = "block";
    resultCard.scrollIntoView({ behavior: "smooth" });

    const scoreDisplay = document.getElementById("result-score");
    const totalDisplay = document.getElementById("result-total");
    const headlineDisplay = document.getElementById("result-headline");
    const descDisplay = document.getElementById("result-description");

    const totalQuestions = quizzes[activeQuizKey].questions.length;
    scoreDisplay.textContent = quizScore;
    totalDisplay.textContent = totalQuestions;

    // Customized feedback depending on performance
    if (quizScore === totalQuestions) {
        headlineDisplay.textContent = "SOBREVIVENTE LENDÁRIO!";
        descDisplay.textContent = "Excelente! Você tomou as decisões perfeitas sob pressão e tem instinto aguçado para sobreviver a qualquer adversidade nestes ambientes extremos.";
    } else if (quizScore >= 3) {
        headlineDisplay.textContent = "SOBREVIVENTE AVISADO";
        descDisplay.textContent = "Bom trabalho. Você cometeu alguns deslizes que poderiam custar um membro ou sua saúde, mas conseguiu sair com vida desses cenários.";
    } else {
        headlineDisplay.textContent = "VÍTIMA DO IMPRÓPRIO";
        descDisplay.textContent = "Você falhou. Suas decisões apressadas ou baseadas em mitos o levariam a congelar ou ser atacado fatalmente. Tente novamente e melhore seu instinto.";
    }
}

function restartQuiz() {
    startQuiz(activeQuizKey);
}

// Helpers
function escapeString(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Add feedback box styles dynamically to prevent inline bloat
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .quiz-feedback-box {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--border-color);
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--text-muted);
    }
    .quiz-feedback-box strong {
        color: var(--text-main);
    }
`;
document.head.appendChild(styleSheet);


// --- FORUM & LOCALSTORAGE THEORIES BOARD ---
const defaultTheories = [
    {
        nick: "Agente_X",
        category: "Conspirações",
        date: "20/06/2026",
        text: "Sobre Bermeja: o navio de exploração militar americano USS Pathfinder foi visto ancorado nas proximidades das coordenadas da ilha 3 dias antes do início do mapeamento oficial em 1997. Eles sabiam que a ilha estava lá e usaram explosivos termo-báricos de precisão subterrâneos para implodir o monte de areia e calcário."
    },
    {
        nick: "InvestigadoraSiberia",
        category: "Casos Antigos",
        date: "19/06/2026",
        text: "O diário de bordo falso do Farol de Flannan pode ter sido escrito pelos próprios guardas após inalarem esporos de fungos alucinógenos acumulados no porão úmido. Isso explicaria as tempestades fantasmas descritas no diário e a paranóia coletiva que os fez pular no mar acreditando estarem fugindo de demônios."
    },
    {
        nick: "UfoBrasil",
        category: "Alienígenas",
        date: "18/06/2026",
        text: "As Linhas de Nazca contêm ligações diretas com o cinturão de Órion. Se você sobrepor o mapa das estrelas em 500 a.C. nas posições exatas dos geoglifos de Nazca, o condor aponta diretamente para a estrela Betelgeuse. O 'astronauta' é na verdade um monumento de boas-vindas para os visitantes daquela constelação."
    }
];

function initForum() {
    const theoryForm = document.getElementById("theory-form");
    const theoryList = document.getElementById("theory-list");
    const formNick = document.getElementById("form-nick");
    const formCategory = document.getElementById("form-category");
    const formText = document.getElementById("form-text");

    if (!theoryForm) return;

    // Load theories from localStorage or use defaults
    let savedTheories = JSON.parse(localStorage.getItem("planeta_fatos_theories"));
    if (!savedTheories || savedTheories.length === 0) {
        savedTheories = [...defaultTheories];
        localStorage.setItem("planeta_fatos_theories", JSON.stringify(savedTheories));
    }

    // Render theories list
    const renderTheories = () => {
        theoryList.innerHTML = savedTheories.map(t => {
            let catClass = "cases";
            if (t.category.includes("Alienígenas")) catClass = "aliens";
            if (t.category.includes("Conspirações")) catClass = "conspiracies";
            
            return `
                <div class="theory-card ${catClass}">
                    <div class="theory-meta">
                        <span class="investigator-name"><i class="fa-solid fa-user-secret"></i> ${t.nick}</span>
                        <div style="display:flex; gap: 10px; align-items:center;">
                            <span class="theory-category">${t.category}</span>
                            <span>${t.date}</span>
                        </div>
                    </div>
                    <div class="theory-text">
                        <p>${t.text}</p>
                    </div>
                </div>
            `;
        }).join("");
    };

    renderTheories();

    // Handle Form Submit
    theoryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nick = formNick.value.trim();
        const category = formCategory.value;
        const text = formText.value.trim();
        
        if (!nick || !text) return;

        // Create new theory object
        const today = new Date();
        const dateStr = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth()+1).toString().padStart(2, '0')}/${today.getFullYear()}`;
        
        const newTheory = { nick, category, date: dateStr, text };
        
        // Add to top of list and save
        savedTheories.unshift(newTheory);
        localStorage.setItem("planeta_fatos_theories", JSON.stringify(savedTheories));
        
        // Reset form & re-render
        formNick.value = "";
        formText.value = "";
        renderTheories();
        
        // Feedback alert
        alert("Teoria conspiratória enviada ao painel de investigações com sucesso!");
    });
}
