import { Client } from "../../Client";
import { Payload, Events, WSstatus } from "../../../utils/Constants"

export default function (client: Client, data: Payload, shard: any) {
    /* let guild = client.guilds.cache.get(data.d.id)
     if (guild) {
         if (!guild.available && !data.d.unavailable) {
             // A newly available guild
             guild._patch(data);
         }
     } else {
         // A new guild
         data.d.shardID = shard.id;
         guild = client.guilds.add(data.d);
         if (client.ws.status === WSstatus.READY) {
 
             client.emit(Events.GUILD_Create, guild)
         }
     }*/
}