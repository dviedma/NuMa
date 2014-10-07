var ENCOG = ENCOG || {
  VERSION: "0.1",
  PLATFORM: "javascript",
  precision: 1e-10,
  NEWLINE: "\n",
  ENCOG_TYPE_ACTIVATION: "ActivationFunction",
  ENCOG_TYPE_RBF: "RBF"
};
ENCOG.namespace = function(b) {
  var f = b.split("."),
      d = window,
      a = "",
      c, e;
  for (c = 0, e = f.length; c < e; c += 1) {
    a = f[c];
    d[a] = d[a] || {};
    d = d[a]
  }
  return d
};

ENCOG.namespace("ENCOG.ArrayUtil");

ENCOG.ArrayUtil = function() {};
ENCOG.ArrayUtil.fillArray = function(a, e, d, b) {
  var c;
  for (c = e; c < d; c += 1) {
    a[c] = b
  }
};

ENCOG.ArrayUtil.allocate1D = function(b) {
  var c, a;
  a = [];
  for (c = 0; c < b; c += 1) {
    a[c] = 0
  }
  return a
};


