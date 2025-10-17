const notie = require('../utils/notifier');
const tracker = require('../base/task-tracker');
const Logger = require('../utils/log');
const osIntegration = require('../base/os-integration');
const userPreferences = require('../base/user-preferences');
const EMPTY_IMAGE = require('../constants/empty-screenshot');

const log = new Logger('Screen-Notifier');

tracker.on('interval-pushed', data => {

  // Do not show notie if application is about to quit or application window does not exist
  if (
    osIntegration.isApplicationClosingNow
    || !osIntegration.window
  )
    return;

  // Screenshot notifications are disabled by default in MDO Pulse
  // Intervals are still captured and synced with the server
  log.debug('Screenshot captured silently');

});

log.debug('Loaded');
