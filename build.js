require('esbuild').build({
	logLevel: 'info',
  entryPoints: ['src/App.jsx', 'src/index.jsx'],
  bundle: true,
	minify: true,
  outdir: 'dist',
}).catch(() => process.exit(1))
