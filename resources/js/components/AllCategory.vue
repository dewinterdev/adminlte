<template>
    <div>
        <h2 class="text-center">Category List</h2>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                 <th colspan="2">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="category in categories" :key="category.id">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: category.id }}" class="btn btn-success">Edit Category</router-link>
                        <button class="btn btn-danger" @click="deleteCategory(category.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        }
    },
    created() {
        this.axios
            .get(`http://adminlte.test/api/category/`)
            .then(response => {
                this.categories = response.data;
            });
    },
    methods: {
        deleteCategory(id) {
            this.axios
                .delete(`http://adminlte.test/category/${id}`)
                .then(response => {
                    let i = this.categories.map(data => data.id).indexOf(id);
                    this.categories.splice(i, 1)
                });
        }
    }
}
</script>
