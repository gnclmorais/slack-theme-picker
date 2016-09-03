new Vue({
  el: '.sidebar',

  data: {
    slackColumnBg:       'salmon',
    slackMenuBgHover:    'tomato',
    slackActiveItem:     '#ffffff',
    slackActiveItemText: '#ffffff',
    slackHoverItem:      'tomato',
    slackTextColor:      '#000000',
    slackActivePresence: '#000000',
    slackMentionBadge:   '#ffffff',

    sidebar: '',
    header: '',
    status: '',
    item: '',
  },

  computed: {
    headerNormal: function () {
      return {
        background: this.slackColumnBg,
        color: this.slackTextColor,
      };
    },
    headerHover: function () {
      return {
        background: this.slackMenuBgHover,
        color: this.slackTextColor,
      };
    },
    itemNormal: function () {
      return {
        background: 'transparent',
      };
    },
    itemHover: function () {
      return {
        background: this.slackHoverItem,
      };
    },
  },

  methods: {
    /** Handlers */
    headerEnter: function (event) {
      this.header = this.headerHover;
    },
    headerLeave: function (event) {
      this.header = this.headerNormal;
    },
    itemEnter: function (event) {
      this.item = this.itemHover;
    },
    itemLeave: function (event) {
      this.item = this.itemNormal;
    },

    /** Utilities */
    setDefaultColours: function () {
      this.sidebar = { background: this.slackColumnBg };
      this.headerLeave();
      this.status = { color: this.slackActivePresence };
    },
  },
  beforeCompile: function () {
    this.setDefaultColours();
  },
});
