# Auditoria visual e proposta — 28/10/2026

Escopo: auditoria e proposta, sem alterações no código do site. Conteúdo, links, efeitos RGB, animações e funcionalidades preservados. Build de produção inspecionado em navegador real em 1440, 768 e 390 px. As seis capturas foram examinadas. Evidências em `.taste-skill/before/`.

## Skills

- `design-taste-frontend`: instalada neste projeto, registrada em `skills-lock.json`, origem `Leonxlnx/taste-skill`. Aplicada a esta auditoria: leitura do projeto, registro do antes, lint, inspector e crítica das capturas.
- `find-skills`: instalada no perfil, serve para descobrir skills; não é necessária para o trabalho visual.
- Skills de sistema encontradas: `imagegen`, `openai-docs`, `review-agent`, `skill-creator`, `skill-installer`. Não são necessárias para esta etapa. Skills de plugins disponíveis na sessão também não são necessárias para auditar este repositório local.
- As proibições estéticas da Taste Skill não substituem o pedido de preservar RGB, gradientes e efeitos. Os alertas correspondentes são critérios de gosto, não defeitos funcionais. Não se recomenda adicionar imagens ou vídeos arbitrários apenas para atingir a contagem exigida pela skill.

## Achados

| Prioridade | Evidência | Problema e proposta |
| --- | --- | --- |
| Alta | desktop-fold, tablet-fold, mobile-fold | Terminal deslocado para baixo e para a direita; cortado no tablet e celular. A animação `laptop-hover` substitui o `transform` usado na centralização. Separar o posicionamento da transformação animada, mantendo a flutuação, e acomodar todos os elementos nos limites da ilustração. |
| Alta | mobile-fold | Navegação horizontal corta GitHub e oculta WhatsApp fora da área inicial. Permitir quebra em linhas ou um menu acessível, mantendo todos os destinos e alvos confortáveis de toque. |
| Alta | desktop-page-01, tablet-page-01 | Há somente um projeto renderizado, FlowPDF, dentro de uma grade de duas colunas. Metade da seção fica vazia. Dar ao projeto existente uma composição de largura completa, sem alterar descrição, imagem ou links e sem inventar projetos. |
| Média | todas as capturas iniciais | Título ocupa três linhas nas três larguras. Ajustar largura e escala e flexibilizar a quebra forçada do span, preservando as palavras e o efeito RGB. Evitar reduzir demais a tipografia no celular apenas para cumprir a regra de duas linhas. |
| Média | desktop-page-01, mobile-page-01 | Monograma em Sobre ocupa um contêiner de foto e deixa uma faixa clara vazia. Ajustar proporção e fundo ao monograma existente; no desktop, usar duas colunas para os dois elementos reais, em vez da grade de três colunas herdada. |
| Média | relatório do inspector | Sete trechos abaixo de 13 px no celular, incluindo elementos da ilustração. Texto informativo precisa de tamanho confortável; distinguir texto decorativo dos rótulos e links que precisam ser lidos. |
| Média | App.css, index.html | Famílias Bricolage Grotesque e IBM Plex Sans declaradas, sem carregamento explícito encontrado no projeto. O inspector reporta os nomes CSS, o que não comprova disponibilidade real das fontes. Garantir arquivos locais ou adotar uma família de sistema coerente; consolidar a escala, hoje com 13 tamanhos medidos. |
| Média | App.css | Camadas sucessivas de temas e hotfixes disputam seletores. Consolidar regras e breakpoints antes de novos refinamentos, mantendo keyframes e estados existentes. |
| Técnica | build e portfolio-content.js | JS final de 787,27 kB, gzip de 492,64 kB, com imagem PNG incorporada em base64. Proposta: externalizar a mesma imagem, sem mudança visual, para permitir cache independente. |

## Identidade e proposta

Direção proposta: a trajetória de Gabriel, da eletrônica ao software, organiza a apresentação de quem constrói do banco de dados à interface. Esse argumento já existe no conteúdo e é mais pessoal que uma composição baseada apenas em cartões genéricos de tecnologias.

1. Corrigir geometria da ilustração, navegação móvel e áreas vazias. São as mudanças de maior impacto e menor risco.
2. Unificar margens, escala tipográfica, espaçamento e estados de foco. Preservar RGB e animações, dando ao título, projeto e ação principal uma hierarquia mais clara.
3. Valorizar o único projeto atual com uma composição mais ampla e tratar Sobre como monograma + trajetória. Manter integralmente os textos e destinos.
4. Após aprovação de eventuais novos materiais, considerar capturas reais da aplicação ou foto pessoal. Não substituir a imagem do projeto, inventar resultados, métricas ou depoimentos.

Nenhuma direção foi sorteada: esta etapa é uma revisão do estado atual, que a própria skill encerra após a crítica. O sorteio de composição fica para uma implementação que exija redesenho.

## Carrossel e funcionalidades

Nesta cópia, habilidades são seis artigos em `.skills-grid`: duas colunas no desktop e uma no celular. Não foi encontrado carrossel, controles, rolagem automática ou implementação correspondente. Não converter nem substituir essa área presumindo o comportamento de outra versão. Se o carrossel existe em outra cópia, usar sua implementação como referência antes de trabalhar nessa seção.

Os efeitos RGB de hover estão no CSS. A barra `.led-progress` tem largura inicial zero e não foi encontrado código que atualize seu progresso; registrar como possível funcionalidade incompleta, sem removê-la. O efeito React atual trata apenas das revelações por IntersectionObserver.

## Validação e limites

- `npm.cmd run build`: passou; aviso de bundle acima de 500 kB.
- `lint.mjs src`: 73 ocorrências FAIL e 22 WARN, muitas referentes ao estilo neon protegido pelo pedido.
- Inspector sobre `dist/index.html`: 19 categorias FAIL e 7 WARN; detalhes, larguras e ocorrências em `.taste-skill/before/report.json`. Esses totais não equivalem a 19 bugs funcionais.
- Primeira execução falhou com timeout de CDP; segunda execução fora do sandbox concluiu a auditoria nas três larguras.
- Capturas são amostras de uma interface animada. Não foi feita navegação funcional completa, teste de destinos externos, medição de Core Web Vitals nem certificação de acessibilidade. Estados de teclado e movimento reduzido exigem validação específica na implementação.

## Crítica conforme a Taste Skill

ROUND 1

Seen in one second: título grande com gradiente e ilustração tecnológica flutuante.

Idea (one sentence): a trajetória da eletrônica ao software está no texto, mas ainda não estrutura a composição visual.

Live thing: navegação por âncoras e links reais para projeto, GitHub e contato; não foi encontrado carrossel interativo nesta versão.

Layout words by section: hero=divisão / projetos=grade incompleta / habilidades=grade / sobre=colunas / rodapé=links.

Scores: design 6 · usability 5 · creativity 5 · content 7 → overall 5.6.

Caps applied: conteúdo ilustrativo cortado limita usabilidade a 5; composição ainda usa convenções da categoria. Nota subjetiva segundo a rubrica da skill, não uma medida de qualidade do código. Regras contrárias ao RGB protegido não determinam remoções.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Terminal deslocado e cortado: desktop-fold, tablet-fold, mobile-fold. Separar centralização e animação.
2. Metade vazia da seção de projetos: desktop-page-01 e tablet-page-01. Compor o único projeto usando a largura disponível.
3. Navegação cortada no celular: mobile-fold. Reorganizar os links em linhas ou menu acessível, preservando todos os destinos.
