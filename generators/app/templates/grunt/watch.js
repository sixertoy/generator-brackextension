/*jslint indent: 4 */
/*global module */
module.exports = {
    less: {
        files: ['src/**/*', '!src/**/*.css'],
        tasks: ['less', 'autoprefixer']
    }
};
