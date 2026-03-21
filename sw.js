const CACHE_NAME = 'choices-blocks-1.0.1'; //publish ver1.0.1,main.jsの冒頭も変更する

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

// ▼ 追加: アプリ側（main.js）から「SKIP_WAITING」を受け取ったら、待機状態をスキップして即座にアクティブにする
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ▼ 追加: 新しいバージョンがアクティブになったら、古いバージョンのキャッシュを削除する
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

