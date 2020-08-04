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
                    :disabled="insufficientFunds || quantity <= 0 || !numberIsInteger(quantity)"
                    :class="{'changeColor': insufficientFunds}"
                    >{{ insufficientFunds ? 'insufficientFunds' : "Buy" }} </button>
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
    computed:{
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            if (this.quantity * this.stock.price > this.funds) {
        
                return true       
               
            }
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity)
            }
            // console.log(order);
            this.$store.dispatch('buyStock', order)
            //reset the order
            this.quantity = 0
            
        },
        numberIsInteger(value) {
            return Number.isInteger(Number(value))
        }
    }
    
}
</script>


<style scoped>

.changeColor {
    border: none;
    background-color: red;
   
}
.changeColor:hover {
    background-color: red;
} 

</style>