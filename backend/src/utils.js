export const getUserId = ctx => {
  if (ctx.request.session.userId) {
    return ctx.request.session.userId;
  }

  return null;
};

export const isAuthenticated = ctx => {
  if (ctx.request.session.userId) {
    return true;
  }

  return false;
};
