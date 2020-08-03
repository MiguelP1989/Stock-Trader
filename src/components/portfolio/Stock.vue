<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 clas="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="quantity"
                        v-model="quantity">
                </div>
                <div class="pull-right">
                    <button 
                    class="btn btn-success"
                    @click="sellStock"
                    :disabled="quantity <= 0 || Number.isInteger(quantity)">SELL</button>
                </div>
            </div>

        </div>
    </div>
</template>



<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
     sellStock() {
         const order = {
             stockId: this.stock.id,
             stockprice: this.stock.price,
             quantity: this.quantity
         }
        this.$store.dispatch('sellStock', order)
     }
    }
}
</script>