import injectTapEventPlugin from 'react-tap-event-plugin';
if (typeof(onTouchTap) === 'undefined') {
  try {
    injectTapEventPlugin();
  } catch (e) {
    console.log(`failed to inject tap event plugin: ${ e }`);
  }
}
