const CACHE_NAME = 'vs-tetris-v1';

self.addEventListener('fetch', event => {
  // GETリクエスト以外（WebRTCの通信など）はキャッシュ処理をスキップ
  if (event.request.method !== 'GET') return;

  // Viteの内外部通信やHMR（Hot Module Replacement）の通信はキャッシュしない
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/@') || url.pathname.includes('vite') || url.port === '5173') return;
  
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return fetch(event.request).then(response => {
        // 通信成功時はキャッシュを最新化して返す
        cache.put(event.request, response.clone());
        return response;
      }).catch(() => {
        // オフライン時などはキャッシュから返す
        return cache.match(event.request);
      });
    })
  );
});
