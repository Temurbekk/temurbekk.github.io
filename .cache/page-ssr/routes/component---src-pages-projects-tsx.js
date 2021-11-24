exports.id = "component---src-pages-projects-tsx";
exports.ids = ["component---src-pages-projects-tsx"];
exports.modules = {

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */




const Seo = ({
  description,
  lang,
  meta,
  title
}) => {
  var _site$siteMetadata, _site$siteMetadata2;

  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: defaultTitle ? `%s | ${defaultTitle}` : null,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
Seo.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Footer = ({
  footerClass
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: `defaultFooter ${footerClass}`
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "View site source on", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/Temurbekk/portfolio",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Github"), " ", "| Designed and Developed by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/Temurbekk",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Temurbek Sabirov")));

Footer.propTypes = {
  footerClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Navbar/Links.tsx":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Links.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const NavItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "Links__NavItem"
})(["color:#ffffff;margin-right:35px;transition:color 0.2s ease-out;text-decoration:none;:hover{color:#7fa1e8;transition:color 0.2s;}&.active{color:#7fa1e8;}transition:all 200ms ease-in;position:relative;:after{position:absolute;bottom:0;left:0;right:0;width:0%;content:\".\";color:transparent;background:goldenrod;height:1px;transition:all 0.4s ease-in;}@media (max-width:768px){padding:8px 0;z-index:6;}"]);

const Links = ({
  info
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavItem, {
    to: info.path,
    exact: "true",
    activeClassName: "active"
  }, info.label);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Links);

/***/ }),

/***/ "./src/components/Navbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Navbar/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Links */ "./src/components/Navbar/Links.tsx");
/* harmony import */ var _data_NavLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/NavLinks */ "./src/data/NavLinks.ts");




const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav.withConfig({
  displayName: "Navbar__Navigation"
})(["display:flex;position:relative;@media (max-width:768px){height:6vh;top:0;left:0;right:0;left:0;}"]);
const Toggle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navbar__Toggle"
})(["display:none;height:100%;cursor:pointer;@media (max-width:768px){display:flex;z-index:10;}"]);
const Navbox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navbar__Navbox"
})(["display:flex;height:100%;justify-content:flex-end;align-items:center;@media (max-width:768px){flex-direction:column;position:fixed;width:100%;z-index:9;justify-content:flex-start;background-color:#060144;transition:all 0.3s ease-in;left:", ";padding-top:20%;top:0;}"], props => props.open ? "-100%" : "0");
const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navbar__Hamburger"
})(["background-color:#ffffff;width:32px;height:2px;transition:all 0.3s linear;align-self:center;position:relative;transform:", ";::before,::after{width:32px;height:2px;background-color:#ffffff;content:\"\";position:absolute;transition:all 0.3s linear;}::before{transform:", ";top:-10px;}::after{opacity:", ";transform:", ";top:10px;}"], props => props.open ? "rotate(-45deg)" : "inherit", props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)", props => props.open ? "0" : "1", props => props.open ? "rotate(90deg) " : "rotate(0deg)");

const Navbar = () => {
  const {
    0: navbarOpen,
    1: setNavbarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navigation, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Toggle, {
    navbarOpen: navbarOpen,
    onClick: () => setNavbarOpen(!navbarOpen)
  }, navbarOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hamburger, {
    open: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hamburger, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navbox, {
    open: !navbarOpen
  }, _data_NavLinks__WEBPACK_IMPORTED_MODULE_2__["default"].map(navItem => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    info: navItem,
    key: navItem.label
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/ProjectsBox/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProjectsBox/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Box = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsBox__Box"
})(["max-width:450px;width:35%;min-height:470px;border-radius:8px;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);transition:box-shadow 0.3s ease-out;background-color:#fff;margin:0 4% 4%;:hover{box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);transition:box-shadow 0.3s;}@media (max-width:700px){width:100%;min-height:auto;max-width:fit-content;}@media (min-width:768px) and (max-width:1030px){width:100%;min-height:auto;box-sizing:border-box;max-width:100%;margin:0 0 4%;}"]);
const BoxIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsBox__BoxIcon"
})(["height:120px;display:flex;justify-content:flex-start;align-items:center;padding:4%;box-sizing:border-box;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;background-color:rgba(127,161,232,0.3);img{width:25%;margin-right:5%;margin-bottom:0;}h3{margin:0;flex:1;color:#0f1645;}@media (min-width:768px) and (max-width:1030px){img{width:10%;}}"]);
const BoxDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsBox__BoxDescription"
})(["padding:5%;flex-direction:column;display:FLEX;height:calc(100% - 120px);p{color:#0f1645;}a{color:#7fa1e8;font-size:20px;font-weight:bold;display:block;margin:0 0 10px;text-decoration:none;}"]);
const BoxStack = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsBox__BoxStack"
})(["margin-top:auto;p{margin:0;}"]);

const ProjectBox = ({
  info
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, info.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxDescription, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", info.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxStack, null, info.githubPath != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: info.githubPath
}, "On Github ") : "", info.demoPath != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: info.demoPath
}, "Project Demo ") : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Development year - ", info.year, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Technology stack - ", info.techUsed, " "))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectBox);

/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar/ */ "./src/components/Navbar/index.tsx");
/* harmony import */ var _Footer___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer/ */ "./src/components/Footer/index.tsx");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seo */ "./src/components/seo.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");


 // import favicon from "../assets/images/rash-favicon.png";






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "layout__Wrapper"
})(["background-color:#060144;width:100%;background-repeat:no-repeat;background-size:cover;min-height:100vh;height:auto;background-position:bottom;padding:5% 8%;position:relative;@media (max-width:700px){min-height:100vh;height:auto;}"]);

const Layout = ({
  children,
  pageTitle
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
  title: pageTitle
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__.Location, null, ({
  location
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    className: location.pathname === "/" ? "cutBackground" : ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar___WEBPACK_IMPORTED_MODULE_3__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer___WEBPACK_IMPORTED_MODULE_4__["default"], {
    footerClass: location.pathname === "/" ? "footerInitial" : "footerAbsolute"
  }));
}));

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/data/NavLinks.ts":
/*!******************************!*\
  !*** ./src/data/NavLinks.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: "About",
  path: "/"
}, {
  label: "Experience",
  path: "/experience"
}, {
  label: "Projects",
  path: "/projects"
}, {
  label: "Contact",
  path: "/contact"
}]);

/***/ }),

/***/ "./src/data/Projects.ts":
/*!******************************!*\
  !*** ./src/data/Projects.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  title: "Fit Pal",
  description: `My three teammates and I managed to put together a serverless web application that allows users to sign in and track their workouts. 
      The frontend of the application is created using React Framework and designed using Material UI components. 
      The backend solely depends on Firebase Real Time Database. The authentication made possible using Firebase Auth. 
      Also, made use of the Youtube API to have a separate page for users to see how the workouts are done correctly. 
      The search bar that looks for videos has a sctrict mode that will not allow users to search for anything else other than the workout videos`,
  githubPath: "https://github.com/fit-pal/my-workout-tracker",
  demoPath: "https://my-workout-tracker-8763c.web.app/",
  year: "2020",
  techUsed: "React, Material UI, Firebase, Youtube API"
}, {
  id: 2,
  title: "tracked",
  description: `My two college classmates I and managed to create our very first Cross Platform Mobile Application using the Flutter SDK. 
      The application's main goal is to track DOE assets. The technologies that local schools lend to their students and staff. 
      This app is used to track those technologies. The app uses Firestore as a server to store all the data. 
      It also uses Firebase auth to authenticate users and depending on what school the user works at, application will show only the data from that school. 
      You do not have access to the technologies that are owned by a different school`,
  githubPath: "https://github.com/ajilk/tracked",
  demoPath: "https://ajilk.com/tracked/",
  year: "2019",
  techUsed: "Flutter, Firebase"
}, {
  id: 3,
  title: "portfolio",
  description: `This is my personal portfolio site. It is created to highlight some of the projects I am most proud of. 
      Also it includes some of my most recent experiences that revolve around Software Engineering. 
      The site also gives some introduction on who I am and what I do. I did not want to add too much information on this website. 
      It is for an introduction only. If you wish to contact me to learn more, There is a contact page that will directly email me. 
      It will guarantee that I receive your message and respond as soon as possible
      `,
  githubPath: "https://github.com/Temurbekk",
  demoPath: "https://temur.dev",
  year: "2021",
  techUsed: "React(Gatsby), Styled Components"
}, {
  id: 4,
  title: "Covid 404",
  description: `This serverless web application was created for the Brooklyn College Hackathon. 
    The application uses various Covid-19 APIs to fetch which countries are most affected by the virus, 
    What news are going around regarding Covid-19, and list of restaurants that do food delivery near the user. 
    This is created with an idea that the website will have everything people need to stay at home. 
    The website uses React for the frontend and uses Grommet styled components to style the whole website
      `,
  githubPath: "https://github.com/Temurbekk/Covid-404",
  demoPath: null,
  year: "2019",
  techUsed: "React, Grommet, APIs"
}, {
  id: 5,
  title: "Student Dashboard",
  description: `Created a fullstack web application that performs the CRUD operation. 
    The website is designed for the registrar to add a student, update student's information, look up student's information, and delete a student. 
    The frontend is written in React. It is styled using the Bulma library. The backend is written in Spring framework using Object Relational Mapping
      `,
  githubPath: "https://github.com/Temurbekk/Student-Dashboard",
  demoPath: null,
  year: "2019",
  techUsed: "React, Spring Boot, Bulma"
}, {
  id: 6,
  title: "Registrar Database",
  description: `This interpreter was created for my Database class at my College. It uses Java to get the input from the user and translates that into MySQL query. 
    The input is taken using a Scanner class in Java. A registrar is allowed to perform a CRUD operation on a student. 
    Registrar can add a student, look up student's information, update student's information, and delete a student
      `,
  githubPath: "https://github.com/Temurbekk/Registrar-Database",
  demoPath: null,
  year: "2018",
  techUsed: "Java, MySQL"
}]);

/***/ }),

/***/ "./src/pages/projects.tsx":
/*!********************************!*\
  !*** ./src/pages/projects.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _styles_tabs_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tabs.css */ "./src/styles/tabs.css");
/* harmony import */ var _styles_tabs_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tabs_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Projects */ "./src/data/Projects.ts");
/* harmony import */ var _components_ProjectsBox___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectsBox/ */ "./src/components/ProjectsBox/index.tsx");
/* harmony import */ var _styles_ProjectsStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ProjectsStyles */ "./src/styles/ProjectsStyles.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.tsx");








const ProjectsPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pageTitle: "About Me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ProjectsStyles__WEBPACK_IMPORTED_MODULE_5__.ProjectsWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ProjectsStyles__WEBPACK_IMPORTED_MODULE_5__.ProjectsSection, null, _data_Projects__WEBPACK_IMPORTED_MODULE_3__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProjectsBox___WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: item.id,
    info: item
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsPage);

/***/ }),

/***/ "./src/styles/ProjectsStyles.tsx":
/*!***************************************!*\
  !*** ./src/styles/ProjectsStyles.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsWrapper": () => (/* binding */ ProjectsWrapper),
/* harmony export */   "ProjectsSection": () => (/* binding */ ProjectsSection)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const ProjectsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ProjectsStyles__ProjectsWrapper"
})(["padding-top:10%;padding-bottom:5%;"]);
const ProjectsSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ProjectsStyles__ProjectsSection"
})(["display:flex;flex-wrap:wrap;justify-content:center;@media (max-width:700px){flex-direction:column;margin-bottom:10%;}@media (min-width:768px) and (max-width:1030px){flex-direction:column;}"]);

/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/tabs.css":
/*!*****************************!*\
  !*** ./src/styles/tabs.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-tabs/esm/components/Tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/Tab.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _excluded = ["children", "className", "disabled", "disabledClassName", "focus", "id", "panelId", "selected", "selectedClassName", "tabIndex", "tabRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DEFAULT_CLASS = 'react-tabs__tab';

var Tab = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tab, _Component);

  function Tab() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.checkFocus();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.checkFocus();
  };

  _proto.checkFocus = function checkFocus() {
    var _this$props = this.props,
        selected = _this$props.selected,
        focus = _this$props.focus;

    if (selected && focus) {
      this.node.focus();
    }
  };

  _proto.render = function render() {
    var _cx,
        _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        disabledClassName = _this$props2.disabledClassName,
        focus = _this$props2.focus,
        id = _this$props2.id,
        panelId = _this$props2.panelId,
        selected = _this$props2.selected,
        selectedClassName = _this$props2.selectedClassName,
        tabIndex = _this$props2.tabIndex,
        tabRef = _this$props2.tabRef,
        attributes = _objectWithoutPropertiesLoose(_this$props2, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", _extends({}, attributes, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, (_cx = {}, _cx[selectedClassName] = selected, _cx[disabledClassName] = disabled, _cx)),
      ref: function ref(node) {
        _this.node = node;
        if (tabRef) tabRef(node);
      },
      role: "tab",
      id: id,
      "aria-selected": selected ? 'true' : 'false',
      "aria-disabled": disabled ? 'true' : 'false',
      "aria-controls": panelId,
      tabIndex: tabIndex || (selected ? '0' : null),
      "data-rttab": true
    }), children);
  };

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

Tab.defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: DEFAULT_CLASS + "--disabled",
  focus: false,
  id: null,
  panelId: null,
  selected: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

Tab.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  disabledClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  focus: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  // private
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  // private
  panelId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  // private
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  // private
  selectedClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  tabRef: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func) // private

} : 0;
Tab.tabsRole = 'Tab';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/TabList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/TabList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabList)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _excluded = ["children", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TabList = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabList, _Component);

  function TabList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", _extends({}, attributes, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className),
      role: "tablist"
    }), children);
  };

  return TabList;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

TabList.defaultProps = {
  className: 'react-tabs__tab-list'
};

TabList.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)])
} : 0;
TabList.tabsRole = 'TabList';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/TabPanel.js":
/*!************************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/TabPanel.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabPanel)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _excluded = ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DEFAULT_CLASS = 'react-tabs__tab-panel';

var TabPanel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabPanel, _Component);

  function TabPanel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabPanel.prototype;

  _proto.render = function render() {
    var _cx;

    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        forceRender = _this$props.forceRender,
        id = _this$props.id,
        selected = _this$props.selected,
        selectedClassName = _this$props.selectedClassName,
        tabId = _this$props.tabId,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", _extends({}, attributes, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, (_cx = {}, _cx[selectedClassName] = selected, _cx)),
      role: "tabpanel",
      id: id,
      "aria-labelledby": tabId
    }), forceRender || selected ? children : null);
  };

  return TabPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

TabPanel.defaultProps = {
  className: DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

TabPanel.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  forceRender: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  // private
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  // private
  selectedClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  tabId: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string) // private

} : 0;
TabPanel.tabsRole = 'TabPanel';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/Tabs.js":
/*!********************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/Tabs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/propTypes */ "./node_modules/react-tabs/esm/helpers/propTypes.js");
/* harmony import */ var _UncontrolledTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UncontrolledTabs */ "./node_modules/react-tabs/esm/components/UncontrolledTabs.js");
/* harmony import */ var _helpers_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/count */ "./node_modules/react-tabs/esm/helpers/count.js");
var _excluded = ["children", "defaultIndex", "defaultFocus"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MODE_CONTROLLED = 0;
var MODE_UNCONTROLLED = 1;

var Tabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSelected = function (index, last, event) {
      var onSelect = _this.props.onSelect;
      var mode = _this.state.mode; // Call change event handler

      if (typeof onSelect === 'function') {
        // Check if the change event handler cancels the tab change
        if (onSelect(index, last, event) === false) return;
      }

      var state = {
        // Set focus if the change was triggered from the keyboard
        focus: event.type === 'keydown'
      };

      if (mode === MODE_UNCONTROLLED) {
        // Update selected index
        state.selectedIndex = index;
      }

      _this.setState(state);
    };

    _this.state = Tabs.copyPropsToState(_this.props, {}, props.defaultFocus);
    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    return Tabs.copyPropsToState(props, state);
  };

  Tabs.getModeFromProps = function getModeFromProps(props) {
    return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
  };

  // preserve the existing selectedIndex from state.
  // If the state has not selectedIndex, default to the defaultIndex or 0
  Tabs.copyPropsToState = function copyPropsToState(props, state, focus) {
    if (focus === void 0) {
      focus = false;
    }

    if ( true && state.mode !== undefined && state.mode !== Tabs.getModeFromProps(props)) {
      throw new Error("Switching between controlled mode (by using `selectedIndex`) and uncontrolled mode is not supported in `Tabs`.\nFor more information about controlled and uncontrolled mode of react-tabs see https://github.com/reactjs/react-tabs#controlled-vs-uncontrolled-mode.");
    }

    var newState = {
      focus: focus,
      mode: Tabs.getModeFromProps(props)
    };

    if (newState.mode === MODE_UNCONTROLLED) {
      var maxTabIndex = Math.max(0, (0,_helpers_count__WEBPACK_IMPORTED_MODULE_4__.getTabsCount)(props.children) - 1);
      var selectedIndex = null;

      if (state.selectedIndex != null) {
        selectedIndex = Math.min(state.selectedIndex, maxTabIndex);
      } else {
        selectedIndex = props.defaultIndex || 0;
      }

      newState.selectedIndex = selectedIndex;
    }

    return newState;
  };

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        defaultIndex = _this$props.defaultIndex,
        defaultFocus = _this$props.defaultFocus,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded);

    var _this$state = this.state,
        focus = _this$state.focus,
        selectedIndex = _this$state.selectedIndex;
    props.focus = focus;
    props.onSelect = this.handleSelected;

    if (selectedIndex != null) {
      props.selectedIndex = selectedIndex;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UncontrolledTabs__WEBPACK_IMPORTED_MODULE_3__["default"], props, children);
  };

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

Tabs.defaultProps = {
  defaultFocus: false,
  forceRenderTabPanel: false,
  selectedIndex: null,
  defaultIndex: null,
  environment: null,
  disableUpDownKeys: false
};

Tabs.propTypes =  true ? {
  children: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__.childrenPropType,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['rtl', 'ltr']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  defaultFocus: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  defaultIndex: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  disabledTabClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  disableUpDownKeys: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  domRef: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  forceRenderTabPanel: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  onSelect: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__.onSelectPropType,
  selectedIndex: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__.selectedIndexPropType,
  selectedTabClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  selectedTabPanelClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  environment: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
} : 0;
Tabs.tabsRole = 'Tabs';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/UncontrolledTabs.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/UncontrolledTabs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UncontrolledTabs)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _helpers_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/uuid */ "./node_modules/react-tabs/esm/helpers/uuid.js");
/* harmony import */ var _helpers_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/propTypes */ "./node_modules/react-tabs/esm/helpers/propTypes.js");
/* harmony import */ var _helpers_count__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/count */ "./node_modules/react-tabs/esm/helpers/count.js");
/* harmony import */ var _helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");
var _excluded = ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName", "environment", "disableUpDownKeys"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










function isNode(node) {
  return node && 'getAttribute' in node;
} // Determine if a node from event.target is a Tab element


function isTabNode(node) {
  return isNode(node) && node.getAttribute('data-rttab');
} // Determine if a tab node is disabled


function isTabDisabled(node) {
  return isNode(node) && node.getAttribute('aria-disabled') === 'true';
}

var canUseActiveElement;

function determineCanUseActiveElement(environment) {
  var env = environment || (typeof window !== 'undefined' ? window : undefined);

  try {
    canUseActiveElement = !!(typeof env !== 'undefined' && env.document && env.document.activeElement);
  } catch (e) {
    // Work around for IE bug when accessing document.activeElement in an iframe
    // Refer to the following resources:
    // http://stackoverflow.com/a/10982960/369687
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
    canUseActiveElement = false;
  }
}

var UncontrolledTabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTabs, _Component);

  function UncontrolledTabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.tabNodes = [];

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          disableUpDownKeys = _this$props.disableUpDownKeys;

      if (_this.isTabFromContainer(e.target)) {
        var index = _this.props.selectedIndex;
        var preventDefault = false;
        var useSelectedIndex = false;

        if (e.keyCode === 32 || e.keyCode === 13) {
          preventDefault = true;
          useSelectedIndex = false;

          _this.handleClick(e);
        }

        if (e.keyCode === 37 || !disableUpDownKeys && e.keyCode === 38) {
          // Select next tab to the left, validate if up arrow is not disabled
          if (direction === 'rtl') {
            index = _this.getNextTab(index);
          } else {
            index = _this.getPrevTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 39 || !disableUpDownKeys && e.keyCode === 40) {
          // Select next tab to the right, validate if down arrow is not disabled
          if (direction === 'rtl') {
            index = _this.getPrevTab(index);
          } else {
            index = _this.getNextTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 35) {
          // Select last tab (End key)
          index = _this.getLastTab();
          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 36) {
          // Select first tab (Home key)
          index = _this.getFirstTab();
          preventDefault = true;
          useSelectedIndex = true;
        } // This prevents scrollbars from moving around


        if (preventDefault) {
          e.preventDefault();
        } // Only use the selected index in the state if we're not using the tabbed index


        if (useSelectedIndex) {
          _this.setSelected(index, e);
        }
      }
    };

    _this.handleClick = function (e) {
      var node = e.target;

      do {
        if (_this.isTabFromContainer(node)) {
          if (isTabDisabled(node)) {
            return;
          }

          var index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);

          _this.setSelected(index, e);

          return;
        }
      } while ((node = node.parentNode) != null);
    };

    return _this;
  }

  var _proto = UncontrolledTabs.prototype;

  _proto.setSelected = function setSelected(index, event) {
    // Check index boundary
    if (index < 0 || index >= this.getTabsCount()) return;
    var _this$props2 = this.props,
        onSelect = _this$props2.onSelect,
        selectedIndex = _this$props2.selectedIndex; // Call change event handler

    onSelect(index, selectedIndex, event);
  };

  _proto.getNextTab = function getNextTab(index) {
    var count = this.getTabsCount(); // Look for non-disabled tab from index to the last tab on the right

    for (var i = index + 1; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from first on left to index


    for (var _i = 0; _i < index; _i++) {
      if (!isTabDisabled(this.getTab(_i))) {
        return _i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getPrevTab = function getPrevTab(index) {
    var i = index; // Look for non-disabled tab from index to first tab on the left

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from last tab on right to index


    i = this.getTabsCount();

    while (i-- > index) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getFirstTab = function getFirstTab() {
    var count = this.getTabsCount(); // Look for non disabled tab from the first tab

    for (var i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getLastTab = function getLastTab() {
    var i = this.getTabsCount(); // Look for non disabled tab from the last tab

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getTabsCount = function getTabsCount() {
    var children = this.props.children;
    return (0,_helpers_count__WEBPACK_IMPORTED_MODULE_5__.getTabsCount)(children);
  };

  _proto.getPanelsCount = function getPanelsCount() {
    var children = this.props.children;
    return (0,_helpers_count__WEBPACK_IMPORTED_MODULE_5__.getPanelsCount)(children);
  };

  _proto.getTab = function getTab(index) {
    return this.tabNodes["tabs-" + index];
  };

  _proto.getChildren = function getChildren() {
    var _this2 = this;

    var index = 0;
    var _this$props3 = this.props,
        children = _this$props3.children,
        disabledTabClassName = _this$props3.disabledTabClassName,
        focus = _this$props3.focus,
        forceRenderTabPanel = _this$props3.forceRenderTabPanel,
        selectedIndex = _this$props3.selectedIndex,
        selectedTabClassName = _this$props3.selectedTabClassName,
        selectedTabPanelClassName = _this$props3.selectedTabPanelClassName,
        environment = _this$props3.environment;
    this.tabIds = this.tabIds || [];
    this.panelIds = this.panelIds || [];
    var diff = this.tabIds.length - this.getTabsCount(); // Add ids if new tabs have been added
    // Don't bother removing ids, just keep them in case they are added again
    // This is more efficient, and keeps the uuid counter under control

    while (diff++ < 0) {
      this.tabIds.push((0,_helpers_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
      this.panelIds.push((0,_helpers_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
    } // Map children to dynamically setup refs


    return (0,_helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__.deepMap)(children, function (child) {
      var result = child; // Clone TabList and Tab components to have refs

      if ((0,_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__.isTabList)(child)) {
        var listIndex = 0; // Figure out if the current focus in the DOM is set on a Tab
        // If it is we should keep the focus on the next selected tab

        var wasTabFocused = false;

        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment);
        }

        if (canUseActiveElement) {
          wasTabFocused = react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(child.props.children).filter(_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__.isTab).some(function (tab, i) {
            var env = environment || (typeof window !== 'undefined' ? window : undefined);
            return env && env.document.activeElement === _this2.getTab(i);
          });
        }

        result = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, {
          children: (0,_helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__.deepMap)(child.props.children, function (tab) {
            var key = "tabs-" + listIndex;
            var selected = selectedIndex === listIndex;
            var props = {
              tabRef: function tabRef(node) {
                _this2.tabNodes[key] = node;
              },
              id: _this2.tabIds[listIndex],
              panelId: _this2.panelIds[listIndex],
              selected: selected,
              focus: selected && (focus || wasTabFocused)
            };
            if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
            if (disabledTabClassName) props.disabledClassName = disabledTabClassName;
            listIndex++;
            return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(tab, props);
          })
        });
      } else if ((0,_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__.isTabPanel)(child)) {
        var props = {
          id: _this2.panelIds[index],
          tabId: _this2.tabIds[index],
          selected: selectedIndex === index
        };
        if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
        if (selectedTabPanelClassName) props.selectedClassName = selectedTabPanelClassName;
        index++;
        result = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, props);
      }

      return result;
    });
  };

  /**
   * Determine if a node from event.target is a Tab element for the current Tabs container.
   * If the clicked element is not a Tab, it returns false.
   * If it finds another Tabs container between the Tab and `this`, it returns false.
   */
  _proto.isTabFromContainer = function isTabFromContainer(node) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false;
    } // Check if the first occurrence of a Tabs container is `this` one.


    var nodeAncestor = node.parentElement;

    do {
      if (nodeAncestor === this.node) return true;
      if (nodeAncestor.getAttribute('data-rttabs')) break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);

    return false;
  };

  _proto.render = function render() {
    var _this3 = this;

    // Delete all known props, so they don't get added to DOM
    var _this$props4 = this.props,
        children = _this$props4.children,
        className = _this$props4.className,
        disabledTabClassName = _this$props4.disabledTabClassName,
        domRef = _this$props4.domRef,
        focus = _this$props4.focus,
        forceRenderTabPanel = _this$props4.forceRenderTabPanel,
        onSelect = _this$props4.onSelect,
        selectedIndex = _this$props4.selectedIndex,
        selectedTabClassName = _this$props4.selectedTabClassName,
        selectedTabPanelClassName = _this$props4.selectedTabPanelClassName,
        environment = _this$props4.environment,
        disableUpDownKeys = _this$props4.disableUpDownKeys,
        attributes = _objectWithoutPropertiesLoose(_this$props4, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", _extends({}, attributes, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      ref: function ref(node) {
        _this3.node = node;
        if (domRef) domRef(node);
      },
      "data-rttabs": true
    }), this.getChildren());
  };

  return UncontrolledTabs;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

UncontrolledTabs.defaultProps = {
  className: 'react-tabs',
  focus: false
};

UncontrolledTabs.propTypes =  true ? {
  children: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_4__.childrenPropType,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['rtl', 'ltr']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  disabledTabClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  disableUpDownKeys: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  domRef: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  focus: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  forceRenderTabPanel: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  selectedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  selectedTabClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  selectedTabPanelClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  environment: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
} : 0;

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/childrenDeepMap.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepMap": () => (/* binding */ deepMap),
/* harmony export */   "deepForEach": () => (/* binding */ deepForEach)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function isTabChild(child) {
  return (0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTab)(child) || (0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTabList)(child) || (0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTabPanel)(child);
}

function deepMap(children, callback) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (child.props && child.props.children && typeof child.props.children === 'object') {
      // Clone the child that has children and map them too
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, _extends({}, child.props, {
        children: deepMap(child.props.children, callback)
      }));
    }

    return child;
  });
}
function deepForEach(children, callback) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if ((0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTab)(child) || (0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTabPanel)(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === 'object') {
      if ((0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTabList)(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/count.js":
/*!******************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/count.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTabsCount": () => (/* binding */ getTabsCount),
/* harmony export */   "getPanelsCount": () => (/* binding */ getPanelsCount)
/* harmony export */ });
/* harmony import */ var _childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");


function getTabsCount(children) {
  var tabCount = 0;
  (0,_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__.deepForEach)(children, function (child) {
    if ((0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTab)(child)) tabCount++;
  });
  return tabCount;
}
function getPanelsCount(children) {
  var panelCount = 0;
  (0,_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__.deepForEach)(children, function (child) {
    if ((0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTabPanel)(child)) panelCount++;
  });
  return panelCount;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/elementTypes.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/elementTypes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTab": () => (/* binding */ isTab),
/* harmony export */   "isTabList": () => (/* binding */ isTabList),
/* harmony export */   "isTabPanel": () => (/* binding */ isTabPanel)
/* harmony export */ });
function makeTypeChecker(tabsRole) {
  return function (element) {
    return !!element.type && element.type.tabsRole === tabsRole;
  };
}

var isTab = makeTypeChecker('Tab');
var isTabList = makeTypeChecker('TabList');
var isTabPanel = makeTypeChecker('TabPanel');

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/propTypes.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/propTypes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "childrenPropType": () => (/* binding */ childrenPropType),
/* harmony export */   "onSelectPropType": () => (/* binding */ onSelectPropType),
/* harmony export */   "selectedIndexPropType": () => (/* binding */ selectedIndexPropType)
/* harmony export */ });
/* harmony import */ var _childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");


function childrenPropType(props, propName, componentName) {
  var error;
  var tabsCount = 0;
  var panelsCount = 0;
  var tabListFound = false;
  var listTabs = [];
  var children = props[propName];
  (0,_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__.deepForEach)(children, function (child) {
    if ((0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTabList)(child)) {
      if (child.props && child.props.children && typeof child.props.children === 'object') {
        (0,_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__.deepForEach)(child.props.children, function (listChild) {
          return listTabs.push(listChild);
        });
      }

      if (tabListFound) {
        error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
      }

      tabListFound = true;
    }

    if ((0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTab)(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components " + "have to be inside the 'TabList' component.");
      }

      tabsCount++;
    } else if ((0,_elementTypes__WEBPACK_IMPORTED_MODULE_1__.isTabPanel)(child)) {
      panelsCount++;
    }
  });

  if (!error && tabsCount !== panelsCount) {
    error = new Error("There should be an equal number of 'Tab' and 'TabPanel' in `" + componentName + "`. " + ("Received " + tabsCount + " 'Tab' and " + panelsCount + " 'TabPanel'."));
  }

  return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop && typeof prop !== 'function') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied " + ("to `" + componentName + "`, expected `function`."));
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error("The " + location + " `" + name + "` is marked as required in `" + componentName + "`, but " + "its value is `undefined` or `null`.\n" + "`onSelect` is required when `selectedIndex` is also set. Not doing so will " + "make the tabs not do anything, as `selectedIndex` indicates that you want to " + "handle the selected tab yourself.\n" + "If you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.");
  }

  return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop != null && typeof prop !== 'number') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied to " + ("`" + componentName + "`, expected `number`."));
  } else if (props.defaultIndex != null && prop != null) {
    return new Error("The " + location + " `" + name + "` cannot be used together with `defaultIndex` " + ("in `" + componentName + "`.\n") + ("Either remove `" + name + "` to let `" + componentName + "` handle the selected ") + "tab internally or remove `defaultIndex` to handle it yourself.");
  }

  return error;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/uuid.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/uuid.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uuid),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
// Get a universally unique identifier
var count = 0;
function uuid() {
  return "react-tabs-" + count++;
}
function reset() {
  count = 0;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-tabs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* reexport safe */ _components_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "TabList": () => (/* reexport safe */ _components_TabList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Tab": () => (/* reexport safe */ _components_Tab__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "TabPanel": () => (/* reexport safe */ _components_TabPanel__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "resetIdCounter": () => (/* reexport safe */ _helpers_uuid__WEBPACK_IMPORTED_MODULE_4__.reset)
/* harmony export */ });
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tabs */ "./node_modules/react-tabs/esm/components/Tabs.js");
/* harmony import */ var _components_TabList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TabList */ "./node_modules/react-tabs/esm/components/TabList.js");
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tab */ "./node_modules/react-tabs/esm/components/Tab.js");
/* harmony import */ var _components_TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TabPanel */ "./node_modules/react-tabs/esm/components/TabPanel.js");
/* harmony import */ var _helpers_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/uuid */ "./node_modules/react-tabs/esm/helpers/uuid.js");






/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Temur","description":"Temur\' personal website portfolio","author":"Temurbek Sabirov"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-tsx.js.map