/*jslint indent: 4 */
/*global module */
module.exports = function (grunt, options) {
    return {
        main: {
            options: {
                archive: 'build/Releases/<%= author.name %>.<%= project.name %>_<%= ldim %> package.version <%= rdim %>.zip'
            },
            files: [{
                src: '<%= ldim %> package.files <%= rdim %>',
                dest: '<%= author.name %>.<%= project.name %>/'
            }]
        }
    };
};
