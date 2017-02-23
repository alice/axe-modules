axe.configure({
    reporter: 'v1',
    checks: [{
          id: 'is-focusable',
          evaluate: isFocusable.toString(),
          enabled: true,
          metadata: {
          impact: 'moderate',
            messages: {
              pass: 'what did I do right or not do wrong',
              fail: 'what did I do wrong or fail to do correctly'
            }
          }
    }],
    rules: [{
           id: 'keyboard-reachable',
           selector: ':not(button):not(a):not(input):not(textarea):not(select):not(area)',
           matches: isClickableElement.toString(),
           all: [ 'is-focusable' ],
           any: [],
           none: [],
           tags: ["custom"],
           enabled: true
    }],
    data: {
      rules: {
        'keyboard-reachable': {
          description: 'description of the rule logic',
          help: 'what is wrong when the rule fails'
        }
      }
    }
});
