Features

- usar um findKudosBySlug na página do kudos
- getKudos na pagina de panel
- criar um hook que gerencia os estados apenas

- JWT para autenticação. Fugir do localhost

- Refatorar kudos no singular

- página de Kudo ter dados do painel
- criar kudos
- edição de painel
  - na pagina de painel e no detalhamento
- edição de kudos
  - na pagina de kudos e no detalhamento
- rota de paineis arquivados
- arquivamento de painel
- desarquivamento de painel
- segurança:
  - validação de senha de painel para admin
  - validação de senha de painel para client
  - kudos que tem painel bloqueado por senha, exigir a mesma
- Loading ter um timeout para apontar erro

-----

Bugs

- Warning do useRouter

-----

Layout

- Visual do kudos na página de painel


Rotas do frontend:

panels/
kudos/slug
panels/slug

Rotas de backend:

panels/
kudos/slug
panels/slug
panels/slug/kudos
