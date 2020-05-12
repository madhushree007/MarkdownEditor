import React from "react";
import "./styles.css";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [textContent, setTextContent] = React.useState("");
  const handleChange = event => {
    setTextContent(event.target.value);
  };
  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <textarea onChange={handleChange} value={textContent} />
      {/* <h2
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(textContent) }}
      /> */}
      <ReactMarkdown className="preview" source={textContent} />
    </div>
  );
}
