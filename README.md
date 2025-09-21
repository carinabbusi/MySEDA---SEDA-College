# Verify Letter Site (React + Vite + Tailwind)

## Rodar local
```bash
npm install
npm run dev
```
Abra http://localhost:5173

## Deploy no GitHub Pages
1. No `package.json`, adicione sua URL em `"homepage"`, por exemplo:
   `"homepage": "https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO"`

2. Depois rode:
```bash
npm run deploy
```
Isso cria o branch `gh-pages` e o site fica online em:
https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO
