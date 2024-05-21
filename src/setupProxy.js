const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api1',
        createProxyMiddleware({
            target: "http://192.168.1.13:5000",
            pathRewrite:{
                "^/api1":""

            },
            
            changeOrigin: true,
        })
    )
    app.use(
        '/api2',
        createProxyMiddleware({
            target: "http://192.168.4.203:8000",
            pathRewrite:{
                "^/api2":""


            },
            headers:{
                "API-x-Key":"Hello"

            },
            changeOrigin:true
           
        })

    )

};