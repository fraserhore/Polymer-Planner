(function (document) {
    'use strict';

    var pages = document.querySelector('core-pages');
    var tabs = document.querySelector('paper-tabs');
    tabs.addEventListener('core-select', function() {
        pages.selected = tabs.selected;
    });

    document.addEventListener('polymer-ready', function () {
        // Perform some behaviour
        console.log('Polymer is ready to rock!');
    });

    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));