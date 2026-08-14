# 🚀 Skills App (Frontend Mobile)

Bem-vindo ao repositório Frontend Mobile do Projeto de Skills, desenvolvido como parte de um desafio técnico para um processo seletivo.

Esta aplicação foi desenvolvida em React Native com Expo e TypeScript, oferecendo uma experiência mobile moderna e intuitiva para que os usuários possam realizar autenticação, cadastrar uma conta e gerenciar suas competências profissionais através da integração com a API RESTful do sistema.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- Framework: React Native
- Plataforma: Expo
- Linguagem: TypeScript
- Gerenciamento de Rotas: Expo Router
- Comunicação HTTP: Axios
- Persistência Local: AsyncStorage
- Estilização: StyleSheet do React Native
- Gradientes: Expo Linear Gradient
- Gerenciamento de Estado: React Hooks
- Gerenciador de Dependências: npm

---

## 📱 Funcionalidades da Aplicação Mobile

O projeto foi desenvolvido atendendo aos requisitos propostos para a aplicação mobile:

### 1. Tela de Login

- Campo de login.
- Campo de senha.
- Botão para alternar a visibilidade da senha.
- Opção "Gravar Senha".
- Persistência dos dados de acesso através do AsyncStorage quando a opção estiver selecionada.
- Remoção dos dados armazenados caso a opção seja desmarcada.
- Integração com o endpoint de autenticação da API.
- Redirecionamento para a Home após autenticação bem-sucedida.

### 2. Tela de Cadastro

- Campo de login.
- Campo de senha.
- Campo de confirmação de senha.
- Botões para visualizar ou ocultar as senhas digitadas.
- Validação para garantir que senha e confirmação sejam iguais.
- Integração com o endpoint de cadastro da API.
- Feedback ao usuário após cadastro realizado com sucesso.

### 3. Tela Home

- Cabeçalho personalizado com saudação ao usuário autenticado.
- Botão de Logout.
- Alternância entre tema claro e escuro.
- Persistência da preferência de tema.
- Listagem das Skills associadas ao usuário.
- Cards contendo:
  - Logo da tecnologia.
  - Nome da Skill.
  - Descrição.
  - Nível de conhecimento.
- Representação visual do nível através de uma bateria de conhecimento.
- Classificação visual entre níveis Básico, Médio e Avançado.

### 4. Gerenciamento de Skills

A aplicação permite realizar o gerenciamento completo das Skills associadas ao perfil:

- **Adicionar Skill:** modal contendo as Skills disponíveis retornadas pela API e seleção do nível de conhecimento.
- **Editar Skill:** modal para atualização do nível da Skill já associada.
- **Excluir Skill:** modal de confirmação antes da remoção da Skill do perfil.
- Atualização automática da listagem após as operações.

---

## 🎨 Interface e Experiência do Usuário

A interface mobile segue a mesma identidade visual utilizada na aplicação Web do projeto, mantendo consistência entre as plataformas.

Foram utilizados:

- Gradientes nos cards de Skills.
- Tema claro e escuro.
- Cards com bordas arredondadas.
- Sombras e efeitos visuais.
- Indicador de nível inspirado em uma bateria.
- Cores diferentes para representar os níveis de conhecimento.
- Modais personalizados para adição, edição e exclusão.
- Layout adaptado para dispositivos móveis.

---

## 🔒 Segurança

A aplicação utiliza autenticação baseada em Token JWT fornecido pelo Backend.

Após o login:

- O Token JWT é armazenado localmente.
- O identificador do usuário autenticado é mantido para utilização nas requisições.
- As requisições destinadas às rotas protegidas da API enviam o Token JWT no cabeçalho `Authorization`.
- O acesso às funcionalidades da Home depende da autenticação do usuário.
- Ao realizar Logout, os dados relacionados à sessão são removidos.

As credenciais somente são mantidas para preenchimento posterior quando o usuário escolhe explicitamente a opção **Gravar Senha**.

---

## 🏗️ Organização do Projeto

O código foi dividido em responsabilidades para facilitar manutenção e reutilização.

```text
src/
├── app/
├── components/
├── contexts/
├── screens/
├── services/
└── ...
```

```

- `app`: gerenciamento das rotas através do Expo Router.
- `components`: componentes reutilizáveis da interface, como Header, SkillCard e Modais.
- `contexts`: estados e comportamentos compartilhados pela aplicação.
- `screens`: telas principais da aplicação.
- `services`: configuração da comunicação com a API através do Axios.

---

```

## ⚙️ Como executar o projeto localmente

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Expo configurado no ambiente.
- Backend do projeto (`projeto-skills-backend`) rodando localmente.

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/marianaoliveira-web/projeto-skills-mobile.git
```

2. Entre na pasta do projeto:

```bash
cd projeto-skills-mobile
```

3. Instale as dependências:

```bash
npm install
```

4. Verifique a configuração da API em:

```text
src/services/api.ts
```

O endereço deve apontar para o Backend do Projeto Skills.

Para execução através do navegador utilizando o Expo Web, o Backend local pode ser acessado através de:

```text
http://localhost:8080
```

> ⚠️ Em dispositivos físicos ou emuladores, `localhost` pode não representar o computador onde o Backend está sendo executado. Nesse caso, pode ser necessário utilizar o endereço IP da máquina na rede local ou o endereço apropriado para o emulador utilizado.

5. Inicie o projeto:

```bash
npx expo start
```

Após iniciar o Expo, utilize as opções apresentadas no terminal para executar a aplicação no ambiente desejado.

---

## 📍 Rotas da Aplicação

| Rota        | Tela     | Descrição                                      | Acesso        |
| ----------- | -------- | ---------------------------------------------- | ------------- |
| `/`         | Login    | Tela de autenticação do usuário.               | Público       |
| `/cadastro` | Cadastro | Tela para criação de uma nova conta.           | Público       |
| `/home`     | Home     | Painel de gerenciamento das Skills do usuário. | Privado (JWT) |

---

## 🔗 Integração com o Backend

O aplicativo Mobile consome a mesma API RESTful utilizada pela aplicação Web.

Entre as operações utilizadas estão:

- Autenticação do usuário.
- Cadastro de usuário.
- Consulta do catálogo de Skills.
- Consulta das Skills associadas ao usuário.
- Associação de novas Skills.
- Atualização do nível de conhecimento.
- Exclusão de Skills associadas.

O Backend é responsável pela persistência dos dados em PostgreSQL e pela segurança das rotas através do Spring Security e JWT.

---

Desenvolvido com dedicação por Mariana Alves de Oliveira 💻✨
