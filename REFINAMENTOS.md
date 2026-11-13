# Refinamentos do portfólio

O portfólio usa React e Vite, com estilos em CSS e conteúdo centralizado em `src/portfolio-content.js`.

## Recursos

- Cards de habilidades com tecnologias visíveis e explicações expansíveis por clique, toque e teclado.
- Grade de três colunas no desktop, duas no tablet e uma no celular.
- Demonstração real do FlowPDF com controles nativos, reprodução manual e pausa fora da tela ou ao ocultar a aba.
- Botão de retorno ao início com foco acessível e afastamento dos links do rodapé.
- Preferência por movimento reduzido respeitada nas animações e na navegação.
- Metadados de descrição e compartilhamento em `index.html`.

## Arquivos principais

| Arquivo | Responsabilidade |
| --- | --- |
| `src/portfolio-content.js` | Textos, navegação, projetos e habilidades. |
| `src/design.css` | Cores, tipografia, composição e responsividade. |
| `src/App.css` | Animações e estados de interação. |
| `src/ProjectDemo.jsx` | Player e alternativas quando a mídia não está disponível. |
| `src/project-media.js` | Endereço do projeto, vídeo, poster e descrição. |
| `src/BackToTop.jsx` | Retorno ao início e gerenciamento de foco. |
| `src/App.jsx` | Integração dos componentes e efeitos da página. |

## Cores

O azul principal é `#458cf5`, definido por `--accent` em `src/design.css`. Títulos, botões e ícones compartilham esse token. O texto principal usa branco, sobre fundos escuros.

## Atualizar a demonstração

1. Grave a aplicação com dados de exemplo e sem credenciais ou contatos visíveis.
2. Salve um MP4/H.264 em `public/videos/` e uma captura real em `public/images/`.
3. Atualize os campos de `flowPdfMedia` em `src/project-media.js`, incluindo a descrição alternativa e as dimensões do poster.
4. Caso a gravação tenha fala, configure legendas WebVTT pelo campo `captions`.

O player usa `preload="none"`, não inicia automaticamente e apresenta o poster quando o vídeo falha. A gravação atual tem aproximadamente 26 segundos e mostra busca, leitura e classificação de um PDF de demonstração.

## Executar e validar

Use `npm run dev` para desenvolvimento e `npm run build` para gerar `dist/`. Para conferir o build localmente, use `npm run preview`. No PowerShell, os comandos também podem ser executados com `npm.cmd`.

Verifique navegação, menu, foco, expansão das habilidades, reprodução do vídeo e ausência de rolagem horizontal em telas pequenas. O projeto não possui scripts de lint ou testes automatizados configurados em `package.json`.

## Publicação e imagem pessoal

O monograma GL permanece até ser substituído por uma fotografia pessoal. Após definir o endereço público do portfólio, configure `canonical` e `og:url` em `index.html` com a URL real. Alterações locais não publicam o site automaticamente.
