<script setup>
    import CountComponent from '@/components/CountComponent.vue';
    import FirstComponent from '@/components/FirstComponent.vue';
    import AbcComponent from '@/components/AbcComponent.vue';
    const items = [FirstComponent, AbcComponent, CountComponent]
</script>

<template>
    <div>
        <h2>Tabs View</h2>
        <component :is="items[2]"></component>
    </div>
</template>

<style lang="css" scoped>

</style>