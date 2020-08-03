<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 clas="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}})</small>
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
                    @click="buyStock"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity)">BUY</button>
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
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            console.log(order);
            //resert the order
            this.quantity = 0
            
        }
    }
}
</script>