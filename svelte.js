const { compile } = require('svelte');

exports.translate = function(load) {
    let { code, map } = compile(load.source, {
      filename: load.address,
      format: 'es',
      onerror: (err) => {
        console.log(err.message);
        this.emitError(err.message);
      },
      onwarn: (warn) => {
        console.log(warn.message);
        this.emitWarn(warn.message);
      }
    });

		load.source = code;
		load.metadata.sourceMap = map;
}
