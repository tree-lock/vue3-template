/** oi是一个防止重复发出Promise请求的封装库 */
import oi from "once-init";
const profile = ref<User.Response.Profile>();
export default profile;
// oi.init 返回的函数反复调用也只会执行一次
export const getProfile = oi(async () => {
  const res = await api.user.getProfileReq();
  profile.value = res.data;
  return res.data;
}).init;
