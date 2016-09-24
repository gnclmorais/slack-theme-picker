Vue.config.debug = true;

var defaultProps = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1,
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1,
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1,
  },
  a: 1,
};


/**
 * Picker component.
 */
Vue.component('colour-selector', {
  template: '<div class="colour-selector">' +
    '<input type="text" @focus="onFocus" @blur="onBlur">' +
    '<div v-show.sync="isFocused">' +
      '<chrome-picker :colors.sync="defaults"></chrome-picker>' +
    '</div>' +
  '</div>',

  data: function () {
    return {
      isFocused: false,
    };
  },

  props: ['defaults'],

  components: {
    'chrome-picker': VueColor.Chrome,
  },

  methods: {
    onFocus: function () { this.isFocused = true;  },
    onBlur:  function () { this.isFocused = false; },
  },
});


/**
 * Main app.
 */
vm = new Vue({
  el: '.app',

  data: function () {
    return {
      colours: {
        slackColumnBg:       'salmon',
        slackMenuBgHover:    'tomato',
        slackActiveItem:     'white',
        slackActiveItemText: 'black',
        slackHoverItem:      'red',
        slackTextColor:      'black',
        slackActivePresence: 'green',
        slackMentionBadge:   'rebeccapurple',
      },
      defaults: defaultProps,
    };
  },
});
