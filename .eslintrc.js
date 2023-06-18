module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "@next/next/no-html-link-for-pages": [2, path.join(__dirname, "app")],
  },
}
