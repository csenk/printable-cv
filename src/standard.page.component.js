import Vue from "vue";

import template from "./standard.page.tpl.html";
import "./standard.page.scss";

let Component = Vue.component("standard", {
    props: ["content"],
    template: template
});

export default Component;
