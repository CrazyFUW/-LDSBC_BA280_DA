
<template>
  <div class="container">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  },