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
