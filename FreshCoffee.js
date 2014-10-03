var Slack = require('slack-node');

domain = "msapp.slack.com";
webhookToken = "xoxp-2672387050-2672387052-2755850228-1ac0b7";

slack = new Slack(webhookToken, domain);

slack.webhook({
  channel: "#messagetest",
  username: "webhookbot",
  text: "This is a test of the message sending thingamagiger"
}, function(err, response) {
  console.log(response);
});