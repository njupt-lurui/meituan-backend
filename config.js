module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/takeaway',    //数据库地址
    notifyUrl: 'http:// 10.133.246.38:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'p0q',  //仓库名称 //七牛云bucket
    AccessKey: 'Yg6L2io7PCaUV7NoCnacv4PrKP6uhJVRepac-h48',  //自己手动配置 //七牛云accessKey
    SecretKey: 'tp60D6rW80cCAzbAbagorGXUf5SQ4Dxaq-Wp6joj',  //自己手动配置  //七牛云secretKey
    tencentkey: 'KKLBZ-43PWU-BEHVK-BROZE-3GOF6-PEBZQ',  //自己手动配置      //腾讯位置secreKey
    tencentkey2: '',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
};


