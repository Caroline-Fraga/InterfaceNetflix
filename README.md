# 📌 Clone da Interface Netflix

## 📖 Descrição
Projeto estático que replica a interface visual da Netflix como demonstração para portfólio e estudo. Contém um hero (filme principal) e um carrossel de títulos implementado com OwlCarousel. O foco foi responsividade e acessibilidade básica.

## 🔗 Links importantes

- [![Repositório](https://img.shields.io/badge/Repo-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Caroline-Fraga/InterfaceNetflix)
- [![Deploy (Vercel)](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://projeto-dio-interface-netflix.vercel.app/)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Caroline%20Fraga-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caroline-fraga-da-silva/)

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
- Pontos de melhoria (opcionais):
  - Otimizar imagens (WebP, `srcset`) para performance
  - Minificar assets e considerar CDN para bibliotecas externas
  - Executar auditoria automatizada de acessibilidade (axe-core)

## 👩‍💻 Autor
- Caroline Fraga da Silva
- GitHub: https://github.com/Caroline-Fraga
- LinkedIn: https://www.linkedin.com/in/caroline-fraga-da-silva/

---

Se quiser, eu posso:
- adicionar um screenshot (`img/preview.png`) e incluir no README;
- ajustar badges adicionais (por exemplo, badge do deploy em Vercel);
- criar um `CONTRIBUTING.md` sucinto.

Informe se quer que eu aplique alguma dessas melhorias.
# Clone Netflix — Convenções do Projeto

Este README descreve convenções, decisões e como executar/avaliar o projeto — útil para portfólio.

## Objetivo
Projeto simples que replica visual da interface Netflix para fins de estudo e portfólio.

## Convenções adotadas
- Idioma do código: português (comentários e nomes de classes/IDs sempre que fizer sentido).
- Nomenclatura CSS/HTML: kebab-case, sem acentos (ex.: `filme-principal`, `carrosel-filmes`, `box-filme`, `conteiner`).
- Evitar renomear classes externas/terceiras (ex.: `owl-carousel`, `owl-theme`, `owl-nav`).
- Classes utilitárias mínimas: `conteiner` (estrutura), `logo`, `botao` (componentes interactivos).
- Arquivos estáticos: organizar imagens em `img/`, estilos em `style/`, scripts em `js/`.

## Alterações principais realizadas
- Ajustado `lang` para `pt-BR` e adicionada `meta description`.
- Padronizado nomes em português (ex.: `container` → `conteiner`).
- Melhorias de acessibilidade: `aria-label` em `nav` e botões, `alt` em imagens, estados de foco em CSS.
- Tornado o layout mais responsivo: `min-height` na seção principal, botões responsivos em dispositivos móveis.
- Inicialização do OwlCarousel encapsulada em `$(document).ready(...)`.
- Otimizações: `loading="lazy"` nas imagens do carrossel.
- Renomeação: `item` → `filme-item` nas entradas do carrossel (padronização em português).
- Refatoração JS: `js/owl/setup.js` com nomes e comentários em português e melhorias de acessibilidade nos botões do carrossel.
- Acessibilidade e Responsividade: adicionado `skip-link`, navegação por teclado no carrossel, itens do carrossel focáveis e melhorias no CSS para foco e tipografia responsiva.

## Como rodar localmente
1. Abra um terminal na pasta do projeto.
2. Rode um servidor simples (Python 3):

```powershell
py -3 -m http.server 8000
```

3. Abra http://localhost:8000 no navegador.

## Sugestões futuras (para portfólio)
- Converter imagens para WebP e fornecer `srcset` com múltiplos tamanhos.
- Extrair variáveis CSS (cores, espaçamentos) para um arquivo `_variables.scss` e usar Sass.
- Organizar CSS por componentes (header, hero, carousel, footer) e remover regras não utilizadas.
- Substituir jQuery por Vanilla JS para interações simples, se objetivo for modernização.
- Executar checagem de acessibilidade (axe-core) e testes de contraste (WCAG).

## Notas de manutenção
- Não renomeei classes pertencentes ao OwlCarousel ou outras bibliotecas.
- Se quiser, posso aplicar a padronização completa (renomear outras utilitárias) e atualizar referências automaticamente.

---

Se desejar que eu continue com: (A) aplicar tradução/kebab-case para todo o projeto; (B) reorganizar CSS em componentes; (C) otimizar imagens — diga qual opção prefere que eu execute a seguir.
