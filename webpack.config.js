module.exports = {
  entry: './src/assessment-chart.js',
  output: {
    filename: 'assessment-chart.js'
  },
  module: {
    loaders: [
      { test:  /(src)(.+)\.js$/, loader: 'babel-loader?experimental'},
      { test: /traceur-runtime/, loader: 'imports?this=>window' }
    ]
  } 
};
