import Vue from "vue";

import template from "./chapter.tpl.html";
import "./chapter.scss";

let Component = Vue.component("chapter", {
    props: ["caption", "icon", "type", "content"],
    template: template
});

export default Component;
