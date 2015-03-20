/**
 * Brackets Extension
 * https://github.com/sixertoy/generator-brackextension
 *
 * Copyright (c) 2015 Matthieu Lassalvy
 * Licensed under the MIT license.
 *
 * Generate folder and files for a brackets extension
 *
 * @insatll npm install grunt-cli yo bower -g
 * @usage yo brackextension
 *
 *
 */
/*global require, process, module */
(function () {

    'use strict';

    var ProjectGenerator,
        Q = require('q'),
        path = require('path'),
        yosay = require('yosay'),
        lodash = require('lodash'),
        slugify = require('slugify'),
        AppBones = require('appbones'),
        generators = require('yeoman-generator');

    ProjectGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);

            this.option('skip-install', {
                desc: 'Skip the bower and node installations',
                defaults: false
            });

        },

        initializing: function () {
            // custom templates delimiter
            this.config.set('rdim', '%>');
            this.config.set('ldim', '<%=');
            if (!this.options['skip-install']) {
                this.log(yosay('Hello sir, welcome to the awesome Adobe Brackets extension generator!'));
            }

        },

        prompting: {
            askForIdentity: function () {

                var $this = this,
                    prompts = [],
                    done = this.async();

                // project name
                prompts.push({
                    type: 'input',
                    name: 'projectname',
                    message: 'Project name',
                    default: slugify(this.determineAppname())
                });

                prompts.push({
                    type: 'input',
                    name: 'username',
                    message: 'Repository user name',
                    default: this.user.git.name() || process.env.user || process.env.username
                });

                prompts.push({
                    type: 'input',
                    name: 'useremail',
                    message: 'Repository user email',
                    default: this.user.git.email() || 'you@mail.com'
                });

                // project name
                prompts.push({
                    type: 'input',
                    name: 'projectdescription',
                    message: 'Project description',
                    default: 'Place your project\'s description here'
                });

                prompts.push({
                    type: 'input',
                    name: 'projectrepository',
                    message: 'Project repository url',
                    default: function (values) {
                        return 'https://github.com' + '/' + values.username + '/' + values.projectname;
                    }
                });

                this.prompt(prompts, function (values) {
                    this.config.set('author', {
                        name: values.username,
                        email: values.useremail
                    });
                    this.config.set('project', {
                        name: values.projectname,
                        repository: values.projectrepository,
                        description: values.projectdescription
                    });
                    done();
                }.bind(this));

            }
        },

        configuring: {

        },

        writing: function () {
            var $this = this,
                lodashOpts = {},
                done = this.async(),
                data = this.config.getAll(),
                bones = path.resolve(this.templatePath(), '../bones.yml'),
                appbones = new AppBones(this.templatePath(), this.destinationPath());
            Q.delay((function () {
                appbones.build(bones, data, lodashOpts);
            }()), 1500).then((function () {
                done();
            }()));
        },

        install: function () {
            if (!this.options['skip-install']) {
                this.npmInstall();
            }
        },

        end: function () {

        }

    });

    module.exports = ProjectGenerator;

}());
