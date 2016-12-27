import Vue from "vue";

import template from "./project.tpl.html";
import "./project.scss";

let Component = Vue.component("project", {
    props: ["content"],
    template: template
});

export default Component;
