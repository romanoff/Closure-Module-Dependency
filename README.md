# 1. Description
This simple example shows how to load goog.ui.CustomButton dynamically inside another module. It's little more complicated than loading file without dependencies or with dependencies, but that have already been loaded. The difference is that in modules_info file all the dependencies has to be added that hasn't been loaded yet. 

# 2. Launching

* Add symlink to closure_library into Closure-Module-Dependency folder (symlink should be to trunk folder in svn where closure and third_party folders are)
* Run some simple server that will be able to deliver static files content. For example "python -m SimpleHTTPServer 8000" in the folder of Closure-Module-Dependency project
* Go to "http://localhost:8000/main.html" page and click "Click To Load Module" button. "goog.ui.CustomButton" button will appear. In order to see that module has been loaded dynamically you can open "Network" tab in chrome. (70 requests are made on initial load and 23 more requests while loading "Click To Load Module"). Also you can type "goog.ui.CustomButton" in javascript console that will return error on initial load and CustomButton constructor javascript after module has been loaded.

In general I used calcdeps.py to calculate dependencies for app.js (and app_init.js) and detect what dependencies hasn't been loaded that will be required for loaded_module.js.

# 3. Css

Have experimented a little bit with css and added loaded_module_css.js file that is loaded as well with loaded_module. It actually adds all css goog.ui.CustomButton needs dynamically without having to load css files.