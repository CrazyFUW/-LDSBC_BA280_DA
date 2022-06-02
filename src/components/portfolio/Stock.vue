<template>
  <div class="col-sm-6 col-md-4 mt-2 mb-2">
    <div class="card border-success">
    <div class="card-header">
      {{ stock.name }}
      <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
    </div>
    <div class="card-body  text-success">
      <div class="float-left">
        <input 
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model.number="quantity"
          :class="{ danger: insufficientQuantity }"
          >
      </div>
      <div class="float-right">
        <button 
          class="btn btn-success" 
          @click="sellStock" 
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          >{{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}</button>
      </div>
    </div>
</div>
  </div>
</template>
<style scoped>
.danger {
  border: 1px solid red;
}
<