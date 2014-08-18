## Description

This repo contains the layout and posts of the website on [builtinbruges.com](http://www.builtinbruges.com)

## Requirements

The blog is built in `jekyll` v2.2. Run `bundle install` to install all required gems. Make sure `gsl` is installed before installing the `rb-gsl` gem. You can do this with homebrew by running `brew install gsl`.

## Running/building this blog locally

Make sure all requirements are installed and run `jekyll build`. All content from the folder will be generated in a folder called `_site`. To serve this blog locally on http://0.0.0.0:4000, run `jekyll serve --watch`.

## Publishing

After completing the necessary changes, run `./publish.sh`. After entering your hosts ssh password, the website should be published via `rsync`.

