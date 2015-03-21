/*jslint indent: 4 */
/*global module */
module.exports = {
    less: {
        files: ['src/*.less', '!src/*.css'],
        tasks: ['less', 'autoprefixer']
    }
};
