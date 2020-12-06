module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4VR2":
/***/ (function(module, exports) {

module.exports = require("markdown-to-jsx");

/***/ }),

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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "8qNN":
/***/ (function(module) {

module.exports = JSON.parse("{\"tagline\":\"An engineer at the intersection of design and development.\",\"blurb\":\"With an engineering education and experience in UX design since 2013, I seamlessly bridge the gap between the two disciplines.\",\"experience\":{\"new-visions\":{\"company\":\"New Visions for Public Schools\",\"url\":\"http://www.newvisions.org\",\"term\":\"July 2018 - now\",\"position\":\"UI Engineer\",\"location\":\"NYC\",\"summary\":\"Design systems, CSS architecture, UX frameworks, and feature design.\",\"bullets\":[\"Streamlined designer-developer collaboration by compiling design system documentation, and building and maintaining the Angular component library.\",\"Developed CSS best-practices and architecture that leverages the opinionated structure of Angular, improving the long-term maintainability and visual consistency.\",\"Designed a conceptual framework to streamline development of new data visualizations, enabling the team to launch remote learning features just days after schools closed in March 2020.\"]},\"music-group\":{\"company\":\"TC Helicon\",\"url\":\"http://musicri.be\",\"term\":\"Jan - Apr 2018\",\"position\":\"Product Manager\",\"location\":\"Kitchener\",\"summary\":\"Design process, high-level product vision & business case development.\",\"bullets\":[\"Defined business strategy and product specifications for a line of music accessories based on market and user research.\",\"Developed a globally used tool allowing managers to quickly evaluate new projects based on ROI and other key data.\"]},\"zynga\":{\"company\":\"Zynga\",\"url\":\"http://www.zynga.com/poker\",\"term\":\"Summer 2016\",\"position\":\"UX Product Manager\",\"summary\":\"Data analysis, UX research and testing for Poker Web.\",\"location\":\"Toronto\",\"bullets\":[\"Optimized user flows based on the results of multi-variate testing, and configured final design parameters for a social engagement feature and a new subscription-based revenue model.\"]},\"noom\":{\"company\":\"Noom\",\"url\":\"http://www.noom.com\",\"term\":\"Fall 2015\",\"position\":\"Product Designer\",\"summary\":\"Usability optimization, and user testing for the core food-logging feature.\",\"location\":\"NYC\",\"logotype\":\"images/companies/noom_logotype_small.png\",\"logo\":\"images/companies/noom_logo.png\",\"bullets\":[\"Simplified the core food logging experience by modifying the information architecture to better fit the mental model observed during user interviews.\"]},\"knowroaming\":{\"company\":\"KnowRoaming\",\"url\":\"http://www.knowroaming.com\",\"term\":\"Spring 2014 - Winter 2015\",\"position\":\"UX Designer\",\"summary\":\"User research, information architecture and UI design for all mobile apps.\",\"location\":\"Toronto\",\"bullets\":[\"Redesigned the app information architecture and UI to better align with common use cases.\"]},\"sony\":{\"company\":\"Sony\",\"url\":\"http://mediago.sony.com\",\"term\":\"Winter 2013\",\"position\":\"UI Designer\",\"summary\":\"UI design and front-end development for MediaGo.\",\"location\":\"Waterloo\",\"bullets\":[\"Led UI design and front-end development for a music discovery feature.\"]}},\"education\":{\"uwaterloo\":{\"url\":\"http://www.uwaterloo.ca/systems-design-engineering/about-systems-design-engineering\",\"company\":\"University of Waterloo\",\"position\":\"Systems Design Engineering\",\"degree\":\"BASc.\",\"minor\":\"Cognitive Science\",\"summary\":\"B.ASc. with Cognitive Science minor.\",\"class\":\"2017\"}},\"projects\":\"See projects.json\",\"volunteer\":{\"thesymphonychorus\":{\"title\":\"The SymphoNYChorus\",\"location\":\"2018 - now\",\"description\":\"Tenor section leader for the combined choir and orchestra.\"},\"kwasind\":{\"title\":\"Camp Kwasind\",\"location\":\"2017\",\"description\":\"Maintenance, cabin leader and staff mentor.\"},\"water-boys\":{\"title\":\"The Water Boys\",\"location\":\"2013-2017\",\"description\":\"Baritone section leader for the world-ranked all-male a cappella group.\"},\"uwux\":{\"title\":\"UW/UX\",\"location\":\"2015-2016\",\"description\":\"Vice President of the UW campus UX Club, mentoring younger students and planning club events.\"}},\"toolbox\":[\"CSS\",\"HTML\",\"Javascript\",\"Typescript\",\"Angular\",\"React\",\"Vue\",\"Storybook\",\"Sass\",\"Node\",\"D3\",\"XState\",\"Git\",\"CI\",\"Swift\",\"Origami\",\"Framer\",\"Sketch\",\"Zeplin\",\"InVision\",\"Photoshop\",\"Illustrator\",\"Balsamiq\",\"Excel\",\"Airtable\",\"Python\",\"Arduino\"]}");

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9cCj":
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
  title: "Chameleon",
  brand: "chameleon",
  date: "2017-12-20",
  tagline: "What if your ears could blink?",
  cover: 'chameleon-cover.png',
  color: '#2e8c5d',
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Chameleon`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "tldr",
    markdown: "`1`"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Adaptive hearing protection that reacts to your surroundings.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `We noticed that people don't like to wear hearing protection when the volume can change often—like in construction sites or factories—because they need to communicate, and constantly removing hearing protection is inefficient.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `So we designed and prototyped Chameleon—hearing protection that responds to the volume of your surroundings. When it's quiet, you can hear as if you're not wearing hearing protection. When it gets loud, it reacts in an instant to protect your hearing until it's safe again.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "cover-image vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/cover/chameleon-cover.png",
    "alt": "A 3D rendering of the Chameleon hearing protection device"
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Problem`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We surveyed and interviewed people who work in construction, manufacturing, and live music production`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("sup", _objectSpread({
    parentName: "p"
  }, {
    "id": "fnref-1"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "sup"
  }, {
    "href": "#fn-1",
    "className": "footnote-ref"
  }), `1`)), ` about their hearing protection use. A vast majority answered that while they know they should wear, protection they often don't. When asked why, they said they often needed to talk at work, and it's tedious to constantly remove hearing protection and put it back on.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Requirements`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Based on our research insights, we came up with a number of areas our device should excel in. We then turned them into engineering functional requirements and metrics.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Attenuation:`), ` Must protect the wearer from potentially damaging sound.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Communication:`), ` Should allow communication when there is no damaging sound.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Comfort:`), ` Should be comfortable to wear for a full work day.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Cost:`), ` Should be reasonably priced relative to other products in the space.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Durability:`), ` Should withstand daily use in a rugged environment, and consume minimal power.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Measurement:`), ` Should accurately measure the noise level, and conform to ANSI standards.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `User Stories`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I started to draw up flows and storyboards for the ideal use of the device. Storyboards helped identify different use scenarios (who's talking? who's making the noise?), and functions we had initially overlooked (like override buttons to preemptively close the device), but a user flow was not very helpful, since the primary goal is to not interfere with the wearer's work. Any user flow was a straight line from the beginning off the day to the end. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We found that the user story: "As a worker, I want to protect my hearing and still be able to communicate when working" helped us focus in during development.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Prototypes`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Full Prototype Mk. 1`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Over the next couple months we worked on the electrical and software systems, as well as testing different ways to dynamically attenuate. Our first system prototype was a retrofit on an existing ear-cup, and was used to test the measurement, control logic and mechanical components of the system. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image video",
    id: "first-proto-video"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://www.youtube.com/embed/yUvlpVK7ays?loop=1",
    frameborder: "0",
    loop: "1",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "The first prototype")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Though a good proof-of-concept, this prototype was too slow, and too noisy for what we needed to do with it. We also noticed when testing it that long hair tended to get caught in the disk—definitely not ideal.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Full Prototype Mk. 2`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I spent the next 4 months working on all aspects of the design: electronics, embedded code, mechanical and acoustics.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `After a few dozen smaller scale prototypes to test each part of the system independently, we finally had a working full-system prototype.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/chameleon/finished-prototype.jpg",
    "alt": "The final 3D printed prototype, with Teensy controller enclosure."
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Pitch and Demo`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We showcased our prototype at the Systems Design Engineering Symposium where we won People's Choice award. We also won the Norman Esch Entrepreneurship Award for our pitch and product demo!`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image video",
    id: "symposium-demo-video"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://www.youtube.com/embed/3ss9hONATuw?loop=1",
    frameborder: "0",
    loop: "1",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "Showing off the prototype at the Systems Design Engineering Symposium")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image",
    id: "norman-esch-demo"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "../../images/portfolio/chameleon/prototype-demo.jpg"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "Demonstrating the prototype at Norman Esch finals, where we", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://uwaterloo.ca/engineering/news/six-teams-win-10000-each-annual-esch-awards",
    target: "_blank"
  }, " won a $10,000 prize"), " for our pitch and demo!")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _objectSpread({}, {
    "className": "footnotes"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    parentName: "div"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ol", {
    parentName: "div"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", _objectSpread({
    parentName: "ol"
  }, {
    "id": "fn-1"
  }), `Live music workers means, for example: stagehands, producers, and directors, not performers themselves`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "li"
  }, {
    "href": "#fnref-1",
    "className": "footnote-backref"
  }), `↩`)))));
}
;
MDXContent.isMDXComponent = true;

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

/***/ "GU33":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"resume_card": "resume-card_resume_card__30p8L",
	"resume_card_header": "resume-card_resume_card_header__2-tyJ",
	"position": "resume-card_position__14t4X",
	"company": "resume-card_company__32MyO",
	"location": "resume-card_location__2yKCg",
	"logo": "resume-card_logo__us3Nm",
	"summary": "resume-card_summary__2KuPx"
};


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

/***/ "IQtt":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hero": "hero_hero__38MRs",
	"header_wrapper": "hero_header_wrapper__2IJC1",
	"hero_contents": "hero_hero_contents__2Z1PY",
	"big_letters": "hero_big_letters__D_Tqc",
	"title": "hero_title__2HGUr",
	"tagline": "hero_tagline__39zMc",
	"big_letters_monogram": "hero_big_letters_monogram__RZcxY"
};


/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "MNZk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "section_section__i5Re4"
};


/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__("yzvi");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./components/Header/social-link/social-link.js



 // type SocialLinkPropTypes = {
//   name: string,
//   url: string,
//   color: string,
//   children: React.ReactNode
// }

const SocialLink = ({
  name,
  url,
  color,
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    className: external_classnames_default()(Header_module_default.a.header_link, Header_module_default.a.social_link),
    href: url,
    title: name,
    target: "_blank",
    rel: "noopener noreferrer",
    children: children
  });
};

/* harmony default export */ var social_link = (SocialLink);
// EXTERNAL MODULE: ./images/monogram.svg
var monogram = __webpack_require__("CERM");

// CONCATENATED MODULE: ./components/Header/Header.js










const Header = ({
  color,
  showNav
}) => {
  // const Monogram = color === 'white' ? MonogramWhite : MonogramBlack
  const navRef = Object(external_react_["useRef"])(null);
  const setListeners = Object(external_react_["useRef"])(false); // Add listeners to all the links

  Object(external_react_["useEffect"])(() => {
    var _navRef$current;

    const links = (_navRef$current = navRef.current) === null || _navRef$current === void 0 ? void 0 : _navRef$current.querySelectorAll('.header-link');
    links === null || links === void 0 ? void 0 : links.forEach(link => link.addEventListener('mouseenter', moveHighlight));
    setListeners.current = true;
    return () => {
      links === null || links === void 0 ? void 0 : links.forEach(link => link.removeEventListener('mouseenter', moveHighlight));
    };
  });

  const moveHighlight = e => {
    var _navRef$current2, _navRef$current3, _navRef$current4, _navRef$current5;

    (_navRef$current2 = navRef.current) === null || _navRef$current2 === void 0 ? void 0 : _navRef$current2.style.setProperty('--link-width', e.target.offsetWidth);
    (_navRef$current3 = navRef.current) === null || _navRef$current3 === void 0 ? void 0 : _navRef$current3.style.setProperty('--link-height', e.target.offsetHeight);
    (_navRef$current4 = navRef.current) === null || _navRef$current4 === void 0 ? void 0 : _navRef$current4.style.setProperty('--link-top', e.target.offsetTop);
    (_navRef$current5 = navRef.current) === null || _navRef$current5 === void 0 ? void 0 : _navRef$current5.style.setProperty('--link-left', e.target.offsetLeft);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: external_classnames_default()(Header_module_default.a.page_header, Header_module_default.a[`color_${color}`]),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      className: Header_module_default.a.page_link,
      href: "/",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram["a" /* default */], {
        className: Header_module_default.a.page_logo
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: Header_module_default.a.page_title,
        children: "Adam Thompson"
      })]
    }), showNav && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
      ref: navRef,
      className: Header_module_default.a.page_nav,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: external_classnames_default()(Header_module_default.a.header_link, Header_module_default.a.nav_link),
        href: "#projects",
        children: "Projects"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: external_classnames_default()(Header_module_default.a.header_link, Header_module_default.a.nav_link),
        href: "/recipes",
        children: "Recipes"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Twitter",
        url: "https://www.twitter.com/thesonofthomp/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faTwitter"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "GitHub",
        url: "https://www.github.com/thesonofthomp",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faGithub"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Linkedin",
        url: "https://www.linkedin.com/in/adammthompson/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faLinkedinIn"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Codepen",
        url: "https://codepen.io/TheSonOfThomp/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faCodepen"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Medium",
        url: "https://medium.com/@TheSonOfThomp",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faMedium"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Header_module_default.a.highlight
      })]
    })]
  });
};

Header.defaultProps = {
  showNav: false,
  color: 'white'
};
/* harmony default export */ var Header_Header = (Header);
// CONCATENATED MODULE: ./components/Header/index.js

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),

/***/ "QnKS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"portfolio_card": "portfolio-card_portfolio_card__2ElF2",
	"portfolio-card-title": "portfolio-card_portfolio-card-title__2qe2m",
	"portfolio_card_text": "portfolio-card_portfolio_card_text__D2lXp",
	"portfolio_card_title": "portfolio-card_portfolio_card_title__2KFxi",
	"portfolio_card_tagline": "portfolio-card_portfolio_card_tagline__1pDbc",
	"portfolio_card_image_wrapper": "portfolio-card_portfolio_card_image_wrapper__2e21c",
	"portfolio_card_picture": "portfolio-card_portfolio_card_picture__3l_7G",
	"portfolio_card_image": "portfolio-card_portfolio_card_image__15Yvu"
};


/***/ }),

/***/ "R7GE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "about-section_section__1oe1Y",
	"about_text": "about-section_about_text__1jk0R"
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./main-sections/hero/hero.module.scss
var hero_module = __webpack_require__("IQtt");
var hero_module_default = /*#__PURE__*/__webpack_require__.n(hero_module);

// EXTERNAL MODULE: ./images/monogram.svg
var monogram = __webpack_require__("CERM");

// EXTERNAL MODULE: ./components/Header/index.js + 2 modules
var Header = __webpack_require__("Ogzj");

// CONCATENATED MODULE: ./main-sections/hero/hero.js




 // using gatsby-plugin-react-svg



const Hero = ({
  className
}) => {
  const heroRef = Object(external_react_["useRef"])();

  const setMousePos = e => {
    heroRef.current.style.setProperty('--mouseX', e.clientX / heroRef.current.clientWidth * 2 - 1);
    heroRef.current.style.setProperty('--mouseY', e.clientY / heroRef.current.clientWidth * 2 - 1);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    ref: heroRef,
    className: hero_module_default.a.hero,
    onMouseMove: setMousePos,
    role: "region",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: hero_module_default.a.header_wrapper,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
        showNav: true
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: hero_module_default.a.hero_contents,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: hero_module_default.a.big_letters,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram["a" /* default */], {
          className: hero_module_default.a.big_letters_monogram
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: hero_module_default.a.title,
        children: "UX Engineer"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: hero_module_default.a.tagline,
        children: "Developing experiences that make an impact"
      })]
    })]
  });
};

/* harmony default export */ var hero = (Hero);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__("4VR2");
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/section-header/section-header.module.scss
var section_header_module = __webpack_require__("TMwe");
var section_header_module_default = /*#__PURE__*/__webpack_require__.n(section_header_module);

// CONCATENATED MODULE: ./components/section-header/section-header.js




const SectionHeader = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
  className: section_header_module_default.a.section_header,
  children: children
});

/* harmony default export */ var section_header = (SectionHeader);
// EXTERNAL MODULE: ./templates/section/section.module.scss
var section_module = __webpack_require__("MNZk");
var section_module_default = /*#__PURE__*/__webpack_require__.n(section_module);

// CONCATENATED MODULE: ./templates/section/section.js







const Section = ({
  title,
  id,
  className = "",
  children
}) => {
  const fullClassName = ['section', className].join(' ');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: external_classnames_default()(section_module_default.a.section, className),
    id: id || title.toLowerCase(),
    children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(section_header, {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "content",
      children: children
    })]
  });
};

/* harmony default export */ var section = (Section);
// EXTERNAL MODULE: ./main-sections/about/about-section.module.scss
var about_section_module = __webpack_require__("R7GE");
var about_section_module_default = /*#__PURE__*/__webpack_require__.n(about_section_module);

// CONCATENATED MODULE: ./main-sections/about/about-section.js







const AboutSection = ({
  data
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(section, {
    className: about_section_module_default.a.section,
    id: "about",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: about_section_module_default.a.about_text,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_markdown_to_jsx_default.a, {
        children: "## I'm a New York based UX engineer, developing impactful software experiences."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_markdown_to_jsx_default.a, {
        options: {
          forceBlock: true
        },
        children: "A *UX engineer* typically means someone who writes UI code\u2014and that's an accurate description of me. I maintain a UI component library, re-wrote the core CSS architecture, and built a new landing page for the [New Visions Portal](https://portal.newvisions.org)."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_markdown_to_jsx_default.a, {
        options: {
          forceBlock: true
        },
        children: "But more precisely, I'm a UX engineer in that I apply engineering problem-solving to holistically solve complex interaction problems. The [New Visions dashboard framework](./portfolio/newvisions), and the [Noom food logging workflow](./portfolio/noom) are just two examples of tackling tough problems through analysis and creative problem solving."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_markdown_to_jsx_default.a, {
        options: {
          forceBlock: true
        },
        children: "I'm at the intersection of design and engineering, with an education in [Systems Design Engineering](https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering) and experience in UX since 2013. I approach problems holistically, design complete solutions, and execute them efficiently."
      })]
    })
  });
};

/* harmony default export */ var about_section = (AboutSection);
// EXTERNAL MODULE: ./hooks/useCustomProperty.js
var useCustomProperty = __webpack_require__("I9h+");

// EXTERNAL MODULE: ./main-sections/portfolio/portfolio-card/portfolio-card.module.scss
var portfolio_card_module = __webpack_require__("QnKS");
var portfolio_card_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_card_module);

// CONCATENATED MODULE: ./main-sections/portfolio/portfolio-card/portfolio-card.js






const HIGHLIGHT = 'new-visions';

const PortfolioCard = ({
  title,
  tagline,
  color,
  imgSrc,
  link
}) => {
  const id = title.toLowerCase().replace(/( )+/g, '-');
  const isHighlightedCard = id === HIGHLIGHT;
  const cardRef = Object(useCustomProperty["b" /* useCustomProps */])({
    '--color-portfolio': color
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
    ref: cardRef,
    href: link,
    id: id,
    className: external_classnames_default()(portfolio_card_module_default.a.portfolio_card, portfolio_card_module_default.a.clickable, isHighlightedCard ? 'double_wide' : ''),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: portfolio_card_module_default.a.portfolio_card_text,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: portfolio_card_module_default.a.portfolio_card_title,
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: portfolio_card_module_default.a.portfolio_card_tagline,
        children: tagline
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: portfolio_card_module_default.a.portfolio_card_image_wrapper,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
        className: portfolio_card_module_default.a.portfolio_card_picture,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
          srcSet: imgSrc.srcSetWebp,
          type: "image/webp"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
          srcSet: imgSrc.srcSet,
          type: "image/png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: portfolio_card_module_default.a.portfolio_card_image,
          src: imgSrc,
          alt: `${title}`
        })]
      })
    })]
  });
};

/* harmony default export */ var portfolio_card = (PortfolioCard);
// EXTERNAL MODULE: ./main-sections/portfolio/portfolio-section.module.scss
var portfolio_section_module = __webpack_require__("jU1j");
var portfolio_section_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_section_module);

// EXTERNAL MODULE: ./pages/portfolio/index.js
var portfolio = __webpack_require__("Tfk3");

// CONCATENATED MODULE: ./main-sections/portfolio/portfolio-section.js







const PortfolioSection = ({
  data
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(section, {
    title: "UX Case Studies",
    className: portfolio_section_module_default.a.section,
    id: "portfolio",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: portfolio_section_module_default.a.portfolio_cards_container,
      children: portfolio["pages"].map(page => /*#__PURE__*/Object(jsx_runtime_["jsx"])(portfolio_card, {
        title: page.title,
        tagline: page.tagline,
        color: page.color,
        cover: `/images/portfolio/cover/${page.cover}`,
        link: `portfolio/${page.brand}`,
        imgSrc: `/images/portfolio/cover/${page.cover}`
      }, page.title))
    })
  });
};

/* harmony default export */ var portfolio_section = (PortfolioSection);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./components/resume-card/resume-card.module.scss
var resume_card_module = __webpack_require__("GU33");
var resume_card_module_default = /*#__PURE__*/__webpack_require__.n(resume_card_module);

// CONCATENATED MODULE: ./components/resume-card/resume-card.js


 // import Card from "../card/card";



const ResumeCard = ({
  id,
  logoSrc,
  title,
  location,
  term,
  position,
  summary,
  bullets
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: id,
    className: resume_card_module_default.a.resume_card,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: resume_card_module_default.a.resume_card_header,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: resume_card_module_default.a.position,
        children: position
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: resume_card_module_default.a.location,
        children: term
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: resume_card_module_default.a.company,
        children: title
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: resume_card_module_default.a.summary,
      children: summary
    })]
  });
};

/* harmony default export */ var resume_card = (ResumeCard);
// EXTERNAL MODULE: ./data/resume-full.json
var resume_full = __webpack_require__("8qNN");

// EXTERNAL MODULE: ./main-sections/resume/resume-section.module.scss
var resume_section_module = __webpack_require__("WPM/");
var resume_section_module_default = /*#__PURE__*/__webpack_require__.n(resume_section_module);

// CONCATENATED MODULE: ./main-sections/resume/resume-section.js










const ResumeSection = () => {
  const resumeData = Object.entries(resume_full.experience);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(section, {
    title: "Experience",
    className: resume_section_module_default.a.section,
    id: "resume",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: resume_section_module_default.a.resume_card_section,
      children: resumeData.map(node => /*#__PURE__*/Object(jsx_runtime_["jsx"])(resume_card, {
        title: node[1].company,
        position: node[1].position,
        location: node[1].location,
        term: node[1].term,
        summary: node[1].summary,
        bullets: node[1].bullets
      }, node[0]))
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      className: resume_section_module_default.a.print_resume,
      href: "/Adam Thompson - Resume.pdf",
      download: true,
      children: ["Printable resume ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faExternalLinkAlt"],
        size: "xs"
      })]
    })]
  });
};

/* harmony default export */ var resume_section = (ResumeSection);
// EXTERNAL MODULE: ./data/medium-posts.json
var medium_posts = __webpack_require__("a6K7");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: ./main-sections/blog/BlogPostLink/blog-post-link.module.scss
var blog_post_link_module = __webpack_require__("b6kD");
var blog_post_link_module_default = /*#__PURE__*/__webpack_require__.n(blog_post_link_module);

// CONCATENATED MODULE: ./main-sections/blog/BlogPostLink/BlogPostLink.js







const BlogPostLink = ({
  post
}) => {
  const {
    title,
    url,
    datePublished,
    description
  } = post;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
    href: url,
    className: external_classnames_default()(blog_post_link_module_default.a.blog_post, blog_post_link_module_default.a.blog_post_link),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: blog_post_link_module_default.a.blog_post_title,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: blog_post_link_module_default.a.blog_post_date,
      children: Object(external_date_fns_["format"])(new Date(datePublished), 'MMM do yyyy')
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: blog_post_link_module_default.a.blog_post_description,
      children: description
    })]
  }, title);
};

/* harmony default export */ var BlogPostLink_BlogPostLink = (BlogPostLink);
// EXTERNAL MODULE: ./main-sections/blog/blog-section.module.scss
var blog_section_module = __webpack_require__("rh3a");
var blog_section_module_default = /*#__PURE__*/__webpack_require__.n(blog_section_module);

// CONCATENATED MODULE: ./main-sections/blog/blog-section.js







const BlogSection = () => {
  const [postsState] = external_react_default.a.useState(medium_posts["a" /* posts */].slice(0, 4));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(section, {
    className: blog_section_module_default.a.section,
    title: "Writing",
    id: "blog",
    children: postsState.map(post => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogPostLink_BlogPostLink, {
        post: post
      }, post.title);
    })
  });
};

/* harmony default export */ var blog_section = (BlogSection);
// EXTERNAL MODULE: ./main-sections/projects/projects-section.module.scss
var projects_section_module = __webpack_require__("ekLv");
var projects_section_module_default = /*#__PURE__*/__webpack_require__.n(projects_section_module);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./main-sections/projects/ProjectCard/project-card.module.scss
var project_card_module = __webpack_require__("h4H2");
var project_card_module_default = /*#__PURE__*/__webpack_require__.n(project_card_module);

// CONCATENATED MODULE: ./main-sections/projects/ProjectCard/project-card.js









const ProjectCard = ({
  project
}) => {
  const iconObj = project.icon === "github" ? free_brands_svg_icons_["faGithub"] : project.icon === "npm" ? free_brands_svg_icons_["faNpm"] : project.icon === "link" ? free_solid_svg_icons_["faExternalLinkAlt"] : null;
  const logoImage = `/images/projects/${project.logo}`;
  const cardRef = Object(useCustomProperty["a" /* useCustomProp */])('--project-color', project.color);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
    ref: cardRef,
    className: project_card_module_default.a.project_card,
    href: project.url,
    alt: project.name,
    target: "_blank",
    rel: "noreferrer",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: project_card_module_default.a.project_title,
      children: project.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: project_card_module_default.a.project_description,
      children: project.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
      className: project_card_module_default.a.project_logo,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
        srcSet: logoImage.srcSetWebp,
        type: "image/webp"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
        srcSet: logoImage.srcSet,
        type: "image/png"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: project_card_module_default.a.project_logo,
        src: logoImage,
        alt: `Logo for ${project.name}`
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: project_card_module_default.a.project_icon,
      icon: iconObj,
      size: "sm"
    }), project.tools && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: project_card_module_default.a.project_tools_wrapper,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: project_card_module_default.a.project_tools_label,
        children: "Built with"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: project_card_module_default.a.project_tools_list,
        children: project.tools.map(tool => /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: project_card_module_default.a.project_tool,
          children: tool
        }, tool))
      })]
    })]
  });
};

/* harmony default export */ var project_card = (ProjectCard);
// EXTERNAL MODULE: ./data/projects.json
var projects = __webpack_require__("khU4");

// CONCATENATED MODULE: ./main-sections/projects/projects-section.js







const compareDates = (project1, project2) => {
  const Date1 = new Date(project1.date);
  const Date2 = new Date(project2.date);
  return Date1 > Date2 ? -1 : 1;
};

const ProjectsSection = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(section, {
    title: "Recent Projects",
    className: projects_section_module_default.a.section,
    id: "projects",
    children: projects["a" /* projects */].sort(compareDates).map(project => {
      return project.showOnHomepage && /*#__PURE__*/Object(jsx_runtime_["jsx"])(project_card, {
        project: project
      }, project.name);
    })
  });
};

/* harmony default export */ var projects_section = (ProjectsSection);
// EXTERNAL MODULE: ./main-sections/footer/footer-section.module.scss
var footer_section_module = __webpack_require__("aiXs");
var footer_section_module_default = /*#__PURE__*/__webpack_require__.n(footer_section_module);

// CONCATENATED MODULE: ./main-sections/footer/footer-section.js





const FooterSection = () => {
  const now = new Date();
  const year = now.getFullYear();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    className: footer_section_module_default.a.footer,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: footer_section_module_default.a.footer_content,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        children: ["\xA9 ", year, " Adam Thompson. Built with Next.js"]
      })
    })
  });
};

/* harmony default export */ var footer_section = (FooterSection);
// EXTERNAL MODULE: ./main-sections/QuoteSection/QuoteSection.module.scss
var QuoteSection_module = __webpack_require__("eZmB");
var QuoteSection_module_default = /*#__PURE__*/__webpack_require__.n(QuoteSection_module);

// CONCATENATED MODULE: ./main-sections/QuoteSection/QuoteSection.js





const QuoteSection = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
  className: QuoteSection_module_default.a.quote_section,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("blockquote", {
    className: QuoteSection_module_default.a.quote,
    children: props.children
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("em", {
    className: QuoteSection_module_default.a.quote_attribution,
    children: props.attribution
  })]
});

/* harmony default export */ var QuoteSection_QuoteSection = (QuoteSection);
// CONCATENATED MODULE: ./pages/index.js


 // import SEO from "components/seo";











const IndexPage = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
    id: "app",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Adam Thompson"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "Description",
        content: "NYC based UX Engineer"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(hero, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(about_section, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(QuoteSection_QuoteSection, {
      attribution: "Jen Simmons @ Artifact 2019",
      children: "A design is finished when the CSS is written"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(resume_section, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(portfolio_section, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(projects_section, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(blog_section, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(footer_section, {})]
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "TMwe":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section_header": "section-header_section_header__3duYX"
};


/***/ }),

/***/ "Tfk3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
const nv = __webpack_require__("lV73").meta;

const chameleon = __webpack_require__("9cCj").meta;

const noom = __webpack_require__("YB2s").meta;

const pages = [nv, chameleon, noom];

/***/ }),

/***/ "WPM/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "resume-section_section__xY-M9",
	"content": "resume-section_content__1JPr0",
	"resume_card_section": "resume-section_resume_card_section__ZT0QJ",
	"print_resume": "resume-section_print_resume__FOVTL"
};


/***/ }),

/***/ "YB2s":
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
  title: "Noom",
  brand: "noom",
  date: "2015-12-20",
  tagline: "Simplifying the core experience",
  cover: 'noom-cover.png',
  color: '#4271d7',
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Noom`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "tldr",
    markdown: "1"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `A better food-logging experience without compromising functionality.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `Users were having trouble navigating the core meal-logging flow because the buttons weren’t obvious and changed behaviour depending on use case. We needed to fix this.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `I consolidated the user flow and UI, making it consistent in all use cases. Through meticulous user-testing we designed an interface that eliminated hesitation and uncertainty.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "cover-image vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/cover/noom-cover.png",
    "alt": "A screenshot of the food-logging experience in the Noom iOS app"
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Problem`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Noom—based in midtown Manhattan—combats obesity, diabetes, and hypertension with lifestyle and behaviour change. Meal logging is a must-have feature in the app that gives constructive feedback on users' eating habits. Logging the food you’ve eaten must be quick and intuitive, and give insightful feedback.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom_logging-existing.png",
    "alt": "People didn't realize the check was a button, and were never quite sure what the back button would do."
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We observed users and saw that they were often unsure of what to do when navigating between different views while logging food. People weren't noticing the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `back`), ` or `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `check`), ` buttons, and the buttons didn't always work the way people expected them to. On top of that, the UI and flow would subtly change depending on the entry case.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Mental Models`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We noticed that part of the issue may be that the concept model of the feature may not be in sync with common mental models that users had.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `After observing some remote tests and asking direct questions to local testers, we were able to nail down what we saw to be the most common mental model for the people tested. By establishing a grocery shopping metaphor and how users expected each to behave, we developed a concept model for the food-logging feature that we would use to base future design decisions off.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom-concept-model.png",
    "alt": "The Grocery shopping metaphor used to communicate the concept model during the design process."
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Requirements`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We knew we would have to simplify the workflow and make the interface much more clear. From several specific criteria, we ended up with two overarching user requirements:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Users will act with confidence:`), ` All interactive elements will have a single clear purpose.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Users will not get lost:`), ` All cases will have an understandable  flow and architecture.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Iteration`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `A main cause of confusion was that the interface and flow were different depending on whether you were logging a new meal or editing an old one. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The most basic solution to solving the confusion was to eliminate different cases, and settle on a single, universal flow for all cases. The issue with that is one of the entry cases now requires navigation through a meaningless screen to achieve the goal (i.e. If I'm editing a meal, I'm treated as if I'm logging a new one, or vice-versa).`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Going `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "h3"
  }, `Back`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Another problem was that users struggled to go back to the home screen, or worse, accidentally went back when they didn't want to. Since a user can start the workflow anywhere, both the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `cart`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `search`), ` screens needed an intuitive way to return to the home screen.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Traditionally, this has been done with the back arrow, but we noticed this was too ambiguous. "Am I going back home, or to the previous screen?" users would think, and the correct answer depended on whether they were logging a new meal or editing. After some research and experimentation, we found that the clearest way to convey this behaviour was to use a `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `cross`), ` (or ╳ ) icon.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom_logging-vc.png",
    "alt": "Testing the individual screens and button styles was promising, and showed a lot of improvement from the original workflow."
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `When prototyping screen transitions we noticed a problem.
When the screens animated from one to the other, the behaviour of the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `close`), ` button was still ambiguous on the second screen. We found that there was a near 50/50 split between users who expected the button to close the entire flow vs. the current screen. This was because a second `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `close`), ` button animated over top of the first`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "h3"
  }, `One X`), ` to rule them all`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `These weren’t two `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `separate`), ` screens, but two parts of one experience. By designing the interaction and animation thoughtfully, I could convey the feeling of a single context in these two views.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I worked on this idea, and made an Origami prototype to show the single-context idea. While the interactions are a little over-designed, they effectively convey the single-context of food logging. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image",
    id: "origami-prototype"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://player.vimeo.com/video/157767592/?title=0&byline=0&loop=1",
    frameborder: "0",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "I would need to tone down the animation if I wanted to get developers to build this.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Finally, we had a single close button for both views, and an intuitive way to flip between them. I toned down the interaction to make it simpler to build, and by keeping a static close button and making the header a uniform size, it was possible to achieve the feeling of a single context for meal logging.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image",
    id: "final-prototype"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://player.vimeo.com/video/157767466/?title=0&byline=0&loop=1",
    frameborder: "0",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "The final prototype I sent to the development team")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Testing & Validation`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `With the help of our User Research team we tested our designs and rated their performance against the usability criteria. We compiled these into a decision matrix, and included a developer estimate for each design. With this chart we were able to convince management that this design solved the problems, and got developer time to build the improvements.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We also tested different `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `cart`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `add more`), ` button designs. The buttons in the final prototype were the winning variants. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom_logging-matrix.png",
    "alt": "The decision matrix we used to rank and justify the design decisions"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `A Legacy`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The Noom app features this version of the meal-logging workflow to date, and while my internship finished before the feature launched, I was told by the VP Engineering that the modifications I made to the workflow made a significant impact to user-reported ease in meal logging (a tracked KPI). `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I'm grateful to have been part of a great design team that recently won the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.newswire.com/news/noom-coach-is-awarded-the-2017-red-dot-award-for-outstanding-design-19935974"
  }), `2017 Red Dot Award`), ` for outstanding design.`));
}
;
MDXContent.isMDXComponent = true;

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

/***/ "a6K7":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":[{\"url\":\"https://medium.com/@TheSonOfThomp/6-ways-to-dynamically-style-angular-components-b43e037852fa\",\"title\":\"6 ways to dynamically style Angular components\",\"description\":\"Writing style that updates based on the state of a component is a really common pattern on the web. There are several ways to dynamically update your styling depending on what you want to do. Let’s…\",\"imageUrl\":\"https://miro.medium.com/max/1200/1*l9kdgCf9TVe_gl6hrB2N4w.png\",\"datePublished\":\"2020-05-20T22:03:01.302Z\",\"isCrawled\":true},{\"url\":\"https://medium.com/@TheSonOfThomp/atomic-styles-semantic-markup-eaa5b3b3e380\",\"title\":\"Atomic Styles. Semantic Markup.\",\"description\":\"When starting a new project or feature it’s a good idea to write semantic markup first, then style it the way you want. Building markup-first ensures that your product will make sense, and be…\",\"imageUrl\":null,\"datePublished\":\"2020-04-06T21:22:09.689Z\",\"isCrawled\":true},{\"url\":\"https://medium.com/@TheSonOfThomp/the-point-of-prototyping-4bff450dc659\",\"title\":\"The Power of Prototyping\",\"description\":\"The artifacts we create as digital designers rarely reflect the full and final product experience. We’re building complex, interactive products—the usefulness of our pictures and slideshows is…\",\"imageUrl\":\"https://miro.medium.com/max/1200/1*KEcJM7oXDXzY1UlZaXIqXQ.jpeg\",\"datePublished\":\"2020-01-03T15:17:22.175Z\",\"isCrawled\":true},{\"url\":\"https://medium.com/@TheSonOfThomp/leaving-artifact-behind-ea0673752976\",\"title\":\"Leaving Artifact Behind\",\"description\":\"I recently attended Artifact Conference in Austin, and listened to talks from some super talented people like Jen Simmons, Brad Frost and more. Over 3-days at Artifact I learned a lot, and was…\",\"imageUrl\":\"https://miro.medium.com/max/1200/1*YL9NIXd8uHRHw7zD17Hz-Q.jpeg\",\"datePublished\":\"2019-10-10T17:43:16.814Z\",\"isCrawled\":true},{\"url\":\"https://medium.com/@TheSonOfThomp/the-ux-trade-off-of-faceid-b5eb2d6beed0\",\"title\":\"The UX trade-off of Face ID\",\"description\":\"The great simplicity of Face ID comes when unlocking iPhone X every day, every time you use it. No more fumbling with the (now extinct) Home button to get in, just lift and look to unlock — that’s…\",\"imageUrl\":\"https://miro.medium.com/max/1200/1*NnTloeooSnwP2sT7Utj3oA.jpeg\",\"datePublished\":\"2017-09-13T18:48:22.997Z\",\"isCrawled\":true}]}");

/***/ }),

/***/ "aiXs":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer-section_footer__22cGW",
	"footer_content": "footer-section_footer_content__2TCVV"
};


/***/ }),

/***/ "b6kD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blog_post": "blog-post-link_blog_post__3w6zT",
	"blog_post_link": "blog-post-link_blog_post_link__2PCYs",
	"blog_post_title": "blog-post-link_blog_post_title__2XIFo",
	"blog_post_date": "blog-post-link_blog_post_date__2zvJ3",
	"blog_post_description": "blog-post-link_blog_post_description__28VWL"
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

/***/ "eZmB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"quote_section": "QuoteSection_quote_section__ql0MG",
	"quote": "QuoteSection_quote__2_qyu",
	"quote_attribution": "QuoteSection_quote_attribution__25nT0"
};


/***/ }),

/***/ "ekLv":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "projects-section_section__2Q4pr"
};


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

/***/ "h4H2":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"project_card": "project-card_project_card__aAHKJ",
	"project-title": "project-card_project-title__2zdiv",
	"project_title": "project-card_project_title__X48WN",
	"project_logo": "project-card_project_logo__252c5",
	"project_description": "project-card_project_description__ZXsVy",
	"project_icon": "project-card_project_icon__1PTYD",
	"project_tools_wrapper": "project-card_project_tools_wrapper__3uSeD",
	"project_tools_label": "project-card_project_tools_label__1OTua",
	"project_tools_list": "project-card_project_tools_list__3iJuA",
	"project_tool": "project-card_project_tool__uNKF7"
};


/***/ }),

/***/ "jU1j":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "portfolio-section_section__1GG-s",
	"portfolio_cards_container": "portfolio-section_portfolio_cards_container__2vmBv"
};


/***/ }),

/***/ "khU4":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":[{\"name\":\"Chameleon\",\"url\":\"http://chameleon.thesonofthomp.com\",\"description\":\"Hearing protection that adapts to the volume of the wearer's surroundings.\",\"logo\":\"chameleon_logotype.png\",\"color\":\"#2e8c5d\",\"icon\":\"link\",\"tools\":[\"Python\",\"MatLab\",\"Arduino\",\"Fusion 360\"],\"date\":\"2017-04-22\",\"showOnResume\":true,\"showOnHomepage\":true},{\"name\":\"Farkle\",\"url\":\"https://farkle.thesonofthomp.com\",\"logo\":\"farkle-logo.png\",\"icon\":\"link\",\"description\":\"Play the dice game \\\"Farkle\\\" online with friends.\",\"color\":\"rgb(5, 90, 4)\",\"tools\":[\"Three.js\",\"XState\",\"Typescript\",\"React\",\"Socket.io\",\"Heroku\"],\"date\":\"2020-07-10\",\"showOnResume\":true,\"showOnHomepage\":true},{\"name\":\"Zed\",\"color\":\"rgb(51, 51, 51)\",\"url\":\"https://github.com/TheSonOfThomp/Zed\",\"logo\":\"zed-logo.png\",\"icon\":\"github\",\"description\":\"A JS library for rendering more realistic overlapping shadows.\",\"tools\":[\"Typescript\",\"CSS\"],\"date\":\"2020-05-27\",\"showOnResume\":false,\"showOnHomepage\":true},{\"name\":\"Sketch Flat Export\",\"color\":\"rgb(249, 162, 2)\",\"url\":\"https://github.com/TheSonOfThomp/sketch-flat-export\",\"logo\":\"flat-export-logo-transparent.png\",\"icon\":\"github\",\"description\":\"A Sketch plugin to export multiple artboards to a single directory.\",\"tools\":[\"Javascript\",\"Sketch API\"],\"date\":\"2020-06-25\",\"showOnResume\":true,\"showOnHomepage\":true},{\"name\":\"Chronological MCU\",\"color\":\"rgb(203, 63, 69)\",\"url\":\"https://chronological-mcu.netlify.app\",\"logo\":\"chronMCU-logo.png\",\"icon\":\"link\",\"description\":\"Watch every Marvel Cinematic Universe scene in chronological order.\",\"tools\":[\"Javascript\",\"Chrome API\"],\"date\":\"2020-06-01\",\"showOnResume\":true,\"showOnHomepage\":true},{\"name\":\"ZeplinX\",\"description\":\"An internal Confluence plugin to embed Zeplin images on a page.\",\"logo\":\"zeplinX-icon.png\",\"date\":\"2019-12-03\",\"color\":\"rgb(243, 102, 36)\",\"tools\":[\"Javascript\",\"Atlassian API\",\"AWS\"],\"showOnResume\":false,\"showOnHomepage\":true},{\"name\":\"Word Chain\",\"url\":\"https://word-chain.thesonofthomp.com\",\"icon\":\"link\",\"description\":\"A thesaurus linker to find the closest synonym to two words\",\"showOnResume\":false,\"showOnHomepage\":false},{\"name\":\"React Synth\",\"url\":\"https://github.com/TheSonOfThomp/React-Synth\",\"description\":\"A web based synthesizer with musical typing\",\"showOnResume\":false,\"showOnHomepage\":false},{\"name\":\"Tap Metronome\",\"url\":\"https://github.com/TheSonOfThomp/TAP-Metronome\",\"description\":\"A simple iOS metronome app with a minimal UI.\",\"tools\":[\"Swift\"],\"showOnResume\":false,\"showOnHomepage\":false},{\"name\":\"SMRT WATR\",\"url\":\"https://github.com/TheSonOfThomp/SMRTWATR\",\"description\":\"An interactive water fountain, controlled by a web-app game\",\"showOnResume\":false,\"showOnHomepage\":false}]}");

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

/***/ "rh3a":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "blog-section_section__2rCAD",
	"show-all-posts": "blog-section_show-all-posts__1N6WX"
};


/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yzvi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page_header": "Header_page_header__2gAci",
	"color_white": "Header_color_white__3Q_7o",
	"page_link": "Header_page_link__W1Fiv",
	"page_logo": "Header_page_logo__2-Iwz",
	"page_title": "Header_page_title__1EGqH",
	"page_nav": "Header_page_nav__1ZPzM",
	"header_link": "Header_header_link__UP_Dc",
	"social_link": "Header_social_link__3wT_6",
	"highlight": "Header_highlight__h2VNg"
};


/***/ })

/******/ });