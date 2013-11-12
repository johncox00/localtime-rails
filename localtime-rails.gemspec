# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'localtime/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "localtime-rails"
  spec.version       = Localtime::Rails::VERSION
  spec.authors       = ["johncox00"]
  spec.email         = ["john@mach19.com"]
  spec.description   = %q{Localize server times in your view.}
  spec.summary       = %q{Easy way to localize times in a UI by implementing a .local-time class.}
  spec.homepage      = "https://github.com/johncox00/localtime-rails"
  spec.license       = "MIT"

  spec.files         = Dir["{lib,vendor}/**/*"] + ["README.md"]#`git ls-files`.split($/)
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
