import Vue from "vue";

import template from "./grouped-content.tpl.html";
import "./grouped-content.scss";

let Component = Vue.component("grouped-content", {
    props: ["content"],
    template: template
});

export default Component;
