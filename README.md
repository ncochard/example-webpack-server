**Background:**

We are building our packages with the preset `es2015` with the option `"modules": false`. Then we bundle our **browser** applications using webpack with the following option `target: 'web'`.

We are also building our packages with the preset `es2015-node6`. Then we bundle our **server** applications using webpack with the following option `target: 'node'`.

Thanks for the option `"modules": false`, our **browser** applications benefit from *tree-shaking* because our packages contains the `import`/`export` statements after being compiled by babel. But our **server** applications do not have that benefit.

**It would be awesome if the preset `es2015-node6` also supported the option `"modules": false`. This would give us the option of not transpiling the `import`/`export` statements and our server applications would benefit from tree-shaking.**

**Examples:**

Example of `.babelrc` for our packages:

	{
	    "env":{
	        "browser": {
	            "presets": [
	                ["es2015", { "modules": false }]
	            ]
	        },
	        "node": {
	            "presets": [
	                ["es2015-node6"] // { "modules": false } not supported!
	            ]
	        }
	    }
	}

Example of `webpack.config.js` for a **browser** application:

	module.exports = {
	    target: 'web',
	    ...
	};

Example of `webpack.config.js` for a **server** application:

	module.exports = {
	    target: 'node',
	    ...
	};