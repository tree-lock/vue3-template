import * as auth from "./auth";
import * as user from "./user";
import * as mock from "./mock";
// 开启mock，如果要关闭mock，则注释下面这行
mock.startMock();
export default { auth, user, mock };
