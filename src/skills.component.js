import Vue from "vue";

import template from "./skills.tpl.html";
import "./skills.scss";

let Component = Vue.component("skills", {
    props: ["content"],
    template: template
});

export default Component;
