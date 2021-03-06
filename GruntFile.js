module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                "*.js",
                "*.json",
                "data-server/data/*.js",
                "data-server/data/*.json",
                "class-exercises/*/*.js",
                "class-exercises/*/*.json",
                "class-samples/*/*/*.js",
                "class-samples/*/*/*.json"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'https://github.com/MoonTahoe/d3-intro.git',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('check', ['jshint']);
    grunt.registerTask('default', ['check', 'bump']);

};