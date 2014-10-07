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
ENCOG.namespace("ENCOG.ActivationSigmoid");
ENCOG.namespace("ENCOG.ActivationTANH");
ENCOG.namespace("ENCOG.ActivationLinear");
ENCOG.namespace("ENCOG.ActivationElliott");
ENCOG.namespace("ENCOG.ActivationElliottSymmetric");
ENCOG.namespace("ENCOG.RadialGaussian");
ENCOG.namespace("ENCOG.RadialMexicanHat");
ENCOG.namespace("ENCOG.Util");
ENCOG.namespace("ENCOG.MathUtil");
ENCOG.namespace("ENCOG.ArrayUtil");
ENCOG.namespace("ENCOG.BasicLayer");
ENCOG.namespace("ENCOG.BasicNetwork");
ENCOG.namespace("ENCOG.PropagationTrainer");
ENCOG.namespace("ENCOG.LinearErrorFunction");
ENCOG.namespace("ENCOG.LinearErrorFunction");
ENCOG.namespace("ENCOG.Swarm");
ENCOG.namespace("ENCOG.Anneal");
ENCOG.namespace("ENCOG.Genetic");
ENCOG.namespace("ENCOG.SOM");
ENCOG.namespace("ENCOG.TrainSOM");
ENCOG.namespace("ENCOG.ReadCSV");
ENCOG.namespace("ENCOG.EGFILE");
ENCOG.MathUtil = function() {};
ENCOG.MathUtil.tanh = function(a) {
  var c, b;
  c = Math.exp(a);
  b = Math.exp(-a);
  return (c - b) / (c + b)
};
ENCOG.MathUtil.sign = function(a) {
  if (Math.abs(a) < ENCOG.precision) {
    return 0
  } else {
    if (a > 0) {
      return 1
    } else {
      return -1
    }
  }
};
ENCOG.MathUtil.euclideanDistance = function(d, c, g, b) {
  var a = 0,
      e, f;
  for (e = g; e < (g + b); e += 1) {
    f = d[e] - c[e];
    a += f * f
  }
  return Math.sqrt(a)
};
ENCOG.MathUtil.kNearest = function(a, d, c, e, l, g) {
  var m = [],
      i = [],
      j = 0,
      f = -1,
      h, b;
  while (j < d.length) {
    b = d[j];
    if (a !== b) {
      h = ENCOG.MathUtil.euclideanDistance(a, b, l, g);
      if (h < e) {
        if (m.length < c) {
          m.push(b);
          i.push(h);
          f = ENCOG.ArrayUtil.arrayMaxIndex(i)
        } else {
          if (h < i[f]) {
            i[f] = h;
            m[f] = b;
            f = ENCOG.ArrayUtil.arrayMaxIndex(i)
          }
        }
      }
    }
    j += 1
  }
  return m
};
ENCOG.MathUtil.randomFloat = function(a, b) {
  return (Math.random * (b - a)) + a
};
ENCOG.ArrayUtil = function() {};
ENCOG.ArrayUtil.fillArray = function(a, e, d, b) {
  var c;
  for (c = e; c < d; c += 1) {
    a[c] = b
  }
};
ENCOG.ArrayUtil.newFloatArray = function(b) {
  var a;
  a = [];
  while (b > 0) {
    a.push(0);
    b -= 1
  }
  return a
};
ENCOG.ArrayUtil.newIntArray = function(b) {
  var a;
  a = [];
  while ((b -= 1) > 0) {
    a.push(0)
  }
  return a
};
ENCOG.ArrayUtil.fillArray2D = function(a, b) {
  var d, c, e;
  for (d = 0; d < a.length; d += 1) {
    e = a[d];
    for (c = 0; c < e.length; c += 1) {
      e[c] = b
    }
  }
};
ENCOG.ArrayUtil.randomizeArray = function(b, f, d, a, e) {
  var c;
  for (c = f; c < d; c += 1) {
    b[c] = ENCOG.MathUtil.randomFloat(a, e)
  }
};
ENCOG.ArrayUtil.randomizeArray2D = function(b, a, e) {
  var d, c, f;
  for (d = 0; d < b.length; d += 1) {
    f = b[d];
    for (c = 0; c < f.length; c += 1) {
      f[c] = ENCOG.MathUtil.randomFloat(a, e)
    }
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
ENCOG.ArrayUtil.allocateBoolean2D = function(d, e) {
  var a, f, c, b;
  a = [
    []
  ];
  for (f = 0; f < d; f += 1) {
    b = [];
    for (c = 0; c < e; c += 1) {
      b[c] = false
    }
    a[f] = b
  }
  return a
};
ENCOG.ArrayUtil.arrayCopy = function(d, c, e, f, b) {
  var a;
  for (a = 0; a < b; a += 1) {
    e[a + f] = d[a + c]
  }
};
ENCOG.ArrayUtil.generateBenchmarkData = function(b, e) {
  var a, d, f, c;
  a = [
    []
  ];
  for (f = 0; f < b; f += 1) {
    d = [];
    for (c = 0; c < e; c += 1) {
      d[c] = (Math.random() * 2) - 1
    }
    a[f] = d
  }
  return a
};
ENCOG.ArrayUtil.arrayMean = function(c, b) {
  var a, d;
  a = 0;
  for (d = 0; d < c.length; d += 1) {
    a += c[d][b]
  }
  a /= c.length;
  return a
};
ENCOG.ArrayUtil.arrayMinIndex = function(c) {
  var b, a, d;
  b = Number.MAX_VALUE;
  a = -1;
  for (d = 0; d < c.length; d += 1) {
    if (c[d] < b) {
      b = c[d];
      a = d
    }
  }
  return a
};
ENCOG.ArrayUtil.arrayMaxIndex = function(c) {
  var b, a, d;
  b = Number.MIN_VALUE;
  a = -1;
  for (d = 0; d < c.length; d += 1) {
    if (c[d] > b) {
      b = c[d];
      a = d
    }
  }
  return a
};
ENCOG.Util.stripQuotes = function(b) {
  var a = b.length;
  if (b[0] === '"' || b[0] === "'") {
    b = b.substr(1);
    a -= 1
  }
  if (b[a - 1] === '"' || b[a - 1] === "'") {
    b = b.substr(0, a - 1)
  }
  return b
};
ENCOG.ActivationSigmoid = function() {};
ENCOG.ActivationSigmoid.prototype = {
  NAME: "ActivationSigmoid",
  encogType: ENCOG.ENCOG_TYPE_ACTIVATION,
  activationFunction: function(a, d, c) {
    var b;
    for (b = d; b < d + c; b += 1) {
      a[b] = 1 / (1 + Math.exp(-1 * a[b]))
    }
  },
  derivativeFunction: function(c, d) {
    return d * (1 - d)
  }
};
ENCOG.ActivationSigmoid.create = function() {
  return new ENCOG.ActivationSigmoid()
};
ENCOG.ActivationTANH = function() {};
ENCOG.ActivationTANH.prototype = {
  NAME: "ActivationTANH",
  encogType: ENCOG.ENCOG_TYPE_ACTIVATION,
  activationFunction: function(a, d, c) {
    var b;
    for (b = d; b < d + c; b += 1) {
      a[b] = ENCOG.MathUtil.tanh(a[b])
    }
  },
  derivativeFunction: function(c, d) {
    return (1 - d * d)
  }
};
ENCOG.ActivationTANH.create = function() {
  return new ENCOG.ActivationTANH()
};
ENCOG.ActivationLinear = function() {};
ENCOG.ActivationLinear.prototype = {
  NAME: "ActivationLinear",
  encogType: ENCOG.ENCOG_TYPE_ACTIVATION,
  activationFunction: function() {},
  derivativeFunction: function() {
    return 1
  }
};
ENCOG.ActivationLinear.create = function() {
  return new ENCOG.ActivationLinear()
};
ENCOG.ActivationElliott = function() {};
ENCOG.ActivationElliott.prototype = {
  NAME: "ActivationElliott",
  encogType: ENCOG.ENCOG_TYPE_ACTIVATION,
  slope: 1,
  activationFunction: function(a, d, c) {
    var b;
    for (b = d; b < d + c; b += 1) {
      a[b] = ((a[b] * this.slope) / 2) / (1 + Math.abs(a[b] * this.slope)) + 0.5
    }
  },
  derivativeFunction: function(c, d) {
    return this.slope / (2 * (1 + Math.abs(c * this.slope)) * (1 + Math.abs(c * this.slope)))
  }
};
ENCOG.ActivationElliott.create = function(b) {
  var a = new ENCOG.ActivationElliott();
  a.slope = b || 1;
  return a
};
ENCOG.ActivationElliottSymmetric = function() {};
ENCOG.ActivationElliottSymmetric.prototype = {
  NAME: "ActivationElliottSymmetric",
  encogType: ENCOG.ENCOG_TYPE_ACTIVATION,
  slope: 1,
  activationFunction: function(a, d, c) {
    var b;
    for (b = d; b < d + c; b += 1) {
      a[b] = (a[b] * this.slope) / (1 + Math.abs(a[b] * this.slope))
    }
  },
  derivativeFunction: function(c, e) {
    var f = (1 + Math.abs(c * this.slope));
    return this.slope / (f * f)
  }
};
ENCOG.ActivationElliottSymmetric.create = function(b) {
  var a = new ENCOG.ActivationElliottSymmetric();
  a.slope = b || 1;
  return a
};
ENCOG.RadialGaussian = function() {};
ENCOG.RadialGaussian.prototype = {
  NAME: "RadialGaussian",
  encogType: ENCOG.ENCOG_TYPE_RBF,
  center: [],
  width: 1,
  peak: 1,
  calculate: function(a) {
    var c = 0,
        b;
    for (b = 0; b < this.center.length; b += 1) {
      c += Math.pow(a[b] - this.center[b], 2) / (2 * this.width * this.width)
    }
    return this.peak * Math.exp(-c)
  }
};
ENCOG.RadialGaussian.create = function(d, b, c) {
  var a = new ENCOG.RadialGaussian();
  a.peak = d || 1;
  a.centers = b;
  a.width = c || 1;
  return a
};
ENCOG.RadialMexicanHat = function() {};
ENCOG.RadialMexicanHat.prototype = {
  NAME: "RadialMexicanHat",
  encogType: ENCOG.ENCOG_TYPE_RBF,
  center: [],
  width: [],
  peak: 1,
  calculate: function(a) {
    var c = 0,
        b;
    for (b = 0; b < this.center.length; b += 1) {
      c += Math.pow(a[b] - this.center[b], 2)
    }
    return this.peak * (1 - c) * Math.exp(-c / 2)
  }
};
ENCOG.RadialMexicanHat.create = function(d, b, c) {
  var a = new ENCOG.RadialMexicanHat();
  a.peak = d || 1;
  a.centers = b;
  a.width = c || 1;
  return a
};
ENCOG.LinearErrorFunction = function() {};
ENCOG.LinearErrorFunction.prototype = {
  calculateError: function(a, d, b) {
    var c;
    for (c = 0; c < d.length; c += 1) {
      b[c] = a[c] - d[c]
    }
  }
};
ENCOG.LinearErrorFunction.create = function() {
  return new ENCOG.LinearErrorFunction()
};
ENCOG.BasicLayer = function() {};
ENCOG.BasicLayer.prototype = {
  NAME: "BasicLayer",
  activation: null,
  count: null,
  biasActivation: null,
  contextFedBy: null,
  calcTotalCount: function() {
    if (this.contextFedBy === null) {
      return this.count + (this.hasBias() ? 1 : 0)
    } else {
      return this.count + (this.hasBias() ? 1 : 0) + this.contextFedBy.count
    }
  },
  hasBias: function() {
    return Math.abs(this.biasActivation) > ENCOG.precision
  },
  calcContextCount: function() {
    if (this.contextFedBy === null) {
      return 0
    } else {
      return this.contextFedBy.count
    }
  }
};
ENCOG.BasicLayer.create = function(d, c, b) {
  var a;
  if (d.encogType !== ENCOG.ENCOG_TYPE_ACTIVATION) {
    throw new Error("Invalid activation function.")
  }
  a = new ENCOG.BasicLayer();
  a.activation = d;
  a.count = c;
  a.biasActivation = b;
  a.contextFedBy = null;
  return a
};
ENCOG.BasicNetwork = function() {};
ENCOG.BasicNetwork.prototype = {
  NAME: "BasicNetwork",
  inputCount: null,
  outputCount: null,
  layerCounts: null,
  layerContextCount: null,
  weightIndex: null,
  layerIndex: null,
  activationFunctions: null,
  layerFeedCounts: null,
  contextTargetOffset: null,
  contextTargetSize: null,
  biasActivation: null,
  beginTraining: null,
  endTraining: null,
  weights: null,
  layerOutput: null,
  layerSums: null,
  connectionLimit: ENCOG.precision,
  clearContext: function() {
    var a, b, c;
    a = 0;
    for (b = 0; b < this.layerIndex.length; b += 1) {
      c = (this.layerContextCount[b] + this.layerFeedCounts[b]) !== this.layerCounts[b];
      ENCOG.ArrayUtil.fillArray(this.layerOutput, a, a + this.layerFeedCounts[b], 0);
      a += this.layerFeedCounts[b];
      if (c) {
        this.layerOutput[a] = this.biasActivation[b];
        a += 1
      }
      ENCOG.ArrayUtil.fillArray(this.layerOutput, a, a + this.layerContextCount[b], 0);
      a += this.layerContextCount[b]
    }
  },
  randomize: function() {
    var a;
    for (a = 0; a < this.weights.length; a += 1) {
      this.weights[a] = (Math.random() * 2) - 1
    }
  },
  computeLayer: function(i) {
    var l, e, f, c, h, b, a, k, g, d, j;
    l = this.layerIndex[i];
    e = this.layerIndex[i - 1];
    f = this.layerCounts[i];
    c = this.layerFeedCounts[i - 1];
    h = this.weightIndex[i - 1];
    b = e + c;
    a = l + f;
    for (k = e; k < b; k += 1) {
      g = 0;
      for (j = l; j < a; j += 1) {
        g += this.weights[h] * this.layerOutput[j];
        h += 1
      }
      this.layerSums[k] = g;
      this.layerOutput[k] = g
    }
    this.activationFunctions[i - 1].activationFunction(this.layerOutput, e, c);
    d = this.contextTargetOffset[i];
    ENCOG.ArrayUtil.arrayCopy(this.layerOutput, e, this.layerOutput, d, this.contextTargetSize[i])
  },
  compute: function(c, b) {
    var a, d, e;
    a = this.layerOutput.length - this.layerCounts[this.layerCounts.length - 1];
    ENCOG.ArrayUtil.arrayCopy(c, 0, this.layerOutput, a, this.inputCount);
    for (d = this.layerIndex.length - 1; d > 0; d -= 1) {
      this.computeLayer(d)
    }
    e = this.contextTargetOffset[0];
    ENCOG.ArrayUtil.arrayCopy(this.layerOutput, 0, this.layerOutput, e, this.contextTargetSize[0]);
    ENCOG.ArrayUtil.arrayCopy(this.layerOutput, 0, b, 0, this.outputCount)
  },
  evaluate: function(l, c) {
    var f, e, h, d, b, k, a, g;
    b = [];
    a = 0;
    g = 0;
    for (f = 0; f < l.length; f += 1) {
      h = l[f];
      d = c[f];
      this.compute(h, b);
      for (e = 0; e < d.length; e += 1) {
        k = d[e] - b[e];
        a += k * k;
        g += 1
      }
    }
    return a / g
  }
};
ENCOG.BasicNetwork.create = function(e) {
  var l, m, k, b, h, f, c, g, d, a;
  m = new ENCOG.BasicNetwork();
  l = e.length;
  m.inputCount = e[0].count;
  m.outputCount = e[l - 1].count;
  m.layerCounts = ENCOG.ArrayUtil.allocate1D(l);
  m.layerContextCount = ENCOG.ArrayUtil.allocate1D(l);
  m.weightIndex = ENCOG.ArrayUtil.allocate1D(l);
  m.layerIndex = ENCOG.ArrayUtil.allocate1D(l);
  m.activationFunctions = ENCOG.ArrayUtil.allocate1D(l);
  m.layerFeedCounts = ENCOG.ArrayUtil.allocate1D(l);
  m.contextTargetOffset = ENCOG.ArrayUtil.allocate1D(l);
  m.contextTargetSize = ENCOG.ArrayUtil.allocate1D(l);
  m.biasActivation = ENCOG.ArrayUtil.allocate1D(l);
  k = 0;
  b = 0;
  h = 0;
  for (f = e.length - 1; f >= 0; f -= 1) {
    g = e[f];
    d = null;
    if (f > 0) {
      d = e[f - 1]
    }
    m.biasActivation[k] = g.biasActivation;
    m.layerCounts[k] = g.calcTotalCount();
    m.layerFeedCounts[k] = g.count;
    m.layerContextCount[k] = g.calcContextCount();
    m.activationFunctions[k] = g.activation;
    b += g.calcTotalCount();
    if (d !== null) {
      h += g.count * d.calcTotalCount()
    }
    if (k === 0) {
      m.weightIndex[k] = 0;
      m.layerIndex[k] = 0
    } else {
      m.weightIndex[k] = m.weightIndex[k - 1] + (m.layerCounts[k] * m.layerFeedCounts[k - 1]);
      m.layerIndex[k] = m.layerIndex[k - 1] + m.layerCounts[k - 1]
    }
    a = 0;
    for (c = e.length - 1; c >= 0; c -= 1) {
      if (e[c].contextFedBy === g) {
        m.hasContext = true;
        m.contextTargetSize[k] = e[c].calcContextCount();
        m.contextTargetOffset[k] = a + (e[c].calcTotalCount() - e[c].calcContextCount())
      }
      a += e[c].calcTotalCount()
    }
    k += 1
  }
  m.beginTraining = 0;
  m.endTraining = m.layerCounts.length - 1;
  m.weights = ENCOG.ArrayUtil.allocate1D(h);
  m.layerOutput = ENCOG.ArrayUtil.allocate1D(b);
  m.layerSums = ENCOG.ArrayUtil.allocate1D(b);
  m.clearContext();
  return m
};
ENCOG.PropagationTrainer = function() {};
ENCOG.PropagationTrainer.prototype = {
  NAME: "PropagationTrainer",
  POSITIVE_ETA: 1.2,
  NEGATIVE_ETA: 0.5,
  DELTA_MIN: 0.000001,
  MAX_STEP: 50,
  network: null,
  trainingInput: null,
  trainingIdeal: null,
  type: null,
  learningRate: null,
  momentum: null,
  layerDelta: null,
  gradients: null,
  lastGradient: null,
  lastDelta: null,
  actual: null,
  flatSpot: null,
  errorFunction: ENCOG.LinearErrorFunction.create(),
  updateValues: null,
  processLevel: function(c) {
    var b, e, i, g, k, j, m, f, d, h, l, a, n, o;
    e = this.network.layerIndex[c + 1];
    b = this.network.layerIndex[c];
    g = this.network.layerCounts[c + 1];
    k = this.network.layerFeedCounts[c];
    i = this.network.weightIndex[c];
    j = this.network.activationFunctions[c + 1];
    m = this.flatSpot[c + 1];
    f = e;
    for (n = 0; n < g; n += 1) {
      d = this.network.layerOutput[f];
      h = 0;
      l = b;
      a = i + n;
      for (o = 0; o < k; o += 1) {
        this.gradients[a] += d * this.layerDelta[l];
        h += this.network.weights[a] * this.layerDelta[l];
        a += g;
        l += 1
      }
      this.layerDelta[f] = h * (j.derivativeFunction(this.network.layerSums[f], this.network.layerOutput[f]) + m);
      f += 1
    }
  },
  learnBPROP: function() {
    var a, b;
    for (a = 0; a < this.network.weights.length; a += 1) {
      b = (this.gradients[a] * this.learningRate) + (this.lastDelta[a] * this.momentum);
      this.lastDelta[a] = b;
      this.network.weights[a] += b
    }
  },
  learnRPROP: function() {
    var d, c, b, a;
    for (a = 0; a < this.network.weights.length; a += 1) {
      c = ENCOG.MathUtil.sign(this.gradients[a] * this.lastGradient[a]);
      b = 0;
      if (c > 0) {
        d = this.updateValues[a] * this.POSITIVE_ETA;
        d = Math.min(d, this.MAX_STEP);
        b = ENCOG.MathUtil.sign(this.gradients[a]) * d;
        this.updateValues[a] = d;
        this.lastGradient[a] = this.gradients[a]
      } else {
        if (c < 0) {
          d = this.updateValues[a] * this.NEGATIVE_ETA;
          d = Math.max(d, this.DELTA_MIN);
          this.updateValues[a] = d;
          b = -this.lastDelta[a];
          this.lastGradient[a] = 0
        } else {
          if (c === 0) {
            d = this.updateValues[a];
            b = ENCOG.MathUtil.sign(this.gradients[a]) * d;
            this.lastGradient[a] = this.gradients[a]
          }
        }
      }
      this.network.weights[a] += b
    }
  },
  process: function(b, a, e) {
    var d, c, f;
    this.network.compute(b, this.actual);
    for (c = 0; c < a.length; c += 1) {
      f = this.actual[c] - a[c];
      this.globalError = this.globalError + (f * f);
      this.setSize += 1
    }
    this.errorFunction.calculateError(a, this.actual, this.layerDelta);
    for (d = 0; d < this.actual.length; d += 1) {
      this.layerDelta[d] = ((this.network.activationFunctions[0].derivativeFunction(this.network.layerSums[d], this.network.layerOutput[d]) + this.flatSpot[0])) * (this.layerDelta[d] * e)
    }
    for (d = this.network.beginTraining; d < this.network.endTraining; d += 1) {
      this.processLevel(d)
    }
  },
  iteration: function() {
    var a;
    this.globalError = 0;
    this.setSize = 0;
    this.actual = [];
    ENCOG.ArrayUtil.fillArray(this.gradients, 0, this.gradients.length, 0);
    ENCOG.ArrayUtil.fillArray(this.lastDelta, 0, this.lastDelta.length, 0);
    for (a = 0; a < this.trainingInput.length; a += 1) {
      this.process(this.trainingInput[a], this.trainingIdeal[a], 1)
    }
    if (this.type === "BPROP") {
      this.learnBPROP()
    } else {
      if (this.type === "RPROP") {
        this.learnRPROP()
      }
    }
    this.error = this.globalError / this.setSize
  }
};
ENCOG.PropagationTrainer.create = function(f, d, b, e, g, c) {
  var a = new ENCOG.PropagationTrainer();
  a.network = f;
  a.trainingInput = d;
  a.trainingIdeal = b;
  a.type = e;
  a.learningRate = g;
  a.momentum = c;
  a.layerDelta = ENCOG.ArrayUtil.newFloatArray(f.layerOutput.length);
  a.gradients = ENCOG.ArrayUtil.newFloatArray(f.weights.length);
  a.lastGradient = ENCOG.ArrayUtil.newFloatArray(f.weights.length);
  a.lastDelta = ENCOG.ArrayUtil.newFloatArray(f.weights.length);
  a.actual = ENCOG.ArrayUtil.newFloatArray(f.outputCount);
  a.flatSpot = ENCOG.ArrayUtil.newFloatArray(f.layerOutput.length);
  a.updateValues = ENCOG.ArrayUtil.newFloatArray(f.weights.length);
  ENCOG.ArrayUtil.fillArray(a.lastGradient, 0, a.lastGradient.length, 0);
  ENCOG.ArrayUtil.fillArray(a.updateValues, 0, a.updateValues.length, 0.1);
  ENCOG.ArrayUtil.fillArray(a.flatSpot, 0, f.weights.length, 0);
  return a
};
ENCOG.Swarm = function() {};
ENCOG.Swarm.prototype = {
  NAME: "Swarm",
  agents: null,
  callbackNeighbors: null,
  constCohesion: 0.01,
  constAlignment: 0.5,
  constSeparation: 0.25,
  iteration: function() {
    var e, j, b, a, m, k, g, d, c, f, h, l;
    for (e = 0; e < this.agents.length; e += 1) {
      g = 0;
      j = ENCOG.MathUtil.kNearest(this.agents[e], this.agents, 5, Number.MAX_VALUE, 0, 2);
      d = ENCOG.MathUtil.kNearest(this.agents[e], this.agents, 5, 10, 0, 2);
      c = 0;
      if (d.length > 0) {
        b = ENCOG.ArrayUtil.arrayMean(d, 0);
        a = ENCOG.ArrayUtil.arrayMean(d, 1);
        m = b - this.agents[e][0];
        k = a - this.agents[e][1];
        c = (Math.atan2(m, k) * 180 / Math.PI) - this.agents[e][2];
        c += 180
      }
      f = 0;
      if (j.length > 0) {
        f = ENCOG.ArrayUtil.arrayMean(j, 2) - this.agents[e][2]
      }
      if (this.callbackNeighbors !== null) {
        this.callbackNeighbors(e, j)
      }
      h = 0;
      if (j.length > 0) {
        b = ENCOG.ArrayUtil.arrayMean(this.agents, 0);
        a = ENCOG.ArrayUtil.arrayMean(this.agents, 1);
        m = b - this.agents[e][0];
        k = a - this.agents[e][1];
        h = (Math.atan2(m, k) * 180 / Math.PI) - this.agents[e][2]
      }
      l = (h * this.constCohesion) + (f * this.constAlignment) + (c * this.constSeparation);
      this.agents[e][2] += l
    }
  }
};
ENCOG.Swarm.create = function(b) {
  var a = new ENCOG.Swarm();
  a.agents = b;
  return a
};
ENCOG.Anneal = function() {};
ENCOG.Anneal.prototype = {
  NAME: "Anneal",
  solution: null,
  scoreSolution: null,
  randomize: null,
  constStartTemp: 10,
  constStopTemp: 2,
  constCycles: 10,
  iteration: function() {
    var c, b, a, e, d;
    c = this.solution.slice();
    b = this.constStartTemp;
    a = this.scoreSolution(this.solution);
    for (d = 0; d < this.constCycles; d += 1) {
      this.randomize(this.solution, b);
      e = this.scoreSolution(this.solution);
      if (e < a) {
        c = this.solution.slice();
        a = e
      }
      this.solution = c.slice();
      b *= Math.exp(Math.log(this.constStopTemp / this.constStartTemp) / (this.constCycles - 1))
    }
  }
};
ENCOG.Anneal.create = function(b) {
  var a = new ENCOG.Anneal();
  a.solution = b;
  return a
};
ENCOG.Genetic = function() {};
ENCOG.Genetic.prototype = {
  NAME: "Genetic",
  population: null,
  scoreSolution: null,
  mutate: null,
  crossover: null,
  constMutationPercent: 0.1,
  constMatePercent: 0.24,
  constMatingPopulationPercent: 0.5,
  iteration: function() {
    var d, c, b, e, a, f;
    d = Math.floor(this.population.length * this.constMatePercent);
    c = d * 2;
    b = this.population.length - c;
    e = Math.floor(this.population.length * this.constMatingPopulationPercent);
    for (a = 0; a < d; a++) {
      f = Math.floor(Math.random() * e);
      this.crossover(this.population[a].data, this.population[f].data, this.population[b].data, this.population[b + 1].data);
      if (Math.random() > this.constMutationPercent) {
        this.mutate(this.population[b].data)
      }
      if (Math.random() > this.constMutationPercent) {
        this.mutate(this.population[b].data)
      }
      this.population[b].score = this.scoreSolution(this.population[b].data);
      this.population[b + 1].score = this.scoreSolution(this.population[b + 1].data);
      b += 2
    }
    this.sortPopulation()
  },
  createPopulation: function(e, b) {
    var c, f, a;
    this.population = [];
    for (c = 0; c < e; c++) {
      f = b();
      a = this.scoreSolution(f);
      this.population[c] = {
        data: f,
        score: a
      }
    }
    this.sortPopulation()
  },
  getSolution: function() {
    return this.population[0].data
  },
  sortPopulation: function() {
    this.population.sort(function(d, c) {
      return d.score - c.score
    })
  }
};
ENCOG.Genetic.create = function() {
  return new ENCOG.Genetic()
};
ENCOG.SOM = function() {};
ENCOG.SOM.prototype = {
  NAME: "SOM",
  weights: null,
  inputCount: 0,
  outputCount: 0,
  classify: function(d) {
    var b, a, c, e;
    if (d.length > this.inputCount) {
      throw new Error("Can't classify SOM with input size of " + this.inputCount + " with input data of count " + d.length)
    }
    b = Number.POSITIVE_INFINITY;
    a = -1;
    for (c = 0; c < this.outputCount; c += 1) {
      e = ENCOG.MathUtil.euclideanDistance(d, this.weights[c], 0, this.inputCount);
      if (e < b) {
        b = e;
        a = c
      }
    }
    return a
  }
};
ENCOG.SOM.create = function(b, c) {
  var a = new ENCOG.SOM();
  a.inputCount = b;
  a.outputCount = c;
  a.weights = ENCOG.ArrayUtil.allocateBoolean2D(c, b);
  return a
};
ENCOG.TrainSOM = function() {};
ENCOG.TrainSOM.prototype = {
  NAME: "SOM",
  weights: null,
  som: null,
  learningRate: 0.5,
  correctionMatrix: null,
  trainingInput: null,
  worstDistance: 0,
  iteration: function() {
    var b, a, c;
    ENCOG.ArrayUtil.fillArray2D(this.correctionMatrix, 0);
    for (b = 0; b < this.trainingInput.length; b++) {
      a = this.trainingInput[b];
      c = this.calculateBMU(a);
      this.train(c, a);
      this.applyCorrection()
    }
  },
  reset: function() {
    ENCOG.MathUtil.randomizeArray2D(this.weights, -1, 1)
  },
  calculateBMU: function(b) {
    var a, d, c, e;
    a = 0;
    if (b.length > this.som.inputCount) {
      throw new Error("Can't train SOM with input size of " + this.inputCount + " with input data of count " + b.length)
    }
    d = Number.POSITIVE_INFINITY;
    for (c = 0; c < this.som.outputCount; c++) {
      e = ENCOG.MathUtil.euclideanDistance(this.som.weights[c], b, 0, this.som.weights[c].length);
      if (e < d) {
        d = e;
        a = c
      }
    }
    if (d > this.worstDistance) {
      this.worstDistance = d
    }
    return a
  },
  train: function(b, a) {},
  applyCorrection: function() {}
};
ENCOG.TrainSOM.create = function(c, b) {
  var a = new ENCOG.TrainSOM();
  a.som = c;
  a.learningRate = b;
  a.correctionMatrix = ENCOG.ArrayUtil.allocateBoolean2D(this.som.outputCount, this.som.inputCount);
  return a
};
ENCOG.ReadCSV = function() {};
ENCOG.ReadCSV.prototype = {
  regStr: null,
  inputData: null,
  idealData: null,
  inputCount: 0,
  idealCount: 0,
  delimiter: ",",
  readCSV: function(c, a, f) {
    var b, e, h, g, i;
    this.inputCount = a;
    this.idealCount = f;
    e = new RegExp(this.regStr, "gi");
    this.inputData = [
      []
    ];
    this.idealData = [
      []
    ];
    b = 0;
    while (h = e.exec(c)) {
      i = h[1];
      if (i.length && (i != this.delimiter)) {
        this.inputData.push([]);
        this.idealData.push([]);
        b = 0
      }
      if (h[2]) {
        g = h[2].replace(new RegExp('""', "g"), '"')
      } else {
        g = h[3]
      }
      if (b < this.inputCount) {
        this.inputData[this.inputData.length - 1].push(g)
      } else {
        this.idealData[this.idealData.length - 1].push(g)
      }
      b += 1
    }
  }
};
ENCOG.ReadCSV.create = function(b) {
  var a = new ENCOG.ReadCSV();
  a.delimiter = (b || ",");
  a.regStr = "(\\" + a.delimiter + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + a.delimiter + "\\r\\n]*))";
  return a
};
ENCOG.ReadCSV.fromCommaListInt = function(d) {
  var a, c, b;
  a = [];
  c = d.split(",");
  for (b = 0; b < c.length; b += 1) {
    a.push(parseInt(c[b], 10))
  }
  return a
};
ENCOG.ReadCSV.fromCommaListFloat = function(d) {
  var a, c, b;
  a = [];
  c = d.split(",");
  for (b = 0; b < c.length; b += 1) {
    a.push(parseFloat(c[b]))
  }
  return a
};
ENCOG.ReadCSV.toCommaList = function(b) {
  var a, c;
  a = "";
  for (c = 0; c < b.length; c += 1) {
    if (c > 0) {
      a += ","
    }
    a += b[c]
  }
  return a
};
ENCOG.EGFILE = function() {};
ENCOG.EGFILE.save = function(e) {
  var a = "",
      c, d, b;
  c = (new Date()).getTime();
  a += "encog,BasicNetwork," + ENCOG.PLATFORM + ",3.1.0,1," + c + ENCOG.NEWLINE;
  a += "[BASIC]" + ENCOG.NEWLINE;
  a += "[BASIC:PARAMS]" + ENCOG.NEWLINE;
  a += "[BASIC:NETWORK]" + ENCOG.NEWLINE;
  a += "beginTraining=" + e.beginTraining + ENCOG.NEWLINE;
  a += "connectionLimit=" + e.connectionLimit + ENCOG.NEWLINE;
  a += "contextTargetOffset=" + ENCOG.ReadCSV.toCommaList(e.contextTargetOffset) + ENCOG.NEWLINE;
  a += "contextTargetSize=" + ENCOG.ReadCSV.toCommaList(e.contextTargetSize) + ENCOG.NEWLINE;
  a += "endTraining=" + e.endTraining + ENCOG.NEWLINE;
  a += "hasContext=" + (e.hasContext ? "t" : "f") + ENCOG.NEWLINE;
  a += "inputCount=" + e.inputCount + ENCOG.NEWLINE;
  a += "layerCounts=" + ENCOG.ReadCSV.toCommaList(e.layerCounts) + ENCOG.NEWLINE;
  a += "layerFeedCounts=" + ENCOG.ReadCSV.toCommaList(e.layerFeedCounts) + ENCOG.NEWLINE;
  a += "layerContextCount=" + ENCOG.ReadCSV.toCommaList(e.layerContextCount) + ENCOG.NEWLINE;
  a += "layerIndex=" + ENCOG.ReadCSV.toCommaList(e.layerIndex) + ENCOG.NEWLINE;
  a += "output=" + ENCOG.ReadCSV.toCommaList(e.layerOutput) + ENCOG.NEWLINE;
  a += "outputCount=" + e.outputCount + ENCOG.NEWLINE;
  a += "weightIndex=" + ENCOG.ReadCSV.toCommaList(e.weightIndex) + ENCOG.NEWLINE;
  a += "weights=" + ENCOG.ReadCSV.toCommaList(e.weights) + ENCOG.NEWLINE;
  a += "biasActivation=" + ENCOG.ReadCSV.toCommaList(e.biasActivation) + ENCOG.NEWLINE;
  a += "[BASIC:ACTIVATION]" + ENCOG.NEWLINE;
  for (d = 0; d < e.activationFunctions.length; d += 1) {
    b = e.activationFunctions[d];
    a += '"';
    a += b.NAME;
    a += '"' + ENCOG.NEWLINE
  }
  return a
};
ENCOG.EGFILE.load = function(c) {
  var a, d, b;
  d = 0;
  a = c.match(/^.*([\n\r]+|$)/gm);
  while (a[d].trim().length === 0) {
    d += 1
  }
  b = a[d].trim().split(",");
  if (b[0] !== "encog") {
    throw new Error("Not a valid Encog EG file.")
  }
  if (b[1] === "BasicNetwork") {
    return ENCOG.EGFILE.loadBasicNetwork(c)
  } else {
    throw new Error("Encog Javascript does not support: " + b[1])
  }
};
ENCOG.EGFILE._loadNetwork = function(d, g, b) {
  var a, c, e, f;
  while (g < d.length) {
    c = d[g].trim();
    if (c[0] == "[") {
      break
    }
    g++;
    a = c.indexOf("=");
    if (a == -1) {
      throw new Error("Invalid line in BasicNetwork file: " + c)
    }
    e = c.substr(0, a).trim().toLowerCase();
    f = c.substr(a + 1).trim();
    if (e == "begintraining") {
      b.beginTraining = parseInt(f)
    } else {
      if (e == "connectionlimit") {
        b.connectionLimit = parseFloat(f)
      } else {
        if (e == "contexttargetoffset") {
          b.contextTargetOffset = ENCOG.ReadCSV.fromCommaListInt(f)
        } else {
          if (e == "contexttargetsize") {
            b.contextTargetSize = ENCOG.ReadCSV.fromCommaListInt(f)
          } else {
            if (e == "endtraining") {
              b.endTraining = parseInt(f)
            } else {
              if (e == "hascontext") {
                b.hasContext = (f.toLowerCase() == "f")
              } else {
                if (e == "inputcount") {
                  b.inputCount = parseInt(f)
                } else {
                  if (e == "layercounts") {
                    b.layerCounts = ENCOG.ReadCSV.fromCommaListInt(f)
                  } else {
                    if (e == "layerfeedcounts") {
                      b.layerFeedCounts = ENCOG.ReadCSV.fromCommaListInt(f)
                    } else {
                      if (e == "layercontextcount") {
                        b.layerContextCount = ENCOG.ReadCSV.fromCommaListInt(f)
                      } else {
                        if (e == "layerindex") {
                          b.layerIndex = ENCOG.ReadCSV.fromCommaListInt(f)
                        } else {
                          if (e == "output") {
                            b.layerOutput = ENCOG.ReadCSV.fromCommaListFloat(f)
                          } else {
                            if (e == "outputcount") {
                              b.outputCount = parseInt(f)
                            } else {
                              if (e == "weightindex") {
                                b.weightIndex = ENCOG.ReadCSV.fromCommaListInt(f)
                              } else {
                                if (e == "weights") {
                                  b.weights = ENCOG.ReadCSV.fromCommaListFloat(f)
                                } else {
                                  if (e == "biasactivation") {
                                    b.biasActivation = ENCOG.ReadCSV.fromCommaListFloat(f)
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  b.layerSums = [];
  ENCOG.ArrayUtil.fillArray(b.layerSums, 0, b.layerSums, 0);
  return g
};
ENCOG.EGFILE._loadActivation = function(c, e, a) {
  var d, b;
  a.activationFunctions = [];
  d = 0;
  while (e < c.length) {
    b = c[e++].trim();
    if (b[0] == "[") {
      break
    }
    b = ENCOG.Util.stripQuotes(b);
    if (b == "ActivationLinear") {
      a.activationFunctions[d] = ENCOG.ActivationLinear.create()
    } else {
      if (b == "ActivationSigmoid") {
        a.activationFunctions[d] = ENCOG.ActivationSigmoid.create()
      } else {
        if (b == "ActivationTANH") {
          a.activationFunctions[d] = ENCOG.ActivationTANH.create()
        } else {
          if (b == "ActivationElliott") {
            a.activationFunctions[d] = ENCOG.ActivationElliott.create()
          } else {
            if (b == "ActivationElliottSymmetric") {
              a.activationFunctions[d] = ENCOG.ActivationElliottSymmetric.create()
            }
          }
        }
      }
    }
    d += 1
  }
  return e
};
ENCOG.EGFILE.loadBasicNetwork = function(e) {
  var c, f, b, d, a;
  f = 0;
  c = e.match(/^.*([\n\r]+|$)/gm);
  while (c[f].trim().length == 0) {
    f++
  }
  d = c[f++].trim().split(",");
  if (d[0] != "encog") {
    throw new Error("Not a valid Encog EG file.")
  }
  if (d[1] != "BasicNetwork") {
    throw new Error("Not a BasicNetwork EG file.")
  }
  a = new ENCOG.BasicNetwork();
  while (f < c.length) {
    b = c[f++].trim();
    if (b == "[BASIC:NETWORK]") {
      f = this._loadNetwork(c, f, a)
    } else {
      if (b == "[BASIC:ACTIVATION]") {
        f = this._loadActivation(c, f, a)
      }
    }
  }
  return a
};