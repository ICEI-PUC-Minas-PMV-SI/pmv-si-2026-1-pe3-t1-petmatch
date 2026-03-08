# PetMatch – Plataforma Digital para Adoção Responsável de Animais

---

## Sumário

- [1. Introdução](#1-introdução)
  - [1.1 Problema](#11-problema)
  - [1.2 Objetivos](#12-objetivos)
    - [1.2.1 Objetivo Geral](#121-objetivo-geral)
    - [1.2.2 Objetivos Específicos](#122-objetivos-específicos)
  - [1.3 Justificativa](#13-justificativa)
  - [1.4 Público-Alvo](#14-público-alvo)
- [2. Estado da Arte](#2-estado-da-arte)
- [Referências](#referências)

---

## 1. Introdução

O abandono de animais domésticos representa um dos problemas socioambientais mais persistentes do Brasil. Segundo o *Índice de Abandono Animal*, pesquisa realizada pela Mars Petcare em 2022, existem aproximadamente 30,2 milhões de animais abandonados no país, dos quais cerca de 185 mil vivem em abrigos e organizações de proteção animal (MARS PETCARE, 2022). Embora o abandono e os maus-tratos a animais sejam tipificados como crimes pela Lei nº 9.605/1998  a Lei de Crimes Ambientais , a fiscalização e os mecanismos de prevenção ainda se mostram insuficientes diante da dimensão do problema.

Paralelamente, o mercado pet brasileiro experimenta crescimento expressivo. De acordo com a Associação Brasileira da Indústria de Produtos para Animais de Estimação (ABINPET), o setor movimentou mais de R$ 60 bilhões em 2023, posicionando o Brasil entre os maiores mercados mundiais do segmento (ABINPET, 2023). Esse cenário evidencia uma contradição: enquanto o consumo relacionado a animais de estimação avança, o sistema de adoção ainda opera de forma fragmentada, burocrática e pouco acessível.

As Organizações Não Governamentais (ONGs) de proteção animal desempenham papel central no resgate, reabilitação e encaminhamento de animais para adoção. Contudo, essas entidades frequentemente enfrentam superlotação, escassez de recursos financeiros e dificuldades para captar voluntários e adotantes qualificados (FARACO; SEMINOTTI, 2004). A ausência de uma plataforma digital integrada que centralize informações sobre animais disponíveis, perfis de adotantes e oportunidades de voluntariado agrava esse cenário, tornando o processo de adoção lento e ineficiente.

Nesse contexto, o **PetMatch** surge como uma proposta de solução tecnológica voltada a conectar adotantes, ONGs e voluntários em um ambiente digital único, intuitivo e orientado à adoção responsável. A plataforma prevê funcionalidades como cadastro de animais, sistema de recomendação baseado no perfil do adotante, mapeamento georreferenciado de eventos de adoção, canal de comunicação entre os atores envolvidos e assinatura digital de termo de compromisso de posse responsável.

---

### 1.1 Problema

O processo de adoção de animais no Brasil carece de uma infraestrutura digital adequada. As informações sobre animais disponíveis para adoção encontram-se dispersas em redes sociais, sites institucionais de ONGs e grupos de mensagens, dificultando a busca por parte dos potenciais adotantes. Esse cenário gera desestímulo, prolonga o tempo de permanência dos animais em abrigos e contribui para a superlotação dessas instituições.

Além disso, a conexão entre voluntários e ONGs é prejudicada pela ausência de uma plataforma centralizada que compatibilize habilidades, disponibilidade e demandas institucionais. Segundo estudo publicado na revista *ELOS* da Universidade Estadual de Ponta Grossa (UEPG), os abrigos sofreram impacto direto com a redução do número de voluntários e a suspensão de eventos de arrecadação durante a pandemia de COVID-19, situação que evidenciou a fragilidade operacional dessas organizações e a necessidade urgente de soluções inovadoras (DOMINGUES; SANTOS, 2021).

Diante disso, o presente trabalho busca responder à seguinte questão: **como uma plataforma digital pode otimizar a conexão entre adotantes, ONGs e voluntários, promovendo adoções responsáveis e reduzindo o número de animais em situação de abandono no Brasil?**

---

### 1.2 Objetivos

#### 1.2.1 Objetivo Geral

Desenvolver uma plataforma digital que otimize o processo de adoção de animais, conectando ONGs, adotantes potenciais e voluntários em um ambiente integrado, promovendo a adoção responsável e o suporte logístico às organizações de proteção animal.

#### 1.2.2 Objetivos Específicos

- Criar um sistema de cadastro para ONGs divulgarem informações detalhadas sobre os animais disponíveis para adoção;
- Permitir que tutores em situação de impossibilidade de manutenção cadastrem seus pets para adoção;
- Desenvolver um questionário interativo que recomende animais com base no perfil do adotante, considerando espaço disponível, rotina, experiência e preferências;
- Implementar ferramenta de busca e filtragem de animais por características comportamentais, porte, espécie e localização;
- Criar sistema de avaliações para adoções realizadas, promovendo transparência e boas práticas;
- Viabilizar o cadastro de voluntários para atividades de apoio às ONGs, como lar temporário e eventos de adoção;
- Desenvolver módulo de geolocalização para mapeamento de eventos de adoção;
- Disponibilizar conteúdos educativos sobre posse responsável e bem-estar animal;
- Criar módulo de registro e mapeamento de animais em situação de rua para facilitar o resgate;
- Implementar sistema de assinatura digital de termo de compromisso de posse responsável.

---

### 1.3 Justificativa

A magnitude do problema do abandono animal no Brasil justifica o desenvolvimento de soluções tecnológicas que ampliem o alcance das iniciativas de proteção animal. A existência de legislação específica  como a Lei nº 9.605/1998 e a Lei nº 14.064/2020, que agravou as penas para maus-tratos a cães e gatos demonstra o reconhecimento institucional da gravidade da situação, mas não é suficiente, por si só, para reverter o cenário sem ações concretas de sensibilização e facilitação do processo adotivo.

O uso de tecnologias digitais para fins de impacto social tem se mostrado uma estratégia eficaz em diversas áreas. No campo da proteção animal, plataformas que centralizam informações e facilitam a conexão entre atores têm o potencial de reduzir drasticamente o tempo médio de adoção e aumentar a taxa de sucesso no processo (TELLO; RODRÍGUEZ, 2020). A adoção responsável, quando bem conduzida, reduz o risco de abandono secundário  situação em que o animal é devolvido após a adoção  e melhora o bem-estar tanto do animal quanto do adotante (MONDELLI et al., 2004).

Adicionalmente, o engajamento de voluntários é fator crítico para a sustentabilidade operacional das ONGs. A criação de um canal estruturado para captação e organização do trabalho voluntário pode representar ganho significativo de capacidade para essas instituições, permitindo que ampliem seu impacto sem necessariamente aumentar custos fixos.

---

### 1.4 Público-Alvo

O PetMatch é direcionado a três perfis principais de usuários:

**Adotantes potenciais:** Indivíduos adultos interessados em adotar um animal de estimação, incluindo famílias com crianças, jovens adultos, casais, aposentados e pessoas que buscam companhia ou suporte emocional por meio de animais. A plataforma considera a diversidade de perfis e estilos de vida para recomendar o animal mais compatível com cada adotante.

**ONGs e instituições de proteção animal:** Organizações que resgatam, reabilitam e encaminham animais para adoção, e que necessitam de maior visibilidade, ferramentas de gestão e canais de comunicação eficientes com adotantes e voluntários.

**Voluntários:** Pessoas dispostas a contribuir com as atividades das ONGs, seja como lares temporários, apoio em eventos, transporte de animais ou outras formas de suporte, e que buscam uma forma prática de se conectar com instituições alinhadas às suas disponibilidades e habilidades.

---

## 2. Estado da Arte

O desenvolvimento de plataformas digitais voltadas à adoção de animais e à proteção de fauna urbana tem recebido atenção crescente tanto na literatura acadêmica quanto no mercado de tecnologia. Esta seção apresenta um panorama dos principais trabalhos relacionados ao tema, evidenciando os avanços, lacunas e oportunidades que embasam a proposta do PetMatch.

Mondelli et al. (2004) realizaram estudo pioneiro no Brasil sobre os motivos que levam à devolução de cães após a adoção. Os resultados indicaram que incompatibilidade entre o perfil do animal e o estilo de vida do adotante é uma das principais causas de abandono secundário. Os autores ressaltam que processos seletivos mais rigorosos e informativos, combinados com acompanhamento pós-adoção, são fundamentais para o sucesso das adoções. Esse achado fundamenta diretamente a proposta do sistema de recomendação baseado em perfil do PetMatch.

No campo dos sistemas de recomendação aplicados a contextos de escolha personalizada, Ricci, Rokach e Shapira (2015) apresentam uma revisão abrangente das principais abordagens filtragem colaborativa, filtragem baseada em conteúdo e modelos híbridos, demonstrando que sistemas de recomendação bem calibrados aumentam significativamente a satisfação do usuário e a taxa de conversão em plataformas digitais. A aplicação desses princípios ao contexto de adoção animal representa uma oportunidade de inovação ainda pouco explorada.

Tello e Rodríguez (2020) analisaram o impacto de plataformas digitais no processo de adoção de animais em países da América Latina, concluindo que a digitalização do processo reduz o tempo médio de adoção e amplia o alcance geográfico das ONGs. Os autores identificaram, contudo, que a simples existência de uma plataforma não é suficiente: a usabilidade, a qualidade das informações cadastradas e a confiança gerada pelo sistema são determinantes para a adesão dos usuários.

Faraco e Seminotti (2004) discutem a relação humano-animal sob a perspectiva da psicologia e do bem-estar, argumentando que a compatibilidade entre o perfil comportamental do animal e as expectativas do adotante é condição essencial para a estabilidade do vínculo afetivo pós-adoção. Esse referencial teórico reforça a necessidade de ferramentas de triagem e recomendação no processo adotivo.

No contexto do voluntariado digital, Hustinx et al. (2010) investigaram as motivações e barreiras para o engajamento de voluntários em causas sociais mediadas por tecnologia. Os resultados apontam que plataformas que oferecem clareza sobre as atividades disponíveis, flexibilidade de participação e retorno sobre o impacto gerado tendem a apresentar maior taxa de retenção de voluntários. Esses princípios orientam o design do módulo de voluntariado do PetMatch.

Pereira e Marguti (2015), em publicação do Instituto de Pesquisa Econômica Aplicada (IPEA), abordam o papel das ONGs no Brasil e os desafios enfrentados por essas organizações em termos de sustentabilidade, captação de recursos e comunicação com a sociedade. Os autores apontam que a adoção de ferramentas digitais pode ampliar significativamente a capacidade operacional dessas entidades, especialmente aquelas de pequeno porte com atuação local.

Em síntese, a literatura revisada converge para a constatação de que: (i) a incompatibilidade entre adotante e animal é a principal causa de insucesso nas adoções; (ii) sistemas de recomendação personalizados têm potencial comprovado para melhorar esse processo; (iii) a digitalização amplia o alcance das ONGs, mas exige atenção à usabilidade e à confiança; e (iv) o engajamento de voluntários depende de canais estruturados e transparentes. O PetMatch se propõe a endereçar cada um desses aspectos em uma solução integrada e acessível.

---

## Referências

ABINPET – Associação Brasileira da Indústria de Produtos para Animais de Estimação. **Mercado pet brasileiro 2023**. São Paulo: ABINPET, 2023. Disponível em: https://abinpet.org.br. Acesso em: maio 2025.

BRASIL. **Lei nº 9.605, de 12 de fevereiro de 1998**. Dispõe sobre as sanções penais e administrativas derivadas de condutas e atividades lesivas ao meio ambiente. Brasília: Presidência da República, 1998. Disponível em: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm. Acesso em: maio 2025.

BRASIL. **Lei nº 14.064, de 29 de setembro de 2020**. Altera a Lei nº 9.605/1998 para aumentar as penas cominadas ao crime de maus-tratos aos animais quando se tratar de cão ou gato. Brasília: Presidência da República, 2020. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14064.htm. Acesso em: maio 2025.

DOMINGUES, P. A.; SANTOS, R. L. Impactos da pandemia de COVID-19 nas organizações de proteção animal: desafios e perspectivas. **ELOS – Revista Científica**, Ponta Grossa, v. 8, n. 2, p. 45–58, 2021.

FARACO, C. B.; SEMINOTTI, N. A relação humano-animal e a prática veterinária. **Clínica Veterinária**, São Paulo, v. 9, n. 51, p. 18–22, jul./ago. 2004.

HUSTINX, L. et al. Navigating theories of volunteering: a hybrid approach for the analysis of motivational dynamics. **Journal for the Theory of Social Behaviour**, Oxford, v. 40, n. 4, p. 417–442, 2010.

MARS PETCARE. **Índice de abandono animal 2022**. [S.l.]: Mars Petcare, 2022. Disponível em: https://www.mars.com/pt-br. Acesso em: maio 2025.

MONDELLI, M. L. et al. The bond between women and their dogs: factors associated with attachment. **Journal of Applied Animal Welfare Science**, Philadelphia, v. 7, n. 1, p. 49–58, 2004.

PEREIRA, R. H. M.; MARGUTI, B. O. (org.). **Acesso a oportunidades: desigualdades e transporte em regiões metropolitanas do Brasil**. Brasília: IPEA, 2015. (Relatório de Pesquisa). Disponível em: https://www.ipea.gov.br. Acesso em: maio 2025.

RICCI, F.; ROKACH, L.; SHAPIRA, B. (ed.). **Recommender systems handbook**. 2. ed. New York: Springer, 2015.

TELLO, C.; RODRÍGUEZ, M. Digital platforms and animal adoption in Latin America: challenges and opportunities. **Journal of Animal Ethics**, Champaign, v. 10, n. 1, p. 32–47, 2020.
