# Kudos Board

## Setup

1. Clone the repository
2. Generate a `docs.json` file in the root of the project using the kudos board API
3. Setup you etc/hosts file to point `kudosboard.local` and `proxy.local`
4. Copy the docker compose override file `docker-compose.override.example.yml` to `docker-compose.override.yml`
5. Copy the `.env.example` file to `.env` and fill in the required values
6. Run `docker compose up -d` to start the application
7. Run `docker compose exec app test:unit` to run the unit tests