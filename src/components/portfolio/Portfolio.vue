<template>
  <div class="row">
  <app-stock v-for="stock in stocks" :key="stock.id" :stock="sto