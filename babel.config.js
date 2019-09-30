module.exports = {
  presets: [
    // responsável por importar as funcionalidades que o react não entende
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
