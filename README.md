# 🤖 Aishia-IA — Assistente de IA Kawaii

A **Aishia-IA** é uma interface de chat moderna, responsiva e estilizada, inspirada em assistentes de IA conversacionais.  
O foco do projeto é **UI/UX**, **persistência local de conversas** e **experiência fluida**, sem backend (por enquanto 👀).

---

## ✨ Funcionalidades

- 💬 Interface de chat moderna estilo IA
- 🧠 Sistema de **sessões de conversa** (salvas no `localStorage`)
- 📂 Sidebar com histórico de conversas
- ➕ Criação de novas conversas
- ⌨️ Input com **auto-resize**
- 🌀 Indicador de digitação animado
- 📱 Totalmente responsivo (mobile e desktop)
- 🎨 Tema escuro com gradientes e visual kawaii
- ♿ Acessibilidade básica (`aria-label`, `role`, etc.)

---

## 🧱 Estrutura da Página

- **HTML**: Estrutura principal da aplicação
- **CSS interno**:
  - Variáveis CSS (`:root`)
  - Layout em grid e flex
  - Animações suaves
  - Design responsivo
- **JavaScript**:
  - Gerenciamento de sessões
  - Persistência no `localStorage`
  - Controle de UI (sidebar, mensagens, scroll)
  - Utilitários (ID, scroll, resize de textarea)

---

## 💾 Persistência de Dados

As conversas são armazenadas localmente usando:

```js
localStorage
```

## Chaves utilizadas:
```
aishia_chat_sessions → todas as sessões
aishia_current_session → sessão ativa
```

## ⚠️ Ao limpar o cache do navegador, as conversas serão perdidas.

---
## 📦 Tecnologias Utilizadas
- HTML5
- CSS3 (variáveis, animações, responsividade)
- JavaScript Vanilla
- LocalStorage
- Puter.js (para futuras integrações)
---

## 🚀 Como Usar
1. Clone ou baixe o projeto
2. Abra o arquivo .html no navegador
3. Comece uma nova conversa
4. As mensagens ficam salvas automaticamente

---
## 🛠️ Possíveis Melhorias Futuras
- 🔌 Integração com backend (Node.js / API de IA)
- 🧠 Memória contextual mais avançada
- 🗄️ Banco de dados no lugar do localStorage
- 🎭 Personalidades diferentes para a IA
- 🌐 Login de usuários
- 📱 PWA / App Web
---

## ⚠️ Aviso
Aishia-IA pode cometer erros. Sempre verifique informações importantes.

## ❤️ Créditos
- Projeto desenvolvido por JGDev
- Interface pensada para ser leve, bonita e divertida ✨

## 📜 Licença
Este projeto é livre para estudo e uso pessoal.
