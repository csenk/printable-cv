import Vue from "vue";
import * as _ from "lodash";

let Directive = Vue.directive("class", {
    bind: function(el, binding, vnode) {
        let classes = _.split(el.className, " ");
        classes = _.without(classes, " ");

        let style = vnode.context.style;
        if (!style) {
            throw new Error(`'style' was not found in the component context.`);
        }

        if (!style[binding.value]) {
            throw new Error(`'${binding.value}' was not found as style property.`);
        }

        classes.push(style[binding.value]);
        el.className = _.join(classes, " ");
    }
});

export default Directive;
