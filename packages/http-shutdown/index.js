function httpShutdown(server) {
  if (!server || typeof server.close !== 'function') {
    throw new Error('http-shutdown: a server instance with close() is required')
  }

  if (typeof server.shutdown === 'function') {
    return server
  }

  server.shutdown = function shutdown(callback) {
    this.close(callback)
  }

  server.withShutdown = () => server

  return server
}

module.exports = httpShutdown
module.exports.default = httpShutdown
