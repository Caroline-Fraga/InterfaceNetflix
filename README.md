# 🎬 Clone da Interface Netflix

## 📖 Descrição
Projeto estático que replica a interface visual da Netflix como demonstração para portfólio e estudo. Contém um hero (filme principal) e um carrossel de títulos implementado com OwlCarousel. O foco foi responsividade e acessibilidade básica.

## 🔗 Demo

- 🔗 [![Deploy Vercel](https://img.shields.io/badge/deploy-github%20pages-brightgreen)](https://interface-netflix-rosy.vercel.app/)

## 🛠️ Tecnologias utilizadas
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
- OwlCarousel (incluso localmente)

> Observação: os scripts e estilos do OwlCarousel estão na pasta `js/owl` e `style/owl`.

## ⚙️ Funcionalidades
- Hero com título, descrição e ações (assistir / mais informações)
- Carrossel de títulos com navegação por teclado e foco visível
- Estrutura estática simples e pronta para deploy em host estático (Vercel / Netlify / GitHub Pages)

## ▶️ Como executar o projeto (localmente)
1. Clone o repositório:

```bash
git clone https://github.com/Caroline-Fraga/InterfaceNetflix.git
cd InterfaceNetflix
```

2. Sirva os arquivos estáticos — opções:

 - Live Server (VSCode): instale a extensão e clique em "Go Live".
 - Python 3 (pasta atual):

```bash
python -m http.server 5500
# abra http://localhost:5500 no navegador
```

3. Abra `index.html` via servidor e verifique o console do navegador para eventuais erros.

## 📂 Estrutura de pastas (resumida)
- `index.html` — página principal
- `img/` — imagens do projeto
- `style/`
  - `main.css`
  - `responsive.css`
  - `owl/` — arquivos CSS do OwlCarousel
- `js/`
  - `owl/` — `jquery.min.js`, `owl.carousel.min.js`, `setup.js`
- `OwlCarousel2-2.3.4/` — cópia da biblioteca (docs e assets)

> Observação: mantenha a pasta `OwlCarousel2-2.3.4` inalterada (arquivos de terceiros).

## 🚧 Status do projeto
- Status: Concluído ✅

## 👩‍💻 Autor

Desenvolvido por **Caroline Fraga da Silva**. Projetado para apresentação em portfólio e uso acadêmico.

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caroline-fraga-da-silva/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Caroline-Fraga)

---

