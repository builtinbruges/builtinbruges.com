---
title: Date validation in Rails
layout: post
---
If you're using `:date` fields in your Rails models, you probably encoutered one ore more situations where you'd want to use some kind of date validation.

I came accross this [great gem][date_validator]: [date_validator][date_validator].

Install it via your `Gemfile` and `sudo bundle install` and boom! Validating dates is now a piece of cake:

    validates :expiration_date,
      :date => { :after => Time.now, :before => Time.now + 1.year }


[date_validator]: https://github.com/codegram/date_validator