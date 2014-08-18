#!/bin/bash
jekyll build --lsi && rsync -avz _site/ builtinbruges.com:/www/