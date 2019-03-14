/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory***REMOVED*** {
  if (typeof define === 'function' && define.amd***REMOVED*** {
    // AMD. Register as an anonymous module.
    define(['jquery'***REMOVED***, factory***REMOVED***;
  ***REMOVED*** else if (typeof exports === 'object'***REMOVED*** {
    // Node/CommonJS
    factory(require('jquery'***REMOVED******REMOVED***;
  ***REMOVED*** else {
    // Browser globals
    factory(jQuery***REMOVED***;
  ***REMOVED***
***REMOVED***(function (jQuery***REMOVED*** {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`***REMOVED*** in a function that
  // returns the AMD loader references.
  var S2 =
(function (***REMOVED*** {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd***REMOVED*** {
    var S2 = jQuery.fn.select2.amd;
  ***REMOVED***
var S2;(function (***REMOVED*** { if (!S2 || !S2.requirejs***REMOVED*** {
if (!S2***REMOVED*** { S2 = {***REMOVED***; ***REMOVED*** else { require = S2; ***REMOVED***
/**
 * @license almond 0.3.1 Copyright (c***REMOVED*** 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef***REMOVED*** {
    var main, req, makeMap, handlers,
        defined = {***REMOVED***,
        waiting = {***REMOVED***,
        config = {***REMOVED***,
        defining = {***REMOVED***,
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [***REMOVED***.slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop***REMOVED*** {
        return hasOwn.call(obj, prop***REMOVED***;
***REMOVED***

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String***REMOVED*** name the relative name
     * @param {String***REMOVED*** baseName a real name that the name arg is relative
     * to.
     * @returns {String***REMOVED*** normalized name
     */
    function normalize(name, baseName***REMOVED*** {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"***REMOVED***,
            map = config.map,
            starMap = (map && map['*'***REMOVED******REMOVED*** || {***REMOVED***;

        //Adjust any relative paths.
        if (name && name.charAt(0***REMOVED*** === "."***REMOVED*** {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName***REMOVED*** {
                name = name.split('/'***REMOVED***;
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex***REMOVED******REMOVED******REMOVED*** {
                    name[lastIndex***REMOVED*** = name[lastIndex***REMOVED***.replace(jsSuffixRegExp, ''***REMOVED***;
            ***REMOVED***

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1***REMOVED***.concat(name***REMOVED***;

                //start trimDots
                for (i = 0; i < name.length; i += 1***REMOVED*** {
                    part = name[i***REMOVED***;
                    if (part === "."***REMOVED*** {
                        name.splice(i, 1***REMOVED***;
                        i -= 1;
                ***REMOVED*** else if (part === ".."***REMOVED*** {
                        if (i === 1 && (name[2***REMOVED*** === '..' || name[0***REMOVED*** === '..'***REMOVED******REMOVED*** {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                    ***REMOVED*** else if (i > 0***REMOVED*** {
                            name.splice(i - 1, 2***REMOVED***;
                            i -= 2;
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
                //end trimDots

                name = name.join("/"***REMOVED***;
        ***REMOVED*** else if (name.indexOf('./'***REMOVED*** === 0***REMOVED*** {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2***REMOVED***;
        ***REMOVED***
    ***REMOVED***

        //Apply map config if available.
        if ((baseParts || starMap***REMOVED*** && map***REMOVED*** {
            nameParts = name.split('/'***REMOVED***;

            for (i = nameParts.length; i > 0; i -= 1***REMOVED*** {
                nameSegment = nameParts.slice(0, i***REMOVED***.join("/"***REMOVED***;

                if (baseParts***REMOVED*** {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1***REMOVED*** {
                        mapValue = map[baseParts.slice(0, j***REMOVED***.join('/'***REMOVED******REMOVED***;

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue***REMOVED*** {
                            mapValue = mapValue[nameSegment***REMOVED***;
                            if (mapValue***REMOVED*** {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                        ***REMOVED***
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***

                if (foundMap***REMOVED*** {
                    break;
            ***REMOVED***

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment***REMOVED******REMOVED*** {
                    foundStarMap = starMap[nameSegment***REMOVED***;
                    starI = i;
            ***REMOVED***
        ***REMOVED***

            if (!foundMap && foundStarMap***REMOVED*** {
                foundMap = foundStarMap;
                foundI = starI;
        ***REMOVED***

            if (foundMap***REMOVED*** {
                nameParts.splice(0, foundI, foundMap***REMOVED***;
                name = nameParts.join('/'***REMOVED***;
        ***REMOVED***
    ***REMOVED***

        return name;
***REMOVED***

    function makeRequire(relName, forceSync***REMOVED*** {
        return function (***REMOVED*** {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0***REMOVED***;

            //If first arg is not require('string'***REMOVED***, and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0***REMOVED*** !== 'string' && args.length === 1***REMOVED*** {
                args.push(null***REMOVED***;
        ***REMOVED***
            return req.apply(undef, args.concat([relName, forceSync***REMOVED******REMOVED******REMOVED***;
    ***REMOVED***;
***REMOVED***

    function makeNormalize(relName***REMOVED*** {
        return function (name***REMOVED*** {
            return normalize(name, relName***REMOVED***;
    ***REMOVED***;
***REMOVED***

    function makeLoad(depName***REMOVED*** {
        return function (value***REMOVED*** {
            defined[depName***REMOVED*** = value;
    ***REMOVED***;
***REMOVED***

    function callDep(name***REMOVED*** {
        if (hasProp(waiting, name***REMOVED******REMOVED*** {
            var args = waiting[name***REMOVED***;
            delete waiting[name***REMOVED***;
            defining[name***REMOVED*** = true;
            main.apply(undef, args***REMOVED***;
    ***REMOVED***

        if (!hasProp(defined, name***REMOVED*** && !hasProp(defining, name***REMOVED******REMOVED*** {
            throw new Error('No ' + name***REMOVED***;
    ***REMOVED***
        return defined[name***REMOVED***;
***REMOVED***

    //Turns a plugin!resource to [plugin, resource***REMOVED***
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name***REMOVED*** {
        var prefix,
            index = name ? name.indexOf('!'***REMOVED*** : -1;
        if (index > -1***REMOVED*** {
            prefix = name.substring(0, index***REMOVED***;
            name = name.substring(index + 1, name.length***REMOVED***;
    ***REMOVED***
        return [prefix, name***REMOVED***;
***REMOVED***

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName***REMOVED*** {
        var plugin,
            parts = splitPrefix(name***REMOVED***,
            prefix = parts[0***REMOVED***;

        name = parts[1***REMOVED***;

        if (prefix***REMOVED*** {
            prefix = normalize(prefix, relName***REMOVED***;
            plugin = callDep(prefix***REMOVED***;
    ***REMOVED***

        //Normalize according
        if (prefix***REMOVED*** {
            if (plugin && plugin.normalize***REMOVED*** {
                name = plugin.normalize(name, makeNormalize(relName***REMOVED******REMOVED***;
        ***REMOVED*** else {
                name = normalize(name, relName***REMOVED***;
        ***REMOVED***
    ***REMOVED*** else {
            name = normalize(name, relName***REMOVED***;
            parts = splitPrefix(name***REMOVED***;
            prefix = parts[0***REMOVED***;
            name = parts[1***REMOVED***;
            if (prefix***REMOVED*** {
                plugin = callDep(prefix***REMOVED***;
        ***REMOVED***
    ***REMOVED***

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
    ***REMOVED***;
***REMOVED***;

    function makeConfig(name***REMOVED*** {
        return function (***REMOVED*** {
            return (config && config.config && config.config[name***REMOVED******REMOVED*** || {***REMOVED***;
    ***REMOVED***;
***REMOVED***

    handlers = {
        require: function (name***REMOVED*** {
            return makeRequire(name***REMOVED***;
***REMOVED***
        exports: function (name***REMOVED*** {
            var e = defined[name***REMOVED***;
            if (typeof e !== 'undefined'***REMOVED*** {
                return e;
        ***REMOVED*** else {
                return (defined[name***REMOVED*** = {***REMOVED******REMOVED***;
        ***REMOVED***
***REMOVED***
        module: function (name***REMOVED*** {
            return {
                id: name,
                uri: '',
                exports: defined[name***REMOVED***,
                config: makeConfig(name***REMOVED***
        ***REMOVED***;
    ***REMOVED***
***REMOVED***;

    main = function (name, deps, callback, relName***REMOVED*** {
        var cjsModule, depName, ret, map, i,
            args = [***REMOVED***,
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function'***REMOVED*** {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module***REMOVED*** if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'***REMOVED*** : deps;
            for (i = 0; i < deps.length; i += 1***REMOVED*** {
                map = makeMap(deps[i***REMOVED***, relName***REMOVED***;
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require"***REMOVED*** {
                    args[i***REMOVED*** = handlers.require(name***REMOVED***;
            ***REMOVED*** else if (depName === "exports"***REMOVED*** {
                    //CommonJS module spec 1.1
                    args[i***REMOVED*** = handlers.exports(name***REMOVED***;
                    usingExports = true;
            ***REMOVED*** else if (depName === "module"***REMOVED*** {
                    //CommonJS module spec 1.1
                    cjsModule = args[i***REMOVED*** = handlers.module(name***REMOVED***;
            ***REMOVED*** else if (hasProp(defined, depName***REMOVED*** ||
                           hasProp(waiting, depName***REMOVED*** ||
                           hasProp(defining, depName***REMOVED******REMOVED*** {
                    args[i***REMOVED*** = callDep(depName***REMOVED***;
            ***REMOVED*** else if (map.p***REMOVED*** {
                    map.p.load(map.n, makeRequire(relName, true***REMOVED***, makeLoad(depName***REMOVED***, {***REMOVED******REMOVED***;
                    args[i***REMOVED*** = defined[depName***REMOVED***;
            ***REMOVED*** else {
                    throw new Error(name + ' missing ' + depName***REMOVED***;
            ***REMOVED***
        ***REMOVED***

            ret = callback ? callback.apply(defined[name***REMOVED***, args***REMOVED*** : undefined;

            if (name***REMOVED*** {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name***REMOVED******REMOVED*** {
                    defined[name***REMOVED*** = cjsModule.exports;
            ***REMOVED*** else if (ret !== undef || !usingExports***REMOVED*** {
                    //Use the return value from the function.
                    defined[name***REMOVED*** = ret;
            ***REMOVED***
        ***REMOVED***
    ***REMOVED*** else if (name***REMOVED*** {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name***REMOVED*** = callback;
    ***REMOVED***
***REMOVED***;

    requirejs = require = req = function (deps, callback, relName, forceSync, alt***REMOVED*** {
        if (typeof deps === "string"***REMOVED*** {
            if (handlers[deps***REMOVED******REMOVED*** {
                //callback in this case is really relName
                return handlers[deps***REMOVED***(callback***REMOVED***;
        ***REMOVED***
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed***REMOVED***
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback***REMOVED***.f***REMOVED***;
    ***REMOVED*** else if (!deps.splice***REMOVED*** {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps***REMOVED*** {
                req(config.deps, config.callback***REMOVED***;
        ***REMOVED***
            if (!callback***REMOVED*** {
                return;
        ***REMOVED***

            if (callback.splice***REMOVED*** {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
        ***REMOVED*** else {
                deps = undef;
        ***REMOVED***
    ***REMOVED***

        //Support require(['a'***REMOVED******REMOVED***
        callback = callback || function (***REMOVED*** {***REMOVED***;

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function'***REMOVED*** {
            relName = forceSync;
            forceSync = alt;
    ***REMOVED***

        //Simulate async callback;
        if (forceSync***REMOVED*** {
            main(undef, deps, callback, relName***REMOVED***;
    ***REMOVED*** else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id'***REMOVED*** instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function (***REMOVED*** {
                main(undef, deps, callback, relName***REMOVED***;
    ***REMOVED*** 4***REMOVED***;
    ***REMOVED***

        return req;
***REMOVED***;

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg***REMOVED*** {
        return req(cfg***REMOVED***;
***REMOVED***;

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback***REMOVED*** {
        if (typeof name !== 'string'***REMOVED*** {
            throw new Error('See almond README: incorrect module build, no module name'***REMOVED***;
    ***REMOVED***

        //This module may not have dependencies
        if (!deps.splice***REMOVED*** {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [***REMOVED***;
    ***REMOVED***

        if (!hasProp(defined, name***REMOVED*** && !hasProp(waiting, name***REMOVED******REMOVED*** {
            waiting[name***REMOVED*** = [name, deps, callback***REMOVED***;
    ***REMOVED***
***REMOVED***;

    define.amd = {
        jQuery: true
***REMOVED***;
***REMOVED***(***REMOVED******REMOVED***;

S2.requirejs = requirejs;S2.require = require;S2.define = define;
***REMOVED***
***REMOVED***(***REMOVED******REMOVED***;
S2.define("almond", function(***REMOVED***{***REMOVED******REMOVED***;

/* global jQuery:false, $:false */
S2.define('jquery',[***REMOVED***,function (***REMOVED*** {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error***REMOVED*** {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    ***REMOVED***;
  ***REMOVED***

  return _$;
***REMOVED******REMOVED***;

S2.define('select2/utils',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  var Utils = {***REMOVED***;

  Utils.Extend = function (ChildClass, SuperClass***REMOVED*** {
    var __hasProp = {***REMOVED***.hasOwnProperty;

    function BaseConstructor (***REMOVED*** {
      this.constructor = ChildClass;
***REMOVED***

    for (var key in SuperClass***REMOVED*** {
      if (__hasProp.call(SuperClass, key***REMOVED******REMOVED*** {
        ChildClass[key***REMOVED*** = SuperClass[key***REMOVED***;
  ***REMOVED***
***REMOVED***

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor(***REMOVED***;
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  ***REMOVED***;

  function getMethods (theClass***REMOVED*** {
    var proto = theClass.prototype;

    var methods = [***REMOVED***;

    for (var methodName in proto***REMOVED*** {
      var m = proto[methodName***REMOVED***;

      if (typeof m !== 'function'***REMOVED*** {
        continue;
  ***REMOVED***

      if (methodName === 'constructor'***REMOVED*** {
        continue;
  ***REMOVED***

      methods.push(methodName***REMOVED***;
***REMOVED***

    return methods;
  ***REMOVED***

  Utils.Decorate = function (SuperClass, DecoratorClass***REMOVED*** {
    var decoratedMethods = getMethods(DecoratorClass***REMOVED***;
    var superMethods = getMethods(SuperClass***REMOVED***;

    function DecoratedClass (***REMOVED*** {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0***REMOVED*** {
        unshift.call(arguments, SuperClass.prototype.constructor***REMOVED***;

        calledConstructor = DecoratorClass.prototype.constructor;
  ***REMOVED***

      calledConstructor.apply(this, arguments***REMOVED***;
***REMOVED***

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr (***REMOVED*** {
      this.constructor = DecoratedClass;
***REMOVED***

    DecoratedClass.prototype = new ctr(***REMOVED***;

    for (var m = 0; m < superMethods.length; m++***REMOVED*** {
        var superMethod = superMethods[m***REMOVED***;

        DecoratedClass.prototype[superMethod***REMOVED*** =
          SuperClass.prototype[superMethod***REMOVED***;
***REMOVED***

    var calledMethod = function (methodName***REMOVED*** {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function (***REMOVED*** {***REMOVED***;

      if (methodName in DecoratedClass.prototype***REMOVED*** {
        originalMethod = DecoratedClass.prototype[methodName***REMOVED***;
  ***REMOVED***

      var decoratedMethod = DecoratorClass.prototype[methodName***REMOVED***;

      return function (***REMOVED*** {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod***REMOVED***;

        return decoratedMethod.apply(this, arguments***REMOVED***;
  ***REMOVED***;
***REMOVED***;

    for (var d = 0; d < decoratedMethods.length; d++***REMOVED*** {
      var decoratedMethod = decoratedMethods[d***REMOVED***;

      DecoratedClass.prototype[decoratedMethod***REMOVED*** = calledMethod(decoratedMethod***REMOVED***;
***REMOVED***

    return DecoratedClass;
  ***REMOVED***;

  var Observable = function (***REMOVED*** {
    this.listeners = {***REMOVED***;
  ***REMOVED***;

  Observable.prototype.on = function (event, callback***REMOVED*** {
    this.listeners = this.listeners || {***REMOVED***;

    if (event in this.listeners***REMOVED*** {
      this.listeners[event***REMOVED***.push(callback***REMOVED***;
***REMOVED*** else {
      this.listeners[event***REMOVED*** = [callback***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Observable.prototype.trigger = function (event***REMOVED*** {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1***REMOVED***;

    this.listeners = this.listeners || {***REMOVED***;

    // Params should always come in as an array
    if (params == null***REMOVED*** {
      params = [***REMOVED***;
***REMOVED***

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0***REMOVED*** {
      params.push({***REMOVED******REMOVED***;
***REMOVED***

    // Set the `_type` of the first object to the event
    params[0***REMOVED***._type = event;

    if (event in this.listeners***REMOVED*** {
      this.invoke(this.listeners[event***REMOVED***, slice.call(arguments, 1***REMOVED******REMOVED***;
***REMOVED***

    if ('*' in this.listeners***REMOVED*** {
      this.invoke(this.listeners['*'***REMOVED***, arguments***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Observable.prototype.invoke = function (listeners, params***REMOVED*** {
    for (var i = 0, len = listeners.length; i < len; i++***REMOVED*** {
      listeners[i***REMOVED***.apply(this, params***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Utils.Observable = Observable;

  Utils.generateChars = function (length***REMOVED*** {
    var chars = '';

    for (var i = 0; i < length; i++***REMOVED*** {
      var randomChar = Math.floor(Math.random(***REMOVED*** * 36***REMOVED***;
      chars += randomChar.toString(36***REMOVED***;
***REMOVED***

    return chars;
  ***REMOVED***;

  Utils.bind = function (func, context***REMOVED*** {
    return function (***REMOVED*** {
      func.apply(context, arguments***REMOVED***;
***REMOVED***;
  ***REMOVED***;

  Utils._convertData = function (data***REMOVED*** {
    for (var originalKey in data***REMOVED*** {
      var keys = originalKey.split('-'***REMOVED***;

      var dataLevel = data;

      if (keys.length === 1***REMOVED*** {
        continue;
  ***REMOVED***

      for (var k = 0; k < keys.length; k++***REMOVED*** {
        var key = keys[k***REMOVED***;

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1***REMOVED***.toLowerCase(***REMOVED*** + key.substring(1***REMOVED***;

        if (!(key in dataLevel***REMOVED******REMOVED*** {
          dataLevel[key***REMOVED*** = {***REMOVED***;
    ***REMOVED***

        if (k == keys.length - 1***REMOVED*** {
          dataLevel[key***REMOVED*** = data[originalKey***REMOVED***;
    ***REMOVED***

        dataLevel = dataLevel[key***REMOVED***;
  ***REMOVED***

      delete data[originalKey***REMOVED***;
***REMOVED***

    return data;
  ***REMOVED***;

  Utils.hasScroll = function (index, el***REMOVED*** {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el***REMOVED***;
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible'***REMOVED******REMOVED*** {
      return false;
***REMOVED***

    if (overflowX === 'scroll' || overflowY === 'scroll'***REMOVED*** {
      return true;
***REMOVED***

    return ($el.innerHeight(***REMOVED*** < el.scrollHeight ||
      $el.innerWidth(***REMOVED*** < el.scrollWidth***REMOVED***;
  ***REMOVED***;

  Utils.escapeMarkup = function (markup***REMOVED*** {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
***REMOVED***;

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string'***REMOVED*** {
      return markup;
***REMOVED***

    return String(markup***REMOVED***.replace(/[&<>"'\/\\***REMOVED***/g, function (match***REMOVED*** {
      return replaceMap[match***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes***REMOVED*** {
    // jQuery 1.7.x does not support $.fn.append(***REMOVED*** with an array
    // Fall back to a jQuery object collection using $.fn.add(***REMOVED***
    if ($.fn.jquery.substr(0, 3***REMOVED*** === '1.7'***REMOVED*** {
      var $jqNodes = $(***REMOVED***;

      $.map($nodes, function (node***REMOVED*** {
        $jqNodes = $jqNodes.add(node***REMOVED***;
  ***REMOVED******REMOVED***;

      $nodes = $jqNodes;
***REMOVED***

    $element.append($nodes***REMOVED***;
  ***REMOVED***;

  return Utils;
***REMOVED******REMOVED***;

S2.define('select2/results',[
  'jquery',
  './utils'
***REMOVED***, function ($, Utils***REMOVED*** {
  function Results ($element, options, dataAdapter***REMOVED*** {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this***REMOVED***;
  ***REMOVED***

  Utils.Extend(Results, Utils.Observable***REMOVED***;

  Results.prototype.render = function (***REMOVED*** {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    ***REMOVED***;

    if (this.options.get('multiple'***REMOVED******REMOVED*** {
      $results.attr('aria-multiselectable', 'true'***REMOVED***;
***REMOVED***

    this.$results = $results;

    return $results;
  ***REMOVED***;

  Results.prototype.clear = function (***REMOVED*** {
    this.$results.empty(***REMOVED***;
  ***REMOVED***;

  Results.prototype.displayMessage = function (params***REMOVED*** {
    var escapeMarkup = this.options.get('escapeMarkup'***REMOVED***;

    this.clear(***REMOVED***;
    this.hideLoading(***REMOVED***;

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    ***REMOVED***;

    var message = this.options.get('translations'***REMOVED***.get(params.message***REMOVED***;

    $message.append(
      escapeMarkup(
        message(params.args***REMOVED***
      ***REMOVED***
    ***REMOVED***;

    $message[0***REMOVED***.className += ' select2-results__message';

    this.$results.append($message***REMOVED***;
  ***REMOVED***;

  Results.prototype.hideMessages = function (***REMOVED*** {
    this.$results.find('.select2-results__message'***REMOVED***.remove(***REMOVED***;
  ***REMOVED***;

  Results.prototype.append = function (data***REMOVED*** {
    this.hideLoading(***REMOVED***;

    var $options = [***REMOVED***;

    if (data.results == null || data.results.length === 0***REMOVED*** {
      if (this.$results.children(***REMOVED***.length === 0***REMOVED*** {
        this.trigger('results:message', {
          message: 'noResults'
    ***REMOVED******REMOVED***;
  ***REMOVED***

      return;
***REMOVED***

    data.results = this.sort(data.results***REMOVED***;

    for (var d = 0; d < data.results.length; d++***REMOVED*** {
      var item = data.results[d***REMOVED***;

      var $option = this.option(item***REMOVED***;

      $options.push($option***REMOVED***;
***REMOVED***

    this.$results.append($options***REMOVED***;
  ***REMOVED***;

  Results.prototype.position = function ($results, $dropdown***REMOVED*** {
    var $resultsContainer = $dropdown.find('.select2-results'***REMOVED***;
    $resultsContainer.append($results***REMOVED***;
  ***REMOVED***;

  Results.prototype.sort = function (data***REMOVED*** {
    var sorter = this.options.get('sorter'***REMOVED***;

    return sorter(data***REMOVED***;
  ***REMOVED***;

  Results.prototype.highlightFirstItem = function (***REMOVED*** {
    var $options = this.$results
      .find('.select2-results__option[aria-selected***REMOVED***'***REMOVED***;

    var $selected = $options.filter('[aria-selected=true***REMOVED***'***REMOVED***;

    // Check if there are any selected options
    if ($selected.length > 0***REMOVED*** {
      // If there are selected options, highlight the first
      $selected.first(***REMOVED***.trigger('mouseenter'***REMOVED***;
***REMOVED*** else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first(***REMOVED***.trigger('mouseenter'***REMOVED***;
***REMOVED***

    this.ensureHighlightVisible(***REMOVED***;
  ***REMOVED***;

  Results.prototype.setClasses = function (***REMOVED*** {
    var self = this;

    this.data.current(function (selected***REMOVED*** {
      var selectedIds = $.map(selected, function (s***REMOVED*** {
        return s.id.toString(***REMOVED***;
  ***REMOVED******REMOVED***;

      var $options = self.$results
        .find('.select2-results__option[aria-selected***REMOVED***'***REMOVED***;

      $options.each(function (***REMOVED*** {
        var $option = $(this***REMOVED***;

        var item = $.data(this, 'data'***REMOVED***;

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected***REMOVED*** ||
            (item.element == null && $.inArray(id, selectedIds***REMOVED*** > -1***REMOVED******REMOVED*** {
          $option.attr('aria-selected', 'true'***REMOVED***;
    ***REMOVED*** else {
          $option.attr('aria-selected', 'false'***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;

***REMOVED******REMOVED***;
  ***REMOVED***;

  Results.prototype.showLoading = function (params***REMOVED*** {
    this.hideLoading(***REMOVED***;

    var loadingMore = this.options.get('translations'***REMOVED***.get('searching'***REMOVED***;

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params***REMOVED***
***REMOVED***;
    var $loading = this.option(loading***REMOVED***;
    $loading.className += ' loading-results';

    this.$results.prepend($loading***REMOVED***;
  ***REMOVED***;

  Results.prototype.hideLoading = function (***REMOVED*** {
    this.$results.find('.loading-results'***REMOVED***.remove(***REMOVED***;
  ***REMOVED***;

  Results.prototype.option = function (data***REMOVED*** {
    var option = document.createElement('li'***REMOVED***;
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
***REMOVED***;

    if (data.disabled***REMOVED*** {
      delete attrs['aria-selected'***REMOVED***;
      attrs['aria-disabled'***REMOVED*** = 'true';
***REMOVED***

    if (data.id == null***REMOVED*** {
      delete attrs['aria-selected'***REMOVED***;
***REMOVED***

    if (data._resultId != null***REMOVED*** {
      option.id = data._resultId;
***REMOVED***

    if (data.title***REMOVED*** {
      option.title = data.title;
***REMOVED***

    if (data.children***REMOVED*** {
      attrs.role = 'group';
      attrs['aria-label'***REMOVED*** = data.text;
      delete attrs['aria-selected'***REMOVED***;
***REMOVED***

    for (var attr in attrs***REMOVED*** {
      var val = attrs[attr***REMOVED***;

      option.setAttribute(attr, val***REMOVED***;
***REMOVED***

    if (data.children***REMOVED*** {
      var $option = $(option***REMOVED***;

      var label = document.createElement('strong'***REMOVED***;
      label.className = 'select2-results__group';

      var $label = $(label***REMOVED***;
      this.template(data, label***REMOVED***;

      var $children = [***REMOVED***;

      for (var c = 0; c < data.children.length; c++***REMOVED*** {
        var child = data.children[c***REMOVED***;

        var $child = this.option(child***REMOVED***;

        $children.push($child***REMOVED***;
  ***REMOVED***

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
  ***REMOVED******REMOVED***;

      $childrenContainer.append($children***REMOVED***;

      $option.append(label***REMOVED***;
      $option.append($childrenContainer***REMOVED***;
***REMOVED*** else {
      this.template(data, option***REMOVED***;
***REMOVED***

    $.data(option, 'data', data***REMOVED***;

    return option;
  ***REMOVED***;

  Results.prototype.bind = function (container, $container***REMOVED*** {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id***REMOVED***;

    container.on('results:all', function (params***REMOVED*** {
      self.clear(***REMOVED***;
      self.append(params.data***REMOVED***;

      if (container.isOpen(***REMOVED******REMOVED*** {
        self.setClasses(***REMOVED***;
        self.highlightFirstItem(***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('results:append', function (params***REMOVED*** {
      self.append(params.data***REMOVED***;

      if (container.isOpen(***REMOVED******REMOVED*** {
        self.setClasses(***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('query', function (params***REMOVED*** {
      self.hideMessages(***REMOVED***;
      self.showLoading(params***REMOVED***;
***REMOVED******REMOVED***;

    container.on('select', function (***REMOVED*** {
      if (!container.isOpen(***REMOVED******REMOVED*** {
        return;
  ***REMOVED***

      self.setClasses(***REMOVED***;
      self.highlightFirstItem(***REMOVED***;
***REMOVED******REMOVED***;

    container.on('unselect', function (***REMOVED*** {
      if (!container.isOpen(***REMOVED******REMOVED*** {
        return;
  ***REMOVED***

      self.setClasses(***REMOVED***;
      self.highlightFirstItem(***REMOVED***;
***REMOVED******REMOVED***;

    container.on('open', function (***REMOVED*** {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true'***REMOVED***;
      self.$results.attr('aria-hidden', 'false'***REMOVED***;

      self.setClasses(***REMOVED***;
      self.ensureHighlightVisible(***REMOVED***;
***REMOVED******REMOVED***;

    container.on('close', function (***REMOVED*** {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false'***REMOVED***;
      self.$results.attr('aria-hidden', 'true'***REMOVED***;
      self.$results.removeAttr('aria-activedescendant'***REMOVED***;
***REMOVED******REMOVED***;

    container.on('results:toggle', function (***REMOVED*** {
      var $highlighted = self.getHighlightedResults(***REMOVED***;

      if ($highlighted.length === 0***REMOVED*** {
        return;
  ***REMOVED***

      $highlighted.trigger('mouseup'***REMOVED***;
***REMOVED******REMOVED***;

    container.on('results:select', function (***REMOVED*** {
      var $highlighted = self.getHighlightedResults(***REMOVED***;

      if ($highlighted.length === 0***REMOVED*** {
        return;
  ***REMOVED***

      var data = $highlighted.data('data'***REMOVED***;

      if ($highlighted.attr('aria-selected'***REMOVED*** == 'true'***REMOVED*** {
        self.trigger('close', {***REMOVED******REMOVED***;
  ***REMOVED*** else {
        self.trigger('select', {
          data: data
    ***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('results:previous', function (***REMOVED*** {
      var $highlighted = self.getHighlightedResults(***REMOVED***;

      var $options = self.$results.find('[aria-selected***REMOVED***'***REMOVED***;

      var currentIndex = $options.index($highlighted***REMOVED***;

      // If we are already at te top, don't move further
      if (currentIndex === 0***REMOVED*** {
        return;
  ***REMOVED***

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0***REMOVED*** {
        nextIndex = 0;
  ***REMOVED***

      var $next = $options.eq(nextIndex***REMOVED***;

      $next.trigger('mouseenter'***REMOVED***;

      var currentOffset = self.$results.offset(***REMOVED***.top;
      var nextTop = $next.offset(***REMOVED***.top;
      var nextOffset = self.$results.scrollTop(***REMOVED*** + (nextTop - currentOffset***REMOVED***;

      if (nextIndex === 0***REMOVED*** {
        self.$results.scrollTop(0***REMOVED***;
  ***REMOVED*** else if (nextTop - currentOffset < 0***REMOVED*** {
        self.$results.scrollTop(nextOffset***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('results:next', function (***REMOVED*** {
      var $highlighted = self.getHighlightedResults(***REMOVED***;

      var $options = self.$results.find('[aria-selected***REMOVED***'***REMOVED***;

      var currentIndex = $options.index($highlighted***REMOVED***;

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length***REMOVED*** {
        return;
  ***REMOVED***

      var $next = $options.eq(nextIndex***REMOVED***;

      $next.trigger('mouseenter'***REMOVED***;

      var currentOffset = self.$results.offset(***REMOVED***.top +
        self.$results.outerHeight(false***REMOVED***;
      var nextBottom = $next.offset(***REMOVED***.top + $next.outerHeight(false***REMOVED***;
      var nextOffset = self.$results.scrollTop(***REMOVED*** + nextBottom - currentOffset;

      if (nextIndex === 0***REMOVED*** {
        self.$results.scrollTop(0***REMOVED***;
  ***REMOVED*** else if (nextBottom > currentOffset***REMOVED*** {
        self.$results.scrollTop(nextOffset***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('results:focus', function (params***REMOVED*** {
      params.element.addClass('select2-results__option--highlighted'***REMOVED***;
***REMOVED******REMOVED***;

    container.on('results:message', function (params***REMOVED*** {
      self.displayMessage(params***REMOVED***;
***REMOVED******REMOVED***;

    if ($.fn.mousewheel***REMOVED*** {
      this.$results.on('mousewheel', function (e***REMOVED*** {
        var top = self.$results.scrollTop(***REMOVED***;

        var bottom = self.$results.get(0***REMOVED***.scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height(***REMOVED***;

        if (isAtTop***REMOVED*** {
          self.$results.scrollTop(0***REMOVED***;

          e.preventDefault(***REMOVED***;
          e.stopPropagation(***REMOVED***;
    ***REMOVED*** else if (isAtBottom***REMOVED*** {
          self.$results.scrollTop(
            self.$results.get(0***REMOVED***.scrollHeight - self.$results.height(***REMOVED***
          ***REMOVED***;

          e.preventDefault(***REMOVED***;
          e.stopPropagation(***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
***REMOVED***

    this.$results.on('mouseup', '.select2-results__option[aria-selected***REMOVED***',
      function (evt***REMOVED*** {
      var $this = $(this***REMOVED***;

      var data = $this.data('data'***REMOVED***;

      if ($this.attr('aria-selected'***REMOVED*** === 'true'***REMOVED*** {
        if (self.options.get('multiple'***REMOVED******REMOVED*** {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
      ***REMOVED******REMOVED***;
    ***REMOVED*** else {
          self.trigger('close', {***REMOVED******REMOVED***;
    ***REMOVED***

        return;
  ***REMOVED***

      self.trigger('select', {
        originalEvent: evt,
        data: data
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    this.$results.on('mouseenter', '.select2-results__option[aria-selected***REMOVED***',
      function (evt***REMOVED*** {
      var data = $(this***REMOVED***.data('data'***REMOVED***;

      self.getHighlightedResults(***REMOVED***
          .removeClass('select2-results__option--highlighted'***REMOVED***;

      self.trigger('results:focus', {
        data: data,
        element: $(this***REMOVED***
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  Results.prototype.getHighlightedResults = function (***REMOVED*** {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted'***REMOVED***;

    return $highlighted;
  ***REMOVED***;

  Results.prototype.destroy = function (***REMOVED*** {
    this.$results.remove(***REMOVED***;
  ***REMOVED***;

  Results.prototype.ensureHighlightVisible = function (***REMOVED*** {
    var $highlighted = this.getHighlightedResults(***REMOVED***;

    if ($highlighted.length === 0***REMOVED*** {
      return;
***REMOVED***

    var $options = this.$results.find('[aria-selected***REMOVED***'***REMOVED***;

    var currentIndex = $options.index($highlighted***REMOVED***;

    var currentOffset = this.$results.offset(***REMOVED***.top;
    var nextTop = $highlighted.offset(***REMOVED***.top;
    var nextOffset = this.$results.scrollTop(***REMOVED*** + (nextTop - currentOffset***REMOVED***;

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false***REMOVED*** * 2;

    if (currentIndex <= 2***REMOVED*** {
      this.$results.scrollTop(0***REMOVED***;
***REMOVED*** else if (offsetDelta > this.$results.outerHeight(***REMOVED*** || offsetDelta < 0***REMOVED*** {
      this.$results.scrollTop(nextOffset***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Results.prototype.template = function (result, container***REMOVED*** {
    var template = this.options.get('templateResult'***REMOVED***;
    var escapeMarkup = this.options.get('escapeMarkup'***REMOVED***;

    var content = template(result, container***REMOVED***;

    if (content == null***REMOVED*** {
      container.style.display = 'none';
***REMOVED*** else if (typeof content === 'string'***REMOVED*** {
      container.innerHTML = escapeMarkup(content***REMOVED***;
***REMOVED*** else {
      $(container***REMOVED***.append(content***REMOVED***;
***REMOVED***
  ***REMOVED***;

  return Results;
***REMOVED******REMOVED***;

S2.define('select2/keys',[

***REMOVED***, function (***REMOVED*** {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  ***REMOVED***;

  return KEYS;
***REMOVED******REMOVED***;

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
***REMOVED***, function ($, Utils, KEYS***REMOVED*** {
  function BaseSelection ($element, options***REMOVED*** {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this***REMOVED***;
  ***REMOVED***

  Utils.Extend(BaseSelection, Utils.Observable***REMOVED***;

  BaseSelection.prototype.render = function (***REMOVED*** {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    ***REMOVED***;

    this._tabindex = 0;

    if (this.$element.data('old-tabindex'***REMOVED*** != null***REMOVED*** {
      this._tabindex = this.$element.data('old-tabindex'***REMOVED***;
***REMOVED*** else if (this.$element.attr('tabindex'***REMOVED*** != null***REMOVED*** {
      this._tabindex = this.$element.attr('tabindex'***REMOVED***;
***REMOVED***

    $selection.attr('title', this.$element.attr('title'***REMOVED******REMOVED***;
    $selection.attr('tabindex', this._tabindex***REMOVED***;

    this.$selection = $selection;

    return $selection;
  ***REMOVED***;

  BaseSelection.prototype.bind = function (container, $container***REMOVED*** {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt***REMOVED*** {
      self.trigger('focus', evt***REMOVED***;
***REMOVED******REMOVED***;

    this.$selection.on('blur', function (evt***REMOVED*** {
      self._handleBlur(evt***REMOVED***;
***REMOVED******REMOVED***;

    this.$selection.on('keydown', function (evt***REMOVED*** {
      self.trigger('keypress', evt***REMOVED***;

      if (evt.which === KEYS.SPACE***REMOVED*** {
        evt.preventDefault(***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('results:focus', function (params***REMOVED*** {
      self.$selection.attr('aria-activedescendant', params.data._resultId***REMOVED***;
***REMOVED******REMOVED***;

    container.on('selection:update', function (params***REMOVED*** {
      self.update(params.data***REMOVED***;
***REMOVED******REMOVED***;

    container.on('open', function (***REMOVED*** {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true'***REMOVED***;
      self.$selection.attr('aria-owns', resultsId***REMOVED***;

      self._attachCloseHandler(container***REMOVED***;
***REMOVED******REMOVED***;

    container.on('close', function (***REMOVED*** {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false'***REMOVED***;
      self.$selection.removeAttr('aria-activedescendant'***REMOVED***;
      self.$selection.removeAttr('aria-owns'***REMOVED***;

      self.$selection.focus(***REMOVED***;

      self._detachCloseHandler(container***REMOVED***;
***REMOVED******REMOVED***;

    container.on('enable', function (***REMOVED*** {
      self.$selection.attr('tabindex', self._tabindex***REMOVED***;
***REMOVED******REMOVED***;

    container.on('disable', function (***REMOVED*** {
      self.$selection.attr('tabindex', '-1'***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  BaseSelection.prototype._handleBlur = function (evt***REMOVED*** {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function (***REMOVED*** {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0***REMOVED******REMOVED*** ||
        ($.contains(self.$selection[0***REMOVED***, document.activeElement***REMOVED******REMOVED***
      ***REMOVED*** {
        return;
  ***REMOVED***

      self.trigger('blur', evt***REMOVED***;
***REMOVED*** 1***REMOVED***;
  ***REMOVED***;

  BaseSelection.prototype._attachCloseHandler = function (container***REMOVED*** {
    var self = this;

    $(document.body***REMOVED***.on('mousedown.select2.' + container.id, function (e***REMOVED*** {
      var $target = $(e.target***REMOVED***;

      var $select = $target.closest('.select2'***REMOVED***;

      var $all = $('.select2.select2-container--open'***REMOVED***;

      $all.each(function (***REMOVED*** {
        var $this = $(this***REMOVED***;

        if (this == $select[0***REMOVED******REMOVED*** {
          return;
    ***REMOVED***

        var $element = $this.data('element'***REMOVED***;

        $element.select2('close'***REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  BaseSelection.prototype._detachCloseHandler = function (container***REMOVED*** {
    $(document.body***REMOVED***.off('mousedown.select2.' + container.id***REMOVED***;
  ***REMOVED***;

  BaseSelection.prototype.position = function ($selection, $container***REMOVED*** {
    var $selectionContainer = $container.find('.selection'***REMOVED***;
    $selectionContainer.append($selection***REMOVED***;
  ***REMOVED***;

  BaseSelection.prototype.destroy = function (***REMOVED*** {
    this._detachCloseHandler(this.container***REMOVED***;
  ***REMOVED***;

  BaseSelection.prototype.update = function (data***REMOVED*** {
    throw new Error('The `update` method must be defined in child classes.'***REMOVED***;
  ***REMOVED***;

  return BaseSelection;
***REMOVED******REMOVED***;

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
***REMOVED***, function ($, BaseSelection, Utils, KEYS***REMOVED*** {
  function SingleSelection (***REMOVED*** {
    SingleSelection.__super__.constructor.apply(this, arguments***REMOVED***;
  ***REMOVED***

  Utils.Extend(SingleSelection, BaseSelection***REMOVED***;

  SingleSelection.prototype.render = function (***REMOVED*** {
    var $selection = SingleSelection.__super__.render.call(this***REMOVED***;

    $selection.addClass('select2-selection--single'***REMOVED***;

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    ***REMOVED***;

    return $selection;
  ***REMOVED***;

  SingleSelection.prototype.bind = function (container, $container***REMOVED*** {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments***REMOVED***;

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered'***REMOVED***.attr('id', id***REMOVED***;
    this.$selection.attr('aria-labelledby', id***REMOVED***;

    this.$selection.on('mousedown', function (evt***REMOVED*** {
      // Only respond to left clicks
      if (evt.which !== 1***REMOVED*** {
        return;
  ***REMOVED***

      self.trigger('toggle', {
        originalEvent: evt
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    this.$selection.on('focus', function (evt***REMOVED*** {
      // User focuses on the container
***REMOVED******REMOVED***;

    this.$selection.on('blur', function (evt***REMOVED*** {
      // User exits the container
***REMOVED******REMOVED***;

    container.on('focus', function (evt***REMOVED*** {
      if (!container.isOpen(***REMOVED******REMOVED*** {
        self.$selection.focus(***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('selection:update', function (params***REMOVED*** {
      self.update(params.data***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  SingleSelection.prototype.clear = function (***REMOVED*** {
    this.$selection.find('.select2-selection__rendered'***REMOVED***.empty(***REMOVED***;
  ***REMOVED***;

  SingleSelection.prototype.display = function (data, container***REMOVED*** {
    var template = this.options.get('templateSelection'***REMOVED***;
    var escapeMarkup = this.options.get('escapeMarkup'***REMOVED***;

    return escapeMarkup(template(data, container***REMOVED******REMOVED***;
  ***REMOVED***;

  SingleSelection.prototype.selectionContainer = function (***REMOVED*** {
    return $('<span></span>'***REMOVED***;
  ***REMOVED***;

  SingleSelection.prototype.update = function (data***REMOVED*** {
    if (data.length === 0***REMOVED*** {
      this.clear(***REMOVED***;
      return;
***REMOVED***

    var selection = data[0***REMOVED***;

    var $rendered = this.$selection.find('.select2-selection__rendered'***REMOVED***;
    var formatted = this.display(selection, $rendered***REMOVED***;

    $rendered.empty(***REMOVED***.append(formatted***REMOVED***;
    $rendered.prop('title', selection.title || selection.text***REMOVED***;
  ***REMOVED***;

  return SingleSelection;
***REMOVED******REMOVED***;

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
***REMOVED***, function ($, BaseSelection, Utils***REMOVED*** {
  function MultipleSelection ($element, options***REMOVED*** {
    MultipleSelection.__super__.constructor.apply(this, arguments***REMOVED***;
  ***REMOVED***

  Utils.Extend(MultipleSelection, BaseSelection***REMOVED***;

  MultipleSelection.prototype.render = function (***REMOVED*** {
    var $selection = MultipleSelection.__super__.render.call(this***REMOVED***;

    $selection.addClass('select2-selection--multiple'***REMOVED***;

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    ***REMOVED***;

    return $selection;
  ***REMOVED***;

  MultipleSelection.prototype.bind = function (container, $container***REMOVED*** {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments***REMOVED***;

    this.$selection.on('click', function (evt***REMOVED*** {
      self.trigger('toggle', {
        originalEvent: evt
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt***REMOVED*** {
        // Ignore the event if it is disabled
        if (self.options.get('disabled'***REMOVED******REMOVED*** {
          return;
    ***REMOVED***

        var $remove = $(this***REMOVED***;
        var $selection = $remove.parent(***REMOVED***;

        var data = $selection.data('data'***REMOVED***;

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
    ***REMOVED******REMOVED***;
  ***REMOVED***
    ***REMOVED***;
  ***REMOVED***;

  MultipleSelection.prototype.clear = function (***REMOVED*** {
    this.$selection.find('.select2-selection__rendered'***REMOVED***.empty(***REMOVED***;
  ***REMOVED***;

  MultipleSelection.prototype.display = function (data, container***REMOVED*** {
    var template = this.options.get('templateSelection'***REMOVED***;
    var escapeMarkup = this.options.get('escapeMarkup'***REMOVED***;

    return escapeMarkup(template(data, container***REMOVED******REMOVED***;
  ***REMOVED***;

  MultipleSelection.prototype.selectionContainer = function (***REMOVED*** {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    ***REMOVED***;

    return $container;
  ***REMOVED***;

  MultipleSelection.prototype.update = function (data***REMOVED*** {
    this.clear(***REMOVED***;

    if (data.length === 0***REMOVED*** {
      return;
***REMOVED***

    var $selections = [***REMOVED***;

    for (var d = 0; d < data.length; d++***REMOVED*** {
      var selection = data[d***REMOVED***;

      var $selection = this.selectionContainer(***REMOVED***;
      var formatted = this.display(selection, $selection***REMOVED***;

      $selection.append(formatted***REMOVED***;
      $selection.prop('title', selection.title || selection.text***REMOVED***;

      $selection.data('data', selection***REMOVED***;

      $selections.push($selection***REMOVED***;
***REMOVED***

    var $rendered = this.$selection.find('.select2-selection__rendered'***REMOVED***;

    Utils.appendMany($rendered, $selections***REMOVED***;
  ***REMOVED***;

  return MultipleSelection;
***REMOVED******REMOVED***;

S2.define('select2/selection/placeholder',[
  '../utils'
***REMOVED***, function (Utils***REMOVED*** {
  function Placeholder (decorated, $element, options***REMOVED*** {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'***REMOVED******REMOVED***;

    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder***REMOVED*** {
    if (typeof placeholder === 'string'***REMOVED*** {
      placeholder = {
        id: '',
        text: placeholder
  ***REMOVED***;
***REMOVED***

    return placeholder;
  ***REMOVED***;

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder***REMOVED*** {
    var $placeholder = this.selectionContainer(***REMOVED***;

    $placeholder.html(this.display(placeholder***REMOVED******REMOVED***;
    $placeholder.addClass('select2-selection__placeholder'***REMOVED***
                .removeClass('select2-selection__choice'***REMOVED***;

    return $placeholder;
  ***REMOVED***;

  Placeholder.prototype.update = function (decorated, data***REMOVED*** {
    var singlePlaceholder = (
      data.length == 1 && data[0***REMOVED***.id != this.placeholder.id
    ***REMOVED***;
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder***REMOVED*** {
      return decorated.call(this, data***REMOVED***;
***REMOVED***

    this.clear(***REMOVED***;

    var $placeholder = this.createPlaceholder(this.placeholder***REMOVED***;

    this.$selection.find('.select2-selection__rendered'***REMOVED***.append($placeholder***REMOVED***;
  ***REMOVED***;

  return Placeholder;
***REMOVED******REMOVED***;

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
***REMOVED***, function ($, KEYS***REMOVED*** {
  function AllowClear (***REMOVED*** { ***REMOVED***

  AllowClear.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;

    decorated.call(this, container, $container***REMOVED***;

    if (this.placeholder == null***REMOVED*** {
      if (this.options.get('debug'***REMOVED*** && window.console && console.error***REMOVED*** {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        ***REMOVED***;
  ***REMOVED***
***REMOVED***

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt***REMOVED*** {
        self._handleClear(evt***REMOVED***;
***REMOVED******REMOVED***;

    container.on('keypress', function (evt***REMOVED*** {
      self._handleKeyboardClear(evt, container***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  AllowClear.prototype._handleClear = function (_, evt***REMOVED*** {
    // Ignore the event if it is disabled
    if (this.options.get('disabled'***REMOVED******REMOVED*** {
      return;
***REMOVED***

    var $clear = this.$selection.find('.select2-selection__clear'***REMOVED***;

    // Ignore the event if nothing has been selected
    if ($clear.length === 0***REMOVED*** {
      return;
***REMOVED***

    evt.stopPropagation(***REMOVED***;

    var data = $clear.data('data'***REMOVED***;

    for (var d = 0; d < data.length; d++***REMOVED*** {
      var unselectData = {
        data: data[d***REMOVED***
  ***REMOVED***;

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData***REMOVED***;

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented***REMOVED*** {
        return;
  ***REMOVED***
***REMOVED***

    this.$element.val(this.placeholder.id***REMOVED***.trigger('change'***REMOVED***;

    this.trigger('toggle', {***REMOVED******REMOVED***;
  ***REMOVED***;

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container***REMOVED*** {
    if (container.isOpen(***REMOVED******REMOVED*** {
      return;
***REMOVED***

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE***REMOVED*** {
      this._handleClear(evt***REMOVED***;
***REMOVED***
  ***REMOVED***;

  AllowClear.prototype.update = function (decorated, data***REMOVED*** {
    decorated.call(this, data***REMOVED***;

    if (this.$selection.find('.select2-selection__placeholder'***REMOVED***.length > 0 ||
        data.length === 0***REMOVED*** {
      return;
***REMOVED***

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    ***REMOVED***;
    $remove.data('data', data***REMOVED***;

    this.$selection.find('.select2-selection__rendered'***REMOVED***.prepend($remove***REMOVED***;
  ***REMOVED***;

  return AllowClear;
***REMOVED******REMOVED***;

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
***REMOVED***, function ($, Utils, KEYS***REMOVED*** {
  function Search (decorated, $element, options***REMOVED*** {
    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  Search.prototype.render = function (decorated***REMOVED*** {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    ***REMOVED***;

    this.$searchContainer = $search;
    this.$search = $search.find('input'***REMOVED***;

    var $rendered = decorated.call(this***REMOVED***;

    this._transferTabIndex(***REMOVED***;

    return $rendered;
  ***REMOVED***;

  Search.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;

    decorated.call(this, container, $container***REMOVED***;

    container.on('open', function (***REMOVED*** {
      self.$search.trigger('focus'***REMOVED***;
***REMOVED******REMOVED***;

    container.on('close', function (***REMOVED*** {
      self.$search.val(''***REMOVED***;
      self.$search.removeAttr('aria-activedescendant'***REMOVED***;
      self.$search.trigger('focus'***REMOVED***;
***REMOVED******REMOVED***;

    container.on('enable', function (***REMOVED*** {
      self.$search.prop('disabled', false***REMOVED***;

      self._transferTabIndex(***REMOVED***;
***REMOVED******REMOVED***;

    container.on('disable', function (***REMOVED*** {
      self.$search.prop('disabled', true***REMOVED***;
***REMOVED******REMOVED***;

    container.on('focus', function (evt***REMOVED*** {
      self.$search.trigger('focus'***REMOVED***;
***REMOVED******REMOVED***;

    container.on('results:focus', function (params***REMOVED*** {
      self.$search.attr('aria-activedescendant', params.id***REMOVED***;
***REMOVED******REMOVED***;

    this.$selection.on('focusin', '.select2-search--inline', function (evt***REMOVED*** {
      self.trigger('focus', evt***REMOVED***;
***REMOVED******REMOVED***;

    this.$selection.on('focusout', '.select2-search--inline', function (evt***REMOVED*** {
      self._handleBlur(evt***REMOVED***;
***REMOVED******REMOVED***;

    this.$selection.on('keydown', '.select2-search--inline', function (evt***REMOVED*** {
      evt.stopPropagation(***REMOVED***;

      self.trigger('keypress', evt***REMOVED***;

      self._keyUpPrevented = evt.isDefaultPrevented(***REMOVED***;

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val(***REMOVED*** === ''***REMOVED*** {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice'***REMOVED***;

        if ($previousChoice.length > 0***REMOVED*** {
          var item = $previousChoice.data('data'***REMOVED***;

          self.searchRemoveChoice(item***REMOVED***;

          evt.preventDefault(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
***REMOVED******REMOVED***;

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt***REMOVED*** {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents***REMOVED*** {
          self.$selection.off('input.search input.searchcheck'***REMOVED***;
          return;
    ***REMOVED***

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search'***REMOVED***;
  ***REMOVED***
    ***REMOVED***;

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt***REMOVED*** {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input'***REMOVED*** {
          self.$selection.off('input.search input.searchcheck'***REMOVED***;
          return;
    ***REMOVED***

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT***REMOVED*** {
          return;
    ***REMOVED***

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB***REMOVED*** {
          return;
    ***REMOVED***

        self.handleSearch(evt***REMOVED***;
  ***REMOVED***
    ***REMOVED***;
  ***REMOVED***;

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated***REMOVED*** {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'***REMOVED******REMOVED***;
    this.$selection.attr('tabindex', '-1'***REMOVED***;
  ***REMOVED***;

  Search.prototype.createPlaceholder = function (decorated, placeholder***REMOVED*** {
    this.$search.attr('placeholder', placeholder.text***REMOVED***;
  ***REMOVED***;

  Search.prototype.update = function (decorated, data***REMOVED*** {
    var searchHadFocus = this.$search[0***REMOVED*** == document.activeElement;

    this.$search.attr('placeholder', ''***REMOVED***;

    decorated.call(this, data***REMOVED***;

    this.$selection.find('.select2-selection__rendered'***REMOVED***
                   .append(this.$searchContainer***REMOVED***;

    this.resizeSearch(***REMOVED***;
    if (searchHadFocus***REMOVED*** {
      this.$search.focus(***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Search.prototype.handleSearch = function (***REMOVED*** {
    this.resizeSearch(***REMOVED***;

    if (!this._keyUpPrevented***REMOVED*** {
      var input = this.$search.val(***REMOVED***;

      this.trigger('query', {
        term: input
  ***REMOVED******REMOVED***;
***REMOVED***

    this._keyUpPrevented = false;
  ***REMOVED***;

  Search.prototype.searchRemoveChoice = function (decorated, item***REMOVED*** {
    this.trigger('unselect', {
      data: item
***REMOVED******REMOVED***;

    this.$search.val(item.text***REMOVED***;
    this.handleSearch(***REMOVED***;
  ***REMOVED***;

  Search.prototype.resizeSearch = function (***REMOVED*** {
    this.$search.css('width', '25px'***REMOVED***;

    var width = '';

    if (this.$search.attr('placeholder'***REMOVED*** !== ''***REMOVED*** {
      width = this.$selection.find('.select2-selection__rendered'***REMOVED***.innerWidth(***REMOVED***;
***REMOVED*** else {
      var minimumWidth = this.$search.val(***REMOVED***.length + 1;

      width = (minimumWidth * 0.75***REMOVED*** + 'em';
***REMOVED***

    this.$search.css('width', width***REMOVED***;
  ***REMOVED***;

  return Search;
***REMOVED******REMOVED***;

S2.define('select2/selection/eventRelay',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function EventRelay (***REMOVED*** { ***REMOVED***

  EventRelay.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ***REMOVED***;

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'***REMOVED***;

    decorated.call(this, container, $container***REMOVED***;

    container.on('*', function (name, params***REMOVED*** {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents***REMOVED*** === -1***REMOVED*** {
        return;
  ***REMOVED***

      // The parameters should always be an object
      params = params || {***REMOVED***;

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
  ***REMOVED******REMOVED***;

      self.$element.trigger(evt***REMOVED***;

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents***REMOVED*** === -1***REMOVED*** {
        return;
  ***REMOVED***

      params.prevented = evt.isDefaultPrevented(***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  return EventRelay;
***REMOVED******REMOVED***;

S2.define('select2/translation',[
  'jquery',
  'require'
***REMOVED***, function ($, require***REMOVED*** {
  function Translation (dict***REMOVED*** {
    this.dict = dict || {***REMOVED***;
  ***REMOVED***

  Translation.prototype.all = function (***REMOVED*** {
    return this.dict;
  ***REMOVED***;

  Translation.prototype.get = function (key***REMOVED*** {
    return this.dict[key***REMOVED***;
  ***REMOVED***;

  Translation.prototype.extend = function (translation***REMOVED*** {
    this.dict = $.extend({***REMOVED***, translation.all(***REMOVED***, this.dict***REMOVED***;
  ***REMOVED***;

  // Static functions

  Translation._cache = {***REMOVED***;

  Translation.loadPath = function (path***REMOVED*** {
    if (!(path in Translation._cache***REMOVED******REMOVED*** {
      var translations = require(path***REMOVED***;

      Translation._cache[path***REMOVED*** = translations;
***REMOVED***

    return new Translation(Translation._cache[path***REMOVED******REMOVED***;
  ***REMOVED***;

  return Translation;
***REMOVED******REMOVED***;

S2.define('select2/diacritics',[

***REMOVED***, function (***REMOVED*** {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  ***REMOVED***;

  return diacritics;
***REMOVED******REMOVED***;

S2.define('select2/data/base',[
  '../utils'
***REMOVED***, function (Utils***REMOVED*** {
  function BaseAdapter ($element, options***REMOVED*** {
    BaseAdapter.__super__.constructor.call(this***REMOVED***;
  ***REMOVED***

  Utils.Extend(BaseAdapter, Utils.Observable***REMOVED***;

  BaseAdapter.prototype.current = function (callback***REMOVED*** {
    throw new Error('The `current` method must be defined in child classes.'***REMOVED***;
  ***REMOVED***;

  BaseAdapter.prototype.query = function (params, callback***REMOVED*** {
    throw new Error('The `query` method must be defined in child classes.'***REMOVED***;
  ***REMOVED***;

  BaseAdapter.prototype.bind = function (container, $container***REMOVED*** {
    // Can be implemented in subclasses
  ***REMOVED***;

  BaseAdapter.prototype.destroy = function (***REMOVED*** {
    // Can be implemented in subclasses
  ***REMOVED***;

  BaseAdapter.prototype.generateResultId = function (container, data***REMOVED*** {
    var id = container.id + '-result-';

    id += Utils.generateChars(4***REMOVED***;

    if (data.id != null***REMOVED*** {
      id += '-' + data.id.toString(***REMOVED***;
***REMOVED*** else {
      id += '-' + Utils.generateChars(4***REMOVED***;
***REMOVED***
    return id;
  ***REMOVED***;

  return BaseAdapter;
***REMOVED******REMOVED***;

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
***REMOVED***, function (BaseAdapter, Utils, $***REMOVED*** {
  function SelectAdapter ($element, options***REMOVED*** {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this***REMOVED***;
  ***REMOVED***

  Utils.Extend(SelectAdapter, BaseAdapter***REMOVED***;

  SelectAdapter.prototype.current = function (callback***REMOVED*** {
    var data = [***REMOVED***;
    var self = this;

    this.$element.find(':selected'***REMOVED***.each(function (***REMOVED*** {
      var $option = $(this***REMOVED***;

      var option = self.item($option***REMOVED***;

      data.push(option***REMOVED***;
***REMOVED******REMOVED***;

    callback(data***REMOVED***;
  ***REMOVED***;

  SelectAdapter.prototype.select = function (data***REMOVED*** {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element***REMOVED***.is('option'***REMOVED******REMOVED*** {
      data.element.selected = true;

      this.$element.trigger('change'***REMOVED***;

      return;
***REMOVED***

    if (this.$element.prop('multiple'***REMOVED******REMOVED*** {
      this.current(function (currentData***REMOVED*** {
        var val = [***REMOVED***;

        data = [data***REMOVED***;
        data.push.apply(data, currentData***REMOVED***;

        for (var d = 0; d < data.length; d++***REMOVED*** {
          var id = data[d***REMOVED***.id;

          if ($.inArray(id, val***REMOVED*** === -1***REMOVED*** {
            val.push(id***REMOVED***;
      ***REMOVED***
    ***REMOVED***

        self.$element.val(val***REMOVED***;
        self.$element.trigger('change'***REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED*** else {
      var val = data.id;

      this.$element.val(val***REMOVED***;
      this.$element.trigger('change'***REMOVED***;
***REMOVED***
  ***REMOVED***;

  SelectAdapter.prototype.unselect = function (data***REMOVED*** {
    var self = this;

    if (!this.$element.prop('multiple'***REMOVED******REMOVED*** {
      return;
***REMOVED***

    data.selected = false;

    if ($(data.element***REMOVED***.is('option'***REMOVED******REMOVED*** {
      data.element.selected = false;

      this.$element.trigger('change'***REMOVED***;

      return;
***REMOVED***

    this.current(function (currentData***REMOVED*** {
      var val = [***REMOVED***;

      for (var d = 0; d < currentData.length; d++***REMOVED*** {
        var id = currentData[d***REMOVED***.id;

        if (id !== data.id && $.inArray(id, val***REMOVED*** === -1***REMOVED*** {
          val.push(id***REMOVED***;
    ***REMOVED***
  ***REMOVED***

      self.$element.val(val***REMOVED***;

      self.$element.trigger('change'***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  SelectAdapter.prototype.bind = function (container, $container***REMOVED*** {
    var self = this;

    this.container = container;

    container.on('select', function (params***REMOVED*** {
      self.select(params.data***REMOVED***;
***REMOVED******REMOVED***;

    container.on('unselect', function (params***REMOVED*** {
      self.unselect(params.data***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  SelectAdapter.prototype.destroy = function (***REMOVED*** {
    // Remove anything added to child elements
    this.$element.find('*'***REMOVED***.each(function (***REMOVED*** {
      // Remove any custom data set by Select2
      $.removeData(this, 'data'***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  SelectAdapter.prototype.query = function (params, callback***REMOVED*** {
    var data = [***REMOVED***;
    var self = this;

    var $options = this.$element.children(***REMOVED***;

    $options.each(function (***REMOVED*** {
      var $option = $(this***REMOVED***;

      if (!$option.is('option'***REMOVED*** && !$option.is('optgroup'***REMOVED******REMOVED*** {
        return;
  ***REMOVED***

      var option = self.item($option***REMOVED***;

      var matches = self.matches(params, option***REMOVED***;

      if (matches !== null***REMOVED*** {
        data.push(matches***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    callback({
      results: data
***REMOVED******REMOVED***;
  ***REMOVED***;

  SelectAdapter.prototype.addOptions = function ($options***REMOVED*** {
    Utils.appendMany(this.$element, $options***REMOVED***;
  ***REMOVED***;

  SelectAdapter.prototype.option = function (data***REMOVED*** {
    var option;

    if (data.children***REMOVED*** {
      option = document.createElement('optgroup'***REMOVED***;
      option.label = data.text;
***REMOVED*** else {
      option = document.createElement('option'***REMOVED***;

      if (option.textContent !== undefined***REMOVED*** {
        option.textContent = data.text;
  ***REMOVED*** else {
        option.innerText = data.text;
  ***REMOVED***
***REMOVED***

    if (data.id***REMOVED*** {
      option.value = data.id;
***REMOVED***

    if (data.disabled***REMOVED*** {
      option.disabled = true;
***REMOVED***

    if (data.selected***REMOVED*** {
      option.selected = true;
***REMOVED***

    if (data.title***REMOVED*** {
      option.title = data.title;
***REMOVED***

    var $option = $(option***REMOVED***;

    var normalizedData = this._normalizeItem(data***REMOVED***;
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData***REMOVED***;

    return $option;
  ***REMOVED***;

  SelectAdapter.prototype.item = function ($option***REMOVED*** {
    var data = {***REMOVED***;

    data = $.data($option[0***REMOVED***, 'data'***REMOVED***;

    if (data != null***REMOVED*** {
      return data;
***REMOVED***

    if ($option.is('option'***REMOVED******REMOVED*** {
      data = {
        id: $option.val(***REMOVED***,
        text: $option.text(***REMOVED***,
        disabled: $option.prop('disabled'***REMOVED***,
        selected: $option.prop('selected'***REMOVED***,
        title: $option.prop('title'***REMOVED***
  ***REMOVED***;
***REMOVED*** else if ($option.is('optgroup'***REMOVED******REMOVED*** {
      data = {
        text: $option.prop('label'***REMOVED***,
        children: [***REMOVED***,
        title: $option.prop('title'***REMOVED***
  ***REMOVED***;

      var $children = $option.children('option'***REMOVED***;
      var children = [***REMOVED***;

      for (var c = 0; c < $children.length; c++***REMOVED*** {
        var $child = $($children[c***REMOVED******REMOVED***;

        var child = this.item($child***REMOVED***;

        children.push(child***REMOVED***;
  ***REMOVED***

      data.children = children;
***REMOVED***

    data = this._normalizeItem(data***REMOVED***;
    data.element = $option[0***REMOVED***;

    $.data($option[0***REMOVED***, 'data', data***REMOVED***;

    return data;
  ***REMOVED***;

  SelectAdapter.prototype._normalizeItem = function (item***REMOVED*** {
    if (!$.isPlainObject(item***REMOVED******REMOVED*** {
      item = {
        id: item,
        text: item
  ***REMOVED***;
***REMOVED***

    item = $.extend({***REMOVED***, {
      text: ''
***REMOVED*** item***REMOVED***;

    var defaults = {
      selected: false,
      disabled: false
***REMOVED***;

    if (item.id != null***REMOVED*** {
      item.id = item.id.toString(***REMOVED***;
***REMOVED***

    if (item.text != null***REMOVED*** {
      item.text = item.text.toString(***REMOVED***;
***REMOVED***

    if (item._resultId == null && item.id && this.container != null***REMOVED*** {
      item._resultId = this.generateResultId(this.container, item***REMOVED***;
***REMOVED***

    return $.extend({***REMOVED***, defaults, item***REMOVED***;
  ***REMOVED***;

  SelectAdapter.prototype.matches = function (params, data***REMOVED*** {
    var matcher = this.options.get('matcher'***REMOVED***;

    return matcher(params, data***REMOVED***;
  ***REMOVED***;

  return SelectAdapter;
***REMOVED******REMOVED***;

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
***REMOVED***, function (SelectAdapter, Utils, $***REMOVED*** {
  function ArrayAdapter ($element, options***REMOVED*** {
    var data = options.get('data'***REMOVED*** || [***REMOVED***;

    ArrayAdapter.__super__.constructor.call(this, $element, options***REMOVED***;

    this.addOptions(this.convertToOptions(data***REMOVED******REMOVED***;
  ***REMOVED***

  Utils.Extend(ArrayAdapter, SelectAdapter***REMOVED***;

  ArrayAdapter.prototype.select = function (data***REMOVED*** {
    var $option = this.$element.find('option'***REMOVED***.filter(function (i, elm***REMOVED*** {
      return elm.value == data.id.toString(***REMOVED***;
***REMOVED******REMOVED***;

    if ($option.length === 0***REMOVED*** {
      $option = this.option(data***REMOVED***;

      this.addOptions($option***REMOVED***;
***REMOVED***

    ArrayAdapter.__super__.select.call(this, data***REMOVED***;
  ***REMOVED***;

  ArrayAdapter.prototype.convertToOptions = function (data***REMOVED*** {
    var self = this;

    var $existing = this.$element.find('option'***REMOVED***;
    var existingIds = $existing.map(function (***REMOVED*** {
      return self.item($(this***REMOVED******REMOVED***.id;
***REMOVED******REMOVED***.get(***REMOVED***;

    var $options = [***REMOVED***;

    // Filter out all items except for the one passed in the argument
    function onlyItem (item***REMOVED*** {
      return function (***REMOVED*** {
        return $(this***REMOVED***.val(***REMOVED*** == item.id;
  ***REMOVED***;
***REMOVED***

    for (var d = 0; d < data.length; d++***REMOVED*** {
      var item = this._normalizeItem(data[d***REMOVED******REMOVED***;

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds***REMOVED*** >= 0***REMOVED*** {
        var $existingOption = $existing.filter(onlyItem(item***REMOVED******REMOVED***;

        var existingData = this.item($existingOption***REMOVED***;
        var newData = $.extend(true, {***REMOVED***, item, existingData***REMOVED***;

        var $newOption = this.option(newData***REMOVED***;

        $existingOption.replaceWith($newOption***REMOVED***;

        continue;
  ***REMOVED***

      var $option = this.option(item***REMOVED***;

      if (item.children***REMOVED*** {
        var $children = this.convertToOptions(item.children***REMOVED***;

        Utils.appendMany($option, $children***REMOVED***;
  ***REMOVED***

      $options.push($option***REMOVED***;
***REMOVED***

    return $options;
  ***REMOVED***;

  return ArrayAdapter;
***REMOVED******REMOVED***;

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
***REMOVED***, function (ArrayAdapter, Utils, $***REMOVED*** {
  function AjaxAdapter ($element, options***REMOVED*** {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'***REMOVED******REMOVED***;

    if (this.ajaxOptions.processResults != null***REMOVED*** {
      this.processResults = this.ajaxOptions.processResults;
***REMOVED***

    AjaxAdapter.__super__.constructor.call(this, $element, options***REMOVED***;
  ***REMOVED***

  Utils.Extend(AjaxAdapter, ArrayAdapter***REMOVED***;

  AjaxAdapter.prototype._applyDefaults = function (options***REMOVED*** {
    var defaults = {
      data: function (params***REMOVED*** {
        return $.extend({***REMOVED***, params, {
          q: params.term
    ***REMOVED******REMOVED***;
  ***REMOVED***
      transport: function (params, success, failure***REMOVED*** {
        var $request = $.ajax(params***REMOVED***;

        $request.then(success***REMOVED***;
        $request.fail(failure***REMOVED***;

        return $request;
  ***REMOVED***
***REMOVED***;

    return $.extend({***REMOVED***, defaults, options, true***REMOVED***;
  ***REMOVED***;

  AjaxAdapter.prototype.processResults = function (results***REMOVED*** {
    return results;
  ***REMOVED***;

  AjaxAdapter.prototype.query = function (params, callback***REMOVED*** {
    var matches = [***REMOVED***;
    var self = this;

    if (this._request != null***REMOVED*** {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort***REMOVED******REMOVED*** {
        this._request.abort(***REMOVED***;
  ***REMOVED***

      this._request = null;
***REMOVED***

    var options = $.extend({
      type: 'GET'
***REMOVED*** this.ajaxOptions***REMOVED***;

    if (typeof options.url === 'function'***REMOVED*** {
      options.url = options.url.call(this.$element, params***REMOVED***;
***REMOVED***

    if (typeof options.data === 'function'***REMOVED*** {
      options.data = options.data.call(this.$element, params***REMOVED***;
***REMOVED***

    function request (***REMOVED*** {
      var $request = options.transport(options, function (data***REMOVED*** {
        var results = self.processResults(data, params***REMOVED***;

        if (self.options.get('debug'***REMOVED*** && window.console && console.error***REMOVED*** {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results***REMOVED******REMOVED*** {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            ***REMOVED***;
      ***REMOVED***
    ***REMOVED***

        callback(results***REMOVED***;
  ***REMOVED*** function (***REMOVED*** {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0'***REMOVED*** {
          return;
    ***REMOVED***

        self.trigger('results:message', {
          message: 'errorLoading'
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;

      self._request = $request;
***REMOVED***

    if (this.ajaxOptions.delay && params.term != null***REMOVED*** {
      if (this._queryTimeout***REMOVED*** {
        window.clearTimeout(this._queryTimeout***REMOVED***;
  ***REMOVED***

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay***REMOVED***;
***REMOVED*** else {
      request(***REMOVED***;
***REMOVED***
  ***REMOVED***;

  return AjaxAdapter;
***REMOVED******REMOVED***;

S2.define('select2/data/tags',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function Tags (decorated, $element, options***REMOVED*** {
    var tags = options.get('tags'***REMOVED***;

    var createTag = options.get('createTag'***REMOVED***;

    if (createTag !== undefined***REMOVED*** {
      this.createTag = createTag;
***REMOVED***

    var insertTag = options.get('insertTag'***REMOVED***;

    if (insertTag !== undefined***REMOVED*** {
        this.insertTag = insertTag;
***REMOVED***

    decorated.call(this, $element, options***REMOVED***;

    if ($.isArray(tags***REMOVED******REMOVED*** {
      for (var t = 0; t < tags.length; t++***REMOVED*** {
        var tag = tags[t***REMOVED***;
        var item = this._normalizeItem(tag***REMOVED***;

        var $option = this.option(item***REMOVED***;

        this.$element.append($option***REMOVED***;
  ***REMOVED***
***REMOVED***
  ***REMOVED***

  Tags.prototype.query = function (decorated, params, callback***REMOVED*** {
    var self = this;

    this._removeOldTags(***REMOVED***;

    if (params.term == null || params.page != null***REMOVED*** {
      decorated.call(this, params, callback***REMOVED***;
      return;
***REMOVED***

    function wrapper (obj, child***REMOVED*** {
      var data = obj.results;

      for (var i = 0; i < data.length; i++***REMOVED*** {
        var option = data[i***REMOVED***;

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
  ***REMOVED*** true***REMOVED***
        ***REMOVED***;

        var checkText = option.text === params.term;

        if (checkText || checkChildren***REMOVED*** {
          if (child***REMOVED*** {
            return false;
      ***REMOVED***

          obj.data = data;
          callback(obj***REMOVED***;

          return;
    ***REMOVED***
  ***REMOVED***

      if (child***REMOVED*** {
        return true;
  ***REMOVED***

      var tag = self.createTag(params***REMOVED***;

      if (tag != null***REMOVED*** {
        var $option = self.option(tag***REMOVED***;
        $option.attr('data-select2-tag', true***REMOVED***;

        self.addOptions([$option***REMOVED******REMOVED***;

        self.insertTag(data, tag***REMOVED***;
  ***REMOVED***

      obj.results = data;

      callback(obj***REMOVED***;
***REMOVED***

    decorated.call(this, params, wrapper***REMOVED***;
  ***REMOVED***;

  Tags.prototype.createTag = function (decorated, params***REMOVED*** {
    var term = $.trim(params.term***REMOVED***;

    if (term === ''***REMOVED*** {
      return null;
***REMOVED***

    return {
      id: term,
      text: term
***REMOVED***;
  ***REMOVED***;

  Tags.prototype.insertTag = function (_, data, tag***REMOVED*** {
    data.unshift(tag***REMOVED***;
  ***REMOVED***;

  Tags.prototype._removeOldTags = function (_***REMOVED*** {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag***REMOVED***'***REMOVED***;

    $options.each(function (***REMOVED*** {
      if (this.selected***REMOVED*** {
        return;
  ***REMOVED***

      $(this***REMOVED***.remove(***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  return Tags;
***REMOVED******REMOVED***;

S2.define('select2/data/tokenizer',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function Tokenizer (decorated, $element, options***REMOVED*** {
    var tokenizer = options.get('tokenizer'***REMOVED***;

    if (tokenizer !== undefined***REMOVED*** {
      this.tokenizer = tokenizer;
***REMOVED***

    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  Tokenizer.prototype.bind = function (decorated, container, $container***REMOVED*** {
    decorated.call(this, container, $container***REMOVED***;

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field'***REMOVED***;
  ***REMOVED***;

  Tokenizer.prototype.query = function (decorated, params, callback***REMOVED*** {
    var self = this;

    function createAndSelect (data***REMOVED*** {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data***REMOVED***;

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option'***REMOVED***.filter(function (***REMOVED*** {
        return $(this***REMOVED***.val(***REMOVED*** === item.id;
  ***REMOVED******REMOVED***;

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length***REMOVED*** {
        var $option = self.option(item***REMOVED***;
        $option.attr('data-select2-tag', true***REMOVED***;

        self._removeOldTags(***REMOVED***;
        self.addOptions([$option***REMOVED******REMOVED***;
  ***REMOVED***

      // Select the item, now that we know there is an option for it
      select(item***REMOVED***;
***REMOVED***

    function select (data***REMOVED*** {
      self.trigger('select', {
        data: data
  ***REMOVED******REMOVED***;
***REMOVED***

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect***REMOVED***;

    if (tokenData.term !== params.term***REMOVED*** {
      // Replace the search term if we have the search box
      if (this.$search.length***REMOVED*** {
        this.$search.val(tokenData.term***REMOVED***;
        this.$search.focus(***REMOVED***;
  ***REMOVED***

      params.term = tokenData.term;
***REMOVED***

    decorated.call(this, params, callback***REMOVED***;
  ***REMOVED***;

  Tokenizer.prototype.tokenizer = function (_, params, options, callback***REMOVED*** {
    var separators = options.get('tokenSeparators'***REMOVED*** || [***REMOVED***;
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params***REMOVED*** {
      return {
        id: params.term,
        text: params.term
  ***REMOVED***;
***REMOVED***;

    while (i < term.length***REMOVED*** {
      var termChar = term[i***REMOVED***;

      if ($.inArray(termChar, separators***REMOVED*** === -1***REMOVED*** {
        i++;

        continue;
  ***REMOVED***

      var part = term.substr(0, i***REMOVED***;
      var partParams = $.extend({***REMOVED***, params, {
        term: part
  ***REMOVED******REMOVED***;

      var data = createTag(partParams***REMOVED***;

      if (data == null***REMOVED*** {
        i++;
        continue;
  ***REMOVED***

      callback(data***REMOVED***;

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1***REMOVED*** || '';
      i = 0;
***REMOVED***

    return {
      term: term
***REMOVED***;
  ***REMOVED***;

  return Tokenizer;
***REMOVED******REMOVED***;

S2.define('select2/data/minimumInputLength',[

***REMOVED***, function (***REMOVED*** {
  function MinimumInputLength (decorated, $e, options***REMOVED*** {
    this.minimumInputLength = options.get('minimumInputLength'***REMOVED***;

    decorated.call(this, $e, options***REMOVED***;
  ***REMOVED***

  MinimumInputLength.prototype.query = function (decorated, params, callback***REMOVED*** {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength***REMOVED*** {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
    ***REMOVED***
  ***REMOVED******REMOVED***;

      return;
***REMOVED***

    decorated.call(this, params, callback***REMOVED***;
  ***REMOVED***;

  return MinimumInputLength;
***REMOVED******REMOVED***;

S2.define('select2/data/maximumInputLength',[

***REMOVED***, function (***REMOVED*** {
  function MaximumInputLength (decorated, $e, options***REMOVED*** {
    this.maximumInputLength = options.get('maximumInputLength'***REMOVED***;

    decorated.call(this, $e, options***REMOVED***;
  ***REMOVED***

  MaximumInputLength.prototype.query = function (decorated, params, callback***REMOVED*** {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength***REMOVED*** {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
    ***REMOVED***
  ***REMOVED******REMOVED***;

      return;
***REMOVED***

    decorated.call(this, params, callback***REMOVED***;
  ***REMOVED***;

  return MaximumInputLength;
***REMOVED******REMOVED***;

S2.define('select2/data/maximumSelectionLength',[

***REMOVED***, function (***REMOVED***{
  function MaximumSelectionLength (decorated, $e, options***REMOVED*** {
    this.maximumSelectionLength = options.get('maximumSelectionLength'***REMOVED***;

    decorated.call(this, $e, options***REMOVED***;
  ***REMOVED***

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback***REMOVED*** {
      var self = this;

      this.current(function (currentData***REMOVED*** {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength***REMOVED*** {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
        ***REMOVED***
      ***REMOVED******REMOVED***;
          return;
    ***REMOVED***
        decorated.call(self, params, callback***REMOVED***;
  ***REMOVED******REMOVED***;
  ***REMOVED***;

  return MaximumSelectionLength;
***REMOVED******REMOVED***;

S2.define('select2/dropdown',[
  'jquery',
  './utils'
***REMOVED***, function ($, Utils***REMOVED*** {
  function Dropdown ($element, options***REMOVED*** {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this***REMOVED***;
  ***REMOVED***

  Utils.Extend(Dropdown, Utils.Observable***REMOVED***;

  Dropdown.prototype.render = function (***REMOVED*** {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    ***REMOVED***;

    $dropdown.attr('dir', this.options.get('dir'***REMOVED******REMOVED***;

    this.$dropdown = $dropdown;

    return $dropdown;
  ***REMOVED***;

  Dropdown.prototype.bind = function (***REMOVED*** {
    // Should be implemented in subclasses
  ***REMOVED***;

  Dropdown.prototype.position = function ($dropdown, $container***REMOVED*** {
    // Should be implmented in subclasses
  ***REMOVED***;

  Dropdown.prototype.destroy = function (***REMOVED*** {
    // Remove the dropdown from the DOM
    this.$dropdown.remove(***REMOVED***;
  ***REMOVED***;

  return Dropdown;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
***REMOVED***, function ($, Utils***REMOVED*** {
  function Search (***REMOVED*** { ***REMOVED***

  Search.prototype.render = function (decorated***REMOVED*** {
    var $rendered = decorated.call(this***REMOVED***;

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    ***REMOVED***;

    this.$searchContainer = $search;
    this.$search = $search.find('input'***REMOVED***;

    $rendered.prepend($search***REMOVED***;

    return $rendered;
  ***REMOVED***;

  Search.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;

    decorated.call(this, container, $container***REMOVED***;

    this.$search.on('keydown', function (evt***REMOVED*** {
      self.trigger('keypress', evt***REMOVED***;

      self._keyUpPrevented = evt.isDefaultPrevented(***REMOVED***;
***REMOVED******REMOVED***;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt***REMOVED*** {
      // Unbind the duplicated `keyup` event
      $(this***REMOVED***.off('keyup'***REMOVED***;
***REMOVED******REMOVED***;

    this.$search.on('keyup input', function (evt***REMOVED*** {
      self.handleSearch(evt***REMOVED***;
***REMOVED******REMOVED***;

    container.on('open', function (***REMOVED*** {
      self.$search.attr('tabindex', 0***REMOVED***;

      self.$search.focus(***REMOVED***;

      window.setTimeout(function (***REMOVED*** {
        self.$search.focus(***REMOVED***;
  ***REMOVED*** 0***REMOVED***;
***REMOVED******REMOVED***;

    container.on('close', function (***REMOVED*** {
      self.$search.attr('tabindex', -1***REMOVED***;

      self.$search.val(''***REMOVED***;
***REMOVED******REMOVED***;

    container.on('focus', function (***REMOVED*** {
      if (container.isOpen(***REMOVED******REMOVED*** {
        self.$search.focus(***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('results:all', function (params***REMOVED*** {
      if (params.query.term == null || params.query.term === ''***REMOVED*** {
        var showSearch = self.showSearch(params***REMOVED***;

        if (showSearch***REMOVED*** {
          self.$searchContainer.removeClass('select2-search--hide'***REMOVED***;
    ***REMOVED*** else {
          self.$searchContainer.addClass('select2-search--hide'***REMOVED***;
    ***REMOVED***
  ***REMOVED***
***REMOVED******REMOVED***;
  ***REMOVED***;

  Search.prototype.handleSearch = function (evt***REMOVED*** {
    if (!this._keyUpPrevented***REMOVED*** {
      var input = this.$search.val(***REMOVED***;

      this.trigger('query', {
        term: input
  ***REMOVED******REMOVED***;
***REMOVED***

    this._keyUpPrevented = false;
  ***REMOVED***;

  Search.prototype.showSearch = function (_, params***REMOVED*** {
    return true;
  ***REMOVED***;

  return Search;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/hidePlaceholder',[

***REMOVED***, function (***REMOVED*** {
  function HidePlaceholder (decorated, $element, options, dataAdapter***REMOVED*** {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'***REMOVED******REMOVED***;

    decorated.call(this, $element, options, dataAdapter***REMOVED***;
  ***REMOVED***

  HidePlaceholder.prototype.append = function (decorated, data***REMOVED*** {
    data.results = this.removePlaceholder(data.results***REMOVED***;

    decorated.call(this, data***REMOVED***;
  ***REMOVED***;

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder***REMOVED*** {
    if (typeof placeholder === 'string'***REMOVED*** {
      placeholder = {
        id: '',
        text: placeholder
  ***REMOVED***;
***REMOVED***

    return placeholder;
  ***REMOVED***;

  HidePlaceholder.prototype.removePlaceholder = function (_, data***REMOVED*** {
    var modifiedData = data.slice(0***REMOVED***;

    for (var d = data.length - 1; d >= 0; d--***REMOVED*** {
      var item = data[d***REMOVED***;

      if (this.placeholder.id === item.id***REMOVED*** {
        modifiedData.splice(d, 1***REMOVED***;
  ***REMOVED***
***REMOVED***

    return modifiedData;
  ***REMOVED***;

  return HidePlaceholder;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function InfiniteScroll (decorated, $element, options, dataAdapter***REMOVED*** {
    this.lastParams = {***REMOVED***;

    decorated.call(this, $element, options, dataAdapter***REMOVED***;

    this.$loadingMore = this.createLoadingMore(***REMOVED***;
    this.loading = false;
  ***REMOVED***

  InfiniteScroll.prototype.append = function (decorated, data***REMOVED*** {
    this.$loadingMore.remove(***REMOVED***;
    this.loading = false;

    decorated.call(this, data***REMOVED***;

    if (this.showLoadingMore(data***REMOVED******REMOVED*** {
      this.$results.append(this.$loadingMore***REMOVED***;
***REMOVED***
  ***REMOVED***;

  InfiniteScroll.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;

    decorated.call(this, container, $container***REMOVED***;

    container.on('query', function (params***REMOVED*** {
      self.lastParams = params;
      self.loading = true;
***REMOVED******REMOVED***;

    container.on('query:append', function (params***REMOVED*** {
      self.lastParams = params;
      self.loading = true;
***REMOVED******REMOVED***;

    this.$results.on('scroll', function (***REMOVED*** {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0***REMOVED***
      ***REMOVED***;

      if (self.loading || !isLoadMoreVisible***REMOVED*** {
        return;
  ***REMOVED***

      var currentOffset = self.$results.offset(***REMOVED***.top +
        self.$results.outerHeight(false***REMOVED***;
      var loadingMoreOffset = self.$loadingMore.offset(***REMOVED***.top +
        self.$loadingMore.outerHeight(false***REMOVED***;

      if (currentOffset + 50 >= loadingMoreOffset***REMOVED*** {
        self.loadMore(***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;
  ***REMOVED***;

  InfiniteScroll.prototype.loadMore = function (***REMOVED*** {
    this.loading = true;

    var params = $.extend({***REMOVED***, {page: 1***REMOVED***, this.lastParams***REMOVED***;

    params.page++;

    this.trigger('query:append', params***REMOVED***;
  ***REMOVED***;

  InfiniteScroll.prototype.showLoadingMore = function (_, data***REMOVED*** {
    return data.pagination && data.pagination.more;
  ***REMOVED***;

  InfiniteScroll.prototype.createLoadingMore = function (***REMOVED*** {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    ***REMOVED***;

    var message = this.options.get('translations'***REMOVED***.get('loadingMore'***REMOVED***;

    $option.html(message(this.lastParams***REMOVED******REMOVED***;

    return $option;
  ***REMOVED***;

  return InfiniteScroll;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
***REMOVED***, function ($, Utils***REMOVED*** {
  function AttachBody (decorated, $element, options***REMOVED*** {
    this.$dropdownParent = options.get('dropdownParent'***REMOVED*** || $(document.body***REMOVED***;

    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  AttachBody.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container***REMOVED***;

    container.on('open', function (***REMOVED*** {
      self._showDropdown(***REMOVED***;
      self._attachPositioningHandler(container***REMOVED***;

      if (!setupResultsEvents***REMOVED*** {
        setupResultsEvents = true;

        container.on('results:all', function (***REMOVED*** {
          self._positionDropdown(***REMOVED***;
          self._resizeDropdown(***REMOVED***;
    ***REMOVED******REMOVED***;

        container.on('results:append', function (***REMOVED*** {
          self._positionDropdown(***REMOVED***;
          self._resizeDropdown(***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;

    container.on('close', function (***REMOVED*** {
      self._hideDropdown(***REMOVED***;
      self._detachPositioningHandler(container***REMOVED***;
***REMOVED******REMOVED***;

    this.$dropdownContainer.on('mousedown', function (evt***REMOVED*** {
      evt.stopPropagation(***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  AttachBody.prototype.destroy = function (decorated***REMOVED*** {
    decorated.call(this***REMOVED***;

    this.$dropdownContainer.remove(***REMOVED***;
  ***REMOVED***;

  AttachBody.prototype.position = function (decorated, $dropdown, $container***REMOVED*** {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'***REMOVED******REMOVED***;

    $dropdown.removeClass('select2'***REMOVED***;
    $dropdown.addClass('select2-container--open'***REMOVED***;

    $dropdown.css({
      position: 'absolute',
      top: -999999
***REMOVED******REMOVED***;

    this.$container = $container;
  ***REMOVED***;

  AttachBody.prototype.render = function (decorated***REMOVED*** {
    var $container = $('<span></span>'***REMOVED***;

    var $dropdown = decorated.call(this***REMOVED***;
    $container.append($dropdown***REMOVED***;

    this.$dropdownContainer = $container;

    return $container;
  ***REMOVED***;

  AttachBody.prototype._hideDropdown = function (decorated***REMOVED*** {
    this.$dropdownContainer.detach(***REMOVED***;
  ***REMOVED***;

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container***REMOVED*** {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents(***REMOVED***.filter(Utils.hasScroll***REMOVED***;
    $watchers.each(function (***REMOVED*** {
      $(this***REMOVED***.data('select2-scroll-position', {
        x: $(this***REMOVED***.scrollLeft(***REMOVED***,
        y: $(this***REMOVED***.scrollTop(***REMOVED***
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    $watchers.on(scrollEvent, function (ev***REMOVED*** {
      var position = $(this***REMOVED***.data('select2-scroll-position'***REMOVED***;
      $(this***REMOVED***.scrollTop(position.y***REMOVED***;
***REMOVED******REMOVED***;

    $(window***REMOVED***.on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e***REMOVED*** {
      self._positionDropdown(***REMOVED***;
      self._resizeDropdown(***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container***REMOVED*** {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents(***REMOVED***.filter(Utils.hasScroll***REMOVED***;
    $watchers.off(scrollEvent***REMOVED***;

    $(window***REMOVED***.off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent***REMOVED***;
  ***REMOVED***;

  AttachBody.prototype._positionDropdown = function (***REMOVED*** {
    var $window = $(window***REMOVED***;

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above'***REMOVED***;
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below'***REMOVED***;

    var newDirection = null;

    var offset = this.$container.offset(***REMOVED***;

    offset.bottom = offset.top + this.$container.outerHeight(false***REMOVED***;

    var container = {
      height: this.$container.outerHeight(false***REMOVED***
***REMOVED***;

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false***REMOVED***
***REMOVED***;

    var viewport = {
      top: $window.scrollTop(***REMOVED***,
      bottom: $window.scrollTop(***REMOVED*** + $window.height(***REMOVED***
***REMOVED***;

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height***REMOVED***;
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height***REMOVED***;

    var css = {
      left: offset.left,
      top: container.bottom
***REMOVED***;

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position'***REMOVED*** === 'static'***REMOVED*** {
      $offsetParent = $offsetParent.offsetParent(***REMOVED***;
***REMOVED***

    var parentOffset = $offsetParent.offset(***REMOVED***;

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow***REMOVED*** {
      newDirection = 'below';
***REMOVED***

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove***REMOVED*** {
      newDirection = 'above';
***REMOVED*** else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove***REMOVED*** {
      newDirection = 'below';
***REMOVED***

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below'***REMOVED******REMOVED*** {
      css.top = container.top - parentOffset.top - dropdown.height;
***REMOVED***

    if (newDirection != null***REMOVED*** {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above'***REMOVED***
        .addClass('select2-dropdown--' + newDirection***REMOVED***;
      this.$container
        .removeClass('select2-container--below select2-container--above'***REMOVED***
        .addClass('select2-container--' + newDirection***REMOVED***;
***REMOVED***

    this.$dropdownContainer.css(css***REMOVED***;
  ***REMOVED***;

  AttachBody.prototype._resizeDropdown = function (***REMOVED*** {
    var css = {
      width: this.$container.outerWidth(false***REMOVED*** + 'px'
***REMOVED***;

    if (this.options.get('dropdownAutoWidth'***REMOVED******REMOVED*** {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
***REMOVED***

    this.$dropdown.css(css***REMOVED***;
  ***REMOVED***;

  AttachBody.prototype._showDropdown = function (decorated***REMOVED*** {
    this.$dropdownContainer.appendTo(this.$dropdownParent***REMOVED***;

    this._positionDropdown(***REMOVED***;
    this._resizeDropdown(***REMOVED***;
  ***REMOVED***;

  return AttachBody;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/minimumResultsForSearch',[

***REMOVED***, function (***REMOVED*** {
  function countResults (data***REMOVED*** {
    var count = 0;

    for (var d = 0; d < data.length; d++***REMOVED*** {
      var item = data[d***REMOVED***;

      if (item.children***REMOVED*** {
        count += countResults(item.children***REMOVED***;
  ***REMOVED*** else {
        count++;
  ***REMOVED***
***REMOVED***

    return count;
  ***REMOVED***

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter***REMOVED*** {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch'***REMOVED***;

    if (this.minimumResultsForSearch < 0***REMOVED*** {
      this.minimumResultsForSearch = Infinity;
***REMOVED***

    decorated.call(this, $element, options, dataAdapter***REMOVED***;
  ***REMOVED***

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params***REMOVED*** {
    if (countResults(params.data.results***REMOVED*** < this.minimumResultsForSearch***REMOVED*** {
      return false;
***REMOVED***

    return decorated.call(this, params***REMOVED***;
  ***REMOVED***;

  return MinimumResultsForSearch;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/selectOnClose',[

***REMOVED***, function (***REMOVED*** {
  function SelectOnClose (***REMOVED*** { ***REMOVED***

  SelectOnClose.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;

    decorated.call(this, container, $container***REMOVED***;

    container.on('close', function (params***REMOVED*** {
      self._handleSelectOnClose(params***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  SelectOnClose.prototype._handleSelectOnClose = function (_, params***REMOVED*** {
    if (params && params.originalSelect2Event != null***REMOVED*** {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect'***REMOVED*** {
        return;
  ***REMOVED***
***REMOVED***

    var $highlightedResults = this.getHighlightedResults(***REMOVED***;

    // Only select highlighted results
    if ($highlightedResults.length < 1***REMOVED*** {
      return;
***REMOVED***

    var data = $highlightedResults.data('data'***REMOVED***;

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected***REMOVED*** ||
      (data.element == null && data.selected***REMOVED***
    ***REMOVED*** {
      return;
***REMOVED***

    this.trigger('select', {
        data: data
***REMOVED******REMOVED***;
  ***REMOVED***;

  return SelectOnClose;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/closeOnSelect',[

***REMOVED***, function (***REMOVED*** {
  function CloseOnSelect (***REMOVED*** { ***REMOVED***

  CloseOnSelect.prototype.bind = function (decorated, container, $container***REMOVED*** {
    var self = this;

    decorated.call(this, container, $container***REMOVED***;

    container.on('select', function (evt***REMOVED*** {
      self._selectTriggered(evt***REMOVED***;
***REMOVED******REMOVED***;

    container.on('unselect', function (evt***REMOVED*** {
      self._selectTriggered(evt***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  CloseOnSelect.prototype._selectTriggered = function (_, evt***REMOVED*** {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey***REMOVED*** {
      return;
***REMOVED***

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
***REMOVED******REMOVED***;
  ***REMOVED***;

  return CloseOnSelect;
***REMOVED******REMOVED***;

S2.define('select2/i18n/en',[***REMOVED***,function (***REMOVED*** {
  // English
  return {
    errorLoading: function (***REMOVED*** {
      return 'The results could not be loaded.';
***REMOVED***
    inputTooLong: function (args***REMOVED*** {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1***REMOVED*** {
        message += 's';
  ***REMOVED***

      return message;
***REMOVED***
    inputTooShort: function (args***REMOVED*** {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
***REMOVED***
    loadingMore: function (***REMOVED*** {
      return 'Loading more results…';
***REMOVED***
    maximumSelected: function (args***REMOVED*** {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1***REMOVED*** {
        message += 's';
  ***REMOVED***

      return message;
***REMOVED***
    noResults: function (***REMOVED*** {
      return 'No results found';
***REMOVED***
    searching: function (***REMOVED*** {
      return 'Searching…';
***REMOVED***
  ***REMOVED***;
***REMOVED******REMOVED***;

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
***REMOVED***, function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation***REMOVED*** {
  function Defaults (***REMOVED*** {
    this.reset(***REMOVED***;
  ***REMOVED***

  Defaults.prototype.apply = function (options***REMOVED*** {
    options = $.extend(true, {***REMOVED***, this.defaults, options***REMOVED***;

    if (options.dataAdapter == null***REMOVED*** {
      if (options.ajax != null***REMOVED*** {
        options.dataAdapter = AjaxData;
  ***REMOVED*** else if (options.data != null***REMOVED*** {
        options.dataAdapter = ArrayData;
  ***REMOVED*** else {
        options.dataAdapter = SelectData;
  ***REMOVED***

      if (options.minimumInputLength > 0***REMOVED*** {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        ***REMOVED***;
  ***REMOVED***

      if (options.maximumInputLength > 0***REMOVED*** {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        ***REMOVED***;
  ***REMOVED***

      if (options.maximumSelectionLength > 0***REMOVED*** {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        ***REMOVED***;
  ***REMOVED***

      if (options.tags***REMOVED*** {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags***REMOVED***;
  ***REMOVED***

      if (options.tokenSeparators != null || options.tokenizer != null***REMOVED*** {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        ***REMOVED***;
  ***REMOVED***

      if (options.query != null***REMOVED*** {
        var Query = require(options.amdBase + 'compat/query'***REMOVED***;

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        ***REMOVED***;
  ***REMOVED***

      if (options.initSelection != null***REMOVED*** {
        var InitSelection = require(options.amdBase + 'compat/initSelection'***REMOVED***;

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        ***REMOVED***;
  ***REMOVED***
***REMOVED***

    if (options.resultsAdapter == null***REMOVED*** {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null***REMOVED*** {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        ***REMOVED***;
  ***REMOVED***

      if (options.placeholder != null***REMOVED*** {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        ***REMOVED***;
  ***REMOVED***

      if (options.selectOnClose***REMOVED*** {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        ***REMOVED***;
  ***REMOVED***
***REMOVED***

    if (options.dropdownAdapter == null***REMOVED*** {
      if (options.multiple***REMOVED*** {
        options.dropdownAdapter = Dropdown;
  ***REMOVED*** else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch***REMOVED***;

        options.dropdownAdapter = SearchableDropdown;
  ***REMOVED***

      if (options.minimumResultsForSearch !== 0***REMOVED*** {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        ***REMOVED***;
  ***REMOVED***

      if (options.closeOnSelect***REMOVED*** {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        ***REMOVED***;
  ***REMOVED***

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ***REMOVED*** {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss'***REMOVED***;

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        ***REMOVED***;
  ***REMOVED***

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      ***REMOVED***;
***REMOVED***

    if (options.selectionAdapter == null***REMOVED*** {
      if (options.multiple***REMOVED*** {
        options.selectionAdapter = MultipleSelection;
  ***REMOVED*** else {
        options.selectionAdapter = SingleSelection;
  ***REMOVED***

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null***REMOVED*** {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        ***REMOVED***;
  ***REMOVED***

      if (options.allowClear***REMOVED*** {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        ***REMOVED***;
  ***REMOVED***

      if (options.multiple***REMOVED*** {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        ***REMOVED***;
  ***REMOVED***

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ***REMOVED*** {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss'***REMOVED***;

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        ***REMOVED***;
  ***REMOVED***

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      ***REMOVED***;
***REMOVED***

    if (typeof options.language === 'string'***REMOVED*** {
      // Check if the language is specified with a region
      if (options.language.indexOf('-'***REMOVED*** > 0***REMOVED*** {
        // Extract the region information if it is included
        var languageParts = options.language.split('-'***REMOVED***;
        var baseLanguage = languageParts[0***REMOVED***;

        options.language = [options.language, baseLanguage***REMOVED***;
  ***REMOVED*** else {
        options.language = [options.language***REMOVED***;
  ***REMOVED***
***REMOVED***

    if ($.isArray(options.language***REMOVED******REMOVED*** {
      var languages = new Translation(***REMOVED***;
      options.language.push('en'***REMOVED***;

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++***REMOVED*** {
        var name = languageNames[l***REMOVED***;
        var language = {***REMOVED***;

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name***REMOVED***;
    ***REMOVED*** catch (e***REMOVED*** {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name***REMOVED***;
      ***REMOVED*** catch (ex***REMOVED*** {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn***REMOVED*** {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              ***REMOVED***;
        ***REMOVED***

            continue;
      ***REMOVED***
    ***REMOVED***

        languages.extend(language***REMOVED***;
  ***REMOVED***

      options.translations = languages;
***REMOVED*** else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      ***REMOVED***;
      var customTranslation = new Translation(options.language***REMOVED***;

      customTranslation.extend(baseTranslation***REMOVED***;

      options.translations = customTranslation;
***REMOVED***

    return options;
  ***REMOVED***;

  Defaults.prototype.reset = function (***REMOVED*** {
    function stripDiacritics (text***REMOVED*** {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a***REMOVED*** {
        return DIACRITICS[a***REMOVED*** || a;
  ***REMOVED***

      return text.replace(/[^\u0000-\u007E***REMOVED***/g, match***REMOVED***;
***REMOVED***

    function matcher (params, data***REMOVED*** {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term***REMOVED*** === ''***REMOVED*** {
        return data;
  ***REMOVED***

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0***REMOVED*** {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {***REMOVED***, data***REMOVED***;

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--***REMOVED*** {
          var child = data.children[c***REMOVED***;

          var matches = matcher(params, child***REMOVED***;

          // If there wasn't a match, remove the object in the array
          if (matches == null***REMOVED*** {
            match.children.splice(c, 1***REMOVED***;
      ***REMOVED***
    ***REMOVED***

        // If any children matched, return the new object
        if (match.children.length > 0***REMOVED*** {
          return match;
    ***REMOVED***

        // If there were no matching children, check just the plain object
        return matcher(params, match***REMOVED***;
  ***REMOVED***

      var original = stripDiacritics(data.text***REMOVED***.toUpperCase(***REMOVED***;
      var term = stripDiacritics(params.term***REMOVED***.toUpperCase(***REMOVED***;

      // Check if the text contains the term
      if (original.indexOf(term***REMOVED*** > -1***REMOVED*** {
        return data;
  ***REMOVED***

      // If it doesn't contain the term, don't return anything
      return null;
***REMOVED***

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data***REMOVED*** {
        return data;
  ***REMOVED***
      templateResult: function (result***REMOVED*** {
        return result.text;
  ***REMOVED***
      templateSelection: function (selection***REMOVED*** {
        return selection.text;
  ***REMOVED***
      theme: 'default',
      width: 'resolve'
***REMOVED***;
  ***REMOVED***;

  Defaults.prototype.set = function (key, value***REMOVED*** {
    var camelKey = $.camelCase(key***REMOVED***;

    var data = {***REMOVED***;
    data[camelKey***REMOVED*** = value;

    var convertedData = Utils._convertData(data***REMOVED***;

    $.extend(this.defaults, convertedData***REMOVED***;
  ***REMOVED***;

  var defaults = new Defaults(***REMOVED***;

  return defaults;
***REMOVED******REMOVED***;

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
***REMOVED***, function (require, $, Defaults, Utils***REMOVED*** {
  function Options (options, $element***REMOVED*** {
    this.options = options;

    if ($element != null***REMOVED*** {
      this.fromElement($element***REMOVED***;
***REMOVED***

    this.options = Defaults.apply(this.options***REMOVED***;

    if ($element && $element.is('input'***REMOVED******REMOVED*** {
      var InputCompat = require(this.get('amdBase'***REMOVED*** + 'compat/inputData'***REMOVED***;

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      ***REMOVED***;
***REMOVED***
  ***REMOVED***

  Options.prototype.fromElement = function ($e***REMOVED*** {
    var excludedData = ['select2'***REMOVED***;

    if (this.options.multiple == null***REMOVED*** {
      this.options.multiple = $e.prop('multiple'***REMOVED***;
***REMOVED***

    if (this.options.disabled == null***REMOVED*** {
      this.options.disabled = $e.prop('disabled'***REMOVED***;
***REMOVED***

    if (this.options.language == null***REMOVED*** {
      if ($e.prop('lang'***REMOVED******REMOVED*** {
        this.options.language = $e.prop('lang'***REMOVED***.toLowerCase(***REMOVED***;
  ***REMOVED*** else if ($e.closest('[lang***REMOVED***'***REMOVED***.prop('lang'***REMOVED******REMOVED*** {
        this.options.language = $e.closest('[lang***REMOVED***'***REMOVED***.prop('lang'***REMOVED***;
  ***REMOVED***
***REMOVED***

    if (this.options.dir == null***REMOVED*** {
      if ($e.prop('dir'***REMOVED******REMOVED*** {
        this.options.dir = $e.prop('dir'***REMOVED***;
  ***REMOVED*** else if ($e.closest('[dir***REMOVED***'***REMOVED***.prop('dir'***REMOVED******REMOVED*** {
        this.options.dir = $e.closest('[dir***REMOVED***'***REMOVED***.prop('dir'***REMOVED***;
  ***REMOVED*** else {
        this.options.dir = 'ltr';
  ***REMOVED***
***REMOVED***

    $e.prop('disabled', this.options.disabled***REMOVED***;
    $e.prop('multiple', this.options.multiple***REMOVED***;

    if ($e.data('select2Tags'***REMOVED******REMOVED*** {
      if (this.options.debug && window.console && console.warn***REMOVED*** {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        ***REMOVED***;
  ***REMOVED***

      $e.data('data', $e.data('select2Tags'***REMOVED******REMOVED***;
      $e.data('tags', true***REMOVED***;
***REMOVED***

    if ($e.data('ajaxUrl'***REMOVED******REMOVED*** {
      if (this.options.debug && window.console && console.warn***REMOVED*** {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        ***REMOVED***;
  ***REMOVED***

      $e.attr('ajax--url', $e.data('ajaxUrl'***REMOVED******REMOVED***;
      $e.data('ajax--url', $e.data('ajaxUrl'***REMOVED******REMOVED***;
***REMOVED***

    var dataset = {***REMOVED***;

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2***REMOVED*** == '1.' && $e[0***REMOVED***.dataset***REMOVED*** {
      dataset = $.extend(true, {***REMOVED***, $e[0***REMOVED***.dataset, $e.data(***REMOVED******REMOVED***;
***REMOVED*** else {
      dataset = $e.data(***REMOVED***;
***REMOVED***

    var data = $.extend(true, {***REMOVED***, dataset***REMOVED***;

    data = Utils._convertData(data***REMOVED***;

    for (var key in data***REMOVED*** {
      if ($.inArray(key, excludedData***REMOVED*** > -1***REMOVED*** {
        continue;
  ***REMOVED***

      if ($.isPlainObject(this.options[key***REMOVED******REMOVED******REMOVED*** {
        $.extend(this.options[key***REMOVED***, data[key***REMOVED******REMOVED***;
  ***REMOVED*** else {
        this.options[key***REMOVED*** = data[key***REMOVED***;
  ***REMOVED***
***REMOVED***

    return this;
  ***REMOVED***;

  Options.prototype.get = function (key***REMOVED*** {
    return this.options[key***REMOVED***;
  ***REMOVED***;

  Options.prototype.set = function (key, val***REMOVED*** {
    this.options[key***REMOVED*** = val;
  ***REMOVED***;

  return Options;
***REMOVED******REMOVED***;

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
***REMOVED***, function ($, Options, Utils, KEYS***REMOVED*** {
  var Select2 = function ($element, options***REMOVED*** {
    if ($element.data('select2'***REMOVED*** != null***REMOVED*** {
      $element.data('select2'***REMOVED***.destroy(***REMOVED***;
***REMOVED***

    this.$element = $element;

    this.id = this._generateId($element***REMOVED***;

    options = options || {***REMOVED***;

    this.options = new Options(options, $element***REMOVED***;

    Select2.__super__.constructor.call(this***REMOVED***;

    // Set up the tabindex

    var tabindex = $element.attr('tabindex'***REMOVED*** || 0;
    $element.data('old-tabindex', tabindex***REMOVED***;
    $element.attr('tabindex', '-1'***REMOVED***;

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter'***REMOVED***;
    this.dataAdapter = new DataAdapter($element, this.options***REMOVED***;

    var $container = this.render(***REMOVED***;

    this._placeContainer($container***REMOVED***;

    var SelectionAdapter = this.options.get('selectionAdapter'***REMOVED***;
    this.selection = new SelectionAdapter($element, this.options***REMOVED***;
    this.$selection = this.selection.render(***REMOVED***;

    this.selection.position(this.$selection, $container***REMOVED***;

    var DropdownAdapter = this.options.get('dropdownAdapter'***REMOVED***;
    this.dropdown = new DropdownAdapter($element, this.options***REMOVED***;
    this.$dropdown = this.dropdown.render(***REMOVED***;

    this.dropdown.position(this.$dropdown, $container***REMOVED***;

    var ResultsAdapter = this.options.get('resultsAdapter'***REMOVED***;
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter***REMOVED***;
    this.$results = this.results.render(***REMOVED***;

    this.results.position(this.$results, this.$dropdown***REMOVED***;

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters(***REMOVED***;

    // Register any DOM event handlers
    this._registerDomEvents(***REMOVED***;

    // Register any internal event handlers
    this._registerDataEvents(***REMOVED***;
    this._registerSelectionEvents(***REMOVED***;
    this._registerDropdownEvents(***REMOVED***;
    this._registerResultsEvents(***REMOVED***;
    this._registerEvents(***REMOVED***;

    // Set the initial state
    this.dataAdapter.current(function (initialData***REMOVED*** {
      self.trigger('selection:update', {
        data: initialData
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    // Hide the original select
    $element.addClass('select2-hidden-accessible'***REMOVED***;
    $element.attr('aria-hidden', 'true'***REMOVED***;

    // Synchronize any monitored attributes
    this._syncAttributes(***REMOVED***;

    $element.data('select2', this***REMOVED***;
  ***REMOVED***;

  Utils.Extend(Select2, Utils.Observable***REMOVED***;

  Select2.prototype._generateId = function ($element***REMOVED*** {
    var id = '';

    if ($element.attr('id'***REMOVED*** != null***REMOVED*** {
      id = $element.attr('id'***REMOVED***;
***REMOVED*** else if ($element.attr('name'***REMOVED*** != null***REMOVED*** {
      id = $element.attr('name'***REMOVED*** + '-' + Utils.generateChars(2***REMOVED***;
***REMOVED*** else {
      id = Utils.generateChars(4***REMOVED***;
***REMOVED***

    id = id.replace(/(:|\.|\[|\***REMOVED***|,***REMOVED***/g, ''***REMOVED***;
    id = 'select2-' + id;

    return id;
  ***REMOVED***;

  Select2.prototype._placeContainer = function ($container***REMOVED*** {
    $container.insertAfter(this.$element***REMOVED***;

    var width = this._resolveWidth(this.$element, this.options.get('width'***REMOVED******REMOVED***;

    if (width != null***REMOVED*** {
      $container.css('width', width***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Select2.prototype._resolveWidth = function ($element, method***REMOVED*** {
    var WIDTH = /^width:(([-+***REMOVED***?([0-9***REMOVED****\.***REMOVED***?[0-9***REMOVED***+***REMOVED***(px|em|ex|%|in|cm|mm|pt|pc***REMOVED******REMOVED***/i;

    if (method == 'resolve'***REMOVED*** {
      var styleWidth = this._resolveWidth($element, 'style'***REMOVED***;

      if (styleWidth != null***REMOVED*** {
        return styleWidth;
  ***REMOVED***

      return this._resolveWidth($element, 'element'***REMOVED***;
***REMOVED***

    if (method == 'element'***REMOVED*** {
      var elementWidth = $element.outerWidth(false***REMOVED***;

      if (elementWidth <= 0***REMOVED*** {
        return 'auto';
  ***REMOVED***

      return elementWidth + 'px';
***REMOVED***

    if (method == 'style'***REMOVED*** {
      var style = $element.attr('style'***REMOVED***;

      if (typeof(style***REMOVED*** !== 'string'***REMOVED*** {
        return null;
  ***REMOVED***

      var attrs = style.split(';'***REMOVED***;

      for (var i = 0, l = attrs.length; i < l; i = i + 1***REMOVED*** {
        var attr = attrs[i***REMOVED***.replace(/\s/g, ''***REMOVED***;
        var matches = attr.match(WIDTH***REMOVED***;

        if (matches !== null && matches.length >= 1***REMOVED*** {
          return matches[1***REMOVED***;
    ***REMOVED***
  ***REMOVED***

      return null;
***REMOVED***

    return method;
  ***REMOVED***;

  Select2.prototype._bindAdapters = function (***REMOVED*** {
    this.dataAdapter.bind(this, this.$container***REMOVED***;
    this.selection.bind(this, this.$container***REMOVED***;

    this.dropdown.bind(this, this.$container***REMOVED***;
    this.results.bind(this, this.$container***REMOVED***;
  ***REMOVED***;

  Select2.prototype._registerDomEvents = function (***REMOVED*** {
    var self = this;

    this.$element.on('change.select2', function (***REMOVED*** {
      self.dataAdapter.current(function (data***REMOVED*** {
        self.trigger('selection:update', {
          data: data
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    this.$element.on('focus.select2', function (evt***REMOVED*** {
      self.trigger('focus', evt***REMOVED***;
***REMOVED******REMOVED***;

    this._syncA = Utils.bind(this._syncAttributes, this***REMOVED***;
    this._syncS = Utils.bind(this._syncSubtree, this***REMOVED***;

    if (this.$element[0***REMOVED***.attachEvent***REMOVED*** {
      this.$element[0***REMOVED***.attachEvent('onpropertychange', this._syncA***REMOVED***;
***REMOVED***

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null***REMOVED*** {
      this._observer = new observer(function (mutations***REMOVED*** {
        $.each(mutations, self._syncA***REMOVED***;
        $.each(mutations, self._syncS***REMOVED***;
  ***REMOVED******REMOVED***;
      this._observer.observe(this.$element[0***REMOVED***, {
        attributes: true,
        childList: true,
        subtree: false
  ***REMOVED******REMOVED***;
***REMOVED*** else if (this.$element[0***REMOVED***.addEventListener***REMOVED*** {
      this.$element[0***REMOVED***.addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      ***REMOVED***;
      this.$element[0***REMOVED***.addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      ***REMOVED***;
      this.$element[0***REMOVED***.addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      ***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Select2.prototype._registerDataEvents = function (***REMOVED*** {
    var self = this;

    this.dataAdapter.on('*', function (name, params***REMOVED*** {
      self.trigger(name, params***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype._registerSelectionEvents = function (***REMOVED*** {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'***REMOVED***;

    this.selection.on('toggle', function (***REMOVED*** {
      self.toggleDropdown(***REMOVED***;
***REMOVED******REMOVED***;

    this.selection.on('focus', function (params***REMOVED*** {
      self.focus(params***REMOVED***;
***REMOVED******REMOVED***;

    this.selection.on('*', function (name, params***REMOVED*** {
      if ($.inArray(name, nonRelayEvents***REMOVED*** !== -1***REMOVED*** {
        return;
  ***REMOVED***

      self.trigger(name, params***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype._registerDropdownEvents = function (***REMOVED*** {
    var self = this;

    this.dropdown.on('*', function (name, params***REMOVED*** {
      self.trigger(name, params***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype._registerResultsEvents = function (***REMOVED*** {
    var self = this;

    this.results.on('*', function (name, params***REMOVED*** {
      self.trigger(name, params***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype._registerEvents = function (***REMOVED*** {
    var self = this;

    this.on('open', function (***REMOVED*** {
      self.$container.addClass('select2-container--open'***REMOVED***;
***REMOVED******REMOVED***;

    this.on('close', function (***REMOVED*** {
      self.$container.removeClass('select2-container--open'***REMOVED***;
***REMOVED******REMOVED***;

    this.on('enable', function (***REMOVED*** {
      self.$container.removeClass('select2-container--disabled'***REMOVED***;
***REMOVED******REMOVED***;

    this.on('disable', function (***REMOVED*** {
      self.$container.addClass('select2-container--disabled'***REMOVED***;
***REMOVED******REMOVED***;

    this.on('blur', function (***REMOVED*** {
      self.$container.removeClass('select2-container--focus'***REMOVED***;
***REMOVED******REMOVED***;

    this.on('query', function (params***REMOVED*** {
      if (!self.isOpen(***REMOVED******REMOVED*** {
        self.trigger('open', {***REMOVED******REMOVED***;
  ***REMOVED***

      this.dataAdapter.query(params, function (data***REMOVED*** {
        self.trigger('results:all', {
          data: data,
          query: params
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    this.on('query:append', function (params***REMOVED*** {
      this.dataAdapter.query(params, function (data***REMOVED*** {
        self.trigger('results:append', {
          data: data,
          query: params
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

    this.on('keypress', function (evt***REMOVED*** {
      var key = evt.which;

      if (self.isOpen(***REMOVED******REMOVED*** {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey***REMOVED******REMOVED*** {
          self.close(***REMOVED***;

          evt.preventDefault(***REMOVED***;
    ***REMOVED*** else if (key === KEYS.ENTER***REMOVED*** {
          self.trigger('results:select', {***REMOVED******REMOVED***;

          evt.preventDefault(***REMOVED***;
    ***REMOVED*** else if ((key === KEYS.SPACE && evt.ctrlKey***REMOVED******REMOVED*** {
          self.trigger('results:toggle', {***REMOVED******REMOVED***;

          evt.preventDefault(***REMOVED***;
    ***REMOVED*** else if (key === KEYS.UP***REMOVED*** {
          self.trigger('results:previous', {***REMOVED******REMOVED***;

          evt.preventDefault(***REMOVED***;
    ***REMOVED*** else if (key === KEYS.DOWN***REMOVED*** {
          self.trigger('results:next', {***REMOVED******REMOVED***;

          evt.preventDefault(***REMOVED***;
    ***REMOVED***
  ***REMOVED*** else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey***REMOVED******REMOVED*** {
          self.open(***REMOVED***;

          evt.preventDefault(***REMOVED***;
    ***REMOVED***
  ***REMOVED***
***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype._syncAttributes = function (***REMOVED*** {
    this.options.set('disabled', this.$element.prop('disabled'***REMOVED******REMOVED***;

    if (this.options.get('disabled'***REMOVED******REMOVED*** {
      if (this.isOpen(***REMOVED******REMOVED*** {
        this.close(***REMOVED***;
  ***REMOVED***

      this.trigger('disable', {***REMOVED******REMOVED***;
***REMOVED*** else {
      this.trigger('enable', {***REMOVED******REMOVED***;
***REMOVED***
  ***REMOVED***;

  Select2.prototype._syncSubtree = function (evt, mutations***REMOVED*** {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      ***REMOVED***
    ***REMOVED*** {
      return;
***REMOVED***

    if (!mutations***REMOVED*** {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
***REMOVED*** else if (mutations.addedNodes && mutations.addedNodes.length > 0***REMOVED*** {
      for (var n = 0; n < mutations.addedNodes.length; n++***REMOVED*** {
        var node = mutations.addedNodes[n***REMOVED***;

        if (node.selected***REMOVED*** {
          changed = true;
    ***REMOVED***
  ***REMOVED***
***REMOVED*** else if (mutations.removedNodes && mutations.removedNodes.length > 0***REMOVED*** {
      changed = true;
***REMOVED***

    // Only re-pull the data if we think there is a change
    if (changed***REMOVED*** {
      this.dataAdapter.current(function (currentData***REMOVED*** {
        self.trigger('selection:update', {
          data: currentData
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED***
  ***REMOVED***;

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args***REMOVED*** {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
***REMOVED***;

    if (args === undefined***REMOVED*** {
      args = {***REMOVED***;
***REMOVED***

    if (name in preTriggerMap***REMOVED*** {
      var preTriggerName = preTriggerMap[name***REMOVED***;
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
  ***REMOVED***;

      actualTrigger.call(this, preTriggerName, preTriggerArgs***REMOVED***;

      if (preTriggerArgs.prevented***REMOVED*** {
        args.prevented = true;

        return;
  ***REMOVED***
***REMOVED***

    actualTrigger.call(this, name, args***REMOVED***;
  ***REMOVED***;

  Select2.prototype.toggleDropdown = function (***REMOVED*** {
    if (this.options.get('disabled'***REMOVED******REMOVED*** {
      return;
***REMOVED***

    if (this.isOpen(***REMOVED******REMOVED*** {
      this.close(***REMOVED***;
***REMOVED*** else {
      this.open(***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Select2.prototype.open = function (***REMOVED*** {
    if (this.isOpen(***REMOVED******REMOVED*** {
      return;
***REMOVED***

    this.trigger('query', {***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype.close = function (***REMOVED*** {
    if (!this.isOpen(***REMOVED******REMOVED*** {
      return;
***REMOVED***

    this.trigger('close', {***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype.isOpen = function (***REMOVED*** {
    return this.$container.hasClass('select2-container--open'***REMOVED***;
  ***REMOVED***;

  Select2.prototype.hasFocus = function (***REMOVED*** {
    return this.$container.hasClass('select2-container--focus'***REMOVED***;
  ***REMOVED***;

  Select2.prototype.focus = function (data***REMOVED*** {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus(***REMOVED******REMOVED*** {
      return;
***REMOVED***

    this.$container.addClass('select2-container--focus'***REMOVED***;
    this.trigger('focus', {***REMOVED******REMOVED***;
  ***REMOVED***;

  Select2.prototype.enable = function (args***REMOVED*** {
    if (this.options.get('debug'***REMOVED*** && window.console && console.warn***REMOVED*** {
      console.warn(
        'Select2: The `select2("enable"***REMOVED***` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled"***REMOVED***' +
        ' instead.'
      ***REMOVED***;
***REMOVED***

    if (args == null || args.length === 0***REMOVED*** {
      args = [true***REMOVED***;
***REMOVED***

    var disabled = !args[0***REMOVED***;

    this.$element.prop('disabled', disabled***REMOVED***;
  ***REMOVED***;

  Select2.prototype.data = function (***REMOVED*** {
    if (this.options.get('debug'***REMOVED*** &&
        arguments.length > 0 && window.console && console.warn***REMOVED*** {
      console.warn(
        'Select2: Data can no longer be set using `select2("data"***REMOVED***`. You ' +
        'should consider setting the value instead using `$element.val(***REMOVED***`.'
      ***REMOVED***;
***REMOVED***

    var data = [***REMOVED***;

    this.dataAdapter.current(function (currentData***REMOVED*** {
      data = currentData;
***REMOVED******REMOVED***;

    return data;
  ***REMOVED***;

  Select2.prototype.val = function (args***REMOVED*** {
    if (this.options.get('debug'***REMOVED*** && window.console && console.warn***REMOVED*** {
      console.warn(
        'Select2: The `select2("val"***REMOVED***` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val(***REMOVED*** instead.'
      ***REMOVED***;
***REMOVED***

    if (args == null || args.length === 0***REMOVED*** {
      return this.$element.val(***REMOVED***;
***REMOVED***

    var newVal = args[0***REMOVED***;

    if ($.isArray(newVal***REMOVED******REMOVED*** {
      newVal = $.map(newVal, function (obj***REMOVED*** {
        return obj.toString(***REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED***

    this.$element.val(newVal***REMOVED***.trigger('change'***REMOVED***;
  ***REMOVED***;

  Select2.prototype.destroy = function (***REMOVED*** {
    this.$container.remove(***REMOVED***;

    if (this.$element[0***REMOVED***.detachEvent***REMOVED*** {
      this.$element[0***REMOVED***.detachEvent('onpropertychange', this._syncA***REMOVED***;
***REMOVED***

    if (this._observer != null***REMOVED*** {
      this._observer.disconnect(***REMOVED***;
      this._observer = null;
***REMOVED*** else if (this.$element[0***REMOVED***.removeEventListener***REMOVED*** {
      this.$element[0***REMOVED***
        .removeEventListener('DOMAttrModified', this._syncA, false***REMOVED***;
      this.$element[0***REMOVED***
        .removeEventListener('DOMNodeInserted', this._syncS, false***REMOVED***;
      this.$element[0***REMOVED***
        .removeEventListener('DOMNodeRemoved', this._syncS, false***REMOVED***;
***REMOVED***

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2'***REMOVED***;
    this.$element.attr('tabindex', this.$element.data('old-tabindex'***REMOVED******REMOVED***;

    this.$element.removeClass('select2-hidden-accessible'***REMOVED***;
    this.$element.attr('aria-hidden', 'false'***REMOVED***;
    this.$element.removeData('select2'***REMOVED***;

    this.dataAdapter.destroy(***REMOVED***;
    this.selection.destroy(***REMOVED***;
    this.dropdown.destroy(***REMOVED***;
    this.results.destroy(***REMOVED***;

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  ***REMOVED***;

  Select2.prototype.render = function (***REMOVED*** {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    ***REMOVED***;

    $container.attr('dir', this.options.get('dir'***REMOVED******REMOVED***;

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'***REMOVED******REMOVED***;

    $container.data('element', this.$element***REMOVED***;

    return $container;
  ***REMOVED***;

  return Select2;
***REMOVED******REMOVED***;

S2.define('select2/compat/utils',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function syncCssClasses ($dest, $src, adapter***REMOVED*** {
    var classes, replacements = [***REMOVED***, adapted;

    classes = $.trim($dest.attr('class'***REMOVED******REMOVED***;

    if (classes***REMOVED*** {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/***REMOVED******REMOVED***.each(function (***REMOVED*** {
        // Save all Select2 classes
        if (this.indexOf('select2-'***REMOVED*** === 0***REMOVED*** {
          replacements.push(this***REMOVED***;
    ***REMOVED***
  ***REMOVED******REMOVED***;
***REMOVED***

    classes = $.trim($src.attr('class'***REMOVED******REMOVED***;

    if (classes***REMOVED*** {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/***REMOVED******REMOVED***.each(function (***REMOVED*** {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-'***REMOVED*** !== 0***REMOVED*** {
          adapted = adapter(this***REMOVED***;

          if (adapted != null***REMOVED*** {
            replacements.push(adapted***REMOVED***;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED******REMOVED***;
***REMOVED***

    $dest.attr('class', replacements.join(' '***REMOVED******REMOVED***;
  ***REMOVED***

  return {
    syncCssClasses: syncCssClasses
  ***REMOVED***;
***REMOVED******REMOVED***;

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
***REMOVED***, function ($, CompatUtils***REMOVED*** {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz***REMOVED*** {
    return null;
  ***REMOVED***

  function ContainerCSS (***REMOVED*** { ***REMOVED***

  ContainerCSS.prototype.render = function (decorated***REMOVED*** {
    var $container = decorated.call(this***REMOVED***;

    var containerCssClass = this.options.get('containerCssClass'***REMOVED*** || '';

    if ($.isFunction(containerCssClass***REMOVED******REMOVED*** {
      containerCssClass = containerCssClass(this.$element***REMOVED***;
***REMOVED***

    var containerCssAdapter = this.options.get('adaptContainerCssClass'***REMOVED***;
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:'***REMOVED*** !== -1***REMOVED*** {
      containerCssClass = containerCssClass.replace(':all:', ''***REMOVED***;

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz***REMOVED*** {
        var adapted = _cssAdapter(clazz***REMOVED***;

        if (adapted != null***REMOVED*** {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
    ***REMOVED***

        return clazz;
  ***REMOVED***;
***REMOVED***

    var containerCss = this.options.get('containerCss'***REMOVED*** || {***REMOVED***;

    if ($.isFunction(containerCss***REMOVED******REMOVED*** {
      containerCss = containerCss(this.$element***REMOVED***;
***REMOVED***

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter***REMOVED***;

    $container.css(containerCss***REMOVED***;
    $container.addClass(containerCssClass***REMOVED***;

    return $container;
  ***REMOVED***;

  return ContainerCSS;
***REMOVED******REMOVED***;

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
***REMOVED***, function ($, CompatUtils***REMOVED*** {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz***REMOVED*** {
    return null;
  ***REMOVED***

  function DropdownCSS (***REMOVED*** { ***REMOVED***

  DropdownCSS.prototype.render = function (decorated***REMOVED*** {
    var $dropdown = decorated.call(this***REMOVED***;

    var dropdownCssClass = this.options.get('dropdownCssClass'***REMOVED*** || '';

    if ($.isFunction(dropdownCssClass***REMOVED******REMOVED*** {
      dropdownCssClass = dropdownCssClass(this.$element***REMOVED***;
***REMOVED***

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass'***REMOVED***;
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:'***REMOVED*** !== -1***REMOVED*** {
      dropdownCssClass = dropdownCssClass.replace(':all:', ''***REMOVED***;

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz***REMOVED*** {
        var adapted = _cssAdapter(clazz***REMOVED***;

        if (adapted != null***REMOVED*** {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
    ***REMOVED***

        return clazz;
  ***REMOVED***;
***REMOVED***

    var dropdownCss = this.options.get('dropdownCss'***REMOVED*** || {***REMOVED***;

    if ($.isFunction(dropdownCss***REMOVED******REMOVED*** {
      dropdownCss = dropdownCss(this.$element***REMOVED***;
***REMOVED***

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter***REMOVED***;

    $dropdown.css(dropdownCss***REMOVED***;
    $dropdown.addClass(dropdownCssClass***REMOVED***;

    return $dropdown;
  ***REMOVED***;

  return DropdownCSS;
***REMOVED******REMOVED***;

S2.define('select2/compat/initSelection',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function InitSelection (decorated, $element, options***REMOVED*** {
    if (options.get('debug'***REMOVED*** && window.console && console.warn***REMOVED*** {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      ***REMOVED***;
***REMOVED***

    this.initSelection = options.get('initSelection'***REMOVED***;
    this._isInitialized = false;

    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  InitSelection.prototype.current = function (decorated, callback***REMOVED*** {
    var self = this;

    if (this._isInitialized***REMOVED*** {
      decorated.call(this, callback***REMOVED***;

      return;
***REMOVED***

    this.initSelection.call(null, this.$element, function (data***REMOVED*** {
      self._isInitialized = true;

      if (!$.isArray(data***REMOVED******REMOVED*** {
        data = [data***REMOVED***;
  ***REMOVED***

      callback(data***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  return InitSelection;
***REMOVED******REMOVED***;

S2.define('select2/compat/inputData',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function InputData (decorated, $element, options***REMOVED*** {
    this._currentData = [***REMOVED***;
    this._valueSeparator = options.get('valueSeparator'***REMOVED*** || ',';

    if ($element.prop('type'***REMOVED*** === 'hidden'***REMOVED*** {
      if (options.get('debug'***REMOVED*** && console && console.warn***REMOVED*** {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        ***REMOVED***;
  ***REMOVED***
***REMOVED***

    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  InputData.prototype.current = function (_, callback***REMOVED*** {
    function getSelected (data, selectedIds***REMOVED*** {
      var selected = [***REMOVED***;

      if (data.selected || $.inArray(data.id, selectedIds***REMOVED*** !== -1***REMOVED*** {
        data.selected = true;
        selected.push(data***REMOVED***;
  ***REMOVED*** else {
        data.selected = false;
  ***REMOVED***

      if (data.children***REMOVED*** {
        selected.push.apply(selected, getSelected(data.children, selectedIds***REMOVED******REMOVED***;
  ***REMOVED***

      return selected;
***REMOVED***

    var selected = [***REMOVED***;

    for (var d = 0; d < this._currentData.length; d++***REMOVED*** {
      var data = this._currentData[d***REMOVED***;

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val(***REMOVED***.split(
            this._valueSeparator
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***;
***REMOVED***

    callback(selected***REMOVED***;
  ***REMOVED***;

  InputData.prototype.select = function (_, data***REMOVED*** {
    if (!this.options.get('multiple'***REMOVED******REMOVED*** {
      this.current(function (allData***REMOVED*** {
        $.map(allData, function (data***REMOVED*** {
          data.selected = false;
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;

      this.$element.val(data.id***REMOVED***;
      this.$element.trigger('change'***REMOVED***;
***REMOVED*** else {
      var value = this.$element.val(***REMOVED***;
      value += this._valueSeparator + data.id;

      this.$element.val(value***REMOVED***;
      this.$element.trigger('change'***REMOVED***;
***REMOVED***
  ***REMOVED***;

  InputData.prototype.unselect = function (_, data***REMOVED*** {
    var self = this;

    data.selected = false;

    this.current(function (allData***REMOVED*** {
      var values = [***REMOVED***;

      for (var d = 0; d < allData.length; d++***REMOVED*** {
        var item = allData[d***REMOVED***;

        if (data.id == item.id***REMOVED*** {
          continue;
    ***REMOVED***

        values.push(item.id***REMOVED***;
  ***REMOVED***

      self.$element.val(values.join(self._valueSeparator***REMOVED******REMOVED***;
      self.$element.trigger('change'***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  InputData.prototype.query = function (_, params, callback***REMOVED*** {
    var results = [***REMOVED***;

    for (var d = 0; d < this._currentData.length; d++***REMOVED*** {
      var data = this._currentData[d***REMOVED***;

      var matches = this.matches(params, data***REMOVED***;

      if (matches !== null***REMOVED*** {
        results.push(matches***REMOVED***;
  ***REMOVED***
***REMOVED***

    callback({
      results: results
***REMOVED******REMOVED***;
  ***REMOVED***;

  InputData.prototype.addOptions = function (_, $options***REMOVED*** {
    var options = $.map($options, function ($option***REMOVED*** {
      return $.data($option[0***REMOVED***, 'data'***REMOVED***;
***REMOVED******REMOVED***;

    this._currentData.push.apply(this._currentData, options***REMOVED***;
  ***REMOVED***;

  return InputData;
***REMOVED******REMOVED***;

S2.define('select2/compat/matcher',[
  'jquery'
***REMOVED***, function ($***REMOVED*** {
  function oldMatcher (matcher***REMOVED*** {
    function wrappedMatcher (params, data***REMOVED*** {
      var match = $.extend(true, {***REMOVED***, data***REMOVED***;

      if (params.term == null || $.trim(params.term***REMOVED*** === ''***REMOVED*** {
        return match;
  ***REMOVED***

      if (data.children***REMOVED*** {
        for (var c = data.children.length - 1; c >= 0; c--***REMOVED*** {
          var child = data.children[c***REMOVED***;

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child***REMOVED***;

          // If the child didn't match, pop it off
          if (!doesMatch***REMOVED*** {
            match.children.splice(c, 1***REMOVED***;
      ***REMOVED***
    ***REMOVED***

        if (match.children.length > 0***REMOVED*** {
          return match;
    ***REMOVED***
  ***REMOVED***

      if (matcher(params.term, data.text, data***REMOVED******REMOVED*** {
        return match;
  ***REMOVED***

      return null;
***REMOVED***

    return wrappedMatcher;
  ***REMOVED***

  return oldMatcher;
***REMOVED******REMOVED***;

S2.define('select2/compat/query',[

***REMOVED***, function (***REMOVED*** {
  function Query (decorated, $element, options***REMOVED*** {
    if (options.get('debug'***REMOVED*** && window.console && console.warn***REMOVED*** {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      ***REMOVED***;
***REMOVED***

    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  Query.prototype.query = function (_, params, callback***REMOVED*** {
    params.callback = callback;

    var query = this.options.get('query'***REMOVED***;

    query.call(null, params***REMOVED***;
  ***REMOVED***;

  return Query;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/attachContainer',[

***REMOVED***, function (***REMOVED*** {
  function AttachContainer (decorated, $element, options***REMOVED*** {
    decorated.call(this, $element, options***REMOVED***;
  ***REMOVED***

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container***REMOVED*** {
    var $dropdownContainer = $container.find('.dropdown-wrapper'***REMOVED***;
    $dropdownContainer.append($dropdown***REMOVED***;

    $dropdown.addClass('select2-dropdown--below'***REMOVED***;
    $container.addClass('select2-container--below'***REMOVED***;
  ***REMOVED***;

  return AttachContainer;
***REMOVED******REMOVED***;

S2.define('select2/dropdown/stopPropagation',[

***REMOVED***, function (***REMOVED*** {
  function StopPropagation (***REMOVED*** { ***REMOVED***

  StopPropagation.prototype.bind = function (decorated, container, $container***REMOVED*** {
    decorated.call(this, container, $container***REMOVED***;

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ***REMOVED***;

    this.$dropdown.on(stoppedEvents.join(' '***REMOVED***, function (evt***REMOVED*** {
      evt.stopPropagation(***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  return StopPropagation;
***REMOVED******REMOVED***;

S2.define('select2/selection/stopPropagation',[

***REMOVED***, function (***REMOVED*** {
  function StopPropagation (***REMOVED*** { ***REMOVED***

  StopPropagation.prototype.bind = function (decorated, container, $container***REMOVED*** {
    decorated.call(this, container, $container***REMOVED***;

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ***REMOVED***;

    this.$selection.on(stoppedEvents.join(' '***REMOVED***, function (evt***REMOVED*** {
      evt.stopPropagation(***REMOVED***;
***REMOVED******REMOVED***;
  ***REMOVED***;

  return StopPropagation;
***REMOVED******REMOVED***;

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory***REMOVED*** {
    if ( typeof S2.define === 'function' && S2.define.amd ***REMOVED*** {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'***REMOVED***, factory***REMOVED***;
***REMOVED*** else if (typeof exports === 'object'***REMOVED*** {
        // Node/CommonJS style for Browserify
        module.exports = factory;
***REMOVED*** else {
        // Browser globals
        factory(jQuery***REMOVED***;
***REMOVED***
***REMOVED***(function ($***REMOVED*** {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'***REMOVED***,
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ***REMOVED*** ?
                    ['wheel'***REMOVED*** : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'***REMOVED***,
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ***REMOVED*** {
        for ( var i = toFix.length; i; ***REMOVED*** {
            $.event.fixHooks[ toFix[--i***REMOVED*** ***REMOVED*** = $.event.mouseHooks;
    ***REMOVED***
***REMOVED***

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function(***REMOVED*** {
            if ( this.addEventListener ***REMOVED*** {
                for ( var i = toBind.length; i; ***REMOVED*** {
                    this.addEventListener( toBind[--i***REMOVED***, handler, false ***REMOVED***;
            ***REMOVED***
        ***REMOVED*** else {
                this.onmousewheel = handler;
        ***REMOVED***
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this***REMOVED******REMOVED***;
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this***REMOVED******REMOVED***;
***REMOVED***

        teardown: function(***REMOVED*** {
            if ( this.removeEventListener ***REMOVED*** {
                for ( var i = toBind.length; i; ***REMOVED*** {
                    this.removeEventListener( toBind[--i***REMOVED***, handler, false ***REMOVED***;
            ***REMOVED***
        ***REMOVED*** else {
                this.onmousewheel = null;
        ***REMOVED***
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height'***REMOVED***;
            $.removeData(this, 'mousewheel-page-height'***REMOVED***;
***REMOVED***

        getLineHeight: function(elem***REMOVED*** {
            var $elem = $(elem***REMOVED***,
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent'***REMOVED***(***REMOVED***;
            if (!$parent.length***REMOVED*** {
                $parent = $('body'***REMOVED***;
        ***REMOVED***
            return parseInt($parent.css('fontSize'***REMOVED***, 10***REMOVED*** || parseInt($elem.css('fontSize'***REMOVED***, 10***REMOVED*** || 16;
***REMOVED***

        getPageHeight: function(elem***REMOVED*** {
            return $(elem***REMOVED***.height(***REMOVED***;
***REMOVED***

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas(***REMOVED*** below
            normalizeOffset: true  // calls getBoundingClientRect for each event
    ***REMOVED***
***REMOVED***;

    $.fn.extend({
        mousewheel: function(fn***REMOVED*** {
            return fn ? this.bind('mousewheel', fn***REMOVED*** : this.trigger('mousewheel'***REMOVED***;
***REMOVED***

        unmousewheel: function(fn***REMOVED*** {
            return this.unbind('mousewheel', fn***REMOVED***;
    ***REMOVED***
***REMOVED******REMOVED***;


    function handler(event***REMOVED*** {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1***REMOVED***,
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent***REMOVED***;
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ***REMOVED*** { deltaY = orgEvent.detail * -1;  ***REMOVED***
        if ( 'wheelDelta'  in orgEvent ***REMOVED*** { deltaY = orgEvent.wheelDelta;   ***REMOVED***
        if ( 'wheelDeltaY' in orgEvent ***REMOVED*** { deltaY = orgEvent.wheelDeltaY;  ***REMOVED***
        if ( 'wheelDeltaX' in orgEvent ***REMOVED*** { deltaX = orgEvent.wheelDeltaX * -1; ***REMOVED***

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ***REMOVED*** {
            deltaX = deltaY * -1;
            deltaY = 0;
    ***REMOVED***

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event***REMOVED***
        if ( 'deltaY' in orgEvent ***REMOVED*** {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
    ***REMOVED***
        if ( 'deltaX' in orgEvent ***REMOVED*** {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ***REMOVED*** { delta  = deltaX * -1; ***REMOVED***
    ***REMOVED***

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ***REMOVED*** { return; ***REMOVED***

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ***REMOVED*** {
            var lineHeight = $.data(this, 'mousewheel-line-height'***REMOVED***;
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
    ***REMOVED*** else if ( orgEvent.deltaMode === 2 ***REMOVED*** {
            var pageHeight = $.data(this, 'mousewheel-page-height'***REMOVED***;
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
    ***REMOVED***

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY***REMOVED***, Math.abs(deltaX***REMOVED*** ***REMOVED***;

        if ( !lowestDelta || absDelta < lowestDelta ***REMOVED*** {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta***REMOVED*** ***REMOVED*** {
                lowestDelta /= 40;
        ***REMOVED***
    ***REMOVED***

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta***REMOVED*** ***REMOVED*** {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
    ***REMOVED***

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ***REMOVED***(delta  / lowestDelta***REMOVED***;
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ***REMOVED***(deltaX / lowestDelta***REMOVED***;
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ***REMOVED***(deltaY / lowestDelta***REMOVED***;

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ***REMOVED*** {
            var boundingRect = this.getBoundingClientRect(***REMOVED***;
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
    ***REMOVED***

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY***REMOVED***;

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout***REMOVED*** { clearTimeout(nullLowestDeltaTimeout***REMOVED***; ***REMOVED***
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200***REMOVED***;

        return ($.event.dispatch || $.event.handle***REMOVED***.apply(this, args***REMOVED***;
***REMOVED***

    function nullLowestDelta(***REMOVED*** {
        lowestDelta = null;
***REMOVED***

    function shouldAdjustOldDeltas(orgEvent, absDelta***REMOVED*** {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
***REMOVED***

***REMOVED******REMOVED******REMOVED***;

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
***REMOVED***, function ($, _, Select2, Defaults***REMOVED*** {
  if ($.fn.select2 == null***REMOVED*** {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'***REMOVED***;

    $.fn.select2 = function (options***REMOVED*** {
      options = options || {***REMOVED***;

      if (typeof options === 'object'***REMOVED*** {
        this.each(function (***REMOVED*** {
          var instanceOptions = $.extend(true, {***REMOVED***, options***REMOVED***;

          var instance = new Select2($(this***REMOVED***, instanceOptions***REMOVED***;
    ***REMOVED******REMOVED***;

        return this;
  ***REMOVED*** else if (typeof options === 'string'***REMOVED*** {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1***REMOVED***;

        this.each(function (***REMOVED*** {
          var instance = $(this***REMOVED***.data('select2'***REMOVED***;

          if (instance == null && window.console && console.error***REMOVED*** {
            console.error(
              'The select2(\'' + options + '\'***REMOVED*** method was called on an ' +
              'element that is not using Select2.'
            ***REMOVED***;
      ***REMOVED***

          ret = instance[options***REMOVED***.apply(instance, args***REMOVED***;
    ***REMOVED******REMOVED***;

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods***REMOVED*** > -1***REMOVED*** {
          return this;
    ***REMOVED***

        return ret;
  ***REMOVED*** else {
        throw new Error('Invalid arguments for Select2: ' + options***REMOVED***;
  ***REMOVED***
***REMOVED***;
  ***REMOVED***

  if ($.fn.select2.defaults == null***REMOVED*** {
    $.fn.select2.defaults = Defaults;
  ***REMOVED***

  return Select2;
***REMOVED******REMOVED***;

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  ***REMOVED***;
***REMOVED***(***REMOVED******REMOVED***;

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2'***REMOVED***;

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
***REMOVED******REMOVED******REMOVED***;
