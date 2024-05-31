# Masterpaint: Creating from astro's blog

Masterpaint's website

> ⚠️ Warning: This document might not be zero-error.

## Prerequisites

Please install the following.

- [Node.js](https://nodejs.org/en/): **v20 or above** is required. **v20.8.1** is recommended.
- [pnpm](https://pnpm.io/): **v8 or above** is required. latest version is recommended.
- [Git](https://git-scm.com/): latest version is recommended.

## Setting Up the Development Environment

1.  [VSCode](https://code.visualstudio.com/) is recommended for development.
1.  Install the following extensions (Optional but highly recommended):
    - [Astro](https://marketplace.visualstudio.com/items?itemName=astro.astro)
    - [ESLint v8.57.0](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - (if 9.2.0 is installed, `pnpm lint` will error)
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
1.  Setting the VSCode workspace settings (Optional but highly recommended):

    1.  Open the command palette (Ctrl + Shift + P)
    1.  Type "Preferences: Open Settings (JSON)" and press Enter
    1.  Insert the following code into the settings.json file

        ```json
        {
          "tailwindCSS.experimental.classRegex": [
            ["clsx\\(([^)]_)\\)", "(?:'|\"|`)([^']_)(?:'|\"|`)"]
          ],
          "prettier.documentSelectors": ["**/*.astro"],
          "[astro]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
          },
          "eslint.validate": [
            "javascript",
            "javascriptreact",
            "astro",
            "typescript",
            "typescriptreact"
          ],
          "files.insertFinalNewline": true
        }
        ```

        > Note: Please make sure you understand what you are doing before changing the settings.
        >
        > Here is a brief explanation of the settings.
        >
        > `tailwindCSS.experimental.classRegex` is for the Tailwind CSS and clsx() support.
        >
        > `prettier.documentSelectors (astro)`
        > and
        > `[astro]: { "editor.defaultFormatter": "esbenp.prettier-vscode" }`
        > are for the Prettier support for Astro files.
        >
        > `eslint.validate` is for the ESLint support.
        >
        > `files.insertFinalNewline` is for the final newline at the end of the file which if set to `false`, you may encounter some problems with Prettier.

1.  Save the file and you are done!

Thanks astro from their template blogs.

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of this Masterpaint project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json

some prettier & eslint stuffs
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` = where we like to put any Astro/React/Vue/Svelte/Preact components.

> ⚠️ Important: Above this messages are the necessary informations.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

using `pnpm` for node pkg manager.

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
| `pnpm lint`                | Lint checked                                     |
| `pnpm format`              | Prettier formatting                              |
| `pnpm sync`                | Astro Syncing                                    |

> ⚠️ Remark: Encounter Astro problem? Try `pnpm sync`.

## 👀 Want to learn more?

Check out [astro'sdocumentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
