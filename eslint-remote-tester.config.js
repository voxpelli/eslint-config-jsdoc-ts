'use strict';

module.exports = {
  repositories: [
    'voxpelli/async-htm-to-string',
    'voxpelli/linemod-core',
    'voxpelli/linemod',
    'voxpelli/list-installed',
    'voxpelli/node-bunyan-adaptor',
    'voxpelli/node-connect-pg-simple',
    'dependency-check-team/dependency-check',
    'voxpelli/node-fetch-politely',
    'voxpelli/node-github-publish',
    'voxpelli/node-jekyll-utils',
    'voxpelli/node-micropub-express',
    'voxpelli/node-pg-pubsub',
    'voxpelli/node-promised-retry'
  ],
  extensions: ['js'],
  eslintrc: require('./eslintrc.json')
};
