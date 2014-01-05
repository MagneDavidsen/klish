// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // must not contain a path suffix after the hostname - "subdirs" are not (yet) supported! 
        url: 'http://my-ghost-blog.com',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    },
    production: {
        url: process.env.MY_URL,
        mail: {
            transport: 'sendgrid',
            host: 'smtp.sendgrid.net',
            options: {
                service: 'Sendgrid',
                auth: {
                    user: process.env.SENDMAIL_USERNAME,
                    pass: process.env.SENDMAIL_PASSWORD
                }
            }
        },
        database: {
            client: 'pg',
            connection: {
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                host: process.env.POSTGRES_HOST,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    }
};

// Export config
module.exports = config;