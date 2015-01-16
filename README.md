Heroku certs:generate
================

Adds a `certs:generate` command to the Heroku Toolbelt version 4.

With this plugin installed, use `certs:generate DOMAIN` to generate a TLS key 
and either a certificate signing request or (with the `--selfsigned` option) a 
self-signed certificate for `DOMAIN`. The command will prompt you for 
information commonly included in a certificate, or you can specify these 
settings with command-line options.

This command uses the `openssl(1)` command-line tool to generate its 
certificates, and only works if you have it installed.

Compatibility Note
-------------

This plugin is written for a version of the Heroku Toolbelt currently (January 
2015) under development. If you're just some rando who uses Heroku, this 
plugin is almost certainly *not* compatible with the toolbelt installed on 
your machine. (However, a version of this feature is coming to the current 
Heroku Toolbelt very soon.)

Author
-----

Brent Royal-Gordon, Groundbreaking Software <brent@groundbreakingsoftware.com>

License
-----

Copyright (C) 2015 Groundbreaking Software LLC. Distributed under the MIT 
License.

> Permission is hereby granted, free of charge, to any person obtaining a copy 
> of this software and associated documentation files (the "Software"), to deal 
> in the Software without restriction, including without limitation the rights to 
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
> of the Software, and to permit persons to whom the Software is furnished to do 
> so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all 
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
> OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
> IN THE SOFTWARE.

