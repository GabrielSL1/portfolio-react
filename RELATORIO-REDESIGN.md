# Redesign implementado — 28/10/2026

Plano aprovado aplicado com `design-taste-frontend`, mantendo React/Vite e as dependências existentes.

## Alterações

- `src/design.css`: sistema de layout, cores e tipografia, com fonte de sistema explícita. Navegação móvel quebra em linhas, com alvos de pelo menos 44 px. FlowPDF ocupa toda a largura disponível, em duas colunas no desktop e uma no celular. Sobre usa duas colunas reais e monograma sem faixa vazia.
- `src/App.css`: camada de efeitos consolidada, mantendo RGB, órbitas, flutuação, cursor, pulsação, revelações, brilhos e respostas a hover. Fallback de movimento reduzido mantém todo o conteúdo visível.
- Terminal centralizado com `inset` e margens automáticas, independentemente de sua animação. A primeira solução com a propriedade individual `translate` não sobreviveu à minificação; o problema foi corrigido e o build de produção foi inspecionado novamente.
- `src/App.jsx`: barra RGB acompanha a rolagem e o deslocamento das âncoras considera a altura real do cabeçalho. Eventos e observers têm limpeza no unmount.
- `src/portfolio-content.js`: código ilustrativo recebe tags `code`; imagem original é referenciada como arquivo separado, respeitando a base do Vite. Nenhuma alteração nos textos ou destinos dos links.
- `public/images/flowpdf.png`: os mesmos bytes do PNG original, extraídos do base64 para permitir cache independente e reduzir o JavaScript inicial.

Habilidades continuam com os seis grupos originais e seus efeitos. Esta cópia não possuía carrossel; não foi inventado nem substituído comportamento nessa área.

## Antes e depois

| Medida | Antes | Depois |
| --- | --- | --- |
| Título em 1440 / 768 / 390 px | 3 / 3 / 3 linhas | 2 / 2 / 2 linhas |
| Famílias CSS medidas | 4 | 2, sendo uma para código |
| Textos abaixo de 13 px em 390 px | 7 | Nenhum apontado pelo inspector |
| Navegação móvel | Rolagem horizontal, links cortados | Todos os destinos visíveis, com quebra em linhas |
| Terminal | Deslocado, com cortes | Centralizado, com flutuação preservada |
| Projeto | Uma coluna preenchida de uma grade de duas | Composição com imagem e texto na largura completa |
| Monograma | Faixa clara vazia | Proporção própria, sem faixa vazia |
| JS minificado | 787,27 kB | 232,36 kB |
| JS gzip | 492,64 kB | 72,62 kB |
| CSS minificado | 34,94 kB | 17,60 kB |

## Verificação

- `npm.cmd run build`: passou, sem avisos. Foi usado o executável `.cmd` porque a política local do PowerShell bloqueia `npm.ps1`; é o mesmo script `npm run build` do projeto.
- Comparação automatizada: todos os textos e 15 destinos de links preservados; hash SHA-256 do PNG extraído igual ao original.
- Testes em navegador real em 320, 390, 768, 1024 e 1440 px: sem overflow horizontal, terminal dentro da tela em amostras da animação, navegação dentro da tela, imagem carregada, botão principal funcional, destino da âncora abaixo do cabeçalho, barra de progresso funcionando e nenhum erro JavaScript registrado.
- Margens do contêiner medidas diretamente: esquerda e direita iguais nas cinco larguras.
- Tab alcança link com outline visível; movimento reduzido mantém revelações visíveis e interrompe as animações contínuas.
- Inspector final sobre `vite preview`: **0 FAIL e 2 WARN, com exceções explícitas**, nas três larguras padrão. As seis capturas finais foram abertas e examinadas.
- Evidências: `.taste-skill/after/report.json`, `.taste-skill/after/*.jpg` e `.taste-skill/browser-checks.json`. Scripts de comparação em `.taste-skill/verify-content.mjs` e `.taste-skill/verify-browser.mjs`.

## Exceções e limites da Taste Skill

O resultado de 0 FAIL não significa aprovação irrestrita das regras estéticas. Foram usadas as exceções `eyebrow`, `emoji`, `gradient`, `gradient-text`, `shadow`, `button-fx`, `outlined-box`, `icon-cards` e `few-pictures` para preservar os elementos e efeitos aprovados, a seção original de habilidades e a mídia existente. Não foram adicionadas imagens de terceiros, amostras de conteúdo ou métricas inventadas.

A exceção `off-centre` corresponde à estimativa do inspector pelo contorno dos textos: em 390 px, ele estima 16 e 35 px, enquanto a medição direta do contêiner confirma margens simétricas de 16 px. Nenhuma regra de overflow ou imagem quebrada foi dispensada. A saída estrita do lint continua reprovando gradientes e efeitos que o usuário pediu para preservar.

Os dois avisos restantes são ausência de vídeo e quantidade de tamanhos tipográficos no celular. Vídeo não integra o conteúdo disponível; os tamanhos adicionais incluem o código ilustrativo, ícones e monograma, com texto informativo a partir de 13 px. A aprovação final não constitui certificação de acessibilidade nem de desempenho em dispositivos físicos. Destinos externos foram preservados, mas não foi realizado login nem auditoria de disponibilidade dos serviços externos.

## Direção e crítica final

O draw da skill ofereceu `page-is-the-object`, `contact-sheet` e `split-stage`. Nenhuma foi aplicada integralmente: exigiriam alterar a composição aprovada, criar mídia inexistente ou fixar uma coluna por toda a navegação. A direção aprovada pelo usuário prevaleceu: preservar a ilustração animada e reorganizar apresentação, trabalho e trajetória. Não foi gerada ficha de direção nem seed final.

ROUND 2

Seen in one second: apresentação full stack com título dominante e terminal RGB centralizado.

Idea (one sentence): a trajetória de Gabriel da eletrônica ao software aparece em uma apresentação clara, seguida por seu trabalho e sua formação.

Live thing: navegação para projeto e contato, mais barra RGB ligada ao progresso real da leitura.

Layout words by section: hero=divisão / projetos=imagem e texto / habilidades=grade preservada / sobre=monograma e trajetória / rodapé=links.

Scores: design 6.5 · usability 8 · creativity 6 · content 7 → overall 6.95; teto estrito da rubrica 6.5 pelos dispositivos visuais preservados.

Caps applied: identidade neon com gradientes, brilhos e rótulos preservados por instrução. A criatividade continua limitada pela ilustração tecnológica convencional e pela disponibilidade de apenas uma imagem de projeto; não foi atribuída nota de site premiado.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `desktop-fold.jpg`: a ilustração ainda segue uma convenção conhecida de portfólios tecnológicos. Uma evolução futura pode usar uma demonstração real do trabalho, mediante aprovação de novos materiais.
2. `mobile-fold.jpg`: cabeçalho ocupa três linhas para manter todos os destinos imediatamente visíveis. Um menu compacto seria uma alternativa futura, caso o usuário prefira essa interação.
3. `desktop-page-01.jpg`: o material disponível mostra um logo, sem capturas da aplicação. A inclusão futura de capturas reais pode comunicar melhor o trabalho, sem inventar conteúdo.
