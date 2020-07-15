(function() { 
    var DPR = Math.min(2, window.devicePixelRatio);
    var ORIG = 640;

    window.generalSidebar = function() {
      const $menu = d3.select('.menu');
      const $sidebar = d3.select('.sidebar');
      const $toggleOn = $menu.select('.toggle--on');
      const $toggleOff = $menu.select('.toggle--off');
      $toggleOn.on('click', () => {
        $sidebar.classed('is-reveal', true);
        $menu.classed('is-reveal', true);
        $toggleOn.classed('is-hidden', true);
        $toggleOff.classed('is-hidden', false);
      });
      $toggleOff.on('click', () => {
        $sidebar.classed('is-reveal', false);
        $menu.classed('is-reveal', false);
        $toggleOn.classed('is-hidden', false);
        $toggleOff.classed('is-hidden', true);
      });
    };

    window.generalRandom = function() {
      var numColors = 4;
      var r = Math.floor(Math.random() * numColors);
      var c = 'colorize--' + r;
      var classBackground = 'random-background--' + r;
      var classColor = 'random-color--' + r;
      var linkColor = 'random-link--' + r;
      var classStroke = 'random-stroke--' + r;
      d3.selectAll('.random-background').classed(classBackground, true);
      d3.selectAll('.random-color').classed(classColor, true);
      d3.selectAll('.random-stroke').classed(classStroke, true);
      d3.select('body').classed(linkColor, true);
    };

    function loadImage(url, cb) {
      var img = new Image();
      img.onload = function() {
        cb(null, img);
      };
      img.onerror = function() {
        cb(`error loading image: ${url}`);
      };
      img.src = url;
    }

    window.generalImages = function() {
      // 640
      // 1280 = w * 2
      // 1920 = w * 3
      d3.selectAll('.story-item .item__img img').each(function() {
        var $img = d3.select(this);
        var w = $img.node().offsetWidth;
        if (w) {
          var factor = Math.min(3, Math.ceil((w * DPR) / ORIG));
          if (factor > 1) {
            var src = $img.attr('src');
            var newSrc = src.replace(ORIG, factor * ORIG);
            loadImage(newSrc, function(err) {
              if (!err) $img.attr('src', newSrc);
            });
          }
        }
      });
    };

    generalSidebar();
    generalRandom();
    generalImages();
  }
)();

		(function() {
  // polyfill for closest
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;

      do {
        if (el.matches(s)) { return el; }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  function setupPicks() {
    $li = d3.selectAll('#picks li');
    var sz = $li.size();
    var target = 4;
    var count = d3.range(sz);
    d3.shuffle(count);
    var chosen = count.slice(0, target);

    $li.each(function (d, i, n) {
      var $story = d3.select(n[i]);
      if (chosen.includes(i)) { $story.classed('is-visible', true); }
      else { $story.classed('is-hidden', true); }
    });
  }

  function setupHits() {
    $li = d3.selectAll('#hits li');

    $li.each(function (d, i, n) {
      d3.select(n[i]).datum(i);
    });

    var sz = $li.size();
    var target = 5;
    var count = d3.range(sz);
    d3.shuffle(count);
    var chosen = count.slice(0, target);

    $li.each(function (d, i, n) {
      var $story = d3.select(n[i]);
      if (chosen.includes(i)) { $story.classed('is-visible', true); }
      else { $story.remove(); }
    });

    $li.sort(function (a, b) { return d3.ascending(chosen.indexOf(a), chosen.indexOf(b)); });
  }

  function handleTopicClick() {
    var $el = d3.select(this);
    var topic = $el.attr('data-topic');

    d3.selectAll('#topics .top__nav span').classed('is-active', false);
    d3.select($el.node().parentNode).classed('is-active', true);

    d3.selectAll('#topics .topics__stories ul')
      .classed('is-visible', false)
      .classed('is-hidden', true);

    var $ul = d3.select(("#topics .topics__stories [data-topic=\"" + topic + "\"]"));
    $ul.classed('is-hidden', false).classed('is-visible', true);

    d3.selectAll('#topics .top__more span').classed('is-visible', false);
    var $span = d3.select(("#topics .top__more [data-topic=\"" + topic + "\"]"));
    $span.classed('is-visible', true);

    if (window.generalImages) { window.generalImages(); }

    // tracking
    if (
      window.GoogleAnalyticsObject &&
      window.ga &&
      typeof window.ga === 'function'
    )
      { ga('send', {
        hitType: 'event',
        eventCategory: topic,
        eventAction: 'toggle'
      }); }
  }

  function setupTopics() {
    $ul = d3.selectAll('#topics .topics__stories ul');
    var sz = $ul.size();
    var count = d3.range(sz);
    d3.shuffle(count);
    var chosen = count[0];
    var slug = null;
    $ul.each(function (d, i, n) {
      var $topic = d3.select(n[i]);
      if (chosen === i) {
        $topic.classed('is-visible', true);
        slug = $topic.attr('data-topic');
      } else { $topic.classed('is-hidden', true); }
    });

    d3.select(("#topics .top__more [data-topic=\"" + slug + "\"]")).classed(
      'is-visible',
      true
    );
    d3.selectAll('#topics .top__nav span')
      .classed('is-active', function (d, i) { return chosen === i; })
      .select('button')
      .on('click', handleTopicClick);

    if (window.generalImages) { window.generalImages(); }
  }

  function setupTracking() {
    d3.selectAll('.story-item a').each(function (d, i, n) {
      var $story = d3.select(n[i]);
      var $section = d3.select($story.node().closest('section'));
      var id = $section.attr('id');
      var url = $story.attr('href');
      var onclick = "trackOutboundLink('" + url + "', '" + id + "'); return false;";
      $story.attr('onclick', onclick);
    });
  }

  function init() {
    setupPicks();
    setupTopics();
    setupHits();
    setupTracking();
  }

  init();
})();
