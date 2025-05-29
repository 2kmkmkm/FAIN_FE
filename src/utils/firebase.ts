// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// 사용자가 알림 허용 동의 요청
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    // FCM 토큰 요청
    getToken(messaging, { vapidKey: import.meta.env.WEB_PUSH_CERTIFICATE_KEY_PAIR }).then((currentToken) => {
      if (currentToken) {
        console.log("FCM 토큰:", currentToken);
        // 서버에 이 토큰을 저장해야 나중에 알림을 보낼 때 사용 가능
      } else {
        console.log("토큰을 가져오지 못함");
      }
    });
  }
});

// 앱이 포그라운드에 있을 때 메시지 수신 처리
onMessage(messaging, (payload) => {
  console.log("메시지 수신:", payload);
  // 화면에 알림 표시 코드 작성 가능
});