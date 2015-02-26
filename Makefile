
default: test

test: node_modules $(wildcard test/*.js)
	@node_modules/.bin/mocha test/test.js

clean:
	@rm -rf build.js uniquid.js uniquid.min.js components node_modules

node_modules: package.json
	@npm install

bundle: index.js
	@duo --standalone uniquid --stdout index.js > uniquid.js
	@uglifyjs uniquid.js --mangle --compress --output uniquid.min.js

.PHONY: clean test
