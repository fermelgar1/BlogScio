module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e42335626df691768910371fd38298f0'),
  },
});
