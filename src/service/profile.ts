import oi from "once-init";
const profile = ref<User.Response.Profile>();
export default profile;
export const getProfile = oi(async () => {
  const res = await api.user.getProfileReq();
  profile.value = res.data;
  return res.data;
}).init;
