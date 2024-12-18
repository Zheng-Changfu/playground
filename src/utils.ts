export function getProNaiveUiUrl(version?: string, prod = false) {
  return version
    ? `https://unpkg.com/pro-naive-ui@${version}/dist/index${prod ? '.prod.mjs' : '.mjs'}`
    : `https://unpkg.com/pro-naive-ui/dist/index${prod ? '.prod.mjs' : '.mjs'}`
}
