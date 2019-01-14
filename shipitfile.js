module.exports = shipit => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      branch: 'master',
      repositoryUrl:
        'https://pierre.gendre@git.wifirst.net/webapps/collecte.git',
      deployTo: '/var/www/collecte'
    },
    staging: {
      servers: [
        {
          // Staging proxy server IP.
          host: '10.4.3.148',
          user: 'root'
        }
      ],
      branch: 'master'
    },
    production: {
      servers: [
        {
          host: 'collecte-si-01-ild2.management.si.wifirst.net',
          user: 'root'
        },
        {
          host: 'collecte-si-01-pa2.management.si.wifirst.net',
          user: 'root'
        }
      ],
      branch: 'production'
    }
  })
  // Set nginx as data owner once static files are uploaded.
  shipit.on('deployed', () => {
    shipit.remote('chown -R nginx:nginx /var/www/collecte/releases')
  })
}
