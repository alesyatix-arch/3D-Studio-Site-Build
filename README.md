# 3D Studio Build

This project is built and deployed as static output.

## Environment

Use the included Bun devcontainer for development and builds. When the
container starts, it runs:

```sh
bun install --frozen-lockfile
```

If you are using VS Code, open the repository in the devcontainer and work
there. If you are using another editor, run the same commands inside the
container image defined in [`.devcontainer/devcontainer.json`](/mnt/c/users/artemiy/documents/tmp/3d%20studio%20build/.devcontainer/devcontainer.json).

## Commands

```sh
bun run dev
bun run check
bun run build
bun run preview
```

`bun run dev` starts the local Vite dev server.

`bun run check` runs `tsc --noEmit`.

`bun run build` generates the static site and prerenders the known routes.

`bun run preview` serves the built output locally.

## Production Origin

Set `VITE_SITE_URL` to the final production domain before building. That value
is used for:

```txt
canonical URLs
Open Graph URLs
JSON-LD
sitemap.xml generation
```

If `VITE_SITE_URL` is not set, the build falls back to
`https://3d-kulagin.com`.

Example:

```sh
VITE_SITE_URL=https://example.com bun run build
```

## Build Output

The static site is published from `dist/client`.

The build produces prerendered pages for:

```txt
/
/developers
/manufacturers
/designers
/portfolio
/prices
/about
/contacts
```

You will also get:

```txt
dist/client/sitemap.xml
dist/client/robots.txt
dist/client/assets/*
```

The `dist/server` directory may still be produced by the toolchain, but it is
not part of the deployment target.

## Deployment

1. Build the site inside the Bun container.
2. Confirm `dist/client` exists after the build.
3. Upload the full contents of `dist/client` to your static host.
4. Configure the host to serve existing files and directories first.
5. Optionally add an SPA fallback if your host requires one, but the prerendered
   routes above should load directly without it.

For a straightforward deployment, point the host root at `dist/client` and
publish that directory as-is. No Worker, serverless function, or request-time
SSR entry is required.

## Local Verification

After a build, verify these files exist:

```txt
dist/client/index.html
dist/client/developers/index.html
dist/client/manufacturers/index.html
dist/client/designers/index.html
dist/client/portfolio/index.html
dist/client/prices/index.html
dist/client/about/index.html
dist/client/contacts/index.html
dist/client/sitemap.xml
dist/client/robots.txt
```

If you want to validate the production shape locally, run:

```sh
bun run preview
```

Then open `/`, `/portfolio`, `/contacts`, and `/sitemap.xml`.
