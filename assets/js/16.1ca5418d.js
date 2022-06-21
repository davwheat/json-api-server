(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{198:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"laravel-helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel-helpers"}},[t._v("#")]),t._v(" Laravel Helpers")]),t._v(" "),s("p",[t._v("These helpers improve the ergonomics of your API resource definitions when using the Laravel framework.")]),t._v(" "),s("h2",{attrs:{id:"validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[t._v("#")]),t._v(" Validation")]),t._v(" "),s("h3",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[t._v("#")]),t._v(" "),s("code",[t._v("rules")])]),t._v(" "),s("p",[t._v("Use Laravel's "),s("a",{attrs:{href:"https://laravel.com/docs/8.x/validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Validation component"),s("OutboundLink")],1),t._v(" as a "),s("RouterLink",{attrs:{to:"/writing.html#validation"}},[t._v("field validator")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Tobyz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("JsonApiServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Laravel\\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'required'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'min:3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'max:20'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Pass a string or array of validation rules to be applied to the value. Validating array contents is also supported:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'jobs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Laravel\\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'required'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'array'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'*'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'min:3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'max:255'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You can also pass an array of custom messages and custom attribute names as the second and third arguments.")]),t._v(" "),s("h2",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("h3",{attrs:{id:"authenticated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authenticated"}},[t._v("#")]),t._v(" "),s("code",[t._v("authenticated")])]),t._v(" "),s("p",[t._v("A shortcut to call "),s("code",[t._v("Auth::check()")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("creatable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Laravel\\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"can"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can"}},[t._v("#")]),t._v(" "),s("code",[t._v("can")])]),t._v(" "),s("p",[t._v("Use Laravel's "),s("a",{attrs:{href:"https://laravel.com/docs/8.x/authorization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gate component"),s("OutboundLink")],1),t._v(" to check if the given ability is allowed. If this is used in the context of a model (eg. "),s("code",[t._v("updatable")]),t._v(", "),s("code",[t._v("deletable")]),t._v(", or on a field), then the model will be passed to the gate check as well.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updatable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Laravel\\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("can")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'update-post'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);