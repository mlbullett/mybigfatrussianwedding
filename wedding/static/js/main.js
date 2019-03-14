(function($***REMOVED*** {

	var	$window = $(window***REMOVED***,
		$body = $('body'***REMOVED***,
		$wrapper = $('#wrapper'***REMOVED***,
		$header = $('#header'***REMOVED***,
		$footer = $('#footer'***REMOVED***,
		$main = $('#main'***REMOVED***,
		$main_articles = $main.children('article'***REMOVED***;

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ***REMOVED***,
			large:    [ '981px',   '1280px' ***REMOVED***,
			medium:   [ '737px',   '980px'  ***REMOVED***,
			small:    [ '481px',   '736px'  ***REMOVED***,
			xsmall:   [ '361px',   '480px'  ***REMOVED***,
			xxsmall:  [ null,      '360px'  ***REMOVED***
		***REMOVED******REMOVED***;

	// Play initial animations on page load.
		$window.on('load', function(***REMOVED*** {
			window.setTimeout(function(***REMOVED*** {
				$body.removeClass('is-preload'***REMOVED***;
			***REMOVED***, 100***REMOVED***;
		***REMOVED******REMOVED***;

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie'***REMOVED*** {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function(***REMOVED*** {

				clearTimeout(flexboxFixTimeoutId***REMOVED***;

				flexboxFixTimeoutId = setTimeout(function(***REMOVED*** {

					if ($wrapper.prop('scrollHeight'***REMOVED*** > $window.height(***REMOVED******REMOVED***
						$wrapper.css('height', 'auto'***REMOVED***;
					else
						$wrapper.css('height', '100vh'***REMOVED***;

				***REMOVED***, 250***REMOVED***;

			***REMOVED******REMOVED***.triggerHandler('resize.flexbox-fix'***REMOVED***;

		***REMOVED***

	// Nav.
		var $nav = $header.children('nav'***REMOVED***,
			$nav_li = $nav.find('li'***REMOVED***;

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0***REMOVED*** {

				$nav.addClass('use-middle'***REMOVED***;
				$nav_li.eq( ($nav_li.length / 2***REMOVED*** ***REMOVED***.addClass('is-middle'***REMOVED***;

			***REMOVED***

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial***REMOVED*** {

				var $article = $main_articles.filter('#' + id***REMOVED***;

				// No such article? Bail.
					if ($article.length == 0***REMOVED***
						return;

				// Handle lock.

					// Already locked? Speed through "show" steps w/o delays.
						if (locked || (typeof initial != 'undefined' && initial === true***REMOVED******REMOVED*** {

							// Mark as switching.
								$body.addClass('is-switching'***REMOVED***;

							// Mark as visible.
								$body.addClass('is-article-visible'***REMOVED***;

							// Deactivate all articles (just in case one's already active***REMOVED***.
								$main_articles.removeClass('active'***REMOVED***;

							// Hide header, footer.
								$header.hide(***REMOVED***;
								$footer.hide(***REMOVED***;

							// Show main, article.
								$main.show(***REMOVED***;
								$article.show(***REMOVED***;

							// Activate article.
								$article.addClass('active'***REMOVED***;

							// Unlock.
								locked = false;

							// Unmark as switching.
								setTimeout(function(***REMOVED*** {
									$body.removeClass('is-switching'***REMOVED***;
								***REMOVED***, (initial ? 1000 : 0***REMOVED******REMOVED***;

							return;

						***REMOVED***

					// Lock.
						locked = true;

				// Article already visible? Just swap articles.
					if ($body.hasClass('is-article-visible'***REMOVED******REMOVED*** {

						// Deactivate current article.
							var $currentArticle = $main_articles.filter('.active'***REMOVED***;

							$currentArticle.removeClass('active'***REMOVED***;

						// Show article.
							setTimeout(function(***REMOVED*** {

								// Hide current article.
									$currentArticle.hide(***REMOVED***;

								// Show article.
									$article.show(***REMOVED***;

								// Activate article.
									setTimeout(function(***REMOVED*** {

										$article.addClass('active'***REMOVED***;

										// Window stuff.
											$window
												.scrollTop(0***REMOVED***
												.triggerHandler('resize.flexbox-fix'***REMOVED***;

										// Unlock.
											setTimeout(function(***REMOVED*** {
												locked = false;
											***REMOVED***, delay***REMOVED***;

									***REMOVED***, 25***REMOVED***;

							***REMOVED***, delay***REMOVED***;

					***REMOVED***

				// Otherwise, handle as normal.
					else {

						// Mark as visible.
							$body
								.addClass('is-article-visible'***REMOVED***;

						// Show article.
							setTimeout(function(***REMOVED*** {

								// Hide header, footer.
									$header.hide(***REMOVED***;
									$footer.hide(***REMOVED***;

								// Show main, article.
									$main.show(***REMOVED***;
									$article.show(***REMOVED***;

								// Activate article.
									setTimeout(function(***REMOVED*** {

										$article.addClass('active'***REMOVED***;

										// Window stuff.
											$window
												.scrollTop(0***REMOVED***
												.triggerHandler('resize.flexbox-fix'***REMOVED***;

										// Unlock.
											setTimeout(function(***REMOVED*** {
												locked = false;
											***REMOVED***, delay***REMOVED***;

									***REMOVED***, 25***REMOVED***;

							***REMOVED***, delay***REMOVED***;

					***REMOVED***

			***REMOVED***;

			$main._hide = function(addState***REMOVED*** {

				var $article = $main_articles.filter('.active'***REMOVED***;

				// Article not visible? Bail.
					if (!$body.hasClass('is-article-visible'***REMOVED******REMOVED***
						return;

				// Add state?
					if (typeof addState != 'undefined'
					&&	addState === true***REMOVED***
						history.pushState(null, null, '#'***REMOVED***;

				// Handle lock.

					// Already locked? Speed through "hide" steps w/o delays.
						if (locked***REMOVED*** {

							// Mark as switching.
								$body.addClass('is-switching'***REMOVED***;

							// Deactivate article.
								$article.removeClass('active'***REMOVED***;

							// Hide article, main.
								$article.hide(***REMOVED***;
								$main.hide(***REMOVED***;

							// Show footer, header.
								$footer.show(***REMOVED***;
								$header.show(***REMOVED***;

							// Unmark as visible.
								$body.removeClass('is-article-visible'***REMOVED***;

							// Unlock.
								locked = false;

							// Unmark as switching.
								$body.removeClass('is-switching'***REMOVED***;

							// Window stuff.
								$window
									.scrollTop(0***REMOVED***
									.triggerHandler('resize.flexbox-fix'***REMOVED***;

							return;

						***REMOVED***

					// Lock.
						locked = true;

				// Deactivate article.
					$article.removeClass('active'***REMOVED***;

				// Hide article.
					setTimeout(function(***REMOVED*** {

						// Hide article, main.
							$article.hide(***REMOVED***;
							$main.hide(***REMOVED***;

						// Show footer, header.
							$footer.show(***REMOVED***;
							$header.show(***REMOVED***;

						// Unmark as visible.
							setTimeout(function(***REMOVED*** {

								$body.removeClass('is-article-visible'***REMOVED***;

								// Window stuff.
									$window
										.scrollTop(0***REMOVED***
										.triggerHandler('resize.flexbox-fix'***REMOVED***;

								// Unlock.
									setTimeout(function(***REMOVED*** {
										locked = false;
									***REMOVED***, delay***REMOVED***;

							***REMOVED***, 25***REMOVED***;

					***REMOVED***, delay***REMOVED***;


			***REMOVED***;

		// Articles.
			$main_articles.each(function(***REMOVED*** {

				var $this = $(this***REMOVED***;

				// Close.
					$('<div class="close">Close</div>'***REMOVED***
						.appendTo($this***REMOVED***
						.on('click', function(***REMOVED*** {
							location.hash = '';
						***REMOVED******REMOVED***;

				// Prevent clicks from inside article from bubbling.
					$this.on('click', function(event***REMOVED*** {
						event.stopPropagation(***REMOVED***;
					***REMOVED******REMOVED***;

			***REMOVED******REMOVED***;

		// Events.
			$body.on('click', function(event***REMOVED*** {

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'***REMOVED******REMOVED***
						$main._hide(true***REMOVED***;

			***REMOVED******REMOVED***;

			$window.on('keyup', function(event***REMOVED*** {

				switch (event.keyCode***REMOVED*** {

					case 27:

						// Article visible? Hide.
							if ($body.hasClass('is-article-visible'***REMOVED******REMOVED***
								$main._hide(true***REMOVED***;

						break;

					default:
						break;

				***REMOVED***

			***REMOVED******REMOVED***;

			$window.on('hashchange', function(event***REMOVED*** {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#'***REMOVED*** {

						// Prevent default.
							event.preventDefault(***REMOVED***;
							event.stopPropagation(***REMOVED***;

						// Hide.
							$main._hide(***REMOVED***;

					***REMOVED***

				// Otherwise, check for a matching article.
					else if ($main_articles.filter(location.hash***REMOVED***.length > 0***REMOVED*** {

						// Prevent default.
							event.preventDefault(***REMOVED***;
							event.stopPropagation(***REMOVED***;

						// Show article.
							$main._show(location.hash.substr(1***REMOVED******REMOVED***;

					***REMOVED***

			***REMOVED******REMOVED***;

		// Scroll restoration.
		// This prevents the page from scrolling back to the top on a hashchange.
			if ('scrollRestoration' in history***REMOVED***
				history.scrollRestoration = 'manual';
			else {

				var	oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body'***REMOVED***;

				$window
					.on('scroll', function(***REMOVED*** {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop(***REMOVED***;

					***REMOVED******REMOVED***
					.on('hashchange', function(***REMOVED*** {
						$window.scrollTop(oldScrollPos***REMOVED***;
					***REMOVED******REMOVED***;

			***REMOVED***

		// Initialize.

			// Hide main, articles.
				$main.hide(***REMOVED***;
				$main_articles.hide(***REMOVED***;

			// Initial article.
				if (location.hash != ''
				&&	location.hash != '#'***REMOVED***
					$window.on('load', function(***REMOVED*** {
						$main._show(location.hash.substr(1***REMOVED***, true***REMOVED***;
					***REMOVED******REMOVED***;

***REMOVED******REMOVED***(jQuery***REMOVED***;
