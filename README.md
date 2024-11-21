#### VuePress v2 Full-text Search Plugin

##### Overview

This plugin provides full-text search functionality for **VuePress v2**. It is designed to address the search needs of VuePress sites, offering a fast and efficient way to search through the content of your site. The plugin automatically generates a search index from your site's pages and provides a simple way for users to search through the content.

This plugin is built to work with the latest version of VuePress.

##### Features

- **Full-text Search**: Automatically generates a search index for your pages, allowing users to search through the text content of your site.
- **VuePress v2 Compatibility**: Designed specifically for VuePress v2, ensuring full integration with the latest features and updates.
- **HMR Support**: Includes Hot Module Replacement (HMR) code to allow live updates of the search index during development.
- **Search Index Generation**: A script that generates the search index by extracting relevant data from your site's pages.

##### Installation & use

To install the plugin, follow these steps:

1. **Install the plugin** via npm:

   ```bash
   npm install vuepress-serach-plugin --save

2. ***usage** in config.js
    ```
    import fullTextSearchPlugin from "vuepress-serach-plugin";
    
    export default defineUserConfig({
        plugins: [
                fullTextSearchPlugin({
                    locales: {
                        '/': {
                            placeholder: 'Search',
                        },
                        '/zh/': {
                            placeholder: '搜索',
                        },
                    },
                })
            ],
    )}
    ```