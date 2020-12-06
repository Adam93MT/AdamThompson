module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "55PY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PortfolioTemplate; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./templates/portfolio-page/portfolio-quick-link/portfolio-quick-link.module.scss
var portfolio_quick_link_module = __webpack_require__("gw5e");
var portfolio_quick_link_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_quick_link_module);

// CONCATENATED MODULE: ./templates/portfolio-page/portfolio-quick-link/portfolio-quick-link.js






const PortfolioQuickLink = ({
  to,
  direction
}) => {
  const link = to ? to.path : '/';
  const label = to ? to.context.frontmatter.title : 'Home';
  const linkClass = label.replace(' ', '').toLowerCase();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Link, {
    to: link,
    className: `${linkClass} quick-link`,
    id: `${direction}-link`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: portfolio_quick_link_module_default.a.quick_link_direction,
      children: Object(external_lodash_["upperFirst"])(direction)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: portfolio_quick_link_module_default.a.quick_link_label,
      children: label
    })]
  });
};

/* harmony default export */ var portfolio_quick_link = (PortfolioQuickLink);
// EXTERNAL MODULE: ./templates/portfolio-page/portfolio-template.module.scss
var portfolio_template_module = __webpack_require__("BbNV");
var portfolio_template_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_template_module);

// EXTERNAL MODULE: ./images/monogram.svg
var monogram = __webpack_require__("CERM");

// EXTERNAL MODULE: ./templates/portfolio-page/portfolio-page-header/portfolio-page-header.module.scss
var portfolio_page_header_module = __webpack_require__("YpR6");
var portfolio_page_header_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_page_header_module);

// CONCATENATED MODULE: ./templates/portfolio-page/portfolio-page-header/portfolio-page-header.js



 // React component using gatsby-plugin-react-svg


const PortfolioPageHeader = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
  className: portfolio_page_header_module_default.a.portfolio_page_header,
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
    className: portfolio_page_header_module_default.a.portfolio_page_link,
    href: "/",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram["a" /* default */], {
      className: portfolio_page_header_module_default.a.portfolio_page_logo
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: portfolio_page_header_module_default.a.portfolio_page_title,
      children: "Adam Thompson"
    })]
  })
});
// EXTERNAL MODULE: ./hooks/useCustomProperty.js
var useCustomProperty = __webpack_require__("I9h+");

// CONCATENATED MODULE: ./templates/portfolio-page/portfolio-template.js








const PortfolioTemplate = ({
  meta,
  children
}) => {
  const mainRef = Object(useCustomProperty["b" /* useCustomProps */])({
    '--brand-color': `var(--color-${meta.brand})`,
    '--brand-color-light': `var(--color-${meta.brand}-light)`,
    '--brand-color-lightest': `var(--color-${meta.brand}-lightest)`
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
    ref: mainRef,
    className: portfolio_template_module_default.a.portfolio,
    id: meta.brand,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: ["Portfolio | ", meta.title]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PortfolioPageHeader, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: portfolio_template_module_default.a.portfolio_content_container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: portfolio_template_module_default.a.portfolio_content,
        children: children
      })
    })]
  });
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lV73");


/***/ }),

/***/ "BbNV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"portfolio": "portfolio-template_portfolio__1HZ-8",
	"footnotes": "portfolio-template_footnotes__2MYKN",
	"quick_links_container": "portfolio-template_quick_links_container__odJvK",
	"portfolio_content_container": "portfolio-template_portfolio_content_container__GdcFg",
	"portfolio_content": "portfolio-template_portfolio_content__2RyEi"
};


/***/ }),

/***/ "CERM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentcolor",
  d: "M8,0 L16,16 L0,16 L8,0 Z M16,0 L32,0 L32,16 L16,16 L16,0 Z M16,0 L16,5 L21,5 L21,0 L16,0 Z M27,0 L27,5 L32,5 L32,0 L27,0 Z M27,11 L27,16 L32,16 L32,11 L27,11 Z M16,11 L16,16 L21,16 L21,11 L16,11 Z",
  id: "Shape"
});

function SvgMonogram(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: "32px",
    height: "16px",
    viewBox: "0 0 32 16",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["a"] = (SvgMonogram);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "I9h+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCustomProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCustomProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // add the returned Ref to the root element of your component
// then you can use the 'propName' as a CSS variable

const useCustomProp = (propName, value) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref) {
      ref.current.style.setProperty(propName, value);
    } else {
      console.warn(`Unused ref returned by useCustomProp`);
    }
  }, [propName, value, ref]);
  return ref;
}; // Same as above, but for setting multiple properties at once
// type customPropsObject = {[key:string]: string};

const useCustomProps = customProperties => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref) {
      if (typeof customProperties === 'object') {
        Object.entries(customProperties).forEach(prop => {
          ref.current.style.setProperty(prop[0], prop[1]);
        });
      }
    } else {
      console.warn(`Unused ref returned by useCustomProp`);
    }
  }, [customProperties, ref]);
  return ref;
};

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YpR6":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"portfolio_page_header": "portfolio-page-header_portfolio_page_header__2Wgce",
	"portfolio_page_link": "portfolio-page-header_portfolio_page_link__37iHQ",
	"portfolio_page_logo": "portfolio-page-header_portfolio_page_logo__1Ztt7",
	"portfolio_page_title": "portfolio-page-header_portfolio_page_title__mALvL"
};


/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gw5e":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"quick-link": "portfolio-quick-link_quick-link__1nIGN",
	"newvisions": "portfolio-quick-link_newvisions__1aPna",
	"quick-link-label": "portfolio-quick-link_quick-link-label__3MD9X",
	"noom": "portfolio-quick-link_noom__22uHk",
	"knowroaming": "portfolio-quick-link_knowroaming__3AntY",
	"chameleon": "portfolio-quick-link_chameleon__Avhbt",
	"smrtwatr": "portfolio-quick-link_smrtwatr__Krrsv",
	"quick-link-direction": "portfolio-quick-link_quick-link-direction__PrADF",
	"prev-link": "portfolio-quick-link_prev-link__2KEsr",
	"next-link": "portfolio-quick-link_next-link__1Snnc"
};


/***/ }),

/***/ "lV73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("55PY");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */


const meta = {
  title: "New Visions",
  brand: "newvisions",
  date: "2019-09-03",
  tagline: "A framework for accessible data",
  cover: 'nv-breakdown-cover.png',
  color: '#0a4ace',
  section: "portfolio"
};
const layoutProps = {
  meta
};

const MDXLayout = ({
  children
}) => Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__[/* PortfolioTemplate */ "a"], {
  meta: meta
}, children);

function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `New Visions`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("section", {
    className: "tldr",
    markdown: "1"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `A framework for accessible data`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `It can be difficult to manage one of New York City’s large public schools—things are changing all the time, and school leadership needs up-to-date information about their school’s demographics, academics, attendance and other data. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I designed and tested a framework for developing multi-leveled dashboards which highlight important data points for school managers. This framework was invaluable in March 2020 when we needed to quickly develop new features for remote learning.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `This involved understanding users’ needs, developing a conceptual framework and information architecture, designing and usability testing all three levels of the dashboard user interface, and finally prototyping the data-visualization graphs in `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `d3`), `. This project spanned two “phases” over the span of two years.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    className: "cover_image"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `  `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/nv-dashboard-demo.png",
    "alt": "All four layers of the New Visions dashboard"
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `The company`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `New Visions for Public Schools is a New York based non-profit that develops systems and tools to equitably manage NYC public schools. These tools enable all schools to provide equitable education across the city, and ensure no student gets left behind.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `My work was focused on the Portal—a tool used by school staff that provides the data they need to stay on top of managing their students’ success.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Data for Managers`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `While many features in the Portal aid staff who interact with students directly—like councilors—there was a need to enhance features that serve school managers—like principals and other admin staff. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Our goal was to develop a framework for providing school managers with the data they need to make high-level decisions, and highlight areas they need to focus on.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `A dashboard’s purpose`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `At a high level, the purpose of a dashboard is to display information at-a-glance. But when designing a dashboard you can’t just slap in any information—the designer needs to be aware of what a user might want to `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `do`), ` with the information.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `After researching our users’ and stakeholder’s needs, I was able to distill two broad use cases for a dashboard in our app: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `Observation`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `Action`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `With Observation, a user simply wants to observe a metric, and perhaps compare it to a previous point in time. This is typically the use case of the power-user who has a great amount of experience with the data at hand. These users are able to read more into the data and take actions based on past experience. In effect, the Observation dashboard offloads judgement and decision making to the user.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Alternatively, there are many cases where a user does not want to, or lacks the experience to parse what the data means to them. In this case the users should be prompted to take a specific action. In our case, we have 30 years of educational systems experience in place, and are in great position to encourage a user to take specific actions in a dashboard.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `By highlighting the differences between these two dashboard types, a designer can leverage this framework to speed up design of new dashboard sections by designing for a specific use case. The framework encourages the dashboard designer to ask “what will the user do with this information” in order to streamline development. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/new-tiles@2x.png",
    "alt": "A comparision between the Chronic absenteeism tile & of Needs Attendance support tile"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Chronic Absenteeism Rate informs the viewer of the percentage of students who have an overall attendance rate below a certain threshold. This is useful for an experienced staff member with knowledge of the thresholds, and who wants to make nuanced decisions.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Needs attendance support on the other hand calls out the specific students that a user should be taking action on and providing additional support. This is actionable even for a guidance councilor on their first day.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Breaking down the data`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `While a single data point can useful to identify potential problem areas, it doesn’t provide much insight into the source of the problem and its potential solutions. School managers want to compare data across sub-groups, and even see which individual students make up those aggregate numbers in order to take action on specific groups of students.  By providing a breakdown, we could provide the information managers needed to make informed decisions and targeted actions. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/template-breakdown@2x.png",
    "alt": "The breakdown interface — users can navigate to this page by clicking on any “tile” on the main dashboard page"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The “breakdown” interface consists of two major elements: a data visualization, and a data table.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Graphs and their purpose`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `A single data point is rarely insightful on its own. After talking to users about their needs and researching data visualization types, I identified a three parameters for `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Comparison`), ` that can help a designer determine how to visualize data. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Data can be compared either `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `between groups`), ` (e.g attendance rates between grades), `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `within groups`), ` (e.g. attendance rates of female & male students within a grade), or `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `over time`), ` (e.g. average attendance over the year). Identifying which comparison parameters might be useful for a given data point is an important step in designing a new dashboard breakdown screen.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `To simplify the process I eliminated some less-useful combinations, and defined four data visualization styles that align to common comparison types.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Bar graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between groups`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Stacked Bar graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `within`), ` groups.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Line graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between groups`), `, and change `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `over time`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Sankey graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `within`), ` groups, as well as change `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `over time`), `.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/graphs.png",
    "alt": "Samples of each graph type"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Table data`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `While visualizations are great for many visually-minded users, we needed to present the data numerically as well. This allowed me to future-proof the framework, and present additional data to support the primary data being plotted. While I left decisions about exactly what additional data to include up to the implementing designer, I laid out some structural patterns in the framework. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `First, testing showed that the leftmost table column(s) should align with the data point(s) being plotted, and the right-most should be a total of all the students in the group. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Second, the rows in the table should align with the comparison group in each graph. That is, if we’re comparing between grades, each table row should be a grade. This pattern still holds when comparing both `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `between`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `within`), ` groups, and coincides with the first pattern. For example, if we’re comparing sexes `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `within`), ` grades, then each row is a grade, and the first columns are each of the sexes, since that’s the data plotted in a stacked bar graph. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/table@2x.png",
    "alt": "A data table that’s associated with the bar graph above"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `The student level`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Users are generally loath to take action on a whole group without seeing the individual students first. In this framework, a user can navigate to a list of the students that make up that group by clicking on a row in the breakdown table. On this screen a user is shown additional context that might help when making a decision about what action to take. The framework makes no assertions about what this additional data should be, and leaves that up to the implementing designer as well.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Not a prescription`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Overall, this framework provides a three-level architecture with logic and interaction patterns that help future designers display and visualize new data. It’s not a prescriptive framework however, and can be broken if necessary—every user goal and every data point is different, and requires careful thought into how the data is should be presented. `));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });