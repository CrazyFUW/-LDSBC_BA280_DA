<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="portfolio" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link" href="#">
            Portfolio
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link to="stocks" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link" href="#