document.addEventListener("DOMContentLoaded", function () {
    const songReleaseList = document.getElementById("songReleaseList");
    const botNotificationList = document.getElementById("botNotificationList");
    const clearNotificationsBtn = document.getElementById("clearNotifications");

    // Function to add a new song release notification
    function addSongReleaseNotification(songTitle, artist) {
        const li = document.createElement("li");
        li.textContent = `New song released: ${songTitle} by ${artist}`;
        songReleaseList.appendChild(li);
    }

    // Function to add a bot notification
    function addBotNotification(message) {
        const li = document.createElement("li");
        li.textContent = message;
        botNotificationList.appendChild(li);
    }

    // Function to clear all notifications
    function clearNotifications() {
        songReleaseList.innerHTML = "";
        botNotificationList.innerHTML = "";
    }

    // Event listener for clear notifications button
    clearNotificationsBtn.addEventListener("click", clearNotifications);

    // Simulate a new user joining
    setTimeout(function () {
        addBotNotification("Bot: New user joined the music platform!");
    }, 3000); // Simulate after 3 seconds

    // Simulate a new song release
    setTimeout(function () {
        addSongReleaseNotification("Summer Vibes", "Chill Beats");
    }, 6000); // Simulate after 6 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const botNotificationList = document.getElementById("botNotificationList");
    const clearNotificationsBtn = document.getElementById("clearNotifications");

    // Function to add a bot notification
    function addBotNotification(message) {
        const li = document.createElement("li");
        li.textContent = message;
        botNotificationList.appendChild(li);
    }

    // Function to clear all notifications
    function clearNotifications() {
        botNotificationList.innerHTML = "";
    }

    // Event listener for clear notifications button
    clearNotificationsBtn.addEventListener("click", clearNotifications);

    // Welcome message from MIXTRACK bot
    addBotNotification("MIXTRACK: Welcome to MIXTRACK! Start exploring and discovering your favorite music.");

});