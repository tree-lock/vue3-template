const profile = ref<User.Response.Profile>();
export default profile;
// oi.init 返回的函数反复调用也只会执行一次
export const getProfile = async () => {
  const res = await api.user.getProfileReq();
  profile.value = res.data;
  return res.data;
};
