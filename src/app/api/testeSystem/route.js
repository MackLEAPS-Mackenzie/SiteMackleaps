import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PtSystems from "@/models/pt-systems";

export async function GET() {
  try {
    await dbConnect();
    const systems = await PtSystems.find({});
    return NextResponse.json(systems);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const systems = [
      {
        title: "Oriente 1.0",
        description:
          "O Oriente é um sistema de acompanhamento do processo de TCC (Trabalho de Conclusão de Curso) da FCI/Mackenzie, no qual alunos e professores interagem digitalmente e fazem a gestão de atividades envolvidas neste contexto. O sistema permite o cadastro de projetos de TCC, estabelece vínculos entre orientandos e orientadores, gerencia o agendamento de bancas e seções de pôsteres, além de permitir o registro das avaliações e comentários. O Oriente 1.0 permite uma melhor visualização e gestão do processo de cadastro de projetos de TCC para coordenadores, docentes e discentes sobre a produção de TCCs na FCI.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Maria Amélia Eliseo - Coordenador / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / Jose Eduardo Bernardino Jorge / Lucas Ellery Viana",
        link: "",
      },
      {
        title: "Oriente 2.0",
        description:
          "O Oriente é um sistema de acompanhamento do processo de TCC (Trabalho de Conclusão de Curso) da FCI/Mackenzie, onde alunos e professores interagem digitalmente durante o processo. Na versão 2.0 o Laboratório MackLeaps propôs um redesign da interface, melhorando os aspectos de usabilidade, responsividade e a experiência do usuário. Além disso, foram realizadas melhorias na arquitetura da aplicação, como refatoração, respeitando padrões de projeto e de orientação a microsserviços. Novas funcionalidades foram introduzidas como o agendamento de bancas, avaliações dos artigos e os documentos de participação nas avaliações.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Maria Amélia Eliseo - Coordenador / Ivan Carlos Alcantara de Oliveira / Luiz Carlos Machi Lozano / Thiago Graziani Traue.",
        link: "https://mackleaps.mackenzie.br/oriente",
      },
      {
        title: "GitBook",
        description:
          "Os alunos do Programa de Residência de Software - MackLeaps são motivados a desenvolver conteúdos durante a execução dos projetos, na modalidade PBL. Os conteúdos disponibilizados são utilizados pelos novos residentes para ajudar no enfrentamento dos desafios ao longo do programa.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Desenvolvimento",
        members: "",
        link: "https://lab-mackleaps.gitbook.io/residencia-de-software-macklaeps-upm-fci/",
      },
      {
        title: "Redmine",
        description:
          "É um sistema gerenciador de projetos baseados na web e ferramenta de gerenciamento de bugs. Ele contém calendário e gráficos de Gantt para ajudar na representação visual dos projetos e seus deadlines.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Desenvolvimento",
        members: "",
        link: "https://mackleaps.mackenzie.br/redmine",
      },
      {
        title: "Carrossel Informativo FCI",
        description:
          "Projeto certificado pela coordenadora Daniela Vieira Cunha em 08/05/2024.  Tem por objetivo o desenvolvimento de uma plataforma digital de comunicação para divulgação de Eventos e Atividades da FCI Faculdade de Computação e Informática, compreendendo tanto o módulo de visualização quanto o de gestão. A apresentação das informações é feita por uma aplicação do tipo carrossel executada em uma Smart TV localizada na entrada do Prédio da FCI Os conteúdos apresentados são visualizados diariamente por mais de 1300 pessoas, entre alunos, professores e outros acadêmicos transitam pelo local. Entre os informativos apresentados nesta mídia estão chamadas para palestras, treinamentos, eventos internos e externos, ações de recrutamento, divulgação de editais e projetos de pesquisa, além do dashboard com os dados ao vivo do projeto Estação Meteorológica Mackenzie. O módulo de gerenciamento do Carrossel é dado por uma aplicação web hospedada na MackCloud (ambiente em nuvem on-premise), permitindo fazer a gestão dos conteúdos com praticidade e agilidade.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Daniela Vieira Cunha - Coordenador / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Maria Amélia Eliseo / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz.",
        link: "https://mackleaps.mackenzie.br/back-carrossel/",
      },
      {
        title: "Site Mackleaps",
        description:
          "O Laboratório MackLeaps (Laboratório de Estudos em Ambiente de Produção de Software) é a residência do grupo de pesquisa MackLeaps. Os pesquisadores associados desenvolvem projetos de software, de caráter aplicado, que integram conhecimentos das áreas de Engenharia de Software, Inteligência Artificial e Interação Humano-Computador. Assim há necessidade de registrar e difundir informações das atividades realizadas pelo grupo, tais como os projetos concluídos ou em andamento, as atividades realizadas pelo grupo de pesquisa e seu legado. O objetivo deste projeto foi a concepção e desenvolvimento de um website bilingue do Laboratório, que permita estabelecer uma identidade visual para o grupo, além de apesentar e gerenciar os conteúdos ligados ao MackLeaps.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Maria Amélia Eliseo - Coordenador / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Marcilyanne Moreira Gois / Ivan Carlos Alcantara de Oliveira / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / Jose Eduardo Bernardino Jorge / Lucas Ellery Viana / João Pedro Rodrigues Vieira / Pedro Henrique Araujo Farias.",
        link: "https://mackleaps.mackenzie.br/",
      },
      {
        title: "Contador de gente",
        description:
          "A segurança é um ponto de interesse para todos que vivem em aglomerados sociais. Entender fluxos e comportamentos de pessoas que transitam em espaços externos e internos pode contribuir com decisões mais assertivas neste contexto. Este projeto objetiva desenvolver uma ferramenta automática que, empregando técnicas de visão computacional e inteligência artificial, seja capaz de detectar e identificar pessoas em espaços típicos aos ambientes urbanos. Essa capacidade de diferenciar os indivíduos em relação aos demais elementos do ambiente é essencial a tarefas como a contagem de pessoas que circulam em prédios, análise de fluxo entre corredores e vias de uma exposição, preferências de circulação, assim como, identificar circulação em horários não convencionais, movimentação anômala e o humor de visitantes, entre outros. A plataforma implementa todas as etapas do pipeline de dados e as informações produzidos são disponibilizados em Dashboard apropriado para este contexto de aplicação. Todas as questões que envolvem a LGPD são consideradas pelo projeto.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Maria Amélia Eliseo / Daniela Vieira Cunha / Leandro Carlos Fernandes - Coordenador / Ivan Carlos Alcantara de Oliveira / Elieder Damasceno Sousa / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / João Ricardo de Lima Bonifácio / Jose Eduardo Bernardino Jorge / Bruno Seki Schenberg / Gabriel da Silva Morishita Garbi / Leonardo Santos Rocha.",
        link: "",
      },
      {
        title: "Estação Meteorológica",
        description:
          "No contexto das cidades resilientes, informações situacionais são essenciais para subsidiar a tomada de decisão, principalmente em eventos que o tempo é fator determinante para evitar consequências danosas a população que vive nos aglomerados suscetíveis impactos ambientais. Dados climáticos são fundamentais para contribuir na tomada de decisões mais assertivas, em tempo de evitar ou minimizar impactos negativos. Este projeto busca propor e desenvolver uma arquitetura computacional capaz de orquestrar ações de coleta, análise, divulgação e compartilhamento de dados climáticos oriundos das estações meteorológicas implantadas intra e extra campus da Universidade Presbiteriana Mackenzie, formando uma rede de sensores meteorológicos.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes - Coordenador / Maria Amélia Eliseo / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elieder Damasceno Sousa / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / João Ricardo de Lima Bonifácio / Alan Gleizer / Marcelo Gonzatto Birkan",
        link: "https://mackleaps.mackenzie.br/dashboard-estacao/",
      },
      {
        title: "API - Estação Meteorológica",
        description:
          "API para coleta e distribuição de dados meteorológicos das estações da Universidade Presbiteriana Mackenzie campus Higienópolis.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Desenvolvimento",
        members: "",
        link: "https://mackleaps.mackenzie.br/meteorologiaapi-docs/#",
      },
      {
        title: "Polos Varejistas de Rua de São Paulo",
        description:
          "A pesquisa objetiva conhecer os locais de concentração de varejo de rua, suas dinâmicas e a relação que estabelecem com a cidade. A partir do mapeamento de setores varejistas aponta polos e os classifica em 3 níveis vinculados por setor de atividade. O mapeamento conflui ao Banco de dados, procede análises e apresenta indicadores. A pesquisa intenciona metrificar índices de Urbanidade nos Polos de Varejo através de atributos de conectividade, diversidade e conforto.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Maria Amélia Eliseo / Cassia Regina Mariano / Larissa G. Campagner / Cecilia Pisetta / Felipe Cavalheiro dos Anjos / Valter Luis Caldana Junior - Coordenador.",
        link: "https://mackleaps.mackenzie.br/acsp",
      },
      {
        title: "Mack-RAG - SAGUI",
        description:
          "SAGUI - Sistema de Auxílio a Gestão Universitária Inteligente. A Universidade dispõe de um compêndio de documentos que regem, regulamentam e normatizam as diversificadas atividades acadêmicas que envolvem sua comunidade nos âmbitos de ensino, pesquisa e extensão. Para os acadêmicos conhecerem ou mesmo buscarem por informações específicas em meio aos vários documentos e suas atualizações pode ser uma tarefa demorada e difícil. A proposta deste projeto é construir um sistema do tipo RAG (Retrieval-Augmented Generation) para auxiliar na comunicação acadêmica, capaz de informar sobre regras, determinações, prazos, responsabilidades e atividades no âmbito da universidade, através de uma interface mais amigável e de comunicação em linguagem natural.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes - Coordenador / Elisangela Botelho Gracias / Maria Amélia Eliseo / Luiz Carlos Machi Lozano / Thiago Graziani Traue.",
        link: "",
      },
      {
        title: "Auditório Inteligente",
        description:
          "Projeto certificado pela coordenadora Daniela Vieira Cunha em 08/05/2024. Existem várias situações que podemos observar quando vamos a um evento. Iniciando com a divulgação do evento, a inscrição para uma vaga, as recomendações prévias como horário de chegada, se podemos consumir alimentos etc. Existem aplicativos que podem servir de referência como é o caso do Meet-up e o Sympla. Também temos auditórios físicos e virtuais. Como podemos melhorar a experiência dos usuários nos momentos que antecedem um evento? O objetivo deste projeto é estudar formas de melhorar a experiência do usuário no contexto de eventos utilizando recursos computacionais para esta finalidade.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha - Coordenador / Elisangela Botelho Gracias / Maria Amélia Eliseo / Thiago Graziani Traue.",
        link: "",
      },
      {
        title: "Jardinagem Virtual Um Entreposto",
        description:
          "Projeto certificado pelo coordenador Ivan Carlos Alcântara de Oliveira em 26/04/2024. Este projeto é uma iniciativa de colaboração com a startup Um Entreposto e cuja parceria com o Laboratório se dá no desenvolvimento de novas funcionalidades para o e-commerce de itens de jardinagem desta empresa. Entre as características operacionais estão a identificação de plantas por meio de técnicas de Inteligência Artificial e a manutenção de um repositório de opções contendo, inclusive, alternativas para exemplares pesquisados.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Leandro Carlos Fernandes / Maria Amélia Eliseo/ Ivan Carlos Alcantara de Oliveira - Coordenador/ Luiz Carlos Machi Lozano",
        link: "",
      },
      {
        title: "Projeto APO-PPGCA",
        description:
          "Entre as demandas de um programa de pós-graduação stricto-sensu, as Atividades Programadas Obrigatórias (APO) figuram entre os requisitos necessários para a obtenção dos títulos de Mestre ou Doutor. O objetivo deste projeto é desenvolver uma aplicação capaz de gerenciar o processo de avaliação de APOs no âmbito do PPGCA/FCI/UPM e que servirá de test-bed para o estudo de padrões arquiteturais orientados a eventos que colaboram na definição de pilares de desenvolvimento dos produtos gerados na Residência de Software.",
        situation: "Situação: Em andamento",
        natureza: "",
        members:
          "Integrantes: Fábio Silva Lopes / Maria Amélia Eliseo - Coordenador / Alvaro Hibide Claver / Marcelo Hideki Ogushi Carrera",
        link: "",
      },
      {
        title: "Cockpit - Carro de eficiência energética para competição",
        description:
          "Projeto certificado pelo coordenador Fábio Raia em 26/04/2024. A Liga Estudantil do Carro Elétrico, vinculada ao curso de Engenharia Mecânica da Escola de Engenharia Mackenzie, dispõe de um veículo de tração elétrica e controle eletrônico próprio, construído sob um chassi tubular de alumínio e com carenagem em fibra de carbono. As atividades da Liga exploram as capacidades teóricas e práticas dos estudantes, em questões que envolvem tanto a concepção de soluções quanto a execução e testes de condicionamento. Nesse contexto, o objetivo deste projeto é colaborar com a Liga Estudantil do Carro Elétrico no desenvolvimento de um sistema embarcado que sirva como um cockpit para monitorar o estado do veículo e dar apoio a sua dirigibilidade.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Desenvolvimento",
        members:
          "Integrantes: Fábio Silva Lopes / Fabio Raia - Coordenador / Leandro Carlos Fernandes / Elieder Damasceno Sousa.",
        link: "",
      },
      {
        title: "Sistema de Informação em Vigilância Sanitária",
        description:
          "Sistema de informação cuja finalidade é cadastrar os estabelecimentos alvo de atuação da vigilância sanitária no estado de São Paulo, bem como as inspeções sanitárias neles realizadas.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Desenvolvimento",
        members: "Integrantes: Fábio Silva Lopes - Coordenador",
        link: "",
      },
      {
        title: "Digital Twin Mackenzie Campus Higienópolis",
        description:
          "O termo Living Lab refere-se a uma abordagem de pesquisa que envolve a colaboração entre os usuários finais, pesquisadores e outras partes interessadas na criação, desenvolvimento e teste de soluções inovadoras para problemas do mundo real. A ideia é que o ambiente real seja usado como laboratório para testar ideias e soluções, em vez de um ambiente controlado de laboratório. Contudo, experimentos podem coletar dados do mundo real para inserir em um modelo digital que permite reproduzir simulações de eventos que são difíceis de reproduzir em ambiente real. Gêmeos Digitais (ou Digital Twins) são representações digitais de algo físico. Existem várias aplicações e vantagens de uso desta tecnologia que pode funcionar como um dashboard geográfico para monitorar, simular, avaliar, explorar ou prever eventos em cidades. Nesta perspectiva, o projeto objetiva desenvolver um Digital Twin do campus Higienópolis como plataforma base de apoio para experimentos de Living Labs, como plataforma interoperável, capaz de integrar dados de diversas aplicações voltadas para o campus, bem como, propiciar a implementação de novos experimentos com dependência da variável geográfica.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes - Coordenador / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Maria Amélia Eliseo / Ivan Carlos Alcantara de Oliveira",
        link: "",
      },
      {
        title: "Living Lab Mackenzie",
        description:
          " Implementação de plataforma computacional para coleta, armazenamento e análise de dados de sensores para monitoramento de atividades em ambientes físicos.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes - Coordenador / Maria Amélia Eliseo / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Marcilyanne Moreira Gois / Bruno da Silva Rodrigues.",
        link: "",
      },
      {
        title: "Smart Campus",
        description:
          "Este é um estudo e implantação de sensores para medição, análise e geração de indicadores para tomada de decisão em um campus universitário. Como base de testes está sendo utilizado o campus Higienópolis da UPM. No momento estão sendo coletados dados ambientais, temperatura, umidade, CO2, velocidade do vento, entre outros, por meio de sensores, que geram uma massa de dados que é exportada para um repositório, que será utilizado como fonte de análises exploratórias e preditivas. Atualmente analisa-se a qualidade dos dados gerados e está se definindo a modelagem dos indicadores que serão calculados com base nos dados coletados.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes - Coordenador / Maria Amélia Eliseo / Ana Claudia Rossi / Daniela Vieira Cunha.",
        link: "",
      },
      {
        title:
          "Objetos de aprendizagem para apoio em práticas de residência de software MackLeaps",
        description:
          "Este projeto objetiva estruturar e implantar uma plataforma de aprendizagem para desenvolver níveis de maturidade dos alunos em habilidades da área de Engenharia de Software e Interação Humano-Computador, considerando a imersão em projetos reais oriundos de parcerias com organizações, de modo a promover o estudo, validação e avaliação de práticas e habilidades, bem como, da pesquisa com foco em melhoria de processos e produtos de software.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes - Coordenador / Maria Amélia Eliseo / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Regiane Moreno / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Marcilyanne Moreira Gois / Renata Maria Nogueira de Oliveira.",
        link: "",
      },
      {
        title: "Criação de Índice de Sustentabilidade Mackenzie-FIESP",
        description:
          "O problema de pesquisa proposto é a Criação do Índice de Sustentabilidade Mackenzie-FIESP, em uma parceria entre a Universidade Presbiteriana Mackenzie e a Federação das Indústrias do Estado de São Paulo - FIESP. O objetivo da pesquisa é a criação de um índice de sustentabilidade que permita identificar o resultado de ações empresariais voltadas para a mitigação de impactos sociais e ambientais de suas atividades. O índice sustentabilidade será composto por indicadores econômicos, ambientais, sociais e de governança (econômicos + Environmental, Social and Governance / ESG) e servirá como instrumento de medida para as empresas identificarem, projetarem, avaliarem e tomarem decisões em relação às suas práticas sustentáveis. Com apoio de uma fundamentação teórica, e com base nas diretrizes do Global Reporting Initiative (GRI), o Índice Mackenzie-FIESP poderá ter reconhecimento internacional, e assim servir de base para políticas governamentais orientadas às boas práticas de sustentabilidade. Em termos de objetivos específicos, as fases abaixo estão em andamento (algumas já concluídas): 1. Desenvolvimento de uma fundamentação teórica/prática para implementação do projeto; 2. Construção de uma base de dados econômicos, ambientais, sociais e de governança das empresas brasileiras em parceria com a FIESP (coleta e transferência de dados). Estes dados deverão ser coletados, tratados e preparados para armazenamento em um repositório, onde estarão disponíveis para serem submetidos a análises exploratórias; 3. Quantificação de indicadores econômicos, ambientais, sociais e de governança, fundamentados na base de dados gerada no passo 2; 4. Operacionalização de um sistema de indicadores de sustentabilidade de forma que possa ficar disponível para consulta pelas empresas participantes; 5. Desenvolvimento de painéis que permitam a simulação de cenários, de forma que as empresas participantes possam testar alternativas de alterações em seus indicadores, de modo a subsidiar suas decisões na busca de novos patamares para seus próprios índices de sustentabilidade. Este é um projeto interdisciplinar em parceria com o Centro de Ciências Sociais e Aplicadas.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Arnaldo Rabello de Aguiar Vallim Filho - Coordenador / Leandro Augusto da Silva / Luis Carlos Jacob Perera.",
        link: "",
      },
      {
        title:
          "Análise Preditiva Baseada em Inteligência para Sistemas Supervisórios de Usinas Hidrelétricas",
        description:
          "O Objetivo Geral deste projeto de P&D é o planejamento e desenvolvimento de um experimento de pesquisa voltado para a construção de uma modelagem matemática que possibilite estabelecer novos parâmetros e métricas de operação e manutenção para usinas hidrelétricas com lagos de reserva, buscando o ponto ótimo operacional, considerando o volume de água dos reservatórios para consumo humano, sustentabilidade ambiental, geração e disponibilidade de energia, através de modelos matemático-computacionais preditivos avançados. O produto final da pesquisa será um protótipo de uma ferramenta computacional preditiva de incidentes, voltada para a otimização do processo de programação de manutenção de turbinas. A modelagem preditiva estará suportada por técnicas avançadas de Inteligência Artificial e será implementada computacionalmente, de forma que esteja ao final do projeto avaliada em ambiente de testes, tendo demonstrado uma adequada evolução em termos de desempenho da modelagem desenvolvida.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Arnaldo Rabello de Aguiar Vallim Filho - Coordenador / Leandro Augusto da Silva / Dirceu Matheus Junior / Orlando Bisacchi Coelho / Jamilson Bispo dos Santos / Eduardo Mayer Fagundes.",
        link: "",
      },
      {
        title: "Avaliação do Equilíbrio Postural de Seres Humanos",
        description:
          "Promove a avaliação do equilíbrio corporal por meio de uma plataforma de força de baixo custo. A manutenção do equilíbrio corporal durante a postura ereta é considerada uma tarefa complexa do ponto de vista do controle motor, além de se tratar de uma das mais importantes habilidades motoras para seres humanos executarem atividades cotidianas. Controlar o equilíbrio em atividades como andar, subir escadas, correr ou simplesmente permanecer em pé, leva a necessidade de modificações constantes nos padrões de movimento que variam entre gênero. O presente estudo pretende confeccionar uma plataforma de força, para avaliação do equilíbrio, com materiais de baixo custo e que sejam disponíveis no mercado nacional. Após o desenvolvimento do equipamento, pretende-se realizar testes iniciais para verificação do funcionamento adequado da plataforma, por meio da avaliação do equilíbrio postural de jovens.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Ana Claudia Rossi / Silvana Maria Blascovi de Assis / Fabio Raia - Coordenador / Denise Loureiro Viana / Fernanda Simeão Costa / Julia Camargo Marcondes dos Santos / Rosangela Gumaraes Romano / Janina Mazieri Prado Rico / Bianca de Mello Pires / Raquel Cymrot / Gabriel Melo Francisco Correia",
        link: "",
      },
      {
        title:
          "Otimização de Dirigibilidade e Monitoramento de um protótipo de Veículo Elétrico",
        description:
          "Este é um projeto em parceria com a Escola de Engenharia que desenvolve um protótipo de veículo elétrico, que já vem inclusive, atuando em competições ao redor do mundo. A participação da área de computação, envolvendo um docente deste programa de mestrado diz respeito ao estudo para implantação de sensores no veículo visando a obtenção de dados que permitam otimizar a dirigibilidade do veículo. De modo complementar estão sendo coletados dados para geração e análise de indicadores elétricos para monitoramento contínuo do veículo elétrico.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Ana Claudia Rossi / Fabio Raia - Coordenador.",
        link: "",
      },
      {
        title: "Estudo sobre Evasão de Alunos em Cursos de Nível Superior",
        description:
          "Este projeto objetiva estudar os diversos aspectos que impactam na vida acadêmica dos alunos de graduação, englobando os motivadores de evasão.",
        situation: "Situação: Concluído",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes - Coordenador / Argemiro Severiano",
        link: "",
      },
      {
        title: "Documentação digital do patrimônio",
        description:
          "Documentação digital do patrimônio: Um modelo tridimensional e temporal para o campus Mack-Itambé. Esta pesquisa tem por objetivo o desenvolvimento e implementação de um modelo tridimensional associado a um banco de dados com características espaço-temporal para o campus Mackenzie Itambé, delimitado aos prédios 1-Edifício Mackenzie e 2-Biblioteca George Alexander possibilitando navegação por espaços, bem como, acesso a informações relacionadas com a transformação destes edifícios através do tempo.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Maria Amélia Eliseo / Ismar Frango da Silveira - Coordenador / Beatriz de Almeida Pacheco.",
        link: "",
      },
      {
        title: "IntegraEPI",
        description:
          "A proposta deste projeto de pesquisa é contribuir para a modernização do sistema de vigilância epidemiológica, com ênfase na melhoria da qualidade da informação, comparando resultados de simulações detalhadas com o padrão experimental observado para o espalhamento de uma epidemia, tanto temporal como geográfico, através do desenvolvimento de algoritmos e software interativos que utilizam modelos preditivos do comportamento espaço-temporais de epidemiologia em ambiente de grid computacional.",
        situation: "Situação: Em andamento",
        natureza: "Natureza: Pesquisa",
        members:
          "Integrantes: Fábio Silva Lopes / Denise Stringhini / Hermes Senger / Fabricio Alves Barbosa da Silva - Coordenador.",
        link: "",
      },
    ];
    await PtSystems.insertMany(systems);
    return NextResponse.json(systems);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}