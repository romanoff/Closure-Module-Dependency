goog.provide('fastmock.loaded_module');
goog.require('goog.ui.CustomButton');
goog.require('goog.dom');

fastmock.loaded_module = function(){
    var placeholder = goog.dom.getElement('button-placeholder');
    var button = new goog.ui.CustomButton('goog.ui.CustomButton');
    button.render(placeholder);
}
goog.addSingletonGetter(fastmock.loaded_module);