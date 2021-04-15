

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var breakpoints = [480, 600, 840, 1024, 1440];
var setBreakpoints = function (breaks) {
    breakpoints = breaks;
};
var getBreakpoints = function () { return breakpoints; };

var screenClasses = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
];
var getViewPort = function (sourceRef) {
    if (sourceRef &&
        sourceRef &&
        sourceRef.current.clientWidth) {
        return sourceRef.current.clientWidth;
    }
    if (typeof window !== "undefined" &&
        window.innerWidth) {
        return window.innerWidth;
    }
    return null;
};
var useScreenClass = function (sourceRef, defaultClass) {
    var getClass = function () {
        var breakpoints = getBreakpoints();
        var newClass = defaultClass;
        var viewport = getViewPort(sourceRef);
        if (viewport) {
            newClass = "xs";
            if (breakpoints[0] &&
                viewport >= breakpoints[0])
                newClass = "sm";
            if (breakpoints[1] &&
                viewport >= breakpoints[1])
                newClass = "md";
            if (breakpoints[2] &&
                viewport >= breakpoints[2])
                newClass = "lg";
            if (breakpoints[3] &&
                viewport >= breakpoints[3])
                newClass = "xl";
            if (breakpoints[4] &&
                viewport >= breakpoints[4])
                newClass = "xxl";
        }
        else if (defaultClass) {
            newClass = defaultClass;
        }
        var newScreenClassIndex = screenClasses.indexOf(newClass);
        var maxScreenClassIndex = screenClasses.indexOf(newClass);
        if (maxScreenClassIndex >= 0 &&
            newScreenClassIndex > maxScreenClassIndex) {
            newClass =
                screenClasses[maxScreenClassIndex];
        }
        return newClass;
    };
    var _a = react.useState(getClass()), screenClass = _a[0], setScreenClass = _a[1];
    react.useEffect(function () {
        var handleWindowResized = function () {
            return setScreenClass(getClass());
        };
        window.addEventListener("resize", handleWindowResized, false);
        return function () {
            window.removeEventListener("resize", handleWindowResized, false);
        };
    }, []);
    return screenClass;
};

exports.getBreakpoints = getBreakpoints;
exports.screenClasses = screenClasses;
exports.setBreakpoints = setBreakpoints;
exports.useScreenClass = useScreenClass;
//# sourceMappingURL=index.js.map
