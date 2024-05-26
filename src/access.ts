/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.LoginUserVO } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canUser: !(currentUser===undefined||currentUser===null),
    canAdmin: !(currentUser===undefined||currentUser===null) && currentUser.userRole === 'admin',
  };
}
