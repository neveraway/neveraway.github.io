# neveraway.github.io

Source for the project landing page at https://neveraway.github.io.

Single-page static site. `index.html` and the committed `styles.css` are served directly; deployment
needs no build or JavaScript. The page permits only local styles and images, with no executable scripts.

After changing utility classes or `styles.input.css`, regenerate the stylesheet with the pinned
Tailwind CLI, then commit the result:

```sh
npm exec --yes --package=tailwindcss@3.4.17 -- tailwindcss --input styles.input.css --content index.html --minify --output styles.css
```

The real project lives at [neveraway/neveraway](https://github.com/neveraway/neveraway).

Run the dependency-free page security check with `node --test tests/*.test.mjs`.
