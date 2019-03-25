//Icons
import icons from './assets/index';

export default {
  currentTrackIdx : 0,
  seekerVal : "0",
  volume : "75",
  playing : false,
  paused : false,
  muted : false,
  volumePreMute : "75",
  duration : "0:00",
  currentAudioTime : "0:00",
  recentlyRewound : false,
  loaded : false,
  loop : false,
  playHover : false,
  playStarted : false,
  muteHover : false,
  forwardHover : false,
  rewindHover : false,
  loopHover : false,
  downloadHover: false,
  playIcon : icons.playIcon,
  playHoverIcon : icons.playHoverIcon,
  pauseIcon : icons.pauseIcon,
  pauseHoverIcon : icons.pauseHoverIcon,
  volumeIcon : icons.volumeIcon,
  volumeEngagedIcon : icons.volumeEngaged,
  muteIcon : icons.muteIcon,
  muteEngagedIcon : icons.muteEngagedIcon,
  forwardIcon : icons.forwardIcon,
  forwardHoverIcon : icons.forwardHoverIcon,
  rewindIcon : icons.rewindIcon,
  rewindHoverIcon : icons.rewindHoverIcon,
  loopIcon : icons.loopIcon,
  loopEngagedIcon : icons.loopEngagedIcon,
  downloadIcon: icons.downloadIcon,
  downloadHoverIcon: icons.downloadHoverIcon,
  seekWidth : "35%",
  volumeWidth : "33%",
  nameWidth : "32%",
  sliderClass : "slider",
  fontFamily : "sans-serif",
  fontWeight : "100",
  fontSize : "small",
  fontColor : "black",
  playerWidth : "25rem",
  iconSize : "1rem",
  hideSeeking : false,
  scrollMarquee : false,
  scrollDifference : 0,
  scrollTime : 0,
  scrollStyle : {
    marginLeft : "0"
  }
};