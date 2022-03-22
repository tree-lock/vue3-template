import oi from "once-init";
const profile = ref<Auth.Response.Profile>();
export default profile;
export const getProfile = oi(async () => {
  const res = await api.auth.getProfileReq();
  profile.value = res.data;
  return res.data;
}).init;
