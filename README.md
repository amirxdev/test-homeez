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
- app
    - config
        db.config.js
    - controllers
        - api
            quotation.ctrl.js
    - models
        index.js
        quotation.model.js
    - routes
        - api
            quotation.routes.js
```

# Run the project:
## For the backend
```
cd backend-node-express
npm install
node server.js
```

## AWS Backend
```
You try the API with thie endpoint:
http://ec2-54-169-152-77.ap-southeast-1.compute.amazonaws.com:3100/api/quotations/
or
http://54.169.152.77:3100/api/quotations/
```