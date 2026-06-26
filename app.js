// ==========================================================================
// PLANETA FATOS / PLANET FACTS / MUNDO HECHOS
// APPLICATION LOGIC (MULTILINGUAL SINGLE PAGE WEB APP)
// ==========================================================================

// --- TRANSLATION DATABASE ---

const uiTranslations = {
    pt: {
        siteTitle: "Planeta Fatos — Desvende o Oculto",
        metaDescription: "Explore mistérios inexplicáveis, conspirações históricas, fatos bizarros e decifre enigmas exclusivos no portal oficial do canal Planeta Fatos.",
        logoText: 'PLANETA <span class="accent-text">FATOS</span>',
        navHome: '<i class="fa-solid fa-house"></i> Início',
        navDecifrador: '<i class="fa-solid fa-terminal"></i> Decifrador',
        navQuiz: '<i class="fa-solid fa-circle-question"></i> Quizzes',
        navForum: '<i class="fa-solid fa-comments"></i> Fórum',
        navBiblioteca: '<i class="fa-solid fa-book"></i> Biblioteca',
        navArea51: '<i class="fa-solid fa-lock text-danger"></i> Área 51',
        heroTitle: 'BEM-VINDO AO <span class="glow-text">OCULTO</span>',
        heroSubtitle: 'Desvende os segredos, mistérios e conspirações mais profundos do nosso planeta.',
        heroBtnDecrypt: '<i class="fa-solid fa-key"></i> Decifrar Código',
        heroBtnQuiz: '<i class="fa-solid fa-gamepad"></i> Testar Sobrevivência',
        homeTitle: '<i class="fa-solid fa-folder-open text-cyan"></i> Dossiês de Mistérios',
        decryptTitle: '<i class="fa-solid fa-key text-purple"></i> Terminal de Decodificação',
        terminalHeaderTitle: 'PLANETA_FATOS // DECRYPT_CORE',
        termPrompt1: '> INICIANDO SISTEMA DE DESCRIPTAÇÃO...',
        termPrompt2: '> SELECIONE O CASO PARA DESBLOQUEAR OS ARQUIVOS SECRETOS:',
        termSelectPlaceholder: '-- SELECIONE O CASO --',
        codePrompt: '> DIGITE A COORDENADA DA CHAVE ESCONDIDA NO VÍDEO (ex: 120, 340):',
        terminalCodePlaceholder: "DIGITE O CÓDIGO DA CHAVE...",
        btnDecrypt: '<i class="fa-solid fa-unlock-keyhole"></i> DECRYPT',
        dossierBadge: "CONFIDENCIAL",
        dossierTitle: "ARQUIVO SECRETO",
        dossierStatus: "DESCRIPTOGRAFADO",
        dossierStatusLabel: "STATUS:",
        dossierDateLabel: "DATA DE COMPILAÇÃO:",
        quizTitle: '<i class="fa-solid fa-gamepad text-cyan"></i> Centro de Quizzes',
        quizSelTitle: "Escolha o seu Teste de Sobrevivência",
        quizSelDesc: "Você tem o conhecimento e instinto necessários para sobreviver aos cenários mais assustadores da Terra?",
        quizC1Title: "Você Sobreviveria à Ilha das Cobras?",
        quizC1Desc: "5 cobras por metro quadrado e o veneno que derrete carne humana. Faça suas escolhas.",
        quizC2Title: "Sobrevivência na Passagem Dyatlov",
        quizC2Desc: "Frio extremo e uma força desconhecida na Sibéria. Você tomaria as decisões corretas?",
        quizBtnStart: "Iniciar Teste",
        quizTitleActive: "TESTE DE SOBREVIVÊNCIA",
        quizProgressPrefix: "Questão",
        resultHeadlineWin: "SOBREVIVENTE LENDÁRIO!",
        resultHeadlineWarn: "SOBREVIVENTE AVISADO",
        resultHeadlineLose: "VÍTIMA DO IMPRÓPRIO",
        resultDescWin: "Excelente! Você tomou as decisões perfeitas sob pressão e tem instinto aguçado para sobreviver a qualquer adversidade nestes ambientes extremos.",
        resultDescWarn: "Bom trabalho. Você cometeu alguns deslizes que poderiam custar um membro ou sua saúde, mas conseguiu sair com vida desses cenários.",
        resultDescLose: "Você falhou. Suas decisões apressadas ou baseadas em mitos o levariam a congelar ou ser atacado fatalmente. Tente novamente e melhore seu instinto.",
        resultScorePrefix: "Você acertou ",
        resultScoreMiddle: " de ",
        resultScoreSuffix: " questões.",
        resultRetryBtn: '<i class="fa-solid fa-rotate-left"></i> Tentar Novamente',
        resultBackBtn: '<i class="fa-solid fa-house"></i> Voltar ao Início',
        forumTitle: '<i class="fa-solid fa-comments text-purple"></i> Fórum de Teorias Conspiratórias',
        forumFormTitle: "Compartilhe Sua Teoria",
        forumFormDesc: "Qual é a sua hipótese sobre os maiores mistérios do mundo? Compartilhe com os outros investigadores do canal.",
        labelNick: "Investigador (Apelido):",
        formNickPlaceholder: "Ex: DetetiveOculto",
        labelCategory: "Categoria:",
        catOpt1: "Alienígenas / OVNIs",
        catOpt2: "Casos Históricos Não Solucionados",
        catOpt3: "Conspirações Governamentais",
        catOpt4: "Lendas Urbanas / Criptídeos",
        labelText: "Sua Teoria:",
        formTextPlaceholder: "Escreva aqui as provas e detalhes da sua teoria...",
        forumSubmitBtn: '<i class="fa-solid fa-paper-plane"></i> Publicar Teoria',
        forumListTitle: "Mural de Investigações Recentes",
        libraryTitle: '<i class="fa-solid fa-book text-cyan"></i> Biblioteca do Mistério',
        libraryIntro: "Indicações e sugestões de livros, jogos e investigações físicas selecionadas para aprofundar seus conhecimentos. Compras realizadas através do portal ajudam a manter as pesquisas do canal Planeta Fatos ativas!",
        libC1Badge: "LIVRO // HORROR CÓSMICO",
        libC1Title: "H.P. Lovecraft - Coleção Completa",
        libC1Desc: "O mestre do terror cósmico e criador do mito de Cthulhu. Descubra os mistérios inexplicáveis descritos nos contos originais em uma edição de colecionador.",
        libC1Btn: '<i class="fa-brands fa-amazon"></i> Ver na Amazon',
        libC2Badge: "JOGO // INVESTIGAÇÃO",
        libC2Title: "Mysterium (Jogo de Tabuleiro)",
        libC2Desc: "Um jogador assume o papel do fantasma e os outros são investigadores tentando descobrir quem cometeu o crime e em qual local. O jogo perfeito para fãs do canal!",
        libC2Btn: '<i class="fa-brands fa-amazon"></i> Ver na Amazon',
        libC3Badge: "LIVRO // SUSPENSE",
        libC3Title: "O Iluminado (Stephen King)",
        libC3Desc: "A clássica e perturbadora história de Jack Torrance e do assombrado Hotel Overlook. Um suspense psicológico que desafia a mente.",
        libC3Btn: '<i class="fa-brands fa-amazon"></i> Ver na Amazon',
        area51Title: '<i class="fa-solid fa-shield-halved text-danger"></i> Área 51 — Arquivos Restritos',
        area51TermTitle: "WARNING // ACESSO RESTRITO A MEMBROS",
        area51WarnTitle: "ALERTA DE SEGURANÇA",
        area51WarnP1: "ESTA PÁGINA CONTÉM DOCUMENTOS E TEORIAS DA CONSPIRAÇÃO CRIPTOGRAFADAS DE ALTO NÍVEL.",
        area51WarnP2: 'Insira a <strong>Chave de Acesso</strong> contida no nosso E-book Oficial <em>"Planeta Fatos: Arquivos Secretos"</em> para descriptografar os arquivos.',
        area51PasscodePlaceholder: "INSIRA A CHAVE...",
        btnUnlockArea51: '<i class="fa-solid fa-key"></i> DESCRIPTOGRAFAR',
        area51UnlBadge: "ACESSO PERMITIDO",
        area51UnlTitle: "ARQUIVO SEGRETO AREA 51 // DESBLOQUEADO",
        area51UnlIntro: "Parabéns, Investigador! Você descriptografou com sucesso a Área 51. Abaixo estão suas recompensas e conteúdos secretos exclusivos por apoiar o canal.",
        area51R1Title: "Pack de Wallpapers de IA (4K)",
        area51R1P: "Papéis de parede premium gerados por inteligência artificial com temas de astronomia, ufologia e mistérios antigos.",
        area51R1Btn: '<i class="fa-solid fa-download"></i> Baixar Wallpapers',
        area51R2Title: "Enigma Secreto Extra",
        area51R2P: "Decifre o código oculto da base militar secreta da Groenlândia. O primeiro a publicar a resposta correta no fórum terá seu canal/nome mencionado em destaque no próximo vídeo!",
        area51R2Strong: "CÓDIGO CRYPTO:",
        area51R2Tip: "Dica: O código começa em binário (letra por letra) e termina com coordenadas ocultas de radar satelital.",
        footerCopy: "&copy; 2026 Planeta Fatos. Todos os direitos reservados.",
        visitorCountTracking: "Rastreando sinal do QG...",
        visitorCountSuffix: " investigadores já acessaram o portal",
        alertSuccessForum: "Teoria conspiratória enviada ao painel de investigações com sucesso!",
        termErrCase: "> ERRO: SELECIONE UM CASO PRIMEIRO.",
        termErrCode: "> ERRO: INSERÇÃO REQUERIDA. DIGITE O CÓDIGO.",
        termConn: "> CONECTANDO AO BANCO DE DADOS CONFIDENCIAL...\n> VALIDANDO CHAVE CRIPTOGRÁFICA...",
        termSuccess: "> CÓDIGO DE CHAVE VÁLIDO!\n> INICIANDO DESCRIPTOGRAFIA DO DOSSIÊ DA INVESTIGAÇÃO...\n> ACESSO CONCEDIDO.",
        termFail: "> ERRO: CÓDIGO DE CHAVE INVÁLIDO.\n> ACESSO NEGADO. TENTE NOVAMENTE.",
        a51ErrCode: "> ERRO: INSERÇÃO REQUERIDA. DIGITE A CHAVE.",
        a51Conn: "> CONECTANDO AO SERVIDOR SEGURO...\n> VERIFICANDO CHAVE DE CRIPTOGRAFIA...",
        a51Success: "> CHAVE VÁLIDA. ACESSO CONCEDIDO.",
        a51Fail: "> ERRO: CHAVE INVÁLIDA. ACESSO NEGADO."
    },
    en: {
        siteTitle: "Planet Facts — Unveil the Hidden",
        metaDescription: "Explore unexplained mysteries, historical conspiracies, bizarre facts and decrypt exclusive enigmas on the official Planet Facts portal.",
        logoText: 'PLANET <span class="accent-text">FACTS</span>',
        navHome: '<i class="fa-solid fa-house"></i> Home',
        navDecifrador: '<i class="fa-solid fa-terminal"></i> Decrypter',
        navQuiz: '<i class="fa-solid fa-circle-question"></i> Quizzes',
        navForum: '<i class="fa-solid fa-comments"></i> Forum',
        navBiblioteca: '<i class="fa-solid fa-book"></i> Library',
        navArea51: '<i class="fa-solid fa-lock text-danger"></i> Area 51',
        heroTitle: 'WELCOME TO THE <span class="glow-text">HIDDEN</span>',
        heroSubtitle: 'Uncover the deepest secrets, mysteries, and conspiracies of our planet.',
        heroBtnDecrypt: '<i class="fa-solid fa-key"></i> Decrypt Code',
        heroBtnQuiz: '<i class="fa-solid fa-gamepad"></i> Test Survival',
        homeTitle: '<i class="fa-solid fa-folder-open text-cyan"></i> Mystery Dossiers',
        decryptTitle: '<i class="fa-solid fa-key text-purple"></i> Decryption Terminal',
        terminalHeaderTitle: 'PLANET_FACTS // DECRYPT_CORE',
        termPrompt1: '> INITIALIZING DECRYPTION SYSTEM...',
        termPrompt2: '> SELECT Case TO UNLOCK CONFIDENTIAL FILES:',
        termSelectPlaceholder: '-- SELECT THE CASE --',
        codePrompt: '> ENTER THE COORD OF THE HIDDEN KEY IN THE VIDEO (e.g. 120, 340):',
        terminalCodePlaceholder: "ENTER THE KEY CODE...",
        btnDecrypt: '<i class="fa-solid fa-unlock-keyhole"></i> DECRYPT',
        dossierBadge: "CONFIDENTIAL",
        dossierTitle: "SECRET FILE",
        dossierStatus: "DECRYPTED",
        dossierStatusLabel: "STATUS:",
        dossierDateLabel: "COMPILE DATE:",
        quizTitle: '<i class="fa-solid fa-gamepad text-cyan"></i> Quiz Center',
        quizSelTitle: "Choose Your Survival Test",
        quizSelDesc: "Do you have the knowledge and instinct needed to survive Earth's most terrifying scenarios?",
        quizC1Title: "Would You Survive Snake Island?",
        quizC1Desc: "5 snakes per square meter and flesh-melting venom. Make your choices.",
        quizC2Title: "Survival in the Dyatlov Pass",
        quizC2Desc: "Extreme cold and an unknown force in Siberia. Would you make the correct decisions?",
        quizBtnStart: "Start Test",
        quizTitleActive: "SURVIVAL TEST",
        quizProgressPrefix: "Question",
        resultHeadlineWin: "LEGENDARY SURVIVOR!",
        resultHeadlineWarn: "AWARE SURVIVOR",
        resultHeadlineLose: "VICTIM OF THE WILD",
        resultDescWin: "Excellent! You made the perfect decisions under pressure and have a sharp instinct to survive any adversity in these extreme environments.",
        resultDescWarn: "Good job. You made a few slips that could cost you a limb or your health, but you managed to make it out alive.",
        resultDescLose: "You failed. Your rushed decisions based on myths would lead you to freeze or be fatally attacked. Try again to improve your instinct.",
        resultScorePrefix: "You answered ",
        resultScoreMiddle: " out of ",
        resultScoreSuffix: " questions correctly.",
        resultRetryBtn: '<i class="fa-solid fa-rotate-left"></i> Try Again',
        resultBackBtn: '<i class="fa-solid fa-house"></i> Back to Home',
        forumTitle: '<i class="fa-solid fa-comments text-purple"></i> Conspiracy Theories Forum',
        forumFormTitle: "Share Your Theory",
        forumFormDesc: "What is your hypothesis on the world's greatest mysteries? Share it with other investigators.",
        labelNick: "Investigator (Nickname):",
        formNickPlaceholder: "e.g. DarkDetective",
        labelCategory: "Category:",
        catOpt1: "Aliens / UFOs",
        catOpt2: "Unsolved Historical Cases",
        catOpt3: "Government Conspiracies",
        catOpt4: "Urban Legends / Cryptids",
        labelText: "Your Theory:",
        formTextPlaceholder: "Write your evidence and theory details here...",
        forumSubmitBtn: '<i class="fa-solid fa-paper-plane"></i> Post Theory',
        forumListTitle: "Recent Investigations Wall",
        libraryTitle: '<i class="fa-solid fa-book text-cyan"></i> Library of Mystery',
        libraryIntro: "Recommendations and suggestions for books, games, and physical investigations to deepen your knowledge. Purchases made through the portal help keep our research active!",
        libC1Badge: "BOOK // COSMIC HORROR",
        libC1Title: "H.P. Lovecraft - Complete Fiction",
        libC1Desc: "The master of cosmic horror and creator of the Cthulhu mythos. Discover the inexplicable mysteries in a beautiful collection.",
        libC1Btn: '<i class="fa-brands fa-amazon"></i> View on Amazon',
        libC2Badge: "BOARD GAME // MYSTERY",
        libC2Title: "Mysterium (Board Game)",
        libC2Desc: "One player acts as the ghost while others are investigators trying to discover the killer and the crime scene. The perfect game for channel fans!",
        libC2Btn: '<i class="fa-brands fa-amazon"></i> View on Amazon',
        libC3Badge: "BOOK // SUSPENSE",
        libC3Title: "The Shining (Stephen King)",
        libC3Desc: "The classic and unsettling story of Jack Torrance and the haunted Overlook Hotel. A psychological thriller that challenges your sanity.",
        libC3Btn: '<i class="fa-brands fa-amazon"></i> View on Amazon',
        area51Title: '<i class="fa-solid fa-shield-halved text-danger"></i> Area 51 — Restricted Files',
        area51TermTitle: "WARNING // ACCESS RESTRICTED TO MEMBERS",
        area51WarnTitle: "SECURITY ALERT",
        area51WarnP1: "THIS PAGE CONTAINS HIGH-LEVEL ENCRYPTED DOCUMENTS AND CONSPIRACY THEORIES.",
        area51WarnP2: 'Enter the <strong>Access Key</strong> found in our Official E-book <em>"Planet Facts: Secret Files"</em> to decrypt the files.',
        area51PasscodePlaceholder: "ENTER THE KEY...",
        btnUnlockArea51: '<i class="fa-solid fa-key"></i> DECRYPT',
        area51UnlBadge: "ACCESS GRANTED",
        area51UnlTitle: "AREA 51 SECRET FILE // UNLOCKED",
        area51UnlIntro: "Congratulations, Investigator! You have successfully decrypted Area 51. Below are your exclusive rewards and secret content for supporting the channel.",
        area51R1Title: "AI Wallpapers Pack (4K)",
        area51R1P: "Premium AI-generated wallpapers featuring astronomy, ufology, and ancient mysteries.",
        area51R1Btn: '<i class="fa-solid fa-download"></i> Download Wallpapers',
        area51R2Title: "Extra Secret Enigma",
        area51R2P: "Decipher the hidden code of the secret military base in Greenland. The first to post the correct answer on the forum will be featured in the next video!",
        area51R2Strong: "CRYPTO CODE:",
        area51R2Tip: "Tip: The code starts in binary (letter by letter) and ends with hidden satellite radar coordinates.",
        footerCopy: "&copy; 2026 Planet Facts. All rights reserved.",
        visitorCountTracking: "Tracking HQ signal...",
        visitorCountSuffix: " investigators have accessed the portal",
        alertSuccessForum: "Conspiracy theory posted successfully to the investigation board!",
        termErrCase: "> ERROR: SELECT A CASE FIRST.",
        termErrCode: "> ERROR: INPUT REQUIRED. ENTER THE CODE.",
        termConn: "> CONNECTING TO CONFIDENTIAL DATABASE...\n> VALIDATING CRYPTOGRAPHIC KEY...",
        termSuccess: "> VALID KEY CODE!\n> STARTING DECRYPTION OF THE INVESTIGATION DOSSIER...\n> ACCESS GRANTED.",
        termFail: "> ERROR: INVALID KEY CODE.\n> ACCESS DENIED. TRY AGAIN.",
        a51ErrCode: "> ERROR: INPUT REQUIRED. ENTER THE KEY.",
        a51Conn: "> CONNECTING TO SECURE SERVER...\n> VERIFYING ENCRYPTION KEY...",
        a51Success: "> VALID KEY. ACCESS GRANTED.",
        a51Fail: "> ERROR: INVALID KEY. ACCESS DENIED."
    },
    es: {
        siteTitle: "Mundo Hechos — Descubre lo Oculto",
        metaDescription: "Explora misterios inexplicables, conspiraciones históricas, hechos extraños y descifra enigmas exclusivos en el portal oficial de Mundo Hechos.",
        logoText: 'MUNDO <span class="accent-text">HECHOS</span>',
        navHome: '<i class="fa-solid fa-house"></i> Inicio',
        navDecifrador: '<i class="fa-solid fa-terminal"></i> Descifrador',
        navQuiz: '<i class="fa-solid fa-circle-question"></i> Quizzes',
        navForum: '<i class="fa-solid fa-comments"></i> Foro',
        navBiblioteca: '<i class="fa-solid fa-book"></i> Biblioteca',
        navArea51: '<i class="fa-solid fa-lock text-danger"></i> Área 51',
        heroTitle: 'BIENVENIDO A LO <span class="glow-text">OCULTO</span>',
        heroSubtitle: 'Descubre los secretos, misterios y conspiraciones más profundos de nuestro planeta.',
        heroBtnDecrypt: '<i class="fa-solid fa-key"></i> Descifrar Código',
        heroBtnQuiz: '<i class="fa-solid fa-gamepad"></i> Probar Supervivencia',
        homeTitle: '<i class="fa-solid fa-folder-open text-cyan"></i> Dosieres de Misterios',
        decryptTitle: '<i class="fa-solid fa-key text-purple"></i> Terminal de Desencriptación',
        terminalHeaderTitle: 'MUNDO_HECHOS // DECRYPT_CORE',
        termPrompt1: '> INICIANDO SISTEMA DE DESENCRIPCIÓN...',
        termPrompt2: '> SELECCIONE EL CASO PARA DESBLOQUEAR LOS ARCHIVOS SECRETOS:',
        termSelectPlaceholder: '-- SELECCIONE EL CASO --',
        codePrompt: '> INGRESE LA COORDENADA DE LA LLAVE OCULTA EN EL VIDEO (ej: 120, 340):',
        terminalCodePlaceholder: "COLOQUE EL CÓDIGO DE LA LLAVE...",
        btnDecrypt: '<i class="fa-solid fa-unlock-keyhole"></i> DESENCRIPTAR',
        dossierBadge: "CONFIDENCIAL",
        dossierTitle: "ARCHIVO SECRETO",
        dossierStatus: "DESENCRIPTADO",
        dossierStatusLabel: "ESTADO:",
        dossierDateLabel: "FECHA DE COMPILACIÓN:",
        quizTitle: '<i class="fa-solid fa-gamepad text-cyan"></i> Centro de Quizzes',
        quizSelTitle: "Elige tu Prueba de Supervivencia",
        quizSelDesc: "¿Tienes el conocimiento y el instinto necesarios para sobrevivir a los escenarios más aterradores de la Tierra?",
        quizC1Title: "¿Sobrevivirías a la Isla de las Cobras?",
        quizC1Desc: "5 serpientes por metro cuadrado y veneno que derrite la carne humana. Haz tus elecciones.",
        quizC2Title: "Supervivencia en el Paso Dyatlov",
        quizC2Desc: "Frío extremo y una fuerza desconocida en Siberia. ¿Tomarías las decisiones correctas?",
        quizBtnStart: "Iniciar Prueba",
        quizTitleActive: "PRUEBA DE SUPERVIVENCIA",
        quizProgressPrefix: "Pregunta",
        resultHeadlineWin: "¡SOBREVIVIENTE LENDARIO!",
        resultHeadlineWarn: "SOBREVIVIENTE ADVERTIDO",
        resultHeadlineLose: "VÍCTIMA DEL PELIGRO",
        resultDescWin: "¡Excelente! Tomaste las decisiones perfectas bajo presión y tienes un instinto afilado para sobrevivir a cualquier adversidad en estos entornos extremos.",
        resultDescWarn: "Buen trabajo. Cometiste algunos errores que podrían costarte un miembro o tu salud, pero lograste salir con vida.",
        resultDescLose: "Fracasaste. Tus decisiones apresuradas o basadas en mitos te llevarían a congelarte o ser atacado fatalmente. Inténtalo de nuevo y mejora tu instinto.",
        resultScorePrefix: "Acertaste ",
        resultScoreMiddle: " de ",
        resultScoreSuffix: " preguntas.",
        resultRetryBtn: '<i class="fa-solid fa-rotate-left"></i> Intentar de Nuevo',
        resultBackBtn: '<i class="fa-solid fa-house"></i> Volver al Inicio',
        forumTitle: '<i class="fa-solid fa-comments text-purple"></i> Foro de Teorías Conspirativas',
        forumFormTitle: "Comparte Tu Teoría",
        forumFormDesc: "¿Cuál es tu hipótesis sobre los mayores misterios del mundo? Compártela con los otros investigadores del canal.",
        labelNick: "Investigador (Apodo):",
        formNickPlaceholder: "Ej: DetectiveOculto",
        labelCategory: "Categoría:",
        catOpt1: "Alienígenas / OVNIs",
        catOpt2: "Casos Históricos No Resueltos",
        catOpt3: "Conspiraciones Gubernamentales",
        catOpt4: "Leyendas Urbanas / Criptidos",
        labelText: "Tu Teoría:",
        formTextPlaceholder: "Escribe aquí las pruebas y detalles de tu teoría...",
        forumSubmitBtn: '<i class="fa-solid fa-paper-plane"></i> Publicar Teoría',
        forumListTitle: "Mural de Investigaciones Recientes",
        libraryTitle: '<i class="fa-solid fa-book text-cyan"></i> Biblioteca del Misterio',
        libraryIntro: "Recomendaciones y sugerencias de libros, juegos e investigaciones físicas seleccionadas para profundizar tus conocimientos. ¡Las compras realizadas a través del portal ayudan a mantener activas nuestras investigaciones!",
        libC1Badge: "LIBRO // TERROR CÓSMICO",
        libC1Title: "H.P. Lovecraft - Colección Completa",
        libC1Desc: "El maestro del terror cósmico y creador del mito de Cthulhu. Descubre los misterios inexplicables en una edición de colección.",
        libC1Btn: '<i class="fa-brands fa-amazon"></i> Ver en Amazon',
        libC2Badge: "JUEGO // INVESTIGACIÓN",
        libC2Title: "Mysterium (Juego de Mesa)",
        libC2Desc: "Un jugador toma el papel del fantasma y los otros son investigadores intentando descubrir el asesino y la escena. ¡El juego perfecto para fans!",
        libC2Btn: '<i class="fa-brands fa-amazon"></i> Ver en Amazon',
        libC3Badge: "LIBRO // SUSPENSE",
        libC3Title: "El Resplandor (Stephen King)",
        libC3Desc: "La clásica y perturbadora historia de Jack Torrance y el hotel Overlook. Un thriller psicológico que desafía tu mente.",
        libC3Btn: '<i class="fa-brands fa-amazon"></i> Ver en Amazon',
        area51Title: '<i class="fa-solid fa-shield-halved text-danger"></i> Área 51 — Archivos Restringidos',
        area51TermTitle: "WARNING // ACCESO RESTRINGIDO A MIEMBROS",
        area51WarnTitle: "ALERTA DE SEGURIDAD",
        area51WarnP1: "ESTA PÁGINA CONTIENE DOCUMENTOS Y TEORÍAS CONSPIRATIVAS ENCRIPTADAS DE ALTO NIVEL.",
        area51WarnP2: 'Ingresa la <strong>Clave de Acceso</strong> contenida en nuestro E-book Oficial <em>"Mundo Hechos: Archivos Secretos"</em> para desencriptar los archivos.',
        area51PasscodePlaceholder: "INGRESA LA CLAVE...",
        btnUnlockArea51: '<i class="fa-solid fa-key"></i> DESENCRIPTAR',
        area51UnlBadge: "ACCESO PERMITIDO",
        area51UnlTitle: "ARCHIVO SECRETO ÁREA 51 // DESBLOQUEADO",
        area51UnlIntro: "¡Felicidades, Investigador! Has desencriptado con éxito la Área 51. A continuación están tus recompensas y contenidos secretos exclusivos por apoyar al canal.",
        area51R1Title: "Pack de Wallpapers de IA (4K)",
        area51R1P: "Fondos de pantalla premium generados por inteligencia artificial con temas de astronomía, ufología y misterios antiguos.",
        area51R1Btn: '<i class="fa-solid fa-download"></i> Descargar Fondos',
        area51R2Title: "Enigma Secreto Extra",
        area51R2P: "Descifra el código oculto de la base militar secreta de Groenlandia. ¡El primero en publicar la respuesta en el foro será destacado en el próximo video!",
        area51R2Strong: "CÓDIGO CRYPTO:",
        area51R2Tip: "Pista: El código empieza en binario (letra por letra) y termina con coordenadas ocultas de radar satelital.",
        footerCopy: "&copy; 2026 Mundo Hechos. Todos los derechos reservados.",
        visitorCountTracking: "Rastreando señal del QG...",
        visitorCountSuffix: " investigadores ya han accedido al portal",
        alertSuccessForum: "¡Teoría conspirativa publicada con éxito en el panel de investigaciones!",
        termErrCase: "> ERROR: SELECCIONE UN CASO PRIMERO.",
        termErrCode: "> ERROR: ENTRADA REQUERIDA. COLOQUE EL CÓDIGO.",
        termConn: "> CONECTANDO A LA BASE DE DATOS CONFIDENCIAL...\n> VALIDANDO CLAVE CRIPTOGRÁFICA...",
        termSuccess: "> ¡CÓDIGO DE LLAVE VÁLIDO!\n> INICIANDO DESENCRIPCIÓN DEL DOSIER DE LA INVESTIGACIÓN...\n> ACCESO PERMITIDO.",
        termFail: "> ERROR: CÓDIGO DE LLAVE INVÁLIDO.\n> ACCESO DENEGADO. INTENTE DE NUEVO.",
        a51ErrCode: "> ERROR: ENTRADA REQUERIDA. INGRESA LA CLAVE.",
        a51Conn: "> CONECTANDO AL SERVIDOR SEGURO...\n> VERIFICANDO CLAVE DE ENCRYPTION...",
        a51Success: "> CLAVE VÁLIDA. ACCESO PERMITIDO.",
        a51Fail: "> ERROR: CLAVE INVÁLIDA. ACCESO DENEGADO."
    }
};

// --- DATA: MYSTERY DOSSIERS (HOME GRID) ---
const dossiersData = {
    pt: [
        { id: "piri_reis", title: "O Mapa Impossível de Piri Reis", badge: "HISTÓRIA OCULTA", image: "images/piri_reis_intro.png", shortDesc: "Como um mapa desenhado em 1513 detalha a costa da Antártida livre de gelo, séculos antes de sua descoberta oficial?", readTime: "3 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Em 1929, durante a restauração do Palácio de Topkapi, em Istambul, teólogos descobriram um fragmento de pergaminho pintado em 1513 pelo almirante otomano <strong>Piri Reis</strong>.</p><p><strong>O Mistério:</strong> O mapa descreve a costa oeste da África, a costa leste da América do Sul e a costa norte da <strong>Antártida</strong> sem gelo, revelando relevos mapeados por satélites no século XX.</p><p><em>Código do Vídeo para Desbloqueio: <strong>250, 480</strong></em></p>` },
        { id: "heracleion", title: "Heracleion: A Atlântida do Egito", badge: "ARQUEOLOGIA", image: "images/heracleion_intro.png", shortDesc: "A majestosa cidade portuária egípcia que desapareceu sob as águas do Mediterrâneo há mais de 1200 anos.", readTime: "4 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> A antiga cidade de <strong>Heracleion</strong> (ou Thonis) era o portal de entrada comercial do Egito no Mediterrâneo.</p><p><strong>O Mistério:</strong> Por volta do século VIII d.C., a cidade sumiu. No ano 2000 foi redescoberta a 10 metros de profundidade na Baía de Aboukir.</p><p><em>Código do Vídeo para Desbloqueio: <strong>180, 520</strong></em></p>` },
        { id: "bermeja", title: "A Ilha Fantasma de Bermeja", badge: "CONSPIRAÇÃO", image: "images/bermeja_intro.png", shortDesc: "Uma ilha rica em petróleo no Golfo do México que constava em mapas há séculos e simplesmente sumiu do mapa.", readTime: "3 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> A ilha de <strong>Bermeja</strong> definia fronteiras de petróleo entre México e EUA.</p><p><strong>O Mistério:</strong> Em 1997, satélites revelaram apenas oceano vazio. Teias de conspiração sugerem que a CIA bombardeou a ilha para mudar as fronteiras marítimas.</p><p><em>Código do Vídeo para Desbloqueio: <strong>210, 420</strong></em></p>` },
        { id: "flannan", title: "Farol das Ilhas Flannan", badge: "CASO NÃO SOLUCIONADO", image: "images/flannan_log.png", shortDesc: "Três guardas de um farol isolado na Escócia sumiram no ar, deixando pratos postos e um diário de bordo perturbador.", readTime: "4 min de leitura", fullContent: `<p><strong>O Mistério:</strong> Três faroleiros desapareceram em dezembro de 1900. A mesa estava posta, mas o diário de bordo trazia relatos de tempestades aterrorizantes que nunca ocorreram na realidade.</p><p><em>Código do Vídeo para Desbloqueio: <strong>220, 520</strong></em></p>` },
        { id: "nazca", title: "O Enigma das Linhas de Nazca", badge: "ARQUEOLOGIA", image: "images/nazca_intro.png", shortDesc: "Desenhos geométricos gigantescos no deserto do Peru que só podem ser compreendidos do céu. Como foram feitos?", readTime: "3 min de leitura", fullContent: `<p><strong>O Mistério:</strong> Geoglifos massivos desenhados por volta de 500 a.C. Como os antigos desenharam figuras com precisão matemática sem perspectiva aérea?</p><p><em>Código do Vídeo para Desbloqueio: <strong>180, 480</strong></em></p>` },
        { id: "ness", title: "O Enigma do Lago Ness", badge: "CRIPTÍDEOS", image: "images/ness_intro.png", shortDesc: "A lenda de Nessie atrai milhares de exploradores à Escócia. Haveria uma criatura pré-histórica vivendo no lago?", readTime: "3 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Sonares avançados detectaram sombras maciças nas profundezas geladas, e testes de DNA apontaram enguias gigantes.</p><p><em>Código do Vídeo para Desbloqueio: <strong>290, 600</strong></em></p>` },
        { id: "paris_catacombs", title: "Catacumbas de Paris", badge: "MISTÉRIO SUBTERRÂNEO", image: "images/catacombs_intro.png", shortDesc: "O labirinto de túneis que abriga mais de 6 milhões de esqueletos e esconde cinemas clandestinos.", readTime: "5 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Mais de 300 km de túneis contendo ossários gigantescos. A polícia já encontrou salas secretas de cinema clandestinas e desaparecimentos inexplicáveis.</p><p><em>Código do Vídeo para Desbloqueio: <strong>120, 620</strong></em></p>` },
        { id: "svalbard", title: "Svalbard: Onde Morrer é Proibido", badge: "CURIOSIDADE", image: "images/svalbard_intro.png", shortDesc: "Por que uma pequena cidade na Noruega proibiu sepultamentos e o que está oculto no solo congelado?", readTime: "3 min de leitura", fullContent: `<p><strong>O Mistério:</strong> O permafrost impede que corpos se decomponham. Vírus da gripe espanhola de 1918 continuam intactos no gelo, criando riscos de segurança biológica.</p><p><em>Código de Desbloqueio: <strong>svalbard_permafrost</strong></em></p>` },
        { id: "ellidae", title: "A Casa Mais Isolada do Mundo", badge: "MISTÉRIO", image: "images/ellidae_intro.png", shortDesc: "Uma misteriosa cabana branca construída no topo de uma ilha desabitada na Islândia. Quem realmente vive lá?", readTime: "3 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Uma cabana construída em 1953 na ilha vulcânica de Elliðaey. Teorias diziam ser abrigo contra zumbis ou casa de cantora famosa, mas é um abrigo para caçadores de papagaios-do-mar.</p><p><em>Código de Desbloqueio: <strong>ellidae_lodge</strong></em></p>` },
        { id: "boiling_amazon", title: "O Rio Que Ferve na Amazônia", badge: "CURIOSIDADE", image: "images/boiling_river_intro.png", shortDesc: "Conhecido como Shanay-timpishka, este rio corre a quase 100°C matando qualquer criatura que caia nele.", readTime: "3 min de leitura", fullContent: `<p><strong>O Mistério:</strong> Localizado no Peru, a área vulcânica ativa mais próxima fica a centenas de quilômetros de distância. Fontes termais profundas explicam o calor.</p><p><em>Código de Desbloqueio: <strong>boiling_water</strong></em></p>` },
        { id: "zone_silence", title: "A Zona do Silêncio no México", badge: "ANOMALIA MAGNÉTICA", image: "images/zone_silence_intro.png", shortDesc: "Uma área no deserto do México onde as ondas de rádio desaparecem e agulhas de bússolas giram descontroladamente.", readTime: "3 min de leitura", fullContent: `<p><strong>O Mistério:</strong> Localizada em Mapimí, a região apresenta anomalias de sinal e atrai uma quantidade desproporcional de meteoritos devido a minerais e anomalias atmosféricas.</p><p><em>Código de Desbloqueio: <strong>280, 500</strong></em></p>` },
        { id: "oakville_blobs", title: "As Bolhas de Oakville", badge: "FENÔMENO BIOLÓGICO", image: "images/oakville_blobs_intro.png", shortDesc: "Uma chuva de gelatina misteriosa contendo bactérias e glóbulos brancos adoeceu uma cidade inteira em 1994.", readTime: "3 min de leitura", fullContent: `<p><strong>O Mistério:</strong> Em Washington, substâncias gelatinosas caíram do céu. Ninguém sabe se foi teste militar ou lixo espacial biológico.</p><p><em>Código de Desbloqueio: <strong>300, 450</strong></em></p>` },
        { id: "vela", title: "O Incidente Vela", badge: "MISTÉRIO SATELITAL", image: "images/vela_intro.png", shortDesc: "O flash duplo registrado no oceano em 1979 que gerou pânico nuclear e suspeitas de um teste secreto.", readTime: "3 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Em 1979, o satélite americano Vela detectou um duplo flash de luz característico de explosões nucleares.</p><p><strong>O Mistério:</strong> Países como África do Sul e Israel foram suspeitos de testes navais secretos, mas a comissão americana declarou oficialmente que foi o impacto de um pequeno meteorito no sensor do satélite. Cientistas e historiadores contestam a versão oficial até hoje.</p><p><em>Código do Vídeo para Desbloqueio: <strong>250, 480</strong></em></p>` },
        { id: "otzi", title: "A Múmia Ötzi", badge: "ARQUEOLOGIA", image: "images/otzi_intro.png", shortDesc: "A múmia congelada mais antiga da Europa e a lendária maldição que tirou a vida de sete pesquisadores.", readTime: "3 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Encontrado em 1991 por alpinistas, o corpo congelado de Ötzi data de 3300 a.C. e foi preservado intacto pelo gelo dos Alpes.</p><p><strong>O Mistério:</strong> Pouco após a descoberta, várias pessoas ligadas a ela morreram sob circunstâncias incomuns. Além disso, exames revelaram que Ötzi não morreu de frio, mas assassinado com uma flechada pelas costas.</p><p><em>Código do Vídeo para Desbloqueio: <strong>270, 500</strong></em></p>` },
        { id: "baychimo", title: "O SS Baychimo", badge: "NAVIO FANTASMA", image: "images/baychimo_intro.png", shortDesc: "O navio que ficou preso no gelo ártico, foi abandonado e passou 38 anos vagando sozinho sem tripulação.", readTime: "3 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Em 1931, o cargueiro a vapor SS Baychimo ficou preso no gelo do Alasca e foi abandonado por sua tripulação.</p><p><strong>O Mistério:</strong> Em vez de afundar, o navio libertou-se e vagou pelo Ártico de forma independente por quase 40 anos, sendo avistado por exploradores mas sempre escapando no nevoeiro.</p><p><em>Código do Vídeo para Desbloqueio: <strong>220, 510</strong></em></p>` },
        { id: "somerton", title: "O Homem de Somerton", badge: "ESPIONAGEM", image: "images/somerton_intro.png", shortDesc: "O corpo sem identificação deitado na praia de Adelaide em 1948 que guardava um pedaço de papel com um código impossível.", readTime: "4 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Um homem misterioso foi achado morto na praia de Somerton em 1948, sem documentos e com etiquetas de roupas cortadas.</p><p><strong>O Mistério:</strong> Em seu bolso secreto estava um pedaço de papel rasgado com o texto 'Taman Shud'. O livro de onde o papel foi retirado continha um código criptografado que nunca pôde ser decifrado.</p><p><em>Código do Vídeo para Desbloqueio: <strong>300, 460</strong></em></p>` },
        { id: "atlantis_long", title: "A Lenda de Atlântida", badge: "MISTÉRIO ANTIGO", image: "images/atlantis_intro.png", shortDesc: "A grandiosa civilização descrita por Platão que teria sumido em um dia e uma noite no abismo oceânico.", readTime: "5 min de leitura", fullContent: `<p><strong>O Dossiê:</strong> Atlântida foi descrita nos diálogos de Platão como um império circular e avançado localizado além das Colunas de Hércules.</p><p><strong>O Mistério:</strong> Muitos consideram Atlântida um mito de aviso moral, mas teorias recentes ligam o império à destruição de Santorini ou à impressionante Estrutura de Richat na Mauritânia.</p><p><em>Código do Vídeo para Desbloqueio: <strong>360, 480</strong></em></p>` }
    ],
    en: [
        { id: "piri_reis", title: "The Impossible Map of Piri Reis", badge: "HIDDEN HISTORY", image: "images/piri_reis_intro.png", shortDesc: "How does a map drawn in 1513 detail the coast of Antarctica ice-free, centuries before its official discovery?", readTime: "3 min read", fullContent: `<p><strong>The Dossier:</strong> Discovered in 1929 at Topkapi Palace, this map drawn by Ottoman admiral <strong>Piri Reis</strong> shows the Queen Maud Land coast of Antarctica completely free of ice.</p><p><em>Video Unlock Code: <strong>250, 480</strong></em></p>` },
        { id: "heracleion", title: "Heracleion: Egypt's Atlantis", badge: "ARCHAEOLOGY", image: "images/heracleion_intro.png", shortDesc: "The majestic Egyptian port city that vanished beneath the waters of the Mediterranean over 1200 years ago.", readTime: "4 min read", fullContent: `<p><strong>The Dossier:</strong> Also known as Thonis, the city sank due to soil liquefaction triggered by massive earthquakes.</p><p><em>Video Unlock Code: <strong>180, 520</strong></em></p>` },
        { id: "bermeja", title: "The Phantom Island of Bermeja", badge: "CONSPIRACY", image: "images/bermeja_intro.png", shortDesc: "An oil-rich island in the Gulf of Mexico that was on maps for centuries and simply vanished.", readTime: "3 min read", fullContent: `<p><strong>The Dossier:</strong> In 1997, when boundaries were being drawn, Bermeja was gone. Conspiracies suggest the CIA bombed it to claim oil rights.</p><p><em>Video Unlock Code: <strong>210, 420</strong></em></p>` },
        { id: "flannan", title: "Flannan Isles Lighthouse Mystery", badge: "UNSOLVED CASE", image: "images/flannan_log.png", shortDesc: "Three lighthouse keepers vanished on a remote Scottish island, leaving plates set and a disturbing logbook.", readTime: "4 min read", fullContent: `<p><strong>The Mystery:</strong> In December 1900, the keepers vanished. The logbook recorded non-existent terrifying storms that made veterans cry.</p><p><em>Video Unlock Code: <strong>220, 520</strong></em></p>` },
        { id: "nazca", title: "The Enigma of the Nazca Lines", badge: "ARCHAEOLOGY", image: "images/nazca_intro.png", shortDesc: "Giant geometric drawings in the Peruvian desert that can only be understood from the sky. How were they made?", readTime: "3 min read", fullContent: `<p><strong>The Mystery:</strong> Mass geoglyphs drawn around 500 BC. How could they design them without any aerial perspective?</p><p><em>Video Unlock Code: <strong>180, 480</strong></em></p>` },
        { id: "ness", title: "The Enigma of Loch Ness", badge: "CRYPTIDS", image: "images/ness_intro.png", shortDesc: "The legend of Nessie attracts thousands to Scotland. Could a prehistoric creature be living in the deep?", readTime: "3 min read", fullContent: `<p><strong>The Mystery:</strong> Advanced sonar detected large moving biological objects at 190 meters. DNA samples show giant eel traces.</p><p><em>Video Unlock Code: <strong>290, 600</strong></em></p>` },
        { id: "paris_catacombs", title: "The Paris Catacombs", badge: "SUBTERRANEAN", image: "images/catacombs_intro.png", shortDesc: "A labyrinth of tunnels housing over 6 million skeletons, hiding secret movie theaters and disappearances.", readTime: "5 min read", fullContent: `<p><strong>The Dossier:</strong> Over 300 km of tunnels. Police found secret illicit screening rooms, and explorers have gone missing in the dark.</p><p><em>Video Unlock Code: <strong>120, 620</strong></em></p>` },
        { id: "svalbard", title: "Svalbard: Forbidden to Die", badge: "SCIENCE FACTS", image: "images/svalbard_intro.png", shortDesc: "Why does a small town in Norway ban burials and what is hidden in the frozen ground?", readTime: "3 min read", fullContent: `<p><strong>The Mystery:</strong> Permafrost prevents decomposition. Viable Spanish Flu virus from 1918 is still active under the ice, posing biological hazards.</p><p><em>Unlock Code: <strong>svalbard_permafrost</strong></em></p>` },
        { id: "ellidae", title: "The Most Isolated House", badge: "MYSTERY", image: "images/ellidae_intro.png", shortDesc: "A mysterious white cabin on a deserted volcanic island in Iceland. Who really lives there?", readTime: "3 min read", fullContent: `<p><strong>The Dossier:</strong> Built in 1953 on Elliðaey. Rumors said it belonged to reclusive billionaires or Björk, but it is a puffin hunting lodge.</p><p><em>Unlock Code: <strong>ellidae_lodge</strong></em></p>` },
        { id: "boiling_amazon", title: "The Boiling River of the Amazon", badge: "FACTS", image: "images/boiling_river_intro.png", shortDesc: "Known as Shanay-timpishka, this river flows at near 100°C, cooking any creature that falls inside.", readTime: "3 min read", fullContent: `<p><strong>The Mystery:</strong> Deep hot springs heat the water. The nearest volcano is hundreds of miles away.</p><p><em>Unlock Code: <strong>boiling_water</strong></em></p>` },
        { id: "zone_silence", title: "The Zone of Silence in Mexico", badge: "MAGNETIC ANOMALY", image: "images/zone_silence_intro.png", shortDesc: "A desert patch in Mexico where radio waves vanish and compasses spin out of control.", readTime: "3 min read", fullContent: `<p><strong>The Mystery:</strong> Located in Mapimí, it has radio signal blockages and attracts meteorites due to intense magnetic minerals.</p><p><em>Unlock Code: <strong>280, 500</strong></em></p>` },
        { id: "oakville_blobs", title: "The Oakville Blobs", badge: "BIOLOGICAL EVENT", image: "images/oakville_blobs_intro.png", shortDesc: "A mysterious rain of gelatinous blobs containing bacteria and white blood cells sickened a town in 1994.", readTime: "3 min read", fullContent: `<p><strong>The Mystery:</strong> Gelatin fell from the Washington sky. Theories claim secret military testing or biological space waste.</p><p><em>Unlock Code: <strong>300, 450</strong></em></p>` },
        { id: "vela", title: "The Vela Incident", badge: "SATELLITE MYSTERY", image: "images/vela_intro.png", shortDesc: "A mysterious double flash detected in the ocean in 1979 that sparked nuclear conspiracy theories.", readTime: "3 min read", fullContent: `<p><strong>The Dossier:</strong> In 1979, the US Vela satellite detected a double flash signature of a nuclear test.</p><p><em>Video Unlock Code: <strong>250, 480</strong></em></p>` },
        { id: "otzi", title: "Ötzi the Ice Mummy", badge: "ARCHAEOLOGY", image: "images/otzi_intro.png", shortDesc: "Europe's oldest frozen mummy and the legend of the curse that haunted its discoverers.", readTime: "3 min read", fullContent: `<p><strong>The Dossier:</strong> Found in 1991, the body of Ötzi dates back to 3300 BC and was preserved intact in glacier ice.</p><p><em>Video Unlock Code: <strong>270, 500</strong></em></p>` },
        { id: "baychimo", title: "The SS Baychimo", badge: "GHOST SHIP", image: "images/baychimo_intro.png", shortDesc: "The cargo ship trapped in Arctic ice, abandoned, which sailed alone for 38 years without a crew.", readTime: "3 min read", fullContent: `<p><strong>The Dossier:</strong> In 1931, the steam ship SS Baychimo was trapped in Alaskan ice and abandoned.</p><p><em>Video Unlock Code: <strong>220, 510</strong></em></p>` },
        { id: "somerton", title: "The Somerton Man", badge: "ESPIONAGE", image: "images/somerton_intro.png", shortDesc: "The unidentified body on an Adelaide beach in 1948 that held a scrap of paper with an impossible code.", readTime: "4 min read", fullContent: `<p><strong>The Dossier:</strong> A man was found dead in 1948 with all clothing labels removed and a secret pocket containing a paper with 'Taman Shud'.</p><p><em>Video Unlock Code: <strong>300, 460</strong></em></p>` },
        { id: "atlantis_long", title: "The Legend of Atlantis", badge: "ANCIENT MYSTERY", image: "images/atlantis_intro.png", shortDesc: "The grand civilization described by Plato that vanished in a single day and night into the ocean.", readTime: "5 min read", fullContent: `<p><strong>The Dossier:</strong> Plato described Atlantis as a circular, highly advanced empire beyond the Pillars of Hercules.</p><p><em>Video Unlock Code: <strong>360, 480</strong></em></p>` }
    ],
    es: [
        { id: "piri_reis", title: "El Mapa Imposible de Piri Reis", badge: "HISTORIA OCULTA", image: "images/piri_reis_intro.png", shortDesc: "¿Cómo detalla un mapa de 1513 la costa de la Antártida libre de hielo siglos antes de su descubrimiento oficial?", readTime: "3 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Encontrado en 1929, este mapa otomano muestra la Tierra de la Reina Maud sin hielo, con un relieve que solo se cartografió en el siglo XX.</p><p><em>Código de Desbloqueo: <strong>250, 480</strong></em></p>` },
        { id: "heracleion", title: "Heracleion: La Atlántida Egipcia", badge: "ARQUEOLOGÍA", image: "images/heracleion_intro.png", shortDesc: "La majestuosa ciudad portuaria que desapareció bajo las aguas del Mediterráneo hace más de 1200 años.", readTime: "4 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Thonis-Heracleion se hundió repentinamente debido a sismos y la licuefacción del suelo arcilloso.</p><p><em>Código de Desbloqueo: <strong>180, 520</strong></em></p>` },
        { id: "bermeja", title: "La Isla Fantasma de Bermeja", badge: "CONSPIRACIÓN", image: "images/bermeja_intro.png", shortDesc: "Una isla rica en petróleo en el Golfo de México que figuraba en mapas hace siglos y simplemente se desvaneció.", readTime: "3 min de lectura", fullContent: `<p><strong>El Dosier:</strong> En 1997, satélites mostraron solo océano. Teorías apuntan a que la CIA la destruyó para favorecer los pozos de petróleo de EE. UU.</p><p><em>Código de Desbloqueo: <strong>210, 420</strong></em></p>` },
        { id: "flannan", title: "El Faro de las Islas Flannan", badge: "CASO NO RESUELTO", image: "images/flannan_log.png", shortDesc: "Tres guardianes de un faro aislado en Escocia desaparecieron en el aire, dejando platos servidos y un diario extraño.", readTime: "4 min de lectura", fullContent: `<p><strong>El Misterio:</strong> En diciembre de 1900, los guardianes se desvanecieron. El diario mencionaba tormentas terribles falsas que nunca ocurrieron.</p><p><em>Código de Desbloqueo: <strong>220, 520</strong></em></p>` },
        { id: "nazca", title: "El Enigma de las Líneas de Nazca", badge: "ARQUEOLOGÍA", image: "images/nazca_intro.png", shortDesc: "Dibujos gigantescos en el desierto del Perú que solo pueden apreciarse desde el cielo. ¿Cómo fueron creados?", readTime: "3 min de lectura", fullContent: `<p><strong>El Misterio:</strong> Geoglifos del 500 a.C. ¿Cómo lograron diseñarlos con tanta precisión matemática sin tener perspectiva aérea?</p><p><em>Código de Desbloqueo: <strong>180, 480</strong></em></p>` },
        { id: "ness", title: "El Enigma del Lago Ness", badge: "CRIPTÍDOS", image: "images/ness_intro.png", shortDesc: "La leyenda de Nessie atrae a miles de exploradores a Escocia. ¿Habrá una criatura prehistórica viviendo en el lago?", readTime: "3 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Sonares detectaron grandes masas a 190 metros de profundidad. Muestras de ADN apuntan a anguilas gigantes.</p><p><em>Código de Desbloqueo: <strong>290, 600</strong></em></p>` },
        { id: "paris_catacombs", title: "Las Catacumbas de París", badge: "SUBTERRÁNEO", image: "images/catacombs_intro.png", shortDesc: "El laberinto que alberga más de 6 millones de esqueletos y oculta salas de cine clandestinas.", readTime: "5 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Más de 300 km de túneles. La policía ha descubierto salas de cine ilegales montadas y desapariciones sin explicación.</p><p><em>Código de Desbloqueo: <strong>120, 620</strong></em></p>` },
        { id: "svalbard", title: "Svalbard: Prohibido Morir", badge: "CIENCIA", image: "images/svalbard_intro.png", shortDesc: "¿Por qué una pequeña ciudad de Noruega prohibió los entierros y qué está oculto bajo el hielo?", readTime: "3 min de lectura", fullContent: `<p><strong>El Misterio:</strong> El permafrost impide la descomposición. Virus activos de la gripe española de 1918 permanecen congelados y peligrosos.</p><p><em>Código de Desbloqueo: <strong>svalbard_permafrost</strong></em></p>` },
        { id: "ellidae", title: "La Casa Más Aislada del Mundo", badge: "MISTERIO", image: "images/ellidae_intro.png", shortDesc: "Una misteriosa cabaña blanca construida en la cima de una isla desierta en Islandia. ¿Quién vive ahí?", readTime: "3 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Construida en la isla volcánica de Elliðaey en 1953. Es solo una cabaña de la Asociación de Caza para cazar frailecillos.</p><p><em>Código de Desbloqueo: <strong>ellidae_lodge</strong></em></p>` },
        { id: "boiling_amazon", title: "El Río Hirviente de la Amazonía", badge: "CURIOSIDADES", image: "images/boiling_river_intro.png", shortDesc: "Conocido como Shanay-timpishka, este río corre a casi 100°C y cocina a cualquier animal que caiga.", readTime: "3 min de lectura", fullContent: `<p><strong>El Misterio:</strong> Ubicado en Perú, el calor proviene de manantiales termales profundos, a pesar de no tener volcanes cerca.</p><p><em>Código de Desbloqueo: <strong>boiling_water</strong></em></p>` },
        { id: "zone_silence", title: "La Zona del Silencio en México", badge: "ANOMALÍA MAGNÉTICA", image: "images/zone_silence_intro.png", shortDesc: "Un desierto en México donde las señales de radio fallan y las brújulas giran sin control.", readTime: "3 min de lectura", fullContent: `<p><strong>El Misterio:</strong> En Mapimí, las ondas de radio desaparecen y caen muchos meteoritos debido a las características minerales y atmosféricas.</p><p><em>Código de Desbloqueo: <strong>280, 500</strong></em></p>` },
        { id: "oakville_blobs", title: "Las Burbujas de Oakville", badge: "EVENTO BIOLÓGICO", image: "images/oakville_blobs_intro.png", shortDesc: "Una lluvia de gelatina misteriosa con bacterias y glóbulos blancos enfermó a todo un pueblo en 1994.", readTime: "3 min de lectura", fullContent: `<p><strong>El Misterio:</strong> En Washington, cayó gelatina del cielo. Se discute si fue un ensayo militar secreto o residuos espaciales biológicos.</p><p><em>Código de Desbloqueo: <strong>300, 450</strong></em></p>` },
        { id: "vela", title: "El Incidente Vela", badge: "MISTERIO SATELITAL", image: "images/vela_intro.png", shortDesc: "El destello doble registrado en el océano en 1979 que desató sospechas de una prueba nuclear secreta.", readTime: "3 min de lectura", fullContent: `<p><strong>El Dosier:</strong> En 1979, el satélite Vela detectó un destello doble de luz, característico de explosiones atómicas.</p><p><em>Código de Desbloqueo: <strong>250, 480</strong></em></p>` },
        { id: "otzi", title: "La Momia Ötzi", badge: "ARQUEOLOGÍA", image: "images/otzi_intro.png", shortDesc: "La momia congelada más antiga de Europa y la maldición que cobró la vida de siete investigadores.", readTime: "3 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Hallada en 1991 en los Alpes, la momia de Ötzi data del 3300 a.C. y fue asesinada con una flecha por la espalda.</p><p><em>Código de Desbloqueo: <strong>270, 500</strong></em></p>` },
        { id: "baychimo", title: "El SS Baychimo", badge: "BARCO FANTASMA", image: "images/baychimo_intro.png", shortDesc: "El barco atrapado en el hielo ártico, abandonado, que navegó solo a la deriva durante 38 años.", readTime: "3 min de lectura", fullContent: `<p><strong>El Dosier:</strong> En 1931, el carguero a vapor SS Baychimo quedó atrapado en el hielo y fue abandonado por la tripulación.</p><p><em>Código de Desbloqueo: <strong>220, 510</strong></em></p>` },
        { id: "somerton", title: "El Hombre de Somerton", badge: "ESPIONAJE", image: "images/somerton_intro.png", shortDesc: "El cuerpo sin identificar en una playa de Adelaida en 1948 que guardaba un papel con un código indescifrable.", readTime: "4 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Un hombre hallado muerto en 1948 sin etiquetas en su ropa y con un papel secreto que decía 'Taman Shud'.</p><p><em>Código de Desbloqueo: <strong>300, 460</strong></em></p>` },
        { id: "atlantis_long", title: "La Leyenda de la Atlántida", badge: "MISTERIO ANTIGUO", image: "images/atlantis_intro.png", shortDesc: "La gran civilización descrita por Platón que se hundió en un día y una noche en el abismo del océano.", readTime: "5 min de lectura", fullContent: `<p><strong>El Dosier:</strong> Platón describió la Atlántida como un imperio circular avanzado más allá de las Columnas de Hércules.</p><p><em>Código de Desbloqueo: <strong>360, 480</strong></em></p>` }
    
    ]
};

// --- DATA: SECRET CODES (DECIFRADOR TERMINAL) ---
const decryptDatabaseData = {
    pt: {
        flannan: { code: "220, 520", title: "ARQUIVO FLANNAN_MÒR // CONFIDENCIAL", date: "19/12/1900", content: `<p>Investigações revelaram que o diário de bordo continha anotações trêmulas e bizarros relatos de tempestades em dias limpos. O marinheiro MacArthur saiu sem botas no frio extremo, sugerindo pânico ou loucura coletiva.</p>` },
        nazca: { code: "180, 480", title: "ARQUIVO NAZCA_GEOGLYPHS // SECRETO", date: "04/09/1947", content: `<p>Linhas de Nazca contêm anomalias magnéticas locais. O solo possui quartzo cristalino magnetizado. Algumas linhas coincidem com avistamentos de luzes misteriosas nos Andes.</p>` },
        ness: { code: "290, 600", title: "ARQUIVO LOCH_NESS_SONAR // SECRETO", date: "25/08/2003", content: `<p>Sonares detectaram corpos biológicos de 15 metros movendo-se a 8 nós nas profundezas do lago. Existem fendas profundas de cavernas termais ativas no subsolo.</p>` },
        hope_diamond: { code: "180, 500", title: "ARQUIVO HOPE_GEM_CURSE // SECRETO", date: "12/03/1911", content: `<p>A joia foi roubada de uma estátua hindu. Testes mostram que o boro emite um brilho vermelho incomum sob luz ultravioleta. Curadores relatam tonturas constantes.</p>` },
        aokigahara: { code: "250, 420", title: "ARQUIVO AOKIGAHARA_SEISMIC // CONFIDENCIAL", date: "05/11/1998", content: `<p>Magnetite nas rochas do Fuji desvia bússolas. As cavernas absorvem o som. Microfones registraram infra-sons abaixo de 20 Hz, que induzem medo e pânico.</p>` },
        paris_catacombs: { code: "120, 620", title: "ARQUIVO PARIS_CATACOMBS_LOST // SECRETO", date: "22/10/1993", content: `<p>Polícia encontrou câmeras de pessoas perdidas e até salas de cinema montadas no fundo dos túneis que desapareceram no dia seguinte. Presença de gás radônio radioativo no calcário.</p>` },
        bermeja: { code: "210, 420", title: "ARQUIVO BERMEJA_HYDROGRAPHIC // SECRETO", date: "14/06/1997", content: `<p>Sonar revelou a montanha de Bermeja a 45 metros de profundidade com cortes retos verticais de explosões. Sugere que a ilha foi implodida para expandir as águas dos EUA.</p>` },
        heracleion: { code: "180, 520", title: "ARQUIVO THONIS_HERACLEION // SECRETO", date: "15/09/2004", content: `<p>Inscrições sob o templo alertavam para a destruição por sismos. O afundamento da cidade por liquefação foi tão rápido que manteve os tesouros intactos.</p>` },
        piri_reis: { code: "250, 480", title: "ARQUIVO PIRI_REIS_SOURCES // CONFIDENCIAL", date: "18/06/1956", content: `<p>Distorções sugerem que o mapa foi desenhado de uma projeção focada no Egito. Dados sísmicos de 1949 confirmam que a Antártida rochosa mostrada no mapa está sem gelo há 12.000 anos.</p>` },
        svalbard: { code: "svalbard_permafrost", title: "ARQUIVO SVALBARD_PERMAFOREST // CONFIDENCIAL", date: "21/06/2026", content: `<p>Tecidos de corpos congelados em 1918 contêm vírus viáveis da gripe espanhola. O derretimento do solo representa uma grave ameaça de segurança biológica.</p>` },
        ellidae: { code: "ellidae_lodge", title: "ARQUIVO ELLIDAE_LODGE // SECRETO", date: "21/06/2026", content: `<p>A cabana foi utilizada durante a Guerra Fria para escutas de submarinos soviéticos. O isolamento geográfico e magnético da ilha forneceu o refúgio perfeito.</p>` },
        boiling_amazon: { code: "boiling_water", title: "ARQUIVO BOILING_AMAZON // CONFIDENCIAL", date: "22/06/2026", content: `<p>O rio Shanay-timpishka chega a 97°C devido a fendas hidrotermais profundas. Nenhuma lenda explica como o fluxo se mantém sem fontes vulcânicas próximas.</p>` },
        zone_silence: { code: "280, 500", title: "ARQUIVO ZONE_SILENCE // CONFIDENCIAL", date: "22/06/2026", content: `<p>A queda de satélites e meteoritos na zona é impulsionada por anomalias de atração geomagnética do subsolo, causadas por ricos sedimentos de minerais condutores e magnetita.</p>` },
        oakville_blobs: { code: "300, 450", title: "ARQUIVO OAKVILLE_BLOBS // SECRETO", date: "22/06/2026", content: `<p>Análises biológicas do gel revelaram duas espécies de bactérias comuns no intestino humano, além de células biológicas complexas, apontando para testes de dispersão biológica aérea.</p>` },
        vela: { code: "250, 480", title: "ARQUIVO VELA_INCIDENT // CONFIDENCIAL", date: "22/09/1979", content: `<p>Documentos desclassificados revelaram que barcos da marinha sul-africana estavam operando em silêncio de rádio na zona do flash. Amostras de ovelhas na Austrália mostraram vestígios de iodo radioativo logo após o evento.</p>` },
        otzi: { code: "270, 500", title: "ARQUIVO OTZI_MUMMY // SECRETO", date: "19/09/1991", content: `<p>A análise forense revelou uma ponta de flecha de pedra cravada nas costas de Ötzi e cortes profundos de defesa nas mãos, provando que ele foi perseguido e assassinado em combate nas montanhas.</p>` },
        baychimo: { code: "220, 510", title: "ARQUIVO BAYCHIMO_GHOST // SECRETO", date: "24/11/1931", content: `<p>Vários avistamentos confirmam que o navio flutuou intacto por anos graças a bolsas de ar nas anteparas de carga. Ele foi visto pela última vez em 1969 congelado no mar de Beaufort.</p>` },
        somerton: { code: "300, 460", title: "ARQUIVO SOMERTON_MAN // SECRETO", date: "01/12/1948", content: `<p>Investigações de DNA em 2022 identificaram o homem como Carl Webb, um engenheiro de Melbourne. Mas o código criptografado no livro e seus laços familiares ainda levantam suspeitas de envolvimento com inteligência militar.</p>` },
        atlantis_long: { code: "360, 480", title: "ARQUIVO ATLANTIS_LOST // CONFIDENCIAL", date: "26/06/2026", content: `<p>A descrição de Platão da ilha e da catástrofe coincide de forma extraordinária com as dimensões da Estrutura de Richat e com a erupção minoica. Amostras de sedimentos indicam uma mega inundação oceânica ocorrida por volta de 9600 a.C. na região.</p>` }
    },
    en: {
        flannan: { code: "220, 520", title: "FILE FLANNAN_MÒR // CONFIDENTIAL", date: "19/12/1900", content: `<p>Investigations revealed that the logbook contained shaky notes describing fake storms during clear weather. Keeper MacArthur ran out without boots, suggesting panic or mass hysteria.</p>` },
        nazca: { code: "180, 480", title: "FILE NAZCA_GEOGLYPHS // SECRET", date: "04/09/1947", content: `<p>Nazca lines hold local magnetic anomalies. The soil has magnetized crystalline quartz. Some lines align perfectly with sightings of mysterious lights in the Andes.</p>` },
        ness: { code: "290, 600", title: "FILE LOCH_NESS_SONAR // SECRET", date: "25/08/2003", content: `<p>Sonar sweeps detected 15-meter biological bodies moving at 8 knots in the deep. Deep volcanic fissures heat the underwater caverns.</p>` },
        hope_diamond: { code: "180, 500", title: "FILE HOPE_GEM_CURSE // SECRET", date: "12/03/1911", content: `<p>The diamond was stolen from a Hindu idol. Tests reveal boron atoms emit a red glow under UV light. Curators report constant dizziness.</p>` },
        aokigahara: { code: "250, 420", title: "FILE AOKIGAHARA_SEISMIC // CONFIDENTIAL", date: "05/11/1998", content: `<p>Fuji magnetite deposits deflect compasses. Caves absorb sound. Microphones recorded infrasound under 20 Hz, known to induce fear.</p>` },
        paris_catacombs: { code: "120, 620", title: "FILE PARIS_CATACOMBS_LOST // SECRET", date: "22/10/1993", content: `<p>Police found camera footage of lost explorers and secret underground cinema rooms that vanished the next day. High levels of radon gas in the limestone.</p>` },
        bermeja: { code: "210, 420", title: "FILE BERMEJA_HYDROGRAPHIC // SECRET", date: "14/06/1997", content: `<p>Sonar revealed Bermeja mountain at 45m depth with vertical blast marks. Suggests the island was imploded to expand US oil claims.</p>` },
        heracleion: { code: "180, 520", title: "FILE THONIS_HERACLEION // SECRET", date: "15/09/2004", content: `<p>Inscriptions under the main temple warned of destruction by earth and water. Soil liquefaction sank the city so fast that treasures remained intact.</p>` },
        piri_reis: { code: "250, 480", title: "FILE PIRI_REIS_SOURCES // CONFIDENTIAL", date: "18/06/1956", content: `<p>Distortions suggest the map was drawn from Cairo. 1949 seismic data confirms Antarctica's subglacial topography matches the coast drawn in 1513, ice-free 12,000 years ago.</p>` },
        svalbard: { code: "svalbard_permafrost", title: "FILE SVALBARD_PERMAFOREST // CONFIDENTIAL", date: "21/06/2026", content: `<p>Lung tissues of bodies buried in 1918 show active Spanish Flu virus. Permafrost melting poses a severe biological hazard.</p>` },
        ellidae: { code: "ellidae_lodge", title: "FILE ELLIDAE_LODGE // SECRET", date: "21/06/2026", content: `<p>The reclusive cabin was used during the Cold War to monitor Soviet submarines in the North Atlantic, using the island's electromagnetic isolation.</p>` },
        boiling_amazon: { code: "boiling_water", title: "FILE BOILING_AMAZON // CONFIDENTIAL", date: "22/06/2026", content: `<p>Shanay-timpishka river reaches 97°C due to deep geothermal cracks. Flow rate remains unexplained without nearby active volcanoes.</p>` },
        zone_silence: { code: "280, 500", title: "FILE ZONE_SILENCE // CONFIDENTIAL", date: "22/06/2026", content: `<p>Satellite and meteorite crashes in the zone are driven by magnetic anomalies. Rich magnetite and conductive mineral deposits distort radio signals.</p>` },
        oakville_blobs: { code: "300, 450", title: "FILE OAKVILLE_BLOBS // SECRET", date: "22/06/2026", content: `<p>Biological analyses of the gel revealed two species of human gut bacteria and complex cells, hinting at aerosolized biological dispersal tests.</p>` },
        vela: { code: "250, 480", title: "FILE VELA_INCIDENT // CONFIDENTIAL", date: "22/09/1979", content: `<p>Declassified files showed South African naval activities in the area during the flash. Sheep thyroid samples in Australia showed radioactive iodine traces.</p>` },
        otzi: { code: "270, 500", title: "FILE OTZI_MUMMY // SECRET", date: "19/09/1991", content: `<p>Forensic analysis showed an arrowhead in his back and defense cuts on his hands, proving he was chased and killed in high alpine combat.</p>` },
        baychimo: { code: "220, 510", title: "FILE BAYCHIMO_GHOST // SECRET", date: "24/11/1931", content: `<p>Reports suggest air pockets kept the hull afloat. The ship was last spotted icebound in the Beaufort Sea in 1969.</p>` },
        somerton: { code: "300, 460", title: "FILE SOMERTON_MAN // SECRET", date: "01/12/1948", content: `<p>DNA tests in 2022 identified him as Carl Webb, but the code in the book and family ties to intelligence still raise suspicions.</p>` },
        atlantis_long: { code: "360, 480", title: "FILE ATLANTIS_LOST // CONFIDENTIAL", date: "26/06/2026", content: `<p>Plato's description of Atlantis matches the Richat Structure. Soil layers suggest a massive oceanic flooding event around 9600 BC.</p>` }
    },
    es: {
        flannan: { code: "220, 520", title: "ARCHIVO FLANNAN_MÒR // CONFIDENCIAL", date: "19/12/1900", content: `<p>Las investigaciones revelaron notas temblorosas sobre tormentas falsas en días claros. El guardián MacArthur salió sin botas, indicando pánico absoluto.</p>` },
        nazca: { code: "180, 480", title: "ARCHIVO NAZCA_GEOGLYPHS // SECRETO", date: "04/09/1947", content: `<p>Las líneas de Nazca tienen anomalías magnéticas. El suelo contiene cuarzo cristalino magnetizado. Algunas líneas coinciden con avistamientos ovni en los Andes.</p>` },
        ness: { code: "290, 600", title: "ARCHIVO LOCH_NESS_SONAR // SECRETO", date: "25/08/2003", content: `<p>El sonar detectó masas de 15 metros moviéndose a 8 nudos. Fendas hidrotermales en el fondo del lago alimentan la temperatura del agua.</p>` },
        hope_diamond: { code: "180, 500", title: "ARCHIVO HOPE_GEM_CURSE // SECRETO", date: "12/03/1911", content: `<p>El diamante fue robado de un templo hindú. Pruebas muestran que los átomos de boro causan el brillo rojo persistente bajo UV. Conservadores reportan mareos.</p>` },
        aokigahara: { code: "250, 420", title: "ARCHIVO AOKIGAHARA_SEISMIC // CONFIDENCIAL", date: "05/11/1998", content: `<p>Magnetita volcánica desvía las brújulas. Las cuevas absorben el sonido de forma extrema. Registros detectaron infrasonidos que causan pánico.</p>` },
        paris_catacombs: { code: "120, 620", title: "ARCHIVO PARIS_CATACOMBS_LOST // SECRETO", date: "22/10/1993", content: `<p>Se encontraron grabaciones de personas perdidas y salas de cine secretas que desaparecieron. Acumulación de gas radón radiactivo en el subsuelo.</p>` },
        bermeja: { code: "210, 420", title: "ARCHIVO BERMEJA_HYDROGRAPHIC // SECRETO", date: "14/06/1997", content: `<p>El sonar tridimensional reveló la montaña de Bermeja a 45 metros de profundidad con cortes limpios de explosiones para alterar las fronteras petroleras.</p>` },
        heracleion: { code: "180, 520", title: "ARCHIVO THONIS_HERACLEION // SECRETO", date: "15/09/2004", content: `<p>Grabados antiguos advertían sobre la destrucción por agua y sismos. La licuefacción del suelo causó un hundimiento tan rápido que conservó la ciudad.</p>` },
        piri_reis: { code: "250, 480", title: "ARCHIVO PIRI_REIS_SOURCES // CONFIDENCIAL", date: "18/06/1956", content: `<p>Distorciones apuntan a una proyección centrada en el Cairo. Mapas fuente muestran la Antártida sin hielo tal como estaba hace 12,000 años.</p>` },
        svalbard: { code: "svalbard_permafrost", title: "ARCHIVO SVALBARD_PERMAFOREST // CONFIDENCIAL", date: "21/06/2026", content: `<p>Tejidos de cuerpos enterrados en 1918 albergan el virus activo de la gripe española. El derretimiento del permafrost amenaza la seguridad biológica.</p>` },
        ellidae: { code: "ellidae_lodge", title: "ARCHIVO ELLIDAE_LODGE // SECRETO", date: "21/06/2026", content: `<p>La cabaña fue utilizada en la Guerra Fría para monitorear submarinos soviéticos, aprovechando el aislamiento de la isla de Elliðaey.</p>` },
        boiling_amazon: { code: "boiling_water", title: "ARCHIVO BOILING_AMAZON // CONFIDENCIAL", date: "22/06/2026", content: `<p>El río Shanay-timpishka alcanza 97°C debido a fallas geotermales. No se explican los flujos constantes sin fuentes volcánicas cercanas.</p>` },
        zone_silence: { code: "280, 500", title: "ARCHIVO ZONE_SILENCE // CONFIDENCIAL", date: "22/06/2026", content: `<p>Caídas de satélites y meteoritos se deben a anomalías geomagnéticas causadas por grandes depósitos de magnetita y minerales conductores.</p>` },
        oakville_blobs: { code: "300, 450", title: "ARCHIVO OAKVILLE_BLOBS // SECRETO", date: "22/06/2026", content: `<p>Análisis biológicos revelaron bacterias intestinales y células complejas en la gelatina de Oakville, indicando posibles ensayos biológicos aéreos.</p>` },
        vela: { code: "250, 480", title: "ARCHIVO VELA_INCIDENT // CONFIDENCIAL", date: "22/09/1979", content: `<p>Documentos desclasificados revelaron actividad de la marina sudafricana en la zona. Muestras de ovejas en Australia revelaron iodo radiactivo.</p>` },
        otzi: { code: "270, 500", title: "ARCHIVO OTZI_MUMMY // SECRETO", date: "19/09/1991", content: `<p>Análisis forense reveló una punta de flecha en su espalda y cortes de defensa en sus manos, probando un homicidio en las montañas.</p>` },
        baychimo: { code: "220, 510", title: "ARCHIVO BAYCHIMO_GHOST // SECRETO", date: "24/11/1931", content: `<p>Avistamientos confirman que el barco flotó intacto por años gracias a bolsas de aire en la bodega. Visto por última vez en 1969.</p>` },
        somerton: { code: "300, 460", title: "ARCHIVO SOMERTON_MAN // SECRETO", date: "01/12/1948", content: `<p>Pruebas de ADN en 2022 lo identificaron como Carl Webb, pero el código indescifrable y sus vínculos siguen bajo sospecha de espionaje.</p>` },
        atlantis_long: { code: "360, 480", title: "ARCHIVO ATLANTIS_LOST // CONFIDENCIAL", date: "26/06/2026", content: `<p>La descripción de Platón coincide con la Estructura de Richat. Sedimentos apuntan a una inundación oceânica masiva cerca del 9600 a.C.</p>` }
    }
};

// --- DATA: QUIZZES CONTENT ---
const quizzesData = {
    pt: {
        cobras: {
            title: "SOBREVIVÊNCIA NA ILHA DAS COBRAS",
            questions: [
                { q: "Você desembarcou na Ilha da Queimada Grande à noite. Qual lugar é mais seguro para acampar?", options: [{ text: "Na floresta densa sob as árvores.", correct: false }, { text: "Nas rochas abertas da costa batidas pelo vento.", correct: true }, { text: "Nas ruínas do farol antigo.", correct: false }, { text: "Perto do riacho.", correct: false }], feedback: "As cobras da ilha (Jararaca-ilhoa) são arbóreas. Ficar nas rochas reduz o risco de ataques surpresa de cima." },
                { q: "Você foi picado no braço por uma Jararaca-ilhoa. O que deve fazer imediatamente?", options: [{ text: "Fazer um torniquete apertado.", correct: false }, { text: "Chupar o veneno e cuspir.", correct: false }, { text: "Lavar com água e sabão e imobilizar o braço baixo.", correct: true }, { text: "Fazer um corte na picada.", correct: false }], feedback: "Torniquetes e cortes aumentam a necrose. Lave, acalme-se e vá ao hospital rápido." }
            ]
        },
        dyatlov: {
            title: "SOBREVIVÊNCIA NA PASSAGEM DYATLOV",
            questions: [
                { q: "Sua tenda foi rasgada de dentro para fora no frio de -30°C. O que priorizar?", options: [{ text: "Procurar botas e casacos pesados.", correct: true }, { text: "Correr descalço para a floresta.", correct: false }, { text: "Ficar esperando o amanhecer.", correct: false }], feedback: "A hipotermia mata em poucos minutos. Roupas adequadas são vitais." }
            ]
        }
    },
    en: {
        cobras: {
            title: "SNAKE ISLAND SURVIVAL",
            questions: [
                { q: "You landed on Queimada Grande Island at night. Where is the safest place to camp?", options: [{ text: "In the dense forest under trees.", correct: false }, { text: "On the open, windy coastal rocks.", correct: true }, { text: "Near the stream.", correct: false }], feedback: "Golden Lanceheads are arboreal. Coastal rocks reduce the risk of surprise attacks from above." },
                { q: "You were bitten by a Golden Lancehead. What should you do immediately?", options: [{ text: "Apply a tight tourniquet.", correct: false }, { text: "Suck the venom out.", correct: false }, { text: "Wash with water, stay calm, keep arm low.", correct: true }], feedback: "Tourniquets cause necrosis. Wash, keep calm, and seek medical help." }
            ]
        },
        dyatlov: {
            title: "DYATLOV PASS SURVIVAL",
            questions: [
                { q: "Your tent is ripped open at -30°C in the dark. What do you prioritize?", options: [{ text: "Find heavy coats and boots.", correct: true }, { text: "Run barefoot into the forest.", correct: false }, { text: "Wait inside the tent.", correct: false }], feedback: "Hypothermia kills in minutes. Getting dressed is critical." }
            ]
        }
    },
    es: {
        cobras: {
            title: "SUPERVIVENCIA EN LA ISLA DE LAS COBRAS",
            questions: [
                { q: "Has desembarcado en la Isla de Queimada Grande de noche. ¿Dónde es más seguro acampar?", options: [{ text: "En el bosque denso bajo los árboles.", correct: false }, { text: "En las rocas costeras abiertas con viento.", correct: true }, { text: "Cerca del arroyo.", correct: false }], feedback: "Las víboras de la isla son arborícolas. Las rocas abiertas reducen los ataques sorpresa desde arriba." },
                { q: "Te ha picado una víbora. ¿Qué debes hacer de inmediato?", options: [{ text: "Hacer un torniquete apretado.", correct: false }, { text: "Succionar el veneno.", correct: false }, { text: "Lavar con agua y jabón, mantener el brazo inmóvil y bajo.", correct: true }], feedback: "Los torniquetes aumentan la necrosis. Lava la zona, mantén la calma y busca ayuda médica." }
            ]
        },
        dyatlov: {
            title: "SUPERVIVENCIA EN EL PASO DYATLOV",
            questions: [
                { q: "Tu tienda se rasga a -30°C en la oscuridad. ¿Qué priorizas?", options: [{ text: "Buscar abrigos pesados y botas.", correct: true }, { text: "Correr descalzo al bosque.", correct: false }, { text: "Esperar el amanecer en la tienda.", correct: false }], feedback: "La hipotermia mata en minutos. Vestirse es vital." }
            ]
        }
    }
};

// Global references that change dynamically
let dossiers = [];
let decryptDatabase = {};
let quizzes = {};

// --- MULTILINGUAL ENGINE ---
function changeLanguage(lang) {
    const translation = uiTranslations[lang];
    if (!translation) return;

    // Save language
    localStorage.setItem("pf_lang", lang);
    document.getElementById("lang-select").value = lang;

    // Apply HTML tags
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    // Translate static strings by ID
    for (const key in translation) {
        const el = document.getElementById(key);
        if (el) {
            // Check if it's an input or textarea
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation[key];
            } else {
                el.innerHTML = translation[key];
            }
        }
    }

    // Specially translate Meta tags
    const metaDesc = document.getElementById("meta-description");
    if (metaDesc) metaDesc.content = translation.metaDescription;

    // Update global databases
    dossiers = dossiersData[lang] || dossiersData['pt'];
    decryptDatabase = decryptDatabaseData[lang] || decryptDatabaseData['pt'];
    quizzes = quizzesData[lang] || quizzesData['pt'];

    // Repopulate Dropdown
    const caseSelect = document.getElementById("case-select");
    if (caseSelect) {
        const selectedVal = caseSelect.value;
        caseSelect.innerHTML = `<option value="" id="term-select-placeholder" disabled selected>${translation.termSelectPlaceholder}</option>` +
            dossiers.map(d => `<option value="${d.id}">${d.title}</option>`).join("");
        if (selectedVal) caseSelect.value = selectedVal;
    }

    // Repopulate Forum Select Categoria
    const formCategory = document.getElementById("form-category");
    if (formCategory) {
        formCategory.innerHTML = `
            <option value="Alienígenas" id="cat-opt-1">${translation.catOpt1}</option>
            <option value="Casos Antigos" id="cat-opt-2">${translation.catOpt2}</option>
            <option value="Conspirações" id="cat-opt-3">${translation.catOpt3}</option>
            <option value="Lendas" id="cat-opt-4">${translation.catOpt4}</option>
        `;
    }

    // Translate Book Links / Titles based on Amazon Localization
    const libC1Btn = document.getElementById("lib-c1-btn");
    const libC2Btn = document.getElementById("lib-c2-btn");
    const libC3Btn = document.getElementById("lib-c3-btn");

    if (lang === 'pt') {
        if (libC1Btn) libC1Btn.href = "https://www.amazon.com.br/s?k=box+H.P.+Lovecraft&tag=planetafatosw-20";
        if (libC2Btn) libC2Btn.href = "https://www.amazon.com.br/s?k=Mysterium+Galapagos+jogo&tag=planetafatosw-20";
        if (libC3Btn) libC3Btn.href = "https://www.amazon.com.br/s?k=O+Iluminado+Stephen+King+Suma&tag=planetafatosw-20";
    } else {
        // Fallback to Amazon US for English/Spanish
        if (libC1Btn) {
            libC1Btn.href = "https://www.amazon.com/s?k=H.P.+Lovecraft+complete+fiction&tag=planetfacts-20";
            libC1Btn.innerHTML = `<i class="fa-brands fa-amazon"></i> View on Amazon`;
        }
        if (libC2Btn) {
            libC2Btn.href = "https://www.amazon.com/s?k=Mysterium+board+game&tag=planetfacts-20";
            libC2Btn.innerHTML = `<i class="fa-brands fa-amazon"></i> View on Amazon`;
        }
        if (libC3Btn) {
            libC3Btn.href = "https://www.amazon.com/s?k=The+Shining+Stephen+King&tag=planetfacts-20";
            libC3Btn.innerHTML = `<i class="fa-brands fa-amazon"></i> View on Amazon`;
        }
    }

    // Re-render dossiers on homepage
    renderDossiers();

    // Re-trigger Visitor Counter to format numbers properly
    updateCounterFormatting(lang);
}

// Helper to format counter numbers
function updateCounterFormatting(lang) {
    const counterElement = document.getElementById("visitor-count");
    if (!counterElement) return;

    const countText = counterElement.textContent;
    const digits = countText.replace(/\D/g, "");
    if (digits) {
        const num = parseInt(digits);
        const locale = lang === 'pt' ? 'pt-BR' : (lang === 'es' ? 'es-ES' : 'en-US');
        const formatted = num.toLocaleString(locale);
        const translation = uiTranslations[lang];
        counterElement.textContent = `${formatted}${translation.visitorCountSuffix}`;
    }
}

// --- INITIAL LOAD & ROUTER ---
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
        if (mobileNav) {
            mobileNav.classList.remove("open");
            if (navToggle) navToggle.querySelector("i").className = "fa-solid fa-bars";
        }

        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.add("active");
            } else {
                sec.classList.remove("active");
            }
        });

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

    const attachNavEvents = (links) => {
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = link.getAttribute("data-target");
                handleNavigation(target);
                const hash = link.getAttribute("href");
                history.pushState(null, null, hash);
            });
        });
    };

    attachNavEvents(navLinks);
    attachNavEvents(mobileLinks);

    const logoEl = document.querySelector(".logo");
    if (logoEl) {
        logoEl.addEventListener("click", () => {
            handleNavigation("home-section");
            history.pushState(null, null, "#home");
        });
    }

    const initialHash = window.location.hash;
    if (initialHash) {
        const matchingLink = document.querySelector(`.nav-link[href="${initialHash}"]`);
        if (matchingLink) {
            handleNavigation(matchingLink.getAttribute("data-target"));
        }
    }

    window.navigateToSection = handleNavigation;

    // --- LANGUAGE SELECT TRIGGER ---
    const langSelect = document.getElementById("lang-select");
    langSelect.addEventListener("change", (e) => {
        changeLanguage(e.target.value);
    });

    // Detect language on load
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang') || localStorage.getItem("pf_lang");
    if (!lang) {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith("es")) lang = "es";
        else if (browserLang.startsWith("en")) lang = "en";
        else lang = "pt";
    }
    
    // Apply detected language
    changeLanguage(lang);

    // --- INITIALIZE ENGINES ---
    initDecifrador();
    initForum();
    initArea51();
    initVisitorCounter();
});

// --- RENDER DOSSIER CARDS (HOME SECTION) ---
function renderDossiers() {
    const grid = document.getElementById("dossier-grid");
    if (!grid) return;

    // Retrieve active translations
    const lang = localStorage.getItem("pf_lang") || "pt";
    const readText = lang === 'pt' ? 'Ler Dossiê' : (lang === 'es' ? 'Leer Dosier' : 'Read Dossier');

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
                    <button class="btn btn-secondary btn-sm" onclick="openDossierModal('${item.id}')">${readText}</button>
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

    caseSelect.addEventListener("change", () => {
        const lang = localStorage.getItem("pf_lang") || "pt";
        const translation = uiTranslations[lang];

        codePrompt.style.display = "block";
        inputGroup.style.display = "flex";
        terminalInput.value = "";
        terminalInput.focus();
        terminalOutput.className = "terminal-output";

        const textCaseSelected = lang === 'pt' ? 'CASO SELECIONADO:' : (lang === 'es' ? 'CASO SELECCIONADO:' : 'CASE SELECTED:');
        const textReady = lang === 'pt' ? 'PRONTO PARA INSERÇÃO DO CÓDIGO DA CHAVE SECRETA...' : (lang === 'es' ? 'LISTO PARA LA INSERCIÓN DEL CÓDIGO DE LA LLAVE SECRETA...' : 'READY FOR SECRET KEY CODE INPUT...');
        
        terminalOutput.textContent = `> ${textCaseSelected} ${caseSelect.value.toUpperCase()}\n> ${textReady}`;
        secretDossier.style.display = "none";
    });

    const runDecryption = () => {
        const caseKey = caseSelect.value;
        const codeValue = terminalInput.value.trim();
        const lang = localStorage.getItem("pf_lang") || "pt";
        const translation = uiTranslations[lang];

        if (!caseKey) {
            printTerminal(translation.termErrCase, "error");
            return;
        }

        if (!codeValue) {
            printTerminal(translation.termErrCode, "error");
            return;
        }

        printTerminal(translation.termConn);
        btnDecrypt.disabled = true;

        setTimeout(() => {
            const caseData = decryptDatabase[caseKey];
            if (caseData && caseData.code === codeValue) {
                printTerminal(translation.termSuccess, "success");
                
                setTimeout(() => {
                    dossierTitle.textContent = caseData.title;
                    dossierDate.textContent = caseData.date;
                    dossierContent.innerHTML = caseData.content;
                    secretDossier.style.display = "block";
                    btnDecrypt.disabled = false;
                    secretDossier.scrollIntoView({ behavior: "smooth" });
                }, 1000);
            } else {
                printTerminal(translation.termFail, "error");
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
        const lang = localStorage.getItem("pf_lang") || "pt";
        const translation = uiTranslations[lang];

        if (!value) {
            output.textContent = translation.a51ErrCode;
            return;
        }

        output.textContent = translation.a51Conn;
        btnUnlock.disabled = true;

        setTimeout(() => {
            if (value === "SEGRETO51") {
                output.textContent = translation.a51Success;
                setTimeout(() => {
                    lockScreen.style.display = "none";
                    unlockedScreen.style.display = "block";
                }, 800);
            } else {
                output.textContent = translation.a51Fail;
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

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
        const response = await fetch("https://api.counterapi.dev/v1/planetafatos/website/up", {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        const data = await response.json();
        if (data && data.value) {
            const count = parseInt(data.value);
            counterElement.textContent = count.toString(); // Updated dynamically by changeLanguage
            updateCounterFormatting(localStorage.getItem("pf_lang") || "pt");
        } else {
            throw new Error("Invalid API data");
        }
    } catch (error) {
        clearTimeout(timeoutId);
        console.error("Error loading visitor counter:", error);
        
        let localHits = localStorage.getItem("pf_local_visits") || "0";
        let count = parseInt(localHits) + 1;
        localStorage.setItem("pf_local_visits", count.toString());
        
        const baseVisits = 142;
        const totalVisits = baseVisits + count;
        
        counterElement.textContent = totalVisits.toString();
        updateCounterFormatting(localStorage.getItem("pf_lang") || "pt");
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
    const lang = localStorage.getItem("pf_lang") || "pt";
    const translation = uiTranslations[lang];

    document.getElementById("quiz-progress-num").textContent = `${translation.quizProgressPrefix} ${activeQuestionIndex + 1}/${totalQuestions}`;
    
    const progressPercent = ((activeQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;

    document.getElementById("quiz-question").textContent = currentQuestion.q;

    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = currentQuestion.options.map((opt, idx) => `
        <button class="quiz-option-btn" onclick="selectQuizOption(this, ${opt.correct}, '${escapeString(currentQuestion.feedback)}')">
            <span>${opt.text}</span>
            <i class="fa-regular fa-circle"></i>
        </button>
    `).join("");
}

function selectQuizOption(buttonElement, isCorrect, feedback) {
    const options = document.querySelectorAll(".quiz-option-btn");
    options.forEach(opt => opt.disabled = true);

    const icon = buttonElement.querySelector("i");
    const lang = localStorage.getItem("pf_lang") || "pt";

    if (isCorrect) {
        buttonElement.classList.add("correct");
        icon.className = "fa-solid fa-circle-check";
        quizScore++;
    } else {
        buttonElement.classList.add("wrong");
        icon.className = "fa-solid fa-circle-xmark";
    }

    const quizBody = document.querySelector(".quiz-body");
    const feedbackBox = document.createElement("div");
    feedbackBox.className = "quiz-feedback-box";
    feedbackBox.innerHTML = `<strong>Feedback:</strong> ${feedback}`;
    quizBody.appendChild(feedbackBox);

    const nextText = lang === 'pt' ? 'Próxima Questão' : (lang === 'es' ? 'Siguiente Pregunta' : 'Next Question');
    const resultText = lang === 'pt' ? 'Ver Resultado' : (lang === 'es' ? 'Ver Resultado' : 'View Results');

    const actionBtn = document.createElement("button");
    const isLast = activeQuestionIndex === quizzes[activeQuizKey].questions.length - 1;
    actionBtn.className = "btn btn-primary";
    actionBtn.style.marginTop = "20px";
    actionBtn.innerHTML = isLast ? `${resultText} <i class="fa-solid fa-arrow-right-long"></i>` : `${nextText} <i class="fa-solid fa-arrow-right-long"></i>`;
    
    actionBtn.addEventListener("click", () => {
        feedbackBox.remove();
        actionBtn.remove();
        if (isLast) {
            showQuizResults();
        } else {
            activeQuestionIndex++;
            loadQuizQuestion();
        }
    });

    quizBody.appendChild(actionBtn);
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
    const scoreContainer = document.getElementById("result-score-container");

    const totalQuestions = quizzes[activeQuizKey].questions.length;
    scoreDisplay.textContent = quizScore;
    totalDisplay.textContent = totalQuestions;

    const lang = localStorage.getItem("pf_lang") || "pt";
    const translation = uiTranslations[lang];

    scoreContainer.innerHTML = `${translation.resultScorePrefix}<span id="result-score" class="score-highlight">${quizScore}</span>${translation.resultScoreMiddle}<span id="result-total">${totalQuestions}</span>${translation.resultScoreSuffix}`;

    if (quizScore === totalQuestions) {
        headlineDisplay.textContent = translation.resultHeadlineWin;
        descDisplay.textContent = translation.resultDescWin;
    } else if (quizScore >= 1) {
        headlineDisplay.textContent = translation.resultHeadlineWarn;
        descDisplay.textContent = translation.resultDescWarn;
    } else {
        headlineDisplay.textContent = translation.resultHeadlineLose;
        descDisplay.textContent = translation.resultDescLose;
    }
}

function restartQuiz() {
    startQuiz(activeQuizKey);
}

// Helpers
function escapeString(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

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
const defaultTheoriesData = {
    pt: [
        { nick: "Agente_X", category: "Conspirações", date: "20/06/2026", text: "Sobre Bermeja: o navio de exploração militar americano USS Pathfinder foi visto ancorado nas proximidades em 1997. Implodiram o monte de areia para mudar fronteiras de petróleo." },
        { nick: "InvestigadoraSiberia", category: "Casos Antigos", date: "19/06/2026", text: "O diário do Farol de Flannan pode ter sido escrito sob delírio de fungos do porão. Isso explica tempestades inexistentes." }
    ],
    en: [
        { nick: "Agent_X", category: "Conspiracies", date: "20/06/2026", text: "About Bermeja: USS Pathfinder was seen anchoring nearby in 1997. They imploded the island sandbar to shift US oil lines." },
        { nick: "SiberianDet", category: "Unsolved Cases", date: "19/06/2026", text: "The Flannan Lighthouse log entry might have been written under hallucinations from cellar mold spores." }
    ],
    es: [
        { nick: "Agente_X", category: "Conspiraciones", date: "20/06/2026", text: "Sobre Bermeja: el buque USS Pathfinder fue visto cerca en 1997. Implotaron la isla de arena para desplazar los límites petroleros." },
        { nick: "InvestigadoraSiberia", category: "Casos Antiguos", date: "19/06/2026", text: "El diario de Flannan pudo escribirse bajo delirios por hongos del sótano. Eso explica tormentas que no existieron." }
    ]
};

function initForum() {
    const theoryForm = document.getElementById("theory-form");
    const theoryList = document.getElementById("theory-list");
    const formNick = document.getElementById("form-nick");
    const formCategory = document.getElementById("form-category");
    const formText = document.getElementById("form-text");

    if (!theoryForm) return;

    const lang = localStorage.getItem("pf_lang") || "pt";
    let savedTheories = JSON.parse(localStorage.getItem(`planeta_fatos_theories_${lang}`));
    if (!savedTheories || savedTheories.length === 0) {
        savedTheories = [...defaultTheoriesData[lang]];
        localStorage.setItem(`planeta_fatos_theories_${lang}`, JSON.stringify(savedTheories));
    }

    const renderTheories = () => {
        theoryList.innerHTML = savedTheories.map(t => {
            let catClass = "cases";
            if (t.category.includes("Aliens") || t.category.includes("Alienígenas")) catClass = "aliens";
            if (t.category.includes("Conspiracies") || t.category.includes("Conspirações") || t.category.includes("Conspiraciones")) catClass = "conspiracies";
            
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

    theoryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nick = formNick.value.trim();
        const category = formCategory.value;
        const text = formText.value.trim();
        const activeLang = localStorage.getItem("pf_lang") || "pt";
        const translation = uiTranslations[activeLang];
        
        if (!nick || !text) return;

        const today = new Date();
        const dateStr = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth()+1).toString().padStart(2, '0')}/${today.getFullYear()}`;
        
        const newTheory = { nick, category, date: dateStr, text };
        
        savedTheories.unshift(newTheory);
        localStorage.setItem(`planeta_fatos_theories_${activeLang}`, JSON.stringify(savedTheories));
        
        formNick.value = "";
        formText.value = "";
        renderTheories();
        
        alert(translation.alertSuccessForum);
    });
}
