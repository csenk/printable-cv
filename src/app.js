// Polyfills to support older browsers
import "babel-polyfill";
import "string.fromcodepoint";

// materialize-css

import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

// flexboxgrid

import "flexboxgrid/css/flexboxgrid.css";

// vue

import Vue from "vue";
import Vuex from "vuex";

import { mapState } from "vuex";

// Application

import "./style.scss";

import PageComponent from "./page.component.js";
import CoverPageComponent from "./cover.page.component.js";
import StandardPageComponent from "./standard.page.component.js";
import ChapterComponent from "./chapter.component.js";
import GroupedContentComponent from "./grouped-content.component.js";
import ListComponent from "./list.component.js";
import ExperienceComponent from "./experience.component.js";
import SkillsComponent from "./skills.component.js";
import ProjectComponent from "./project.component.js";

import ClassDirective from "./class.directive.js";

import data from "./data.js";

import template from "./app.tpl.html";
import "./app.scss";

// Setup

Vue.use(Vuex);

const store = new Vuex.Store({
    state: data
});

new Vue({
    el: "body > div",
    store,
    template,
    computed: mapState(["pages"])
});
