
export function DocumentPreview({ title, content }){
    return (
        <div className="flex flex-wrap">
          <div>
            <div className="w-40 h-48 border rounded-md overflow-hidden transition-transform hover:border-blue-500">
              <img
                src={content}
                alt="Document Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="px-1 text-lg font-semibold">{title}</h2>
          </div>
        </div>
      );
  };