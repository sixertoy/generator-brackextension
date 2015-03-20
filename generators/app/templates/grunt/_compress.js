/*jslint indent: 4 */
/*global module */
module.exports = function (grunt, options) {
    return {
        main: {
            options: {
                archive: 'build/Releases/<%= author.name %>.<%= project.name %>_<%= package.version %>.zip'
            },
            files: [{
                src: '<%= package.files %>',
                dest: '<%= author.name %>.<%= project.name %>/'
            }]
        }
    };
};
