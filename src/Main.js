import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, updateNote }) => {
  const onEdit = (key, value) => {
    updateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No Note Selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => onEdit("title", e.target.value)}
          id="title"
          autoFocus
        />
        <textarea
          id="body"
          value={activeNote.body}
          onChange={(e) => onEdit("body", e.target.value)}
          placeholder="Write your note here..."
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
