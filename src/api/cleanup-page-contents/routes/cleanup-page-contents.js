module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/cleanup-page-contents',
      handler: 'cleanup-page-contents.cleanup',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
