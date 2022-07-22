<script setup lang="ts">

    type PostNavItem = {
        label: string,
        href: string
    };

    const posts: PostNavItem[] = [
        {
            label: "Cum sa nu fi angular dev",
            href: "/about.html",
        },
        {
            label: "Zemar",
            href: "/index.html",
        }
    ];
</script>

<template>
    <nav>
        <ul>
            <li v-for="(post, index) of posts" :key="index">
                <a :href="post.href">
                    {{ post.label }}
                </a>
            </li>
        </ul>
    </nav>
</template>