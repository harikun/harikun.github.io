var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BJiVPeXTEl0BKoHKOt9W7jk3J4JFiyI3O83v0_-wvs8-l8eZ60FZ9WFWHJG-6GlUUqSjhPDep0QA51O178dEzTU",
   "privateKey": "dKTrFgu13tlPOyxwogL0j7EsdLB6fjyvaEZAhARbJn4"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/d9-dpnXvgO0:APA91bFjQvixUW-WO6jUPtkGLqIahnUVewIOfpWY0rCWKRXcx79lt9HEKm4WCcoLArrsT2Yu63OWkJvdohoUpEw_Dd2pe3vgIJLXkX9hrXhcIlLdtlkEJx0Pwrzy59bezBWhk34wy_UV",
   "keys": {
       "p256dh": "BFloKOVmi8+8ZiTHhnuQZ5eOVaS11s+K4ul+50/fuinJ05Lz97uozo/qXzQpEkNzdj5Yb2A7tUML+VgZgjPVEK8=",
       "auth": "9gH/f+obUdk8AUekmz98Zw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '29015836109',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);