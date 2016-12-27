import Vue from "vue";

import template from "./list.tpl.html";
import "./list.scss";

let Component = Vue.component("list", {
    props: ["content"],
    template: template
});

export default Component;
