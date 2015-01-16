exports.topics = [{
  name: "certs",
  description: "manage ssl endpoints for an app"
}];

exports.commands = [
  {
    topic: 'certs',
    command: 'generate',
    description: 'generates a key and certificate signing request for a domain',
    help: 'Generate a key and certificate signing request (or self-signed certificate) \n\
for an app. Prompts for information to put in the certificate unless --now \n\
is used, or at least one of the --subject, --owner, --country, --area, or \n\
--city options is specified.\n\
\n\
  --selfsigned              # generate a self-signed certificate instead of a CSR\n\
  --keysize BITSIZE         # RSA key size in bits (default: 2048)\n\
  --owner NAME              # name of organization certificate belongs to\n\
  --country COUNTRY         # country of owner, as a two-letter ISO country code\n\
  --area AREA               # sub-country area (state, province, etc.) of owner\n\
  --city CITY               # city of owner\n\
  --subject SUBJECT         # specify entire certificate subject\n\
  --now                     # do not prompt for any owner information',
    args: [{name: 'domain'}],
    flags: [ // Not yet implemented in heroku-cli-util harness, but heroku-cli supports it
      {name: 'selfsigned'},
      {name: 'keysize'},
      {name: 'owner'},
      {name: 'country'},
      {name: 'area'},
      {name: 'city'},
      {name: 'subject'},
      {name: 'now'},
    ],
    needsApp: true,
    needsAuth: true,
    run: function(context) {
    }
  }
];
