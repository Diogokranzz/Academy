# GymVerse

Uma aplicação web construída com Next.js para explorar academias, treinar com sessões ao vivo, acompanhar progresso e assinar planos. O foco é experiência moderna, visual limpo, responsividade, animações suaves e integrações úteis do dia a dia.

## Visão geral

- Interface em React com Next.js 14
- Estilos com Tailwind CSS e design leve, com suporte a modo claro/escuro
- Animações de scroll e microinterações
- Sessões ao vivo com contagem regressiva e link dinâmico do Google Meet
- Catálogo de recursos: Explorar academias, Nutrição inteligente, Comunidade, Roadmap
- Dashboard pessoal com métricas, próximos treinos e conquistas
- Checkout com PIX (QR Code), cartão e boleto (mock)
- API Routes para autenticação simulada, pagamentos simulados e agendamento no Google Calendar

## Stack

- Next.js 14 (pasta `pages/` + API Routes)
- React 18
- Tailwind CSS 3
- TypeScript
- Google Calendar API (via `googleapis`)

## Funcionalidades

### UI e navegação
- Header com logo animado, navegação por âncoras e alternância de tema
- Seções: Hero, Treinos personalizados, Explorar, Nutrição, Comunidade, Planos, Roadmap e Footer
- Responsivo do mobile ao desktop

### Sessão ao vivo
- Cartão “Live Session” com cronômetro e barra de progresso
- A cada término, rota automaticamente para a próxima sessão e gera novo link do Meet
- Endpoint para agendar evento no Google Calendar com conferência Meet

### Checkout
- Três planos: Free, Pro e Pro+
- Pagamentos simulados:
  - PIX: exibição de QR Code e cópia do código
  - Cartão: campos de validação básica
  - Boleto: dados mock para impressão
- Confirmação simulada após “pagamento”

### Modo claro/escuro
- Persistência no `localStorage`
- Regras extras de legibilidade sobre imagens/blur

### Dashboard
- Abas “Visão Geral” e “Progresso”
- Métricas semanais, próximos treinos e conquistas

## Estrutura de pastas

```
.
├─ components/        # Logo, Header, Mobile Menu, Theme Toggle, Dashboard etc.
├─ sections/          # Seções da landing (Hero, Explore, Nutrition, Community, Plans, Roadmap)
├─ pages/
│  ├─ index.tsx       # Página principal
│  └─ api/            # API Routes (auth, payments, live etc.)
├─ src/pages/         # Modal de Checkout (variante)
├─ styles/            # globals.css
├─ public/            # assets estáticos
├─ tailwind.config.js
├─ tsconfig.json
└─ vercel.json
```

## Endpoints

- `POST /api/auth/login` — autenticação simulada
- `POST /api/auth/register` — cadastro simulado
- `POST /api/payments/process` — processamento de pagamento simulado
- `POST /api/plans/activate` — ativação de plano Free
- `GET  /api/live/sessions` — lista de sessões ao vivo
- `POST /api/live/schedule` — cria evento no Google Calendar com link do Meet

## Variáveis de ambiente

Crie um `.env.local` na raiz:

```
# Fallback do Meet (opcional)
NEXT_PUBLIC_MEET_URL=https://meet.new

# Google Calendar API (OAuth2)
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REFRESH_TOKEN=...
GOOGLE_CALENDAR_ID=primary
```

Como obter credenciais do Google:
1. No Google Cloud Console, ative a "Google Calendar API" e crie um OAuth Client (Web Application)
2. Faça um fluxo de consentimento offline para gerar um `refresh_token` com escopo `https://www.googleapis.com/auth/calendar`
3. Preencha as variáveis acima

## Instalação e execução

```bash
npm install
npm run dev
# produção
npm run build
npm start
```

## Deploy

O projeto está preparado para Vercel:
- Build: `next build`
- Start: gerenciado pela plataforma
- Arquivo `vercel.json` com ajustes básicos

## Decisões de design

- Legibilidade primeiro: textos sobre imagens/blur forçados para branco quando necessário
- Microinterações sutis: estados de hover, transições e animações discretas
- Cores e contrastes calibrados para clareza no claro e escuro
- Estrutura por seções para facilitar evolução incremental

## Acessibilidade e performance

- Navegação por teclado nos componentes interativos
- Uso de cores com bom contraste nas principais superfícies
- Imagens otimizadas via URLs do Unsplash
- Animações com CSS e IntersectionObserver para reduzir custo de renderização

## Limitações e próximos passos

- Autenticação e pagamentos são simulados; integrações reais exigem backend e provedores
- Lista de sessões em memória; pode migrar para Google Sheets, banco de dados ou CMS
- QR Code do PIX usa serviço público; alternativa local: biblioteca `qrcode` para DataURL
- Calendar: fluxo de OAuth e armazenamento seguro de tokens precisam de atenção em produção

## Troubleshooting

- `Module not found: 'googleapis'`: rode `npm i googleapis`, apague `.next/` e reinicie. O import no endpoint é dinâmico
- Erro de PostCSS: use `postcss.config.cjs` com chave `plugins`
- Texto ilegível sobre imagens: confirme `backdrop-blur-sm` e as regras em `styles/globals.css`

## Licença

Uso livre para fins educacionais e demonstrações. Avalie a adequação antes de usar em produção.
