import { GrapesjsReact } from "grapesjs-react";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-newsletter";

const Editor = () => {
  return (
    <GrapesjsReact
      id="grapesjs-react"
      plugins={["gjs-preset-newsletter", "gjs-blocks-basic"]}
    />
  );
};

export default Editor;
