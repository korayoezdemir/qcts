docker:
	cd deployments && docker compose up -d

docker-down:
	cd deployments && docker compose down

postgres-connect:
	docker exec -it my-postgres psql -U user mydb

docker-delte-old-volumes:
	docker volume prune -f

init-db:
	cd deployments && ./init-db.sh

node:
	npm start