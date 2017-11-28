<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm hello!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       data() {
           return{
               products:[],
           }
       },
        methods: {
            fetchProducts: function() {
                var self = this;
                axios.get('api/products').then(response => self.products = response.data.products)
            },
        }
    }
</script>
