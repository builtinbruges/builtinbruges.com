require 'jekyll_asset_pipeline'

module JekyllAssetPipeline

  # Sass Preprocessing
  class SassConverter < JekyllAssetPipeline::Converter
    require 'jekyll_asset_pipeline'
    require 'compass'

    Compass.sass_engine_options[:load_paths].each do |path|
      Sass.load_paths << path
    end

    def self.filetype
      '.sass'
    end

    def convert
      Sass::Engine.new(@content, syntax: :sass).render
    end
  end

  # CSS Compression
  class CssCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      # @content.inspect
      YUI::CssCompressor.new.compress(@content)
    end
  end

  # Javascript Compression
  class JavaScriptCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.js'
    end

    def compress
      YUI::JavaScriptCompressor.new(munge: true).compress(@content)
    end
  end
end