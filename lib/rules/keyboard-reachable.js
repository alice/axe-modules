axe.configure({
    reporter: 'v1',
    checks: [{
          id: 'is-focusable',
          evaluate: isFocusable
    }],
    rules: [{
           id: 'keyboard-reachable',
           selector: ':not(button):not(a):not(input):not(textarea):not(select):not(area)',
           matches: isClickableElement.toString(),
           all: [ 'is-focusable' ],
    }]
});
