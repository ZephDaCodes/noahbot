module.exports = {
    name:'kick',
    description: 'kick people from your life',
    execute(client, message, args){
        const {member, mentions} = message
        
        if(member.hasPermission('KICK_MEMBERS')){
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`${user.tag} just got the yeet`)
            }else{
                message.channel.send(`<@${member.id}> who am I going to kick? dumb`)
            }
        }else{
            message.channel.send(`<@${member.id}> you don't even have the perms! lol!`)
        }
    }
}
