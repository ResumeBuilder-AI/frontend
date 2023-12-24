import { useEffect, useState } from "react"
import { ChatArea } from "../components/ChatArea"
import { TextAreaBox } from "../components/TextAreaBox"
import { Bot, Person } from "../config/config";
import socket from '../services/socket';
import {socket_events} from "../config/config"
import { useParams } from "react-router-dom";

export function ChatBot(){

    const [chats, setChats] = useState([{source: Bot, text: 'hi there!'}]);
    const [input, setInput] = useState('');
    const {slug: docId} = useParams();

    const handleTextInput = (input) => {
        if(!input || !input.length) return;
        const data = {source: Person, text: input};
        setChats([...chats, data]);
        setInput(data.text);
    }

    //fetch session chats
    useEffect(() => {
        socket.emit(socket_events.V1ResumeBuilderSessionChats, {docId: docId});
        socket.on(socket_events.V1ResumeBuilderSessionChats, (data) => {
            setChats(data.chats);
        })
    }, [])

    useEffect(() => {
        socket.emit(socket_events.V1ResumeBulderChat, {text: input, source: Person, docId: docId});
        socket.on(socket_events.V1ResumeBulderChat, (d) => {
            // console.log({data})
            setChats([...chats, d]);
        })
    }, [input])

    return (
        <div className="min-h-screen flex flex-col">
            <div className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Chat</h1>
            </div>

            <div className="flex-1 grid grid-rows-2">
                <div className="row-span-11 px-4 py-2 max-h-[80vh] overflow-y-auto">
                    <ChatArea chats={chats}/>
                </div>
                <div className="row-span-1 border-t">
                    <TextAreaBox submit={handleTextInput} />
                </div>
            </div>
        </div>
    )
}

