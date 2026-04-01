const CACHE_NAME = "nexrb-v1";
const urlsToCache = ["/", "/icon/icon-192.png", "/icon/icon-512.png"];

// Install event - cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()),
  );
});

// Fetch event - network first, fall back to cache
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  // Handle navigation requests
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match("/")));
    return;
  }

  // Network-first for other GET requests
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response.ok) return response;
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// Handle push notifications
self.addEventListener("push", (event) => {
  const data = event.data?.json() ?? {};
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const isAppInFocus = clientList.some((client) => client.focused);
      if (!isAppInFocus) {
        return self.registration.showNotification(data.title, data.options);
      }
    }),
  );
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow("/");
    }),
  );
});
الآن أضيف meta tags في index.html وأسجّل Service Worker في App.tsx.

أحتاج إضافة الـ App export الرئيسي.

الآن أتحقق من أن كل شيء سليم.

لا أخطاء. التطبيق الآن يدعم PWA بالكامل.

تم تفعيل PWA بنجاح:

أيقونة مخصصة بتصميم NEXRB (192×512 بكسل)
Web Manifest بالعربية مع اللون الأزرق المميز
Service Worker مع استراتيجية Network-First للتخزين المؤقت
تحديثات تلقائية — يظهر إشعار للمستخدم عند توفر إصدار جديد
المستخدمون يستطيعون الآن تثبيت التطبيق مباشرة من المتصفح على الجوال والكمبيوتر عبر زر "إضافة إلى الشاشة الرئيسية".

v5
PWA Support Enabled for App
Created about 20 hours ago
Error Context
Fix the errors
Backend Logs (1)
Next cursor: 1775004605310.6807
4/1/2026, 12:50:05 AM [CONVEX Q(dashboard:getStats)] Could not find public function for 'dashboard:getStats'. Did you forget to run `npx convex dev`?
الخطأ كان بسبب نشر Schema جديد دون إعادة نشر الدوال. البناء الآن أصلح ذلك. سأجعل الـ dashboard أكثر مقاومة للأخطاء بإضافة Authenticated wrapper صحيح.

يوجد تكرار في الكود. سأعيد كتابة الملف بالكامل بشكل صحيح.

لا أخطاء. تم الإصلاح بنجاح.

سبب الخطأ: عند تحديث Schema قاعدة البيانات (لإضافة جدول الحملات)، كان الـ Convex backend يُعيد النشر مؤقتاً وتعذّر العثور على دالة getStats.

الإصلاحات المُطبّقة:

استخدام Authenticated / Unauthenticated / AuthLoading من Convex بشكل صحيح — القراءة تنتظر تأكيد Auth قبل التشغيل
إضافة Skeleton loading أثناء التحميل لمنع الأعطال
تنظيف الكود المكرر في الملف

41%
v6
Dashboard Stability Improvements and Cleanup
Created about 20 hours ago
