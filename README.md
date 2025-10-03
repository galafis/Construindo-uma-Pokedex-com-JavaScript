# Pokédex DIO 🧢

![Pokedex Hero Image](assets/pokedex_hero_image.png)

Projeto desenvolvido durante a formação da Digital Innovation One, com o objetivo de colocar em prática os fundamentos de HTML, CSS e JavaScript de forma divertida, explorando a API REST do universo Pokémon. 🧬

## 📌 Sobre o Projeto

Essa Pokédex consome dados da [PokéAPI](https://pokeapi.co/) e permite ao usuário:

- Pesquisar um Pokémon pelo nome ou número;
- Navegar entre os Pokémon com os botões "Anterior" e "Próximo";
- Visualizar imagem, nome e ID do Pokémon;
- Aproveitar uma experiência visual estilizada com uma pegada retrô.

## 📌 About the Project

This project was developed during the Digital Innovation One (DIO) bootcamp, aiming to apply HTML, CSS, and JavaScript fundamentals in a fun way, exploring the Pokémon universe's REST API. 🧬

This Pokédex consumes data from the [PokéAPI](https://pokeapi.co/) and allows the user to:

- Search for a Pokémon by name or number;
- Navigate between Pokémon using "Previous" and "Next" buttons;
- View Pokémon image, name, and ID;
- Enjoy a stylized visual experience with a retro feel.

## 💡 Melhorias implementadas

Apesar da inspiração vir diretamente do repositório oficial da DIO ([js-developer-pokedex](https://github.com/digitalinnovationone/js-developer-pokedex)), realizei algumas melhorias:

- Layout responsivo com bordas arredondadas e sombras suaves;
- Fonte estilo retrô "Press Start 2P" para dar aquele charme nostálgico;
- Rodapé com créditos do projeto;
- Melhor tratamento de erros ao buscar um Pokémon inexistente.

## 💡 Implemented Improvements

Although inspired directly by the official DIO repository ([js-developer-pokedex](https://github.com/digitalinnovationone/js-developer-pokedex)), I implemented several improvements:

- Responsive layout with rounded borders and soft shadows;
- Retro-style "Press Start 2P" font for a nostalgic charm;
- Footer with project credits;
- Better error handling when searching for a non-existent Pokémon.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6
- [PokéAPI](https://pokeapi.co/)

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript ES6
- [PokéAPI](https://pokeapi.co/)

## 🚀 Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/galafis/Construindo-uma-Pokedex-com-JavaScript
```
2. Acesse a pasta do projeto e abra o `docs/index.html` em seu navegador (ou visite a página do GitHub Pages):
```bash
cd Construindo-uma-Pokedex-com-JavaScript
```

## 🚀 How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/galafis/Construindo-uma-Pokedex-com-JavaScript
```
2. Access the project folder and open `docs/index.html` in your browser (or visit the GitHub Pages link):
```bash
cd Construindo-uma-Pokedex-com-JavaScript
```

## 👨‍💻 Autor
Gabriel Lafis — estudante de Ciência de Dados e entusiasta da web.

## 👨‍💻 Author
Gabriel Lafis — Data Science student and web enthusiast.

---

Esse projeto foi uma forma divertida de reforçar conhecimentos em JavaScript e consumo de APIs. Se quiser sugerir melhorias, fique à vontade para abrir um Pull Request ou mandar uma ideia! 😉

---

This project was a fun way to reinforce knowledge in JavaScript and API consumption. If you want to suggest improvements, feel free to open a Pull Request or send an idea! 😉

## 📊 Fluxo do Projeto

```mermaid
graph TD
    A[Usuário acessa Pokedex] --> B{Pesquisa Pokémon por nome/ID?}
    B -- Sim --> C[Input do usuário]
    B -- Não --> D[Navega com botões Anterior/Próximo]
    C --> E[Chama PokéAPI]
    D --> E
    E --> F{API retorna dados?}
    F -- Sim --> G[Renderiza Pokémon na tela]
    F -- Não --> H["Exibe Não encontrado :("]
```

![Pokedex Flowchart](assets/pokedex_flowchart.png)

## 📊 Project Flow

```mermaid
graph TD
    A[User accesses Pokedex] --> B{Searches Pokémon by name/ID?}
    B -- Yes --> C[User input]
    B -- No --> D[Navigates with Previous/Next buttons]
    C --> E[Calls PokéAPI]
    D --> E
    E --> F{API returns data?}
    F -- Yes --> G[Renders Pokémon on screen]
    F -- No --> H["Displays Not found :("]
```

![Pokedex Flowchart](assets/pokedex_flowchart.png)

## 📋 Descrição

Este projeto é uma Pokédex interativa que consome a PokéAPI para exibir informações sobre Pokémon. Ele foi desenvolvido como parte de um bootcamp da Digital Innovation One (DIO) e aprimorado com funcionalidades adicionais e um design mais profissional.

## 📋 Description

This project is an interactive Pokédex that consumes the PokéAPI to display information about Pokémon. It was developed as part of a Digital Innovation One (DIO) bootcamp and enhanced with additional features and a more professional design.

## 📦 Instalação

Não há etapas de instalação complexas. Basta clonar o repositório e abrir o arquivo `docs/index.html` em seu navegador.

## 📦 Installation

There are no complex installation steps. Simply clone the repository and open the `docs/index.html` file in your browser.

## 💻 Uso

Após abrir o `docs/index.html` no navegador, você pode pesquisar Pokémon pelo nome ou ID usando o campo de busca, ou navegar entre eles usando os botões "Anterior" e "Próximo".

## 💻 Usage

After opening `docs/index.html` in your browser, you can search for Pokémon by name or ID using the search field, or navigate between them using the "Previous" and "Next" buttons.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

