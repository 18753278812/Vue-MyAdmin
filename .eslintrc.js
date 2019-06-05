module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/order-in-components": ["error", { // vue文件风格校验
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }],
    "no-multi-spaces": 0, // 不能用多余的空格
    "comma-spacing": 0, // 逗号前后的空格
    "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
    "arrow-spacing": 0,// =>的前/后括号
    "no-trailing-spaces": 1, // 一行结束后面不要有空格
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "no-extra-semi": 2,//禁止多余的冒号
    'vue/script-indent': [ // 缩进
      'error',
      2,
      {
        'baseIndent': 1
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
