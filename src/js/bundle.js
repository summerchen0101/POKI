/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
	if(currentRoute === '') currentRoute = 'index'

	var filePath = `./${currentRoute}.js`

	try{
	    __webpack_require__(1)(filePath)
	}catch(err){
	    console.log(`No such file --> ${filePath}`)
	}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./bundle": 2,
		"./bundle.js": 2,
		"./index": 3,
		"./index.js": 3,
		"./products": 4,
		"./products.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

		var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
		if(currentRoute === '') currentRoute = 'index'

		var filePath = `./${currentRoute}.js`

		try{
		    __webpack_require__(1)(filePath)
		}catch(err){
		    console.log(`No such file --> ${filePath}`)
		}


	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

		var map = {
			"./bundle": 2,
			"./bundle.js": 2,
			"./index": 3,
			"./index.js": 3,
			"./products": 4,
			"./products.js": 4
		};
		function webpackContext(req) {
			return __webpack_require__(webpackContextResolve(req));
		};
		function webpackContextResolve(req) {
			return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
		};
		webpackContext.keys = function webpackContextKeys() {
			return Object.keys(map);
		};
		webpackContext.resolve = webpackContextResolve;
		module.exports = webpackContext;
		webpackContext.id = 1;


	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {

		/******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ (function(module, exports, __webpack_require__) {

			var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
			if(currentRoute === '') currentRoute = 'index'

			var filePath = `./${currentRoute}.js`

			try{
			    __webpack_require__(1)(filePath)
			}catch(err){
			    console.log(`No such file --> ${filePath}`)
			}



		/***/ }),
		/* 1 */
		/***/ (function(module, exports, __webpack_require__) {

			var map = {
				"./bundle": 2,
				"./bundle.js": 2,
				"./index": 3,
				"./index.js": 3,
				"./products": 4,
				"./products.js": 4
			};
			function webpackContext(req) {
				return __webpack_require__(webpackContextResolve(req));
			};
			function webpackContextResolve(req) {
				return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
			};
			webpackContext.keys = function webpackContextKeys() {
				return Object.keys(map);
			};
			webpackContext.resolve = webpackContextResolve;
			module.exports = webpackContext;
			webpackContext.id = 1;


		/***/ }),
		/* 2 */
		/***/ (function(module, exports) {

			/******/ (function(modules) { // webpackBootstrap
			/******/ 	// The module cache
			/******/ 	var installedModules = {};

			/******/ 	// The require function
			/******/ 	function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/ 		if(installedModules[moduleId])
			/******/ 			return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/ 		var module = installedModules[moduleId] = {
			/******/ 			exports: {},
			/******/ 			id: moduleId,
			/******/ 			loaded: false
			/******/ 		};

			/******/ 		// Execute the module function
			/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/ 		module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/ 		return module.exports;
			/******/ 	}


			/******/ 	// expose the modules object (__webpack_modules__)
			/******/ 	__webpack_require__.m = modules;

			/******/ 	// expose the module cache
			/******/ 	__webpack_require__.c = installedModules;

			/******/ 	// __webpack_public_path__
			/******/ 	__webpack_require__.p = "";

			/******/ 	// Load entry module and return exports
			/******/ 	return __webpack_require__(0);
			/******/ })
			/************************************************************************/
			/******/ ([
			/* 0 */
			/***/ (function(module, exports, __webpack_require__) {

				var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
				if(currentRoute === '') currentRoute = 'index'

				var filePath = `./${currentRoute}.js`

				try{
				    __webpack_require__(1)(filePath)
				}catch(err){
				    console.log(`No such file --> ${filePath}`)
				}



			/***/ }),
			/* 1 */
			/***/ (function(module, exports, __webpack_require__) {

				var map = {
					"./bundle": 2,
					"./bundle.js": 2,
					"./index": 3,
					"./index.js": 3,
					"./products": 4,
					"./products.js": 4
				};
				function webpackContext(req) {
					return __webpack_require__(webpackContextResolve(req));
				};
				function webpackContextResolve(req) {
					return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
				};
				webpackContext.keys = function webpackContextKeys() {
					return Object.keys(map);
				};
				webpackContext.resolve = webpackContextResolve;
				module.exports = webpackContext;
				webpackContext.id = 1;


			/***/ }),
			/* 2 */
			/***/ (function(module, exports) {

				/******/ (function(modules) { // webpackBootstrap
				/******/ 	// The module cache
				/******/ 	var installedModules = {};

				/******/ 	// The require function
				/******/ 	function __webpack_require__(moduleId) {

				/******/ 		// Check if module is in cache
				/******/ 		if(installedModules[moduleId])
				/******/ 			return installedModules[moduleId].exports;

				/******/ 		// Create a new module (and put it into the cache)
				/******/ 		var module = installedModules[moduleId] = {
				/******/ 			exports: {},
				/******/ 			id: moduleId,
				/******/ 			loaded: false
				/******/ 		};

				/******/ 		// Execute the module function
				/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ 		// Flag the module as loaded
				/******/ 		module.loaded = true;

				/******/ 		// Return the exports of the module
				/******/ 		return module.exports;
				/******/ 	}


				/******/ 	// expose the modules object (__webpack_modules__)
				/******/ 	__webpack_require__.m = modules;

				/******/ 	// expose the module cache
				/******/ 	__webpack_require__.c = installedModules;

				/******/ 	// __webpack_public_path__
				/******/ 	__webpack_require__.p = "";

				/******/ 	// Load entry module and return exports
				/******/ 	return __webpack_require__(0);
				/******/ })
				/************************************************************************/
				/******/ ([
				/* 0 */
				/***/ (function(module, exports, __webpack_require__) {

					var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
					if(currentRoute === '') currentRoute = 'index'

					var filePath = `./${currentRoute}.js`

					try{
					    __webpack_require__(1)(filePath)
					}catch(err){
					    console.log(`No such file --> ${filePath}`)
					}


				/***/ }),
				/* 1 */
				/***/ (function(module, exports, __webpack_require__) {

					var map = {
						"./bundle": 2,
						"./bundle.js": 2,
						"./index": 3,
						"./index.js": 3,
						"./products": 4,
						"./products.js": 4
					};
					function webpackContext(req) {
						return __webpack_require__(webpackContextResolve(req));
					};
					function webpackContextResolve(req) {
						return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
					};
					webpackContext.keys = function webpackContextKeys() {
						return Object.keys(map);
					};
					webpackContext.resolve = webpackContextResolve;
					module.exports = webpackContext;
					webpackContext.id = 1;


				/***/ }),
				/* 2 */
				/***/ (function(module, exports) {

					/******/ (function(modules) { // webpackBootstrap
					/******/ 	// The module cache
					/******/ 	var installedModules = {};

					/******/ 	// The require function
					/******/ 	function __webpack_require__(moduleId) {

					/******/ 		// Check if module is in cache
					/******/ 		if(installedModules[moduleId])
					/******/ 			return installedModules[moduleId].exports;

					/******/ 		// Create a new module (and put it into the cache)
					/******/ 		var module = installedModules[moduleId] = {
					/******/ 			exports: {},
					/******/ 			id: moduleId,
					/******/ 			loaded: false
					/******/ 		};

					/******/ 		// Execute the module function
					/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ 		// Flag the module as loaded
					/******/ 		module.loaded = true;

					/******/ 		// Return the exports of the module
					/******/ 		return module.exports;
					/******/ 	}


					/******/ 	// expose the modules object (__webpack_modules__)
					/******/ 	__webpack_require__.m = modules;

					/******/ 	// expose the module cache
					/******/ 	__webpack_require__.c = installedModules;

					/******/ 	// __webpack_public_path__
					/******/ 	__webpack_require__.p = "";

					/******/ 	// Load entry module and return exports
					/******/ 	return __webpack_require__(0);
					/******/ })
					/************************************************************************/
					/******/ ([
					/* 0 */
					/***/ (function(module, exports, __webpack_require__) {

						var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
						if(currentRoute === '') currentRoute = 'index'

						var filePath = `./${currentRoute}.js`

						try{
						    __webpack_require__(1)(filePath)
						}catch(err){
						    console.log(`No such file --> ${filePath}`)
						}


					/***/ }),
					/* 1 */
					/***/ (function(module, exports, __webpack_require__) {

						var map = {
							"./bundle": 2,
							"./bundle.js": 2,
							"./index": 3,
							"./index.js": 3,
							"./products": 4,
							"./products.js": 4
						};
						function webpackContext(req) {
							return __webpack_require__(webpackContextResolve(req));
						};
						function webpackContextResolve(req) {
							return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
						};
						webpackContext.keys = function webpackContextKeys() {
							return Object.keys(map);
						};
						webpackContext.resolve = webpackContextResolve;
						module.exports = webpackContext;
						webpackContext.id = 1;


					/***/ }),
					/* 2 */
					/***/ (function(module, exports) {

						/******/ (function(modules) { // webpackBootstrap
						/******/ 	// The module cache
						/******/ 	var installedModules = {};

						/******/ 	// The require function
						/******/ 	function __webpack_require__(moduleId) {

						/******/ 		// Check if module is in cache
						/******/ 		if(installedModules[moduleId])
						/******/ 			return installedModules[moduleId].exports;

						/******/ 		// Create a new module (and put it into the cache)
						/******/ 		var module = installedModules[moduleId] = {
						/******/ 			exports: {},
						/******/ 			id: moduleId,
						/******/ 			loaded: false
						/******/ 		};

						/******/ 		// Execute the module function
						/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

						/******/ 		// Flag the module as loaded
						/******/ 		module.loaded = true;

						/******/ 		// Return the exports of the module
						/******/ 		return module.exports;
						/******/ 	}


						/******/ 	// expose the modules object (__webpack_modules__)
						/******/ 	__webpack_require__.m = modules;

						/******/ 	// expose the module cache
						/******/ 	__webpack_require__.c = installedModules;

						/******/ 	// __webpack_public_path__
						/******/ 	__webpack_require__.p = "";

						/******/ 	// Load entry module and return exports
						/******/ 	return __webpack_require__(0);
						/******/ })
						/************************************************************************/
						/******/ ([
						/* 0 */
						/***/ (function(module, exports, __webpack_require__) {

							var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
							if(currentRoute === '') currentRoute = 'index'

							try{
							    __webpack_require__(1)(`./${currentRoute}.js`)
							}catch(err){
							    console.log(`No such file --> ./${currentRoute}.js`)
							}


						/***/ }),
						/* 1 */
						/***/ (function(module, exports, __webpack_require__) {

							var map = {
								"./bundle": 2,
								"./bundle.js": 2,
								"./index": 3,
								"./index.js": 3,
								"./products": 4,
								"./products.js": 4
							};
							function webpackContext(req) {
								return __webpack_require__(webpackContextResolve(req));
							};
							function webpackContextResolve(req) {
								return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
							};
							webpackContext.keys = function webpackContextKeys() {
								return Object.keys(map);
							};
							webpackContext.resolve = webpackContextResolve;
							module.exports = webpackContext;
							webpackContext.id = 1;


						/***/ }),
						/* 2 */
						/***/ (function(module, exports) {

							/******/ (function(modules) { // webpackBootstrap
							/******/ 	// The module cache
							/******/ 	var installedModules = {};

							/******/ 	// The require function
							/******/ 	function __webpack_require__(moduleId) {

							/******/ 		// Check if module is in cache
							/******/ 		if(installedModules[moduleId])
							/******/ 			return installedModules[moduleId].exports;

							/******/ 		// Create a new module (and put it into the cache)
							/******/ 		var module = installedModules[moduleId] = {
							/******/ 			exports: {},
							/******/ 			id: moduleId,
							/******/ 			loaded: false
							/******/ 		};

							/******/ 		// Execute the module function
							/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

							/******/ 		// Flag the module as loaded
							/******/ 		module.loaded = true;

							/******/ 		// Return the exports of the module
							/******/ 		return module.exports;
							/******/ 	}


							/******/ 	// expose the modules object (__webpack_modules__)
							/******/ 	__webpack_require__.m = modules;

							/******/ 	// expose the module cache
							/******/ 	__webpack_require__.c = installedModules;

							/******/ 	// __webpack_public_path__
							/******/ 	__webpack_require__.p = "";

							/******/ 	// Load entry module and return exports
							/******/ 	return __webpack_require__(0);
							/******/ })
							/************************************************************************/
							/******/ ([
							/* 0 */
							/***/ (function(module, exports, __webpack_require__) {

								var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")
								if(currentRoute === '') currentRoute = 'index'

								try{
								    __webpack_require__(1)(`./${currentRoute}.js`)
								}catch(err){
								    console.log(`No such file --> ./${currentRoute}.js`)
								}


							/***/ }),
							/* 1 */
							/***/ (function(module, exports, __webpack_require__) {

								var map = {
									"./bundle": 2,
									"./bundle.js": 2,
									"./index": 3,
									"./index.js": 3,
									"./products": 4,
									"./products.js": 4
								};
								function webpackContext(req) {
									return __webpack_require__(webpackContextResolve(req));
								};
								function webpackContextResolve(req) {
									return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
								};
								webpackContext.keys = function webpackContextKeys() {
									return Object.keys(map);
								};
								webpackContext.resolve = webpackContextResolve;
								module.exports = webpackContext;
								webpackContext.id = 1;


							/***/ }),
							/* 2 */
							/***/ (function(module, exports) {

								/******/ (function(modules) { // webpackBootstrap
								/******/ 	// The module cache
								/******/ 	var installedModules = {};

								/******/ 	// The require function
								/******/ 	function __webpack_require__(moduleId) {

								/******/ 		// Check if module is in cache
								/******/ 		if(installedModules[moduleId])
								/******/ 			return installedModules[moduleId].exports;

								/******/ 		// Create a new module (and put it into the cache)
								/******/ 		var module = installedModules[moduleId] = {
								/******/ 			exports: {},
								/******/ 			id: moduleId,
								/******/ 			loaded: false
								/******/ 		};

								/******/ 		// Execute the module function
								/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

								/******/ 		// Flag the module as loaded
								/******/ 		module.loaded = true;

								/******/ 		// Return the exports of the module
								/******/ 		return module.exports;
								/******/ 	}


								/******/ 	// expose the modules object (__webpack_modules__)
								/******/ 	__webpack_require__.m = modules;

								/******/ 	// expose the module cache
								/******/ 	__webpack_require__.c = installedModules;

								/******/ 	// __webpack_public_path__
								/******/ 	__webpack_require__.p = "";

								/******/ 	// Load entry module and return exports
								/******/ 	return __webpack_require__(0);
								/******/ })
								/************************************************************************/
								/******/ ([
								/* 0 */
								/***/ (function(module, exports, __webpack_require__) {

									var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")

									try{
									    __webpack_require__(1)(`./${currentRoute}.js`)
									}catch(err){
									    console.log(`No such file --> ./${currentRoute}.js`)
									}


								/***/ }),
								/* 1 */
								/***/ (function(module, exports, __webpack_require__) {

									var map = {
										"./bundle": 2,
										"./bundle.js": 2,
										"./index": 3,
										"./index.js": 3,
										"./products": 4,
										"./products.js": 4
									};
									function webpackContext(req) {
										return __webpack_require__(webpackContextResolve(req));
									};
									function webpackContextResolve(req) {
										return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
									};
									webpackContext.keys = function webpackContextKeys() {
										return Object.keys(map);
									};
									webpackContext.resolve = webpackContextResolve;
									module.exports = webpackContext;
									webpackContext.id = 1;


								/***/ }),
								/* 2 */
								/***/ (function(module, exports) {

									/******/ (function(modules) { // webpackBootstrap
									/******/ 	// The module cache
									/******/ 	var installedModules = {};

									/******/ 	// The require function
									/******/ 	function __webpack_require__(moduleId) {

									/******/ 		// Check if module is in cache
									/******/ 		if(installedModules[moduleId])
									/******/ 			return installedModules[moduleId].exports;

									/******/ 		// Create a new module (and put it into the cache)
									/******/ 		var module = installedModules[moduleId] = {
									/******/ 			exports: {},
									/******/ 			id: moduleId,
									/******/ 			loaded: false
									/******/ 		};

									/******/ 		// Execute the module function
									/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

									/******/ 		// Flag the module as loaded
									/******/ 		module.loaded = true;

									/******/ 		// Return the exports of the module
									/******/ 		return module.exports;
									/******/ 	}


									/******/ 	// expose the modules object (__webpack_modules__)
									/******/ 	__webpack_require__.m = modules;

									/******/ 	// expose the module cache
									/******/ 	__webpack_require__.c = installedModules;

									/******/ 	// __webpack_public_path__
									/******/ 	__webpack_require__.p = "";

									/******/ 	// Load entry module and return exports
									/******/ 	return __webpack_require__(0);
									/******/ })
									/************************************************************************/
									/******/ ([
									/* 0 */
									/***/ (function(module, exports, __webpack_require__) {

										var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")

										try{
										    __webpack_require__(1)(`./${currentRoute}.js`)
										}catch(err){
										    console.log(`No such file --> ./${currentRoute}.js`)
										}


									/***/ }),
									/* 1 */
									/***/ (function(module, exports, __webpack_require__) {

										var map = {
											"./bundle": 2,
											"./bundle.js": 2,
											"./index": 3,
											"./index.js": 3,
											"./products": 4,
											"./products.js": 4
										};
										function webpackContext(req) {
											return __webpack_require__(webpackContextResolve(req));
										};
										function webpackContextResolve(req) {
											return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
										};
										webpackContext.keys = function webpackContextKeys() {
											return Object.keys(map);
										};
										webpackContext.resolve = webpackContextResolve;
										module.exports = webpackContext;
										webpackContext.id = 1;


									/***/ }),
									/* 2 */
									/***/ (function(module, exports) {

										/******/ (function(modules) { // webpackBootstrap
										/******/ 	// The module cache
										/******/ 	var installedModules = {};

										/******/ 	// The require function
										/******/ 	function __webpack_require__(moduleId) {

										/******/ 		// Check if module is in cache
										/******/ 		if(installedModules[moduleId])
										/******/ 			return installedModules[moduleId].exports;

										/******/ 		// Create a new module (and put it into the cache)
										/******/ 		var module = installedModules[moduleId] = {
										/******/ 			exports: {},
										/******/ 			id: moduleId,
										/******/ 			loaded: false
										/******/ 		};

										/******/ 		// Execute the module function
										/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

										/******/ 		// Flag the module as loaded
										/******/ 		module.loaded = true;

										/******/ 		// Return the exports of the module
										/******/ 		return module.exports;
										/******/ 	}


										/******/ 	// expose the modules object (__webpack_modules__)
										/******/ 	__webpack_require__.m = modules;

										/******/ 	// expose the module cache
										/******/ 	__webpack_require__.c = installedModules;

										/******/ 	// __webpack_public_path__
										/******/ 	__webpack_require__.p = "";

										/******/ 	// Load entry module and return exports
										/******/ 	return __webpack_require__(0);
										/******/ })
										/************************************************************************/
										/******/ ([
										/* 0 */
										/***/ (function(module, exports) {

											// require('./index.js')
											// require('./products.js')

											var currentRoute = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "")

											requrie(`./${currentRoute}.js`)
											// try{
											//     requrie(`./${currentRoute}.js`)
											// }catch(err){
											//     console.log(`No such file --> ./${currentRoute}.js`)
											// }


										/***/ })
										/******/ ]);

									/***/ }),
									/* 3 */
									/***/ (function(module, exports) {

										console.log("hi")

										$('.carousel').slick({
										    dots: true,
										    arrows: true,
										    speed: 300,
										    slidesToShow: 1,
										    centerMode: true,
										    variableWidth: true,
										    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
										    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
										});





									/***/ }),
									/* 4 */
									/***/ (function(module, exports) {

										var skipSlider = document.getElementById('skipstep');

										noUiSlider.create(skipSlider, {
										    start: [ 100, 500 ],
											behaviour: 'drag',
											connect: true,
										    step: 10,
											range: {
												'min':  10,
												'max':  500
											}
										});


										var skipValues = [
											document.getElementById('skip-value-lower'),
											document.getElementById('skip-value-upper')
										];

										skipSlider.noUiSlider.on('update', function( values, handle ) {
											skipValues[handle].innerHTML = parseInt(values[handle])
										});

									/***/ })
									/******/ ]);

								/***/ }),
								/* 3 */
								/***/ (function(module, exports) {

									console.log("hi")

									$('.carousel').slick({
									    dots: true,
									    arrows: true,
									    speed: 300,
									    slidesToShow: 1,
									    centerMode: true,
									    variableWidth: true,
									    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
									    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
									});





								/***/ }),
								/* 4 */
								/***/ (function(module, exports) {

									var skipSlider = document.getElementById('skipstep');

									noUiSlider.create(skipSlider, {
									    start: [ 100, 500 ],
										behaviour: 'drag',
										connect: true,
									    step: 10,
										range: {
											'min':  10,
											'max':  500
										}
									});


									var skipValues = [
										document.getElementById('skip-value-lower'),
										document.getElementById('skip-value-upper')
									];

									skipSlider.noUiSlider.on('update', function( values, handle ) {
										skipValues[handle].innerHTML = parseInt(values[handle])
									});

								/***/ })
								/******/ ]);

							/***/ }),
							/* 3 */
							/***/ (function(module, exports) {

								console.log("hi")

								$('.carousel').slick({
								    dots: true,
								    arrows: true,
								    speed: 300,
								    slidesToShow: 1,
								    centerMode: true,
								    variableWidth: true,
								    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
								    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
								});





							/***/ }),
							/* 4 */
							/***/ (function(module, exports) {

								var skipSlider = document.getElementById('skipstep');

								noUiSlider.create(skipSlider, {
								    start: [ 100, 500 ],
									behaviour: 'drag',
									connect: true,
								    step: 10,
									range: {
										'min':  10,
										'max':  500
									}
								});


								var skipValues = [
									document.getElementById('skip-value-lower'),
									document.getElementById('skip-value-upper')
								];

								skipSlider.noUiSlider.on('update', function( values, handle ) {
									skipValues[handle].innerHTML = parseInt(values[handle])
								});

							/***/ })
							/******/ ]);

						/***/ }),
						/* 3 */
						/***/ (function(module, exports) {

							console.log("hi")

							$('.carousel').slick({
							    dots: true,
							    arrows: true,
							    speed: 300,
							    slidesToShow: 1,
							    centerMode: true,
							    variableWidth: true,
							    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
							    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
							});





						/***/ }),
						/* 4 */
						/***/ (function(module, exports) {

							var skipSlider = document.getElementById('skipstep');

							noUiSlider.create(skipSlider, {
							    start: [ 100, 500 ],
								behaviour: 'drag',
								connect: true,
							    step: 10,
								range: {
									'min':  10,
									'max':  500
								}
							});


							var skipValues = [
								document.getElementById('skip-value-lower'),
								document.getElementById('skip-value-upper')
							];

							skipSlider.noUiSlider.on('update', function( values, handle ) {
								skipValues[handle].innerHTML = parseInt(values[handle])
							});

						/***/ })
						/******/ ]);

					/***/ }),
					/* 3 */
					/***/ (function(module, exports) {

						console.log("hi")

						$('.carousel').slick({
						    dots: true,
						    arrows: true,
						    speed: 300,
						    slidesToShow: 1,
						    centerMode: true,
						    variableWidth: true,
						    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
						    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
						});





					/***/ }),
					/* 4 */
					/***/ (function(module, exports) {

						var skipSlider = document.getElementById('skipstep');

						noUiSlider.create(skipSlider, {
						    start: [ 100, 500 ],
							behaviour: 'drag',
							connect: true,
						    step: 10,
							range: {
								'min':  10,
								'max':  500
							}
						});


						var skipValues = [
							document.getElementById('skip-value-lower'),
							document.getElementById('skip-value-upper')
						];

						skipSlider.noUiSlider.on('update', function( values, handle ) {
							skipValues[handle].innerHTML = parseInt(values[handle])
						});

					/***/ })
					/******/ ]);

				/***/ }),
				/* 3 */
				/***/ (function(module, exports) {

					console.log("hi")

					$('.carousel').slick({
					    dots: true,
					    arrows: true,
					    speed: 300,
					    slidesToShow: 1,
					    centerMode: true,
					    variableWidth: true,
					    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
					    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
					});





				/***/ }),
				/* 4 */
				/***/ (function(module, exports) {

					var skipSlider = document.getElementById('skipstep');

					noUiSlider.create(skipSlider, {
					    start: [ 100, 500 ],
						behaviour: 'drag',
						connect: true,
					    step: 10,
						range: {
							'min':  10,
							'max':  500
						}
					});


					var skipValues = [
						document.getElementById('skip-value-lower'),
						document.getElementById('skip-value-upper')
					];

					skipSlider.noUiSlider.on('update', function( values, handle ) {
						skipValues[handle].innerHTML = parseInt(values[handle])
					});

				/***/ })
				/******/ ]);

			/***/ }),
			/* 3 */
			/***/ (function(module, exports) {

				console.log("hi")

				$('.carousel').slick({
				    dots: true,
				    arrows: true,
				    speed: 300,
				    slidesToShow: 1,
				    centerMode: true,
				    variableWidth: true,
				    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
				    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
				});





			/***/ }),
			/* 4 */
			/***/ (function(module, exports) {

				var skipSlider = document.getElementById('skipstep');

				noUiSlider.create(skipSlider, {
				    start: [ 100, 500 ],
					behaviour: 'drag',
					connect: true,
				    step: 10,
					range: {
						'min':  10,
						'max':  500
					}
				});


				var skipValues = [
					document.getElementById('skip-value-lower'),
					document.getElementById('skip-value-upper')
				];

				skipSlider.noUiSlider.on('update', function( values, handle ) {
					skipValues[handle].innerHTML = parseInt(values[handle])
				});

			/***/ })
			/******/ ]);

		/***/ }),
		/* 3 */
		/***/ (function(module, exports) {

			console.log("hi")

			$('.carousel').slick({
			    dots: true,
			    arrows: true,
			    speed: 300,
			    slidesToShow: 1,
			    centerMode: true,
			    variableWidth: true,
			    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
			    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
			});





		/***/ }),
		/* 4 */
		/***/ (function(module, exports) {

			var skipSlider = document.getElementById('skipstep');

			noUiSlider.create(skipSlider, {
			    start: [ 100, 500 ],
				behaviour: 'drag',
				connect: true,
			    step: 10,
				range: {
					'min':  10,
					'max':  500
				}
			});


			var skipValues = [
				document.getElementById('skip-value-lower'),
				document.getElementById('skip-value-upper')
			];

			skipSlider.noUiSlider.on('update', function( values, handle ) {
				skipValues[handle].innerHTML = parseInt(values[handle])
			});

		/***/ })
		/******/ ]);

	/***/ }),
	/* 3 */
	/***/ (function(module, exports) {

		console.log("hi")

		$('.carousel').slick({
		    dots: true,
		    arrows: true,
		    speed: 300,
		    slidesToShow: 1,
		    centerMode: true,
		    variableWidth: true,
		    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
		    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
		});





	/***/ }),
	/* 4 */
	/***/ (function(module, exports) {

		var skipSlider = document.getElementById('skipstep');

		noUiSlider.create(skipSlider, {
		    start: [ 100, 500 ],
			behaviour: 'drag',
			connect: true,
		    step: 10,
			range: {
				'min':  10,
				'max':  500
			}
		});


		var skipValues = [
			document.getElementById('skip-value-lower'),
			document.getElementById('skip-value-upper')
		];

		skipSlider.noUiSlider.on('update', function( values, handle ) {
			skipValues[handle].innerHTML = parseInt(values[handle])
		});

	/***/ })
	/******/ ]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	console.log("hi")

	$('.carousel').slick({
	    dots: true,
	    arrows: true,
	    speed: 300,
	    slidesToShow: 1,
	    centerMode: true,
	    variableWidth: true,
	    prevArrow: `<button class="ctrl-arrow arrow-left"><i class="icon icon-left-arrow"></i></button>`,
	    nextArrow: `<button class="ctrl-arrow arrow-right"><i class="icon icon-right-arrow"></i></button>`,
	});





/***/ }),
/* 4 */
/***/ (function(module, exports) {

	var skipSlider = document.getElementById('skipstep');

	noUiSlider.create(skipSlider, {
	    start: [ 100, 500 ],
		behaviour: 'drag',
		connect: true,
	    step: 10,
		range: {
			'min':  10,
			'max':  500
		}
	});


	var skipValues = [
		document.getElementById('skip-value-lower'),
		document.getElementById('skip-value-upper')
	];

	skipSlider.noUiSlider.on('update', function( values, handle ) {
		skipValues[handle].innerHTML = parseInt(values[handle])
	});

/***/ })
/******/ ]);