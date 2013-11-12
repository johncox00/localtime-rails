# Localtime::Rails

This gem just packages up some javascript that will help turn server timestamps (i.e. created_at) to local browser time.

## Installation

Add this line to your application's Gemfile:

    gem 'localtime-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install localtime-rails

## Usage

Let's say you're listing users...
    
    %table
      - @users.each do |user|
        %tr
          %td= user.name
          %td= user.created_at

...user.created_at will yield something like this:
    
    2013-11-12 21:10:02 UTC

Now, you can take that "created_at" server time stamp, and make it relevant to the user...
    
    %table
      - @users.each do |user|
        %tr
          %td= user.name
          %td.local-time
            = user.created_at


...now user.created_at will look something like this:

    11/12/2013 7:10 AM

If you have some sort of asynchronous Javascript that's executing after the initial page load, you can always call the function...

    localizeTime();

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
