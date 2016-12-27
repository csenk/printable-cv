import Vue from "vue";

import template from "./page.tpl.html";
import "./page.scss";

let Component = Vue.component("page", {
    props: ["type", "content"],
    template: template
});

export default Component;
