# Sistema de Gestão de Acervo — Museu Paleontológico

## Sobre o projeto

O **Sistema de Gestão de Acervo do Museu Paleontológico** foi projetado para organizar e digitalizar os processos de recebimento, análise, doação e incorporação de peças ao acervo.

A solução substitui formulários físicos por um sistema seguro e responsivo, facilitando o trabalho da equipe do museu, melhorando a comunicação com doadores e mantendo um histórico completo de cada item cadastrado.

---

## Objetivos

- Digitalizar o processo de solicitação e recebimento de doações;
- Registrar, classificar e localizar cada peça do acervo;
- Padronizar as análises técnicas e os documentos relacionados às peças;
- Gerar termos, etiquetas e identificações de forma automática;
- Disponibilizar informações conforme o nível de acesso do usuário;
- Garantir segurança, integridade e disponibilidade dos dados.

---

## Público-alvo

O sistema atende principalmente a dois públicos:

- **Equipe do museu:** recepcionistas, curadores, técnicos e administradores;
- **Visitantes:** pessoas que poderão consultar informações públicas das peças por meio de códigos QR.

---

# Funcionalidades

## Cadastro de doações

A equipe do museu poderá registrar doações por meio de um formulário digital com os seguintes dados:

- Nome completo do doador;
- CPF;
- E-mail;
- Telefone;
- Endereço;
- Cinco imagens obrigatórias do item;
- Histórico e procedência da peça;
- Justificativa da doação;
- Tipo de acervo: item único ou coleção.

Além disso, o sistema permitirá:

- Atualização das informações em tempo real;
- Geração automática de número de protocolo;
- Envio de confirmação por e-mail;
- Emissão de termo de doação;
- Assinatura digital do termo.

---

## Painel do curador

O painel do curador reúne todas as solicitações recebidas para análise técnica.

As solicitações poderão ser filtradas por:

- Data de recebimento;
- Tipo de acervo;
- Status da solicitação.

Os status disponíveis incluem:

- Em análise;
- Aguardando documentação;
- Aprovado para incorporação;
- Não incorporado, com registro do motivo;
- Encaminhado para outra instituição.

Ao analisar uma peça, o curador poderá registrar:

- Parecer técnico;
- Indicação de aptidão para incorporação ou exposição;
- Justificativa da decisão;
- Histórico de todas as etapas e decisões relacionadas ao item.

---

## Ficha de registro do acervo

Após a aprovação da doação, a equipe poderá criar uma ficha detalhada da peça no acervo.

A ficha incluirá:

- Data da doação;
- Data de incorporação ao acervo;
- Nome, CPF/RG e telefone do doador;
- Nome do proprietário anterior, quando houver;
- Estado de conservação: ótimo, bom, regular ou ruim;
- Coleção e quantidade de itens;
- Cor e medidas;
- Número de patrimônio gerado em sequência;
- Localização atual: exposição, reserva técnica ou empréstimo;
- Localização detalhada na reserva técnica, com referência ao mapa;
- Cinco fotografias;
- Descrição detalhada da peça;
- Campo específico para antiguidades, incluindo valor quando necessário.

O sistema também permitirá cadastrar uma doação com dados incompletos quando isso for necessário.

---

# Administração

O módulo administrativo terá recursos para:

- Exportar dados em formato compatível com Microsoft Excel;
- Ajustar configurações gerais do sistema;
- Exibir o logotipo da Prefeitura em páginas e documentos;
- Traduzir conteúdos entre idiomas;
- Ajustar o tamanho das fontes para melhorar a acessibilidade.

---

# Documentos e recursos complementares

O sistema deverá gerar e organizar documentos importantes para o museu:

| Recurso | Descrição |
|---|---|
| **Termo de doação** | Documento que registra a doação voluntária e sua irreversibilidade após a assinatura. |
| **Termo de empréstimo** | Registra a saída e a data prevista para retorno de uma peça. |
| **Termo de errata** | Permite corrigir informações cadastradas anteriormente. |
| **Etiquetas** | Identificam as peças na exposição e na reserva técnica. |
| **Código QR** | Permite acessar informações da peça de forma rápida. |
| **Controle de visibilidade** | Define quais dados serão públicos ou restritos no código QR. |

---

# Fluxo de trabalho

## 1. Registro da doação

1. A recepcionista acessa o sistema e preenche o formulário de doação.
2. São enviados documentos e imagens da peça.
3. O sistema gera um número de protocolo e envia uma confirmação por e-mail.
4. O termo de doação é encaminhado para assinatura digital.
5. Após a assinatura e aprovação, a peça é incorporada ao cadastro geral do acervo.

## 2. Análise técnica

1. A equipe técnica recebe uma notificação sobre a nova solicitação.
2. A peça passa por uma análise.
3. A equipe registra o parecer técnico, a justificativa e o novo status.
4. A decisão de aceitar, recusar ou encaminhar o item é salva no histórico do sistema.

---

# Tecnologias previstas

| Área | Tecnologia |
|---|---|
| **Interface do sistema** | Vue.js |
| **Sistema interno** | PHP com Laravel |
| **Comunicação entre sistemas** | API REST |
| **Autenticação** | JWT |
| **Banco de dados** | PostgreSQL |
| **Armazenamento de arquivos** | MinIO |

Também serão aplicadas validações para verificar o tipo e o tamanho dos arquivos enviados, além da otimização de imagens e outros arquivos de mídia.

---

# Metas do projeto

- Reduzir em pelo menos **80%** o tempo entre o recebimento de uma proposta e a comunicação da decisão final;
- Registrar digitalmente **100%** dos processos de captação e incorporação;
- Alcançar índice mínimo de **80% de usabilidade**, avaliado pelos usuários;
- Evitar perda de dados durante envios e atualizações;
- Gerenciar aproximadamente **2.000 peças**, incluindo o acervo existente e novas doações.

---

# Resultado esperado

O sistema permitirá que o Museu Paleontológico tenha mais controle sobre suas peças, doações, documentos e processos técnicos.

Com a digitalização, o museu poderá reduzir o uso de papel, organizar melhor seu acervo, acompanhar cada etapa de uma doação e disponibilizar informações de maneira mais acessível e segura.

---

# Front-end (Vue 3 + Vite)

Este projeto une as duas versões que existiam do front (`feature/davi-telas` e `main`) em um só.

## Como rodar

```sh
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento
npm run build    # gera a versão de produção em /dist
npm run lint     # verifica o código (oxlint + eslint)
```

Para entrar no sistema durante o desenvolvimento, use qualquer e-mail válido (ou CPF com 11 números) e uma senha com pelo menos 6 caracteres. O login ainda é simulado até a API existir.

## Rotas

| URL | Nome da rota | Tela | Precisa de login |
|---|---|---|---|
| `/` | `login` | Acesso ao Sistema | não |
| `/dashboard` | `dashboard` | Painel de Controle | sim |
| `/analysis/:id` | `analysis` | Análise / detalhes da doação | sim |
| `/analysis/:id/aprovarIncorporacao` | `aprovarIncorporacao` | Aprovar Incorporação | sim |
| `/analysis/:id/justificarIncorporacao` | `justificarIncorporacao` | Justificativa de Não Incorporação | sim |
| `/analysis/:id/encaminharIncorporacao` | `encaminharIncorporacao` | Encaminhar Solicitação | sim |
| `/doacao/dadosPessoais` | `doacaoDadosPessoais` | Doação – etapa 1 | sim |
| `/doacao/informacoesItem` | `doacaoInformacoesItem` | Doação – etapa 2 | sim |
| `/doacao/fotosItem` | `doacaoFotosItem` | Doação – etapa 3 | sim |
| `/doacao/sucesso` | `doacaoSucesso` | Doação – etapa 4 | sim |

Fluxo do curador: **Painel → Analisar → Incorporar / Não Incorporar / Encaminhar → formulário → volta para a análise com o novo status.**
Fluxo de doação: **Painel → Formulário de Doação → etapas 1 a 4 → Painel.**

## Estrutura de pastas

```
src/
  Assets/Styles/      Main.css, Base.css, Formularios.css
  Components/
    AnalysisDetail/   peças da tela de análise
    Dashboard/        peças do painel
    Formularios/      formulários de doação e de decisão do curador
    Layout/           AppNavbar e AppFooter (iguais em todas as telas)
    Login/            LoginForm
  Composables/        useAnalysisData, useDoacao
  Router/             index.js (rotas + proteção de login)
  Services/           autenticacao.js, solicitacoes.js (dados de teste)
  Views/              uma View por rota
```

## Padrão de nomenclatura

| O quê | Padrão | Exemplo |
|---|---|---|
| Pastas | `NessePadrao` | `Components/Formularios` |
| Imagens e assets | `NessePadrao` | `Favicon.ico`, `Main.css` |
| Componentes `.vue` | `NessePadrao`, sempre com 2+ palavras (regra do Vue) | `FormFotosItem.vue` |
| Arquivos `.js` | `nessePadrao` | `useDoacao.js`, `autenticacao.js` |
| Variáveis, funções, props, eventos | `nessePadrao` | `salvarDadosPessoais`, `primaryButton` |
| Nomes e caminhos de rota | `nessePadrao` | `aprovarIncorporacao` |
| `id` de elementos HTML | `nessePadrao` | `id="nomeCompleto"` |
| Classes CSS | `kebab-case` (mantidas como estavam) | `.formulario-registro` |

Exceção: o `name` do `package.json` precisa ser minúsculo (regra do npm).

## Segurança

- O controle de login no front só organiza a navegação. **A API precisa validar o JWT em toda rota.**
- Quando houver API: JWT em cookie `httpOnly` + `Secure` + `SameSite`, nunca em `localStorage`.
- Dados pessoais da doação ficam só na memória da aba (não são gravados no navegador).
- Upload: apenas JPG/PNG/WEBP de até 5 MB (a API também deve validar tipo e tamanho).
- O parâmetro `?redirect=` do login só aceita caminhos internos (evita "open redirect").
- Ao publicar, configure no servidor os cabeçalhos `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` e HTTPS obrigatório.
