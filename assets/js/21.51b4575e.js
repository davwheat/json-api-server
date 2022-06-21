(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{203:function(t,s,e){"use strict";e.r(s);var a=e(6),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"handling-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handling-requests"}},[t._v("#")]),t._v(" Handling Requests")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("JsonApi")]),t._v(" class is a "),e("a",{attrs:{href:"https://www.php-fig.org/psr/psr-15/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PSR-15 request handler"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Instantiate it with your "),e("strong",[t._v("API's base path")]),t._v(", then pass in a PSR-7 request and you'll get back a PSR-7 response. You should catch any exceptions and pass them back into the "),e("code",[t._v("error")]),t._v(" method to generate a JSON:API error document.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Tobyz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("JsonApiServer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("JsonApi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonApi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @var Psr\\Http\\Message\\ServerRequestInterface $request */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @var Psr\\Http\\Message\\ResponseInterface $response */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("In Laravel, you'll need to "),e("a",{attrs:{href:"https://laravel.com/docs/8.x/requests#psr7-requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("convert the Laravel request into a PSR-7 request"),e("OutboundLink")],1),t._v(" before you can pass it into "),e("code",[t._v("JsonApi")]),t._v(". You can then return the response directly from the route or controller – the framework will automatically convert it back into a Laravel response and display it.")])]),t._v(" "),e("h2",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),e("p",[t._v("You (or your framework) are responsible for performing authentication.")]),t._v(" "),e("p",[t._v("Often you will need to access information about the authenticated user inside of your schema – for example, when "),e("a",{attrs:{href:"scopes"}},[t._v("scoping")]),t._v(" which resources a visible within the API. An effective way to pass on this information is by setting an attribute on your Request object before passing it into the request handler.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("withAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("An instance of "),e("code",[t._v("Tobyz\\JsonApi\\Context")]),t._v(" is passed into callbacks throughout your API's resource definitions – for example, when defining "),e("a",{attrs:{href:"scopes"}},[t._v("scopes")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Tobyz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("JsonApiServer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Context")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$context")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This object contains a number of useful methods:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("getApi(): Tobyz\\JsonApi\\JsonApi")]),e("br"),t._v("\nGet the JsonApi instance.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("getRequest(): Psr\\Http\\Message\\ServerRequestInterface")]),e("br"),t._v("\nGet the PSR-7 request instance.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("getPath(): string")]),e("br"),t._v("\nGet the request path relative to the API's base path.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("getBody(): ?array")]),e("br"),t._v("\nGet the parsed JSON:API payload.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("fieldRequested(string $type, string $field, bool $default = true): bool")]),e("br"),t._v("\nDetermine whether a field has been requested in a "),e("a",{attrs:{href:"https://jsonapi.org/format/1.1/#fetching-sparse-fieldsets",target:"_blank",rel:"noopener noreferrer"}},[t._v("sparse fieldset"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("sortRequested(string $field): bool")]),e("br"),t._v("\nDetermine whether a sort field has been requested.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("filter(string $name): ?string")]),e("br"),t._v("\nGet the value of a filter.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("meta(string $name, $value): Tobyz\\JsonApi\\Schema\\Meta")]),e("br"),t._v("\nAdd a meta attribute to the response document.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);