import Vue from "vue";

import template from "./experience.tpl.html";
import "./experience.scss";

let Component = Vue.component("experience", {
    props: ["content"],
    template: template
});

export default Component;
