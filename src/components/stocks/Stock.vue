<template>
  <div class="col-sm-6 col-md-4 mt-2 mb-2">
    <div class="card border-success">
      <div class="card-header">
        {{ stock.name }}
        <small>({{ stock.price }})</small>
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(qua