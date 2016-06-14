const {app, Menu, Tray, BrowserWindow, electron} = require('electron');
const path = require('path');

app.commandLine.appendSwitch('ppapi-flash-path', __dirname + '\\pepflashplayer.dll');
app.commandLine.appendSwitch('ppapi-flash-version', '21.0.0.242');

// let ppapi_flash_path;

// Specify flash path.
// On Windows, it might be /path/to/pepflashplayer.dll
// On OS X, /path/to/PepperFlashPlayer.plugin
// On Linux, /path/to/libpepflashplayer.so
// if(process.platform  == 'win32'){
//   ppapi_flash_path = path.join(__dirname, '/pepflashplayer.dll');
// } else if (process.platform == 'linux') {
//   ppapi_flash_path = path.join(__dirname, 'libpepflashplayer.so');
// } else if (process.platform == 'darwin') {
//   ppapi_flash_path = path.join(__dirname, 'PepperFlashPlayer.plugin');
// }

// let ppapi_flash_path = app.getPath('pepperFlashSystemPlugin');

// app.commandLine.appendSwitch('ppapi-flash-path', ppapi_flash_path);

// app.commandLine.appendSwitch('ppapi-flash-version', '21.0.0.242');

app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		'width': 1280,
		'height': 860,
		'webPreferences': {'plugins': true}
	});
	mainWindow.loadURL('http://deezer.com');
});

app.on('window-all-closed', function() {
	if (process.platform != 'darwin')
	app.quit();
});