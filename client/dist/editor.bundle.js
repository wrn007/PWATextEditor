/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/database.js":
/*!****************************!*\
  !*** ./src/js/database.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDb: () => (/* binding */ getDb),\n/* harmony export */   putDb: () => (/* binding */ putDb)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ \"./node_modules/idb/build/esm/index.js\");\n\n\n\nvar initdb = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          return _context.abrupt(\"return\", (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)('jate', 1, {\n            upgrade: function upgrade(db) {\n              if (db.objectStoreNames.contains('jate')) {\n                console.log('jate database already exists');\n                return;\n              }\n              db.createObjectStore('jate', {\n                keyPath: 'id',\n                autoIncrement: true\n              });\n              console.log('jate database created');\n            }\n          }));\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function initdb() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar putDb = /*#__PURE__*/function () {\n  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(content) {\n    var contactDb, tx, store, request, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          console.log('PUT to the database');\n\n          // Create a connection to the database database and version we want to use.\n          _context2.next = 3;\n          return (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)('jate', 1);\n        case 3:\n          contactDb = _context2.sent;\n          // Create a new transaction and specify the database and data privileges.\n          tx = contactDb.transaction('jate', 'readwrite'); // Open up the desired object store.\n          store = tx.objectStore('jate'); // Use the .add() method on the store and pass in the content.\n          request = store.put({\n            id: 1,\n            value: content\n          }); // Get confirmation of the request.\n          _context2.next = 9;\n          return request;\n        case 9:\n          result = _context2.sent;\n          console.log('🚀 - data saved to the database', result);\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return function putDb(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n// TODO: Add logic for a method that gets all the content from the database\nvar getDb = /*#__PURE__*/function () {\n  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n    var contactDb, tx, store, request, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          console.log('GET from the database');\n\n          // Create a connection to the database database and version we want to use.\n          _context3.next = 3;\n          return (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)('jate', 1);\n        case 3:\n          contactDb = _context3.sent;\n          // Create a new transaction and specify the database and data privileges.\n          tx = contactDb.transaction('jate', 'readonly'); // Open up the desired object store.\n          store = tx.objectStore('jate'); // Use the .getAll() method to get all data in the database.\n          request = store.getAll(); // Get confirmation of the request.\n          _context3.next = 9;\n          return request;\n        case 9:\n          result = _context3.sent;\n          console.log('result.value', result);\n          return _context3.abrupt(\"return\", result === null || result === void 0 ? void 0 : result.value);\n        case 12:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3);\n  }));\n  return function getDb() {\n    return _ref3.apply(this, arguments);\n  };\n}();\ninitdb();\n\n//# sourceURL=webpack://JATE/./src/js/database.js?");

/***/ }),

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"./src/js/database.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n\n\n// Import methods to save and get data from the indexedDB database in './database.js'\n\n\nvar _default = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _default() {\n  var _this = this;\n  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _default);\n  var localData = localStorage.getItem('content');\n\n  // check if CodeMirror is loaded\n  if (typeof CodeMirror === 'undefined') {\n    throw new Error('CodeMirror is not loaded');\n  }\n  this.editor = CodeMirror(document.querySelector('#main'), {\n    value: '',\n    mode: 'javascript',\n    theme: 'monokai',\n    lineNumbers: true,\n    lineWrapping: true,\n    autofocus: true,\n    indentUnit: 2,\n    tabSize: 2\n  });\n\n  // When the editor is ready, set the value to whatever is stored in indexeddb.\n  // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.\n  (0,_database__WEBPACK_IMPORTED_MODULE_2__.getDb)().then(function (data) {\n    console.info('Loaded data from IndexedDB, injecting into editor');\n    _this.editor.setValue(data || localData || _header__WEBPACK_IMPORTED_MODULE_3__.header);\n  });\n  this.editor.on('change', function () {\n    localStorage.setItem('content', _this.editor.getValue());\n  });\n\n  // Save the content of the editor when the editor itself is loses focus\n  this.editor.on('blur', function () {\n    console.log('The editor has lost focus');\n    (0,_database__WEBPACK_IMPORTED_MODULE_2__.putDb)(localStorage.getItem('content'));\n  });\n});\n\n\n//# sourceURL=webpack://JATE/./src/js/editor.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\nvar header = \"\\n/*\\n       _____  ____________\\n      / /   |/_  __/ ____/\\n __  / / /| | / / / __/   \\n/ /_/ / ___ |/ / / /___   \\n ____/_/  |_/_/ /_____/   \\njust another text editor\\n*/                          \\n\";\n\n\n//# sourceURL=webpack://JATE/./src/js/header.js?");

/***/ }),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteDB: () => (/* binding */ deleteDB),\n/* harmony export */   openDB: () => (/* binding */ openDB),\n/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),\n/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)\n/* harmony export */ });\n/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ \"./node_modules/idb/build/esm/wrap-idb-value.js\");\n\n\n\n/**\n * Open a database.\n *\n * @param name Name of the database.\n * @param version Schema version.\n * @param callbacks Additional callbacks.\n */\nfunction openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {\n    const request = indexedDB.open(name, version);\n    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);\n    if (upgrade) {\n        request.addEventListener('upgradeneeded', (event) => {\n            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));\n        });\n    }\n    if (blocked)\n        request.addEventListener('blocked', () => blocked());\n    openPromise\n        .then((db) => {\n        if (terminated)\n            db.addEventListener('close', () => terminated());\n        if (blocking)\n            db.addEventListener('versionchange', () => blocking());\n    })\n        .catch(() => { });\n    return openPromise;\n}\n/**\n * Delete a database.\n *\n * @param name Name of the database.\n */\nfunction deleteDB(name, { blocked } = {}) {\n    const request = indexedDB.deleteDatabase(name);\n    if (blocked)\n        request.addEventListener('blocked', () => blocked());\n    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);\n}\n\nconst readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];\nconst writeMethods = ['put', 'add', 'delete', 'clear'];\nconst cachedMethods = new Map();\nfunction getMethod(target, prop) {\n    if (!(target instanceof IDBDatabase &&\n        !(prop in target) &&\n        typeof prop === 'string')) {\n        return;\n    }\n    if (cachedMethods.get(prop))\n        return cachedMethods.get(prop);\n    const targetFuncName = prop.replace(/FromIndex$/, '');\n    const useIndex = prop !== targetFuncName;\n    const isWrite = writeMethods.includes(targetFuncName);\n    if (\n    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.\n    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||\n        !(isWrite || readMethods.includes(targetFuncName))) {\n        return;\n    }\n    const method = async function (storeName, ...args) {\n        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(\n        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');\n        let target = tx.store;\n        if (useIndex)\n            target = target.index(args.shift());\n        // Must reject if op rejects.\n        // If it's a write operation, must reject if tx.done rejects.\n        // Must reject with op rejection first.\n        // Must resolve with op value.\n        // Must handle both promises (no unhandled rejections)\n        return (await Promise.all([\n            target[targetFuncName](...args),\n            isWrite && tx.done,\n        ]))[0];\n    };\n    cachedMethods.set(prop, method);\n    return method;\n}\n(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({\n    ...oldTraps,\n    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),\n    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),\n}));\n\n\n\n\n//# sourceURL=webpack://JATE/./node_modules/idb/build/esm/index.js?");

/***/ }),

/***/ "./node_modules/idb/build/esm/wrap-idb-value.js":
/*!******************************************************!*\
  !*** ./node_modules/idb/build/esm/wrap-idb-value.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ reverseTransformCache),\n/* harmony export */   i: () => (/* binding */ instanceOfAny),\n/* harmony export */   r: () => (/* binding */ replaceTraps),\n/* harmony export */   u: () => (/* binding */ unwrap),\n/* harmony export */   w: () => (/* binding */ wrap)\n/* harmony export */ });\nconst instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);\n\nlet idbProxyableTypes;\nlet cursorAdvanceMethods;\n// This is a function to prevent it throwing up in node environments.\nfunction getIdbProxyableTypes() {\n    return (idbProxyableTypes ||\n        (idbProxyableTypes = [\n            IDBDatabase,\n            IDBObjectStore,\n            IDBIndex,\n            IDBCursor,\n            IDBTransaction,\n        ]));\n}\n// This is a function to prevent it throwing up in node environments.\nfunction getCursorAdvanceMethods() {\n    return (cursorAdvanceMethods ||\n        (cursorAdvanceMethods = [\n            IDBCursor.prototype.advance,\n            IDBCursor.prototype.continue,\n            IDBCursor.prototype.continuePrimaryKey,\n        ]));\n}\nconst cursorRequestMap = new WeakMap();\nconst transactionDoneMap = new WeakMap();\nconst transactionStoreNamesMap = new WeakMap();\nconst transformCache = new WeakMap();\nconst reverseTransformCache = new WeakMap();\nfunction promisifyRequest(request) {\n    const promise = new Promise((resolve, reject) => {\n        const unlisten = () => {\n            request.removeEventListener('success', success);\n            request.removeEventListener('error', error);\n        };\n        const success = () => {\n            resolve(wrap(request.result));\n            unlisten();\n        };\n        const error = () => {\n            reject(request.error);\n            unlisten();\n        };\n        request.addEventListener('success', success);\n        request.addEventListener('error', error);\n    });\n    promise\n        .then((value) => {\n        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval\n        // (see wrapFunction).\n        if (value instanceof IDBCursor) {\n            cursorRequestMap.set(value, request);\n        }\n        // Catching to avoid \"Uncaught Promise exceptions\"\n    })\n        .catch(() => { });\n    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This\n    // is because we create many promises from a single IDBRequest.\n    reverseTransformCache.set(promise, request);\n    return promise;\n}\nfunction cacheDonePromiseForTransaction(tx) {\n    // Early bail if we've already created a done promise for this transaction.\n    if (transactionDoneMap.has(tx))\n        return;\n    const done = new Promise((resolve, reject) => {\n        const unlisten = () => {\n            tx.removeEventListener('complete', complete);\n            tx.removeEventListener('error', error);\n            tx.removeEventListener('abort', error);\n        };\n        const complete = () => {\n            resolve();\n            unlisten();\n        };\n        const error = () => {\n            reject(tx.error || new DOMException('AbortError', 'AbortError'));\n            unlisten();\n        };\n        tx.addEventListener('complete', complete);\n        tx.addEventListener('error', error);\n        tx.addEventListener('abort', error);\n    });\n    // Cache it for later retrieval.\n    transactionDoneMap.set(tx, done);\n}\nlet idbProxyTraps = {\n    get(target, prop, receiver) {\n        if (target instanceof IDBTransaction) {\n            // Special handling for transaction.done.\n            if (prop === 'done')\n                return transactionDoneMap.get(target);\n            // Polyfill for objectStoreNames because of Edge.\n            if (prop === 'objectStoreNames') {\n                return target.objectStoreNames || transactionStoreNamesMap.get(target);\n            }\n            // Make tx.store return the only store in the transaction, or undefined if there are many.\n            if (prop === 'store') {\n                return receiver.objectStoreNames[1]\n                    ? undefined\n                    : receiver.objectStore(receiver.objectStoreNames[0]);\n            }\n        }\n        // Else transform whatever we get back.\n        return wrap(target[prop]);\n    },\n    set(target, prop, value) {\n        target[prop] = value;\n        return true;\n    },\n    has(target, prop) {\n        if (target instanceof IDBTransaction &&\n            (prop === 'done' || prop === 'store')) {\n            return true;\n        }\n        return prop in target;\n    },\n};\nfunction replaceTraps(callback) {\n    idbProxyTraps = callback(idbProxyTraps);\n}\nfunction wrapFunction(func) {\n    // Due to expected object equality (which is enforced by the caching in `wrap`), we\n    // only create one new func per func.\n    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.\n    if (func === IDBDatabase.prototype.transaction &&\n        !('objectStoreNames' in IDBTransaction.prototype)) {\n        return function (storeNames, ...args) {\n            const tx = func.call(unwrap(this), storeNames, ...args);\n            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);\n            return wrap(tx);\n        };\n    }\n    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In\n    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the\n    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense\n    // with real promises, so each advance methods returns a new promise for the cursor object, or\n    // undefined if the end of the cursor has been reached.\n    if (getCursorAdvanceMethods().includes(func)) {\n        return function (...args) {\n            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n            // the original object.\n            func.apply(unwrap(this), args);\n            return wrap(cursorRequestMap.get(this));\n        };\n    }\n    return function (...args) {\n        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n        // the original object.\n        return wrap(func.apply(unwrap(this), args));\n    };\n}\nfunction transformCachableValue(value) {\n    if (typeof value === 'function')\n        return wrapFunction(value);\n    // This doesn't return, it just creates a 'done' promise for the transaction,\n    // which is later returned for transaction.done (see idbObjectHandler).\n    if (value instanceof IDBTransaction)\n        cacheDonePromiseForTransaction(value);\n    if (instanceOfAny(value, getIdbProxyableTypes()))\n        return new Proxy(value, idbProxyTraps);\n    // Return the same value back if we're not going to transform it.\n    return value;\n}\nfunction wrap(value) {\n    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because\n    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.\n    if (value instanceof IDBRequest)\n        return promisifyRequest(value);\n    // If we've already transformed this value before, reuse the transformed value.\n    // This is faster, but it also provides object equality.\n    if (transformCache.has(value))\n        return transformCache.get(value);\n    const newValue = transformCachableValue(value);\n    // Not all types are transformed.\n    // These may be primitive types, so they can't be WeakMap keys.\n    if (newValue !== value) {\n        transformCache.set(value, newValue);\n        reverseTransformCache.set(newValue, value);\n    }\n    return newValue;\n}\nconst unwrap = (value) => reverseTransformCache.get(value);\n\n\n\n\n//# sourceURL=webpack://JATE/./node_modules/idb/build/esm/wrap-idb-value.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return e;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var t,\n    e = {},\n    r = Object.prototype,\n    n = r.hasOwnProperty,\n    o = Object.defineProperty || function (t, e, r) {\n      t[e] = r.value;\n    },\n    i = \"function\" == typeof Symbol ? Symbol : {},\n    a = i.iterator || \"@@iterator\",\n    c = i.asyncIterator || \"@@asyncIterator\",\n    u = i.toStringTag || \"@@toStringTag\";\n  function define(t, e, r) {\n    return Object.defineProperty(t, e, {\n      value: r,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), t[e];\n  }\n  try {\n    define({}, \"\");\n  } catch (t) {\n    define = function define(t, e, r) {\n      return t[e] = r;\n    };\n  }\n  function wrap(t, e, r, n) {\n    var i = e && e.prototype instanceof Generator ? e : Generator,\n      a = Object.create(i.prototype),\n      c = new Context(n || []);\n    return o(a, \"_invoke\", {\n      value: makeInvokeMethod(t, r, c)\n    }), a;\n  }\n  function tryCatch(t, e, r) {\n    try {\n      return {\n        type: \"normal\",\n        arg: t.call(e, r)\n      };\n    } catch (t) {\n      return {\n        type: \"throw\",\n        arg: t\n      };\n    }\n  }\n  e.wrap = wrap;\n  var h = \"suspendedStart\",\n    l = \"suspendedYield\",\n    f = \"executing\",\n    s = \"completed\",\n    y = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var p = {};\n  define(p, a, function () {\n    return this;\n  });\n  var d = Object.getPrototypeOf,\n    v = d && d(d(values([])));\n  v && v !== r && n.call(v, a) && (p = v);\n  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);\n  function defineIteratorMethods(t) {\n    [\"next\", \"throw\", \"return\"].forEach(function (e) {\n      define(t, e, function (t) {\n        return this._invoke(e, t);\n      });\n    });\n  }\n  function AsyncIterator(t, e) {\n    function invoke(r, o, i, a) {\n      var c = tryCatch(t[r], t, o);\n      if (\"throw\" !== c.type) {\n        var u = c.arg,\n          h = u.value;\n        return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) {\n          invoke(\"next\", t, i, a);\n        }, function (t) {\n          invoke(\"throw\", t, i, a);\n        }) : e.resolve(h).then(function (t) {\n          u.value = t, i(u);\n        }, function (t) {\n          return invoke(\"throw\", t, i, a);\n        });\n      }\n      a(c.arg);\n    }\n    var r;\n    o(this, \"_invoke\", {\n      value: function value(t, n) {\n        function callInvokeWithMethodAndArg() {\n          return new e(function (e, r) {\n            invoke(t, n, e, r);\n          });\n        }\n        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(e, r, n) {\n    var o = h;\n    return function (i, a) {\n      if (o === f) throw new Error(\"Generator is already running\");\n      if (o === s) {\n        if (\"throw\" === i) throw a;\n        return {\n          value: t,\n          done: !0\n        };\n      }\n      for (n.method = i, n.arg = a;;) {\n        var c = n.delegate;\n        if (c) {\n          var u = maybeInvokeDelegate(c, n);\n          if (u) {\n            if (u === y) continue;\n            return u;\n          }\n        }\n        if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) {\n          if (o === h) throw o = s, n.arg;\n          n.dispatchException(n.arg);\n        } else \"return\" === n.method && n.abrupt(\"return\", n.arg);\n        o = f;\n        var p = tryCatch(e, r, n);\n        if (\"normal\" === p.type) {\n          if (o = n.done ? s : l, p.arg === y) continue;\n          return {\n            value: p.arg,\n            done: n.done\n          };\n        }\n        \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(e, r) {\n    var n = r.method,\n      o = e.iterator[n];\n    if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y;\n    var i = tryCatch(o, e.iterator, r.arg);\n    if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y;\n    var a = i.arg;\n    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y);\n  }\n  function pushTryEntry(t) {\n    var e = {\n      tryLoc: t[0]\n    };\n    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);\n  }\n  function resetTryEntry(t) {\n    var e = t.completion || {};\n    e.type = \"normal\", delete e.arg, t.completion = e;\n  }\n  function Context(t) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], t.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(e) {\n    if (e || \"\" === e) {\n      var r = e[a];\n      if (r) return r.call(e);\n      if (\"function\" == typeof e.next) return e;\n      if (!isNaN(e.length)) {\n        var o = -1,\n          i = function next() {\n            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;\n            return next.value = t, next.done = !0, next;\n          };\n        return i.next = i;\n      }\n    }\n    throw new TypeError(_typeof(e) + \" is not iterable\");\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), o(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) {\n    var e = \"function\" == typeof t && t.constructor;\n    return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name));\n  }, e.mark = function (t) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t;\n  }, e.awrap = function (t) {\n    return {\n      __await: t\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {\n    return this;\n  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {\n    void 0 === i && (i = Promise);\n    var a = new AsyncIterator(wrap(t, r, n, o), i);\n    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {\n      return t.done ? t.value : a.next();\n    });\n  }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () {\n    return this;\n  }), define(g, \"toString\", function () {\n    return \"[object Generator]\";\n  }), e.keys = function (t) {\n    var e = Object(t),\n      r = [];\n    for (var n in e) r.push(n);\n    return r.reverse(), function next() {\n      for (; r.length;) {\n        var t = r.pop();\n        if (t in e) return next.value = t, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, e.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(e) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var t = this.tryEntries[0].completion;\n      if (\"throw\" === t.type) throw t.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(e) {\n      if (this.done) throw e;\n      var r = this;\n      function handle(n, o) {\n        return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o;\n      }\n      for (var o = this.tryEntries.length - 1; o >= 0; --o) {\n        var i = this.tryEntries[o],\n          a = i.completion;\n        if (\"root\" === i.tryLoc) return handle(\"end\");\n        if (i.tryLoc <= this.prev) {\n          var c = n.call(i, \"catchLoc\"),\n            u = n.call(i, \"finallyLoc\");\n          if (c && u) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          } else if (c) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n          } else {\n            if (!u) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(t, e) {\n      for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n        var o = this.tryEntries[r];\n        if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) {\n          var i = o;\n          break;\n        }\n      }\n      i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);\n      var a = i ? i.completion : {};\n      return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a);\n    },\n    complete: function complete(t, e) {\n      if (\"throw\" === t.type) throw t.arg;\n      return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y;\n    },\n    finish: function finish(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;\n      }\n    },\n    \"catch\": function _catch(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.tryLoc === t) {\n          var n = r.completion;\n          if (\"throw\" === n.type) {\n            var o = n.arg;\n            resetTryEntry(r);\n          }\n          return o;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(e, r, n) {\n      return this.delegate = {\n        iterator: values(e),\n        resultName: r,\n        nextLoc: n\n      }, \"next\" === this.method && (this.arg = t), y;\n    }\n  }, e;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : String(i);\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/editor.js");
/******/ 	
/******/ })()
;