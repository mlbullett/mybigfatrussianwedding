/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ***REMOVED*** {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ***REMOVED*** {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js***REMOVED***, expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery"***REMOVED***(window***REMOVED***;
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ***REMOVED*** :
			function( w ***REMOVED*** {
				if ( !w.document ***REMOVED*** {
					throw new Error( "jQuery requires a window with a document" ***REMOVED***;
				***REMOVED***
				return factory( w ***REMOVED***;
			***REMOVED***;
	***REMOVED*** else {
		factory( global ***REMOVED***;
	***REMOVED***

// Pass this if window is not defined yet
***REMOVED*** ***REMOVED***( typeof window !== "undefined" ? window : this, function( window, noGlobal ***REMOVED*** {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5***REMOVED*** accesses strict mode
// arguments.callee.caller (trac-13335***REMOVED***. But as of jQuery 3.0 (2016***REMOVED***, strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [***REMOVED***;

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {***REMOVED***;

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object ***REMOVED***;

var support = {***REMOVED***;

var isFunction = function isFunction( obj ***REMOVED*** {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ***REMOVED*** === "function"`***REMOVED***.
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  ***REMOVED***;


var isWindow = function isWindow( obj ***REMOVED*** {
		return obj != null && obj === obj.window;
	***REMOVED***;




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	***REMOVED***;

	function DOMEval( code, doc, node ***REMOVED*** {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" ***REMOVED***;

		script.text = code;
		if ( node ***REMOVED*** {
			for ( i in preservedScriptAttributes ***REMOVED*** {
				if ( node[ i ***REMOVED*** ***REMOVED*** {
					script[ i ***REMOVED*** = node[ i ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***
		doc.head.appendChild( script ***REMOVED***.parentNode.removeChild( script ***REMOVED***;
	***REMOVED***


function toType( obj ***REMOVED*** {
	if ( obj == null ***REMOVED*** {
		return obj + "";
	***REMOVED***

	// Support: Android <=2.3 only (functionish RegExp***REMOVED***
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ***REMOVED*** ***REMOVED*** || "object" :
		typeof obj;
***REMOVED***
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ***REMOVED*** {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included***REMOVED***
		return new jQuery.fn.init( selector, context ***REMOVED***;
	***REMOVED***,

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0***REMOVED***+|[\s\uFEFF\xA0***REMOVED***+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function(***REMOVED*** {
		return slice.call( this ***REMOVED***;
	***REMOVED***,

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ***REMOVED*** {

		// Return all the elements in a clean array
		if ( num == null ***REMOVED*** {
			return slice.call( this ***REMOVED***;
		***REMOVED***

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ***REMOVED*** : this[ num ***REMOVED***;
	***REMOVED***,

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set***REMOVED***
	pushStack: function( elems ***REMOVED*** {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(***REMOVED***, elems ***REMOVED***;

		// Add the old object onto the stack (as a reference***REMOVED***
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	***REMOVED***,

	// Execute a callback for every element in the matched set.
	each: function( callback ***REMOVED*** {
		return jQuery.each( this, callback ***REMOVED***;
	***REMOVED***,

	map: function( callback ***REMOVED*** {
		return this.pushStack( jQuery.map( this, function( elem, i ***REMOVED*** {
			return callback.call( elem, i, elem ***REMOVED***;
		***REMOVED*** ***REMOVED*** ***REMOVED***;
	***REMOVED***,

	slice: function(***REMOVED*** {
		return this.pushStack( slice.apply( this, arguments ***REMOVED*** ***REMOVED***;
	***REMOVED***,

	first: function(***REMOVED*** {
		return this.eq( 0 ***REMOVED***;
	***REMOVED***,

	last: function(***REMOVED*** {
		return this.eq( -1 ***REMOVED***;
	***REMOVED***,

	eq: function( i ***REMOVED*** {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 ***REMOVED***;
		return this.pushStack( j >= 0 && j < len ? [ this[ j ***REMOVED*** ***REMOVED*** : [***REMOVED*** ***REMOVED***;
	***REMOVED***,

	end: function(***REMOVED*** {
		return this.prevObject || this.constructor(***REMOVED***;
	***REMOVED***,

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
***REMOVED***;

jQuery.extend = jQuery.fn.extend = function(***REMOVED*** {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ***REMOVED*** || {***REMOVED***,
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ***REMOVED*** {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ***REMOVED*** || {***REMOVED***;
		i++;
	***REMOVED***

	// Handle case when target is a string or something (possible in deep copy***REMOVED***
	if ( typeof target !== "object" && !isFunction( target ***REMOVED*** ***REMOVED*** {
		target = {***REMOVED***;
	***REMOVED***

	// Extend jQuery itself if only one argument is passed
	if ( i === length ***REMOVED*** {
		target = this;
		i--;
	***REMOVED***

	for ( ; i < length; i++ ***REMOVED*** {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ***REMOVED*** ***REMOVED*** != null ***REMOVED*** {

			// Extend the base object
			for ( name in options ***REMOVED*** {
				src = target[ name ***REMOVED***;
				copy = options[ name ***REMOVED***;

				// Prevent never-ending loop
				if ( target === copy ***REMOVED*** {
					continue;
				***REMOVED***

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ***REMOVED*** ||
					( copyIsArray = Array.isArray( copy ***REMOVED*** ***REMOVED*** ***REMOVED*** ***REMOVED*** {

					if ( copyIsArray ***REMOVED*** {
						copyIsArray = false;
						clone = src && Array.isArray( src ***REMOVED*** ? src : [***REMOVED***;

					***REMOVED*** else {
						clone = src && jQuery.isPlainObject( src ***REMOVED*** ? src : {***REMOVED***;
					***REMOVED***

					// Never move original objects, clone them
					target[ name ***REMOVED*** = jQuery.extend( deep, clone, copy ***REMOVED***;

				// Don't bring in undefined values
				***REMOVED*** else if ( copy !== undefined ***REMOVED*** {
					target[ name ***REMOVED*** = copy;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Return the modified object
	return target;
***REMOVED***;

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random(***REMOVED*** ***REMOVED***.replace( /\D/g, "" ***REMOVED***,

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ***REMOVED*** {
		throw new Error( msg ***REMOVED***;
	***REMOVED***,

	noop: function(***REMOVED*** {***REMOVED***,

	isPlainObject: function( obj ***REMOVED*** {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ***REMOVED*** !== "[object Object***REMOVED***" ***REMOVED*** {
			return false;
		***REMOVED***

		proto = getProto( obj ***REMOVED***;

		// Objects with no prototype (e.g., `Object.create( null ***REMOVED***`***REMOVED*** are plain
		if ( !proto ***REMOVED*** {
			return true;
		***REMOVED***

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ***REMOVED*** && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ***REMOVED*** === ObjectFunctionString;
	***REMOVED***,

	isEmptyObject: function( obj ***REMOVED*** {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ***REMOVED*** {
			return false;
		***REMOVED***
		return true;
	***REMOVED***,

	// Evaluates a script in a global context
	globalEval: function( code ***REMOVED*** {
		DOMEval( code ***REMOVED***;
	***REMOVED***,

	each: function( obj, callback ***REMOVED*** {
		var length, i = 0;

		if ( isArrayLike( obj ***REMOVED*** ***REMOVED*** {
			length = obj.length;
			for ( ; i < length; i++ ***REMOVED*** {
				if ( callback.call( obj[ i ***REMOVED***, i, obj[ i ***REMOVED*** ***REMOVED*** === false ***REMOVED*** {
					break;
				***REMOVED***
			***REMOVED***
		***REMOVED*** else {
			for ( i in obj ***REMOVED*** {
				if ( callback.call( obj[ i ***REMOVED***, i, obj[ i ***REMOVED*** ***REMOVED*** === false ***REMOVED*** {
					break;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return obj;
	***REMOVED***,

	// Support: Android <=4.0 only
	trim: function( text ***REMOVED*** {
		return text == null ?
			"" :
			( text + "" ***REMOVED***.replace( rtrim, "" ***REMOVED***;
	***REMOVED***,

	// results is for internal usage only
	makeArray: function( arr, results ***REMOVED*** {
		var ret = results || [***REMOVED***;

		if ( arr != null ***REMOVED*** {
			if ( isArrayLike( Object( arr ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ***REMOVED*** : arr
				***REMOVED***;
			***REMOVED*** else {
				push.call( ret, arr ***REMOVED***;
			***REMOVED***
		***REMOVED***

		return ret;
	***REMOVED***,

	inArray: function( elem, arr, i ***REMOVED*** {
		return arr == null ? -1 : indexOf.call( arr, elem, i ***REMOVED***;
	***REMOVED***,

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
	merge: function( first, second ***REMOVED*** {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ***REMOVED*** {
			first[ i++ ***REMOVED*** = second[ j ***REMOVED***;
		***REMOVED***

		first.length = i;

		return first;
	***REMOVED***,

	grep: function( elems, callback, invert ***REMOVED*** {
		var callbackInverse,
			matches = [***REMOVED***,
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ***REMOVED*** {
			callbackInverse = !callback( elems[ i ***REMOVED***, i ***REMOVED***;
			if ( callbackInverse !== callbackExpect ***REMOVED*** {
				matches.push( elems[ i ***REMOVED*** ***REMOVED***;
			***REMOVED***
		***REMOVED***

		return matches;
	***REMOVED***,

	// arg is for internal usage only
	map: function( elems, callback, arg ***REMOVED*** {
		var length, value,
			i = 0,
			ret = [***REMOVED***;

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ***REMOVED*** ***REMOVED*** {
			length = elems.length;
			for ( ; i < length; i++ ***REMOVED*** {
				value = callback( elems[ i ***REMOVED***, i, arg ***REMOVED***;

				if ( value != null ***REMOVED*** {
					ret.push( value ***REMOVED***;
				***REMOVED***
			***REMOVED***

		// Go through every key on the object,
		***REMOVED*** else {
			for ( i in elems ***REMOVED*** {
				value = callback( elems[ i ***REMOVED***, i, arg ***REMOVED***;

				if ( value != null ***REMOVED*** {
					ret.push( value ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Flatten any nested arrays
		return concat.apply( [***REMOVED***, ret ***REMOVED***;
	***REMOVED***,

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
***REMOVED*** ***REMOVED***;

if ( typeof Symbol === "function" ***REMOVED*** {
	jQuery.fn[ Symbol.iterator ***REMOVED*** = arr[ Symbol.iterator ***REMOVED***;
***REMOVED***

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ***REMOVED***,
function( i, name ***REMOVED*** {
	class2type[ "[object " + name + "***REMOVED***" ***REMOVED*** = name.toLowerCase(***REMOVED***;
***REMOVED*** ***REMOVED***;

function isArrayLike( obj ***REMOVED*** {

	// Support: real iOS 8.2 only (not reproducible in simulator***REMOVED***
	// `in` check used to prevent JIT error (gh-2145***REMOVED***
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj ***REMOVED***;

	if ( isFunction( obj ***REMOVED*** || isWindow( obj ***REMOVED*** ***REMOVED*** {
		return false;
	***REMOVED***

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ***REMOVED*** in obj;
***REMOVED***
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ***REMOVED*** {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(***REMOVED***,
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(***REMOVED***,
	tokenCache = createCache(***REMOVED***,
	compilerCache = createCache(***REMOVED***,
	sortOrder = function( a, b ***REMOVED*** {
		if ( a === b ***REMOVED*** {
			hasDuplicate = true;
		***REMOVED***
		return 0;
	***REMOVED***,

	// Instance methods
	hasOwn = ({***REMOVED******REMOVED***.hasOwnProperty,
	arr = [***REMOVED***,
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ***REMOVED*** {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ***REMOVED*** {
			if ( list[i***REMOVED*** === elem ***REMOVED*** {
				return i;
			***REMOVED***
		***REMOVED***
		return -1;
	***REMOVED***,

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f***REMOVED***",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-***REMOVED***|[^\0-\\xa0***REMOVED******REMOVED***+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + "***REMOVED***(?:" + whitespace +
		// Operator (capture 2***REMOVED***
		"*([*^$|!~***REMOVED***?=***REMOVED***" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5***REMOVED*** or strings [capture 3 or capture 4***REMOVED***"
		"*(?:'((?:\\\\.|[^\\\\'***REMOVED******REMOVED*******REMOVED***'|\"((?:\\\\.|[^\\\\\"***REMOVED******REMOVED*******REMOVED***\"|(" + identifier + "***REMOVED******REMOVED***|***REMOVED***" + whitespace +
		"*\\***REMOVED***",

	pseudos = ":(" + identifier + "***REMOVED***(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5***REMOVED***
		"('((?:\\\\.|[^\\\\'***REMOVED******REMOVED*******REMOVED***'|\"((?:\\\\.|[^\\\\\"***REMOVED******REMOVED*******REMOVED***\"***REMOVED***|" +
		// 2. simple (capture 6***REMOVED***
		"((?:\\\\.|[^\\\\(***REMOVED***[\\***REMOVED******REMOVED***|" + attributes + "***REMOVED*******REMOVED***|" +
		// 3. anything else (capture 2***REMOVED***
		".*" +
		"***REMOVED***\\***REMOVED***|***REMOVED***",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ***REMOVED***,
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\***REMOVED******REMOVED***(?:\\\\.***REMOVED*******REMOVED***" + whitespace + "+$", "g" ***REMOVED***,

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ***REMOVED***,
	rcombinators = new RegExp( "^" + whitespace + "*([>+~***REMOVED***|" + whitespace + "***REMOVED***" + whitespace + "*" ***REMOVED***,

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\***REMOVED***'\"***REMOVED****?***REMOVED***" + whitespace + "*\\***REMOVED***", "g" ***REMOVED***,

	rpseudo = new RegExp( pseudos ***REMOVED***,
	ridentifier = new RegExp( "^" + identifier + "$" ***REMOVED***,

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + "***REMOVED***" ***REMOVED***,
		"CLASS": new RegExp( "^\\.(" + identifier + "***REMOVED***" ***REMOVED***,
		"TAG": new RegExp( "^(" + identifier + "|[****REMOVED******REMOVED***" ***REMOVED***,
		"ATTR": new RegExp( "^" + attributes ***REMOVED***,
		"PSEUDO": new RegExp( "^" + pseudos ***REMOVED***,
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last***REMOVED***-(child|of-type***REMOVED***(?:\\(" + whitespace +
			"*(even|odd|(([+-***REMOVED***|***REMOVED***(\\d****REMOVED***n|***REMOVED***" + whitespace + "*(?:([+-***REMOVED***|***REMOVED***" + whitespace +
			"*(\\d+***REMOVED***|***REMOVED******REMOVED***" + whitespace + "*\\***REMOVED***|***REMOVED***", "i" ***REMOVED***,
		"bool": new RegExp( "^(?:" + booleans + "***REMOVED***$", "i" ***REMOVED***,
		// For use in libraries implementing .is(***REMOVED***
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~***REMOVED***|:(even|odd|eq|gt|lt|nth|first|last***REMOVED***(?:\\(" +
			whitespace + "*((?:-\\d***REMOVED***?\\d****REMOVED***" + whitespace + "*\\***REMOVED***|***REMOVED***(?=[^-***REMOVED***|$***REMOVED***", "i" ***REMOVED***
	***REMOVED***,

	rinputs = /^(?:input|select|textarea|button***REMOVED***$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{***REMOVED***+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-***REMOVED***+***REMOVED***|(\w+***REMOVED***|\.([\w-***REMOVED***+***REMOVED******REMOVED***$/,

	rsibling = /[+~***REMOVED***/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f***REMOVED***{1,6***REMOVED***" + whitespace + "?|(" + whitespace + "***REMOVED***|.***REMOVED***", "ig" ***REMOVED***,
	funescape = function( _, escaped, escapedWhitespace ***REMOVED*** {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ***REMOVED*** :
				// Supplemental Plane codepoint (surrogate pair***REMOVED***
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 ***REMOVED***;
	***REMOVED***,

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f***REMOVED***|^-?\d***REMOVED***|^-$|[^\0-\x1f\x7f-\uFFFF\w-***REMOVED***/g,
	fcssescape = function( ch, asCodePoint ***REMOVED*** {
		if ( asCodePoint ***REMOVED*** {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ***REMOVED*** {
				return "\uFFFD";
			***REMOVED***

			// Control characters and (dependent upon position***REMOVED*** numbers get escaped as code points
			return ch.slice( 0, -1 ***REMOVED*** + "\\" + ch.charCodeAt( ch.length - 1 ***REMOVED***.toString( 16 ***REMOVED*** + " ";
		***REMOVED***

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	***REMOVED***,

	// Used for iframes
	// See setDocument(***REMOVED***
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function(***REMOVED*** {
		setDocument(***REMOVED***;
	***REMOVED***,

	disabledAncestor = addCombinator(
		function( elem ***REMOVED*** {
			return elem.disabled === true && ("form" in elem || "label" in elem***REMOVED***;
		***REMOVED***,
		{ dir: "parentNode", next: "legend" ***REMOVED***
	***REMOVED***;

// Optimize for push.apply( _, NodeList ***REMOVED***
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes ***REMOVED******REMOVED***,
		preferredDoc.childNodes
	***REMOVED***;
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ***REMOVED***.nodeType;
***REMOVED*** catch ( e ***REMOVED*** {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ***REMOVED*** {
			push_native.apply( target, slice.call(els***REMOVED*** ***REMOVED***;
		***REMOVED*** :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ***REMOVED*** {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++***REMOVED*** = els[i++***REMOVED******REMOVED*** ***REMOVED*** {***REMOVED***
			target.length = j - 1;
		***REMOVED***
	***REMOVED***;
***REMOVED***

function Sizzle( selector, context, results, seed ***REMOVED*** {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [***REMOVED***;

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ***REMOVED*** {

		return results;
	***REMOVED***

	// Try to shortcut find operations (as opposed to filters***REMOVED*** in HTML documents
	if ( !seed ***REMOVED*** {

		if ( ( context ? context.ownerDocument || context : preferredDoc ***REMOVED*** !== document ***REMOVED*** {
			setDocument( context ***REMOVED***;
		***REMOVED***
		context = context || document;

		if ( documentIsHTML ***REMOVED*** {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist***REMOVED***
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector ***REMOVED******REMOVED*** ***REMOVED*** {

				// ID selector
				if ( (m = match[1***REMOVED******REMOVED*** ***REMOVED*** {

					// Document context
					if ( nodeType === 9 ***REMOVED*** {
						if ( (elem = context.getElementById( m ***REMOVED******REMOVED*** ***REMOVED*** {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ***REMOVED*** {
								results.push( elem ***REMOVED***;
								return results;
							***REMOVED***
						***REMOVED*** else {
							return results;
						***REMOVED***

					// Element context
					***REMOVED*** else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m ***REMOVED******REMOVED*** &&
							contains( context, elem ***REMOVED*** &&
							elem.id === m ***REMOVED*** {

							results.push( elem ***REMOVED***;
							return results;
						***REMOVED***
					***REMOVED***

				// Type selector
				***REMOVED*** else if ( match[2***REMOVED*** ***REMOVED*** {
					push.apply( results, context.getElementsByTagName( selector ***REMOVED*** ***REMOVED***;
					return results;

				// Class selector
				***REMOVED*** else if ( (m = match[3***REMOVED******REMOVED*** && support.getElementsByClassName &&
					context.getElementsByClassName ***REMOVED*** {

					push.apply( results, context.getElementsByClassName( m ***REMOVED*** ***REMOVED***;
					return results;
				***REMOVED***
			***REMOVED***

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ***REMOVED*** &&
				(!rbuggyQSA || !rbuggyQSA.test( selector ***REMOVED******REMOVED*** ***REMOVED*** {

				if ( nodeType !== 1 ***REMOVED*** {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				***REMOVED*** else if ( context.nodeName.toLowerCase(***REMOVED*** !== "object" ***REMOVED*** {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" ***REMOVED******REMOVED*** ***REMOVED*** {
						nid = nid.replace( rcssescape, fcssescape ***REMOVED***;
					***REMOVED*** else {
						context.setAttribute( "id", (nid = expando***REMOVED*** ***REMOVED***;
					***REMOVED***

					// Prefix every selector in the list
					groups = tokenize( selector ***REMOVED***;
					i = groups.length;
					while ( i-- ***REMOVED*** {
						groups[i***REMOVED*** = "#" + nid + " " + toSelector( groups[i***REMOVED*** ***REMOVED***;
					***REMOVED***
					newSelector = groups.join( "," ***REMOVED***;

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ***REMOVED*** && testContext( context.parentNode ***REMOVED*** ||
						context;
				***REMOVED***

				if ( newSelector ***REMOVED*** {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector ***REMOVED***
						***REMOVED***;
						return results;
					***REMOVED*** catch ( qsaError ***REMOVED*** {
					***REMOVED*** finally {
						if ( nid === expando ***REMOVED*** {
							context.removeAttribute( "id" ***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// All others
	return select( selector.replace( rtrim, "$1" ***REMOVED***, context, results, seed ***REMOVED***;
***REMOVED***

/**
 * Create key-value caches of limited size
 * @returns {function(string, object***REMOVED******REMOVED*** Returns the Object data after storing it on itself with
 *	property name the (space-suffixed***REMOVED*** string and (if the cache is larger than Expr.cacheLength***REMOVED***
 *	deleting the oldest entry
 */
function createCache(***REMOVED*** {
	var keys = [***REMOVED***;

	function cache( key, value ***REMOVED*** {
		// Use (key + " "***REMOVED*** to avoid collision with native prototype properties (see Issue #157***REMOVED***
		if ( keys.push( key + " " ***REMOVED*** > Expr.cacheLength ***REMOVED*** {
			// Only keep the most recent entries
			delete cache[ keys.shift(***REMOVED*** ***REMOVED***;
		***REMOVED***
		return (cache[ key + " " ***REMOVED*** = value***REMOVED***;
	***REMOVED***
	return cache;
***REMOVED***

/**
 * Mark a function for special use by Sizzle
 * @param {Function***REMOVED*** fn The function to mark
 */
function markFunction( fn ***REMOVED*** {
	fn[ expando ***REMOVED*** = true;
	return fn;
***REMOVED***

/**
 * Support testing using an element
 * @param {Function***REMOVED*** fn Passed the created element and returns a boolean result
 */
function assert( fn ***REMOVED*** {
	var el = document.createElement("fieldset"***REMOVED***;

	try {
		return !!fn( el ***REMOVED***;
	***REMOVED*** catch (e***REMOVED*** {
		return false;
	***REMOVED*** finally {
		// Remove from its parent by default
		if ( el.parentNode ***REMOVED*** {
			el.parentNode.removeChild( el ***REMOVED***;
		***REMOVED***
		// release memory in IE
		el = null;
	***REMOVED***
***REMOVED***

/**
 * Adds the same handler for all of the specified attrs
 * @param {String***REMOVED*** attrs Pipe-separated list of attributes
 * @param {Function***REMOVED*** handler The method that will be applied
 */
function addHandle( attrs, handler ***REMOVED*** {
	var arr = attrs.split("|"***REMOVED***,
		i = arr.length;

	while ( i-- ***REMOVED*** {
		Expr.attrHandle[ arr[i***REMOVED*** ***REMOVED*** = handler;
	***REMOVED***
***REMOVED***

/**
 * Checks document order of two siblings
 * @param {Element***REMOVED*** a
 * @param {Element***REMOVED*** b
 * @returns {Number***REMOVED*** Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ***REMOVED*** {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ***REMOVED*** {
		return diff;
	***REMOVED***

	// Check if b follows a
	if ( cur ***REMOVED*** {
		while ( (cur = cur.nextSibling***REMOVED*** ***REMOVED*** {
			if ( cur === b ***REMOVED*** {
				return -1;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return a ? 1 : -1;
***REMOVED***

/**
 * Returns a function to use in pseudos for input types
 * @param {String***REMOVED*** type
 */
function createInputPseudo( type ***REMOVED*** {
	return function( elem ***REMOVED*** {
		var name = elem.nodeName.toLowerCase(***REMOVED***;
		return name === "input" && elem.type === type;
	***REMOVED***;
***REMOVED***

/**
 * Returns a function to use in pseudos for buttons
 * @param {String***REMOVED*** type
 */
function createButtonPseudo( type ***REMOVED*** {
	return function( elem ***REMOVED*** {
		var name = elem.nodeName.toLowerCase(***REMOVED***;
		return (name === "input" || name === "button"***REMOVED*** && elem.type === type;
	***REMOVED***;
***REMOVED***

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean***REMOVED*** disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ***REMOVED*** {

	// Known :disabled false positives: fieldset[disabled***REMOVED*** > legend:nth-of-type(n+2***REMOVED*** :can-disable
	return function( elem ***REMOVED*** {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ***REMOVED*** {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ***REMOVED*** {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ***REMOVED*** {
					if ( "label" in elem.parentNode ***REMOVED*** {
						return elem.parentNode.disabled === disabled;
					***REMOVED*** else {
						return elem.disabled === disabled;
					***REMOVED***
				***REMOVED***

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ***REMOVED*** === disabled;
			***REMOVED***

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track***REMOVED***, but it shouldn't
		// even exist on them, let alone have a boolean value.
		***REMOVED*** else if ( "label" in elem ***REMOVED*** {
			return elem.disabled === disabled;
		***REMOVED***

		// Remaining elements are neither :enabled nor :disabled
		return false;
	***REMOVED***;
***REMOVED***

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function***REMOVED*** fn
 */
function createPositionalPseudo( fn ***REMOVED*** {
	return markFunction(function( argument ***REMOVED*** {
		argument = +argument;
		return markFunction(function( seed, matches ***REMOVED*** {
			var j,
				matchIndexes = fn( [***REMOVED***, seed.length, argument ***REMOVED***,
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ***REMOVED*** {
				if ( seed[ (j = matchIndexes[i***REMOVED******REMOVED*** ***REMOVED*** ***REMOVED*** {
					seed[j***REMOVED*** = !(matches[j***REMOVED*** = seed[j***REMOVED******REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED******REMOVED***;
	***REMOVED******REMOVED***;
***REMOVED***

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=***REMOVED*** context
 * @returns {Element|Object|Boolean***REMOVED*** The input node if acceptable, otherwise a falsy value
 */
function testContext( context ***REMOVED*** {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
***REMOVED***

// Expose support vars for convenience
support = Sizzle.support = {***REMOVED***;

/**
 * Detects XML nodes
 * @param {Element|Object***REMOVED*** elem An element or a document
 * @returns {Boolean***REMOVED*** True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ***REMOVED*** {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833***REMOVED***
	var documentElement = elem && (elem.ownerDocument || elem***REMOVED***.documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
***REMOVED***;

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object***REMOVED*** [doc***REMOVED*** An element or document object to use to set the document
 * @returns {Object***REMOVED*** Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ***REMOVED*** {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ***REMOVED*** {
		return document;
	***REMOVED***

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document ***REMOVED***;

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936***REMOVED***
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView***REMOVED*** && subWindow.top !== subWindow ***REMOVED*** {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ***REMOVED*** {
			subWindow.addEventListener( "unload", unloadHandler, false ***REMOVED***;

		// Support: IE 9 - 10 only
		***REMOVED*** else if ( subWindow.attachEvent ***REMOVED*** {
			subWindow.attachEvent( "onunload", unloadHandler ***REMOVED***;
		***REMOVED***
	***REMOVED***

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans***REMOVED***
	support.attributes = assert(function( el ***REMOVED*** {
		el.className = "i";
		return !el.getAttribute("className"***REMOVED***;
	***REMOVED******REMOVED***;

	/* getElement(s***REMOVED***By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*"***REMOVED*** returns only elements
	support.getElementsByTagName = assert(function( el ***REMOVED*** {
		el.appendChild( document.createComment(""***REMOVED*** ***REMOVED***;
		return !el.getElementsByTagName("*"***REMOVED***.length;
	***REMOVED******REMOVED***;

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName ***REMOVED***;

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ***REMOVED*** {
		docElem.appendChild( el ***REMOVED***.id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ***REMOVED***.length;
	***REMOVED******REMOVED***;

	// ID filter and find
	if ( support.getById ***REMOVED*** {
		Expr.filter["ID"***REMOVED*** = function( id ***REMOVED*** {
			var attrId = id.replace( runescape, funescape ***REMOVED***;
			return function( elem ***REMOVED*** {
				return elem.getAttribute("id"***REMOVED*** === attrId;
			***REMOVED***;
		***REMOVED***;
		Expr.find["ID"***REMOVED*** = function( id, context ***REMOVED*** {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ***REMOVED*** {
				var elem = context.getElementById( id ***REMOVED***;
				return elem ? [ elem ***REMOVED*** : [***REMOVED***;
			***REMOVED***
		***REMOVED***;
	***REMOVED*** else {
		Expr.filter["ID"***REMOVED*** =  function( id ***REMOVED*** {
			var attrId = id.replace( runescape, funescape ***REMOVED***;
			return function( elem ***REMOVED*** {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id"***REMOVED***;
				return node && node.value === attrId;
			***REMOVED***;
		***REMOVED***;

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"***REMOVED*** = function( id, context ***REMOVED*** {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ***REMOVED*** {
				var node, i, elems,
					elem = context.getElementById( id ***REMOVED***;

				if ( elem ***REMOVED*** {

					// Verify the id attribute
					node = elem.getAttributeNode("id"***REMOVED***;
					if ( node && node.value === id ***REMOVED*** {
						return [ elem ***REMOVED***;
					***REMOVED***

					// Fall back on getElementsByName
					elems = context.getElementsByName( id ***REMOVED***;
					i = 0;
					while ( (elem = elems[i++***REMOVED******REMOVED*** ***REMOVED*** {
						node = elem.getAttributeNode("id"***REMOVED***;
						if ( node && node.value === id ***REMOVED*** {
							return [ elem ***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED***

				return [***REMOVED***;
			***REMOVED***
		***REMOVED***;
	***REMOVED***

	// Tag
	Expr.find["TAG"***REMOVED*** = support.getElementsByTagName ?
		function( tag, context ***REMOVED*** {
			if ( typeof context.getElementsByTagName !== "undefined" ***REMOVED*** {
				return context.getElementsByTagName( tag ***REMOVED***;

			// DocumentFragment nodes don't have gEBTN
			***REMOVED*** else if ( support.qsa ***REMOVED*** {
				return context.querySelectorAll( tag ***REMOVED***;
			***REMOVED***
		***REMOVED*** :

		function( tag, context ***REMOVED*** {
			var elem,
				tmp = [***REMOVED***,
				i = 0,
				// By happy coincidence, a (broken***REMOVED*** gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag ***REMOVED***;

			// Filter out possible comments
			if ( tag === "*" ***REMOVED*** {
				while ( (elem = results[i++***REMOVED******REMOVED*** ***REMOVED*** {
					if ( elem.nodeType === 1 ***REMOVED*** {
						tmp.push( elem ***REMOVED***;
					***REMOVED***
				***REMOVED***

				return tmp;
			***REMOVED***
			return results;
		***REMOVED***;

	// Class
	Expr.find["CLASS"***REMOVED*** = support.getElementsByClassName && function( className, context ***REMOVED*** {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ***REMOVED*** {
			return context.getElementsByClassName( className ***REMOVED***;
		***REMOVED***
	***REMOVED***;

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active***REMOVED*** reports false when true (IE9/Opera 11.5***REMOVED***
	rbuggyMatches = [***REMOVED***;

	// qSa(:focus***REMOVED*** reports false when true (Chrome 21***REMOVED***
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [***REMOVED***;

	if ( (support.qsa = rnative.test( document.querySelectorAll ***REMOVED******REMOVED*** ***REMOVED*** {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ***REMOVED*** {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ***REMOVED***.innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^=''***REMOVED***"***REMOVED***.length ***REMOVED*** {
				rbuggyQSA.push( "[*^$***REMOVED***=" + whitespace + "*(?:''|\"\"***REMOVED***" ***REMOVED***;
			***REMOVED***

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected***REMOVED***"***REMOVED***.length ***REMOVED*** {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + "***REMOVED***" ***REMOVED***;
			***REMOVED***

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-***REMOVED***" ***REMOVED***.length ***REMOVED*** {
				rbuggyQSA.push("~="***REMOVED***;
			***REMOVED***

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked"***REMOVED***.length ***REMOVED*** {
				rbuggyQSA.push(":checked"***REMOVED***;
			***REMOVED***

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ***REMOVED***.length ***REMOVED*** {
				rbuggyQSA.push(".#.+[+~***REMOVED***"***REMOVED***;
			***REMOVED***
		***REMOVED******REMOVED***;

		assert(function( el ***REMOVED*** {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input"***REMOVED***;
			input.setAttribute( "type", "hidden" ***REMOVED***;
			el.appendChild( input ***REMOVED***.setAttribute( "name", "D" ***REMOVED***;

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d***REMOVED***"***REMOVED***.length ***REMOVED*** {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~***REMOVED***?=" ***REMOVED***;
			***REMOVED***

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled***REMOVED***
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled"***REMOVED***.length !== 2 ***REMOVED*** {
				rbuggyQSA.push( ":enabled", ":disabled" ***REMOVED***;
			***REMOVED***

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ***REMOVED***.disabled = true;
			if ( el.querySelectorAll(":disabled"***REMOVED***.length !== 2 ***REMOVED*** {
				rbuggyQSA.push( ":enabled", ":disabled" ***REMOVED***;
			***REMOVED***

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x"***REMOVED***;
			rbuggyQSA.push(",.*:"***REMOVED***;
		***REMOVED******REMOVED***;
	***REMOVED***

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector***REMOVED*** ***REMOVED******REMOVED*** ***REMOVED*** {

		assert(function( el ***REMOVED*** {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9***REMOVED***
			support.disconnectedMatch = matches.call( el, "*" ***REMOVED***;

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!=''***REMOVED***:x" ***REMOVED***;
			rbuggyMatches.push( "!=", pseudos ***REMOVED***;
		***REMOVED******REMOVED***;
	***REMOVED***

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|"***REMOVED*** ***REMOVED***;
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|"***REMOVED*** ***REMOVED***;

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition ***REMOVED***;

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ***REMOVED*** ?
		function( a, b ***REMOVED*** {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ***REMOVED*** :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ***REMOVED*** & 16
			***REMOVED******REMOVED***;
		***REMOVED*** :
		function( a, b ***REMOVED*** {
			if ( b ***REMOVED*** {
				while ( (b = b.parentNode***REMOVED*** ***REMOVED*** {
					if ( b === a ***REMOVED*** {
						return true;
					***REMOVED***
				***REMOVED***
			***REMOVED***
			return false;
		***REMOVED***;

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ***REMOVED*** {

		// Flag for duplicate removal
		if ( a === b ***REMOVED*** {
			hasDuplicate = true;
			return 0;
		***REMOVED***

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ***REMOVED*** {
			return compare;
		***REMOVED***

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ***REMOVED*** === ( b.ownerDocument || b ***REMOVED*** ?
			a.compareDocumentPosition( b ***REMOVED*** :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ***REMOVED*** === compare***REMOVED*** ***REMOVED*** {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a***REMOVED*** ***REMOVED*** {
				return -1;
			***REMOVED***
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b***REMOVED*** ***REMOVED*** {
				return 1;
			***REMOVED***

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ***REMOVED*** - indexOf( sortInput, b ***REMOVED*** ***REMOVED*** :
				0;
		***REMOVED***

		return compare & 4 ? -1 : 1;
	***REMOVED*** :
	function( a, b ***REMOVED*** {
		// Exit early if the nodes are identical
		if ( a === b ***REMOVED*** {
			hasDuplicate = true;
			return 0;
		***REMOVED***

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ***REMOVED***,
			bp = [ b ***REMOVED***;

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ***REMOVED*** {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ***REMOVED*** - indexOf( sortInput, b ***REMOVED*** ***REMOVED*** :
				0;

		// If the nodes are siblings, we can do a quick check
		***REMOVED*** else if ( aup === bup ***REMOVED*** {
			return siblingCheck( a, b ***REMOVED***;
		***REMOVED***

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode***REMOVED*** ***REMOVED*** {
			ap.unshift( cur ***REMOVED***;
		***REMOVED***
		cur = b;
		while ( (cur = cur.parentNode***REMOVED*** ***REMOVED*** {
			bp.unshift( cur ***REMOVED***;
		***REMOVED***

		// Walk down the tree looking for a discrepancy
		while ( ap[i***REMOVED*** === bp[i***REMOVED*** ***REMOVED*** {
			i++;
		***REMOVED***

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i***REMOVED***, bp[i***REMOVED*** ***REMOVED*** :

			// Otherwise nodes in our document sort first
			ap[i***REMOVED*** === preferredDoc ? -1 :
			bp[i***REMOVED*** === preferredDoc ? 1 :
			0;
	***REMOVED***;

	return document;
***REMOVED***;

Sizzle.matches = function( expr, elements ***REMOVED*** {
	return Sizzle( expr, null, null, elements ***REMOVED***;
***REMOVED***;

Sizzle.matchesSelector = function( elem, expr ***REMOVED*** {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ***REMOVED*** !== document ***REMOVED*** {
		setDocument( elem ***REMOVED***;
	***REMOVED***

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1'***REMOVED***" ***REMOVED***;

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ***REMOVED*** &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ***REMOVED*** ***REMOVED*** &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ***REMOVED*** ***REMOVED*** ***REMOVED*** {

		try {
			var ret = matches.call( elem, expr ***REMOVED***;

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ***REMOVED*** {
				return ret;
			***REMOVED***
		***REMOVED*** catch (e***REMOVED*** {***REMOVED***
	***REMOVED***

	return Sizzle( expr, document, null, [ elem ***REMOVED*** ***REMOVED***.length > 0;
***REMOVED***;

Sizzle.contains = function( context, elem ***REMOVED*** {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ***REMOVED*** !== document ***REMOVED*** {
		setDocument( context ***REMOVED***;
	***REMOVED***
	return contains( context, elem ***REMOVED***;
***REMOVED***;

Sizzle.attr = function( elem, name ***REMOVED*** {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ***REMOVED*** !== document ***REMOVED*** {
		setDocument( elem ***REMOVED***;
	***REMOVED***

	var fn = Expr.attrHandle[ name.toLowerCase(***REMOVED*** ***REMOVED***,
		// Don't get fooled by Object.prototype properties (jQuery #13807***REMOVED***
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase(***REMOVED*** ***REMOVED*** ?
			fn( elem, name, !documentIsHTML ***REMOVED*** :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ***REMOVED*** :
			(val = elem.getAttributeNode(name***REMOVED******REMOVED*** && val.specified ?
				val.value :
				null;
***REMOVED***;

Sizzle.escape = function( sel ***REMOVED*** {
	return (sel + ""***REMOVED***.replace( rcssescape, fcssescape ***REMOVED***;
***REMOVED***;

Sizzle.error = function( msg ***REMOVED*** {
	throw new Error( "Syntax error, unrecognized expression: " + msg ***REMOVED***;
***REMOVED***;

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike***REMOVED*** results
 */
Sizzle.uniqueSort = function( results ***REMOVED*** {
	var elem,
		duplicates = [***REMOVED***,
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 ***REMOVED***;
	results.sort( sortOrder ***REMOVED***;

	if ( hasDuplicate ***REMOVED*** {
		while ( (elem = results[i++***REMOVED******REMOVED*** ***REMOVED*** {
			if ( elem === results[ i ***REMOVED*** ***REMOVED*** {
				j = duplicates.push( i ***REMOVED***;
			***REMOVED***
		***REMOVED***
		while ( j-- ***REMOVED*** {
			results.splice( duplicates[ j ***REMOVED***, 1 ***REMOVED***;
		***REMOVED***
	***REMOVED***

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
***REMOVED***;

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element***REMOVED*** elem
 */
getText = Sizzle.getText = function( elem ***REMOVED*** {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ***REMOVED*** {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++***REMOVED******REMOVED*** ***REMOVED*** {
			// Do not traverse comment nodes
			ret += getText( node ***REMOVED***;
		***REMOVED***
	***REMOVED*** else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ***REMOVED*** {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153***REMOVED***
		if ( typeof elem.textContent === "string" ***REMOVED*** {
			return elem.textContent;
		***REMOVED*** else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ***REMOVED*** {
				ret += getText( elem ***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED*** else if ( nodeType === 3 || nodeType === 4 ***REMOVED*** {
		return elem.nodeValue;
	***REMOVED***
	// Do not include comment or processing instruction nodes

	return ret;
***REMOVED***;

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {***REMOVED***,

	find: {***REMOVED***,

	relative: {
		">": { dir: "parentNode", first: true ***REMOVED***,
		" ": { dir: "parentNode" ***REMOVED***,
		"+": { dir: "previousSibling", first: true ***REMOVED***,
		"~": { dir: "previousSibling" ***REMOVED***
	***REMOVED***,

	preFilter: {
		"ATTR": function( match ***REMOVED*** {
			match[1***REMOVED*** = match[1***REMOVED***.replace( runescape, funescape ***REMOVED***;

			// Move the given value to match[3***REMOVED*** whether quoted or unquoted
			match[3***REMOVED*** = ( match[3***REMOVED*** || match[4***REMOVED*** || match[5***REMOVED*** || "" ***REMOVED***.replace( runescape, funescape ***REMOVED***;

			if ( match[2***REMOVED*** === "~=" ***REMOVED*** {
				match[3***REMOVED*** = " " + match[3***REMOVED*** + " ";
			***REMOVED***

			return match.slice( 0, 4 ***REMOVED***;
		***REMOVED***,

		"CHILD": function( match ***REMOVED*** {
			/* matches from matchExpr["CHILD"***REMOVED***
				1 type (only|nth|...***REMOVED***
				2 what (child|of-type***REMOVED***
				3 argument (even|odd|\d*|\d*n([+-***REMOVED***\d+***REMOVED***?|...***REMOVED***
				4 xn-component of xn+y argument ([+-***REMOVED***?\d*n|***REMOVED***
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1***REMOVED*** = match[1***REMOVED***.toLowerCase(***REMOVED***;

			if ( match[1***REMOVED***.slice( 0, 3 ***REMOVED*** === "nth" ***REMOVED*** {
				// nth-* requires argument
				if ( !match[3***REMOVED*** ***REMOVED*** {
					Sizzle.error( match[0***REMOVED*** ***REMOVED***;
				***REMOVED***

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4***REMOVED*** = +( match[4***REMOVED*** ? match[5***REMOVED*** + (match[6***REMOVED*** || 1***REMOVED*** : 2 * ( match[3***REMOVED*** === "even" || match[3***REMOVED*** === "odd" ***REMOVED*** ***REMOVED***;
				match[5***REMOVED*** = +( ( match[7***REMOVED*** + match[8***REMOVED*** ***REMOVED*** || match[3***REMOVED*** === "odd" ***REMOVED***;

			// other types prohibit arguments
			***REMOVED*** else if ( match[3***REMOVED*** ***REMOVED*** {
				Sizzle.error( match[0***REMOVED*** ***REMOVED***;
			***REMOVED***

			return match;
		***REMOVED***,

		"PSEUDO": function( match ***REMOVED*** {
			var excess,
				unquoted = !match[6***REMOVED*** && match[2***REMOVED***;

			if ( matchExpr["CHILD"***REMOVED***.test( match[0***REMOVED*** ***REMOVED*** ***REMOVED*** {
				return null;
			***REMOVED***

			// Accept quoted arguments as-is
			if ( match[3***REMOVED*** ***REMOVED*** {
				match[2***REMOVED*** = match[4***REMOVED*** || match[5***REMOVED*** || "";

			// Strip excess characters from unquoted arguments
			***REMOVED*** else if ( unquoted && rpseudo.test( unquoted ***REMOVED*** &&
				// Get excess from tokenize (recursively***REMOVED***
				(excess = tokenize( unquoted, true ***REMOVED******REMOVED*** &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( "***REMOVED***", unquoted.length - excess ***REMOVED*** - unquoted.length***REMOVED*** ***REMOVED*** {

				// excess is a negative index
				match[0***REMOVED*** = match[0***REMOVED***.slice( 0, excess ***REMOVED***;
				match[2***REMOVED*** = unquoted.slice( 0, excess ***REMOVED***;
			***REMOVED***

			// Return only captures needed by the pseudo filter method (type and argument***REMOVED***
			return match.slice( 0, 3 ***REMOVED***;
		***REMOVED***
	***REMOVED***,

	filter: {

		"TAG": function( nodeNameSelector ***REMOVED*** {
			var nodeName = nodeNameSelector.replace( runescape, funescape ***REMOVED***.toLowerCase(***REMOVED***;
			return nodeNameSelector === "*" ?
				function(***REMOVED*** { return true; ***REMOVED*** :
				function( elem ***REMOVED*** {
					return elem.nodeName && elem.nodeName.toLowerCase(***REMOVED*** === nodeName;
				***REMOVED***;
		***REMOVED***,

		"CLASS": function( className ***REMOVED*** {
			var pattern = classCache[ className + " " ***REMOVED***;

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + "***REMOVED***" + className + "(" + whitespace + "|$***REMOVED***" ***REMOVED******REMOVED*** &&
				classCache( className, function( elem ***REMOVED*** {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class"***REMOVED*** || "" ***REMOVED***;
				***REMOVED******REMOVED***;
		***REMOVED***,

		"ATTR": function( name, operator, check ***REMOVED*** {
			return function( elem ***REMOVED*** {
				var result = Sizzle.attr( elem, name ***REMOVED***;

				if ( result == null ***REMOVED*** {
					return operator === "!=";
				***REMOVED***
				if ( !operator ***REMOVED*** {
					return true;
				***REMOVED***

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ***REMOVED*** === 0 :
					operator === "*=" ? check && result.indexOf( check ***REMOVED*** > -1 :
					operator === "$=" ? check && result.slice( -check.length ***REMOVED*** === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ***REMOVED*** + " " ***REMOVED***.indexOf( check ***REMOVED*** > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ***REMOVED*** === check + "-" :
					false;
			***REMOVED***;
		***REMOVED***,

		"CHILD": function( type, what, argument, first, last ***REMOVED*** {
			var simple = type.slice( 0, 3 ***REMOVED*** !== "nth",
				forward = type.slice( -4 ***REMOVED*** !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n***REMOVED***
				function( elem ***REMOVED*** {
					return !!elem.parentNode;
				***REMOVED*** :

				function( elem, context, xml ***REMOVED*** {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(***REMOVED***,
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ***REMOVED*** {

						// :(first|last|only***REMOVED***-(child|of-type***REMOVED***
						if ( simple ***REMOVED*** {
							while ( dir ***REMOVED*** {
								node = elem;
								while ( (node = node[ dir ***REMOVED******REMOVED*** ***REMOVED*** {
									if ( ofType ?
										node.nodeName.toLowerCase(***REMOVED*** === name :
										node.nodeType === 1 ***REMOVED*** {

										return false;
									***REMOVED***
								***REMOVED***
								// Reverse direction for :only-* (if we haven't yet done so***REMOVED***
								start = dir = type === "only" && !start && "nextSibling";
							***REMOVED***
							return true;
						***REMOVED***

						start = [ forward ? parent.firstChild : parent.lastChild ***REMOVED***;

						// non-xml :nth-child(...***REMOVED*** stores cache data on `parent`
						if ( forward && useCache ***REMOVED*** {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ***REMOVED*** || (node[ expando ***REMOVED*** = {***REMOVED******REMOVED***;

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709***REMOVED***
							uniqueCache = outerCache[ node.uniqueID ***REMOVED*** ||
								(outerCache[ node.uniqueID ***REMOVED*** = {***REMOVED******REMOVED***;

							cache = uniqueCache[ type ***REMOVED*** || [***REMOVED***;
							nodeIndex = cache[ 0 ***REMOVED*** === dirruns && cache[ 1 ***REMOVED***;
							diff = nodeIndex && cache[ 2 ***REMOVED***;
							node = nodeIndex && parent.childNodes[ nodeIndex ***REMOVED***;

							while ( (node = ++nodeIndex && node && node[ dir ***REMOVED*** ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0***REMOVED*** || start.pop(***REMOVED******REMOVED*** ***REMOVED*** {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ***REMOVED*** {
									uniqueCache[ type ***REMOVED*** = [ dirruns, nodeIndex, diff ***REMOVED***;
									break;
								***REMOVED***
							***REMOVED***

						***REMOVED*** else {
							// Use previously-cached element index if available
							if ( useCache ***REMOVED*** {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ***REMOVED*** || (node[ expando ***REMOVED*** = {***REMOVED******REMOVED***;

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709***REMOVED***
								uniqueCache = outerCache[ node.uniqueID ***REMOVED*** ||
									(outerCache[ node.uniqueID ***REMOVED*** = {***REMOVED******REMOVED***;

								cache = uniqueCache[ type ***REMOVED*** || [***REMOVED***;
								nodeIndex = cache[ 0 ***REMOVED*** === dirruns && cache[ 1 ***REMOVED***;
								diff = nodeIndex;
							***REMOVED***

							// xml :nth-child(...***REMOVED***
							// or :nth-last-child(...***REMOVED*** or :nth(-last***REMOVED***?-of-type(...***REMOVED***
							if ( diff === false ***REMOVED*** {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ***REMOVED*** ||
									(diff = nodeIndex = 0***REMOVED*** || start.pop(***REMOVED******REMOVED*** ***REMOVED*** {

									if ( ( ofType ?
										node.nodeName.toLowerCase(***REMOVED*** === name :
										node.nodeType === 1 ***REMOVED*** &&
										++diff ***REMOVED*** {

										// Cache the index of each encountered element
										if ( useCache ***REMOVED*** {
											outerCache = node[ expando ***REMOVED*** || (node[ expando ***REMOVED*** = {***REMOVED******REMOVED***;

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709***REMOVED***
											uniqueCache = outerCache[ node.uniqueID ***REMOVED*** ||
												(outerCache[ node.uniqueID ***REMOVED*** = {***REMOVED******REMOVED***;

											uniqueCache[ type ***REMOVED*** = [ dirruns, diff ***REMOVED***;
										***REMOVED***

										if ( node === elem ***REMOVED*** {
											break;
										***REMOVED***
									***REMOVED***
								***REMOVED***
							***REMOVED***
						***REMOVED***

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 ***REMOVED***;
					***REMOVED***
				***REMOVED***;
		***REMOVED***,

		"PSEUDO": function( pseudo, argument ***REMOVED*** {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ***REMOVED*** || Expr.setFilters[ pseudo.toLowerCase(***REMOVED*** ***REMOVED*** ||
					Sizzle.error( "unsupported pseudo: " + pseudo ***REMOVED***;

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ***REMOVED*** ***REMOVED*** {
				return fn( argument ***REMOVED***;
			***REMOVED***

			// But maintain support for old signatures
			if ( fn.length > 1 ***REMOVED*** {
				args = [ pseudo, pseudo, "", argument ***REMOVED***;
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase(***REMOVED*** ***REMOVED*** ?
					markFunction(function( seed, matches ***REMOVED*** {
						var idx,
							matched = fn( seed, argument ***REMOVED***,
							i = matched.length;
						while ( i-- ***REMOVED*** {
							idx = indexOf( seed, matched[i***REMOVED*** ***REMOVED***;
							seed[ idx ***REMOVED*** = !( matches[ idx ***REMOVED*** = matched[i***REMOVED*** ***REMOVED***;
						***REMOVED***
					***REMOVED******REMOVED*** :
					function( elem ***REMOVED*** {
						return fn( elem, 0, args ***REMOVED***;
					***REMOVED***;
			***REMOVED***

			return fn;
		***REMOVED***
	***REMOVED***,

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ***REMOVED*** {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [***REMOVED***,
				results = [***REMOVED***,
				matcher = compile( selector.replace( rtrim, "$1" ***REMOVED*** ***REMOVED***;

			return matcher[ expando ***REMOVED*** ?
				markFunction(function( seed, matches, context, xml ***REMOVED*** {
					var elem,
						unmatched = matcher( seed, null, xml, [***REMOVED*** ***REMOVED***,
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ***REMOVED*** {
						if ( (elem = unmatched[i***REMOVED******REMOVED*** ***REMOVED*** {
							seed[i***REMOVED*** = !(matches[i***REMOVED*** = elem***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED******REMOVED*** :
				function( elem, context, xml ***REMOVED*** {
					input[0***REMOVED*** = elem;
					matcher( input, null, xml, results ***REMOVED***;
					// Don't keep the element (issue #299***REMOVED***
					input[0***REMOVED*** = null;
					return !results.pop(***REMOVED***;
				***REMOVED***;
		***REMOVED******REMOVED***,

		"has": markFunction(function( selector ***REMOVED*** {
			return function( elem ***REMOVED*** {
				return Sizzle( selector, elem ***REMOVED***.length > 0;
			***REMOVED***;
		***REMOVED******REMOVED***,

		"contains": markFunction(function( text ***REMOVED*** {
			text = text.replace( runescape, funescape ***REMOVED***;
			return function( elem ***REMOVED*** {
				return ( elem.textContent || elem.innerText || getText( elem ***REMOVED*** ***REMOVED***.indexOf( text ***REMOVED*** > -1;
			***REMOVED***;
		***REMOVED******REMOVED***,

		// "Whether an element is represented by a :lang(***REMOVED*** selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ***REMOVED*** {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || ""***REMOVED*** ***REMOVED*** {
				Sizzle.error( "unsupported lang: " + lang ***REMOVED***;
			***REMOVED***
			lang = lang.replace( runescape, funescape ***REMOVED***.toLowerCase(***REMOVED***;
			return function( elem ***REMOVED*** {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang"***REMOVED*** || elem.getAttribute("lang"***REMOVED******REMOVED*** ***REMOVED*** {

						elemLang = elemLang.toLowerCase(***REMOVED***;
						return elemLang === lang || elemLang.indexOf( lang + "-" ***REMOVED*** === 0;
					***REMOVED***
				***REMOVED*** while ( (elem = elem.parentNode***REMOVED*** && elem.nodeType === 1 ***REMOVED***;
				return false;
			***REMOVED***;
		***REMOVED******REMOVED***,

		// Miscellaneous
		"target": function( elem ***REMOVED*** {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ***REMOVED*** === elem.id;
		***REMOVED***,

		"root": function( elem ***REMOVED*** {
			return elem === docElem;
		***REMOVED***,

		"focus": function( elem ***REMOVED*** {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus(***REMOVED******REMOVED*** && !!(elem.type || elem.href || ~elem.tabIndex***REMOVED***;
		***REMOVED***,

		// Boolean properties
		"enabled": createDisabledPseudo( false ***REMOVED***,
		"disabled": createDisabledPseudo( true ***REMOVED***,

		"checked": function( elem ***REMOVED*** {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase(***REMOVED***;
			return (nodeName === "input" && !!elem.checked***REMOVED*** || (nodeName === "option" && !!elem.selected***REMOVED***;
		***REMOVED***,

		"selected": function( elem ***REMOVED*** {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ***REMOVED*** {
				elem.parentNode.selectedIndex;
			***REMOVED***

			return elem.selected === true;
		***REMOVED***,

		// Contents
		"empty": function( elem ***REMOVED*** {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1***REMOVED*** or content nodes (text: 3; cdata: 4; entity ref: 5***REMOVED***,
			//   but not by others (comment: 8; processing instruction: 7; etc.***REMOVED***
			// nodeType < 6 works because attributes (2***REMOVED*** do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ***REMOVED*** {
				if ( elem.nodeType < 6 ***REMOVED*** {
					return false;
				***REMOVED***
			***REMOVED***
			return true;
		***REMOVED***,

		"parent": function( elem ***REMOVED*** {
			return !Expr.pseudos["empty"***REMOVED***( elem ***REMOVED***;
		***REMOVED***,

		// Element/input types
		"header": function( elem ***REMOVED*** {
			return rheader.test( elem.nodeName ***REMOVED***;
		***REMOVED***,

		"input": function( elem ***REMOVED*** {
			return rinputs.test( elem.nodeName ***REMOVED***;
		***REMOVED***,

		"button": function( elem ***REMOVED*** {
			var name = elem.nodeName.toLowerCase(***REMOVED***;
			return name === "input" && elem.type === "button" || name === "button";
		***REMOVED***,

		"text": function( elem ***REMOVED*** {
			var attr;
			return elem.nodeName.toLowerCase(***REMOVED*** === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search"***REMOVED*** appear with elem.type === "text"
				( (attr = elem.getAttribute("type"***REMOVED******REMOVED*** == null || attr.toLowerCase(***REMOVED*** === "text" ***REMOVED***;
		***REMOVED***,

		// Position-in-collection
		"first": createPositionalPseudo(function(***REMOVED*** {
			return [ 0 ***REMOVED***;
		***REMOVED******REMOVED***,

		"last": createPositionalPseudo(function( matchIndexes, length ***REMOVED*** {
			return [ length - 1 ***REMOVED***;
		***REMOVED******REMOVED***,

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ***REMOVED*** {
			return [ argument < 0 ? argument + length : argument ***REMOVED***;
		***REMOVED******REMOVED***,

		"even": createPositionalPseudo(function( matchIndexes, length ***REMOVED*** {
			var i = 0;
			for ( ; i < length; i += 2 ***REMOVED*** {
				matchIndexes.push( i ***REMOVED***;
			***REMOVED***
			return matchIndexes;
		***REMOVED******REMOVED***,

		"odd": createPositionalPseudo(function( matchIndexes, length ***REMOVED*** {
			var i = 1;
			for ( ; i < length; i += 2 ***REMOVED*** {
				matchIndexes.push( i ***REMOVED***;
			***REMOVED***
			return matchIndexes;
		***REMOVED******REMOVED***,

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ***REMOVED*** {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ***REMOVED*** {
				matchIndexes.push( i ***REMOVED***;
			***REMOVED***
			return matchIndexes;
		***REMOVED******REMOVED***,

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ***REMOVED*** {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ***REMOVED*** {
				matchIndexes.push( i ***REMOVED***;
			***REMOVED***
			return matchIndexes;
		***REMOVED******REMOVED***
	***REMOVED***
***REMOVED***;

Expr.pseudos["nth"***REMOVED*** = Expr.pseudos["eq"***REMOVED***;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true ***REMOVED*** ***REMOVED*** {
	Expr.pseudos[ i ***REMOVED*** = createInputPseudo( i ***REMOVED***;
***REMOVED***
for ( i in { submit: true, reset: true ***REMOVED*** ***REMOVED*** {
	Expr.pseudos[ i ***REMOVED*** = createButtonPseudo( i ***REMOVED***;
***REMOVED***

// Easy API for creating new setFilters
function setFilters(***REMOVED*** {***REMOVED***
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters(***REMOVED***;

tokenize = Sizzle.tokenize = function( selector, parseOnly ***REMOVED*** {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ***REMOVED***;

	if ( cached ***REMOVED*** {
		return parseOnly ? 0 : cached.slice( 0 ***REMOVED***;
	***REMOVED***

	soFar = selector;
	groups = [***REMOVED***;
	preFilters = Expr.preFilter;

	while ( soFar ***REMOVED*** {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar ***REMOVED******REMOVED*** ***REMOVED*** {
			if ( match ***REMOVED*** {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0***REMOVED***.length ***REMOVED*** || soFar;
			***REMOVED***
			groups.push( (tokens = [***REMOVED******REMOVED*** ***REMOVED***;
		***REMOVED***

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar ***REMOVED******REMOVED*** ***REMOVED*** {
			matched = match.shift(***REMOVED***;
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0***REMOVED***.replace( rtrim, " " ***REMOVED***
			***REMOVED******REMOVED***;
			soFar = soFar.slice( matched.length ***REMOVED***;
		***REMOVED***

		// Filters
		for ( type in Expr.filter ***REMOVED*** {
			if ( (match = matchExpr[ type ***REMOVED***.exec( soFar ***REMOVED******REMOVED*** && (!preFilters[ type ***REMOVED*** ||
				(match = preFilters[ type ***REMOVED***( match ***REMOVED******REMOVED******REMOVED*** ***REMOVED*** {
				matched = match.shift(***REMOVED***;
				tokens.push({
					value: matched,
					type: type,
					matches: match
				***REMOVED******REMOVED***;
				soFar = soFar.slice( matched.length ***REMOVED***;
			***REMOVED***
		***REMOVED***

		if ( !matched ***REMOVED*** {
			break;
		***REMOVED***
	***REMOVED***

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ***REMOVED*** :
			// Cache the tokens
			tokenCache( selector, groups ***REMOVED***.slice( 0 ***REMOVED***;
***REMOVED***;

function toSelector( tokens ***REMOVED*** {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ***REMOVED*** {
		selector += tokens[i***REMOVED***.value;
	***REMOVED***
	return selector;
***REMOVED***

function addCombinator( matcher, combinator, base ***REMOVED*** {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ***REMOVED*** {
			while ( (elem = elem[ dir ***REMOVED******REMOVED*** ***REMOVED*** {
				if ( elem.nodeType === 1 || checkNonElements ***REMOVED*** {
					return matcher( elem, context, xml ***REMOVED***;
				***REMOVED***
			***REMOVED***
			return false;
		***REMOVED*** :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ***REMOVED*** {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ***REMOVED***;

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ***REMOVED*** {
				while ( (elem = elem[ dir ***REMOVED******REMOVED*** ***REMOVED*** {
					if ( elem.nodeType === 1 || checkNonElements ***REMOVED*** {
						if ( matcher( elem, context, xml ***REMOVED*** ***REMOVED*** {
							return true;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED*** else {
				while ( (elem = elem[ dir ***REMOVED******REMOVED*** ***REMOVED*** {
					if ( elem.nodeType === 1 || checkNonElements ***REMOVED*** {
						outerCache = elem[ expando ***REMOVED*** || (elem[ expando ***REMOVED*** = {***REMOVED******REMOVED***;

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709***REMOVED***
						uniqueCache = outerCache[ elem.uniqueID ***REMOVED*** || (outerCache[ elem.uniqueID ***REMOVED*** = {***REMOVED******REMOVED***;

						if ( skip && skip === elem.nodeName.toLowerCase(***REMOVED*** ***REMOVED*** {
							elem = elem[ dir ***REMOVED*** || elem;
						***REMOVED*** else if ( (oldCache = uniqueCache[ key ***REMOVED******REMOVED*** &&
							oldCache[ 0 ***REMOVED*** === dirruns && oldCache[ 1 ***REMOVED*** === doneName ***REMOVED*** {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ***REMOVED*** = oldCache[ 2 ***REMOVED******REMOVED***;
						***REMOVED*** else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ***REMOVED*** = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ***REMOVED*** = matcher( elem, context, xml ***REMOVED******REMOVED*** ***REMOVED*** {
								return true;
							***REMOVED***
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
			return false;
		***REMOVED***;
***REMOVED***

function elementMatcher( matchers ***REMOVED*** {
	return matchers.length > 1 ?
		function( elem, context, xml ***REMOVED*** {
			var i = matchers.length;
			while ( i-- ***REMOVED*** {
				if ( !matchers[i***REMOVED***( elem, context, xml ***REMOVED*** ***REMOVED*** {
					return false;
				***REMOVED***
			***REMOVED***
			return true;
		***REMOVED*** :
		matchers[0***REMOVED***;
***REMOVED***

function multipleContexts( selector, contexts, results ***REMOVED*** {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ***REMOVED*** {
		Sizzle( selector, contexts[i***REMOVED***, results ***REMOVED***;
	***REMOVED***
	return results;
***REMOVED***

function condense( unmatched, map, filter, context, xml ***REMOVED*** {
	var elem,
		newUnmatched = [***REMOVED***,
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ***REMOVED*** {
		if ( (elem = unmatched[i***REMOVED******REMOVED*** ***REMOVED*** {
			if ( !filter || filter( elem, context, xml ***REMOVED*** ***REMOVED*** {
				newUnmatched.push( elem ***REMOVED***;
				if ( mapped ***REMOVED*** {
					map.push( i ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return newUnmatched;
***REMOVED***

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ***REMOVED*** {
	if ( postFilter && !postFilter[ expando ***REMOVED*** ***REMOVED*** {
		postFilter = setMatcher( postFilter ***REMOVED***;
	***REMOVED***
	if ( postFinder && !postFinder[ expando ***REMOVED*** ***REMOVED*** {
		postFinder = setMatcher( postFinder, postSelector ***REMOVED***;
	***REMOVED***
	return markFunction(function( seed, results, context, xml ***REMOVED*** {
		var temp, i, elem,
			preMap = [***REMOVED***,
			postMap = [***REMOVED***,
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ***REMOVED*** : context, [***REMOVED*** ***REMOVED***,

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ***REMOVED*** ?
				condense( elems, preMap, preFilter, context, xml ***REMOVED*** :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ***REMOVED*** ?

					// ...intermediate processing is necessary
					[***REMOVED*** :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ***REMOVED*** {
			matcher( matcherIn, matcherOut, context, xml ***REMOVED***;
		***REMOVED***

		// Apply postFilter
		if ( postFilter ***REMOVED*** {
			temp = condense( matcherOut, postMap ***REMOVED***;
			postFilter( temp, [***REMOVED***, context, xml ***REMOVED***;

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ***REMOVED*** {
				if ( (elem = temp[i***REMOVED******REMOVED*** ***REMOVED*** {
					matcherOut[ postMap[i***REMOVED*** ***REMOVED*** = !(matcherIn[ postMap[i***REMOVED*** ***REMOVED*** = elem***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		if ( seed ***REMOVED*** {
			if ( postFinder || preFilter ***REMOVED*** {
				if ( postFinder ***REMOVED*** {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [***REMOVED***;
					i = matcherOut.length;
					while ( i-- ***REMOVED*** {
						if ( (elem = matcherOut[i***REMOVED******REMOVED*** ***REMOVED*** {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i***REMOVED*** = elem***REMOVED*** ***REMOVED***;
						***REMOVED***
					***REMOVED***
					postFinder( null, (matcherOut = [***REMOVED******REMOVED***, temp, xml ***REMOVED***;
				***REMOVED***

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ***REMOVED*** {
					if ( (elem = matcherOut[i***REMOVED******REMOVED*** &&
						(temp = postFinder ? indexOf( seed, elem ***REMOVED*** : preMap[i***REMOVED******REMOVED*** > -1 ***REMOVED*** {

						seed[temp***REMOVED*** = !(results[temp***REMOVED*** = elem***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***

		// Add elements to results, through postFinder if defined
		***REMOVED*** else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ***REMOVED*** :
					matcherOut
			***REMOVED***;
			if ( postFinder ***REMOVED*** {
				postFinder( null, results, matcherOut, xml ***REMOVED***;
			***REMOVED*** else {
				push.apply( results, matcherOut ***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED******REMOVED***;
***REMOVED***

function matcherFromTokens( tokens ***REMOVED*** {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0***REMOVED***.type ***REMOVED***,
		implicitRelative = leadingRelative || Expr.relative[" "***REMOVED***,
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s***REMOVED***
		matchContext = addCombinator( function( elem ***REMOVED*** {
			return elem === checkContext;
		***REMOVED***, implicitRelative, true ***REMOVED***,
		matchAnyContext = addCombinator( function( elem ***REMOVED*** {
			return indexOf( checkContext, elem ***REMOVED*** > -1;
		***REMOVED***, implicitRelative, true ***REMOVED***,
		matchers = [ function( elem, context, xml ***REMOVED*** {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ***REMOVED*** ***REMOVED*** || (
				(checkContext = context***REMOVED***.nodeType ?
					matchContext( elem, context, xml ***REMOVED*** :
					matchAnyContext( elem, context, xml ***REMOVED*** ***REMOVED***;
			// Avoid hanging onto element (issue #299***REMOVED***
			checkContext = null;
			return ret;
		***REMOVED*** ***REMOVED***;

	for ( ; i < len; i++ ***REMOVED*** {
		if ( (matcher = Expr.relative[ tokens[i***REMOVED***.type ***REMOVED******REMOVED*** ***REMOVED*** {
			matchers = [ addCombinator(elementMatcher( matchers ***REMOVED***, matcher***REMOVED*** ***REMOVED***;
		***REMOVED*** else {
			matcher = Expr.filter[ tokens[i***REMOVED***.type ***REMOVED***.apply( null, tokens[i***REMOVED***.matches ***REMOVED***;

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ***REMOVED*** ***REMOVED*** {
				// Find the next relative operator (if any***REMOVED*** for proper handling
				j = ++i;
				for ( ; j < len; j++ ***REMOVED*** {
					if ( Expr.relative[ tokens[j***REMOVED***.type ***REMOVED*** ***REMOVED*** {
						break;
					***REMOVED***
				***REMOVED***
				return setMatcher(
					i > 1 && elementMatcher( matchers ***REMOVED***,
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ***REMOVED***.concat({ value: tokens[ i - 2 ***REMOVED***.type === " " ? "*" : "" ***REMOVED******REMOVED***
					***REMOVED***.replace( rtrim, "$1" ***REMOVED***,
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ***REMOVED*** ***REMOVED***,
					j < len && matcherFromTokens( (tokens = tokens.slice( j ***REMOVED******REMOVED*** ***REMOVED***,
					j < len && toSelector( tokens ***REMOVED***
				***REMOVED***;
			***REMOVED***
			matchers.push( matcher ***REMOVED***;
		***REMOVED***
	***REMOVED***

	return elementMatcher( matchers ***REMOVED***;
***REMOVED***

function matcherFromGroupMatchers( elementMatchers, setMatchers ***REMOVED*** {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ***REMOVED*** {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [***REMOVED***,
				setMatched = [***REMOVED***,
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"***REMOVED***( "*", outermost ***REMOVED***,
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random(***REMOVED*** || 0.1***REMOVED***,
				len = elems.length;

			if ( outermost ***REMOVED*** {
				outermostContext = context === document || context || outermost;
			***REMOVED***

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>***REMOVED*** matching elements by id
			for ( ; i !== len && (elem = elems[i***REMOVED******REMOVED*** != null; i++ ***REMOVED*** {
				if ( byElement && elem ***REMOVED*** {
					j = 0;
					if ( !context && elem.ownerDocument !== document ***REMOVED*** {
						setDocument( elem ***REMOVED***;
						xml = !documentIsHTML;
					***REMOVED***
					while ( (matcher = elementMatchers[j++***REMOVED******REMOVED*** ***REMOVED*** {
						if ( matcher( elem, context || document, xml***REMOVED*** ***REMOVED*** {
							results.push( elem ***REMOVED***;
							break;
						***REMOVED***
					***REMOVED***
					if ( outermost ***REMOVED*** {
						dirruns = dirrunsUnique;
					***REMOVED***
				***REMOVED***

				// Track unmatched elements for set filters
				if ( bySet ***REMOVED*** {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem***REMOVED*** ***REMOVED*** {
						matchedCount--;
					***REMOVED***

					// Lengthen the array for every element, matched or not
					if ( seed ***REMOVED*** {
						unmatched.push( elem ***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`***REMOVED***, unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ***REMOVED*** {
				j = 0;
				while ( (matcher = setMatchers[j++***REMOVED******REMOVED*** ***REMOVED*** {
					matcher( unmatched, setMatched, context, xml ***REMOVED***;
				***REMOVED***

				if ( seed ***REMOVED*** {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ***REMOVED*** {
						while ( i-- ***REMOVED*** {
							if ( !(unmatched[i***REMOVED*** || setMatched[i***REMOVED******REMOVED*** ***REMOVED*** {
								setMatched[i***REMOVED*** = pop.call( results ***REMOVED***;
							***REMOVED***
						***REMOVED***
					***REMOVED***

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched ***REMOVED***;
				***REMOVED***

				// Add matches to results
				push.apply( results, setMatched ***REMOVED***;

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ***REMOVED*** > 1 ***REMOVED*** {

					Sizzle.uniqueSort( results ***REMOVED***;
				***REMOVED***
			***REMOVED***

			// Override manipulation of globals by nested matchers
			if ( outermost ***REMOVED*** {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			***REMOVED***

			return unmatched;
		***REMOVED***;

	return bySet ?
		markFunction( superMatcher ***REMOVED*** :
		superMatcher;
***REMOVED***

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ***REMOVED*** {
	var i,
		setMatchers = [***REMOVED***,
		elementMatchers = [***REMOVED***,
		cached = compilerCache[ selector + " " ***REMOVED***;

	if ( !cached ***REMOVED*** {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ***REMOVED*** {
			match = tokenize( selector ***REMOVED***;
		***REMOVED***
		i = match.length;
		while ( i-- ***REMOVED*** {
			cached = matcherFromTokens( match[i***REMOVED*** ***REMOVED***;
			if ( cached[ expando ***REMOVED*** ***REMOVED*** {
				setMatchers.push( cached ***REMOVED***;
			***REMOVED*** else {
				elementMatchers.push( cached ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ***REMOVED*** ***REMOVED***;

		// Save selector and tokenization
		cached.selector = selector;
	***REMOVED***
	return cached;
***REMOVED***;

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function***REMOVED*** selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element***REMOVED*** context
 * @param {Array***REMOVED*** [results***REMOVED***
 * @param {Array***REMOVED*** [seed***REMOVED*** A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ***REMOVED*** {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector***REMOVED*** ***REMOVED***;

	results = results || [***REMOVED***;

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context***REMOVED***
	if ( match.length === 1 ***REMOVED*** {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0***REMOVED*** = match[0***REMOVED***.slice( 0 ***REMOVED***;
		if ( tokens.length > 2 && (token = tokens[0***REMOVED******REMOVED***.type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1***REMOVED***.type ***REMOVED*** ***REMOVED*** {

			context = ( Expr.find["ID"***REMOVED***( token.matches[0***REMOVED***.replace(runescape, funescape***REMOVED***, context ***REMOVED*** || [***REMOVED*** ***REMOVED***[0***REMOVED***;
			if ( !context ***REMOVED*** {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			***REMOVED*** else if ( compiled ***REMOVED*** {
				context = context.parentNode;
			***REMOVED***

			selector = selector.slice( tokens.shift(***REMOVED***.value.length ***REMOVED***;
		***REMOVED***

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"***REMOVED***.test( selector ***REMOVED*** ? 0 : tokens.length;
		while ( i-- ***REMOVED*** {
			token = tokens[i***REMOVED***;

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type***REMOVED*** ***REMOVED*** ***REMOVED*** {
				break;
			***REMOVED***
			if ( (find = Expr.find[ type ***REMOVED******REMOVED*** ***REMOVED*** {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0***REMOVED***.replace( runescape, funescape ***REMOVED***,
					rsibling.test( tokens[0***REMOVED***.type ***REMOVED*** && testContext( context.parentNode ***REMOVED*** || context
				***REMOVED******REMOVED*** ***REMOVED*** {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 ***REMOVED***;
					selector = seed.length && toSelector( tokens ***REMOVED***;
					if ( !selector ***REMOVED*** {
						push.apply( results, seed ***REMOVED***;
						return results;
					***REMOVED***

					break;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ***REMOVED*** ***REMOVED***(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ***REMOVED*** && testContext( context.parentNode ***REMOVED*** || context
	***REMOVED***;
	return results;
***REMOVED***;

// One-time assignments

// Sort stability
support.sortStable = expando.split(""***REMOVED***.sort( sortOrder ***REMOVED***.join(""***REMOVED*** === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument(***REMOVED***;

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27***REMOVED***
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ***REMOVED*** {
	// Should return 1, but returns 4 (following***REMOVED***
	return el.compareDocumentPosition( document.createElement("fieldset"***REMOVED*** ***REMOVED*** & 1;
***REMOVED******REMOVED***;

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ***REMOVED*** {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href"***REMOVED*** === "#" ;
***REMOVED******REMOVED*** ***REMOVED*** {
	addHandle( "type|href|height|width", function( elem, name, isXML ***REMOVED*** {
		if ( !isXML ***REMOVED*** {
			return elem.getAttribute( name, name.toLowerCase(***REMOVED*** === "type" ? 1 : 2 ***REMOVED***;
		***REMOVED***
	***REMOVED******REMOVED***;
***REMOVED***

// Support: IE<9
// Use defaultValue in place of getAttribute("value"***REMOVED***
if ( !support.attributes || !assert(function( el ***REMOVED*** {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" ***REMOVED***;
	return el.firstChild.getAttribute( "value" ***REMOVED*** === "";
***REMOVED******REMOVED*** ***REMOVED*** {
	addHandle( "value", function( elem, name, isXML ***REMOVED*** {
		if ( !isXML && elem.nodeName.toLowerCase(***REMOVED*** === "input" ***REMOVED*** {
			return elem.defaultValue;
		***REMOVED***
	***REMOVED******REMOVED***;
***REMOVED***

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ***REMOVED*** {
	return el.getAttribute("disabled"***REMOVED*** == null;
***REMOVED******REMOVED*** ***REMOVED*** {
	addHandle( booleans, function( elem, name, isXML ***REMOVED*** {
		var val;
		if ( !isXML ***REMOVED*** {
			return elem[ name ***REMOVED*** === true ? name.toLowerCase(***REMOVED*** :
					(val = elem.getAttributeNode( name ***REMOVED******REMOVED*** && val.specified ?
					val.value :
				null;
		***REMOVED***
	***REMOVED******REMOVED***;
***REMOVED***

return Sizzle;

***REMOVED******REMOVED***( window ***REMOVED***;



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ***REMOVED*** = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ***REMOVED*** {
	var matched = [***REMOVED***,
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ***REMOVED*** ***REMOVED*** && elem.nodeType !== 9 ***REMOVED*** {
		if ( elem.nodeType === 1 ***REMOVED*** {
			if ( truncate && jQuery( elem ***REMOVED***.is( until ***REMOVED*** ***REMOVED*** {
				break;
			***REMOVED***
			matched.push( elem ***REMOVED***;
		***REMOVED***
	***REMOVED***
	return matched;
***REMOVED***;


var siblings = function( n, elem ***REMOVED*** {
	var matched = [***REMOVED***;

	for ( ; n; n = n.nextSibling ***REMOVED*** {
		if ( n.nodeType === 1 && n !== elem ***REMOVED*** {
			matched.push( n ***REMOVED***;
		***REMOVED***
	***REMOVED***

	return matched;
***REMOVED***;


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ***REMOVED*** {

  return elem.nodeName && elem.nodeName.toLowerCase(***REMOVED*** === name.toLowerCase(***REMOVED***;

***REMOVED***;
var rsingleTag = ( /^<([a-z***REMOVED***[^\/\0>:\x20\t\r\n\f***REMOVED*******REMOVED***[\x20\t\r\n\f***REMOVED****\/?>(?:<\/\1>|***REMOVED***$/i ***REMOVED***;



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ***REMOVED*** {
	if ( isFunction( qualifier ***REMOVED*** ***REMOVED*** {
		return jQuery.grep( elements, function( elem, i ***REMOVED*** {
			return !!qualifier.call( elem, i, elem ***REMOVED*** !== not;
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	// Single element
	if ( qualifier.nodeType ***REMOVED*** {
		return jQuery.grep( elements, function( elem ***REMOVED*** {
			return ( elem === qualifier ***REMOVED*** !== not;
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	// Arraylike of elements (jQuery, arguments, Array***REMOVED***
	if ( typeof qualifier !== "string" ***REMOVED*** {
		return jQuery.grep( elements, function( elem ***REMOVED*** {
			return ( indexOf.call( qualifier, elem ***REMOVED*** > -1 ***REMOVED*** !== not;
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not ***REMOVED***;
***REMOVED***

jQuery.filter = function( expr, elems, not ***REMOVED*** {
	var elem = elems[ 0 ***REMOVED***;

	if ( not ***REMOVED*** {
		expr = ":not(" + expr + "***REMOVED***";
	***REMOVED***

	if ( elems.length === 1 && elem.nodeType === 1 ***REMOVED*** {
		return jQuery.find.matchesSelector( elem, expr ***REMOVED*** ? [ elem ***REMOVED*** : [***REMOVED***;
	***REMOVED***

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ***REMOVED*** {
		return elem.nodeType === 1;
	***REMOVED*** ***REMOVED*** ***REMOVED***;
***REMOVED***;

jQuery.fn.extend( {
	find: function( selector ***REMOVED*** {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ***REMOVED*** {
			return this.pushStack( jQuery( selector ***REMOVED***.filter( function(***REMOVED*** {
				for ( i = 0; i < len; i++ ***REMOVED*** {
					if ( jQuery.contains( self[ i ***REMOVED***, this ***REMOVED*** ***REMOVED*** {
						return true;
					***REMOVED***
				***REMOVED***
			***REMOVED*** ***REMOVED*** ***REMOVED***;
		***REMOVED***

		ret = this.pushStack( [***REMOVED*** ***REMOVED***;

		for ( i = 0; i < len; i++ ***REMOVED*** {
			jQuery.find( selector, self[ i ***REMOVED***, ret ***REMOVED***;
		***REMOVED***

		return len > 1 ? jQuery.uniqueSort( ret ***REMOVED*** : ret;
	***REMOVED***,
	filter: function( selector ***REMOVED*** {
		return this.pushStack( winnow( this, selector || [***REMOVED***, false ***REMOVED*** ***REMOVED***;
	***REMOVED***,
	not: function( selector ***REMOVED*** {
		return this.pushStack( winnow( this, selector || [***REMOVED***, true ***REMOVED*** ***REMOVED***;
	***REMOVED***,
	is: function( selector ***REMOVED*** {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first"***REMOVED***.is("p:last"***REMOVED*** won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ***REMOVED*** ?
				jQuery( selector ***REMOVED*** :
				selector || [***REMOVED***,
			false
		***REMOVED***.length;
	***REMOVED***
***REMOVED*** ***REMOVED***;


// Initialize a jQuery object


// A central reference to the root jQuery(document***REMOVED***
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521***REMOVED***
	// Strict HTML recognition (#11290: must start with <***REMOVED***
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W***REMOVED***+>***REMOVED***[^>***REMOVED****|#([\w-***REMOVED***+***REMOVED******REMOVED***$/,

	init = jQuery.fn.init = function( selector, context, root ***REMOVED*** {
		var match, elem;

		// HANDLE: $(""***REMOVED***, $(null***REMOVED***, $(undefined***REMOVED***, $(false***REMOVED***
		if ( !selector ***REMOVED*** {
			return this;
		***REMOVED***

		// Method init(***REMOVED*** accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101***REMOVED***
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ***REMOVED*** {
			if ( selector[ 0 ***REMOVED*** === "<" &&
				selector[ selector.length - 1 ***REMOVED*** === ">" &&
				selector.length >= 3 ***REMOVED*** {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ***REMOVED***;

			***REMOVED*** else {
				match = rquickExpr.exec( selector ***REMOVED***;
			***REMOVED***

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ***REMOVED*** || !context ***REMOVED*** ***REMOVED*** {

				// HANDLE: $(html***REMOVED*** -> $(array***REMOVED***
				if ( match[ 1 ***REMOVED*** ***REMOVED*** {
					context = context instanceof jQuery ? context[ 0 ***REMOVED*** : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ***REMOVED***,
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					***REMOVED*** ***REMOVED***;

					// HANDLE: $(html, props***REMOVED***
					if ( rsingleTag.test( match[ 1 ***REMOVED*** ***REMOVED*** && jQuery.isPlainObject( context ***REMOVED*** ***REMOVED*** {
						for ( match in context ***REMOVED*** {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ***REMOVED*** ***REMOVED*** ***REMOVED*** {
								this[ match ***REMOVED***( context[ match ***REMOVED*** ***REMOVED***;

							// ...and otherwise set as attributes
							***REMOVED*** else {
								this.attr( match, context[ match ***REMOVED*** ***REMOVED***;
							***REMOVED***
						***REMOVED***
					***REMOVED***

					return this;

				// HANDLE: $(#id***REMOVED***
				***REMOVED*** else {
					elem = document.getElementById( match[ 2 ***REMOVED*** ***REMOVED***;

					if ( elem ***REMOVED*** {

						// Inject the element directly into the jQuery object
						this[ 0 ***REMOVED*** = elem;
						this.length = 1;
					***REMOVED***
					return this;
				***REMOVED***

			// HANDLE: $(expr, $(...***REMOVED******REMOVED***
			***REMOVED*** else if ( !context || context.jquery ***REMOVED*** {
				return ( context || root ***REMOVED***.find( selector ***REMOVED***;

			// HANDLE: $(expr, context***REMOVED***
			// (which is just equivalent to: $(context***REMOVED***.find(expr***REMOVED***
			***REMOVED*** else {
				return this.constructor( context ***REMOVED***.find( selector ***REMOVED***;
			***REMOVED***

		// HANDLE: $(DOMElement***REMOVED***
		***REMOVED*** else if ( selector.nodeType ***REMOVED*** {
			this[ 0 ***REMOVED*** = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function***REMOVED***
		// Shortcut for document ready
		***REMOVED*** else if ( isFunction( selector ***REMOVED*** ***REMOVED*** {
			return root.ready !== undefined ?
				root.ready( selector ***REMOVED*** :

				// Execute immediately if ready is not present
				selector( jQuery ***REMOVED***;
		***REMOVED***

		return jQuery.makeArray( selector, this ***REMOVED***;
	***REMOVED***;

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document ***REMOVED***;


var rparentsprev = /^(?:parents|prev(?:Until|All***REMOVED******REMOVED***/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	***REMOVED***;

jQuery.fn.extend( {
	has: function( target ***REMOVED*** {
		var targets = jQuery( target, this ***REMOVED***,
			l = targets.length;

		return this.filter( function(***REMOVED*** {
			var i = 0;
			for ( ; i < l; i++ ***REMOVED*** {
				if ( jQuery.contains( this, targets[ i ***REMOVED*** ***REMOVED*** ***REMOVED*** {
					return true;
				***REMOVED***
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	closest: function( selectors, context ***REMOVED*** {
		var cur,
			i = 0,
			l = this.length,
			matched = [***REMOVED***,
			targets = typeof selectors !== "string" && jQuery( selectors ***REMOVED***;

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ***REMOVED*** ***REMOVED*** {
			for ( ; i < l; i++ ***REMOVED*** {
				for ( cur = this[ i ***REMOVED***; cur && cur !== context; cur = cur.parentNode ***REMOVED*** {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ***REMOVED*** > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ***REMOVED*** ***REMOVED*** ***REMOVED*** {

						matched.push( cur ***REMOVED***;
						break;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ***REMOVED*** : matched ***REMOVED***;
	***REMOVED***,

	// Determine the position of an element within the set
	index: function( elem ***REMOVED*** {

		// No argument, return index in parent
		if ( !elem ***REMOVED*** {
			return ( this[ 0 ***REMOVED*** && this[ 0 ***REMOVED***.parentNode ***REMOVED*** ? this.first(***REMOVED***.prevAll(***REMOVED***.length : -1;
		***REMOVED***

		// Index in selector
		if ( typeof elem === "string" ***REMOVED*** {
			return indexOf.call( jQuery( elem ***REMOVED***, this[ 0 ***REMOVED*** ***REMOVED***;
		***REMOVED***

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ***REMOVED*** : elem
		***REMOVED***;
	***REMOVED***,

	add: function( selector, context ***REMOVED*** {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(***REMOVED***, jQuery( selector, context ***REMOVED*** ***REMOVED***
			***REMOVED***
		***REMOVED***;
	***REMOVED***,

	addBack: function( selector ***REMOVED*** {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector ***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

function sibling( cur, dir ***REMOVED*** {
	while ( ( cur = cur[ dir ***REMOVED*** ***REMOVED*** && cur.nodeType !== 1 ***REMOVED*** {***REMOVED***
	return cur;
***REMOVED***

jQuery.each( {
	parent: function( elem ***REMOVED*** {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	***REMOVED***,
	parents: function( elem ***REMOVED*** {
		return dir( elem, "parentNode" ***REMOVED***;
	***REMOVED***,
	parentsUntil: function( elem, i, until ***REMOVED*** {
		return dir( elem, "parentNode", until ***REMOVED***;
	***REMOVED***,
	next: function( elem ***REMOVED*** {
		return sibling( elem, "nextSibling" ***REMOVED***;
	***REMOVED***,
	prev: function( elem ***REMOVED*** {
		return sibling( elem, "previousSibling" ***REMOVED***;
	***REMOVED***,
	nextAll: function( elem ***REMOVED*** {
		return dir( elem, "nextSibling" ***REMOVED***;
	***REMOVED***,
	prevAll: function( elem ***REMOVED*** {
		return dir( elem, "previousSibling" ***REMOVED***;
	***REMOVED***,
	nextUntil: function( elem, i, until ***REMOVED*** {
		return dir( elem, "nextSibling", until ***REMOVED***;
	***REMOVED***,
	prevUntil: function( elem, i, until ***REMOVED*** {
		return dir( elem, "previousSibling", until ***REMOVED***;
	***REMOVED***,
	siblings: function( elem ***REMOVED*** {
		return siblings( ( elem.parentNode || {***REMOVED*** ***REMOVED***.firstChild, elem ***REMOVED***;
	***REMOVED***,
	children: function( elem ***REMOVED*** {
		return siblings( elem.firstChild ***REMOVED***;
	***REMOVED***,
	contents: function( elem ***REMOVED*** {
        if ( nodeName( elem, "iframe" ***REMOVED*** ***REMOVED*** {
            return elem.contentDocument;
    ***REMOVED***

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ***REMOVED*** ***REMOVED*** {
            elem = elem.content || elem;
    ***REMOVED***

        return jQuery.merge( [***REMOVED***, elem.childNodes ***REMOVED***;
	***REMOVED***
***REMOVED***, function( name, fn ***REMOVED*** {
	jQuery.fn[ name ***REMOVED*** = function( until, selector ***REMOVED*** {
		var matched = jQuery.map( this, fn, until ***REMOVED***;

		if ( name.slice( -5 ***REMOVED*** !== "Until" ***REMOVED*** {
			selector = until;
		***REMOVED***

		if ( selector && typeof selector === "string" ***REMOVED*** {
			matched = jQuery.filter( selector, matched ***REMOVED***;
		***REMOVED***

		if ( this.length > 1 ***REMOVED*** {

			// Remove duplicates
			if ( !guaranteedUnique[ name ***REMOVED*** ***REMOVED*** {
				jQuery.uniqueSort( matched ***REMOVED***;
			***REMOVED***

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ***REMOVED*** ***REMOVED*** {
				matched.reverse(***REMOVED***;
			***REMOVED***
		***REMOVED***

		return this.pushStack( matched ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;
var rnothtmlwhite = ( /[^\x20\t\r\n\f***REMOVED***+/g ***REMOVED***;



// Convert String-formatted options into Object-formatted ones
function createOptions( options ***REMOVED*** {
	var object = {***REMOVED***;
	jQuery.each( options.match( rnothtmlwhite ***REMOVED*** || [***REMOVED***, function( _, flag ***REMOVED*** {
		object[ flag ***REMOVED*** = true;
	***REMOVED*** ***REMOVED***;
	return object;
***REMOVED***

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred***REMOVED***
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred***REMOVED***
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list***REMOVED***
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ***REMOVED*** {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first***REMOVED***
	options = typeof options === "string" ?
		createOptions( options ***REMOVED*** :
		jQuery.extend( {***REMOVED***, options ***REMOVED***;

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [***REMOVED***,

		// Queue of execution data for repeatable lists
		queue = [***REMOVED***,

		// Index of currently firing callback (modified by add/remove as needed***REMOVED***
		firingIndex = -1,

		// Fire callbacks
		fire = function(***REMOVED*** {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ***REMOVED*** {
				memory = queue.shift(***REMOVED***;
				while ( ++firingIndex < list.length ***REMOVED*** {

					// Run callback and check for early termination
					if ( list[ firingIndex ***REMOVED***.apply( memory[ 0 ***REMOVED***, memory[ 1 ***REMOVED*** ***REMOVED*** === false &&
						options.stopOnFalse ***REMOVED*** {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			// Forget the data if we're done with it
			if ( !options.memory ***REMOVED*** {
				memory = false;
			***REMOVED***

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ***REMOVED*** {

				// Keep an empty list if we have data for future add calls
				if ( memory ***REMOVED*** {
					list = [***REMOVED***;

				// Otherwise, this object is spent
				***REMOVED*** else {
					list = "";
				***REMOVED***
			***REMOVED***
		***REMOVED***,

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function(***REMOVED*** {
				if ( list ***REMOVED*** {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ***REMOVED*** {
						firingIndex = list.length - 1;
						queue.push( memory ***REMOVED***;
					***REMOVED***

					( function add( args ***REMOVED*** {
						jQuery.each( args, function( _, arg ***REMOVED*** {
							if ( isFunction( arg ***REMOVED*** ***REMOVED*** {
								if ( !options.unique || !self.has( arg ***REMOVED*** ***REMOVED*** {
									list.push( arg ***REMOVED***;
								***REMOVED***
							***REMOVED*** else if ( arg && arg.length && toType( arg ***REMOVED*** !== "string" ***REMOVED*** {

								// Inspect recursively
								add( arg ***REMOVED***;
							***REMOVED***
						***REMOVED*** ***REMOVED***;
					***REMOVED*** ***REMOVED***( arguments ***REMOVED***;

					if ( memory && !firing ***REMOVED*** {
						fire(***REMOVED***;
					***REMOVED***
				***REMOVED***
				return this;
			***REMOVED***,

			// Remove a callback from the list
			remove: function(***REMOVED*** {
				jQuery.each( arguments, function( _, arg ***REMOVED*** {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ***REMOVED*** ***REMOVED*** > -1 ***REMOVED*** {
						list.splice( index, 1 ***REMOVED***;

						// Handle firing indexes
						if ( index <= firingIndex ***REMOVED*** {
							firingIndex--;
						***REMOVED***
					***REMOVED***
				***REMOVED*** ***REMOVED***;
				return this;
			***REMOVED***,

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ***REMOVED*** {
				return fn ?
					jQuery.inArray( fn, list ***REMOVED*** > -1 :
					list.length > 0;
			***REMOVED***,

			// Remove all callbacks from the list
			empty: function(***REMOVED*** {
				if ( list ***REMOVED*** {
					list = [***REMOVED***;
				***REMOVED***
				return this;
			***REMOVED***,

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function(***REMOVED*** {
				locked = queue = [***REMOVED***;
				list = memory = "";
				return this;
			***REMOVED***,
			disabled: function(***REMOVED*** {
				return !list;
			***REMOVED***,

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect***REMOVED***
			// Abort any pending executions
			lock: function(***REMOVED*** {
				locked = queue = [***REMOVED***;
				if ( !memory && !firing ***REMOVED*** {
					list = memory = "";
				***REMOVED***
				return this;
			***REMOVED***,
			locked: function(***REMOVED*** {
				return !!locked;
			***REMOVED***,

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ***REMOVED*** {
				if ( !locked ***REMOVED*** {
					args = args || [***REMOVED***;
					args = [ context, args.slice ? args.slice(***REMOVED*** : args ***REMOVED***;
					queue.push( args ***REMOVED***;
					if ( !firing ***REMOVED*** {
						fire(***REMOVED***;
					***REMOVED***
				***REMOVED***
				return this;
			***REMOVED***,

			// Call all the callbacks with the given arguments
			fire: function(***REMOVED*** {
				self.fireWith( this, arguments ***REMOVED***;
				return this;
			***REMOVED***,

			// To know if the callbacks have already been called at least once
			fired: function(***REMOVED*** {
				return !!fired;
			***REMOVED***
		***REMOVED***;

	return self;
***REMOVED***;


function Identity( v ***REMOVED*** {
	return v;
***REMOVED***
function Thrower( ex ***REMOVED*** {
	throw ex;
***REMOVED***

function adoptValue( value, resolve, reject, noValue ***REMOVED*** {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ***REMOVED*** ***REMOVED*** ***REMOVED*** {
			method.call( value ***REMOVED***.done( resolve ***REMOVED***.fail( reject ***REMOVED***;

		// Other thenables
		***REMOVED*** else if ( value && isFunction( ( method = value.then ***REMOVED*** ***REMOVED*** ***REMOVED*** {
			method.call( value, resolve, reject ***REMOVED***;

		// Other non-thenables
		***REMOVED*** else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ***REMOVED***.slice( 0 ***REMOVED*** => resolve( value ***REMOVED***
			// * true: [ value ***REMOVED***.slice( 1 ***REMOVED*** => resolve(***REMOVED***
			resolve.apply( undefined, [ value ***REMOVED***.slice( noValue ***REMOVED*** ***REMOVED***;
		***REMOVED***

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	***REMOVED*** catch ( value ***REMOVED*** {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED***

jQuery.extend( {

	Deferred: function( func ***REMOVED*** {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state***REMOVED***
				[ "notify", "progress", jQuery.Callbacks( "memory" ***REMOVED***,
					jQuery.Callbacks( "memory" ***REMOVED***, 2 ***REMOVED***,
				[ "resolve", "done", jQuery.Callbacks( "once memory" ***REMOVED***,
					jQuery.Callbacks( "once memory" ***REMOVED***, 0, "resolved" ***REMOVED***,
				[ "reject", "fail", jQuery.Callbacks( "once memory" ***REMOVED***,
					jQuery.Callbacks( "once memory" ***REMOVED***, 1, "rejected" ***REMOVED***
			***REMOVED***,
			state = "pending",
			promise = {
				state: function(***REMOVED*** {
					return state;
				***REMOVED***,
				always: function(***REMOVED*** {
					deferred.done( arguments ***REMOVED***.fail( arguments ***REMOVED***;
					return this;
				***REMOVED***,
				"catch": function( fn ***REMOVED*** {
					return promise.then( null, fn ***REMOVED***;
				***REMOVED***,

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ***REMOVED*** {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ***REMOVED*** {
						jQuery.each( tuples, function( i, tuple ***REMOVED*** {

							// Map tuples (progress, done, fail***REMOVED*** to arguments (done, fail, progress***REMOVED***
							var fn = isFunction( fns[ tuple[ 4 ***REMOVED*** ***REMOVED*** ***REMOVED*** && fns[ tuple[ 4 ***REMOVED*** ***REMOVED***;

							// deferred.progress(function(***REMOVED*** { bind to newDefer or newDefer.notify ***REMOVED******REMOVED***
							// deferred.done(function(***REMOVED*** { bind to newDefer or newDefer.resolve ***REMOVED******REMOVED***
							// deferred.fail(function(***REMOVED*** { bind to newDefer or newDefer.reject ***REMOVED******REMOVED***
							deferred[ tuple[ 1 ***REMOVED*** ***REMOVED***( function(***REMOVED*** {
								var returned = fn && fn.apply( this, arguments ***REMOVED***;
								if ( returned && isFunction( returned.promise ***REMOVED*** ***REMOVED*** {
									returned.promise(***REMOVED***
										.progress( newDefer.notify ***REMOVED***
										.done( newDefer.resolve ***REMOVED***
										.fail( newDefer.reject ***REMOVED***;
								***REMOVED*** else {
									newDefer[ tuple[ 0 ***REMOVED*** + "With" ***REMOVED***(
										this,
										fn ? [ returned ***REMOVED*** : arguments
									***REMOVED***;
								***REMOVED***
							***REMOVED*** ***REMOVED***;
						***REMOVED*** ***REMOVED***;
						fns = null;
					***REMOVED*** ***REMOVED***.promise(***REMOVED***;
				***REMOVED***,
				then: function( onFulfilled, onRejected, onProgress ***REMOVED*** {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ***REMOVED*** {
						return function(***REMOVED*** {
							var that = this,
								args = arguments,
								mightThrow = function(***REMOVED*** {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ***REMOVED*** {
										return;
									***REMOVED***

									returned = handler.apply( that, args ***REMOVED***;

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise(***REMOVED*** ***REMOVED*** {
										throw new TypeError( "Thenable self-resolution" ***REMOVED***;
									***REMOVED***

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ***REMOVED*** &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ***REMOVED*** ***REMOVED*** {

										// Special processors (notify***REMOVED*** just wait for resolution
										if ( special ***REMOVED*** {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ***REMOVED***,
												resolve( maxDepth, deferred, Thrower, special ***REMOVED***
											***REMOVED***;

										// Normal processors (resolve***REMOVED*** also hook into progress
										***REMOVED*** else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ***REMOVED***,
												resolve( maxDepth, deferred, Thrower, special ***REMOVED***,
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith ***REMOVED***
											***REMOVED***;
										***REMOVED***

									// Handle all other returned values
									***REMOVED*** else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior***REMOVED***
										if ( handler !== Identity ***REMOVED*** {
											that = undefined;
											args = [ returned ***REMOVED***;
										***REMOVED***

										// Process the value(s***REMOVED***
										// Default process is resolve
										( special || deferred.resolveWith ***REMOVED***( that, args ***REMOVED***;
									***REMOVED***
								***REMOVED***,

								// Only normal processors (resolve***REMOVED*** catch and reject exceptions
								process = special ?
									mightThrow :
									function(***REMOVED*** {
										try {
											mightThrow(***REMOVED***;
										***REMOVED*** catch ( e ***REMOVED*** {

											if ( jQuery.Deferred.exceptionHook ***REMOVED*** {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace ***REMOVED***;
											***REMOVED***

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ***REMOVED*** {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior***REMOVED***
												if ( handler !== Thrower ***REMOVED*** {
													that = undefined;
													args = [ e ***REMOVED***;
												***REMOVED***

												deferred.rejectWith( that, args ***REMOVED***;
											***REMOVED***
										***REMOVED***
									***REMOVED***;

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ***REMOVED*** {
								process(***REMOVED***;
							***REMOVED*** else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ***REMOVED*** {
									process.stackTrace = jQuery.Deferred.getStackHook(***REMOVED***;
								***REMOVED***
								window.setTimeout( process ***REMOVED***;
							***REMOVED***
						***REMOVED***;
					***REMOVED***

					return jQuery.Deferred( function( newDefer ***REMOVED*** {

						// progress_handlers.add( ... ***REMOVED***
						tuples[ 0 ***REMOVED***[ 3 ***REMOVED***.add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ***REMOVED*** ?
									onProgress :
									Identity,
								newDefer.notifyWith
							***REMOVED***
						***REMOVED***;

						// fulfilled_handlers.add( ... ***REMOVED***
						tuples[ 1 ***REMOVED***[ 3 ***REMOVED***.add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ***REMOVED*** ?
									onFulfilled :
									Identity
							***REMOVED***
						***REMOVED***;

						// rejected_handlers.add( ... ***REMOVED***
						tuples[ 2 ***REMOVED***[ 3 ***REMOVED***.add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ***REMOVED*** ?
									onRejected :
									Thrower
							***REMOVED***
						***REMOVED***;
					***REMOVED*** ***REMOVED***.promise(***REMOVED***;
				***REMOVED***,

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ***REMOVED*** {
					return obj != null ? jQuery.extend( obj, promise ***REMOVED*** : promise;
				***REMOVED***
			***REMOVED***,
			deferred = {***REMOVED***;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ***REMOVED*** {
			var list = tuple[ 2 ***REMOVED***,
				stateString = tuple[ 5 ***REMOVED***;

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ***REMOVED*** ***REMOVED*** = list.add;

			// Handle state
			if ( stateString ***REMOVED*** {
				list.add(
					function(***REMOVED*** {

						// state = "resolved" (i.e., fulfilled***REMOVED***
						// state = "rejected"
						state = stateString;
					***REMOVED***,

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ***REMOVED***[ 2 ***REMOVED***.disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ***REMOVED***[ 3 ***REMOVED***.disable,

					// progress_callbacks.lock
					tuples[ 0 ***REMOVED***[ 2 ***REMOVED***.lock,

					// progress_handlers.lock
					tuples[ 0 ***REMOVED***[ 3 ***REMOVED***.lock
				***REMOVED***;
			***REMOVED***

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ***REMOVED***.fire ***REMOVED***;

			// deferred.notify = function(***REMOVED*** { deferred.notifyWith(...***REMOVED*** ***REMOVED***
			// deferred.resolve = function(***REMOVED*** { deferred.resolveWith(...***REMOVED*** ***REMOVED***
			// deferred.reject = function(***REMOVED*** { deferred.rejectWith(...***REMOVED*** ***REMOVED***
			deferred[ tuple[ 0 ***REMOVED*** ***REMOVED*** = function(***REMOVED*** {
				deferred[ tuple[ 0 ***REMOVED*** + "With" ***REMOVED***( this === deferred ? undefined : this, arguments ***REMOVED***;
				return this;
			***REMOVED***;

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ***REMOVED*** + "With" ***REMOVED*** = list.fireWith;
		***REMOVED*** ***REMOVED***;

		// Make the deferred a promise
		promise.promise( deferred ***REMOVED***;

		// Call given func if any
		if ( func ***REMOVED*** {
			func.call( deferred, deferred ***REMOVED***;
		***REMOVED***

		// All done!
		return deferred;
	***REMOVED***,

	// Deferred helper
	when: function( singleValue ***REMOVED*** {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ***REMOVED***,
			resolveValues = slice.call( arguments ***REMOVED***,

			// the master Deferred
			master = jQuery.Deferred(***REMOVED***,

			// subordinate callback factory
			updateFunc = function( i ***REMOVED*** {
				return function( value ***REMOVED*** {
					resolveContexts[ i ***REMOVED*** = this;
					resolveValues[ i ***REMOVED*** = arguments.length > 1 ? slice.call( arguments ***REMOVED*** : value;
					if ( !( --remaining ***REMOVED*** ***REMOVED*** {
						master.resolveWith( resolveContexts, resolveValues ***REMOVED***;
					***REMOVED***
				***REMOVED***;
			***REMOVED***;

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ***REMOVED*** {
			adoptValue( singleValue, master.done( updateFunc( i ***REMOVED*** ***REMOVED***.resolve, master.reject,
				!remaining ***REMOVED***;

			// Use .then(***REMOVED*** to unwrap secondary thenables (cf. gh-3000***REMOVED***
			if ( master.state(***REMOVED*** === "pending" ||
				isFunction( resolveValues[ i ***REMOVED*** && resolveValues[ i ***REMOVED***.then ***REMOVED*** ***REMOVED*** {

				return master.then(***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ***REMOVED*** {
			adoptValue( resolveValues[ i ***REMOVED***, updateFunc( i ***REMOVED***, master.reject ***REMOVED***;
		***REMOVED***

		return master.promise(***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI***REMOVED***Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ***REMOVED*** {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ***REMOVED*** ***REMOVED*** {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack ***REMOVED***;
	***REMOVED***
***REMOVED***;




jQuery.readyException = function( error ***REMOVED*** {
	window.setTimeout( function(***REMOVED*** {
		throw error;
	***REMOVED*** ***REMOVED***;
***REMOVED***;




// The deferred used on DOM ready
var readyList = jQuery.Deferred(***REMOVED***;

jQuery.fn.ready = function( fn ***REMOVED*** {

	readyList
		.then( fn ***REMOVED***

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ***REMOVED*** {
			jQuery.readyException( error ***REMOVED***;
		***REMOVED*** ***REMOVED***;

	return this;
***REMOVED***;

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ***REMOVED*** {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ***REMOVED*** {
			return;
		***REMOVED***

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ***REMOVED*** {
			return;
		***REMOVED***

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed(***REMOVED*** {
	document.removeEventListener( "DOMContentLoaded", completed ***REMOVED***;
	window.removeEventListener( "load", completed ***REMOVED***;
	jQuery.ready(***REMOVED***;
***REMOVED***

// Catch cases where $(document***REMOVED***.ready(***REMOVED*** is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ***REMOVED*** ***REMOVED*** {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready ***REMOVED***;

***REMOVED*** else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed ***REMOVED***;

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed ***REMOVED***;
***REMOVED***




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ***REMOVED*** {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ***REMOVED*** === "object" ***REMOVED*** {
		chainable = true;
		for ( i in key ***REMOVED*** {
			access( elems, fn, i, key[ i ***REMOVED***, true, emptyGet, raw ***REMOVED***;
		***REMOVED***

	// Sets one value
	***REMOVED*** else if ( value !== undefined ***REMOVED*** {
		chainable = true;

		if ( !isFunction( value ***REMOVED*** ***REMOVED*** {
			raw = true;
		***REMOVED***

		if ( bulk ***REMOVED*** {

			// Bulk operations run against the entire set
			if ( raw ***REMOVED*** {
				fn.call( elems, value ***REMOVED***;
				fn = null;

			// ...except when executing function values
			***REMOVED*** else {
				bulk = fn;
				fn = function( elem, key, value ***REMOVED*** {
					return bulk.call( jQuery( elem ***REMOVED***, value ***REMOVED***;
				***REMOVED***;
			***REMOVED***
		***REMOVED***

		if ( fn ***REMOVED*** {
			for ( ; i < len; i++ ***REMOVED*** {
				fn(
					elems[ i ***REMOVED***, key, raw ?
					value :
					value.call( elems[ i ***REMOVED***, i, fn( elems[ i ***REMOVED***, key ***REMOVED*** ***REMOVED***
				***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	if ( chainable ***REMOVED*** {
		return elems;
	***REMOVED***

	// Gets
	if ( bulk ***REMOVED*** {
		return fn.call( elems ***REMOVED***;
	***REMOVED***

	return len ? fn( elems[ 0 ***REMOVED***, key ***REMOVED*** : emptyGet;
***REMOVED***;


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z***REMOVED******REMOVED***/g;

// Used by camelCase as callback to replace(***REMOVED***
function fcamelCase( all, letter ***REMOVED*** {
	return letter.toUpperCase(***REMOVED***;
***REMOVED***

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572***REMOVED***
function camelCase( string ***REMOVED*** {
	return string.replace( rmsPrefix, "ms-" ***REMOVED***.replace( rdashAlpha, fcamelCase ***REMOVED***;
***REMOVED***
var acceptData = function( owner ***REMOVED*** {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType ***REMOVED***;
***REMOVED***;




function Data(***REMOVED*** {
	this.expando = jQuery.expando + Data.uid++;
***REMOVED***

Data.uid = 1;

Data.prototype = {

	cache: function( owner ***REMOVED*** {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ***REMOVED***;

		// If not, create one
		if ( !value ***REMOVED*** {
			value = {***REMOVED***;

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ***REMOVED*** ***REMOVED*** {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ***REMOVED*** {
					owner[ this.expando ***REMOVED*** = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				***REMOVED*** else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					***REMOVED*** ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return value;
	***REMOVED***,
	set: function( owner, data, value ***REMOVED*** {
		var prop,
			cache = this.cache( owner ***REMOVED***;

		// Handle: [ owner, key, value ***REMOVED*** args
		// Always use camelCase key (gh-2257***REMOVED***
		if ( typeof data === "string" ***REMOVED*** {
			cache[ camelCase( data ***REMOVED*** ***REMOVED*** = value;

		// Handle: [ owner, { properties ***REMOVED*** ***REMOVED*** args
		***REMOVED*** else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ***REMOVED*** {
				cache[ camelCase( prop ***REMOVED*** ***REMOVED*** = data[ prop ***REMOVED***;
			***REMOVED***
		***REMOVED***
		return cache;
	***REMOVED***,
	get: function( owner, key ***REMOVED*** {
		return key === undefined ?
			this.cache( owner ***REMOVED*** :

			// Always use camelCase key (gh-2257***REMOVED***
			owner[ this.expando ***REMOVED*** && owner[ this.expando ***REMOVED***[ camelCase( key ***REMOVED*** ***REMOVED***;
	***REMOVED***,
	access: function( owner, key, value ***REMOVED*** {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ***REMOVED*** && value === undefined ***REMOVED*** ***REMOVED*** {

			return this.get( owner, key ***REMOVED***;
		***REMOVED***

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects***REMOVED*** with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value ***REMOVED***;

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[****REMOVED***
		return value !== undefined ? value : key;
	***REMOVED***,
	remove: function( owner, key ***REMOVED*** {
		var i,
			cache = owner[ this.expando ***REMOVED***;

		if ( cache === undefined ***REMOVED*** {
			return;
		***REMOVED***

		if ( key !== undefined ***REMOVED*** {

			// Support array or space separated string of keys
			if ( Array.isArray( key ***REMOVED*** ***REMOVED*** {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase ***REMOVED***;
			***REMOVED*** else {
				key = camelCase( key ***REMOVED***;

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ***REMOVED*** :
					( key.match( rnothtmlwhite ***REMOVED*** || [***REMOVED*** ***REMOVED***;
			***REMOVED***

			i = key.length;

			while ( i-- ***REMOVED*** {
				delete cache[ key[ i ***REMOVED*** ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ***REMOVED*** ***REMOVED*** {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted***REMOVED***
			if ( owner.nodeType ***REMOVED*** {
				owner[ this.expando ***REMOVED*** = undefined;
			***REMOVED*** else {
				delete owner[ this.expando ***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED***,
	hasData: function( owner ***REMOVED*** {
		var cache = owner[ this.expando ***REMOVED***;
		return cache !== undefined && !jQuery.isEmptyObject( cache ***REMOVED***;
	***REMOVED***
***REMOVED***;
var dataPriv = new Data(***REMOVED***;

var dataUser = new Data(***REMOVED***;



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData***REMOVED***
//	5. Avoid exposing implementation details on user objects (eg. expando properties***REMOVED***
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W***REMOVED****\***REMOVED***|\[[\w\W***REMOVED****\***REMOVED******REMOVED***$/,
	rmultiDash = /[A-Z***REMOVED***/g;

function getData( data ***REMOVED*** {
	if ( data === "true" ***REMOVED*** {
		return true;
	***REMOVED***

	if ( data === "false" ***REMOVED*** {
		return false;
	***REMOVED***

	if ( data === "null" ***REMOVED*** {
		return null;
	***REMOVED***

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ***REMOVED*** {
		return +data;
	***REMOVED***

	if ( rbrace.test( data ***REMOVED*** ***REMOVED*** {
		return JSON.parse( data ***REMOVED***;
	***REMOVED***

	return data;
***REMOVED***

function dataAttr( elem, key, data ***REMOVED*** {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ***REMOVED*** {
		name = "data-" + key.replace( rmultiDash, "-$&" ***REMOVED***.toLowerCase(***REMOVED***;
		data = elem.getAttribute( name ***REMOVED***;

		if ( typeof data === "string" ***REMOVED*** {
			try {
				data = getData( data ***REMOVED***;
			***REMOVED*** catch ( e ***REMOVED*** {***REMOVED***

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data ***REMOVED***;
		***REMOVED*** else {
			data = undefined;
		***REMOVED***
	***REMOVED***
	return data;
***REMOVED***

jQuery.extend( {
	hasData: function( elem ***REMOVED*** {
		return dataUser.hasData( elem ***REMOVED*** || dataPriv.hasData( elem ***REMOVED***;
	***REMOVED***,

	data: function( elem, name, data ***REMOVED*** {
		return dataUser.access( elem, name, data ***REMOVED***;
	***REMOVED***,

	removeData: function( elem, name ***REMOVED*** {
		dataUser.remove( elem, name ***REMOVED***;
	***REMOVED***,

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ***REMOVED*** {
		return dataPriv.access( elem, name, data ***REMOVED***;
	***REMOVED***,

	_removeData: function( elem, name ***REMOVED*** {
		dataPriv.remove( elem, name ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.fn.extend( {
	data: function( key, value ***REMOVED*** {
		var i, name, data,
			elem = this[ 0 ***REMOVED***,
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ***REMOVED*** {
			if ( this.length ***REMOVED*** {
				data = dataUser.get( elem ***REMOVED***;

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ***REMOVED*** ***REMOVED*** {
					i = attrs.length;
					while ( i-- ***REMOVED*** {

						// Support: IE 11 only
						// The attrs elements can be null (#14894***REMOVED***
						if ( attrs[ i ***REMOVED*** ***REMOVED*** {
							name = attrs[ i ***REMOVED***.name;
							if ( name.indexOf( "data-" ***REMOVED*** === 0 ***REMOVED*** {
								name = camelCase( name.slice( 5 ***REMOVED*** ***REMOVED***;
								dataAttr( elem, name, data[ name ***REMOVED*** ***REMOVED***;
							***REMOVED***
						***REMOVED***
					***REMOVED***
					dataPriv.set( elem, "hasDataAttrs", true ***REMOVED***;
				***REMOVED***
			***REMOVED***

			return data;
		***REMOVED***

		// Sets multiple values
		if ( typeof key === "object" ***REMOVED*** {
			return this.each( function(***REMOVED*** {
				dataUser.set( this, key ***REMOVED***;
			***REMOVED*** ***REMOVED***;
		***REMOVED***

		return access( this, function( value ***REMOVED*** {
			var data;

			// The calling jQuery object (element matches***REMOVED*** is not empty
			// (and therefore has an element appears at this[ 0 ***REMOVED******REMOVED*** and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ***REMOVED*** which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ***REMOVED*** {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key ***REMOVED***;
				if ( data !== undefined ***REMOVED*** {
					return data;
				***REMOVED***

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key ***REMOVED***;
				if ( data !== undefined ***REMOVED*** {
					return data;
				***REMOVED***

				// We tried really hard, but the data doesn't exist.
				return;
			***REMOVED***

			// Set the data...
			this.each( function(***REMOVED*** {

				// We always store the camelCased key
				dataUser.set( this, key, value ***REMOVED***;
			***REMOVED*** ***REMOVED***;
		***REMOVED***, null, value, arguments.length > 1, null, true ***REMOVED***;
	***REMOVED***,

	removeData: function( key ***REMOVED*** {
		return this.each( function(***REMOVED*** {
			dataUser.remove( this, key ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;


jQuery.extend( {
	queue: function( elem, type, data ***REMOVED*** {
		var queue;

		if ( elem ***REMOVED*** {
			type = ( type || "fx" ***REMOVED*** + "queue";
			queue = dataPriv.get( elem, type ***REMOVED***;

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ***REMOVED*** {
				if ( !queue || Array.isArray( data ***REMOVED*** ***REMOVED*** {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ***REMOVED*** ***REMOVED***;
				***REMOVED*** else {
					queue.push( data ***REMOVED***;
				***REMOVED***
			***REMOVED***
			return queue || [***REMOVED***;
		***REMOVED***
	***REMOVED***,

	dequeue: function( elem, type ***REMOVED*** {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ***REMOVED***,
			startLength = queue.length,
			fn = queue.shift(***REMOVED***,
			hooks = jQuery._queueHooks( elem, type ***REMOVED***,
			next = function(***REMOVED*** {
				jQuery.dequeue( elem, type ***REMOVED***;
			***REMOVED***;

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ***REMOVED*** {
			fn = queue.shift(***REMOVED***;
			startLength--;
		***REMOVED***

		if ( fn ***REMOVED*** {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ***REMOVED*** {
				queue.unshift( "inprogress" ***REMOVED***;
			***REMOVED***

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks ***REMOVED***;
		***REMOVED***

		if ( !startLength && hooks ***REMOVED*** {
			hooks.empty.fire(***REMOVED***;
		***REMOVED***
	***REMOVED***,

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ***REMOVED*** {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ***REMOVED*** || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ***REMOVED***.add( function(***REMOVED*** {
				dataPriv.remove( elem, [ type + "queue", key ***REMOVED*** ***REMOVED***;
			***REMOVED*** ***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.fn.extend( {
	queue: function( type, data ***REMOVED*** {
		var setter = 2;

		if ( typeof type !== "string" ***REMOVED*** {
			data = type;
			type = "fx";
			setter--;
		***REMOVED***

		if ( arguments.length < setter ***REMOVED*** {
			return jQuery.queue( this[ 0 ***REMOVED***, type ***REMOVED***;
		***REMOVED***

		return data === undefined ?
			this :
			this.each( function(***REMOVED*** {
				var queue = jQuery.queue( this, type, data ***REMOVED***;

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type ***REMOVED***;

				if ( type === "fx" && queue[ 0 ***REMOVED*** !== "inprogress" ***REMOVED*** {
					jQuery.dequeue( this, type ***REMOVED***;
				***REMOVED***
			***REMOVED*** ***REMOVED***;
	***REMOVED***,
	dequeue: function( type ***REMOVED*** {
		return this.each( function(***REMOVED*** {
			jQuery.dequeue( this, type ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***,
	clearQueue: function( type ***REMOVED*** {
		return this.queue( type || "fx", [***REMOVED*** ***REMOVED***;
	***REMOVED***,

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default***REMOVED***
	promise: function( type, obj ***REMOVED*** {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(***REMOVED***,
			elements = this,
			i = this.length,
			resolve = function(***REMOVED*** {
				if ( !( --count ***REMOVED*** ***REMOVED*** {
					defer.resolveWith( elements, [ elements ***REMOVED*** ***REMOVED***;
				***REMOVED***
			***REMOVED***;

		if ( typeof type !== "string" ***REMOVED*** {
			obj = type;
			type = undefined;
		***REMOVED***
		type = type || "fx";

		while ( i-- ***REMOVED*** {
			tmp = dataPriv.get( elements[ i ***REMOVED***, type + "queueHooks" ***REMOVED***;
			if ( tmp && tmp.empty ***REMOVED*** {
				count++;
				tmp.empty.add( resolve ***REMOVED***;
			***REMOVED***
		***REMOVED***
		resolve(***REMOVED***;
		return defer.promise( obj ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;
var pnum = ( /[+-***REMOVED***?(?:\d*\.|***REMOVED***\d+(?:[eE***REMOVED***[+-***REMOVED***?\d+|***REMOVED***/ ***REMOVED***.source;

var rcssNum = new RegExp( "^(?:([+-***REMOVED******REMOVED***=|***REMOVED***(" + pnum + "***REMOVED***([a-z%***REMOVED*******REMOVED***$", "i" ***REMOVED***;


var cssExpand = [ "Top", "Right", "Bottom", "Left" ***REMOVED***;

var isHiddenWithinTree = function( elem, el ***REMOVED*** {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ***REMOVED*** &&

			jQuery.css( elem, "display" ***REMOVED*** === "none";
	***REMOVED***;

var swap = function( elem, options, callback, args ***REMOVED*** {
	var ret, name,
		old = {***REMOVED***;

	// Remember the old values, and insert the new ones
	for ( name in options ***REMOVED*** {
		old[ name ***REMOVED*** = elem.style[ name ***REMOVED***;
		elem.style[ name ***REMOVED*** = options[ name ***REMOVED***;
	***REMOVED***

	ret = callback.apply( elem, args || [***REMOVED*** ***REMOVED***;

	// Revert the old values
	for ( name in options ***REMOVED*** {
		elem.style[ name ***REMOVED*** = old[ name ***REMOVED***;
	***REMOVED***

	return ret;
***REMOVED***;




function adjustCSS( elem, prop, valueParts, tween ***REMOVED*** {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function(***REMOVED*** {
				return tween.cur(***REMOVED***;
			***REMOVED*** :
			function(***REMOVED*** {
				return jQuery.css( elem, prop, "" ***REMOVED***;
			***REMOVED***,
		initial = currentValue(***REMOVED***,
		unit = valueParts && valueParts[ 3 ***REMOVED*** || ( jQuery.cssNumber[ prop ***REMOVED*** ? "" : "px" ***REMOVED***,

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ***REMOVED*** || unit !== "px" && +initial ***REMOVED*** &&
			rcssNum.exec( jQuery.css( elem, prop ***REMOVED*** ***REMOVED***;

	if ( initialInUnit && initialInUnit[ 3 ***REMOVED*** !== unit ***REMOVED*** {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144***REMOVED***
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ***REMOVED***;

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ***REMOVED*** {

			// Evaluate and update our best guess (doubling guesses that zero out***REMOVED***.
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive***REMOVED***.
			jQuery.style( elem, prop, initialInUnit + unit ***REMOVED***;
			if ( ( 1 - scale ***REMOVED*** * ( 1 - ( scale = currentValue(***REMOVED*** / initial || 0.5 ***REMOVED*** ***REMOVED*** <= 0 ***REMOVED*** {
				maxIterations = 0;
			***REMOVED***
			initialInUnit = initialInUnit / scale;

		***REMOVED***

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit ***REMOVED***;

		// Make sure we update the tween properties later on
		valueParts = valueParts || [***REMOVED***;
	***REMOVED***

	if ( valueParts ***REMOVED*** {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=***REMOVED*** if specified
		adjusted = valueParts[ 1 ***REMOVED*** ?
			initialInUnit + ( valueParts[ 1 ***REMOVED*** + 1 ***REMOVED*** * valueParts[ 2 ***REMOVED*** :
			+valueParts[ 2 ***REMOVED***;
		if ( tween ***REMOVED*** {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		***REMOVED***
	***REMOVED***
	return adjusted;
***REMOVED***


var defaultDisplayMap = {***REMOVED***;

function getDefaultDisplay( elem ***REMOVED*** {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ***REMOVED***;

	if ( display ***REMOVED*** {
		return display;
	***REMOVED***

	temp = doc.body.appendChild( doc.createElement( nodeName ***REMOVED*** ***REMOVED***;
	display = jQuery.css( temp, "display" ***REMOVED***;

	temp.parentNode.removeChild( temp ***REMOVED***;

	if ( display === "none" ***REMOVED*** {
		display = "block";
	***REMOVED***
	defaultDisplayMap[ nodeName ***REMOVED*** = display;

	return display;
***REMOVED***

function showHide( elements, show ***REMOVED*** {
	var display, elem,
		values = [***REMOVED***,
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ***REMOVED*** {
		elem = elements[ index ***REMOVED***;
		if ( !elem.style ***REMOVED*** {
			continue;
		***REMOVED***

		display = elem.style.display;
		if ( show ***REMOVED*** {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow***REMOVED***
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored***REMOVED***
			if ( display === "none" ***REMOVED*** {
				values[ index ***REMOVED*** = dataPriv.get( elem, "display" ***REMOVED*** || null;
				if ( !values[ index ***REMOVED*** ***REMOVED*** {
					elem.style.display = "";
				***REMOVED***
			***REMOVED***
			if ( elem.style.display === "" && isHiddenWithinTree( elem ***REMOVED*** ***REMOVED*** {
				values[ index ***REMOVED*** = getDefaultDisplay( elem ***REMOVED***;
			***REMOVED***
		***REMOVED*** else {
			if ( display !== "none" ***REMOVED*** {
				values[ index ***REMOVED*** = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display ***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ***REMOVED*** {
		if ( values[ index ***REMOVED*** != null ***REMOVED*** {
			elements[ index ***REMOVED***.style.display = values[ index ***REMOVED***;
		***REMOVED***
	***REMOVED***

	return elements;
***REMOVED***

jQuery.fn.extend( {
	show: function(***REMOVED*** {
		return showHide( this, true ***REMOVED***;
	***REMOVED***,
	hide: function(***REMOVED*** {
		return showHide( this ***REMOVED***;
	***REMOVED***,
	toggle: function( state ***REMOVED*** {
		if ( typeof state === "boolean" ***REMOVED*** {
			return state ? this.show(***REMOVED*** : this.hide(***REMOVED***;
		***REMOVED***

		return this.each( function(***REMOVED*** {
			if ( isHiddenWithinTree( this ***REMOVED*** ***REMOVED*** {
				jQuery( this ***REMOVED***.show(***REMOVED***;
			***REMOVED*** else {
				jQuery( this ***REMOVED***.hide(***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;
var rcheckableType = ( /^(?:checkbox|radio***REMOVED***$/i ***REMOVED***;

var rtagName = ( /<([a-z***REMOVED***[^\/\0>\x20\t\r\n\f***REMOVED***+***REMOVED***/i ***REMOVED***;

var rscriptType = ( /^$|^module$|\/(?:java|ecma***REMOVED***script/i ***REMOVED***;



// We have to close these tags to support XHTML (#13200***REMOVED***
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ***REMOVED***,

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ***REMOVED***,
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ***REMOVED***,
	tr: [ 2, "<table><tbody>", "</tbody></table>" ***REMOVED***,
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ***REMOVED***,

	_default: [ 0, "", "" ***REMOVED***
***REMOVED***;

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ***REMOVED*** {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151***REMOVED***
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ***REMOVED*** {
		ret = context.getElementsByTagName( tag || "*" ***REMOVED***;

	***REMOVED*** else if ( typeof context.querySelectorAll !== "undefined" ***REMOVED*** {
		ret = context.querySelectorAll( tag || "*" ***REMOVED***;

	***REMOVED*** else {
		ret = [***REMOVED***;
	***REMOVED***

	if ( tag === undefined || tag && nodeName( context, tag ***REMOVED*** ***REMOVED*** {
		return jQuery.merge( [ context ***REMOVED***, ret ***REMOVED***;
	***REMOVED***

	return ret;
***REMOVED***


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ***REMOVED*** {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ***REMOVED*** {
		dataPriv.set(
			elems[ i ***REMOVED***,
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ***REMOVED***, "globalEval" ***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED***


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ***REMOVED*** {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(***REMOVED***,
		nodes = [***REMOVED***,
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ***REMOVED*** {
		elem = elems[ i ***REMOVED***;

		if ( elem || elem === 0 ***REMOVED*** {

			// Add nodes directly
			if ( toType( elem ***REMOVED*** === "object" ***REMOVED*** {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ***REMOVED*** : elem ***REMOVED***;

			// Convert non-html into a text node
			***REMOVED*** else if ( !rhtml.test( elem ***REMOVED*** ***REMOVED*** {
				nodes.push( context.createTextNode( elem ***REMOVED*** ***REMOVED***;

			// Convert html into DOM nodes
			***REMOVED*** else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ***REMOVED*** ***REMOVED***;

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ***REMOVED*** || [ "", "" ***REMOVED*** ***REMOVED***[ 1 ***REMOVED***.toLowerCase(***REMOVED***;
				wrap = wrapMap[ tag ***REMOVED*** || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ***REMOVED*** + jQuery.htmlPrefilter( elem ***REMOVED*** + wrap[ 2 ***REMOVED***;

				// Descend through wrappers to the right content
				j = wrap[ 0 ***REMOVED***;
				while ( j-- ***REMOVED*** {
					tmp = tmp.lastChild;
				***REMOVED***

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes ***REMOVED***;

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392***REMOVED***
				tmp.textContent = "";
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {

		// Skip elements already in the context collection (trac-4087***REMOVED***
		if ( selection && jQuery.inArray( elem, selection ***REMOVED*** > -1 ***REMOVED*** {
			if ( ignored ***REMOVED*** {
				ignored.push( elem ***REMOVED***;
			***REMOVED***
			continue;
		***REMOVED***

		contains = jQuery.contains( elem.ownerDocument, elem ***REMOVED***;

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ***REMOVED***, "script" ***REMOVED***;

		// Preserve script evaluation history
		if ( contains ***REMOVED*** {
			setGlobalEval( tmp ***REMOVED***;
		***REMOVED***

		// Capture executables
		if ( scripts ***REMOVED*** {
			j = 0;
			while ( ( elem = tmp[ j++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				if ( rscriptType.test( elem.type || "" ***REMOVED*** ***REMOVED*** {
					scripts.push( elem ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return fragment;
***REMOVED***


( function(***REMOVED*** {
	var fragment = document.createDocumentFragment(***REMOVED***,
		div = fragment.appendChild( document.createElement( "div" ***REMOVED*** ***REMOVED***,
		input = document.createElement( "input" ***REMOVED***;

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217***REMOVED***
	// Support: Windows Web Apps (WWA***REMOVED***
	// `name` and `type` must use .setAttribute for WWA (#14901***REMOVED***
	input.setAttribute( "type", "radio" ***REMOVED***;
	input.setAttribute( "checked", "checked" ***REMOVED***;
	input.setAttribute( "name", "t" ***REMOVED***;

	div.appendChild( input ***REMOVED***;

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ***REMOVED***.cloneNode( true ***REMOVED***.lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox***REMOVED*** defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ***REMOVED***.lastChild.defaultValue;
***REMOVED*** ***REMOVED***(***REMOVED***;
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop***REMOVED***|click/,
	rtypenamespace = /^([^.***REMOVED*******REMOVED***(?:\.(.+***REMOVED***|***REMOVED***/;

function returnTrue(***REMOVED*** {
	return true;
***REMOVED***

function returnFalse(***REMOVED*** {
	return false;
***REMOVED***

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(***REMOVED*** {
	try {
		return document.activeElement;
	***REMOVED*** catch ( err ***REMOVED*** { ***REMOVED***
***REMOVED***

function on( elem, types, selector, data, fn, one ***REMOVED*** {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ***REMOVED*** {

		// ( types-Object, selector, data ***REMOVED***
		if ( typeof selector !== "string" ***REMOVED*** {

			// ( types-Object, data ***REMOVED***
			data = data || selector;
			selector = undefined;
		***REMOVED***
		for ( type in types ***REMOVED*** {
			on( elem, type, selector, data, types[ type ***REMOVED***, one ***REMOVED***;
		***REMOVED***
		return elem;
	***REMOVED***

	if ( data == null && fn == null ***REMOVED*** {

		// ( types, fn ***REMOVED***
		fn = selector;
		data = selector = undefined;
	***REMOVED*** else if ( fn == null ***REMOVED*** {
		if ( typeof selector === "string" ***REMOVED*** {

			// ( types, selector, fn ***REMOVED***
			fn = data;
			data = undefined;
		***REMOVED*** else {

			// ( types, data, fn ***REMOVED***
			fn = data;
			data = selector;
			selector = undefined;
		***REMOVED***
	***REMOVED***
	if ( fn === false ***REMOVED*** {
		fn = returnFalse;
	***REMOVED*** else if ( !fn ***REMOVED*** {
		return elem;
	***REMOVED***

	if ( one === 1 ***REMOVED*** {
		origFn = fn;
		fn = function( event ***REMOVED*** {

			// Can use an empty set, since event contains the info
			jQuery(***REMOVED***.off( event ***REMOVED***;
			return origFn.apply( this, arguments ***REMOVED***;
		***REMOVED***;

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ ***REMOVED***;
	***REMOVED***
	return elem.each( function(***REMOVED*** {
		jQuery.event.add( this, types, fn, data, selector ***REMOVED***;
	***REMOVED*** ***REMOVED***;
***REMOVED***

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {***REMOVED***,

	add: function( elem, types, handler, data, selector ***REMOVED*** {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem ***REMOVED***;

		// Don't attach events to noData or text/comment nodes (but allow plain objects***REMOVED***
		if ( !elemData ***REMOVED*** {
			return;
		***REMOVED***

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ***REMOVED*** {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		***REMOVED***

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document***REMOVED***
		if ( selector ***REMOVED*** {
			jQuery.find.matchesSelector( documentElement, selector ***REMOVED***;
		***REMOVED***

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ***REMOVED*** {
			handler.guid = jQuery.guid++;
		***REMOVED***

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ***REMOVED*** ***REMOVED*** {
			events = elemData.events = {***REMOVED***;
		***REMOVED***
		if ( !( eventHandle = elemData.handle ***REMOVED*** ***REMOVED*** {
			eventHandle = elemData.handle = function( e ***REMOVED*** {

				// Discard the second event of a jQuery.event.trigger(***REMOVED*** and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ***REMOVED*** : undefined;
			***REMOVED***;
		***REMOVED***

		// Handle multiple events separated by a space
		types = ( types || "" ***REMOVED***.match( rnothtmlwhite ***REMOVED*** || [ "" ***REMOVED***;
		t = types.length;
		while ( t-- ***REMOVED*** {
			tmp = rtypenamespace.exec( types[ t ***REMOVED*** ***REMOVED*** || [***REMOVED***;
			type = origType = tmp[ 1 ***REMOVED***;
			namespaces = ( tmp[ 2 ***REMOVED*** || "" ***REMOVED***.split( "." ***REMOVED***.sort(***REMOVED***;

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ***REMOVED*** {
				continue;
			***REMOVED***

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ***REMOVED*** || {***REMOVED***;

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ***REMOVED*** || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ***REMOVED*** || {***REMOVED***;

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ***REMOVED***,
				namespace: namespaces.join( "." ***REMOVED***
			***REMOVED***, handleObjIn ***REMOVED***;

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				handlers = events[ type ***REMOVED*** = [***REMOVED***;
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ***REMOVED*** === false ***REMOVED*** {

					if ( elem.addEventListener ***REMOVED*** {
						elem.addEventListener( type, eventHandle ***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			if ( special.add ***REMOVED*** {
				special.add.call( elem, handleObj ***REMOVED***;

				if ( !handleObj.handler.guid ***REMOVED*** {
					handleObj.handler.guid = handler.guid;
				***REMOVED***
			***REMOVED***

			// Add to the element's handler list, delegates in front
			if ( selector ***REMOVED*** {
				handlers.splice( handlers.delegateCount++, 0, handleObj ***REMOVED***;
			***REMOVED*** else {
				handlers.push( handleObj ***REMOVED***;
			***REMOVED***

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ***REMOVED*** = true;
		***REMOVED***

	***REMOVED***,

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ***REMOVED*** {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ***REMOVED*** && dataPriv.get( elem ***REMOVED***;

		if ( !elemData || !( events = elemData.events ***REMOVED*** ***REMOVED*** {
			return;
		***REMOVED***

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ***REMOVED***.match( rnothtmlwhite ***REMOVED*** || [ "" ***REMOVED***;
		t = types.length;
		while ( t-- ***REMOVED*** {
			tmp = rtypenamespace.exec( types[ t ***REMOVED*** ***REMOVED*** || [***REMOVED***;
			type = origType = tmp[ 1 ***REMOVED***;
			namespaces = ( tmp[ 2 ***REMOVED*** || "" ***REMOVED***.split( "." ***REMOVED***.sort(***REMOVED***;

			// Unbind all events (on this namespace, if provided***REMOVED*** for the element
			if ( !type ***REMOVED*** {
				for ( type in events ***REMOVED*** {
					jQuery.event.remove( elem, type + types[ t ***REMOVED***, handler, selector, true ***REMOVED***;
				***REMOVED***
				continue;
			***REMOVED***

			special = jQuery.event.special[ type ***REMOVED*** || {***REMOVED***;
			type = ( selector ? special.delegateType : special.bindType ***REMOVED*** || type;
			handlers = events[ type ***REMOVED*** || [***REMOVED***;
			tmp = tmp[ 2 ***REMOVED*** &&
				new RegExp( "(^|\\.***REMOVED***" + namespaces.join( "\\.(?:.*\\.|***REMOVED***" ***REMOVED*** + "(\\.|$***REMOVED***" ***REMOVED***;

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ***REMOVED*** {
				handleObj = handlers[ j ***REMOVED***;

				if ( ( mappedTypes || origType === handleObj.origType ***REMOVED*** &&
					( !handler || handler.guid === handleObj.guid ***REMOVED*** &&
					( !tmp || tmp.test( handleObj.namespace ***REMOVED*** ***REMOVED*** &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ***REMOVED*** ***REMOVED*** {
					handlers.splice( j, 1 ***REMOVED***;

					if ( handleObj.selector ***REMOVED*** {
						handlers.delegateCount--;
					***REMOVED***
					if ( special.remove ***REMOVED*** {
						special.remove.call( elem, handleObj ***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers***REMOVED***
			if ( origCount && !handlers.length ***REMOVED*** {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ***REMOVED*** === false ***REMOVED*** {

					jQuery.removeEvent( elem, type, elemData.handle ***REMOVED***;
				***REMOVED***

				delete events[ type ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ***REMOVED*** ***REMOVED*** {
			dataPriv.remove( elem, "handle events" ***REMOVED***;
		***REMOVED***
	***REMOVED***,

	dispatch: function( nativeEvent ***REMOVED*** {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent ***REMOVED***;

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ***REMOVED***,
			handlers = ( dataPriv.get( this, "events" ***REMOVED*** || {***REMOVED*** ***REMOVED***[ event.type ***REMOVED*** || [***REMOVED***,
			special = jQuery.event.special[ event.type ***REMOVED*** || {***REMOVED***;

		// Use the fix-ed jQuery.Event rather than the (read-only***REMOVED*** native event
		args[ 0 ***REMOVED*** = event;

		for ( i = 1; i < arguments.length; i++ ***REMOVED*** {
			args[ i ***REMOVED*** = arguments[ i ***REMOVED***;
		***REMOVED***

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ***REMOVED*** === false ***REMOVED*** {
			return;
		***REMOVED***

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers ***REMOVED***;

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ***REMOVED*** ***REMOVED*** && !event.isPropagationStopped(***REMOVED*** ***REMOVED*** {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ***REMOVED*** ***REMOVED*** &&
				!event.isImmediatePropagationStopped(***REMOVED*** ***REMOVED*** {

				// Triggered event must either 1***REMOVED*** have no namespace, or 2***REMOVED*** have namespace(s***REMOVED***
				// a subset or equal to those in the bound event (both can have no namespace***REMOVED***.
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ***REMOVED*** ***REMOVED*** {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ***REMOVED*** || {***REMOVED*** ***REMOVED***.handle ||
						handleObj.handler ***REMOVED***.apply( matched.elem, args ***REMOVED***;

					if ( ret !== undefined ***REMOVED*** {
						if ( ( event.result = ret ***REMOVED*** === false ***REMOVED*** {
							event.preventDefault(***REMOVED***;
							event.stopPropagation(***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ***REMOVED*** {
			special.postDispatch.call( this, event ***REMOVED***;
		***REMOVED***

		return event.result;
	***REMOVED***,

	handlers: function( event, handlers ***REMOVED*** {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [***REMOVED***,
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180***REMOVED***
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861***REMOVED***
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343***REMOVED***
			!( event.type === "click" && event.button >= 1 ***REMOVED*** ***REMOVED*** {

			for ( ; cur !== this; cur = cur.parentNode || this ***REMOVED*** {

				// Don't check non-elements (#13208***REMOVED***
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764***REMOVED***
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ***REMOVED*** ***REMOVED*** {
					matchedHandlers = [***REMOVED***;
					matchedSelectors = {***REMOVED***;
					for ( i = 0; i < delegateCount; i++ ***REMOVED*** {
						handleObj = handlers[ i ***REMOVED***;

						// Don't conflict with Object.prototype properties (#13203***REMOVED***
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ***REMOVED*** === undefined ***REMOVED*** {
							matchedSelectors[ sel ***REMOVED*** = handleObj.needsContext ?
								jQuery( sel, this ***REMOVED***.index( cur ***REMOVED*** > -1 :
								jQuery.find( sel, this, null, [ cur ***REMOVED*** ***REMOVED***.length;
						***REMOVED***
						if ( matchedSelectors[ sel ***REMOVED*** ***REMOVED*** {
							matchedHandlers.push( handleObj ***REMOVED***;
						***REMOVED***
					***REMOVED***
					if ( matchedHandlers.length ***REMOVED*** {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers ***REMOVED*** ***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Add the remaining (directly-bound***REMOVED*** handlers
		cur = this;
		if ( delegateCount < handlers.length ***REMOVED*** {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ***REMOVED*** ***REMOVED*** ***REMOVED***;
		***REMOVED***

		return handlerQueue;
	***REMOVED***,

	addProp: function( name, hook ***REMOVED*** {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ***REMOVED*** ?
				function(***REMOVED*** {
					if ( this.originalEvent ***REMOVED*** {
							return hook( this.originalEvent ***REMOVED***;
					***REMOVED***
				***REMOVED*** :
				function(***REMOVED*** {
					if ( this.originalEvent ***REMOVED*** {
							return this.originalEvent[ name ***REMOVED***;
					***REMOVED***
				***REMOVED***,

			set: function( value ***REMOVED*** {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				***REMOVED*** ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	fix: function( originalEvent ***REMOVED*** {
		return originalEvent[ jQuery.expando ***REMOVED*** ?
			originalEvent :
			new jQuery.Event( originalEvent ***REMOVED***;
	***REMOVED***,

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		***REMOVED***,
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function(***REMOVED*** {
				if ( this !== safeActiveElement(***REMOVED*** && this.focus ***REMOVED*** {
					this.focus(***REMOVED***;
					return false;
				***REMOVED***
			***REMOVED***,
			delegateType: "focusin"
		***REMOVED***,
		blur: {
			trigger: function(***REMOVED*** {
				if ( this === safeActiveElement(***REMOVED*** && this.blur ***REMOVED*** {
					this.blur(***REMOVED***;
					return false;
				***REMOVED***
			***REMOVED***,
			delegateType: "focusout"
		***REMOVED***,
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function(***REMOVED*** {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ***REMOVED*** ***REMOVED*** {
					this.click(***REMOVED***;
					return false;
				***REMOVED***
			***REMOVED***,

			// For cross-browser consistency, don't fire native .click(***REMOVED*** on links
			_default: function( event ***REMOVED*** {
				return nodeName( event.target, "a" ***REMOVED***;
			***REMOVED***
		***REMOVED***,

		beforeunload: {
			postDispatch: function( event ***REMOVED*** {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ***REMOVED*** {
					event.originalEvent.returnValue = event.result;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***;

jQuery.removeEvent = function( elem, type, handle ***REMOVED*** {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ***REMOVED*** {
		elem.removeEventListener( type, handle ***REMOVED***;
	***REMOVED***
***REMOVED***;

jQuery.Event = function( src, props ***REMOVED*** {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ***REMOVED*** ***REMOVED*** {
		return new jQuery.Event( src, props ***REMOVED***;
	***REMOVED***

	// Event object
	if ( src && src.type ***REMOVED*** {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143***REMOVED***
		this.target = ( src.target && src.target.nodeType === 3 ***REMOVED*** ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	***REMOVED*** else {
		this.type = src;
	***REMOVED***

	// Put explicitly provided properties onto the event object
	if ( props ***REMOVED*** {
		jQuery.extend( this, props ***REMOVED***;
	***REMOVED***

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now(***REMOVED***;

	// Mark it as fixed
	this[ jQuery.expando ***REMOVED*** = true;
***REMOVED***;

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function(***REMOVED*** {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ***REMOVED*** {
			e.preventDefault(***REMOVED***;
		***REMOVED***
	***REMOVED***,
	stopPropagation: function(***REMOVED*** {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ***REMOVED*** {
			e.stopPropagation(***REMOVED***;
		***REMOVED***
	***REMOVED***,
	stopImmediatePropagation: function(***REMOVED*** {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ***REMOVED*** {
			e.stopImmediatePropagation(***REMOVED***;
		***REMOVED***

		this.stopPropagation(***REMOVED***;
	***REMOVED***
***REMOVED***;

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ***REMOVED*** {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ***REMOVED*** ***REMOVED*** {
			return event.charCode != null ? event.charCode : event.keyCode;
		***REMOVED***

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ***REMOVED*** ***REMOVED*** {
			if ( button & 1 ***REMOVED*** {
				return 1;
			***REMOVED***

			if ( button & 2 ***REMOVED*** {
				return 3;
			***REMOVED***

			if ( button & 4 ***REMOVED*** {
				return 2;
			***REMOVED***

			return 0;
		***REMOVED***

		return event.which;
	***REMOVED***
***REMOVED***, jQuery.event.addProp ***REMOVED***;

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well***REMOVED***.
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
***REMOVED***, function( orig, fix ***REMOVED*** {
	jQuery.event.special[ orig ***REMOVED*** = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ***REMOVED*** {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments ***REMOVED***;
				event.type = fix;
			***REMOVED***
			return ret;
		***REMOVED***
	***REMOVED***;
***REMOVED*** ***REMOVED***;

jQuery.fn.extend( {

	on: function( types, selector, data, fn ***REMOVED*** {
		return on( this, types, selector, data, fn ***REMOVED***;
	***REMOVED***,
	one: function( types, selector, data, fn ***REMOVED*** {
		return on( this, types, selector, data, fn, 1 ***REMOVED***;
	***REMOVED***,
	off: function( types, selector, fn ***REMOVED*** {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ***REMOVED*** {

			// ( event ***REMOVED***  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ***REMOVED***.off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			***REMOVED***;
			return this;
		***REMOVED***
		if ( typeof types === "object" ***REMOVED*** {

			// ( types-object [, selector***REMOVED*** ***REMOVED***
			for ( type in types ***REMOVED*** {
				this.off( type, selector, types[ type ***REMOVED*** ***REMOVED***;
			***REMOVED***
			return this;
		***REMOVED***
		if ( selector === false || typeof selector === "function" ***REMOVED*** {

			// ( types [, fn***REMOVED*** ***REMOVED***
			fn = selector;
			selector = undefined;
		***REMOVED***
		if ( fn === false ***REMOVED*** {
			fn = returnFalse;
		***REMOVED***
		return this.each( function(***REMOVED*** {
			jQuery.event.remove( this, types, fn, selector ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param***REMOVED***(([a-z***REMOVED***[^\/\0>\x20\t\r\n\f***REMOVED*******REMOVED***[^>***REMOVED*******REMOVED***\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=***REMOVED***|=\s*.checked.***REMOVED***/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--***REMOVED***|(?:\***REMOVED***\***REMOVED***|--***REMOVED***>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ***REMOVED*** {
	if ( nodeName( elem, "table" ***REMOVED*** &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ***REMOVED*** ***REMOVED*** {

		return jQuery( elem ***REMOVED***.children( "tbody" ***REMOVED***[ 0 ***REMOVED*** || elem;
	***REMOVED***

	return elem;
***REMOVED***

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ***REMOVED*** {
	elem.type = ( elem.getAttribute( "type" ***REMOVED*** !== null ***REMOVED*** + "/" + elem.type;
	return elem;
***REMOVED***
function restoreScript( elem ***REMOVED*** {
	if ( ( elem.type || "" ***REMOVED***.slice( 0, 5 ***REMOVED*** === "true/" ***REMOVED*** {
		elem.type = elem.type.slice( 5 ***REMOVED***;
	***REMOVED*** else {
		elem.removeAttribute( "type" ***REMOVED***;
	***REMOVED***

	return elem;
***REMOVED***

function cloneCopyEvent( src, dest ***REMOVED*** {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ***REMOVED*** {
		return;
	***REMOVED***

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ***REMOVED*** ***REMOVED*** {
		pdataOld = dataPriv.access( src ***REMOVED***;
		pdataCur = dataPriv.set( dest, pdataOld ***REMOVED***;
		events = pdataOld.events;

		if ( events ***REMOVED*** {
			delete pdataCur.handle;
			pdataCur.events = {***REMOVED***;

			for ( type in events ***REMOVED*** {
				for ( i = 0, l = events[ type ***REMOVED***.length; i < l; i++ ***REMOVED*** {
					jQuery.event.add( dest, type, events[ type ***REMOVED***[ i ***REMOVED*** ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// 2. Copy user data
	if ( dataUser.hasData( src ***REMOVED*** ***REMOVED*** {
		udataOld = dataUser.access( src ***REMOVED***;
		udataCur = jQuery.extend( {***REMOVED***, udataOld ***REMOVED***;

		dataUser.set( dest, udataCur ***REMOVED***;
	***REMOVED***
***REMOVED***

// Fix IE bugs, see support tests
function fixInput( src, dest ***REMOVED*** {
	var nodeName = dest.nodeName.toLowerCase(***REMOVED***;

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ***REMOVED*** ***REMOVED*** {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	***REMOVED*** else if ( nodeName === "input" || nodeName === "textarea" ***REMOVED*** {
		dest.defaultValue = src.defaultValue;
	***REMOVED***
***REMOVED***

function domManip( collection, args, callback, ignored ***REMOVED*** {

	// Flatten any nested arrays
	args = concat.apply( [***REMOVED***, args ***REMOVED***;

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ***REMOVED***,
		valueIsFunction = isFunction( value ***REMOVED***;

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ***REMOVED*** ***REMOVED*** ***REMOVED*** {
		return collection.each( function( index ***REMOVED*** {
			var self = collection.eq( index ***REMOVED***;
			if ( valueIsFunction ***REMOVED*** {
				args[ 0 ***REMOVED*** = value.call( this, index, self.html(***REMOVED*** ***REMOVED***;
			***REMOVED***
			domManip( self, args, callback, ignored ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	if ( l ***REMOVED*** {
		fragment = buildFragment( args, collection[ 0 ***REMOVED***.ownerDocument, false, collection, ignored ***REMOVED***;
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ***REMOVED*** {
			fragment = first;
		***REMOVED***

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ***REMOVED*** {
			scripts = jQuery.map( getAll( fragment, "script" ***REMOVED***, disableScript ***REMOVED***;
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070***REMOVED***.
			for ( ; i < l; i++ ***REMOVED*** {
				node = fragment;

				if ( i !== iNoClone ***REMOVED*** {
					node = jQuery.clone( node, true, true ***REMOVED***;

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ***REMOVED*** {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ***REMOVED*** ***REMOVED***;
					***REMOVED***
				***REMOVED***

				callback.call( collection[ i ***REMOVED***, node, i ***REMOVED***;
			***REMOVED***

			if ( hasScripts ***REMOVED*** {
				doc = scripts[ scripts.length - 1 ***REMOVED***.ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript ***REMOVED***;

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ***REMOVED*** {
					node = scripts[ i ***REMOVED***;
					if ( rscriptType.test( node.type || "" ***REMOVED*** &&
						!dataPriv.access( node, "globalEval" ***REMOVED*** &&
						jQuery.contains( doc, node ***REMOVED*** ***REMOVED*** {

						if ( node.src && ( node.type || "" ***REMOVED***.toLowerCase(***REMOVED***  !== "module" ***REMOVED*** {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ***REMOVED*** {
								jQuery._evalUrl( node.src ***REMOVED***;
							***REMOVED***
						***REMOVED*** else {
							DOMEval( node.textContent.replace( rcleanScript, "" ***REMOVED***, doc, node ***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return collection;
***REMOVED***

function remove( elem, selector, keepData ***REMOVED*** {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ***REMOVED*** : elem,
		i = 0;

	for ( ; ( node = nodes[ i ***REMOVED*** ***REMOVED*** != null; i++ ***REMOVED*** {
		if ( !keepData && node.nodeType === 1 ***REMOVED*** {
			jQuery.cleanData( getAll( node ***REMOVED*** ***REMOVED***;
		***REMOVED***

		if ( node.parentNode ***REMOVED*** {
			if ( keepData && jQuery.contains( node.ownerDocument, node ***REMOVED*** ***REMOVED*** {
				setGlobalEval( getAll( node, "script" ***REMOVED*** ***REMOVED***;
			***REMOVED***
			node.parentNode.removeChild( node ***REMOVED***;
		***REMOVED***
	***REMOVED***

	return elem;
***REMOVED***

jQuery.extend( {
	htmlPrefilter: function( html ***REMOVED*** {
		return html.replace( rxhtmlTag, "<$1></$2>" ***REMOVED***;
	***REMOVED***,

	clone: function( elem, dataAndEvents, deepDataAndEvents ***REMOVED*** {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ***REMOVED***,
			inPage = jQuery.contains( elem.ownerDocument, elem ***REMOVED***;

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ***REMOVED*** &&
				!jQuery.isXMLDoc( elem ***REMOVED*** ***REMOVED*** {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone ***REMOVED***;
			srcElements = getAll( elem ***REMOVED***;

			for ( i = 0, l = srcElements.length; i < l; i++ ***REMOVED*** {
				fixInput( srcElements[ i ***REMOVED***, destElements[ i ***REMOVED*** ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Copy the events from the original to the clone
		if ( dataAndEvents ***REMOVED*** {
			if ( deepDataAndEvents ***REMOVED*** {
				srcElements = srcElements || getAll( elem ***REMOVED***;
				destElements = destElements || getAll( clone ***REMOVED***;

				for ( i = 0, l = srcElements.length; i < l; i++ ***REMOVED*** {
					cloneCopyEvent( srcElements[ i ***REMOVED***, destElements[ i ***REMOVED*** ***REMOVED***;
				***REMOVED***
			***REMOVED*** else {
				cloneCopyEvent( elem, clone ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Preserve script evaluation history
		destElements = getAll( clone, "script" ***REMOVED***;
		if ( destElements.length > 0 ***REMOVED*** {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ***REMOVED*** ***REMOVED***;
		***REMOVED***

		// Return the cloned set
		return clone;
	***REMOVED***,

	cleanData: function( elems ***REMOVED*** {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ***REMOVED*** ***REMOVED*** !== undefined; i++ ***REMOVED*** {
			if ( acceptData( elem ***REMOVED*** ***REMOVED*** {
				if ( ( data = elem[ dataPriv.expando ***REMOVED*** ***REMOVED*** ***REMOVED*** {
					if ( data.events ***REMOVED*** {
						for ( type in data.events ***REMOVED*** {
							if ( special[ type ***REMOVED*** ***REMOVED*** {
								jQuery.event.remove( elem, type ***REMOVED***;

							// This is a shortcut to avoid jQuery.event.remove's overhead
							***REMOVED*** else {
								jQuery.removeEvent( elem, type, data.handle ***REMOVED***;
							***REMOVED***
						***REMOVED***
					***REMOVED***

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ***REMOVED*** = undefined;
				***REMOVED***
				if ( elem[ dataUser.expando ***REMOVED*** ***REMOVED*** {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ***REMOVED*** = undefined;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.fn.extend( {
	detach: function( selector ***REMOVED*** {
		return remove( this, selector, true ***REMOVED***;
	***REMOVED***,

	remove: function( selector ***REMOVED*** {
		return remove( this, selector ***REMOVED***;
	***REMOVED***,

	text: function( value ***REMOVED*** {
		return access( this, function( value ***REMOVED*** {
			return value === undefined ?
				jQuery.text( this ***REMOVED*** :
				this.empty(***REMOVED***.each( function(***REMOVED*** {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ***REMOVED*** {
						this.textContent = value;
					***REMOVED***
				***REMOVED*** ***REMOVED***;
		***REMOVED***, null, value, arguments.length ***REMOVED***;
	***REMOVED***,

	append: function(***REMOVED*** {
		return domManip( this, arguments, function( elem ***REMOVED*** {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ***REMOVED*** {
				var target = manipulationTarget( this, elem ***REMOVED***;
				target.appendChild( elem ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	prepend: function(***REMOVED*** {
		return domManip( this, arguments, function( elem ***REMOVED*** {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ***REMOVED*** {
				var target = manipulationTarget( this, elem ***REMOVED***;
				target.insertBefore( elem, target.firstChild ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	before: function(***REMOVED*** {
		return domManip( this, arguments, function( elem ***REMOVED*** {
			if ( this.parentNode ***REMOVED*** {
				this.parentNode.insertBefore( elem, this ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	after: function(***REMOVED*** {
		return domManip( this, arguments, function( elem ***REMOVED*** {
			if ( this.parentNode ***REMOVED*** {
				this.parentNode.insertBefore( elem, this.nextSibling ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	empty: function(***REMOVED*** {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ***REMOVED*** ***REMOVED*** != null; i++ ***REMOVED*** {
			if ( elem.nodeType === 1 ***REMOVED*** {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ***REMOVED*** ***REMOVED***;

				// Remove any remaining nodes
				elem.textContent = "";
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***,

	clone: function( dataAndEvents, deepDataAndEvents ***REMOVED*** {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function(***REMOVED*** {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	html: function( value ***REMOVED*** {
		return access( this, function( value ***REMOVED*** {
			var elem = this[ 0 ***REMOVED*** || {***REMOVED***,
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ***REMOVED*** {
				return elem.innerHTML;
			***REMOVED***

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ***REMOVED*** &&
				!wrapMap[ ( rtagName.exec( value ***REMOVED*** || [ "", "" ***REMOVED*** ***REMOVED***[ 1 ***REMOVED***.toLowerCase(***REMOVED*** ***REMOVED*** ***REMOVED*** {

				value = jQuery.htmlPrefilter( value ***REMOVED***;

				try {
					for ( ; i < l; i++ ***REMOVED*** {
						elem = this[ i ***REMOVED*** || {***REMOVED***;

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ***REMOVED*** {
							jQuery.cleanData( getAll( elem, false ***REMOVED*** ***REMOVED***;
							elem.innerHTML = value;
						***REMOVED***
					***REMOVED***

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				***REMOVED*** catch ( e ***REMOVED*** {***REMOVED***
			***REMOVED***

			if ( elem ***REMOVED*** {
				this.empty(***REMOVED***.append( value ***REMOVED***;
			***REMOVED***
		***REMOVED***, null, value, arguments.length ***REMOVED***;
	***REMOVED***,

	replaceWith: function(***REMOVED*** {
		var ignored = [***REMOVED***;

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ***REMOVED*** {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ***REMOVED*** < 0 ***REMOVED*** {
				jQuery.cleanData( getAll( this ***REMOVED*** ***REMOVED***;
				if ( parent ***REMOVED*** {
					parent.replaceChild( elem, this ***REMOVED***;
				***REMOVED***
			***REMOVED***

		// Force callback invocation
		***REMOVED***, ignored ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
***REMOVED***, function( name, original ***REMOVED*** {
	jQuery.fn[ name ***REMOVED*** = function( selector ***REMOVED*** {
		var elems,
			ret = [***REMOVED***,
			insert = jQuery( selector ***REMOVED***,
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ***REMOVED*** {
			elems = i === last ? this : this.clone( true ***REMOVED***;
			jQuery( insert[ i ***REMOVED*** ***REMOVED***[ original ***REMOVED***( elems ***REMOVED***;

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get(***REMOVED*** because push.apply(_, arraylike***REMOVED*** throws on ancient WebKit
			push.apply( ret, elems.get(***REMOVED*** ***REMOVED***;
		***REMOVED***

		return this.pushStack( ret ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;
var rnumnonpx = new RegExp( "^(" + pnum + "***REMOVED***(?!px***REMOVED***[a-z%***REMOVED***+$", "i" ***REMOVED***;

var getStyles = function( elem ***REMOVED*** {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150***REMOVED***
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ***REMOVED*** {
			view = window;
		***REMOVED***

		return view.getComputedStyle( elem ***REMOVED***;
	***REMOVED***;

var rboxStyle = new RegExp( cssExpand.join( "|" ***REMOVED***, "i" ***REMOVED***;



( function(***REMOVED*** {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(***REMOVED*** {

		// This is a singleton, we need to execute it only once
		if ( !div ***REMOVED*** {
			return;
		***REMOVED***

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ***REMOVED***.appendChild( div ***REMOVED***;

		var divStyle = window.getComputedStyle( div ***REMOVED***;
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ***REMOVED*** === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ***REMOVED*** === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ***REMOVED*** === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699***REMOVED***
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container ***REMOVED***;

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	***REMOVED***

	function roundPixelMeasures( measure ***REMOVED*** {
		return Math.round( parseFloat( measure ***REMOVED*** ***REMOVED***;
	***REMOVED***

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ***REMOVED***,
		div = document.createElement( "div" ***REMOVED***;

	// Finish early in limited (non-browser***REMOVED*** environments
	if ( !div.style ***REMOVED*** {
		return;
	***REMOVED***

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908***REMOVED***
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ***REMOVED***.style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function(***REMOVED*** {
			computeStyleTests(***REMOVED***;
			return boxSizingReliableVal;
		***REMOVED***,
		pixelBoxStyles: function(***REMOVED*** {
			computeStyleTests(***REMOVED***;
			return pixelBoxStylesVal;
		***REMOVED***,
		pixelPosition: function(***REMOVED*** {
			computeStyleTests(***REMOVED***;
			return pixelPositionVal;
		***REMOVED***,
		reliableMarginLeft: function(***REMOVED*** {
			computeStyleTests(***REMOVED***;
			return reliableMarginLeftVal;
		***REMOVED***,
		scrollboxSize: function(***REMOVED*** {
			computeStyleTests(***REMOVED***;
			return scrollboxSizeVal;
		***REMOVED***
	***REMOVED*** ***REMOVED***;
***REMOVED*** ***REMOVED***(***REMOVED***;


function curCSS( elem, name, computed ***REMOVED*** {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem ***REMOVED***;

	// getPropertyValue is needed for:
	//   .css('filter'***REMOVED*** (IE 9 only, #12537***REMOVED***
	//   .css('--customProperty***REMOVED*** (#3144***REMOVED***
	if ( computed ***REMOVED*** {
		ret = computed.getPropertyValue( name ***REMOVED*** || computed[ name ***REMOVED***;

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ***REMOVED*** ***REMOVED*** {
			ret = jQuery.style( elem, name ***REMOVED***;
		***REMOVED***

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles(***REMOVED*** && rnumnonpx.test( ret ***REMOVED*** && rboxStyle.test( name ***REMOVED*** ***REMOVED*** {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		***REMOVED***
	***REMOVED***

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
***REMOVED***


function addGetHookIf( conditionFn, hookFn ***REMOVED*** {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function(***REMOVED*** {
			if ( conditionFn(***REMOVED*** ***REMOVED*** {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency***REMOVED***, remove it.
				delete this.get;
				return;
			***REMOVED***

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ***REMOVED***.apply( this, arguments ***REMOVED***;
		***REMOVED***
	***REMOVED***;
***REMOVED***


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea***REMOVED******REMOVED***.+***REMOVED***/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" ***REMOVED***,
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	***REMOVED***,

	cssPrefixes = [ "Webkit", "Moz", "ms" ***REMOVED***,
	emptyStyle = document.createElement( "div" ***REMOVED***.style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ***REMOVED*** {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ***REMOVED*** {
		return name;
	***REMOVED***

	// Check for vendor prefixed names
	var capName = name[ 0 ***REMOVED***.toUpperCase(***REMOVED*** + name.slice( 1 ***REMOVED***,
		i = cssPrefixes.length;

	while ( i-- ***REMOVED*** {
		name = cssPrefixes[ i ***REMOVED*** + capName;
		if ( name in emptyStyle ***REMOVED*** {
			return name;
		***REMOVED***
	***REMOVED***
***REMOVED***

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ***REMOVED*** {
	var ret = jQuery.cssProps[ name ***REMOVED***;
	if ( !ret ***REMOVED*** {
		ret = jQuery.cssProps[ name ***REMOVED*** = vendorPropName( name ***REMOVED*** || name;
	***REMOVED***
	return ret;
***REMOVED***

function setPositiveNumber( elem, value, subtract ***REMOVED*** {

	// Any relative (+/-***REMOVED*** values have already been
	// normalized at this point
	var matches = rcssNum.exec( value ***REMOVED***;
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ***REMOVED*** - ( subtract || 0 ***REMOVED*** ***REMOVED*** + ( matches[ 3 ***REMOVED*** || "px" ***REMOVED*** :
		value;
***REMOVED***

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ***REMOVED*** {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ***REMOVED*** ***REMOVED*** {
		return 0;
	***REMOVED***

	for ( ; i < 4; i += 2 ***REMOVED*** {

		// Both box models exclude margin
		if ( box === "margin" ***REMOVED*** {
			delta += jQuery.css( elem, box + cssExpand[ i ***REMOVED***, true, styles ***REMOVED***;
		***REMOVED***

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ***REMOVED*** {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ***REMOVED***, true, styles ***REMOVED***;

			// For "border" or "margin", add border
			if ( box !== "padding" ***REMOVED*** {
				delta += jQuery.css( elem, "border" + cssExpand[ i ***REMOVED*** + "Width", true, styles ***REMOVED***;

			// But still keep track of it otherwise
			***REMOVED*** else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ***REMOVED*** + "Width", true, styles ***REMOVED***;
			***REMOVED***

		// If we get here with a border-box (content + padding + border***REMOVED***, we're seeking "content" or
		// "padding" or "margin"
		***REMOVED*** else {

			// For "content", subtract padding
			if ( box === "content" ***REMOVED*** {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ***REMOVED***, true, styles ***REMOVED***;
			***REMOVED***

			// For "content" or "padding", subtract border
			if ( box !== "margin" ***REMOVED*** {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ***REMOVED*** + "Width", true, styles ***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ***REMOVED*** {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ***REMOVED***.toUpperCase(***REMOVED*** + dimension.slice( 1 ***REMOVED*** ***REMOVED*** -
			computedVal -
			delta -
			extra -
			0.5
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	return delta;
***REMOVED***

function getWidthOrHeight( elem, dimension, extra ***REMOVED*** {

	// Start with computed style
	var styles = getStyles( elem ***REMOVED***,
		val = curCSS( elem, dimension, styles ***REMOVED***,
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ***REMOVED*** === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ***REMOVED*** ***REMOVED*** {
		if ( !extra ***REMOVED*** {
			return val;
		***REMOVED***
		val = "auto";
	***REMOVED***

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable(***REMOVED*** || val === elem.style[ dimension ***REMOVED*** ***REMOVED***;

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571***REMOVED***
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602***REMOVED***
	if ( val === "auto" ||
		!parseFloat( val ***REMOVED*** && jQuery.css( elem, "display", false, styles ***REMOVED*** === "inline" ***REMOVED*** {

		val = elem[ "offset" + dimension[ 0 ***REMOVED***.toUpperCase(***REMOVED*** + dimension.slice( 1 ***REMOVED*** ***REMOVED***;

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	***REMOVED***

	// Normalize "" and auto
	val = parseFloat( val ***REMOVED*** || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ***REMOVED***,
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589***REMOVED***
			val
		***REMOVED***
	***REMOVED*** + "px";
***REMOVED***

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ***REMOVED*** {
				if ( computed ***REMOVED*** {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" ***REMOVED***;
					return ret === "" ? "1" : ret;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	***REMOVED***,

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {***REMOVED***,

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ***REMOVED*** {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ***REMOVED*** {
			return;
		***REMOVED***

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ***REMOVED***,
			isCustomProp = rcustomProp.test( name ***REMOVED***,
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ***REMOVED*** {
			name = finalPropName( origName ***REMOVED***;
		***REMOVED***

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ***REMOVED*** || jQuery.cssHooks[ origName ***REMOVED***;

		// Check if we're setting a value
		if ( value !== undefined ***REMOVED*** {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345***REMOVED***
			if ( type === "string" && ( ret = rcssNum.exec( value ***REMOVED*** ***REMOVED*** && ret[ 1 ***REMOVED*** ***REMOVED*** {
				value = adjustCSS( elem, name, ret ***REMOVED***;

				// Fixes bug #9237
				type = "number";
			***REMOVED***

			// Make sure that null and NaN values aren't set (#7116***REMOVED***
			if ( value == null || value !== value ***REMOVED*** {
				return;
			***REMOVED***

			// If a number was passed in, add the unit (except for certain CSS properties***REMOVED***
			if ( type === "number" ***REMOVED*** {
				value += ret && ret[ 3 ***REMOVED*** || ( jQuery.cssNumber[ origName ***REMOVED*** ? "" : "px" ***REMOVED***;
			***REMOVED***

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ***REMOVED*** === 0 ***REMOVED*** {
				style[ name ***REMOVED*** = "inherit";
			***REMOVED***

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ***REMOVED*** ||
				( value = hooks.set( elem, value, extra ***REMOVED*** ***REMOVED*** !== undefined ***REMOVED*** {

				if ( isCustomProp ***REMOVED*** {
					style.setProperty( name, value ***REMOVED***;
				***REMOVED*** else {
					style[ name ***REMOVED*** = value;
				***REMOVED***
			***REMOVED***

		***REMOVED*** else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ***REMOVED*** ***REMOVED*** !== undefined ***REMOVED*** {

				return ret;
			***REMOVED***

			// Otherwise just get the value from the style object
			return style[ name ***REMOVED***;
		***REMOVED***
	***REMOVED***,

	css: function( elem, name, extra, styles ***REMOVED*** {
		var val, num, hooks,
			origName = camelCase( name ***REMOVED***,
			isCustomProp = rcustomProp.test( name ***REMOVED***;

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ***REMOVED*** {
			name = finalPropName( origName ***REMOVED***;
		***REMOVED***

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ***REMOVED*** || jQuery.cssHooks[ origName ***REMOVED***;

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ***REMOVED*** {
			val = hooks.get( elem, true, extra ***REMOVED***;
		***REMOVED***

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ***REMOVED*** {
			val = curCSS( elem, name, styles ***REMOVED***;
		***REMOVED***

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ***REMOVED*** {
			val = cssNormalTransform[ name ***REMOVED***;
		***REMOVED***

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ***REMOVED*** {
			num = parseFloat( val ***REMOVED***;
			return extra === true || isFinite( num ***REMOVED*** ? num || 0 : val;
		***REMOVED***

		return val;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.each( [ "height", "width" ***REMOVED***, function( i, dimension ***REMOVED*** {
	jQuery.cssHooks[ dimension ***REMOVED*** = {
		get: function( elem, computed, extra ***REMOVED*** {
			if ( computed ***REMOVED*** {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ***REMOVED*** ***REMOVED*** &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect(***REMOVED***.width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects(***REMOVED***.length || !elem.getBoundingClientRect(***REMOVED***.width ***REMOVED*** ?
						swap( elem, cssShow, function(***REMOVED*** {
							return getWidthOrHeight( elem, dimension, extra ***REMOVED***;
						***REMOVED*** ***REMOVED*** :
						getWidthOrHeight( elem, dimension, extra ***REMOVED***;
			***REMOVED***
		***REMOVED***,

		set: function( elem, value, extra ***REMOVED*** {
			var matches,
				styles = getStyles( elem ***REMOVED***,
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ***REMOVED*** === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				***REMOVED***;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699***REMOVED***
			if ( isBorderBox && support.scrollboxSize(***REMOVED*** === styles.position ***REMOVED*** {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ***REMOVED***.toUpperCase(***REMOVED*** + dimension.slice( 1 ***REMOVED*** ***REMOVED*** -
					parseFloat( styles[ dimension ***REMOVED*** ***REMOVED*** -
					boxModelAdjustment( elem, dimension, "border", false, styles ***REMOVED*** -
					0.5
				***REMOVED***;
			***REMOVED***

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ***REMOVED*** ***REMOVED*** &&
				( matches[ 3 ***REMOVED*** || "px" ***REMOVED*** !== "px" ***REMOVED*** {

				elem.style[ dimension ***REMOVED*** = value;
				value = jQuery.css( elem, dimension ***REMOVED***;
			***REMOVED***

			return setPositiveNumber( elem, value, subtract ***REMOVED***;
		***REMOVED***
	***REMOVED***;
***REMOVED*** ***REMOVED***;

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ***REMOVED*** {
		if ( computed ***REMOVED*** {
			return ( parseFloat( curCSS( elem, "marginLeft" ***REMOVED*** ***REMOVED*** ||
				elem.getBoundingClientRect(***REMOVED***.left -
					swap( elem, { marginLeft: 0 ***REMOVED***, function(***REMOVED*** {
						return elem.getBoundingClientRect(***REMOVED***.left;
					***REMOVED*** ***REMOVED***
				***REMOVED*** + "px";
		***REMOVED***
	***REMOVED***
***REMOVED***;

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
***REMOVED***, function( prefix, suffix ***REMOVED*** {
	jQuery.cssHooks[ prefix + suffix ***REMOVED*** = {
		expand: function( value ***REMOVED*** {
			var i = 0,
				expanded = {***REMOVED***,

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ***REMOVED*** : [ value ***REMOVED***;

			for ( ; i < 4; i++ ***REMOVED*** {
				expanded[ prefix + cssExpand[ i ***REMOVED*** + suffix ***REMOVED*** =
					parts[ i ***REMOVED*** || parts[ i - 2 ***REMOVED*** || parts[ 0 ***REMOVED***;
			***REMOVED***

			return expanded;
		***REMOVED***
	***REMOVED***;

	if ( prefix !== "margin" ***REMOVED*** {
		jQuery.cssHooks[ prefix + suffix ***REMOVED***.set = setPositiveNumber;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.fn.extend( {
	css: function( name, value ***REMOVED*** {
		return access( this, function( elem, name, value ***REMOVED*** {
			var styles, len,
				map = {***REMOVED***,
				i = 0;

			if ( Array.isArray( name ***REMOVED*** ***REMOVED*** {
				styles = getStyles( elem ***REMOVED***;
				len = name.length;

				for ( ; i < len; i++ ***REMOVED*** {
					map[ name[ i ***REMOVED*** ***REMOVED*** = jQuery.css( elem, name[ i ***REMOVED***, false, styles ***REMOVED***;
				***REMOVED***

				return map;
			***REMOVED***

			return value !== undefined ?
				jQuery.style( elem, name, value ***REMOVED*** :
				jQuery.css( elem, name ***REMOVED***;
		***REMOVED***, name, value, arguments.length > 1 ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;


function Tween( elem, options, prop, end, easing ***REMOVED*** {
	return new Tween.prototype.init( elem, options, prop, end, easing ***REMOVED***;
***REMOVED***
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ***REMOVED*** {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur(***REMOVED***;
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ***REMOVED*** ? "" : "px" ***REMOVED***;
	***REMOVED***,
	cur: function(***REMOVED*** {
		var hooks = Tween.propHooks[ this.prop ***REMOVED***;

		return hooks && hooks.get ?
			hooks.get( this ***REMOVED*** :
			Tween.propHooks._default.get( this ***REMOVED***;
	***REMOVED***,
	run: function( percent ***REMOVED*** {
		var eased,
			hooks = Tween.propHooks[ this.prop ***REMOVED***;

		if ( this.options.duration ***REMOVED*** {
			this.pos = eased = jQuery.easing[ this.easing ***REMOVED***(
				percent, this.options.duration * percent, 0, 1, this.options.duration
			***REMOVED***;
		***REMOVED*** else {
			this.pos = eased = percent;
		***REMOVED***
		this.now = ( this.end - this.start ***REMOVED*** * eased + this.start;

		if ( this.options.step ***REMOVED*** {
			this.options.step.call( this.elem, this.now, this ***REMOVED***;
		***REMOVED***

		if ( hooks && hooks.set ***REMOVED*** {
			hooks.set( this ***REMOVED***;
		***REMOVED*** else {
			Tween.propHooks._default.set( this ***REMOVED***;
		***REMOVED***
		return this;
	***REMOVED***
***REMOVED***;

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ***REMOVED*** {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ***REMOVED*** != null && tween.elem.style[ tween.prop ***REMOVED*** == null ***REMOVED*** {
				return tween.elem[ tween.prop ***REMOVED***;
			***REMOVED***

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad***REMOVED***" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" ***REMOVED***;

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		***REMOVED***,
		set: function( tween ***REMOVED*** {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ***REMOVED*** ***REMOVED*** {
				jQuery.fx.step[ tween.prop ***REMOVED***( tween ***REMOVED***;
			***REMOVED*** else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ***REMOVED*** ***REMOVED*** != null ||
					jQuery.cssHooks[ tween.prop ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit ***REMOVED***;
			***REMOVED*** else {
				tween.elem[ tween.prop ***REMOVED*** = tween.now;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***;

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ***REMOVED*** {
		if ( tween.elem.nodeType && tween.elem.parentNode ***REMOVED*** {
			tween.elem[ tween.prop ***REMOVED*** = tween.now;
		***REMOVED***
	***REMOVED***
***REMOVED***;

jQuery.easing = {
	linear: function( p ***REMOVED*** {
		return p;
	***REMOVED***,
	swing: function( p ***REMOVED*** {
		return 0.5 - Math.cos( p * Math.PI ***REMOVED*** / 2;
	***REMOVED***,
	_default: "swing"
***REMOVED***;

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {***REMOVED***;




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide***REMOVED***$/,
	rrun = /queueHooks$/;

function schedule(***REMOVED*** {
	if ( inProgress ***REMOVED*** {
		if ( document.hidden === false && window.requestAnimationFrame ***REMOVED*** {
			window.requestAnimationFrame( schedule ***REMOVED***;
		***REMOVED*** else {
			window.setTimeout( schedule, jQuery.fx.interval ***REMOVED***;
		***REMOVED***

		jQuery.fx.tick(***REMOVED***;
	***REMOVED***
***REMOVED***

// Animations created synchronously will run synchronously
function createFxNow(***REMOVED*** {
	window.setTimeout( function(***REMOVED*** {
		fxNow = undefined;
	***REMOVED*** ***REMOVED***;
	return ( fxNow = Date.now(***REMOVED*** ***REMOVED***;
***REMOVED***

// Generate parameters to create a standard animation
function genFx( type, includeWidth ***REMOVED*** {
	var which,
		i = 0,
		attrs = { height: type ***REMOVED***;

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ***REMOVED*** {
		which = cssExpand[ i ***REMOVED***;
		attrs[ "margin" + which ***REMOVED*** = attrs[ "padding" + which ***REMOVED*** = type;
	***REMOVED***

	if ( includeWidth ***REMOVED*** {
		attrs.opacity = attrs.width = type;
	***REMOVED***

	return attrs;
***REMOVED***

function createTween( value, prop, animation ***REMOVED*** {
	var tween,
		collection = ( Animation.tweeners[ prop ***REMOVED*** || [***REMOVED*** ***REMOVED***.concat( Animation.tweeners[ "*" ***REMOVED*** ***REMOVED***,
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ***REMOVED*** {
		if ( ( tween = collection[ index ***REMOVED***.call( animation, prop, value ***REMOVED*** ***REMOVED*** ***REMOVED*** {

			// We're done with this property
			return tween;
		***REMOVED***
	***REMOVED***
***REMOVED***

function defaultPrefilter( elem, props, opts ***REMOVED*** {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {***REMOVED***,
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ***REMOVED***,
		dataShow = dataPriv.get( elem, "fxshow" ***REMOVED***;

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ***REMOVED*** {
		hooks = jQuery._queueHooks( elem, "fx" ***REMOVED***;
		if ( hooks.unqueued == null ***REMOVED*** {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function(***REMOVED*** {
				if ( !hooks.unqueued ***REMOVED*** {
					oldfire(***REMOVED***;
				***REMOVED***
			***REMOVED***;
		***REMOVED***
		hooks.unqueued++;

		anim.always( function(***REMOVED*** {

			// Ensure the complete handler is called before this completes
			anim.always( function(***REMOVED*** {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ***REMOVED***.length ***REMOVED*** {
					hooks.empty.fire(***REMOVED***;
				***REMOVED***
			***REMOVED*** ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	// Detect show/hide animations
	for ( prop in props ***REMOVED*** {
		value = props[ prop ***REMOVED***;
		if ( rfxtypes.test( value ***REMOVED*** ***REMOVED*** {
			delete props[ prop ***REMOVED***;
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ***REMOVED*** ***REMOVED*** {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ***REMOVED*** !== undefined ***REMOVED*** {
					hidden = true;

				// Ignore all other no-op show/hide data
				***REMOVED*** else {
					continue;
				***REMOVED***
			***REMOVED***
			orig[ prop ***REMOVED*** = dataShow && dataShow[ prop ***REMOVED*** || jQuery.style( elem, prop ***REMOVED***;
		***REMOVED***
	***REMOVED***

	// Bail out if this is a no-op like .hide(***REMOVED***.hide(***REMOVED***
	propTween = !jQuery.isEmptyObject( props ***REMOVED***;
	if ( !propTween && jQuery.isEmptyObject( orig ***REMOVED*** ***REMOVED*** {
		return;
	***REMOVED***

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ***REMOVED*** {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ***REMOVED***;

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ***REMOVED*** {
			restoreDisplay = dataPriv.get( elem, "display" ***REMOVED***;
		***REMOVED***
		display = jQuery.css( elem, "display" ***REMOVED***;
		if ( display === "none" ***REMOVED*** {
			if ( restoreDisplay ***REMOVED*** {
				display = restoreDisplay;
			***REMOVED*** else {

				// Get nonempty value(s***REMOVED*** by temporarily forcing visibility
				showHide( [ elem ***REMOVED***, true ***REMOVED***;
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" ***REMOVED***;
				showHide( [ elem ***REMOVED*** ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ***REMOVED*** {
			if ( jQuery.css( elem, "float" ***REMOVED*** === "none" ***REMOVED*** {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ***REMOVED*** {
					anim.done( function(***REMOVED*** {
						style.display = restoreDisplay;
					***REMOVED*** ***REMOVED***;
					if ( restoreDisplay == null ***REMOVED*** {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					***REMOVED***
				***REMOVED***
				style.display = "inline-block";
			***REMOVED***
		***REMOVED***
	***REMOVED***

	if ( opts.overflow ***REMOVED*** {
		style.overflow = "hidden";
		anim.always( function(***REMOVED*** {
			style.overflow = opts.overflow[ 0 ***REMOVED***;
			style.overflowX = opts.overflow[ 1 ***REMOVED***;
			style.overflowY = opts.overflow[ 2 ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ***REMOVED*** {

		// General show/hide setup for this element animation
		if ( !propTween ***REMOVED*** {
			if ( dataShow ***REMOVED*** {
				if ( "hidden" in dataShow ***REMOVED*** {
					hidden = dataShow.hidden;
				***REMOVED***
			***REMOVED*** else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay ***REMOVED*** ***REMOVED***;
			***REMOVED***

			// Store hidden/visible for toggle so `.stop(***REMOVED***.toggle(***REMOVED***` "reverses"
			if ( toggle ***REMOVED*** {
				dataShow.hidden = !hidden;
			***REMOVED***

			// Show elements before animating them
			if ( hidden ***REMOVED*** {
				showHide( [ elem ***REMOVED***, true ***REMOVED***;
			***REMOVED***

			/* eslint-disable no-loop-func */

			anim.done( function(***REMOVED*** {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ***REMOVED*** {
					showHide( [ elem ***REMOVED*** ***REMOVED***;
				***REMOVED***
				dataPriv.remove( elem, "fxshow" ***REMOVED***;
				for ( prop in orig ***REMOVED*** {
					jQuery.style( elem, prop, orig[ prop ***REMOVED*** ***REMOVED***;
				***REMOVED***
			***REMOVED*** ***REMOVED***;
		***REMOVED***

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ***REMOVED*** : 0, prop, anim ***REMOVED***;
		if ( !( prop in dataShow ***REMOVED*** ***REMOVED*** {
			dataShow[ prop ***REMOVED*** = propTween.start;
			if ( hidden ***REMOVED*** {
				propTween.end = propTween.start;
				propTween.start = 0;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

function propFilter( props, specialEasing ***REMOVED*** {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ***REMOVED*** {
		name = camelCase( index ***REMOVED***;
		easing = specialEasing[ name ***REMOVED***;
		value = props[ index ***REMOVED***;
		if ( Array.isArray( value ***REMOVED*** ***REMOVED*** {
			easing = value[ 1 ***REMOVED***;
			value = props[ index ***REMOVED*** = value[ 0 ***REMOVED***;
		***REMOVED***

		if ( index !== name ***REMOVED*** {
			props[ name ***REMOVED*** = value;
			delete props[ index ***REMOVED***;
		***REMOVED***

		hooks = jQuery.cssHooks[ name ***REMOVED***;
		if ( hooks && "expand" in hooks ***REMOVED*** {
			value = hooks.expand( value ***REMOVED***;
			delete props[ name ***REMOVED***;

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ***REMOVED*** {
				if ( !( index in props ***REMOVED*** ***REMOVED*** {
					props[ index ***REMOVED*** = value[ index ***REMOVED***;
					specialEasing[ index ***REMOVED*** = easing;
				***REMOVED***
			***REMOVED***
		***REMOVED*** else {
			specialEasing[ name ***REMOVED*** = easing;
		***REMOVED***
	***REMOVED***
***REMOVED***

function Animation( elem, properties, options ***REMOVED*** {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred(***REMOVED***.always( function(***REMOVED*** {

			// Don't match elem in the :animated selector
			delete tick.elem;
		***REMOVED*** ***REMOVED***,
		tick = function(***REMOVED*** {
			if ( stopped ***REMOVED*** {
				return false;
			***REMOVED***
			var currentTime = fxNow || createFxNow(***REMOVED***,
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ***REMOVED***,

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 ***REMOVED***` (#12497***REMOVED***
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ***REMOVED*** {
				animation.tweens[ index ***REMOVED***.run( percent ***REMOVED***;
			***REMOVED***

			deferred.notifyWith( elem, [ animation, percent, remaining ***REMOVED*** ***REMOVED***;

			// If there's more to do, yield
			if ( percent < 1 && length ***REMOVED*** {
				return remaining;
			***REMOVED***

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ***REMOVED*** {
				deferred.notifyWith( elem, [ animation, 1, 0 ***REMOVED*** ***REMOVED***;
			***REMOVED***

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ***REMOVED*** ***REMOVED***;
			return false;
		***REMOVED***,
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {***REMOVED***, properties ***REMOVED***,
			opts: jQuery.extend( true, {
				specialEasing: {***REMOVED***,
				easing: jQuery.easing._default
			***REMOVED***, options ***REMOVED***,
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(***REMOVED***,
			duration: options.duration,
			tweens: [***REMOVED***,
			createTween: function( prop, end ***REMOVED*** {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ***REMOVED*** || animation.opts.easing ***REMOVED***;
				animation.tweens.push( tween ***REMOVED***;
				return tween;
			***REMOVED***,
			stop: function( gotoEnd ***REMOVED*** {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ***REMOVED*** {
					return this;
				***REMOVED***
				stopped = true;
				for ( ; index < length; index++ ***REMOVED*** {
					animation.tweens[ index ***REMOVED***.run( 1 ***REMOVED***;
				***REMOVED***

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ***REMOVED*** {
					deferred.notifyWith( elem, [ animation, 1, 0 ***REMOVED*** ***REMOVED***;
					deferred.resolveWith( elem, [ animation, gotoEnd ***REMOVED*** ***REMOVED***;
				***REMOVED*** else {
					deferred.rejectWith( elem, [ animation, gotoEnd ***REMOVED*** ***REMOVED***;
				***REMOVED***
				return this;
			***REMOVED***
		***REMOVED*** ***REMOVED***,
		props = animation.props;

	propFilter( props, animation.opts.specialEasing ***REMOVED***;

	for ( ; index < length; index++ ***REMOVED*** {
		result = Animation.prefilters[ index ***REMOVED***.call( animation, elem, props, animation.opts ***REMOVED***;
		if ( result ***REMOVED*** {
			if ( isFunction( result.stop ***REMOVED*** ***REMOVED*** {
				jQuery._queueHooks( animation.elem, animation.opts.queue ***REMOVED***.stop =
					result.stop.bind( result ***REMOVED***;
			***REMOVED***
			return result;
		***REMOVED***
	***REMOVED***

	jQuery.map( props, createTween, animation ***REMOVED***;

	if ( isFunction( animation.opts.start ***REMOVED*** ***REMOVED*** {
		animation.opts.start.call( elem, animation ***REMOVED***;
	***REMOVED***

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress ***REMOVED***
		.done( animation.opts.done, animation.opts.complete ***REMOVED***
		.fail( animation.opts.fail ***REMOVED***
		.always( animation.opts.always ***REMOVED***;

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		***REMOVED*** ***REMOVED***
	***REMOVED***;

	return animation;
***REMOVED***

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ***REMOVED*** {
			var tween = this.createTween( prop, value ***REMOVED***;
			adjustCSS( tween.elem, prop, rcssNum.exec( value ***REMOVED***, tween ***REMOVED***;
			return tween;
		***REMOVED*** ***REMOVED***
	***REMOVED***,

	tweener: function( props, callback ***REMOVED*** {
		if ( isFunction( props ***REMOVED*** ***REMOVED*** {
			callback = props;
			props = [ "*" ***REMOVED***;
		***REMOVED*** else {
			props = props.match( rnothtmlwhite ***REMOVED***;
		***REMOVED***

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ***REMOVED*** {
			prop = props[ index ***REMOVED***;
			Animation.tweeners[ prop ***REMOVED*** = Animation.tweeners[ prop ***REMOVED*** || [***REMOVED***;
			Animation.tweeners[ prop ***REMOVED***.unshift( callback ***REMOVED***;
		***REMOVED***
	***REMOVED***,

	prefilters: [ defaultPrefilter ***REMOVED***,

	prefilter: function( callback, prepend ***REMOVED*** {
		if ( prepend ***REMOVED*** {
			Animation.prefilters.unshift( callback ***REMOVED***;
		***REMOVED*** else {
			Animation.prefilters.push( callback ***REMOVED***;
		***REMOVED***
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.speed = function( speed, easing, fn ***REMOVED*** {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {***REMOVED***, speed ***REMOVED*** : {
		complete: fn || !fn && easing ||
			isFunction( speed ***REMOVED*** && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ***REMOVED*** && easing
	***REMOVED***;

	// Go to the end state if fx are off
	if ( jQuery.fx.off ***REMOVED*** {
		opt.duration = 0;

	***REMOVED*** else {
		if ( typeof opt.duration !== "number" ***REMOVED*** {
			if ( opt.duration in jQuery.fx.speeds ***REMOVED*** {
				opt.duration = jQuery.fx.speeds[ opt.duration ***REMOVED***;

			***REMOVED*** else {
				opt.duration = jQuery.fx.speeds._default;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ***REMOVED*** {
		opt.queue = "fx";
	***REMOVED***

	// Queueing
	opt.old = opt.complete;

	opt.complete = function(***REMOVED*** {
		if ( isFunction( opt.old ***REMOVED*** ***REMOVED*** {
			opt.old.call( this ***REMOVED***;
		***REMOVED***

		if ( opt.queue ***REMOVED*** {
			jQuery.dequeue( this, opt.queue ***REMOVED***;
		***REMOVED***
	***REMOVED***;

	return opt;
***REMOVED***;

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ***REMOVED*** {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ***REMOVED***.css( "opacity", 0 ***REMOVED***.show(***REMOVED***

			// Animate to the value specified
			.end(***REMOVED***.animate( { opacity: to ***REMOVED***, speed, easing, callback ***REMOVED***;
	***REMOVED***,
	animate: function( prop, speed, easing, callback ***REMOVED*** {
		var empty = jQuery.isEmptyObject( prop ***REMOVED***,
			optall = jQuery.speed( speed, easing, callback ***REMOVED***,
			doAnimation = function(***REMOVED*** {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {***REMOVED***, prop ***REMOVED***, optall ***REMOVED***;

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ***REMOVED*** ***REMOVED*** {
					anim.stop( true ***REMOVED***;
				***REMOVED***
			***REMOVED***;
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ***REMOVED*** :
			this.queue( optall.queue, doAnimation ***REMOVED***;
	***REMOVED***,
	stop: function( type, clearQueue, gotoEnd ***REMOVED*** {
		var stopQueue = function( hooks ***REMOVED*** {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd ***REMOVED***;
		***REMOVED***;

		if ( typeof type !== "string" ***REMOVED*** {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		***REMOVED***
		if ( clearQueue && type !== false ***REMOVED*** {
			this.queue( type || "fx", [***REMOVED*** ***REMOVED***;
		***REMOVED***

		return this.each( function(***REMOVED*** {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this ***REMOVED***;

			if ( index ***REMOVED*** {
				if ( data[ index ***REMOVED*** && data[ index ***REMOVED***.stop ***REMOVED*** {
					stopQueue( data[ index ***REMOVED*** ***REMOVED***;
				***REMOVED***
			***REMOVED*** else {
				for ( index in data ***REMOVED*** {
					if ( data[ index ***REMOVED*** && data[ index ***REMOVED***.stop && rrun.test( index ***REMOVED*** ***REMOVED*** {
						stopQueue( data[ index ***REMOVED*** ***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			for ( index = timers.length; index--; ***REMOVED*** {
				if ( timers[ index ***REMOVED***.elem === this &&
					( type == null || timers[ index ***REMOVED***.queue === type ***REMOVED*** ***REMOVED*** {

					timers[ index ***REMOVED***.anim.stop( gotoEnd ***REMOVED***;
					dequeue = false;
					timers.splice( index, 1 ***REMOVED***;
				***REMOVED***
			***REMOVED***

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ***REMOVED*** {
				jQuery.dequeue( this, type ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,
	finish: function( type ***REMOVED*** {
		if ( type !== false ***REMOVED*** {
			type = type || "fx";
		***REMOVED***
		return this.each( function(***REMOVED*** {
			var index,
				data = dataPriv.get( this ***REMOVED***,
				queue = data[ type + "queue" ***REMOVED***,
				hooks = data[ type + "queueHooks" ***REMOVED***,
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [***REMOVED*** ***REMOVED***;

			if ( hooks && hooks.stop ***REMOVED*** {
				hooks.stop.call( this, true ***REMOVED***;
			***REMOVED***

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ***REMOVED*** {
				if ( timers[ index ***REMOVED***.elem === this && timers[ index ***REMOVED***.queue === type ***REMOVED*** {
					timers[ index ***REMOVED***.anim.stop( true ***REMOVED***;
					timers.splice( index, 1 ***REMOVED***;
				***REMOVED***
			***REMOVED***

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ***REMOVED*** {
				if ( queue[ index ***REMOVED*** && queue[ index ***REMOVED***.finish ***REMOVED*** {
					queue[ index ***REMOVED***.finish.call( this ***REMOVED***;
				***REMOVED***
			***REMOVED***

			// Turn off finishing flag
			delete data.finish;
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.each( [ "toggle", "show", "hide" ***REMOVED***, function( i, name ***REMOVED*** {
	var cssFn = jQuery.fn[ name ***REMOVED***;
	jQuery.fn[ name ***REMOVED*** = function( speed, easing, callback ***REMOVED*** {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ***REMOVED*** :
			this.animate( genFx( name, true ***REMOVED***, speed, easing, callback ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ***REMOVED***,
	slideUp: genFx( "hide" ***REMOVED***,
	slideToggle: genFx( "toggle" ***REMOVED***,
	fadeIn: { opacity: "show" ***REMOVED***,
	fadeOut: { opacity: "hide" ***REMOVED***,
	fadeToggle: { opacity: "toggle" ***REMOVED***
***REMOVED***, function( name, props ***REMOVED*** {
	jQuery.fn[ name ***REMOVED*** = function( speed, easing, callback ***REMOVED*** {
		return this.animate( props, speed, easing, callback ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;

jQuery.timers = [***REMOVED***;
jQuery.fx.tick = function(***REMOVED*** {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now(***REMOVED***;

	for ( ; i < timers.length; i++ ***REMOVED*** {
		timer = timers[ i ***REMOVED***;

		// Run the timer and safely remove it when done (allowing for external removal***REMOVED***
		if ( !timer(***REMOVED*** && timers[ i ***REMOVED*** === timer ***REMOVED*** {
			timers.splice( i--, 1 ***REMOVED***;
		***REMOVED***
	***REMOVED***

	if ( !timers.length ***REMOVED*** {
		jQuery.fx.stop(***REMOVED***;
	***REMOVED***
	fxNow = undefined;
***REMOVED***;

jQuery.fx.timer = function( timer ***REMOVED*** {
	jQuery.timers.push( timer ***REMOVED***;
	jQuery.fx.start(***REMOVED***;
***REMOVED***;

jQuery.fx.interval = 13;
jQuery.fx.start = function(***REMOVED*** {
	if ( inProgress ***REMOVED*** {
		return;
	***REMOVED***

	inProgress = true;
	schedule(***REMOVED***;
***REMOVED***;

jQuery.fx.stop = function(***REMOVED*** {
	inProgress = null;
***REMOVED***;

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
***REMOVED***;


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ***REMOVED*** {
	time = jQuery.fx ? jQuery.fx.speeds[ time ***REMOVED*** || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ***REMOVED*** {
		var timeout = window.setTimeout( next, time ***REMOVED***;
		hooks.stop = function(***REMOVED*** {
			window.clearTimeout( timeout ***REMOVED***;
		***REMOVED***;
	***REMOVED*** ***REMOVED***;
***REMOVED***;


( function(***REMOVED*** {
	var input = document.createElement( "input" ***REMOVED***,
		select = document.createElement( "select" ***REMOVED***,
		opt = select.appendChild( document.createElement( "option" ***REMOVED*** ***REMOVED***;

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" ***REMOVED***;
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
***REMOVED*** ***REMOVED***(***REMOVED***;


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ***REMOVED*** {
		return access( this, jQuery.attr, name, value, arguments.length > 1 ***REMOVED***;
	***REMOVED***,

	removeAttr: function( name ***REMOVED*** {
		return this.each( function(***REMOVED*** {
			jQuery.removeAttr( this, name ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.extend( {
	attr: function( elem, name, value ***REMOVED*** {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ***REMOVED*** {
			return;
		***REMOVED***

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ***REMOVED*** {
			return jQuery.prop( elem, name, value ***REMOVED***;
		***REMOVED***

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ***REMOVED*** ***REMOVED*** {
			hooks = jQuery.attrHooks[ name.toLowerCase(***REMOVED*** ***REMOVED*** ||
				( jQuery.expr.match.bool.test( name ***REMOVED*** ? boolHook : undefined ***REMOVED***;
		***REMOVED***

		if ( value !== undefined ***REMOVED*** {
			if ( value === null ***REMOVED*** {
				jQuery.removeAttr( elem, name ***REMOVED***;
				return;
			***REMOVED***

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ***REMOVED*** ***REMOVED*** !== undefined ***REMOVED*** {
				return ret;
			***REMOVED***

			elem.setAttribute( name, value + "" ***REMOVED***;
			return value;
		***REMOVED***

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ***REMOVED*** ***REMOVED*** !== null ***REMOVED*** {
			return ret;
		***REMOVED***

		ret = jQuery.find.attr( elem, name ***REMOVED***;

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	***REMOVED***,

	attrHooks: {
		type: {
			set: function( elem, value ***REMOVED*** {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ***REMOVED*** ***REMOVED*** {
					var val = elem.value;
					elem.setAttribute( "type", value ***REMOVED***;
					if ( val ***REMOVED*** {
						elem.value = val;
					***REMOVED***
					return value;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	removeAttr: function( elem, value ***REMOVED*** {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite ***REMOVED***;

		if ( attrNames && elem.nodeType === 1 ***REMOVED*** {
			while ( ( name = attrNames[ i++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				elem.removeAttribute( name ***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ***REMOVED*** {
		if ( value === false ***REMOVED*** {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name ***REMOVED***;
		***REMOVED*** else {
			elem.setAttribute( name, name ***REMOVED***;
		***REMOVED***
		return name;
	***REMOVED***
***REMOVED***;

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ***REMOVED***, function( i, name ***REMOVED*** {
	var getter = attrHandle[ name ***REMOVED*** || jQuery.find.attr;

	attrHandle[ name ***REMOVED*** = function( elem, name, isXML ***REMOVED*** {
		var ret, handle,
			lowercaseName = name.toLowerCase(***REMOVED***;

		if ( !isXML ***REMOVED*** {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ***REMOVED***;
			attrHandle[ lowercaseName ***REMOVED*** = ret;
			ret = getter( elem, name, isXML ***REMOVED*** != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ***REMOVED*** = handle;
		***REMOVED***
		return ret;
	***REMOVED***;
***REMOVED*** ***REMOVED***;




var rfocusable = /^(?:input|select|textarea|button***REMOVED***$/i,
	rclickable = /^(?:a|area***REMOVED***$/i;

jQuery.fn.extend( {
	prop: function( name, value ***REMOVED*** {
		return access( this, jQuery.prop, name, value, arguments.length > 1 ***REMOVED***;
	***REMOVED***,

	removeProp: function( name ***REMOVED*** {
		return this.each( function(***REMOVED*** {
			delete this[ jQuery.propFix[ name ***REMOVED*** || name ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.extend( {
	prop: function( elem, name, value ***REMOVED*** {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ***REMOVED*** {
			return;
		***REMOVED***

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ***REMOVED*** ***REMOVED*** {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ***REMOVED*** || name;
			hooks = jQuery.propHooks[ name ***REMOVED***;
		***REMOVED***

		if ( value !== undefined ***REMOVED*** {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ***REMOVED*** ***REMOVED*** !== undefined ***REMOVED*** {
				return ret;
			***REMOVED***

			return ( elem[ name ***REMOVED*** = value ***REMOVED***;
		***REMOVED***

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ***REMOVED*** ***REMOVED*** !== null ***REMOVED*** {
			return ret;
		***REMOVED***

		return elem[ name ***REMOVED***;
	***REMOVED***,

	propHooks: {
		tabIndex: {
			get: function( elem ***REMOVED*** {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072***REMOVED***
				var tabindex = jQuery.find.attr( elem, "tabindex" ***REMOVED***;

				if ( tabindex ***REMOVED*** {
					return parseInt( tabindex, 10 ***REMOVED***;
				***REMOVED***

				if (
					rfocusable.test( elem.nodeName ***REMOVED*** ||
					rclickable.test( elem.nodeName ***REMOVED*** &&
					elem.href
				***REMOVED*** {
					return 0;
				***REMOVED***

				return -1;
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	propFix: {
		"for": "htmlFor",
		"class": "className"
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ***REMOVED*** {
	jQuery.propHooks.selected = {
		get: function( elem ***REMOVED*** {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ***REMOVED*** {
				parent.parentNode.selectedIndex;
			***REMOVED***
			return null;
		***REMOVED***,
		set: function( elem ***REMOVED*** {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ***REMOVED*** {
				parent.selectedIndex;

				if ( parent.parentNode ***REMOVED*** {
					parent.parentNode.selectedIndex;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***;
***REMOVED***

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
***REMOVED***, function(***REMOVED*** {
	jQuery.propFix[ this.toLowerCase(***REMOVED*** ***REMOVED*** = this;
***REMOVED*** ***REMOVED***;




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ***REMOVED*** {
		var tokens = value.match( rnothtmlwhite ***REMOVED*** || [***REMOVED***;
		return tokens.join( " " ***REMOVED***;
	***REMOVED***


function getClass( elem ***REMOVED*** {
	return elem.getAttribute && elem.getAttribute( "class" ***REMOVED*** || "";
***REMOVED***

function classesToArray( value ***REMOVED*** {
	if ( Array.isArray( value ***REMOVED*** ***REMOVED*** {
		return value;
	***REMOVED***
	if ( typeof value === "string" ***REMOVED*** {
		return value.match( rnothtmlwhite ***REMOVED*** || [***REMOVED***;
	***REMOVED***
	return [***REMOVED***;
***REMOVED***

jQuery.fn.extend( {
	addClass: function( value ***REMOVED*** {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ***REMOVED*** ***REMOVED*** {
			return this.each( function( j ***REMOVED*** {
				jQuery( this ***REMOVED***.addClass( value.call( this, j, getClass( this ***REMOVED*** ***REMOVED*** ***REMOVED***;
			***REMOVED*** ***REMOVED***;
		***REMOVED***

		classes = classesToArray( value ***REMOVED***;

		if ( classes.length ***REMOVED*** {
			while ( ( elem = this[ i++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				curValue = getClass( elem ***REMOVED***;
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ***REMOVED*** + " " ***REMOVED***;

				if ( cur ***REMOVED*** {
					j = 0;
					while ( ( clazz = classes[ j++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {
						if ( cur.indexOf( " " + clazz + " " ***REMOVED*** < 0 ***REMOVED*** {
							cur += clazz + " ";
						***REMOVED***
					***REMOVED***

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur ***REMOVED***;
					if ( curValue !== finalValue ***REMOVED*** {
						elem.setAttribute( "class", finalValue ***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***,

	removeClass: function( value ***REMOVED*** {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ***REMOVED*** ***REMOVED*** {
			return this.each( function( j ***REMOVED*** {
				jQuery( this ***REMOVED***.removeClass( value.call( this, j, getClass( this ***REMOVED*** ***REMOVED*** ***REMOVED***;
			***REMOVED*** ***REMOVED***;
		***REMOVED***

		if ( !arguments.length ***REMOVED*** {
			return this.attr( "class", "" ***REMOVED***;
		***REMOVED***

		classes = classesToArray( value ***REMOVED***;

		if ( classes.length ***REMOVED*** {
			while ( ( elem = this[ i++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				curValue = getClass( elem ***REMOVED***;

				// This expression is here for better compressibility (see addClass***REMOVED***
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ***REMOVED*** + " " ***REMOVED***;

				if ( cur ***REMOVED*** {
					j = 0;
					while ( ( clazz = classes[ j++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ***REMOVED*** > -1 ***REMOVED*** {
							cur = cur.replace( " " + clazz + " ", " " ***REMOVED***;
						***REMOVED***
					***REMOVED***

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur ***REMOVED***;
					if ( curValue !== finalValue ***REMOVED*** {
						elem.setAttribute( "class", finalValue ***REMOVED***;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***,

	toggleClass: function( value, stateVal ***REMOVED*** {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value ***REMOVED***;

		if ( typeof stateVal === "boolean" && isValidValue ***REMOVED*** {
			return stateVal ? this.addClass( value ***REMOVED*** : this.removeClass( value ***REMOVED***;
		***REMOVED***

		if ( isFunction( value ***REMOVED*** ***REMOVED*** {
			return this.each( function( i ***REMOVED*** {
				jQuery( this ***REMOVED***.toggleClass(
					value.call( this, i, getClass( this ***REMOVED***, stateVal ***REMOVED***,
					stateVal
				***REMOVED***;
			***REMOVED*** ***REMOVED***;
		***REMOVED***

		return this.each( function(***REMOVED*** {
			var className, i, self, classNames;

			if ( isValidValue ***REMOVED*** {

				// Toggle individual class names
				i = 0;
				self = jQuery( this ***REMOVED***;
				classNames = classesToArray( value ***REMOVED***;

				while ( ( className = classNames[ i++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {

					// Check each className given, space separated list
					if ( self.hasClass( className ***REMOVED*** ***REMOVED*** {
						self.removeClass( className ***REMOVED***;
					***REMOVED*** else {
						self.addClass( className ***REMOVED***;
					***REMOVED***
				***REMOVED***

			// Toggle whole class name
			***REMOVED*** else if ( value === undefined || type === "boolean" ***REMOVED*** {
				className = getClass( this ***REMOVED***;
				if ( className ***REMOVED*** {

					// Store className if set
					dataPriv.set( this, "__className__", className ***REMOVED***;
				***REMOVED***

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it***REMOVED***.
				// Otherwise bring back whatever was previously saved (if anything***REMOVED***,
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ***REMOVED*** {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ***REMOVED*** || ""
					***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	hasClass: function( selector ***REMOVED*** {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ***REMOVED*** ***REMOVED*** + " " ***REMOVED***.indexOf( className ***REMOVED*** > -1 ***REMOVED*** {
					return true;
			***REMOVED***
		***REMOVED***

		return false;
	***REMOVED***
***REMOVED*** ***REMOVED***;




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ***REMOVED*** {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ***REMOVED***;

		if ( !arguments.length ***REMOVED*** {
			if ( elem ***REMOVED*** {
				hooks = jQuery.valHooks[ elem.type ***REMOVED*** ||
					jQuery.valHooks[ elem.nodeName.toLowerCase(***REMOVED*** ***REMOVED***;

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ***REMOVED*** ***REMOVED*** !== undefined
				***REMOVED*** {
					return ret;
				***REMOVED***

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ***REMOVED*** {
					return ret.replace( rreturn, "" ***REMOVED***;
				***REMOVED***

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			***REMOVED***

			return;
		***REMOVED***

		valueIsFunction = isFunction( value ***REMOVED***;

		return this.each( function( i ***REMOVED*** {
			var val;

			if ( this.nodeType !== 1 ***REMOVED*** {
				return;
			***REMOVED***

			if ( valueIsFunction ***REMOVED*** {
				val = value.call( this, i, jQuery( this ***REMOVED***.val(***REMOVED*** ***REMOVED***;
			***REMOVED*** else {
				val = value;
			***REMOVED***

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ***REMOVED*** {
				val = "";

			***REMOVED*** else if ( typeof val === "number" ***REMOVED*** {
				val += "";

			***REMOVED*** else if ( Array.isArray( val ***REMOVED*** ***REMOVED*** {
				val = jQuery.map( val, function( value ***REMOVED*** {
					return value == null ? "" : value + "";
				***REMOVED*** ***REMOVED***;
			***REMOVED***

			hooks = jQuery.valHooks[ this.type ***REMOVED*** || jQuery.valHooks[ this.nodeName.toLowerCase(***REMOVED*** ***REMOVED***;

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ***REMOVED*** || hooks.set( this, val, "value" ***REMOVED*** === undefined ***REMOVED*** {
				this.value = val;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ***REMOVED*** {

				var val = jQuery.find.attr( elem, "value" ***REMOVED***;
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858***REMOVED***
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ***REMOVED*** ***REMOVED***;
			***REMOVED***
		***REMOVED***,
		select: {
			get: function( elem ***REMOVED*** {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [***REMOVED***,
					max = one ? index + 1 : options.length;

				if ( index < 0 ***REMOVED*** {
					i = max;

				***REMOVED*** else {
					i = one ? index : 0;
				***REMOVED***

				// Loop through all the selected options
				for ( ; i < max; i++ ***REMOVED*** {
					option = options[ i ***REMOVED***;

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551***REMOVED***
					if ( ( option.selected || i === index ***REMOVED*** &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ***REMOVED*** ***REMOVED*** ***REMOVED*** {

						// Get the specific value for the option
						value = jQuery( option ***REMOVED***.val(***REMOVED***;

						// We don't need an array for one selects
						if ( one ***REMOVED*** {
							return value;
						***REMOVED***

						// Multi-Selects return an array
						values.push( value ***REMOVED***;
					***REMOVED***
				***REMOVED***

				return values;
			***REMOVED***,

			set: function( elem, value ***REMOVED*** {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ***REMOVED***,
					i = options.length;

				while ( i-- ***REMOVED*** {
					option = options[ i ***REMOVED***;

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ***REMOVED***, values ***REMOVED*** > -1
					***REMOVED*** {
						optionSet = true;
					***REMOVED***

					/* eslint-enable no-cond-assign */
				***REMOVED***

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ***REMOVED*** {
					elem.selectedIndex = -1;
				***REMOVED***
				return values;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ***REMOVED***, function(***REMOVED*** {
	jQuery.valHooks[ this ***REMOVED*** = {
		set: function( elem, value ***REMOVED*** {
			if ( Array.isArray( value ***REMOVED*** ***REMOVED*** {
				return ( elem.checked = jQuery.inArray( jQuery( elem ***REMOVED***.val(***REMOVED***, value ***REMOVED*** > -1 ***REMOVED***;
			***REMOVED***
		***REMOVED***
	***REMOVED***;
	if ( !support.checkOn ***REMOVED*** {
		jQuery.valHooks[ this ***REMOVED***.get = function( elem ***REMOVED*** {
			return elem.getAttribute( "value" ***REMOVED*** === null ? "on" : elem.value;
		***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur***REMOVED***$/,
	stopPropagationCallback = function( e ***REMOVED*** {
		e.stopPropagation(***REMOVED***;
	***REMOVED***;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ***REMOVED*** {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ***REMOVED***,
			type = hasOwn.call( event, "type" ***REMOVED*** ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ***REMOVED*** ? event.namespace.split( "." ***REMOVED*** : [***REMOVED***;

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ***REMOVED*** {
			return;
		***REMOVED***

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ***REMOVED*** ***REMOVED*** {
			return;
		***REMOVED***

		if ( type.indexOf( "." ***REMOVED*** > -1 ***REMOVED*** {

			// Namespaced trigger; create a regexp to match event type in handle(***REMOVED***
			namespaces = type.split( "." ***REMOVED***;
			type = namespaces.shift(***REMOVED***;
			namespaces.sort(***REMOVED***;
		***REMOVED***
		ontype = type.indexOf( ":" ***REMOVED*** < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ***REMOVED*** ?
			event :
			new jQuery.Event( type, typeof event === "object" && event ***REMOVED***;

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true***REMOVED***
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." ***REMOVED***;
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.***REMOVED***" + namespaces.join( "\\.(?:.*\\.|***REMOVED***" ***REMOVED*** + "(\\.|$***REMOVED***" ***REMOVED*** :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ***REMOVED*** {
			event.target = elem;
		***REMOVED***

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ***REMOVED*** :
			jQuery.makeArray( data, [ event ***REMOVED*** ***REMOVED***;

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ***REMOVED*** || {***REMOVED***;
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ***REMOVED*** === false ***REMOVED*** {
			return;
		***REMOVED***

		// Determine event propagation path in advance, per W3C events spec (#9951***REMOVED***
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724***REMOVED***
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ***REMOVED*** ***REMOVED*** {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ***REMOVED*** ***REMOVED*** {
				cur = cur.parentNode;
			***REMOVED***
			for ( ; cur; cur = cur.parentNode ***REMOVED*** {
				eventPath.push( cur ***REMOVED***;
				tmp = cur;
			***REMOVED***

			// Only add window if we got to document (e.g., not plain obj or detached DOM***REMOVED***
			if ( tmp === ( elem.ownerDocument || document ***REMOVED*** ***REMOVED*** {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ***REMOVED*** ***REMOVED*** && !event.isPropagationStopped(***REMOVED*** ***REMOVED*** {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ***REMOVED*** || {***REMOVED*** ***REMOVED***[ event.type ***REMOVED*** &&
				dataPriv.get( cur, "handle" ***REMOVED***;
			if ( handle ***REMOVED*** {
				handle.apply( cur, data ***REMOVED***;
			***REMOVED***

			// Native handler
			handle = ontype && cur[ ontype ***REMOVED***;
			if ( handle && handle.apply && acceptData( cur ***REMOVED*** ***REMOVED*** {
				event.result = handle.apply( cur, data ***REMOVED***;
				if ( event.result === false ***REMOVED*** {
					event.preventDefault(***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented(***REMOVED*** ***REMOVED*** {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(***REMOVED***, data ***REMOVED*** === false ***REMOVED*** &&
				acceptData( elem ***REMOVED*** ***REMOVED*** {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170***REMOVED***
				if ( ontype && isFunction( elem[ type ***REMOVED*** ***REMOVED*** && !isWindow( elem ***REMOVED*** ***REMOVED*** {

					// Don't re-trigger an onFOO event when we call its FOO(***REMOVED*** method
					tmp = elem[ ontype ***REMOVED***;

					if ( tmp ***REMOVED*** {
						elem[ ontype ***REMOVED*** = null;
					***REMOVED***

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped(***REMOVED*** ***REMOVED*** {
						lastElement.addEventListener( type, stopPropagationCallback ***REMOVED***;
					***REMOVED***

					elem[ type ***REMOVED***(***REMOVED***;

					if ( event.isPropagationStopped(***REMOVED*** ***REMOVED*** {
						lastElement.removeEventListener( type, stopPropagationCallback ***REMOVED***;
					***REMOVED***

					jQuery.event.triggered = undefined;

					if ( tmp ***REMOVED*** {
						elem[ ontype ***REMOVED*** = tmp;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return event.result;
	***REMOVED***,

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out***REMOVED***` events
	simulate: function( type, elem, event ***REMOVED*** {
		var e = jQuery.extend(
			new jQuery.Event(***REMOVED***,
			event,
			{
				type: type,
				isSimulated: true
			***REMOVED***
		***REMOVED***;

		jQuery.event.trigger( e, null, elem ***REMOVED***;
	***REMOVED***

***REMOVED*** ***REMOVED***;

jQuery.fn.extend( {

	trigger: function( type, data ***REMOVED*** {
		return this.each( function(***REMOVED*** {
			jQuery.event.trigger( type, data, this ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***,
	triggerHandler: function( type, data ***REMOVED*** {
		var elem = this[ 0 ***REMOVED***;
		if ( elem ***REMOVED*** {
			return jQuery.event.trigger( type, data, elem, true ***REMOVED***;
		***REMOVED***
	***REMOVED***
***REMOVED*** ***REMOVED***;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out***REMOVED*** events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out***REMOVED*** events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ***REMOVED*** {
	jQuery.each( { focus: "focusin", blur: "focusout" ***REMOVED***, function( orig, fix ***REMOVED*** {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ***REMOVED*** {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ***REMOVED*** ***REMOVED***;
		***REMOVED***;

		jQuery.event.special[ fix ***REMOVED*** = {
			setup: function(***REMOVED*** {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ***REMOVED***;

				if ( !attaches ***REMOVED*** {
					doc.addEventListener( orig, handler, true ***REMOVED***;
				***REMOVED***
				dataPriv.access( doc, fix, ( attaches || 0 ***REMOVED*** + 1 ***REMOVED***;
			***REMOVED***,
			teardown: function(***REMOVED*** {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ***REMOVED*** - 1;

				if ( !attaches ***REMOVED*** {
					doc.removeEventListener( orig, handler, true ***REMOVED***;
					dataPriv.remove( doc, fix ***REMOVED***;

				***REMOVED*** else {
					dataPriv.access( doc, fix, attaches ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***;
	***REMOVED*** ***REMOVED***;
***REMOVED***
var location = window.location;

var nonce = Date.now(***REMOVED***;

var rquery = ( /\?/ ***REMOVED***;



// Cross-browser xml parsing
jQuery.parseXML = function( data ***REMOVED*** {
	var xml;
	if ( !data || typeof data !== "string" ***REMOVED*** {
		return null;
	***REMOVED***

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser(***REMOVED*** ***REMOVED***.parseFromString( data, "text/xml" ***REMOVED***;
	***REMOVED*** catch ( e ***REMOVED*** {
		xml = undefined;
	***REMOVED***

	if ( !xml || xml.getElementsByTagName( "parsererror" ***REMOVED***.length ***REMOVED*** {
		jQuery.error( "Invalid XML: " + data ***REMOVED***;
	***REMOVED***
	return xml;
***REMOVED***;


var
	rbracket = /\[\***REMOVED***$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file***REMOVED***$/i,
	rsubmittable = /^(?:input|select|textarea|keygen***REMOVED***/i;

function buildParams( prefix, obj, traditional, add ***REMOVED*** {
	var name;

	if ( Array.isArray( obj ***REMOVED*** ***REMOVED*** {

		// Serialize array item.
		jQuery.each( obj, function( i, v ***REMOVED*** {
			if ( traditional || rbracket.test( prefix ***REMOVED*** ***REMOVED*** {

				// Treat each array item as a scalar.
				add( prefix, v ***REMOVED***;

			***REMOVED*** else {

				// Item is non-scalar (array or object***REMOVED***, encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ***REMOVED*** + "***REMOVED***",
					v,
					traditional,
					add
				***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;

	***REMOVED*** else if ( !traditional && toType( obj ***REMOVED*** === "object" ***REMOVED*** {

		// Serialize object item.
		for ( name in obj ***REMOVED*** {
			buildParams( prefix + "[" + name + "***REMOVED***", obj[ name ***REMOVED***, traditional, add ***REMOVED***;
		***REMOVED***

	***REMOVED*** else {

		// Serialize scalar item.
		add( prefix, obj ***REMOVED***;
	***REMOVED***
***REMOVED***

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ***REMOVED*** {
	var prefix,
		s = [***REMOVED***,
		add = function( key, valueOrFunction ***REMOVED*** {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ***REMOVED*** ?
				valueOrFunction(***REMOVED*** :
				valueOrFunction;

			s[ s.length ***REMOVED*** = encodeURIComponent( key ***REMOVED*** + "=" +
				encodeURIComponent( value == null ? "" : value ***REMOVED***;
		***REMOVED***;

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ***REMOVED*** || ( a.jquery && !jQuery.isPlainObject( a ***REMOVED*** ***REMOVED*** ***REMOVED*** {

		// Serialize the form elements
		jQuery.each( a, function(***REMOVED*** {
			add( this.name, this.value ***REMOVED***;
		***REMOVED*** ***REMOVED***;

	***REMOVED*** else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it***REMOVED***, otherwise encode params recursively.
		for ( prefix in a ***REMOVED*** {
			buildParams( prefix, a[ prefix ***REMOVED***, traditional, add ***REMOVED***;
		***REMOVED***
	***REMOVED***

	// Return the resulting serialization
	return s.join( "&" ***REMOVED***;
***REMOVED***;

jQuery.fn.extend( {
	serialize: function(***REMOVED*** {
		return jQuery.param( this.serializeArray(***REMOVED*** ***REMOVED***;
	***REMOVED***,
	serializeArray: function(***REMOVED*** {
		return this.map( function(***REMOVED*** {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" ***REMOVED***;
			return elements ? jQuery.makeArray( elements ***REMOVED*** : this;
		***REMOVED*** ***REMOVED***
		.filter( function(***REMOVED*** {
			var type = this.type;

			// Use .is( ":disabled" ***REMOVED*** so that fieldset[disabled***REMOVED*** works
			return this.name && !jQuery( this ***REMOVED***.is( ":disabled" ***REMOVED*** &&
				rsubmittable.test( this.nodeName ***REMOVED*** && !rsubmitterTypes.test( type ***REMOVED*** &&
				( this.checked || !rcheckableType.test( type ***REMOVED*** ***REMOVED***;
		***REMOVED*** ***REMOVED***
		.map( function( i, elem ***REMOVED*** {
			var val = jQuery( this ***REMOVED***.val(***REMOVED***;

			if ( val == null ***REMOVED*** {
				return null;
			***REMOVED***

			if ( Array.isArray( val ***REMOVED*** ***REMOVED*** {
				return jQuery.map( val, function( val ***REMOVED*** {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ***REMOVED*** ***REMOVED***;
				***REMOVED*** ***REMOVED***;
			***REMOVED***

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ***REMOVED*** ***REMOVED***;
		***REMOVED*** ***REMOVED***.get(***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&***REMOVED******REMOVED***_=[^&***REMOVED****/,
	rheaders = /^(.*?***REMOVED***:[ \t***REMOVED****([^\r\n***REMOVED*******REMOVED***$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget***REMOVED***:$/,
	rnoContent = /^(?:GET|HEAD***REMOVED***$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1***REMOVED*** They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example***REMOVED***
	 * 2***REMOVED*** These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true***REMOVED***
	 * 3***REMOVED*** key is the dataType
	 * 4***REMOVED*** the catchall symbol "*" can be used
	 * 5***REMOVED*** execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {***REMOVED***,

	/* Transports bindings
	 * 1***REMOVED*** key is the dataType
	 * 2***REMOVED*** the catchall symbol "*" can be used
	 * 3***REMOVED*** selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {***REMOVED***,

	// Avoid comment-prolog char sequence (#10098***REMOVED***; must appease lint and evade compression
	allTypes = "*/".concat( "*" ***REMOVED***,

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" ***REMOVED***;
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ***REMOVED*** {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ***REMOVED*** {

		if ( typeof dataTypeExpression !== "string" ***REMOVED*** {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		***REMOVED***

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase(***REMOVED***.match( rnothtmlwhite ***REMOVED*** || [***REMOVED***;

		if ( isFunction( func ***REMOVED*** ***REMOVED*** {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ***REMOVED*** ***REMOVED*** ***REMOVED*** {

				// Prepend if requested
				if ( dataType[ 0 ***REMOVED*** === "+" ***REMOVED*** {
					dataType = dataType.slice( 1 ***REMOVED*** || "*";
					( structure[ dataType ***REMOVED*** = structure[ dataType ***REMOVED*** || [***REMOVED*** ***REMOVED***.unshift( func ***REMOVED***;

				// Otherwise append
				***REMOVED*** else {
					( structure[ dataType ***REMOVED*** = structure[ dataType ***REMOVED*** || [***REMOVED*** ***REMOVED***.push( func ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***;
***REMOVED***

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ***REMOVED*** {

	var inspected = {***REMOVED***,
		seekingTransport = ( structure === transports ***REMOVED***;

	function inspect( dataType ***REMOVED*** {
		var selected;
		inspected[ dataType ***REMOVED*** = true;
		jQuery.each( structure[ dataType ***REMOVED*** || [***REMOVED***, function( _, prefilterOrFactory ***REMOVED*** {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR ***REMOVED***;
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ***REMOVED*** ***REMOVED*** {

				options.dataTypes.unshift( dataTypeOrTransport ***REMOVED***;
				inspect( dataTypeOrTransport ***REMOVED***;
				return false;
			***REMOVED*** else if ( seekingTransport ***REMOVED*** {
				return !( selected = dataTypeOrTransport ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
		return selected;
	***REMOVED***

	return inspect( options.dataTypes[ 0 ***REMOVED*** ***REMOVED*** || !inspected[ "*" ***REMOVED*** && inspect( "*" ***REMOVED***;
***REMOVED***

// A special extend for ajax options
// that takes "flat" options (not to be deep extended***REMOVED***
// Fixes #9887
function ajaxExtend( target, src ***REMOVED*** {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {***REMOVED***;

	for ( key in src ***REMOVED*** {
		if ( src[ key ***REMOVED*** !== undefined ***REMOVED*** {
			( flatOptions[ key ***REMOVED*** ? target : ( deep || ( deep = {***REMOVED*** ***REMOVED*** ***REMOVED*** ***REMOVED***[ key ***REMOVED*** = src[ key ***REMOVED***;
		***REMOVED***
	***REMOVED***
	if ( deep ***REMOVED*** {
		jQuery.extend( true, target, deep ***REMOVED***;
	***REMOVED***

	return target;
***REMOVED***

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType***REMOVED***
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ***REMOVED*** {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ***REMOVED*** === "*" ***REMOVED*** {
		dataTypes.shift(***REMOVED***;
		if ( ct === undefined ***REMOVED*** {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" ***REMOVED***;
		***REMOVED***
	***REMOVED***

	// Check if we're dealing with a known content-type
	if ( ct ***REMOVED*** {
		for ( type in contents ***REMOVED*** {
			if ( contents[ type ***REMOVED*** && contents[ type ***REMOVED***.test( ct ***REMOVED*** ***REMOVED*** {
				dataTypes.unshift( type ***REMOVED***;
				break;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ***REMOVED*** in responses ***REMOVED*** {
		finalDataType = dataTypes[ 0 ***REMOVED***;
	***REMOVED*** else {

		// Try convertible dataTypes
		for ( type in responses ***REMOVED*** {
			if ( !dataTypes[ 0 ***REMOVED*** || s.converters[ type + " " + dataTypes[ 0 ***REMOVED*** ***REMOVED*** ***REMOVED*** {
				finalDataType = type;
				break;
			***REMOVED***
			if ( !firstDataType ***REMOVED*** {
				firstDataType = type;
			***REMOVED***
		***REMOVED***

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	***REMOVED***

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ***REMOVED*** {
		if ( finalDataType !== dataTypes[ 0 ***REMOVED*** ***REMOVED*** {
			dataTypes.unshift( finalDataType ***REMOVED***;
		***REMOVED***
		return responses[ finalDataType ***REMOVED***;
	***REMOVED***
***REMOVED***

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ***REMOVED*** {
	var conv2, current, conv, tmp, prev,
		converters = {***REMOVED***,

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(***REMOVED***;

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ***REMOVED*** ***REMOVED*** {
		for ( conv in s.converters ***REMOVED*** {
			converters[ conv.toLowerCase(***REMOVED*** ***REMOVED*** = s.converters[ conv ***REMOVED***;
		***REMOVED***
	***REMOVED***

	current = dataTypes.shift(***REMOVED***;

	// Convert to each sequential dataType
	while ( current ***REMOVED*** {

		if ( s.responseFields[ current ***REMOVED*** ***REMOVED*** {
			jqXHR[ s.responseFields[ current ***REMOVED*** ***REMOVED*** = response;
		***REMOVED***

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ***REMOVED*** {
			response = s.dataFilter( response, s.dataType ***REMOVED***;
		***REMOVED***

		prev = current;
		current = dataTypes.shift(***REMOVED***;

		if ( current ***REMOVED*** {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ***REMOVED*** {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			***REMOVED*** else if ( prev !== "*" && prev !== current ***REMOVED*** {

				// Seek a direct converter
				conv = converters[ prev + " " + current ***REMOVED*** || converters[ "* " + current ***REMOVED***;

				// If none found, seek a pair
				if ( !conv ***REMOVED*** {
					for ( conv2 in converters ***REMOVED*** {

						// If conv2 outputs current
						tmp = conv2.split( " " ***REMOVED***;
						if ( tmp[ 1 ***REMOVED*** === current ***REMOVED*** {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ***REMOVED*** ***REMOVED*** ||
								converters[ "* " + tmp[ 0 ***REMOVED*** ***REMOVED***;
							if ( conv ***REMOVED*** {

								// Condense equivalence converters
								if ( conv === true ***REMOVED*** {
									conv = converters[ conv2 ***REMOVED***;

								// Otherwise, insert the intermediate dataType
								***REMOVED*** else if ( converters[ conv2 ***REMOVED*** !== true ***REMOVED*** {
									current = tmp[ 0 ***REMOVED***;
									dataTypes.unshift( tmp[ 1 ***REMOVED*** ***REMOVED***;
								***REMOVED***
								break;
							***REMOVED***
						***REMOVED***
					***REMOVED***
				***REMOVED***

				// Apply converter (if not an equivalence***REMOVED***
				if ( conv !== true ***REMOVED*** {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ***REMOVED*** {
						response = conv( response ***REMOVED***;
					***REMOVED*** else {
						try {
							response = conv( response ***REMOVED***;
						***REMOVED*** catch ( e ***REMOVED*** {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return { state: "success", data: response ***REMOVED***;
***REMOVED***

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {***REMOVED***,
	etag: {***REMOVED***,

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ***REMOVED***,
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {***REMOVED***,
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		***REMOVED***,

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		***REMOVED***,

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		***REMOVED***,

		// Data converters
		// Keys separate source (or catchall "*"***REMOVED*** and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation***REMOVED***
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		***REMOVED***,

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend***REMOVED***
		flatOptions: {
			url: true,
			context: true
		***REMOVED***
	***REMOVED***,

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ***REMOVED*** {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ***REMOVED***, settings ***REMOVED*** :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target ***REMOVED***;
	***REMOVED***,

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ***REMOVED***,
	ajaxTransport: addToPrefiltersOrTransports( transports ***REMOVED***,

	// Main method
	ajax: function( url, options ***REMOVED*** {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ***REMOVED*** {
			options = url;
			url = undefined;
		***REMOVED***

		// Force options to be an object
		options = options || {***REMOVED***;

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion***REMOVED***
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {***REMOVED***, options ***REMOVED***,

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ***REMOVED*** ?
					jQuery( callbackContext ***REMOVED*** :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(***REMOVED***,
			completeDeferred = jQuery.Callbacks( "once memory" ***REMOVED***,

			// Status-dependent callbacks
			statusCode = s.statusCode || {***REMOVED***,

			// Headers (they are sent all at once***REMOVED***
			requestHeaders = {***REMOVED***,
			requestHeadersNames = {***REMOVED***,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ***REMOVED*** {
					var match;
					if ( completed ***REMOVED*** {
						if ( !responseHeaders ***REMOVED*** {
							responseHeaders = {***REMOVED***;
							while ( ( match = rheaders.exec( responseHeadersString ***REMOVED*** ***REMOVED*** ***REMOVED*** {
								responseHeaders[ match[ 1 ***REMOVED***.toLowerCase(***REMOVED*** ***REMOVED*** = match[ 2 ***REMOVED***;
							***REMOVED***
						***REMOVED***
						match = responseHeaders[ key.toLowerCase(***REMOVED*** ***REMOVED***;
					***REMOVED***
					return match == null ? null : match;
				***REMOVED***,

				// Raw string
				getAllResponseHeaders: function(***REMOVED*** {
					return completed ? responseHeadersString : null;
				***REMOVED***,

				// Caches the header
				setRequestHeader: function( name, value ***REMOVED*** {
					if ( completed == null ***REMOVED*** {
						name = requestHeadersNames[ name.toLowerCase(***REMOVED*** ***REMOVED*** =
							requestHeadersNames[ name.toLowerCase(***REMOVED*** ***REMOVED*** || name;
						requestHeaders[ name ***REMOVED*** = value;
					***REMOVED***
					return this;
				***REMOVED***,

				// Overrides response content-type header
				overrideMimeType: function( type ***REMOVED*** {
					if ( completed == null ***REMOVED*** {
						s.mimeType = type;
					***REMOVED***
					return this;
				***REMOVED***,

				// Status-dependent callbacks
				statusCode: function( map ***REMOVED*** {
					var code;
					if ( map ***REMOVED*** {
						if ( completed ***REMOVED*** {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ***REMOVED*** ***REMOVED***;
						***REMOVED*** else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ***REMOVED*** {
								statusCode[ code ***REMOVED*** = [ statusCode[ code ***REMOVED***, map[ code ***REMOVED*** ***REMOVED***;
							***REMOVED***
						***REMOVED***
					***REMOVED***
					return this;
				***REMOVED***,

				// Cancel the request
				abort: function( statusText ***REMOVED*** {
					var finalText = statusText || strAbort;
					if ( transport ***REMOVED*** {
						transport.abort( finalText ***REMOVED***;
					***REMOVED***
					done( 0, finalText ***REMOVED***;
					return this;
				***REMOVED***
			***REMOVED***;

		// Attach deferreds
		deferred.promise( jqXHR ***REMOVED***;

		// Add protocol if not provided (prefilters might expect it***REMOVED***
		// Handle falsy url in the settings object (#10093: consistency with old signature***REMOVED***
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ***REMOVED*** + "" ***REMOVED***
			.replace( rprotocol, location.protocol + "//" ***REMOVED***;

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ***REMOVED***.toLowerCase(***REMOVED***.match( rnothtmlwhite ***REMOVED*** || [ "" ***REMOVED***;

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ***REMOVED*** {
			urlAnchor = document.createElement( "a" ***REMOVED***;

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			***REMOVED*** catch ( e ***REMOVED*** {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			***REMOVED***
		***REMOVED***

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ***REMOVED*** {
			s.data = jQuery.param( s.data, s.traditional ***REMOVED***;
		***REMOVED***

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR ***REMOVED***;

		// If request was aborted inside a prefilter, stop there
		if ( completed ***REMOVED*** {
			return jqXHR;
		***REMOVED***

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118***REMOVED***
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ***REMOVED*** {
			jQuery.event.trigger( "ajaxStart" ***REMOVED***;
		***REMOVED***

		// Uppercase the type
		s.type = s.type.toUpperCase(***REMOVED***;

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type ***REMOVED***;

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" ***REMOVED***;

		// More options handling for requests with no content
		if ( !s.hasContent ***REMOVED*** {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length ***REMOVED***;

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ***REMOVED*** ***REMOVED*** {
				cacheURL += ( rquery.test( cacheURL ***REMOVED*** ? "&" : "?" ***REMOVED*** + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			***REMOVED***

			// Add or update anti-cache param if needed
			if ( s.cache === false ***REMOVED*** {
				cacheURL = cacheURL.replace( rantiCache, "$1" ***REMOVED***;
				uncached = ( rquery.test( cacheURL ***REMOVED*** ? "&" : "?" ***REMOVED*** + "_=" + ( nonce++ ***REMOVED*** + uncached;
			***REMOVED***

			// Put hash and anti-cache on the URL that will be requested (gh-1732***REMOVED***
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658***REMOVED***
		***REMOVED*** else if ( s.data && s.processData &&
			( s.contentType || "" ***REMOVED***.indexOf( "application/x-www-form-urlencoded" ***REMOVED*** === 0 ***REMOVED*** {
			s.data = s.data.replace( r20, "+" ***REMOVED***;
		***REMOVED***

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ***REMOVED*** {
			if ( jQuery.lastModified[ cacheURL ***REMOVED*** ***REMOVED*** {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ***REMOVED*** ***REMOVED***;
			***REMOVED***
			if ( jQuery.etag[ cacheURL ***REMOVED*** ***REMOVED*** {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ***REMOVED*** ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ***REMOVED*** {
			jqXHR.setRequestHeader( "Content-Type", s.contentType ***REMOVED***;
		***REMOVED***

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ***REMOVED*** && s.accepts[ s.dataTypes[ 0 ***REMOVED*** ***REMOVED*** ?
				s.accepts[ s.dataTypes[ 0 ***REMOVED*** ***REMOVED*** +
					( s.dataTypes[ 0 ***REMOVED*** !== "*" ? ", " + allTypes + "; q=0.01" : "" ***REMOVED*** :
				s.accepts[ "*" ***REMOVED***
		***REMOVED***;

		// Check for headers option
		for ( i in s.headers ***REMOVED*** {
			jqXHR.setRequestHeader( i, s.headers[ i ***REMOVED*** ***REMOVED***;
		***REMOVED***

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ***REMOVED*** === false || completed ***REMOVED*** ***REMOVED*** {

			// Abort if not done already and return
			return jqXHR.abort(***REMOVED***;
		***REMOVED***

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete ***REMOVED***;
		jqXHR.done( s.success ***REMOVED***;
		jqXHR.fail( s.error ***REMOVED***;

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR ***REMOVED***;

		// If no transport, we auto-abort
		if ( !transport ***REMOVED*** {
			done( -1, "No Transport" ***REMOVED***;
		***REMOVED*** else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ***REMOVED*** {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ***REMOVED*** ***REMOVED***;
			***REMOVED***

			// If request was aborted inside ajaxSend, stop there
			if ( completed ***REMOVED*** {
				return jqXHR;
			***REMOVED***

			// Timeout
			if ( s.async && s.timeout > 0 ***REMOVED*** {
				timeoutTimer = window.setTimeout( function(***REMOVED*** {
					jqXHR.abort( "timeout" ***REMOVED***;
				***REMOVED***, s.timeout ***REMOVED***;
			***REMOVED***

			try {
				completed = false;
				transport.send( requestHeaders, done ***REMOVED***;
			***REMOVED*** catch ( e ***REMOVED*** {

				// Rethrow post-completion exceptions
				if ( completed ***REMOVED*** {
					throw e;
				***REMOVED***

				// Propagate others as results
				done( -1, e ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ***REMOVED*** {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ***REMOVED*** {
				return;
			***REMOVED***

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ***REMOVED*** {
				window.clearTimeout( timeoutTimer ***REMOVED***;
			***REMOVED***

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used***REMOVED***
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ***REMOVED*** {
				response = ajaxHandleResponses( s, jqXHR, responses ***REMOVED***;
			***REMOVED***

			// Convert no matter what (that way responseXXX fields are always set***REMOVED***
			response = ajaxConvert( s, response, jqXHR, isSuccess ***REMOVED***;

			// If successful, handle type chaining
			if ( isSuccess ***REMOVED*** {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ***REMOVED*** {
					modified = jqXHR.getResponseHeader( "Last-Modified" ***REMOVED***;
					if ( modified ***REMOVED*** {
						jQuery.lastModified[ cacheURL ***REMOVED*** = modified;
					***REMOVED***
					modified = jqXHR.getResponseHeader( "etag" ***REMOVED***;
					if ( modified ***REMOVED*** {
						jQuery.etag[ cacheURL ***REMOVED*** = modified;
					***REMOVED***
				***REMOVED***

				// if no content
				if ( status === 204 || s.type === "HEAD" ***REMOVED*** {
					statusText = "nocontent";

				// if not modified
				***REMOVED*** else if ( status === 304 ***REMOVED*** {
					statusText = "notmodified";

				// If we have data, let's convert it
				***REMOVED*** else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				***REMOVED***
			***REMOVED*** else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ***REMOVED*** {
					statusText = "error";
					if ( status < 0 ***REMOVED*** {
						status = 0;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ***REMOVED*** + "";

			// Success/Error
			if ( isSuccess ***REMOVED*** {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ***REMOVED*** ***REMOVED***;
			***REMOVED*** else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ***REMOVED*** ***REMOVED***;
			***REMOVED***

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode ***REMOVED***;
			statusCode = undefined;

			if ( fireGlobals ***REMOVED*** {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ***REMOVED*** ***REMOVED***;
			***REMOVED***

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ***REMOVED*** ***REMOVED***;

			if ( fireGlobals ***REMOVED*** {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ***REMOVED*** ***REMOVED***;

				// Handle the global AJAX counter
				if ( !( --jQuery.active ***REMOVED*** ***REMOVED*** {
					jQuery.event.trigger( "ajaxStop" ***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return jqXHR;
	***REMOVED***,

	getJSON: function( url, data, callback ***REMOVED*** {
		return jQuery.get( url, data, callback, "json" ***REMOVED***;
	***REMOVED***,

	getScript: function( url, callback ***REMOVED*** {
		return jQuery.get( url, undefined, callback, "script" ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

jQuery.each( [ "get", "post" ***REMOVED***, function( i, method ***REMOVED*** {
	jQuery[ method ***REMOVED*** = function( url, data, callback, type ***REMOVED*** {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ***REMOVED*** ***REMOVED*** {
			type = type || callback;
			callback = data;
			data = undefined;
		***REMOVED***

		// The url can be an options object (which then must have .url***REMOVED***
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		***REMOVED***, jQuery.isPlainObject( url ***REMOVED*** && url ***REMOVED*** ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;


jQuery._evalUrl = function( url ***REMOVED*** {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264***REMOVED***
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	***REMOVED*** ***REMOVED***;
***REMOVED***;


jQuery.fn.extend( {
	wrapAll: function( html ***REMOVED*** {
		var wrap;

		if ( this[ 0 ***REMOVED*** ***REMOVED*** {
			if ( isFunction( html ***REMOVED*** ***REMOVED*** {
				html = html.call( this[ 0 ***REMOVED*** ***REMOVED***;
			***REMOVED***

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ***REMOVED***.ownerDocument ***REMOVED***.eq( 0 ***REMOVED***.clone( true ***REMOVED***;

			if ( this[ 0 ***REMOVED***.parentNode ***REMOVED*** {
				wrap.insertBefore( this[ 0 ***REMOVED*** ***REMOVED***;
			***REMOVED***

			wrap.map( function(***REMOVED*** {
				var elem = this;

				while ( elem.firstElementChild ***REMOVED*** {
					elem = elem.firstElementChild;
				***REMOVED***

				return elem;
			***REMOVED*** ***REMOVED***.append( this ***REMOVED***;
		***REMOVED***

		return this;
	***REMOVED***,

	wrapInner: function( html ***REMOVED*** {
		if ( isFunction( html ***REMOVED*** ***REMOVED*** {
			return this.each( function( i ***REMOVED*** {
				jQuery( this ***REMOVED***.wrapInner( html.call( this, i ***REMOVED*** ***REMOVED***;
			***REMOVED*** ***REMOVED***;
		***REMOVED***

		return this.each( function(***REMOVED*** {
			var self = jQuery( this ***REMOVED***,
				contents = self.contents(***REMOVED***;

			if ( contents.length ***REMOVED*** {
				contents.wrapAll( html ***REMOVED***;

			***REMOVED*** else {
				self.append( html ***REMOVED***;
			***REMOVED***
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	wrap: function( html ***REMOVED*** {
		var htmlIsFunction = isFunction( html ***REMOVED***;

		return this.each( function( i ***REMOVED*** {
			jQuery( this ***REMOVED***.wrapAll( htmlIsFunction ? html.call( this, i ***REMOVED*** : html ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***,

	unwrap: function( selector ***REMOVED*** {
		this.parent( selector ***REMOVED***.not( "body" ***REMOVED***.each( function(***REMOVED*** {
			jQuery( this ***REMOVED***.replaceWith( this.childNodes ***REMOVED***;
		***REMOVED*** ***REMOVED***;
		return this;
	***REMOVED***
***REMOVED*** ***REMOVED***;


jQuery.expr.pseudos.hidden = function( elem ***REMOVED*** {
	return !jQuery.expr.pseudos.visible( elem ***REMOVED***;
***REMOVED***;
jQuery.expr.pseudos.visible = function( elem ***REMOVED*** {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects(***REMOVED***.length ***REMOVED***;
***REMOVED***;




jQuery.ajaxSettings.xhr = function(***REMOVED*** {
	try {
		return new window.XMLHttpRequest(***REMOVED***;
	***REMOVED*** catch ( e ***REMOVED*** {***REMOVED***
***REMOVED***;

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	***REMOVED***,
	xhrSupported = jQuery.ajaxSettings.xhr(***REMOVED***;

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported ***REMOVED***;
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ***REMOVED*** {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ***REMOVED*** {
		return {
			send: function( headers, complete ***REMOVED*** {
				var i,
					xhr = options.xhr(***REMOVED***;

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				***REMOVED***;

				// Apply custom fields if provided
				if ( options.xhrFields ***REMOVED*** {
					for ( i in options.xhrFields ***REMOVED*** {
						xhr[ i ***REMOVED*** = options.xhrFields[ i ***REMOVED***;
					***REMOVED***
				***REMOVED***

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ***REMOVED*** {
					xhr.overrideMimeType( options.mimeType ***REMOVED***;
				***REMOVED***

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup***REMOVED***
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ***REMOVED*** ***REMOVED*** {
					headers[ "X-Requested-With" ***REMOVED*** = "XMLHttpRequest";
				***REMOVED***

				// Set headers
				for ( i in headers ***REMOVED*** {
					xhr.setRequestHeader( i, headers[ i ***REMOVED*** ***REMOVED***;
				***REMOVED***

				// Callback
				callback = function( type ***REMOVED*** {
					return function(***REMOVED*** {
						if ( callback ***REMOVED*** {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ***REMOVED*** {
								xhr.abort(***REMOVED***;
							***REMOVED*** else if ( type === "error" ***REMOVED*** {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ***REMOVED*** {
									complete( 0, "error" ***REMOVED***;
								***REMOVED*** else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									***REMOVED***;
								***REMOVED***
							***REMOVED*** else {
								complete(
									xhrSuccessStatus[ xhr.status ***REMOVED*** || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426***REMOVED***
									// For XHR2 non-text, let the caller handle it (gh-2498***REMOVED***
									( xhr.responseType || "text" ***REMOVED*** !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response ***REMOVED*** :
										{ text: xhr.responseText ***REMOVED***,
									xhr.getAllResponseHeaders(***REMOVED***
								***REMOVED***;
							***REMOVED***
						***REMOVED***
					***REMOVED***;
				***REMOVED***;

				// Listen to events
				xhr.onload = callback(***REMOVED***;
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" ***REMOVED***;

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ***REMOVED*** {
					xhr.onabort = errorCallback;
				***REMOVED*** else {
					xhr.onreadystatechange = function(***REMOVED*** {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ***REMOVED*** {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function(***REMOVED*** {
								if ( callback ***REMOVED*** {
									errorCallback(***REMOVED***;
								***REMOVED***
							***REMOVED*** ***REMOVED***;
						***REMOVED***
					***REMOVED***;
				***REMOVED***

				// Create the abort callback
				callback = callback( "abort" ***REMOVED***;

				try {

					// Do send the request (this may raise an exception***REMOVED***
					xhr.send( options.hasContent && options.data || null ***REMOVED***;
				***REMOVED*** catch ( e ***REMOVED*** {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ***REMOVED*** {
						throw e;
					***REMOVED***
				***REMOVED***
			***REMOVED***,

			abort: function(***REMOVED*** {
				if ( callback ***REMOVED*** {
					callback(***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432***REMOVED***
jQuery.ajaxPrefilter( function( s ***REMOVED*** {
	if ( s.crossDomain ***REMOVED*** {
		s.contents.script = false;
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	***REMOVED***,
	contents: {
		script: /\b(?:java|ecma***REMOVED***script\b/
	***REMOVED***,
	converters: {
		"text script": function( text ***REMOVED*** {
			jQuery.globalEval( text ***REMOVED***;
			return text;
		***REMOVED***
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ***REMOVED*** {
	if ( s.cache === undefined ***REMOVED*** {
		s.cache = false;
	***REMOVED***
	if ( s.crossDomain ***REMOVED*** {
		s.type = "GET";
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ***REMOVED*** {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ***REMOVED*** {
		var script, callback;
		return {
			send: function( _, complete ***REMOVED*** {
				script = jQuery( "<script>" ***REMOVED***.prop( {
					charset: s.scriptCharset,
					src: s.url
				***REMOVED*** ***REMOVED***.on(
					"load error",
					callback = function( evt ***REMOVED*** {
						script.remove(***REMOVED***;
						callback = null;
						if ( evt ***REMOVED*** {
							complete( evt.type === "error" ? 404 : 200, evt.type ***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED***;

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ***REMOVED*** ***REMOVED***;
			***REMOVED***,
			abort: function(***REMOVED*** {
				if ( callback ***REMOVED*** {
					callback(***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;




var oldCallbacks = [***REMOVED***,
	rjsonp = /(=***REMOVED***\?(?=&|$***REMOVED***|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function(***REMOVED*** {
		var callback = oldCallbacks.pop(***REMOVED*** || ( jQuery.expando + "_" + ( nonce++ ***REMOVED*** ***REMOVED***;
		this[ callback ***REMOVED*** = true;
		return callback;
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ***REMOVED*** {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ***REMOVED*** ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" ***REMOVED***
					.indexOf( "application/x-www-form-urlencoded" ***REMOVED*** === 0 &&
				rjsonp.test( s.data ***REMOVED*** && "data"
		***REMOVED***;

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ***REMOVED*** === "jsonp" ***REMOVED*** {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ***REMOVED*** ?
			s.jsonpCallback(***REMOVED*** :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ***REMOVED*** {
			s[ jsonProp ***REMOVED*** = s[ jsonProp ***REMOVED***.replace( rjsonp, "$1" + callbackName ***REMOVED***;
		***REMOVED*** else if ( s.jsonp !== false ***REMOVED*** {
			s.url += ( rquery.test( s.url ***REMOVED*** ? "&" : "?" ***REMOVED*** + s.jsonp + "=" + callbackName;
		***REMOVED***

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ***REMOVED*** = function(***REMOVED*** {
			if ( !responseContainer ***REMOVED*** {
				jQuery.error( callbackName + " was not called" ***REMOVED***;
			***REMOVED***
			return responseContainer[ 0 ***REMOVED***;
		***REMOVED***;

		// Force json dataType
		s.dataTypes[ 0 ***REMOVED*** = "json";

		// Install callback
		overwritten = window[ callbackName ***REMOVED***;
		window[ callbackName ***REMOVED*** = function(***REMOVED*** {
			responseContainer = arguments;
		***REMOVED***;

		// Clean-up function (fires after converters***REMOVED***
		jqXHR.always( function(***REMOVED*** {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ***REMOVED*** {
				jQuery( window ***REMOVED***.removeProp( callbackName ***REMOVED***;

			// Otherwise restore preexisting value
			***REMOVED*** else {
				window[ callbackName ***REMOVED*** = overwritten;
			***REMOVED***

			// Save back as free
			if ( s[ callbackName ***REMOVED*** ***REMOVED*** {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName ***REMOVED***;
			***REMOVED***

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ***REMOVED*** ***REMOVED*** {
				overwritten( responseContainer[ 0 ***REMOVED*** ***REMOVED***;
			***REMOVED***

			responseContainer = overwritten = undefined;
		***REMOVED*** ***REMOVED***;

		// Delegate to script
		return "script";
	***REMOVED***
***REMOVED*** ***REMOVED***;




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function(***REMOVED*** {
	var body = document.implementation.createHTMLDocument( "" ***REMOVED***.body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
***REMOVED*** ***REMOVED***(***REMOVED***;


// Argument "data" should be string of html
// context (optional***REMOVED***: If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional***REMOVED***: If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ***REMOVED*** {
	if ( typeof data !== "string" ***REMOVED*** {
		return [***REMOVED***;
	***REMOVED***
	if ( typeof context === "boolean" ***REMOVED*** {
		keepScripts = context;
		context = false;
	***REMOVED***

	var base, parsed, scripts;

	if ( !context ***REMOVED*** {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ***REMOVED*** {
			context = document.implementation.createHTMLDocument( "" ***REMOVED***;

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965***REMOVED***
			base = context.createElement( "base" ***REMOVED***;
			base.href = document.location.href;
			context.head.appendChild( base ***REMOVED***;
		***REMOVED*** else {
			context = document;
		***REMOVED***
	***REMOVED***

	parsed = rsingleTag.exec( data ***REMOVED***;
	scripts = !keepScripts && [***REMOVED***;

	// Single tag
	if ( parsed ***REMOVED*** {
		return [ context.createElement( parsed[ 1 ***REMOVED*** ***REMOVED*** ***REMOVED***;
	***REMOVED***

	parsed = buildFragment( [ data ***REMOVED***, context, scripts ***REMOVED***;

	if ( scripts && scripts.length ***REMOVED*** {
		jQuery( scripts ***REMOVED***.remove(***REMOVED***;
	***REMOVED***

	return jQuery.merge( [***REMOVED***, parsed.childNodes ***REMOVED***;
***REMOVED***;


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ***REMOVED*** {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " ***REMOVED***;

	if ( off > -1 ***REMOVED*** {
		selector = stripAndCollapse( url.slice( off ***REMOVED*** ***REMOVED***;
		url = url.slice( 0, off ***REMOVED***;
	***REMOVED***

	// If it's a function
	if ( isFunction( params ***REMOVED*** ***REMOVED*** {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	***REMOVED*** else if ( params && typeof params === "object" ***REMOVED*** {
		type = "POST";
	***REMOVED***

	// If we have elements to modify, make the request
	if ( self.length > 0 ***REMOVED*** {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		***REMOVED*** ***REMOVED***.done( function( responseText ***REMOVED*** {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ***REMOVED***.append( jQuery.parseHTML( responseText ***REMOVED*** ***REMOVED***.find( selector ***REMOVED*** :

				// Otherwise use the full result
				responseText ***REMOVED***;

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		***REMOVED*** ***REMOVED***.always( callback && function( jqXHR, status ***REMOVED*** {
			self.each( function(***REMOVED*** {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ***REMOVED*** ***REMOVED***;
			***REMOVED*** ***REMOVED***;
		***REMOVED*** ***REMOVED***;
	***REMOVED***

	return this;
***REMOVED***;




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
***REMOVED***, function( i, type ***REMOVED*** {
	jQuery.fn[ type ***REMOVED*** = function( fn ***REMOVED*** {
		return this.on( type, fn ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;




jQuery.expr.pseudos.animated = function( elem ***REMOVED*** {
	return jQuery.grep( jQuery.timers, function( fn ***REMOVED*** {
		return elem === fn.elem;
	***REMOVED*** ***REMOVED***.length;
***REMOVED***;




jQuery.offset = {
	setOffset: function( elem, options, i ***REMOVED*** {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ***REMOVED***,
			curElem = jQuery( elem ***REMOVED***,
			props = {***REMOVED***;

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ***REMOVED*** {
			elem.style.position = "relative";
		***REMOVED***

		curOffset = curElem.offset(***REMOVED***;
		curCSSTop = jQuery.css( elem, "top" ***REMOVED***;
		curCSSLeft = jQuery.css( elem, "left" ***REMOVED***;
		calculatePosition = ( position === "absolute" || position === "fixed" ***REMOVED*** &&
			( curCSSTop + curCSSLeft ***REMOVED***.indexOf( "auto" ***REMOVED*** > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ***REMOVED*** {
			curPosition = curElem.position(***REMOVED***;
			curTop = curPosition.top;
			curLeft = curPosition.left;

		***REMOVED*** else {
			curTop = parseFloat( curCSSTop ***REMOVED*** || 0;
			curLeft = parseFloat( curCSSLeft ***REMOVED*** || 0;
		***REMOVED***

		if ( isFunction( options ***REMOVED*** ***REMOVED*** {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848***REMOVED***
			options = options.call( elem, i, jQuery.extend( {***REMOVED***, curOffset ***REMOVED*** ***REMOVED***;
		***REMOVED***

		if ( options.top != null ***REMOVED*** {
			props.top = ( options.top - curOffset.top ***REMOVED*** + curTop;
		***REMOVED***
		if ( options.left != null ***REMOVED*** {
			props.left = ( options.left - curOffset.left ***REMOVED*** + curLeft;
		***REMOVED***

		if ( "using" in options ***REMOVED*** {
			options.using.call( elem, props ***REMOVED***;

		***REMOVED*** else {
			curElem.css( props ***REMOVED***;
		***REMOVED***
	***REMOVED***
***REMOVED***;

jQuery.fn.extend( {

	// offset(***REMOVED*** relates an element's border box to the document origin
	offset: function( options ***REMOVED*** {

		// Preserve chaining for setter
		if ( arguments.length ***REMOVED*** {
			return options === undefined ?
				this :
				this.each( function( i ***REMOVED*** {
					jQuery.offset.setOffset( this, options, i ***REMOVED***;
				***REMOVED*** ***REMOVED***;
		***REMOVED***

		var rect, win,
			elem = this[ 0 ***REMOVED***;

		if ( !elem ***REMOVED*** {
			return;
		***REMOVED***

		// Return zeros for disconnected and hidden (display: none***REMOVED*** elements (gh-2310***REMOVED***
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects(***REMOVED***.length ***REMOVED*** {
			return { top: 0, left: 0 ***REMOVED***;
		***REMOVED***

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect(***REMOVED***;
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		***REMOVED***;
	***REMOVED***,

	// position(***REMOVED*** relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function(***REMOVED*** {
		if ( !this[ 0 ***REMOVED*** ***REMOVED*** {
			return;
		***REMOVED***

		var offsetParent, offset, doc,
			elem = this[ 0 ***REMOVED***,
			parentOffset = { top: 0, left: 0 ***REMOVED***;

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ***REMOVED*** === "fixed" ***REMOVED*** {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect(***REMOVED***;

		***REMOVED*** else {
			offset = this.offset(***REMOVED***;

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ***REMOVED*** &&
				jQuery.css( offsetParent, "position" ***REMOVED*** === "static" ***REMOVED*** {

				offsetParent = offsetParent.parentNode;
			***REMOVED***
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ***REMOVED*** {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ***REMOVED***.offset(***REMOVED***;
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true ***REMOVED***;
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true ***REMOVED***;
			***REMOVED***
		***REMOVED***

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ***REMOVED***,
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true ***REMOVED***
		***REMOVED***;
	***REMOVED***,

	// This method will return documentElement in the following cases:
	// 1***REMOVED*** For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2***REMOVED*** For the hidden or detached element
	// 3***REMOVED*** For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function(***REMOVED*** {
		return this.map( function(***REMOVED*** {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ***REMOVED*** === "static" ***REMOVED*** {
				offsetParent = offsetParent.offsetParent;
			***REMOVED***

			return offsetParent || documentElement;
		***REMOVED*** ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" ***REMOVED***, function( method, prop ***REMOVED*** {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ***REMOVED*** = function( val ***REMOVED*** {
		return access( this, function( elem, method, val ***REMOVED*** {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ***REMOVED*** ***REMOVED*** {
				win = elem;
			***REMOVED*** else if ( elem.nodeType === 9 ***REMOVED*** {
				win = elem.defaultView;
			***REMOVED***

			if ( val === undefined ***REMOVED*** {
				return win ? win[ prop ***REMOVED*** : elem[ method ***REMOVED***;
			***REMOVED***

			if ( win ***REMOVED*** {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				***REMOVED***;

			***REMOVED*** else {
				elem[ method ***REMOVED*** = val;
			***REMOVED***
		***REMOVED***, method, val, arguments.length ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ***REMOVED***, function( i, prop ***REMOVED*** {
	jQuery.cssHooks[ prop ***REMOVED*** = addGetHookIf( support.pixelPosition,
		function( elem, computed ***REMOVED*** {
			if ( computed ***REMOVED*** {
				computed = curCSS( elem, prop ***REMOVED***;

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ***REMOVED*** ?
					jQuery( elem ***REMOVED***.position(***REMOVED***[ prop ***REMOVED*** + "px" :
					computed;
			***REMOVED***
		***REMOVED***
	***REMOVED***;
***REMOVED*** ***REMOVED***;


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" ***REMOVED***, function( name, type ***REMOVED*** {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name ***REMOVED***,
		function( defaultExtra, funcName ***REMOVED*** {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ***REMOVED*** = function( margin, value ***REMOVED*** {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ***REMOVED***,
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" ***REMOVED***;

			return access( this, function( elem, type, value ***REMOVED*** {
				var doc;

				if ( isWindow( elem ***REMOVED*** ***REMOVED*** {

					// $( window ***REMOVED***.outerWidth/Height return w/h including scrollbars (gh-1729***REMOVED***
					return funcName.indexOf( "outer" ***REMOVED*** === 0 ?
						elem[ "inner" + name ***REMOVED*** :
						elem.document.documentElement[ "client" + name ***REMOVED***;
				***REMOVED***

				// Get document width or height
				if ( elem.nodeType === 9 ***REMOVED*** {
					doc = elem.documentElement;

					// Either scroll[Width/Height***REMOVED*** or offset[Width/Height***REMOVED*** or client[Width/Height***REMOVED***,
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ***REMOVED***, doc[ "scroll" + name ***REMOVED***,
						elem.body[ "offset" + name ***REMOVED***, doc[ "offset" + name ***REMOVED***,
						doc[ "client" + name ***REMOVED***
					***REMOVED***;
				***REMOVED***

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ***REMOVED*** :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra ***REMOVED***;
			***REMOVED***, type, chainable ? margin : undefined, chainable ***REMOVED***;
		***REMOVED***;
	***REMOVED*** ***REMOVED***;
***REMOVED*** ***REMOVED***;


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ***REMOVED***.split( " " ***REMOVED***,
	function( i, name ***REMOVED*** {

	// Handle event binding
	jQuery.fn[ name ***REMOVED*** = function( data, fn ***REMOVED*** {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ***REMOVED*** :
			this.trigger( name ***REMOVED***;
	***REMOVED***;
***REMOVED*** ***REMOVED***;

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ***REMOVED*** {
		return this.mouseenter( fnOver ***REMOVED***.mouseleave( fnOut || fnOver ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;




jQuery.fn.extend( {

	bind: function( types, data, fn ***REMOVED*** {
		return this.on( types, null, data, fn ***REMOVED***;
	***REMOVED***,
	unbind: function( types, fn ***REMOVED*** {
		return this.off( types, null, fn ***REMOVED***;
	***REMOVED***,

	delegate: function( selector, types, data, fn ***REMOVED*** {
		return this.on( types, selector, data, fn ***REMOVED***;
	***REMOVED***,
	undelegate: function( selector, types, fn ***REMOVED*** {

		// ( namespace ***REMOVED*** or ( selector, types [, fn***REMOVED*** ***REMOVED***
		return arguments.length === 1 ?
			this.off( selector, "**" ***REMOVED*** :
			this.off( types, selector || "**", fn ***REMOVED***;
	***REMOVED***
***REMOVED*** ***REMOVED***;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind***REMOVED***
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ***REMOVED*** {
	var tmp, args, proxy;

	if ( typeof context === "string" ***REMOVED*** {
		tmp = fn[ context ***REMOVED***;
		context = fn;
		fn = tmp;
	***REMOVED***

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ***REMOVED*** ***REMOVED*** {
		return undefined;
	***REMOVED***

	// Simulated bind
	args = slice.call( arguments, 2 ***REMOVED***;
	proxy = function(***REMOVED*** {
		return fn.apply( context || this, args.concat( slice.call( arguments ***REMOVED*** ***REMOVED*** ***REMOVED***;
	***REMOVED***;

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
***REMOVED***;

jQuery.holdReady = function( hold ***REMOVED*** {
	if ( hold ***REMOVED*** {
		jQuery.readyWait++;
	***REMOVED*** else {
		jQuery.ready( true ***REMOVED***;
	***REMOVED***
***REMOVED***;
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ***REMOVED*** {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects***REMOVED***
	// that can be coerced to finite numbers (gh-2662***REMOVED***
	var type = jQuery.type( obj ***REMOVED***;
	return ( type === "number" || type === "string" ***REMOVED*** &&

		// parseFloat NaNs numeric-cast false positives (""***REMOVED***
		// ...but misinterprets leading-number strings, particularly hex literals ("0x..."***REMOVED***
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ***REMOVED*** ***REMOVED***;
***REMOVED***;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ***REMOVED*** {
	define( "jquery", [***REMOVED***, function(***REMOVED*** {
		return jQuery;
	***REMOVED*** ***REMOVED***;
***REMOVED***




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ***REMOVED*** {
	if ( window.$ === jQuery ***REMOVED*** {
		window.$ = _$;
	***REMOVED***

	if ( deep && window.jQuery === jQuery ***REMOVED*** {
		window.jQuery = _jQuery;
	***REMOVED***

	return jQuery;
***REMOVED***;

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557***REMOVED***
// and CommonJS for browser emulators (#13566***REMOVED***
if ( !noGlobal ***REMOVED*** {
	window.jQuery = window.$ = jQuery;
***REMOVED***




return jQuery;
***REMOVED*** ***REMOVED***;
