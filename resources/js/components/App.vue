<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link :to="{ name : 'home'}" class="nav-item nav-link">Category List</router-link>
                    <router-link :to="{ name : 'create'}" class="nav-item nav-link">Create Category</router-link>
                </div>
            </div>
        </nav>

        <router-view> </router-view>
    </div>
</template>

<script>
export default {}
</script>
