import { insert,sqlStr } from '../dbHelps/mysql'
var crypto = require('crypto'); //加载crypto库


const authController = {
    login: async function(next) {
        var account = this.request.body.account
        var password = this.request.body.password

        if (!account || !password) {
            this.body = { status: 500, msg: "缺少参数" }
            return
        };


        if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{6,20}$/.test(password)) {
            this.body = { status: 500, msg: "密码格式不正确" }
            return;
        }

        var decipher = crypto.createHash('md5',"leviluo");

        var result = await sqlStr("select * from admin where account = ? and password = ? ", [account,decipher.update(password).digest('hex')])

        if (result.length > 0) {
            this.session.account = account
            this.body = { status: 200 }
            // this.redirect('/memberCenter');页面重定向
            return
        } else {
            this.body = { status: 500, msg: "用户或密码错误" }
            return
        }
    },
    auth: async function(next) {
        if (!this.session.account) {
            this.body = {status:600,msg:"尚未登录"}
            return
        }
        this.session.account = this.session.account
        // console.log(this.session.account)
        var result = await sqlStr("select * from admin where account = ?", [this.session.account])
        if (result.length > 0) {
            this.body = { status: 200,account:this.session.account}
            return
        } else {
            this.body = ""
            return
        }
    },
    islogin:async function(next) {
        // console.log("0000")
        if (!this.session.account) {
            this.body = { status: 500, msg: "尚未登录" }
            return
        }
        await next
        // console.log("1111")
    },
    loginOut:async function(next){
        this.session = null;
        this.body = {status:200}
    }
}
export default authController;
