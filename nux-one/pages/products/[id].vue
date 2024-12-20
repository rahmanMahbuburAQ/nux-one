<template>
    <div>
        <p>This is used for Route parameter.Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorum necessitatibus rem commodi id cumque sed magni ducimus, delectus odio minus reprehenderit at, assumenda tenetur explicabo doloremque ipsum officia cum.</p>

    </div>
</template>

<script setup>

const { id } = useRoute().params

</script>

<style lang="scss" scoped>

</style>