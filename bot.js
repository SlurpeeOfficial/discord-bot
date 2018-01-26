const Discord = require("discord.js");

const TOKEN = "NDAxODEwNjY0MDM4ODU4NzYy.DTvnVA.1BfcDWFK1qHu1HMT44CpHfBjTXw"
const PREFIX = "%"

let items = ["The country with the largest number of WWII causalities was Russia, with over 21 million.", "For every five German soldiers who died in WWII, four of them died on the Eastern Front.", "It is estimated that 1.5 million children died during the Holocaust.","Approximately 1.2 million of them were Jewish and tens of thousands were Gypsies.", "Eighty percent of Soviet males born in 1923 didn’t survive WWII.","Between 1939 and 1945, the Allies dropped 3.4 million tons of bombs, which averaged to 27,700 tons per month.","Russia and the Red Army were accused of several war crimes, including systematic mass rape (over 2 million German women aged 13-70 were allegedly raped by the Red Army) and genocide.","Even after the Allies arrived, many concentration camp prisoners were beyond help. In Bergen-Belsen, for example, 13,000 prisoners died after liberation. Nearly 2,500 of the 33,000 survivors of Dachau died within six weeks of liberation.","Most historians agree that WWII began when Germany invaded Poland on September 1, 1939. Others say it started when Japan invaded Manchuria on September 18, 1931. And some scholars suggest WWII is actually a continuation of WWI, with a break in between.","Max Heiliger was the fictitious name the SS used to establish a bank account in which they deposited money, gold, and jewels taken from European Jews.","The longest battle of WWII was the Battle of the Atlantic, which lasted from 1939-1945.","The original abbreviation of the National Socialist Party was Nasos. The word “Nazi” derives from a Bavarian word that means “simple minded” and was first used as a term of derision by journalist Konrad Heiden (1901-1966)."."Approximately 600,000 Jews served in the United States armed forces during WWII. More than 35,000 were killed, wounded, captured, or missing. Approximately 8,000 died in combat. However, only two Jewish soldiers were awarded the Medal of Honor in WWII.","The Battle of the Bulge is the largest and deadliest battle for U.S. troops to date, with more than 80,000 American casualties.","More Russians (military and civilians) lost their lives during the Siege of Leningrad than did American and British soldiers combined in all of WWII.","The Nazis murdered approximately 12 million people, nearly 6 million of those being Jews killed in the Holocaust (“whole burnt”).","During WWII, the Japanese launched 9,000 “wind ship weapons” of paper and rubberized-silk balloons that carried incendiary and anti-personnel bombs to the U.S. More than 1,000 balloons hit their targets and they reached as far east as Michigan. The only deaths resulting from a balloon bomb were six Americans (including five children and a pregnant woman) on a picnic in Oregon."];

let random_item = items[Math.floor(Math.random() * items.length)];

console.log("items: ", items);
console.log("random_item: ", random_item);

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Rootin Tootin Ready For Shootin");

bot.user.setGame("WWII Facts!")

});

bot.on("message", function(message) {
    console.log(message.content);
    console.log("items: ", items);
    console.log("random_item: ", random_item);
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "fact":
        var item = items[Math.floor(Math.random()*items.length)];
        message.channel.send(item = items[Math.floor(Math.random()*items.length)]);
            break;

    }
});

bot.login(TOKEN);


//Credit for facts www.factretriever.com
//var items = Array["The country with the largest number of WWII causalities was Russia, with over 21 million.","For every five German soldiers who died in WWII, four of them died on the Eastern Front."];
