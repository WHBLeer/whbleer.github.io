(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{480:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"stylus混入-mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylus混入-mixins"}},[s._v("#")]),s._v(" stylus混入(Mixins)")]),s._v(" "),a("h2",{attrs:{id:"混入-mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混入-mixins"}},[s._v("#")]),s._v(" 混入(Mixins)")]),s._v(" "),a("p",[s._v("混入和函数定义方法一致，但是应用却大相径庭。")]),s._v(" "),a("p",[s._v("一个简单的混入应用，定义一个超出显示省略号的"),a("code",[s._v("ellipsis()")]),s._v("方法，在需要用到的地方只需插入这个方法，其样式会扩展并复制到选择器中。")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ellipsis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),s._v(" hidden")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("white-space")]),s._v(" nowrap")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),s._v(" ellipsis")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("p")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ellipsis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("下面有定义的"),a("code",[s._v("border-radius(n)")]),s._v("方法，其却作为一个"),a("em",[s._v("mixin")]),s._v("（如，作为状态调用，而非表达式）调用。")]),s._v(" "),a("p",[s._v("当"),a("code",[s._v("border-radius()")]),s._v("选择器中调用时候，属性会被扩展并复制在选择器中。")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-border-radius")]),s._v(" n")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-moz-border-radius")]),s._v(" n")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),s._v(" n")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("form input[type=button]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token unit"}},[s._v("px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("编译成：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("form input[type=button]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-moz-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("使用混入书写，你可以完全忽略括号，提供梦幻般私有属性的支持。")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-border-radius")]),s._v(" n")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-moz-border-radius")]),s._v(" n")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),s._v(" n")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("form input[type=button]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token unit"}},[s._v("px")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("注意到我们混合书写中的"),a("code",[s._v("border-radius")]),s._v("当作了属性，而不是一个递归函数调用。")]),s._v(" "),a("p",[s._v("更进一步，我们可以利用"),a("code",[s._v("arguments")]),s._v("这个局部变量，传递可以包含多值的表达式。")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-border-radius")]),s._v(" arguments")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-moz-border-radius")]),s._v(" arguments")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),s._v(" arguments")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("现在，我们可以像这样子传值："),a("code",[s._v("border-radius 1px 2px / 3px 4px")]),s._v("!")]),s._v(" "),a("p",[s._v("另外一个很赞的应用是特定的私有前缀支持——例如IE浏览器的透明度：")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("support-for-ie")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("opacity")]),s._v(" n")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token statement"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" support-for-ie")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("filter")]),s._v(" unquote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'progid:DXImageTransform.Microsoft.Alpha(Opacity='")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#logo")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&:hover")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("opacity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("渲染为：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#logo:hover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("progid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("DXImageTransform.Microsoft."),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Alpha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Opacity=50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("来源："),a("a",{attrs:{href:"https://www.zhangxinxu.com/jq/stylus/mixins.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.zhangxinxu.com/jq/stylus/mixins.php"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);