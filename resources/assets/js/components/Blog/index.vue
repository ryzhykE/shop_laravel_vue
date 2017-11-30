<template>
    <div class="container">
        <div class="row">
            <div class="btn-group">
                <a class="btn btn-default"@click="value = !value">
                    <span class="glyphicon"
                          :class="value ? 'glyphicon-th-list' : 'glyphicon-th'"
                          v-text="value ? 'List' : 'Grid'"
                    ></span>
                </a>

            </div>
            <comment :is="dynamicComponent"></comment>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>

<script>
    import defaultComponent from './show.vue'
    import listComponent from './list'
    export default {
        data() {
            return{
                blogs:[],
                value:true
            }
        },
        components:{
            defaultComponent,
            listComponent
        },
        mounted() {
            let vm = this;
            vm.fetchBlogs()
        },
        computed: {
            dynamicComponent(){
                let vm = this;
                if(vm.value){
                    return 'default-component';
                }else {
                    return 'list-component';
                }
            }
        },
        methods: {
            fetchBlogs: function() {
                let self = this;
                axios.get('api/blogs').then(response => self.blogs = response.data.blogs)
            },
        },

    }
</script>
