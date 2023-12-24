import { Bot, Person } from "../config/config"

export function ChatArea({chats}) {
    return (
        <div>
            {
                chats.map((chat, i) => {
                    if(chat.source === Person){
                        return (
                            <div key={i} style={{ textAlign: 'right'}}>
                                {chat.text}
                            </div>
                        )
                    }
                    if(chat.source === Bot){
                        return (
                            <div key={i} style={{ textAlign: 'left'}}>
                                {chat.text}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}