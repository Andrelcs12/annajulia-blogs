# Julietta — cartas e escritos

Site editorial em Next.js para publicação de poemas, textos e reflexões. O
conteúdo e a autenticação do painel são gerenciados exclusivamente pelo Sanity.

## Requisitos

- Node.js 22.12 ou superior
- Um projeto no Sanity com um dataset público

## Configuração local

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie `.env.example` para `.env.local`.

3. Preencha:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. No gerenciamento do projeto Sanity, adicione `http://localhost:3000` às
   origens CORS com credenciais. Adicione também o domínio final quando publicar
   o site.

5. Inicie a aplicação:

   ```bash
   npm run dev
   ```

O site estará em `http://localhost:3000` e o Studio em
`http://localhost:3000/studio`.

## Publicação

No Studio, crie uma **Publicação**, escolha a categoria, preencha o conteúdo e
clique em **Publish**. O site consulta apenas documentos publicados e atualiza o
conteúdo em até 60 segundos.

Não é necessário criar token para a leitura pública. O acesso ao Studio usa a
autenticação e as permissões nativas do Sanity.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```
