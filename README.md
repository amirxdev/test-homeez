# test-homeez
Homeez Sample Project

## using package:
```
"body-parser": "^1.19.0",
"cors": "^2.8.5",
"express": "^4.17.1",
"pg": "^8.4.1",
"pg-hstore": "^2.3.3",
"sequelize": "^6.3.5"
```

## project structure:
## 1) Backend (backend-node-express)
```
server.js
package.json
package-lock.json
app
    config
        db.config.js
    controllers
        api
            quotation.ctrl.js
    models
        index.js
        quotation.model.js
    routes
        api
            quotation.routes.js
```