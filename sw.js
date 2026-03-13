const CACHE_NAME = 'vs-tetris-v1';

self.addEventListener('fetch', event => {
  // GETリクエスト以外はキャッシュ処理をスキップ
  if (event.request.method !== 'GET') return;

  // HTTP/HTTPS 以外のスキーム（chrome-extensionなど）はスキップ
  if (!event.request.url.startsWith('http')) return;

  // Viteの内外部通信やHMR（Hot Module Replacement）の通信はキャッシュしない
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/@') || url.pathname.includes('vite') || url.port === '5173') return;
  
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return fetch(event.request).then(response => {
        // 通信成功時のみキャッシュを更新
        // ただし、206 Partial Content は Cache API でサポートされていないため除外する
        if (response.ok && response.status === 200) {
          cache.put(event.request, response.clone());
        }
        return response;
      }).catch(() => {
        // オフライン時などはキャッシュから返す
        return cache.match(event.request);
      });
    })
  );
});
