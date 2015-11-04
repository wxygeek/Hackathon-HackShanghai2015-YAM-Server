TESTS = $(shell ls -S `find test -type f -name "*.test.js" -print`)
REGISTRY = http://registry.npm.taobao.org
REPORTER = spec
TIMEOUT = 3000
MOCHA_OPTS =

start: init
	@NODE_ENV=dev DEBUG=* node --harmony ./worker.js

dev:
	@NODE_ENV=dev DEBUG=* ./node_modules/.bin/node-dev --harmony ./worker.js

init:
	@DEBUG=* node --harmony ./init/index.js

fake: init
	@DEBUG=* node --harmony ./fake/index.js

install:
	@npm install \
		--registry=$(REGISTRY)

jshint:
	@./node_modules/.bin/jshint .

test: fake
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--harmony \
		--bail \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		--require should \
		--require co-mocha \
		$(MOCHA_OPTS) \
		$(TESTS)

cov: fake
	@NODE_ENV=test node --harmony \
		node_modules/.bin/istanbul cover --preserve-comments \
		./node_modules/.bin/_mocha \
		-- -u exports \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		--require should \
		--require co-mocha \
		$(MOCHA_OPTS) \
		$(TESTS)

clean:
	@rm -rf node_modules
	@rm -rf coverage

.PHONY: start dev init fake install jshint test cov clean