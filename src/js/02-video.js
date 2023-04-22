import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
