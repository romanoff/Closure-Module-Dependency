goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');
goog.require('fastmock.ModulesInfo');
goog.require('fastmock.app');

var app = fastmock.app.getInstance();

app.setClickHandler(function(event){
    var moduleManager = goog.module.ModuleManager.getInstance();
    var callback = function() {
	fastmock.loaded_module.getInstance();
    }
    moduleManager.execOnLoad('loaded_module', callback);
});

var moduleManager = goog.module.ModuleManager.getInstance();
var moduleLoader = new goog.module.ModuleLoader();

moduleManager.setLoader(moduleLoader);

moduleManager.setAllModuleInfo(fastmock.ModulesInfo.MODULES_INFO);
moduleManager.setModuleUris(fastmock.ModulesInfo.MODULES_URIS);

moduleManager.setLoaded('app');