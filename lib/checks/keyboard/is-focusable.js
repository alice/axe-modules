function isFocusable(node) {
    return axe.commons.dom.isFocusable(node) && node.getAttribute('tabindex') > -1;
}
