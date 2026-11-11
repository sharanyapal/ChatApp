# ChatApp

**A React chat interface connected to a small Express authentication proxy.**

`React · Vite · Express · ChatEngine` · `JavaScript` · Repository reference

---

## Project overview

A code for a chat messaging app like Whatsapp, Messenger, Instagram, etc.

## Run or inspect locally

**Backend (terminal 1)**

```bash
cd backend
npm install
npm start
```

**Frontend (terminal 2)**

```bash
cd frontend
npm install
npm run dev
```

The backend listens on port 3001 and uses the ChatEngine API. Configure your own service credentials through environment variables before using a real account; this historical source should not be treated as production-ready authentication.

## Repository contents

| Item | What it represents |
|:--|:--|
| [`README.md`](./README.md) | Project documentation |
| [`backend/`](./backend/) | Express API and authentication endpoint |
| [`frontend/`](./frontend/) | Vite + React chat UI |

## How to evaluate

- Start from the program entry point or interface.
- Test with non-sensitive sample data and review failure cases.
- Inspect any dependency, permission, token or environment-variable requirements before execution.

## Scope

This README reflects files currently present in the repository. It does not claim that all external services, hosting links or dependencies are operational. Never publish credentials or user data when testing it.

<details><summary><strong>Original README / historical project notes</strong></summary>

# ChatApp
A code for a chat messaging app like Whatsapp, Messenger, Instagram, etc.

</details>

---

<sub>Maintained with the [Sharanya Pal GitHub project collection](https://github.com/sharanyapal?tab=repositories).</sub>
