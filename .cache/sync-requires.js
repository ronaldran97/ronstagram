
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ronaldtran/ronstagram/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ronaldtran/ronstagram/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ronaldtran/ronstagram/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/ronaldtran/ronstagram/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/ronaldtran/ronstagram/src/templates/blog-post.js"))
}

