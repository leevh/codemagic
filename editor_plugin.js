(function() {
    tinymce.PluginManager.requireLangPack('codemagic');

    tinymce.create('tinymce.plugins.CodeMagic', {
        init : function(ed, url) {
            ed.addCommand('mceCodeMagic', function() {
                ed.windowManager.open({
                    file : url + '/codemagic.htm',
                    width : 900 + parseInt(ed.getLang('codemagic.delta_width', 0)),
                    height : 550 + parseInt(ed.getLang('codemagic.delta_height', 0)),
                    inline : false
                }, {
                    plugin_url : url
                });
            });

            ed.addButton('codemagic', {
                title : 'codemagic.editor_button',
                cmd : 'mceCodeMagic',
                image : url + '/img/code.png'
            });
        },

        getInfo : function() {
            return {
                longname : 'CodeMagic - replacement dialog for entering HTML',
                author : 'Sutulustus (fork by Andrew Collington)',
                authorurl : 'https://github.com/amnuts/codemagic.git',
                infourl : 'https://github.com/amnuts/codemagic.git'
            };
        }
    });

    tinymce.PluginManager.add('codemagic', tinymce.plugins.CodeMagic);
})();