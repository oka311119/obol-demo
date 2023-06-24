.PHONY: build
build:
	sam build

.PHONY: validate
validate:
	sam validate

.PHONY: validate-lint
validate-lint:
	sam validate --lint

.PHONY: deploy
deploy: build
	sam deploy