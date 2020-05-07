module.exports = {
    project: {
      ios: {},
      android: {}, // grouped into "project"
    },
    assets: ['./assets/fonts/'],
    commands: require('./path-to-commands.js'), // formerly "plugin", returns an array of commands
  };