import * as auth from "./auth";
import * as user from "./user";
import "./mock";

// 开启mock，如果要关闭mock，则注释下面这行
/** 全局注册为api */
export default { auth, user };
