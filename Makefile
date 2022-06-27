.PHONY: pgcli migrate-up migrate-down migrate-version

DATABASE_MIGRATIONS_DIR=db/migrations
DATABASE_TYPE=pg
MODELS_DIR=rpc/model
GOCTL_STYLE=goZero

# Load env from .env
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

pgcli:
	pgcli $(DATABASE_URL)

migrate-new:
	migrate create -ext sql -dir $(DATABASE_MIGRATIONS_DIR) -seq $(NAME)

migrate-up:
	migrate -database $(DATABASE_URL) -path $(DATABASE_MIGRATIONS_DIR) up $(N)

migrate-down:
	migrate -database $(DATABASE_URL) -path $(DATABASE_MIGRATIONS_DIR) down $(N)

migrate-version:
	migrate -database $(DATABASE_URL) -path $(DATABASE_MIGRATIONS_DIR) version

migrate-force:
	migrate -database $(DATABASE_URL) -path $(DATABASE_MIGRATIONS_DIR) force $(VERSION)

generate-model:
	goctl model $(DATABASE_TYPE) datasource -url=$(DATABASE_URL) -table="*" -dir=$(MODELS_DIR) -style $(GOCTL_STYLE) -c