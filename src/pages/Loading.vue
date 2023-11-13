<template>
    <v-container class="d-flex justify-center align-center loading">
        <div class="mx-auto">
            <content-loading  :size="50" text="Loading" />
        </div>
    </v-container>
</template>

<script>
export default {
    name: "LoadingPage",
};
</script>

<style scoped>

.loading {
    height: 100%;
}

</style>