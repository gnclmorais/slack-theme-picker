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

new Vue({
  el: '.app',

  data: function () {
    return {
      slackColumnBg:       'salmon',
      slackMenuBgHover:    'tomato',
      slackActiveItem:     'white',
      slackActiveItemText: 'black',
      slackHoverItem:      'red',
      slackTextColor:      'black',
      slackActivePresence: 'green',
      slackMentionBadge:   'rebeccapurple',
      colors: defaultProps,
    };
  },

  components: {
    'chrome-picker': VueColor.Chrome,
  },
});
