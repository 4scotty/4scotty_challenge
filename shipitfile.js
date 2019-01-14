module.exports = shipit => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      branch: 'master',
      repositoryUrl:
        'https://github.com/pgendre/4scotty_challenge',
      deployTo: '/var/www/rock_paper_scissors'
    },
    staging: {
      servers: [
        {
          // Staging proxy server IP.
          host: 'MY STAGING SERVER URL',
          user: 'root'
        }
      ],
      branch: 'master'
    },
    production: {
      servers: [
        {
          host: 'MY PROD SERVER URL 1',
          user: 'root'
        },
        {
          host: 'MY PROD SERVER URL 2',
          user: 'root'
        }
      ],
      branch: 'production'
    }
  })
  // Set nginx as data owner once static files are uploaded.
  shipit.on('deployed', () => {
    shipit.remote('chown -R nginx:nginx /var/www/rock_paper_scissors/releases')
  })
}
