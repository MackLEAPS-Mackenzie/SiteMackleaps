import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PtProjects from "@/models/pt-projects";

export async function GET() {
  try {
    await dbConnect();
    const projects = await PtProjects.find({});
    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const projects = [
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Em Andamento",
        title: "Estação Meteorológica",
        body: "O sistema consiste em uma aplicação que se comunica a uma estação meteorológica e seus sensores, coletando e manipulando dados climáticos em tempo real. O sistema armazena os dados coletados em um banco de dados, oferecendo funções como filtrar e descargar os dados brutos para fim de análise. Também compõe a aplicação uma API (Application Programming Interface) que fornece dados atualizados em tempo real para uso em sistemas computacionais externos. A interface gráfica se dará através de uma página web responsiva, com a apresentação de dashboards e gráficos de análise dos dados. Os usuários do sistema deverão acessar informações climáticas do momento (temperatura, probabilidade de chuva, umidade) a partir de um dashboard em uma página web. Além disso, deve ser possível realizar download dos dados armazenados de todos os sensores da estação. O sistema deve ainda oferecer a possibilidade de filtrar a visualização e download dos dados considerando como parâmetro período, tipo de dado e extensão de arquivo que o usuário deseja. Também será possível visualizar gráficos interativos de forma simples e resumida dos históricos de chuva, umidade, velocidade do vento, temperatura. Os dados da estação meteorológica devem ser buscados e carregados no banco de dados a cada 15 minutos. Por fim, o sistema deve contar com uma área de alertas visível na página inicial informando o usuário sobre situações de risco como: temperaturas elevadas, vento forte e baixa umidade do ar. Os alertas também devem ser feitos via notificação push.",
        description:
          "Aplicação que se comunica a uma estação meteorológica e seus sensores, coletando e manipulando dados climáticos em tempo real.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Em Andamento",
        title: "Site Mackleaps",
        body: "O website do MackLeaps tem como escopo divulgar pesquisas e projetos relacionados à tecnologia, em andamento e concluídos, assim como recrutar potenciais membros e parceiros, como estudantes, empresas, instituições acadêmicas e pesquisadores com propósito similar. Para tanto, é necessário que esse sistema seja constantemente alimentado com dados atualizados, selecionados pelos administradores. Outrossim, é necessário que, além de conhecer os trabalhos realizados, os interessados também possam ter uma visão geral do laboratório, bem como conhecer a equipe e entrar em contato com o laboratório, seja para sanar dúvidas, seja para agendar visitas ou reuniões. Em seu estado atual, o website apresenta alguns problemas técnicos e de design, que dificultam ou desincentivam seu uso, como, por exemplo: a ausência de um menu principal com atalhos para todas as seções do website, agilizando a navegação; ícones estáticos e desinteressantes; textos genéricos, pouco informativos, em especial no tocante aos projetos e às pesquisas, que seriam o principal tópico do website e demandam uma seção específica e mais aprofundada; imagens pouco profissionais ou não muito relacionadas à área de tecnologia; inexistência de documentação; arquitetura totalmente centralizada, além de outros problemas a serem aprofundados mais adiante deste relatório e no decorrer do programa de Residência. Assim, tendo em vista a necessidade de se destacar entre os demais laboratórios de pesquisa na área de tecnologia, bem como evidenciar o comprometimento dos membros do laboratório, o presente projeto busca tornar o website do MackLeaps mais atraente, interessante, dinâmico, moderno, fácil de navegar (em qualquer plataforma), intuitivo e rápido, assim como facilitar a sua frequente atualização.",
        description:
          "Tem como escopo divulgar pesquisas e projetos relacionados à tecnologia e recrutar potenciais membros e parceiros.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Em Andamento",
        title: "Contador de gente",
        body: "Este projeto visa desenvolver e implementar o sistema Contador de Gente para monitoramento de pessoas no campus universitário Higienópolis da Mackenzie. O sistema coletará dados da circulação de pessoas, os armazenará em uma base de dados em nuvem e disponibilizará relatórios personalizados através de uma aplicação web, transformando dados em informações úteis e com possibilidades de personalização. O objetivo é fornecer informações em tempo real para auxiliar professores, coordenadores, equipes de segurança e outros membros do corpo administrativo da universidade na tomada de decisões relacionadas à segurança, organização e gestão do campus. Através do servidor local, onde serão centralizados os vídeos capturados pelas ESP-32-CAMs, o sistema deve ser capaz de processar as imagens (vídeos) por meio do OpenCV para gerar informações. Além disso, será composto pelos seguintes servidores: Servidor de captura de imagens, Servidor de processamento de imagens, Servidor de banco de dados e Servidor de aplicação web, o tipo de servidor poderá ser local (Windows Server, Ubuntu Server, CentOS, ou Nuvem). A aplicação web e o dashboard são componentes cruciais para apresentar as informações coletadas de forma acessível e útil. Esses requisitos detalham as funcionalidades necessárias para a interface web. Com relação ao desempenho, o sistema deve fornecer uma resposta em tempo real ao acessar o dashboard ou gerar relatórios, com um tempo de resposta máximo de 2 segundos para qualquer ação do usuário. Por fim, o sistema deve ser configurado para realizar backups regulares dos dados armazenados em caso de falhas ou perda de dados.",
        description:
          "Tem como objetivo a contagem do número de pessoas que entram nos prédios do campus universitário Higienópolis da Mackenzie.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Em Andamento",
        title: "Oriente 2.0",
        body: "O oriente é um sistema de submissão/acompanhamento de TCC em que os professores são capazes de acompanhar o TCC de seus alunos e avaliar projetos de outros orientadores quando sua avaliação for solicitada. Em uma visão geral, o oriente permite uma melhor visualização para professores e alunos sobre seus TCCs. O sistema contará com os seguintes usuários: professor coordenador, professor orientador, professor avaliador, professor suplente e aluno. O professor coordenador é capaz de deletar projetos, resetar senhas, remover pessoas e ativar o evento de sessão de poster. O professor orientador é capaz de aceitar projetos submetidos pelos alunos, agendar avaliação e tem acesso ao projeto e seus orientados. O professor avaliador aceita quando for solicitado como avaliador de um projeto, visualiza os projetos que vai avaliar e submete notas para os projetos avaliados. O professor suplente aceita quando for solicitado como suplente de um projeto, visualiza os projetos que vai avaliar e submete notas para os projetos avaliados (a avaliação do suplente só é requisitada se um avaliador não submeter sua nota). Por fim, os alunos  visualizam seus projetos e aceitam caso sua participação em um projeto seja solicitada.",
        description:
          "É um sistema de submissão/acompanhamento de TCC que permite melhor visualização para professores e alunos sobre seus projetos.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "AR-TWO",
        body: "Aplicativo para identificação de transtornos no pulmão, através de um mecanismo de sopro que fornece, além de diagnósticos, tratamentos.",
        description:
          "Aplicativo para identificação de transtornos no pulmão, através de um mecanismo de sopro que fornece, além de diagnósticos, tratamentos.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "IDT",
        body: "Modelo de processo para triagem de alunos com sinais de Transtorno do Espectro do Autismo e de Deficiência Intelectual.",
        description:
          "Modelo de processo para triagem de alunos com sinais de Transtorno do Espectro do Autismo e de Deficiência Intelectual.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "ISMF",
        body: "Sistema de Criação do Índice de Sustentabilidade da Universidade Presbiteriana Mackenzie.",
        description:
          "Sistema de Criação do Índice de Sustentabilidade da Universidade Presbiteriana Mackenzie.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "Tagarela",
        body: "Ferramenta de validação digital para a identificação precoce de déficits de linguagem em crianças.",
        description:
          "Ferramenta de validação digital para a identificação precoce de déficits de linguagem em crianças.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "Plataforma de força",
        body: "Avaliação do equilíbrio postural de seres humanos por meio de uma plataforma de força.",
        description:
          "Avaliação do equilíbrio postural de seres humanos por meio de uma plataforma de força.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "Mackenzie voluntário",
        body: "Plataforma Web para o Mackenzie Voluntário que visa o cadastro de projetos e dos participantes de ações sociais.",
        description:
          "Plataforma Web para o Mackenzie Voluntário que visa o cadastro de projetos e dos participantes de ações sociais.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "Latin Project",
        body: "Plataforma para disponibilização gratuita de livros eletrônicos feitos por professores e autores locais na América Latina.",
        description:
          "Plataforma para disponibilização gratuita de livros eletrônicos feitos por professores e autores locais na América Latina.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Concluído",
        title: "Computador de bordo",
        body: "Aplicação para o Controle do Carro Elétrico, protótipo ultraeficiente movido a energia elétrica desenvolvido pela Escola de Engenharia do Mackenzie.",
        description:
          "Aplicação para o Controle do Carro Elétrico, protótipo ultraeficiente movido a energia elétrica desenvolvido pela Escola de Engenharia do Mackenzie.",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Em Andamento",
        title: "Atlas",
        body: "O Atlas das Américas é uma iniciativa digital que visa oferecer um recurso centralizado e confiável para informações relacionadas a leis e regulamentações fronteiriças em todo o continente americano. Este site é especialmente projetado para atender às necessidades de profissionais que trabalham em serviços de fronteira, fornecendo acesso fácil a dados atualizados e relevantes para a gestão de fronteiras e processos de imigração.",
        description:
          "O Atlas das Américas é uma iniciativa digital que visa oferecer um recurso centralizado e confiável para informações relacionadas a leis e regulamentações fronteiriças em todo o continente americano. ",
      },
      {
        img: "/code.jpeg",
        date: "10 Jan. 2023",
        status: "Em Andamento",
        title: "Painel - Carro elétrico",
        body: "O carro elétrico é um projeto da UPM que conta com alunos de diversos cursos da escola de Engenharia. Consiste na fabricação de um carro que permita alcançar a eficiência energética, utilizando-se de técnicas e conhecimentos das áreas da mecânica, elétrica, eletrônica, programação, entre outras. O objetivo é a participação na Shell Eco-marathon, que é um programa acadêmico global focado em eficiência energética e uma das principais competições de estudantes de engenharia do mundo. Além da estrutura mecânica e elétrica, o carro usa sensores que permitem o monitoramento do consumo de corrente e tensão, temperatura e velocidade do carro. Estes dados são disponibilizados em um painel; uma aplicação desenvolvida para um smartphone que é fixado no volante do carro para que o piloto possa acompanhar o desempenho do veículo de acordo com suas ações. Toda comunicação entre o Arduino e a aplicação é feita via cabo USB, em protocolo serial UART (Universal Asynchronous Receiver-Transmitter). Os dados dos sensores após tratamento são empacotados em uma string em formato JSON, e enviadas para aplicação que recebe esta string e mostra os valores.",
        description:
          "Consiste na fabricação de um carro que permita alcançar a eficiência energética, utilizando-se de técnicas e conhecimentos das áreas da mecânica, elétrica, eletrônica, programação, entre outras.",
      },
    ];
    await PtProjects.insertMany(projects);
    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
