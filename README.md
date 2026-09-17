# 0use.net

Hi，I am Ouse. Welcome here! This repository hosts my personal website: [https://0use.net](https://0use.net)

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) + Svelte 5 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/) (static deployment)
- [Giscus](https://giscus.app/) (blog comments via GitHub Discussions)
- Blog content from [OuseBlog](https://github.com/0use-TE/OuseBlog)

## Project Structure

```
src/                 # Frontend source
  src/routes/        # Pages (home, blog, resume, opensource, code)
  src/lib/           # Components, stores, config
.github/workflows/   # CI/CD — build & deploy to gh-pages on push to master
```

## Local Development

```bash
cd src
npm install
npm run dev
```

## Build

```bash
cd src
npm run build
```

Pushing to the `master` branch triggers GitHub Actions to build and deploy to GitHub Pages automatically.

## Blog Comments

Blog posts use [Giscus](https://giscus.app/) for comments. Discussions are stored in this repository under **General**. Commenters sign in with their GitHub account.

## AI Profile API

Send one link to an AI and it can read who I am, my projects, and my tech stack:

- Markdown (best for chat): [https://0use.net/api/me.md](https://0use.net/api/me.md)
- JSON: [https://0use.net/api/me.json](https://0use.net/api/me.json)
- Index: [https://0use.net/llms.txt](https://0use.net/llms.txt)

These are prerendered static files (no backend). Edit `src/src/lib/data/profile.ts` to update the resume page, opensource page, and API together.

---

Thanks for reading! If you have any questions, feel free to open an issue or leave a comment on the blog.
