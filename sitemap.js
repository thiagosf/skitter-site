'use strict';

import defaults from 'lodash/defaults'
import path from 'path'
import through from 'through2'
import fs from 'fs'

var pluginName = 'gulp-simple-sitemap'
var entries = []

module.exports = (options) => {
  var config = defaults(options || {}, {
    file_name: 'sitemap.xml',
    site_url: null,
    dest: './'
  })
  return through.obj(
    (file, enc, callback) => {
      if (file.isDirectory()) return callback(null, file)
      if (/404\.html?$/i.test(file.relative)) return callback()
      entries.push(file);
      callback();
    },
    (callback) => {
      var xml = [];
      xml.push('<?xml version="1.0" encoding="UTF-8"?>');
      xml.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      for (let k in entries) {
        let filename = entries[k].relative;
        let priority = '0.5'
        if (filename == 'index.html') {
          filename = ''
          priority = '0.8'
        }
        xml.push('<url>')
          xml.push('<loc>' + config.site_url + '/' + filename + '</loc>')
          xml.push('<lastmod>2016-07-22 20:50:00</lastmod>')
          xml.push('<changefreq>monthly</changefreq>')
          xml.push('<priority>' + priority + '</priority>')
        xml.push('</url>')
      }
      xml.push('</urlset>')
      fs.writeFile(
        path.join(config.dest, config.file_name),
        xml.join("\n"),
        callback
      )
    }
  )
}
