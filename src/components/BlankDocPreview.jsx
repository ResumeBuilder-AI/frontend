import { useNavigate } from 'react-router-dom';
import socket from '../services/socket';
import {socket_events} from "../config/config"

export function BlankDocumentPreview(){
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        socket.emit(socket_events.V1CreateBlankDocumentTempId);
        socket.on(socket_events.V1CreateBlankDocumentTempId, (data) => {
            navigate(`/resume/${data.id}/edit`);
        })

    }

    return (
        <div onClick={handleClick}>
            <div className="w-40 h-48 border rounded text-center flex items-center justify-center transition-transform hover:border-blue-500">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-gray-600 hover:text-blue-500"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                />
                </svg>
            </div>
            <h2 className="px-1 text-md font-semibold">Blank Document</h2>
        </div>
    );
  };