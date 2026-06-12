# Victoriaflix

Site estático estilo Netflix para uma página pessoal.

## Arquivos principais

- `index.html` - página inicial
- `style.css` - estilos do projeto
- `script.js` - animações e interações
- `videos.html` - página de vídeos locais
- imagens e vídeos que ficam no mesmo diretório

## Como publicar no GitHub Pages

1. Abra o terminal na pasta do projeto:
   ```powershell
   cd c:\Users\USER\Documents\projetos\Victoria
   ```
2. Inicialize o repositório Git (se ainda não existir):
   ```powershell
   git init
   git add .
   git commit -m "Primeiro commit"
   ```
3. Crie um repositório no GitHub e adicione o remoto:
   ```powershell
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
   git branch -M main
   git push -u origin main
   ```
4. No GitHub, abra o repositório, vá em **Settings > Pages** e selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Salve e aguarde a publicação. A URL será algo como:
   ```text
   https://SEU_USUARIO.github.io/NOME_DO_REPO/
   ```

## Observações

- O arquivo `index.html` deve ficar na raiz do repositório para funcionar como página inicial.
- Se usar vídeos locais, verifique o tamanho dos arquivos para não exceder os limites do GitHub.
- Se quiser, você pode renomear o repositório para `victoria` ou outro nome fácil de lembrar.
