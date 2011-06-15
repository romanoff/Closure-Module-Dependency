goog.require('goog.module.ModuleManager');
goog.require('fastmock.loaded_module');

fastmock.loaded_module.getInstance();

goog.module.ModuleManager.getInstance().setLoaded('loaded_module');