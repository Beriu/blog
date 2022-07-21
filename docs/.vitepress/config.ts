import { defineConfigWithTheme } from 'vitepress';
import Theme from "./theme/index";

export default defineConfigWithTheme<typeof Theme>({

    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',

    themeConfig: Theme
});