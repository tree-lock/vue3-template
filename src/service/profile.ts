const profile = ref<User.Response.Profile>();
export default profile;
export const getProfile = async () => {
  const res = await api.user.getProfileReq();
  profile.value = res.data;
  return res.data;
};
