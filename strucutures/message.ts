import {Member} from "./member";
import {User} from "./user";
import {Role} from "./role";
import {Channel} from "./channel";
import {
    Activity,
    Attachment,
    Component,
    Embed,
    Interaction,
    Reaction, Sticker,
    StickerItem
} from "../interfaces";

export class Message {
    id: string
    channelID: string
    guildID: string
    author: User
    member: Member
    content: string
    tts: boolean
    mentionEveryone: boolean
    mentionRoles: Array<Role>
    mentionChannels: Array<Channel>
    mentions: Array<User>
    attachments: Array<Attachment>
    embeds: Array<Embed>
    reactions: Array<Reaction>
    pinned: boolean
    webhookID: boolean
    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22
    activity: Activity
    application: any
    applicationID: string
    flags: number
    referencedMessage: Message
    interaction: Interaction
    thread: Channel
    components: Array<Component>
    stickerItems: Array<StickerItem>
    stickers: Array<Sticker>

    constructor(data) {
        this.id = data.id
        this.channelID = data.channel_id
        this.guildID = data.guild_id
        this.author = new User(data.author)
        this.channelID = data.channel_id
        this.member = new Member(data.member)
        this.content = data.content
        this.tts = data.tts
        this.mentionEveryone = data.mention_everyone
        this.mentionRoles = data.mention_roles
        this.mentionRoles = data.mention_roles.map(role => new Role(role))
        this.mentionChannels = data.mentionChannels
        this.mentions = data.mentions.map(user => new User(user))
        this.attachments = data.attachments
        this.embeds = data.embeds
        this.reactions = data.reactions
        this.pinned = data.pinned
        this.webhookID = data.webhook_id
        this.type = data.type
        this.activity = data.activity
        this.application = data.application
        this.applicationID = data.application_id
        this.flags = data.flags
        this.referencedMessage = new Message(data.referenced_message)
        this.interaction = data.interaction
        this.thread = new Channel(data.thread)
        this.components = data.components
        this.stickerItems = data.stickerItems
        this.stickers = data.stickers
    }
}