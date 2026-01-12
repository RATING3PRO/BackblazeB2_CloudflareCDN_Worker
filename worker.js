export default {
  async fetch(request) {
    const url = new URL(request.url)
    const B2_ORIGIN = "yourb2url"
    const BUCKET = "yourbucketname"
    const target = `${B2_ORIGIN}/file/${BUCKET}${url.pathname}`
    //cache
    return fetch(target, {
      cf: {
        cacheEverything: true,
        cacheTtl: 60 * 60 * 24 * 7
      }
    })
  }
}
