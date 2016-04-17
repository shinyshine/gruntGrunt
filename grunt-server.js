module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
            server: {
                options: {
                    protocol: 'http',
                    port: 8000,
                    hostname: '*',
                    keepalive: true,
                    open: true,
                    base: ['./app']
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

}