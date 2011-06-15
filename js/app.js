goog.provide('fastmock.app');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.cssom');


/**
 * @constructor
 */
fastmock.app = function(){
    var body = goog.dom.getElementsByTagNameAndClass('body')[0];
    var appLoaded = goog.dom.createDom('div', undefined, 'App loaded');
    goog.dom.appendChild(body, appLoaded);
    var button = goog.dom.createDom('button', undefined, 'Click To Load Module');
    goog.dom.appendChild(body, button);
    goog.events.listen(button, goog.events.EventType.CLICK, function(event){
	this.clickHandler_();
    }, undefined, this);
    var googButtonPlaceholder = goog.dom.createDom('div', {'id':'button-placeholder'});
    goog.dom.appendChild(body, googButtonPlaceholder);
}
goog.addSingletonGetter(fastmock.app);

/**
 * Adding null function
 */
fastmock.app.prototype.clickHandler_ = goog.nullFunction;

/**
 * @param {Function} clickHandler
 */
fastmock.app.prototype.setClickHandler = function(clickHandler){
    this.clickHandler_ = clickHandler;
}