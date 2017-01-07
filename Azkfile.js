/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
// Adds the systems that shape your system
systems({
  'skitter-site': {
    depends: [],
    image: {"docker": "azukiapp/node"},
    provision: [
      "npm install",
      "node_modules/.bin/bower install --allow-root",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: ["npm", "start"],
    wait: 20,
    mounts: {
      '/azk/#{manifest.dir}': sync("."),
      '/azk/#{manifest.dir}/node_modules': persistent("./node_modules"),
      '/azk/#{manifest.dir}/bower_components': persistent("./bower_components"),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "3000/tcp",
    },
    envs: {
      NODE_ENV: "dev",
      PORT: "3000",
    },
  },
});
