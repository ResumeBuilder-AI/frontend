import { useEffect, useState } from "react";
import { Editor } from "../components/Editor"
import { ChatBot } from "./ChatBot";
import { useParams } from "react-router-dom";
import socket from '../services/socket';
import {UntitledDoc, socket_events} from "../config/config"

export function ResumeAI(){
    
    const [documentTitle, setDocumentTitle] = useState(UntitledDoc);
    const [editorData, setEditorData] = useState("");
    const {slug: docId} = useParams();

    socket.emit(socket_events.V1GetDocumentMeta, {docId});
    socket.on(socket_events.V1GetDocumentMeta, (data) => {
        if(data.title){
            setDocumentTitle(data.title)
        }
    });

    socket.emit(socket_events.V1GetResumeData, {docId});
    socket.on(socket_events.V1GetResumeData, (data) => {
        setEditorData(data.text);
    })

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if(documentTitle === UntitledDoc) return;
          socket.emit(socket_events.V1SetDocumentMeta, {title: documentTitle, docId});
            socket.on(socket_events.V1SetDocumentMeta, (data) => {
                if(data.title){
                    setDocumentTitle(data.title)
                }
            })
        }, 1000);
    
        return () => clearTimeout(delayDebounceFn);
      }, [documentTitle]);

    const handleTitleChange = (e) => {
        e.preventDefault();
        setDocumentTitle(e.target.value);
    };

    const editorDataChangeHandler = (data) => {
        socket.emit(socket_events.V1SetResumeData, {docId, text: data});
    }

    return (
        <div className="flex">
            <div className="w-3/4">

            <div>
                <input
                    id='i1'
                    type="text"
                    value={documentTitle}
                    onChange={handleTitleChange}
                    className="w-full px-4 py-2 border-none rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
                <Editor onChange={editorDataChangeHandler} data={editorData} />
            </div>
            <div className="w-1/4">
                <ChatBot/>
            </div>
        </div>
    )
}