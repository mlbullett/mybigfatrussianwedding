/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(***REMOVED***{if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd***REMOVED***var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ru",[***REMOVED***,function(***REMOVED***{function e(e,t,n,r***REMOVED***{return e%10<5&&e%10>0&&e%100<5||e%100>20?e%10>1?n:t:r***REMOVED***return{errorLoading:function(***REMOVED***{return"Невозможно загрузить результаты"***REMOVED***,inputTooLong:function(t***REMOVED***{var n=t.input.length-t.maximum,r="Пожалуйста, введите на "+n+" символ";return r+=e(n,"","a","ов"***REMOVED***,r+=" меньше",r***REMOVED***,inputTooShort:function(t***REMOVED***{var n=t.minimum-t.input.length,r="Пожалуйста, введите еще хотя бы "+n+" символ";return r+=e(n,"","a","ов"***REMOVED***,r***REMOVED***,loadingMore:function(***REMOVED***{return"Загрузка данных…"***REMOVED***,maximumSelected:function(t***REMOVED***{var n="Вы можете выбрать не более "+t.maximum+" элемент";return n+=e(t.maximum,"","a","ов"***REMOVED***,n***REMOVED***,noResults:function(***REMOVED***{return"Совпадений не найдено"***REMOVED***,searching:function(***REMOVED***{return"Поиск…"***REMOVED******REMOVED******REMOVED******REMOVED***,{define:e.define,require:e.require***REMOVED******REMOVED******REMOVED***(***REMOVED***;