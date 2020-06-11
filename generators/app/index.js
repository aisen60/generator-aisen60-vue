const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  //使用prompting生命周期方法，在命令行发起对用户的询问。
  prompting() {
    // 这个方法接收一个数组作为参数，并且返回一个promise对象。所以需要对这个方法进行 return，这样的话 yeoman 在工作的时候会有更好的异步流程控制。
    // 数组中的每一项是一个对象，每一个对象代表着要向用户循环的问题。
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "your project name",
        default: this.appname
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    // 把每一个文件都通过模板转换到目标路径
    const templates = [
      ".browserslistrc",
      ".editorconfig",
      ".env.development",
      ".env.production",
      ".eslintrc.js",
      ".gitignore",
      "babel.config.js",
      "package.json",
      "postcss.config.js",
      "README.md",
      "public/favicon.ico",
      "public/index.html",
      "src/App.vue",
      "src/main.js",
      "src/router.js",
      "src/assets/logo.png",
      "src/components/HelloWorld.vue",
      "src/store/actions.js",
      "src/store/getters.js",
      "src/store/index.js",
      "src/store/mutations.js",
      "src/store/state.js",
      "src/utils/request.js",
      "src/views/About.vue",
      "src/views/Home.vue",
    ];

    templates.forEach((item) => {
      // item => 每个文件路径
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      );
    });
  }
};
