import React, {useEffect, useRef} from 'react';

export function Editor({onChange, data}){
    const editorRef = useRef(null);
    let j;

    useEffect(() => {
        j = Jodit.make('#editor', {
            askBeforePasteFromWord: true,
            pasteFromWord: {
                enable: true,
                convertUnitsToPixel: true
            },
            beautifyHTML: false,
            toolbarAdaptive: false,
	        defaultActionOnPaste: Jodit.INSERT_AS_HTML,
            width: "100%",
            height:"100vh",
        })

        if (data) {
            j.value = data;
        }
      

        j.events.on('mouseup', () => up(j));
        
        j.events.on('change', () => change(j));
        
        return () => {
            j.events.off('mouseup');
            j.events.off('change');
            j = null;
        }
        
    }, [data])
    
    const up = (_) => {
        console.log(window.getSelection().toString())
    }
    
    const change = (_) => {
        onChange(editorRef.current.value)
    }

    return (
            <textarea id="editor" ref={editorRef} placeholder=""></textarea>
    )
};
