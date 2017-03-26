
String.prototype.inputVerify = function(len){
        if (!this) {
          return "输入不能为空"
        }

        if (this.length > len) {
          return `输入请保持在1~${len}个字符`
        }
        if (this.match(/['\s"!@#$%^&*<>{}]/)) {
          return "输入不能包含特殊字符"
        }
      return true
}
