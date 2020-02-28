import runSlider from 'modules/slider.js'
import {tns} from '../../node_modules/tiny-slider/src/tiny-slider';

  var slider = tns({
 
  "container": "#autoplay",
  "axis": "horizontal",
  "items": 1,
  "speed": 800,
  "autoplay": true,
  "autoplayButtonOutput": false,
  "autoplayTimeout": 4500,
  "swipeAngle": false,
  "controls": false,
  "navPosition": 'bottom center',
  "center": true,
  "arrowKeys": true

})

