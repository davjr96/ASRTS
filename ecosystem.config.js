/media/danny/Windows/Users/Danny/OneDrive/Documents/electronics/Timer
module.exports = {
  apps: [{
    name: 'asrts',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'vassttimes.com',
      key: '/media/danny/Windows/Users/Danny/OneDrive/Documents/electronics/Timer',
      ref: 'origin/master',
      repo: 'git@github.com:davjr96/ASRTS.git',
      path: '/home/ubuntu/ASRTS',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
