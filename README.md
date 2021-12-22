# Responsive Rick Roll

This Rick Roll takes up the user's entire viewport even if on mobile. It will always show the center of the music video, which works well because this is where Rick Astley and the other dancers are displayed. To see it in action visit https://geoff.ie/responsive-rick-roll.

Features:
* Responsive
* Users can't pause / click away
* Loops

## Why doesn't it autoplay?? 😭😩😤

Browsers don't want websites to streaming video and audio automatically because it could cost users a lot of data: https://stackoverflow.com/a/26066844

## How it works

* Uses the [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference) to play the official music video (for the best video and audio quality).
* Uses a little CSS to essentially zoom in on the video on smaller screens so that it takes up the entire screen.

## Why it works this way

I don't want to host Never Gonna Give You Up because that may be morally wrong 🤔. This means that you can have a `<video>` tag with a `src` attribute that points to an mp4 file hosted somewhere else. After enough searching on the Internet for me, it seemed that the best quality version of the video at a source I can trust to continue hosting it is the official music video on YouTube. So in order to have the video the best quality, you should embed the video from YouTube.

The best way to embed and interact with YouTube videos on your website is by using the [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference). This allows you to load the video, pause it, play it, mute it etc. from your JS. You can also react to state changes like the video being ready to play or ending.
