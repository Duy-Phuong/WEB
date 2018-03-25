/**
 * Different timing functions
 * used for Animations
 * @type {Object}
 */
var easings = (function () {
	var fn = {
		quad: function (p) {
			return Math.pow(p, 2)
		},
		cubic: function (p) {
			return Math.pow(p, 3)
		},
		quart: function (p) {
			return Math.pow(p, 4)
		},
		quint: function (p) {
			return Math.pow(p, 5)
		},
		expo: function (p) {
			return Math.pow(p, 6)
		},
		sine: function (p) {
			return 1 - Math.cos(p * Math.PI / 2)
		},
		circ: function (p) {
			return 1 - Math.sqrt(1 - p * p)
		},
		back: function (p) {
			return p * p * (3 * p - 2)
		}
	}

	var easings = {
		linear: function (p) {
			return p
		}
	}

	Object.keys(fn).forEach(function (name) {
		var ease = fn[name]
		easings['ease-in-' + name] = ease
		easings['ease-out-' + name] = function (p) {
			return 1 - ease(1 - p)
		}
		easings['ease-in-out-' + name] = function (p) {
			return p < 0.5
				? ease(p * 2) / 2
				: 1 - ease(p * -2 + 2) / 2
		}
	})

	easings.css = {
		'linear': 'cubic-bezier(0.000, 0.000, 1.000, 1.000)',
		'ease-in-quad': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
		'ease-in-cubic': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
		'ease-in-quart': 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
		'ease-in-quint': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
		'ease-in-sine': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
		'ease-in-expo': 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
		'ease-in-circ': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
		'ease-in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
		'ease-out-quad': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
		'ease-out-cubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
		'ease-out-quart': 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
		'ease-out-quint': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
		'ease-out-sine': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
		'ease-out-expo': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
		'ease-out-circ': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
		'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
		'ease-in-out-quad': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
		'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
		'ease-in-out-quart': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
		'ease-in-out-quint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
		'ease-in-out-sine': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
		'ease-in-out-expo': 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
		'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
		'ease-in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
	}

	return easings
}())
