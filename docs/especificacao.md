# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades dos usuários do sistema PetMatch, incluindo adotantes, ONGs de proteção animal e voluntários, que devem ser atendidas pela plataforma digital proposta, visando otimizar o processo de adoção de animais e promover a posse responsável.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado **PetMatch**.  

O sistema será composto pelos seguintes módulos principais:
- Módulo de gerenciamento de usuários (adotantes, ONGs e voluntários);
- Módulo de cadastro e gerenciamento de animais para adoção;
- Módulo de recomendação de animais com base no perfil do usuário;
- Módulo de busca e filtragem (preferências e geolocalização);
- Módulo de eventos de adoção;
- Módulo de voluntariado;
- Módulo de notificações;
- Módulo de conteúdo informativo e termos de uso;
- Módulo de feedback e avaliações;
- Módulo de parcerias e benefícios.

### 3.2.2 Missão do produto
Conectar adotantes, ONGs e voluntários em uma plataforma digital integrada, facilitando o processo de adoção responsável, promovendo o bem-estar animal e ampliando o alcance das ações de proteção animal por meio da tecnologia.

### 3.2.3 Limites do produto
O PetMatch não contempla:
- Processamento de pagamentos ou transações financeiras;
- Avaliação comportamental profissional dos animais;
- Responsabilidade legal sobre o processo de adoção (atuando apenas como intermediador);
- Serviços veterinários ou acompanhamento pós-adoção;
- Integração com sistemas governamentais ou bases oficiais de controle animal.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|---|----------|---------------------|
| 1 | Centralização de informações sobre animais disponíveis para adoção | Essencial |
| 2 | Facilidade na busca e filtragem de animais por perfil e localização | Essencial |
| 3 | Melhoria na comunicação entre usuários, ONGs e voluntários | Essencial |
| 4 | Aumento da visibilidade para ONGs e eventos de adoção | Essencial |
| 5 | Conexão facilitada entre voluntários e ONGs | Essencial |
| 6 | Recomendação personalizada de animais para adotantes | Recomendável |
| 7 | Redução do tempo de permanência dos animais em abrigos | Recomendável |
| 8 | Promoção da adoção responsável por meio de conteúdo educativo | Recomendável |


## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Usuários | Processamento de inclusão, alteração, exclusão e consulta de usuários |
| RF2 | Gerenciar Animais para Adoção | Processamento de cadastro, alteração, exclusão e consulta de animais disponíveis para adoção |
| RF3 | Filtrar Animais por Preferências | Permitir que usuários filtrem animais com base em suas preferências (porte, idade, espécie, etc.) |
| RF4 | Filtrar Animais por Geolocalização | Permitir que usuários filtrem animais com base em sua localização geográfica |
| RF5 | Recomendar Animais | Recomendar animais ao usuário com base em seu histórico de navegação |
| RF6 | Gerenciar Voluntários | Processamento de cadastro, alteração, exclusão e consulta de voluntários interessados em apoiar ONGs |
| RF7 | Gerenciar Eventos de Adoção | Processamento de cadastro, alteração, exclusão e consulta de eventos de adoção e feiras organizadas pelas ONGs |
| RF8 | Consultar Termos de Uso | Disponibilizar informações sobre os termos de uso do sistema |
| RF9 | Postar Fotos de Pets | Permitir que usuários publiquem fotos de pets com legendas |
| RF10 | Gerenciar Notificações | Enviar notificações sobre novos animais disponíveis e eventos |
| RF11 | Gerenciar Feedback dos Usuários | Permitir que usuários registrem comentários e avaliações sobre suas experiências |
| RF12 | Gerenciar Anúncios | Permitir a criação, edição, exclusão e exibição de anúncios no sistema |
| RF13 | Gerenciar Benefícios e Parcerias | Processamento de cadastro e gestão de benefícios para usuários em parceria com empresas do ramo pet |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O sistema deve ser responsivo e funcional em celulares, tablets e computadores. |
| RNF2 | O sistema deve garantir a segurança dos dados dos adotantes, ONGs e voluntários, seguindo a LGPD (Lei 13.709/2018). |
| RNF3 |	O sistema deve ser compatível com as versões mais recentes dos navegadores Google Chrome, Mozilla Firefox, Microsoft Edge e Safari. |
| RNF4 |	O tempo de resposta para buscas de animais na plataforma deve ser inferior a 3 segundos de performace. |
| RNF5 |	O código da aplicação deve ser modular e documentado, facilitando manutenção e evolução. |
| RNF6 |	A aplicação deve implementar autenticação e controle de acesso para proteger informações sensíveis (ex: dados de adotantes e ONGs). |

### 3.3.3 Usuários 

| Ator | Descrição |
|------|-----------|
| Administrador | Usuário responsável pela administração geral do sistema, com acesso completo às funcionalidades, incluindo gestão de usuários, conteúdos, anúncios e monitoramento da plataforma. |
| ONG | Usuário institucional responsável pelo cadastro e gerenciamento de animais disponíveis para adoção, eventos e oportunidades de voluntariado. |
| Adotante | Usuário interessado em adotar um animal, podendo buscar, filtrar, visualizar recomendações e interagir com ONGs. |
| Voluntário | Usuário interessado em apoiar ONGs, podendo se cadastrar e participar de atividades como eventos, transporte de animais ou lar temporário. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

#### Figura 1: Diagrama de Casos de Uso do Sistema.
 
### 3.4.2 Descrições de Casos de Uso

#### Gerenciar Animais (CSU01)

**Sumário:** A ONG realiza a gestão (inclusão, remoção, alteração e consulta) dos dados dos animais disponíveis para adoção.

**Ator Primário:** ONG  
**Ator Secundário:** Administrador  

**Pré-condições:**  
A ONG deve estar cadastrada e autenticada no sistema.

**Fluxo Principal:**

1) A ONG requisita a gestão de animais.  
2) O Sistema apresenta as operações disponíveis: inclusão, alteração, exclusão e consulta de animais.  
3) A ONG seleciona a operação desejada ou opta por finalizar o caso de uso.  
4) Caso deseje continuar, o fluxo retorna ao passo 2; caso contrário, o caso de uso é encerrado.

---

**Fluxo Alternativo (3): Inclusão**

a) A ONG solicita a inclusão de um novo animal.  
b) O Sistema apresenta um formulário para cadastro do animal (nome, espécie, idade, porte, descrição, fotos, status de saúde, localização).  
c) A ONG preenche os dados solicitados.  
d) O Sistema valida as informações.  
e) Se válidas, o animal é cadastrado; caso contrário, o sistema solicita correção dos dados.

---

**Fluxo Alternativo (3): Remoção**

a) A ONG seleciona um animal e solicita sua remoção.  
b) O Sistema verifica se o animal pode ser removido.  
c) Se permitido, realiza a remoção; caso contrário, informa a impossibilidade.

---

**Fluxo Alternativo (3): Alteração**

a) A ONG altera os dados de um animal.  
b) O Sistema valida as informações.  
c) Se válidas, atualiza os dados; caso contrário, informa o erro.

---

**Fluxo Alternativo (3): Consulta**

a) A ONG solicita a listagem ou busca de animais.  
b) O Sistema exibe os resultados.  
c) A ONG seleciona um animal para visualizar detalhes.

---

**Pós-condições:**  
Um animal foi cadastrado, alterado, removido ou consultado.

---

#### Buscar e Filtrar Animais (CSU02)

**Sumário:** O Adotante busca e filtra animais disponíveis para adoção.

**Ator Primário:** Adotante  

**Pré-condições:**  
O usuário deve estar autenticado no sistema.

**Fluxo Principal:**

1) O usuário acessa a funcionalidade de busca.  
2) O Sistema apresenta opções de filtro (espécie, porte, idade, localização, comportamento).  
3) O usuário define os critérios desejados.  
4) O Sistema exibe os animais compatíveis.

**Pós-condições:**  
Lista de animais filtrados exibida ao usuário.

---

#### Recomendar Animais (CSU03)

**Sumário:** O Sistema recomenda animais com base no perfil do usuário.

**Ator Primário:** Adotante  

**Pré-condições:**  
O usuário deve ter preenchido informações de perfil ou histórico.

**Fluxo Principal:**

1) O usuário acessa recomendações.  
2) O Sistema analisa preferências e histórico.  
3) O Sistema exibe sugestões de animais compatíveis.

**Pós-condições:**  
Lista personalizada de animais exibida.

---

### 3.4.3 Diagrama de Classes 


#### Figura 2: Diagrama de Classes do Sistema.
 

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|---|------|----------|
| 1 | Usuário | Armazena informações gerais dos usuários do sistema (login, senha, tipo de usuário). |
| 2 | Adotante | Representa usuários interessados em adotar animais, incluindo preferências e histórico. |
| 3 | ONG | Representa organizações responsáveis pelo cadastro de animais e eventos. |
| 4 | Animal | Contém dados dos animais disponíveis para adoção (espécie, idade, porte, descrição, status). |
| 5 | Evento | Representa eventos de adoção organizados pelas ONGs. |
| 6 | Voluntário | Armazena dados de usuários que desejam apoiar ONGs. |
| 7 | Notificação | Responsável pelo envio de alertas sobre animais e eventos. |
| 8 | Feedback | Registra avaliações e comentários dos usuários sobre adoções e experiências. |
| 9 | Parceria | Gerencia benefícios e parcerias com empresas do ramo pet. |
