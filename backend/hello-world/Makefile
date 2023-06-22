.PHONY: build
build-HelloWorldFunction:
	GOOS=linux GOARCH=arm64 go build -o $(ARTIFACTS_DIR)/bootstrap -tags lambda.norpc ./cmd/bootstrap

.PHONY: clean
clean:
	rm bootstrap

.PHONY: local
local:
	sam build-HelloWorldFunction
	sam local invoke HelloWorldFunction --event event.json
