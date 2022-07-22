<script setup lang="ts">
    import SideNav from "./SideNav.vue";
</script>

<template>
    <main>
        <aside class="blog-navigation">
            <SideNav />
        </aside>
        
        <section class="blog-main">
            <div class="blog-title">
                <h1>Mare titlu</h1>
                <h2>Subtitlu</h2>
            </div>

            <div class="blog-content">
                <Content />
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    main {
        height: 100vh;
        width: max-content;
        display: grid;
        gap: 2rem;
        grid-template-columns: minmax(600px, 80%) minmax(100px, 20%);
        grid-template-rows: 10%;
        grid-template-areas: 
            "navigation navigation"
            "content sidebar";

        .blog-navigation {
            order: 2;
            grid-area: sidebar;
            position: sticky;
            top: 0;
            height: max-content;
        }

        .blog-main {
            order: 1;
            grid-area: content;
            min-height: 100%;
        }
    }
</style>