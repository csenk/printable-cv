import Vue from "vue";

import template from "./cover.page.tpl.html";
import "./cover.page.scss";

let Component = Vue.component("cover", {
    props: ["content"],
    template: template
});

export default Component;
