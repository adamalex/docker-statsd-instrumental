(function() {
  return {
    instrumental: {
      key: process.env.INSTRUMENTAL_API_KEY,
      secure: true,
      verify_cert: true,
      timeout: 10000
    },
    debug: process.env.STATSD_DEBUG || false,
    backends: ['statsd-instrumental-backend']
  };
})();
