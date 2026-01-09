// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://jirayussiri.github.io',
    base: '/restaurant-site/',
    vite: {
        plugins: [tailwindcss()],
    },
});
