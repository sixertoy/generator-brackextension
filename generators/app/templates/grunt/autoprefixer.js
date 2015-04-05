/*jslint indent: 4 */
/*global module */
module.exports = function (grunt, options) {
    return {
        options: {
            remove: true,
            cascade: true,
            browsers: ['last 2 versions']
        },
        compile: {
            src: 'htmlContent/css/styles.css',
            dest: 'htmlContent/css/styles.css'
        }
    };
};
