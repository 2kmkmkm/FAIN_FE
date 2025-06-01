importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  messagingSenderId: "...",
  appId: "...",
});

const messaging = firebase.messaging();

// 캐시 네임 정의 (버전 관리 용도)
const CACHE_NAME = "your-app-cache-v1";

// 설치 시, 기존 캐시 삭제하고 새 캐시 준비 (필요시)
self.addEventListener("install", (event) => {
  self.skipWaiting(); // 즉시 활성화
});

// 활성화 시 이전 캐시 삭제
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              return caches.delete(cache);
            }
          })
        )
      )
      .then(() => self.clients.claim()) // 페이지와 서비스워커 동기화
  );
});

messaging.onBackgroundMessage((payload) => {
  console.log("백그라운드 메시지 수신:", payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    data: payload.data,
    icon: "/icon-192x912.png",
  });
});
