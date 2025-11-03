<template>
    <div class="flex flex-col min-h-screen">
        <default-header />
        <main class="flex-grow">
            <p class="p-4">Some default layout content shared across all pages</p>
            <slot />
        </main>
        <default-footer />
    </div>
</template>