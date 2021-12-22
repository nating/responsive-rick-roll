# Responsive Rick Roll

<div align="center">
  <img width="150px" src="https://user-images.githubusercontent.com/16880181/147137754-78432ec2-a41c-4158-8c8f-f09947365c96.png" />
  <img width="400px" src="https://user-images.githubusercontent.com/16880181/147137728-af59496a-1bb5-4e65-b285-bc35c13808c3.png" />
</div>

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
