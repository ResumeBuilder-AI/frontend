import { useEffect, useState } from "react"
import { BlankDocumentPreview } from "../components/BlankDocPreview"
import { Button } from "../components/Button"
import { DocumentPreview } from "../components/DocPreview"

export function ResumeHome(){

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fake = [{title: 'title', content: 'https://place-hold.it/300'},{title: 'title', content: 'https://place-hold.it/300'},{title: 'title', content: 'https://place-hold.it/300'},{title: 'title', content: 'https://place-hold.it/300'},{title: 'title', content: 'https://place-hold.it/300'},{title: 'title', content: 'https://place-hold.it/300'},{title: 'title', content: 'https://place-hold.it/300'}]
        // setDocuments(fake)
    }, [])

    return (
        <div className="px-10 py-4">

            <div className="grid grid-cols-6">

                {
                    documents.map((doc, i) => (
                        <div key={i} className="py-4">
                            <DocumentPreview title={doc.title} content={doc.content}></DocumentPreview>
                        </div>
                    ))
                }

                {
                    documents.length <= 0 &&
                    <BlankDocumentPreview/>
                }

            </div>

        </div>
    )
}