<template>
    <div>
        <h3 class="text-center">Edit Category</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateCategory">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="category.name">
                    </div>
                    <button type="submit" class="btn btn-primary">Update Category</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            category: {}
        }
    },
    created() {
        this.axios
            .get(`http://adminlte.test/api/category/${this.$route.params.id}`)
            .then((res) => {
                this.category = res.data;
            });
    },
    methods: {
        updateCategory() {
            this.axios
                .patch(`http://localhost:8000/api/products/${this.$route.params.id}`, this.category)
                .then((res) => {
                    this.$router.push({ name: 'home' });
                });
        }
    }
}
</script>
