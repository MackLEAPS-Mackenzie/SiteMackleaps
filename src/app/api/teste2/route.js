import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PtNews from "@/models/pt-news";

export async function GET() {
  try {
    await dbConnect();
    const news = await PtNews.find({});
    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const news = [
      {
        img: "/code.jpeg",
        date: "20 Mai. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Lançamento - Livros 2024",
        description:
          "Esta notícia promove a divulgação dos mais novos livros lançados no dia 29/05/2024 com autoria de alguns professores da FCI.",
        body: {
          __html:
            "<p>Esta notícia promove a divulgação dos mais novos livros lançados com autoria de alguns professores da FCI. A <b>O lançamento ocorreu no dia 27 de maio de 2024 juntamente com a Editora Mackenzie</b> e o <b>Programa de Pós-Graduação em Computação Aplicada. </b>Seguem abaixo os respectivos lançamentos:</p><br><p><b>1 - Introdução às séries temporais</b> - Uma abordagem prática em Python.</p><p><b>Autores:</b> Rogério de Oliveira, Orlando Yesid Esparza Albarracin e Gustavo Rocha da Silva.</p><p><b>Editora:</b> Editora Mackenzie</p><br><p><b>2 - Introdução à ciência de dados e sistemas interativos: </b> Uma abordagem aplicada</p><p><b>Autores: </b>Ana Grasielle Dionísio Corrêa, Arnaldo Rabello de Aguiar Vallim Filho, Maria Amelia Eliseo, Valéria</p><p><b>Editora:</b> LF Editorial</p><br><p><b>3 - Análise e modelagem estatística para iniciantes: </b>Aplicações em R</p><p><b>Autor: </b>Arnaldo Rabello Aguiar Vallim Filho</p><p><b>Editora: </b>LF Editorial</p><br><img src='/livros.jpg' alt='Livros'>",
        },
      },
      {
        img: "/code.jpeg",
        date: "20 Mai. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Inscrições encerradas - Iniciação Científica",
        description: "",
        body: {
          __html:
            "<p>As inscrições para o programa de Iniciação Científica encontram-se abertas. Inscreva-se entre às 8h do dia 06 de março de 2024 até o dia 30 de abril de 2024!</p><br><p><b>Documentos e inscrição:</b></p><br><p>1 - Preenchimento dos formulários de inscrição no sistema</p><br><p>2 - Projeto de pesquisa completo sem identificação dos autores, conforme template disponibilizado pela Coordenadoria de Fomento à Pesquisa (CFP);</p><br><p>3 - Link do Currículo Lattes do aluno para ser consultado pela Coordenadoria de Fomento à Pesquisa (CFP);</p><br><p>4 - Histórico acadêmico para discentes cursando a partir do 2o. semestre e comprovante dos componentes curriculares em curso para discentes do 1o. semestre;</p><br><p>5 - Anuência e aprovação do orientador, constando o respectivo link para o Currículo Lattes e identificação ORCID.</p><br><p><b>Inscreva-se como aluno:</b></p><a href='https://forms.office.com/r/cgLgYD0DRQ' target='_blank'>Inscrição aluno(a)</a><br><br><p><b>Inscreva-se como orientador:</b></p><a href='https://forms.office.com/r/qmrqZdCNPs' target='_blank'>Inscrição orientador(a)</a><br><br><p><b>Para mais informações, leia o edital completo:</b></p><a href='https://drive.google.com/file/d/1gmVvhOqoHJ3KEeKZsB-cbYxtElOx4LXP/view?usp=drive_link' target='_blank'>Edital completo</a><br><br><p><b>Consulte a lista com as áreas de atuação dos orientadores:</b></p><a href='https://drive.google.com/file/d/1u8e79X2kmc1o2_Hkupa6Uia1wYY352Mn/view?usp=sharing' target='_blank'>Áreas de atuação</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "13 Mar. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Edital - Iniciação Científica",
        description:
          "Este edital apresenta a chamada de propostas para a seleção de projetos no âmbito do Programa Institucional de Iniciação Científica.",
        body: {
          __html:
            "<p>A Reitoria da Universidade Presbiteriana Mackenzie, por meio de sua Coordenadoria de Fomento à Pesquisa, da Pró-Reitoria de Pesquisa e Pós-Graduação (CFP/PRPG), torna público o presente Edital para a chamada de propostas para a seleção de projetos no âmbito do Programa Institucional de Iniciação Científica.</p><br><p><b>Requisitos para os alunos: </b></p><br><p>1 - Estar regularmente matriculado em curso de graduação da UPM entre o primeiro e o antepenúltimo semestre no ato da inscrição no Programa Institucional de Iniciação Científica. Dedicar-se integralmente às atividades acadêmicas e de pesquisa;</p><br><p>2 - Apresentar desempenho acadêmico satisfatório, comprovado em seu histórico escolar;</p><br><p>3 - Não acumular a bolsa de Iniciação Científica com as bolsas de monitoria, extensão, iniciação tecnológica, PIBID e bolsa de pesquisa enquadrada em outras modalidades, oferecidas pela Universidade Presbiteriana Mackenzie, Fundo Mackenzie de Pesquisa – MackPesquisa, CNPq ou de quaisquer agências nacionais, estrangeiras ou internacionais de fomento ao ensino e à pesquisa ou congêneres;</p><br><p>4 - Para efeitos deste Edital, não será considerado acúmulo de bolsas o usufruto simultâneo da bolsa de Iniciação Científica e de bolsas de pesquisas provenientes de projetos de capacitação/ensino e/ou aquelas que atendam a objetivos assistenciais, de manutenção ou de permanência, especialmente quando os valores são repassados diretamente aos alunos, e cujas finalidades sejam distintas da pesquisa de Iniciação Científica;</p><br><p>5 - Não possuir grau de parentesco, em linha direta, com o orientador;</p><br><p>6 - Na condição de bolsista não é permitido possuir vínculo empregatício em regime CLT, possuir vínculo com serviço público (ser concursado), participar do programa Jovem Aprendiz ou exercer atividades como autônomo, gerando recebimento de renda;</p><br><p>7 - Caso o aluno possua vínculo empregatício, participação no Programa Jovem Aprendiz, trabalho autônomo ou esteja recebendo alguma modalidade de bolsa de pesquisa ou bolsa monitoria, ele poderá se inscrever como voluntário (Programa Institucional Voluntário de Iniciação Científica - PIVIC). Esse Programa, excluindo-se o pagamento da bolsa, oferece aos alunos os mesmos benefícios pertinentes ao PIBIC;</p><br><p>8 - Poderá ser concedida bolsa ao aluno que esteja em estágio obrigatório e estágio não obrigatório, desde que haja declaração conjunta da Unidade Acadêmica, do supervisor de estágio e do orientador da pesquisa, evidenciando que a realização do estágio não afetará sua dedicação às atividades acadêmicas e de pesquisa.</p><br><p><b>Requisitos para os orientadores: </b></p><br><p>1 - Ser docente e pesquisador vinculado às Unidades Acadêmicas da Universidade Presbiteriana Mackenzie;</p><br><p>2 - Possuir título de doutor ou mestre e regime de trabalho em tempo integral (PPI) ou parcial (PPP);</p><br><p>3 - Possuir produção científica, técnica ou artístico-cultural, dos últimos quatro anos, divulgada em periódicos científicos indexados relacionados à área de conhecimento na qual o docente atua. As informações de produtividade do orientador serão validadas a partir da consulta do respectivo currículo preenchido na Plataforma Lattes;</p><br><p>4 - Possuir Currículo Lattes atualizado no semestre em curso;</p><br><p>5 - Possuir registro no ORCiD;</p><br><p>6 - Fazer parte de projeto de pesquisa em andamento, na condição de líder ou participante, cadastrado e atualizado na Unidade Acadêmica, na Plataforma Lattes e estar aprovado no PDA pelo Coordenador de Pesquisa da Unidade Acadêmica;</p><br><p>7 - Em caso de projeto novo, ele também deve ter sido indicado e aprovado no PDA pelo Coordenador de Pesquisa da Unidade Acadêmica e estar cadastrado no Currículo Lattes;</p><br><p>8 - O orientador deve ter no PDA disponibilidade de pesquisa para a orientação do projeto de Iniciação Científica em questão;</p><br><p>9 - Não ter pendência originada em orientação anterior de Iniciação Científica, tais, como: relatórios em aberto, pareceres de desempenho dos seus orientandos e outras pertinentes ao processo.</p><br><a href='https://drive.google.com/file/d/1gmVvhOqoHJ3KEeKZsB-cbYxtElOx4LXP/view?usp=drive_link' target='_blank'>Edital completo</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "20 Mai. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Inscrições encerradas - Iniciação Tecnológica",
        description: "",
        body: {
          __html:
            "<p>As  inscrições para o programa de Iniciação Tecnológica encontram-se abertas. Inscreva-se entre às 8h do dia 06 de março de 2024 até o dia 30 de abril de 2024!</p><br><p><b>Documentos:</b></p><br><p>1 - Projeto completo sem identificação dos autores</p><br><p>2 - Link do Currículo Lattes do orientador</p><br><p>3 - Link do Currículo Lattes do aluno</p><br><p>4 - Cópia digital do histórico escolar do aluno</p><br><p><b>Submeter projeto aluno(a):</b></p><a href='https://forms.office.com/r/Z161TR9NU0' target='_blank'>Submeter projeto aluno(a)</a><br><br><p><b>Submeter projeto orientador(a):</b></p><a href='https://forms.office.com/r/9jAFDfdgk9' target='_blank'>Submeter projeto orientador(a)</a><br><br><p><b>Para mais informações, leia o edital completo:</b></p><a href='https://drive.google.com/file/d/1nC2L9pgD3cxmvk30phDluPfqO5gRqzFw/view?usp=sharing' target='_blank'>Edital completo</a><br>",
        },
      },
      {
        img: "/code.jpeg",
        date: "13 Mar. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Edital - Iniciação Tecnológica",
        description:
          "Este edital apresenta a chamada de propostas para a seleção de projetos no âmbito do Programa Institucional de Iniciação Tecnológica e Inovação.",
        body: {
          __html:
            "<p>A Reitoria da Universidade Presbiteriana Mackenzie, por sua Coordenadoria de Inovação e Tecnologias (CIT), da Pró-Reitoria de Pesquisa e Pós-Graduação (PRPG), torna público o presente edital, para a abertura de inscrições, visando a seleção de projetos para o Programa Institucional de Bolsas de Iniciação Tecnológica e Inovação (PIBITI/PIVITI) Mackenzie e PIBITI CNPq.</p><br><p><b>Requisitos para os alunos: </b></p><br><p>1 - Ser aluno com matrícula regular em curso de graduação da Universidade  Presbiteriana Mackenzie e inscrito em disciplinas durante a vigência do Programa de Iniciação Tecnológica e Inovação;</p><br><p>2 - Ser aluno com matrícula regular em curso de graduação da Universidade Presbiteriana Mackenzie e inscrito em disciplinas durante a vigência do Programa de Iniciação Tecnológica e Inovação;</p><br><p>3 - Não acumular a bolsa de Iniciação Tecnológica com as bolsas de monitoria, extensão, iniciação científica e bolsa de pesquisa enquadrada em outras modalidades, oferecidas pela Universidade Presbiteriana Mackenzie, Fundo Mackenzie de Pesquisa;</p><br><p>4 - Não possuir grau de parentesco, em linha direta, com o orientador;</p><br><p>5 - Na condição de bolsista não é permitido possuir vínculo empregatício em regime CLT, possuir vínculo com serviço público (ser concursado), participar do programa Jovem Aprendiz ou exercer atividades como autônomo, gerando recebimento de renda;</p><br><p>6 - Caso o aluno possua vínculo empregatício, participação no Programa Jovem Aprendiz, trabalho autônomo ou esteja recebendo alguma modalidade de bolsa de pesquisa ou bolsa monitoria, ele poderá se inscrever como voluntário (Programa Institucional Voluntário de Iniciação Científica - PIVIC). Esse Programa, excluindo-se o pagamento da bolsa, oferece aos alunos os mesmos benefícios pertinentes ao PIBIC;</p><br><p>7 - Poderá ser concedida bolsa ao aluno que esteja em estágio obrigatório e estágio não obrigatório, desde que haja declaração conjunta da Unidade Acadêmica, do supervisor de estágio e do orientador da pesquisa, evidenciando que a realização do estágio não afetará sua dedicação às atividades acadêmicas e de pesquisa.</p><br><p><b>Requisitos para os orientadores: </b></p><br><p>1 - Ser docente e pesquisador vinculado às Unidades Acadêmicas da Universidade Presbiteriana Mackenzie;</p><br><p>2 - Possuir título de doutor ou mestre e regime de trabalho em tempo integral (PPI) ou parcial (PPP);</p><br><p>3 - Possuir produção científica, técnica ou artístico-cultural, dos últimos quatro anos, divulgada em periódicos científicos indexados relacionados à área de conhecimento na qual o docente atua. As informações de produtividade do orientador serão validadas a partir da consulta do respectivo currículo preenchido na Plataforma Lattes;</p><br><p>4 - Possuir Currículo Lattes atualizado no semestre em curso;</p><br><p>5 - O orientador deve ter no PDA disponibilidade de pesquisa para a orientação do projeto de Iniciação Tecnológica em questão;</p><br><p>6 - Não ter pendência originada em orientação anterior de Iniciação Científica, tais, como: relatórios em aberto, pareceres de desempenho dos seus orientandos e outras pertinentes ao processo.</p><br><a href='https://drive.google.com/file/d/1nC2L9pgD3cxmvk30phDluPfqO5gRqzFw/view?usp=sharing' target='_blank'>Edital completo</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "29 Fev. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Lista dos aprovados - Residência de Software (2024/1)",
        description:
          "Confira os alunos aprovados para ingressar na Residência de Software (2024/1)",
        body: {
          __html:
            "<a href='https://drive.google.com/file/d/125qd-rUlw5Xp7DIkhErfCFHXTdan_d67/view?usp=sharing' target='_blank'>Confira a lista dos aprovados</a><br><br><p>A segunda etapa (e etapa final) do processo seletivo da Residência de Software 2024/1  ocorreu no dia 28 de fevereiro de 2024. Esta notícia visa apresentar a lista dos alunos aprovados. Atentem-se às informações abaixo que apresentam orientações sobre o primeiro dia de vocês na Residência:</p><br><p><b>Sejam bem-vindos ao laboratório MackLeaps!</b></p><br><p>O <b>início das atividades</b> na Residência de Software ocorrerá no dia <b>04 de março (Segunda-feira) das 14h às 15h30</b>.</p><br><p>Aos <b>aprovados dos cursos presenciais</b>, aguardamos a sua presença no <b>prédio 6 - sala 203</b>.<br><br>Aos <b>aprovados dos cursos EAD</b>, a reunião será <b>via Teams</b> e todos foram inseridos nesse evento, basta <b>acessar o link no dia/horário informados acima</b>.</p><br><p>Qualquer dúvida, entrar em contato com <b>ivan.oliveira@mackenzie.br</b>.<br><br></p><p>Equipe de Professores MackLeaps – Residência de Software</p><p>Coordenação: prof. Dr. Fábio Silva Lopes e profa. Dra. Maria Amélia Eliseo. </p>",
        },
      },
      {
        img: "/code.jpeg",
        date: "19 Fev. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Processo seletivo - Residência de Software (2024/1)",
        description: "Inscrições encerradas!",
        body: {
          __html:
            "<p>O Programa de Residência de Software PRSw - FCI/MackLeaps tem por objetivo fomentar a capacitação profissional em Engenharia de Software e Interação Humano-Computador para atuação nas atividades de projeto, considerando os fatores humanos, implementação e testes em projetos de aplicações computacionais.</p><p>A Residência de Software é um processo que ocorre em uma abordagem prática, por meio de ambientes de imersão, pesquisa e colaboração, orientado por professores, em projetos reais, empresariais ou extensionistas, para promover maturidade nas práticas profissionais que o mercado demanda.</p><p>O PRSw-FCI/MackLeaps consiste na participação em um Roadmap de cinco módulos com foco na implementação de um projeto real de formatura que inclui: aulas teóricas e práticas de laboratório em equipe; construção de artefatos de software, relacionados ao projeto real em desenvolvimento; estudo de ferramentas tecnológicas de comunicação, colaboração e construção de artefatos; estudo e elaboração de Recursos Educacionais Digitais para o aprendizado de elementos integrantes dos módulos do Programa; avaliação do processo e da aprendizagem do trabalhado em cada módulo; dentre outros.</p><p>Além de participar de projetos reais, essa também é uma ótima oportunidade de obter horas de atividades complementares ou de extensão. Fique atento(a)!</p><p>Esta notícia visa comunicar a abertura do processo seletivo de 2024/1 para aqueles que se interessaram pelo projeto. Os(As) alunos(as) selecionados(as) nesta 1a etapa serão comunicados(as) por e-mail e convocados(as) para participar da 2a etapa que ocorrerá entre os dias 27 e 29 de fevereiro. Provavelmente, 28 de fevereiro das 14h às 17h (presencial/virtual). Marque na sua agenda! </p><p>O resultado dos(as) alunos(as) selecionados(as) será divulgado no site do MackLeaps (https://mackleaps.mackenzie.br/) no final do dia 01 de março. O início previsto das atividades será em 04 de março (segunda-feira) das 14h às 16h. Ficaremos felizes em receber novos residentes!</p><a href='https://forms.office.com/r/KZewd7xbpz' target='_blank'>Inscreva-se</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "19 Fev. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Edital - Residência de Software 2024/1",
        description:
          "Este Edital apresenta e divulga a 5ª edição do Programa de Residência de Software (PRSw - FCI/MackLeaps).",
        body: {
          __html:
            "<p>Este Edital apresenta e divulga a 5ª edição do Programa de Residência de Software (PRSw - FCI/MackLeaps) detalhando: aspectos inerentes a ele, etapas do processo seletivo, quantidade de vagas e outros.</p><p>O Laboratório de Estudos de Ambientes de Produção de Software – MackLeaps/FCI/UPM criou em 2021 uma Residência de Software, com o objetivo de ampliar o potencial de aprendizado em Engenharia de Software e Interação Humano-Computador por meio de práticas conhecidas no mercado com PBL (Problem Based Learning) e CBL (Challenge Based Learning).</p><p>Tais práticas de ensino já conhecidas e adotadas em áreas como Saúde e Computação apresentam potencial para gerar engajamento de estudantes no desenvolvimento de habilidades denominadas Soft Skills, como Liderança, Empatia, Trabalho em Equipe, Engajamento, entre outros, e Hard Skills da Engenharia de Software como Métodos Ágeis, Desenvolvimento de Sistemas e Interação Humano-Computador, propiciando resultados melhores no processo do ensino e da aprendizagem nas áreas envolvidas.</p><p>O Programa de Residência de Software PRSw - FCI/MackLeaps tem por objetivo fomentar a capacitação profissional em Engenharia de Software e Interação Humano-Computador para atuação nas atividades de projeto, considerando os fatores humanos, implementação e testes em projetos de aplicações computacionais.</p><p>A Residência de Software é um processo que ocorre em uma abordagem prática, por meio de ambientes de imersão, pesquisa e colaboração, orientado por professores, em projetos reais, empresariais ou extensionistas, para promover maturidade nas práticas profissionais que o mercado demanda.</p><p>Os alunos ingressantes na 4ª edição (2º semestre de 2023) tiveram a oportunidade de participar ativamente nas etapas DEV e DevOps (incluindo a realização de testes, T&D), ilustradas na Figura 1, envolvendo os projetos: Contador de gente, Estação Meteorológica, Sistema de Avaliação do Oriente e Website do MackLeaps. Os ingressantes nessa 5ª edição (1º semestre de 2024), terão a oportunidade de participar de novos projetos de empresas e instituições captados pelo MackLeaps e realizar a especificação de requisitos desses projetos, a etapa UXD (Figura 1), chegando até a implementação do seu front-end. O envolvimento dos alunos nesses projetos gera grande chance de estágios e trabalhos nesses locais.</p><p>O número de vagas desta edição está limitado a 15. A comissão de professores do Programa realizará a seleção dos candidatos por meio de entrevistas/dinâmicas ou outras atividades julgadas pertinentes, tendo como critérios: Interesse, motivação, disponibilidade, habilidade de comunicação oral e escrita, capacidade de colaboração e trabalho em equipe e algum conhecimento técnico.</p><p><a href='https://drive.google.com/file/d/1NGraA2V6GycaomLfm63mVuwazB8KtQY2/view?usp=drive_link' target='_blank'>Edital completo</a></p>",
        },
      },
    ];
    await PtNews.insertMany(news);
    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
