document.addEventListener("DOMContentLoaded", function () {
    const appIcon = document.getElementById("app-download-icon");
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Google Play Store link
        appIcon.href = "https://play.google.com/store/apps/details?id=com.earthrhythmnew";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Apple App Store link
        appIcon.href = "https://apps.apple.com/us/app/earth-rhythm/id1571365089?uo=4";
    } else {
        // Default or fallback link (optional)
        appIcon.href = "#";
        appIcon.title = "App not available for your device";
        appIcon.style.pointerEvents = "none";
    }
});