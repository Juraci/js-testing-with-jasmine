window.Calculator = {
  screenvalue: 0,

  add: function() {
    var sum = this.screenvalue;

    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }

    this.screenvalue = sum;

    return this.screenvalue;
  },

  subtract: function() {
    var sub = this.screenvalue;

    for (var i = 0, len = arguments.length; i < len; i++) {
      sub -= arguments[i];
    }

    this.screenvalue = sub;

    return this.screenvalue;
  },

  reset: function() {
    this.screenvalue = 0;
  }
};
