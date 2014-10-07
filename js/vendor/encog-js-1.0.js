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


/**
 * Array Utils
 */
ENCOG.namespace("ENCOG.ArrayUtil");

ENCOG.ArrayUtil = function() {};

ENCOG.ArrayUtil.fillArray = function(array, startIndex, endIndex, value) {
  var i;
  for (i = startIndex; i < endIndex; i += 1) {
    array[i] = value;
  }
};

ENCOG.ArrayUtil.allocate1D = function(arraySize) {
  var i,
      array;

  array = [];
  for (i = 0; i < arraySize; i += 1) {
    array[i] = 0
  }
  return array;
};


