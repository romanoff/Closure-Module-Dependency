namespace  :build do
  task :deps do
    `python closure_library/closure/bin/calcdeps.py -o deps -p closure_library/closure/goog --dep closure_library/closure/goog -p js > js/deps.js`
  end
end	
