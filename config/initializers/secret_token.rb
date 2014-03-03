# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.

# DataSchool::Application.config.secret_key_base = ENV["SECRET_TOKEN"] 

DataSchool::Application.config.secret_token = 'your current token'
DataSchool::Application.config.secret_key_base = '3249db249709f7ae16d86ad4724e2216deb1a5bf6c4f9ae231a8c6d99400713fdd35a034b551bedad07ba019e7a73193b752c205e7a5fee09185c25bef2c1782' # this needs to be added