var compile = require('svelte').compile;

exports.translate = function(load) {
    var output = compile(load.source, {
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

		load.source = output.code;
		load.metadata.sourceMap = output.map;
}
