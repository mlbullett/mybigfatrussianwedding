(function($***REMOVED*** {

	/**
	 * Generate an indented list of links from a nav. Meant for use with panel(***REMOVED***.
	 * @return {jQuery***REMOVED*** jQuery object.
	 */
	$.fn.navList = function(***REMOVED*** {

		var	$this = $(this***REMOVED***;
			$a = $this.find('a'***REMOVED***,
			b = [***REMOVED***;

		$a.each(function(***REMOVED*** {

			var	$this = $(this***REMOVED***,
				indent = Math.max(0, $this.parents('li'***REMOVED***.length - 1***REMOVED***,
				href = $this.attr('href'***REMOVED***,
				target = $this.attr('target'***REMOVED***;

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != ''***REMOVED*** ? ' target="' + target + '"' : ''***REMOVED*** +
					( (typeof href !== 'undefined' && href != ''***REMOVED*** ? ' href="' + href + '"' : ''***REMOVED*** +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text(***REMOVED*** +
				'</a>'
			***REMOVED***;

		***REMOVED******REMOVED***;

		return b.join(''***REMOVED***;

	***REMOVED***;

	/**
	 * Panel-ify an element.
	 * @param {object***REMOVED*** userConfig User config.
	 * @return {jQuery***REMOVED*** jQuery object.
	 */
	$.fn.panel = function(userConfig***REMOVED*** {

		// No elements?
			if (this.length == 0***REMOVED***
				return $this;

		// Multiple elements?
			if (this.length > 1***REMOVED*** {

				for (var i=0; i < this.length; i++***REMOVED***
					$(this[i***REMOVED******REMOVED***.panel(userConfig***REMOVED***;

				return $this;

			***REMOVED***

		// Vars.
			var	$this = $(this***REMOVED***,
				$body = $('body'***REMOVED***,
				$window = $(window***REMOVED***,
				id = $this.attr('id'***REMOVED***,
				config;

		// Config.
			config = $.extend({

				// Delay.
					delay: 0,

				// Hide panel on link click.
					hideOnClick: false,

				// Hide panel on escape keypress.
					hideOnEscape: false,

				// Hide panel on swipe.
					hideOnSwipe: false,

				// Reset scroll position on hide.
					resetScroll: false,

				// Reset forms on hide.
					resetForms: false,

				// Side of viewport the panel will appear.
					side: null,

				// Target element for "class".
					target: $this,

				// Class to toggle.
					visibleClass: 'visible'

			***REMOVED***, userConfig***REMOVED***;

			// Expand "target" if it's not a jQuery object already.
				if (typeof config.target != 'jQuery'***REMOVED***
					config.target = $(config.target***REMOVED***;

		// Panel.

			// Methods.
				$this._hide = function(event***REMOVED*** {

					// Already hidden? Bail.
						if (!config.target.hasClass(config.visibleClass***REMOVED******REMOVED***
							return;

					// If an event was provided, cancel it.
						if (event***REMOVED*** {

							event.preventDefault(***REMOVED***;
							event.stopPropagation(***REMOVED***;

						***REMOVED***

					// Hide.
						config.target.removeClass(config.visibleClass***REMOVED***;

					// Post-hide stuff.
						window.setTimeout(function(***REMOVED*** {

							// Reset scroll position.
								if (config.resetScroll***REMOVED***
									$this.scrollTop(0***REMOVED***;

							// Reset forms.
								if (config.resetForms***REMOVED***
									$this.find('form'***REMOVED***.each(function(***REMOVED*** {
										this.reset(***REMOVED***;
									***REMOVED******REMOVED***;

						***REMOVED***, config.delay***REMOVED***;

				***REMOVED***;

			// Vendor fixes.
				$this
					.css('-ms-overflow-style', '-ms-autohiding-scrollbar'***REMOVED***
					.css('-webkit-overflow-scrolling', 'touch'***REMOVED***;

			// Hide on click.
				if (config.hideOnClick***REMOVED*** {

					$this.find('a'***REMOVED***
						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0***REMOVED***'***REMOVED***;

					$this
						.on('click', 'a', function(event***REMOVED*** {

							var $a = $(this***REMOVED***,
								href = $a.attr('href'***REMOVED***,
								target = $a.attr('target'***REMOVED***;

							if (!href || href == '#' || href == '' || href == '#' + id***REMOVED***
								return;

							// Cancel original event.
								event.preventDefault(***REMOVED***;
								event.stopPropagation(***REMOVED***;

							// Hide panel.
								$this._hide(***REMOVED***;

							// Redirect to href.
								window.setTimeout(function(***REMOVED*** {

									if (target == '_blank'***REMOVED***
										window.open(href***REMOVED***;
									else
										window.location.href = href;

								***REMOVED***, config.delay + 10***REMOVED***;

						***REMOVED******REMOVED***;

				***REMOVED***

			// Event: Touch stuff.
				$this.on('touchstart', function(event***REMOVED*** {

					$this.touchPosX = event.originalEvent.touches[0***REMOVED***.pageX;
					$this.touchPosY = event.originalEvent.touches[0***REMOVED***.pageY;

				***REMOVED******REMOVED***

				$this.on('touchmove', function(event***REMOVED*** {

					if ($this.touchPosX === null
					||	$this.touchPosY === null***REMOVED***
						return;

					var	diffX = $this.touchPosX - event.originalEvent.touches[0***REMOVED***.pageX,
						diffY = $this.touchPosY - event.originalEvent.touches[0***REMOVED***.pageY,
						th = $this.outerHeight(***REMOVED***,
						ts = ($this.get(0***REMOVED***.scrollHeight - $this.scrollTop(***REMOVED******REMOVED***;

					// Hide on swipe?
						if (config.hideOnSwipe***REMOVED*** {

							var result = false,
								boundary = 20,
								delta = 50;

							switch (config.side***REMOVED*** {

								case 'left':
									result = (diffY < boundary && diffY > (-1 * boundary***REMOVED******REMOVED*** && (diffX > delta***REMOVED***;
									break;

								case 'right':
									result = (diffY < boundary && diffY > (-1 * boundary***REMOVED******REMOVED*** && (diffX < (-1 * delta***REMOVED******REMOVED***;
									break;

								case 'top':
									result = (diffX < boundary && diffX > (-1 * boundary***REMOVED******REMOVED*** && (diffY > delta***REMOVED***;
									break;

								case 'bottom':
									result = (diffX < boundary && diffX > (-1 * boundary***REMOVED******REMOVED*** && (diffY < (-1 * delta***REMOVED******REMOVED***;
									break;

								default:
									break;

							***REMOVED***

							if (result***REMOVED*** {

								$this.touchPosX = null;
								$this.touchPosY = null;
								$this._hide(***REMOVED***;

								return false;

							***REMOVED***

						***REMOVED***

					// Prevent vertical scrolling past the top or bottom.
						if (($this.scrollTop(***REMOVED*** < 0 && diffY < 0***REMOVED***
						|| (ts > (th - 2***REMOVED*** && ts < (th + 2***REMOVED*** && diffY > 0***REMOVED******REMOVED*** {

							event.preventDefault(***REMOVED***;
							event.stopPropagation(***REMOVED***;

						***REMOVED***

				***REMOVED******REMOVED***;

			// Event: Prevent certain events inside the panel from bubbling.
				$this.on('click touchend touchstart touchmove', function(event***REMOVED*** {
					event.stopPropagation(***REMOVED***;
				***REMOVED******REMOVED***;

			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
				$this.on('click', 'a[href="#' + id + '"***REMOVED***', function(event***REMOVED*** {

					event.preventDefault(***REMOVED***;
					event.stopPropagation(***REMOVED***;

					config.target.removeClass(config.visibleClass***REMOVED***;

				***REMOVED******REMOVED***;

		// Body.

			// Event: Hide panel on body click/tap.
				$body.on('click touchend', function(event***REMOVED*** {
					$this._hide(event***REMOVED***;
				***REMOVED******REMOVED***;

			// Event: Toggle.
				$body.on('click', 'a[href="#' + id + '"***REMOVED***', function(event***REMOVED*** {

					event.preventDefault(***REMOVED***;
					event.stopPropagation(***REMOVED***;

					config.target.toggleClass(config.visibleClass***REMOVED***;

				***REMOVED******REMOVED***;

		// Window.

			// Event: Hide on ESC.
				if (config.hideOnEscape***REMOVED***
					$window.on('keydown', function(event***REMOVED*** {

						if (event.keyCode == 27***REMOVED***
							$this._hide(event***REMOVED***;

					***REMOVED******REMOVED***;

		return $this;

	***REMOVED***;

	/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery***REMOVED*** jQuery object.
	 */
	$.fn.placeholder = function(***REMOVED*** {

		// Browser natively supports placeholders? Bail.
			if (typeof (document.createElement('input'***REMOVED******REMOVED***.placeholder != 'undefined'***REMOVED***
				return $(this***REMOVED***;

		// No elements?
			if (this.length == 0***REMOVED***
				return $this;

		// Multiple elements?
			if (this.length > 1***REMOVED*** {

				for (var i=0; i < this.length; i++***REMOVED***
					$(this[i***REMOVED******REMOVED***.placeholder(***REMOVED***;

				return $this;

			***REMOVED***

		// Vars.
			var $this = $(this***REMOVED***;

		// Text, TextArea.
			$this.find('input[type=text***REMOVED***,textarea'***REMOVED***
				.each(function(***REMOVED*** {

					var i = $(this***REMOVED***;

					if (i.val(***REMOVED*** == ''
					||  i.val(***REMOVED*** == i.attr('placeholder'***REMOVED******REMOVED***
						i
							.addClass('polyfill-placeholder'***REMOVED***
							.val(i.attr('placeholder'***REMOVED******REMOVED***;

				***REMOVED******REMOVED***
				.on('blur', function(***REMOVED*** {

					var i = $(this***REMOVED***;

					if (i.attr('name'***REMOVED***.match(/-polyfill-field$/***REMOVED******REMOVED***
						return;

					if (i.val(***REMOVED*** == ''***REMOVED***
						i
							.addClass('polyfill-placeholder'***REMOVED***
							.val(i.attr('placeholder'***REMOVED******REMOVED***;

				***REMOVED******REMOVED***
				.on('focus', function(***REMOVED*** {

					var i = $(this***REMOVED***;

					if (i.attr('name'***REMOVED***.match(/-polyfill-field$/***REMOVED******REMOVED***
						return;

					if (i.val(***REMOVED*** == i.attr('placeholder'***REMOVED******REMOVED***
						i
							.removeClass('polyfill-placeholder'***REMOVED***
							.val(''***REMOVED***;

				***REMOVED******REMOVED***;

		// Password.
			$this.find('input[type=password***REMOVED***'***REMOVED***
				.each(function(***REMOVED*** {

					var i = $(this***REMOVED***;
					var x = $(
								$('<div>'***REMOVED***
									.append(i.clone(***REMOVED******REMOVED***
									.remove(***REMOVED***
									.html(***REMOVED***
									.replace(/type="password"/i, 'type="text"'***REMOVED***
									.replace(/type=password/i, 'type=text'***REMOVED***
					***REMOVED***;

					if (i.attr('id'***REMOVED*** != ''***REMOVED***
						x.attr('id', i.attr('id'***REMOVED*** + '-polyfill-field'***REMOVED***;

					if (i.attr('name'***REMOVED*** != ''***REMOVED***
						x.attr('name', i.attr('name'***REMOVED*** + '-polyfill-field'***REMOVED***;

					x.addClass('polyfill-placeholder'***REMOVED***
						.val(x.attr('placeholder'***REMOVED******REMOVED***.insertAfter(i***REMOVED***;

					if (i.val(***REMOVED*** == ''***REMOVED***
						i.hide(***REMOVED***;
					else
						x.hide(***REMOVED***;

					i
						.on('blur', function(event***REMOVED*** {

							event.preventDefault(***REMOVED***;

							var x = i.parent(***REMOVED***.find('input[name=' + i.attr('name'***REMOVED*** + '-polyfill-field***REMOVED***'***REMOVED***;

							if (i.val(***REMOVED*** == ''***REMOVED*** {

								i.hide(***REMOVED***;
								x.show(***REMOVED***;

							***REMOVED***

						***REMOVED******REMOVED***;

					x
						.on('focus', function(event***REMOVED*** {

							event.preventDefault(***REMOVED***;

							var i = x.parent(***REMOVED***.find('input[name=' + x.attr('name'***REMOVED***.replace('-polyfill-field', ''***REMOVED*** + '***REMOVED***'***REMOVED***;

							x.hide(***REMOVED***;

							i
								.show(***REMOVED***
								.focus(***REMOVED***;

						***REMOVED******REMOVED***
						.on('keypress', function(event***REMOVED*** {

							event.preventDefault(***REMOVED***;
							x.val(''***REMOVED***;

						***REMOVED******REMOVED***;

				***REMOVED******REMOVED***;

		// Events.
			$this
				.on('submit', function(***REMOVED*** {

					$this.find('input[type=text***REMOVED***,input[type=password***REMOVED***,textarea'***REMOVED***
						.each(function(event***REMOVED*** {

							var i = $(this***REMOVED***;

							if (i.attr('name'***REMOVED***.match(/-polyfill-field$/***REMOVED******REMOVED***
								i.attr('name', ''***REMOVED***;

							if (i.val(***REMOVED*** == i.attr('placeholder'***REMOVED******REMOVED*** {

								i.removeClass('polyfill-placeholder'***REMOVED***;
								i.val(''***REMOVED***;

							***REMOVED***

						***REMOVED******REMOVED***;

				***REMOVED******REMOVED***
				.on('reset', function(event***REMOVED*** {

					event.preventDefault(***REMOVED***;

					$this.find('select'***REMOVED***
						.val($('option:first'***REMOVED***.val(***REMOVED******REMOVED***;

					$this.find('input,textarea'***REMOVED***
						.each(function(***REMOVED*** {

							var i = $(this***REMOVED***,
								x;

							i.removeClass('polyfill-placeholder'***REMOVED***;

							switch (this.type***REMOVED*** {

								case 'submit':
								case 'reset':
									break;

								case 'password':
									i.val(i.attr('defaultValue'***REMOVED******REMOVED***;

									x = i.parent(***REMOVED***.find('input[name=' + i.attr('name'***REMOVED*** + '-polyfill-field***REMOVED***'***REMOVED***;

									if (i.val(***REMOVED*** == ''***REMOVED*** {
										i.hide(***REMOVED***;
										x.show(***REMOVED***;
									***REMOVED***
									else {
										i.show(***REMOVED***;
										x.hide(***REMOVED***;
									***REMOVED***

									break;

								case 'checkbox':
								case 'radio':
									i.attr('checked', i.attr('defaultValue'***REMOVED******REMOVED***;
									break;

								case 'text':
								case 'textarea':
									i.val(i.attr('defaultValue'***REMOVED******REMOVED***;

									if (i.val(***REMOVED*** == ''***REMOVED*** {
										i.addClass('polyfill-placeholder'***REMOVED***;
										i.val(i.attr('placeholder'***REMOVED******REMOVED***;
									***REMOVED***

									break;

								default:
									i.val(i.attr('defaultValue'***REMOVED******REMOVED***;
									break;

							***REMOVED***
						***REMOVED******REMOVED***;

				***REMOVED******REMOVED***;

		return $this;

	***REMOVED***;

	/**
	 * Moves elements to/from the first positions of their respective parents.
	 * @param {jQuery***REMOVED*** $elements Elements (or selector***REMOVED*** to move.
	 * @param {bool***REMOVED*** condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	 */
	$.prioritize = function($elements, condition***REMOVED*** {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
			if (typeof $elements != 'jQuery'***REMOVED***
				$elements = $($elements***REMOVED***;

		// Step through elements.
			$elements.each(function(***REMOVED*** {

				var	$e = $(this***REMOVED***, $p,
					$parent = $e.parent(***REMOVED***;

				// No parent? Bail.
					if ($parent.length == 0***REMOVED***
						return;

				// Not moved? Move it.
					if (!$e.data(key***REMOVED******REMOVED*** {

						// Condition is false? Bail.
							if (!condition***REMOVED***
								return;

						// Get placeholder (which will serve as our point of reference for when this element needs to move back***REMOVED***.
							$p = $e.prev(***REMOVED***;

							// Couldn't find anything? Means this element's already at the top, so bail.
								if ($p.length == 0***REMOVED***
									return;

						// Move element to top of parent.
							$e.prependTo($parent***REMOVED***;

						// Mark element as moved.
							$e.data(key, $p***REMOVED***;

					***REMOVED***

				// Moved already?
					else {

						// Condition is true? Bail.
							if (condition***REMOVED***
								return;

						$p = $e.data(key***REMOVED***;

						// Move element back to its original location (using our placeholder***REMOVED***.
							$e.insertAfter($p***REMOVED***;

						// Unmark element as moved.
							$e.removeData(key***REMOVED***;

					***REMOVED***

			***REMOVED******REMOVED***;

	***REMOVED***;

***REMOVED******REMOVED***(jQuery***REMOVED***;