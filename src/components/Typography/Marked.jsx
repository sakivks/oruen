import React from "react";
import marked from 'marked';
import "github-markdown-css";

marked.setOptions({
  pedantic: true,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  xhtml: false
});
class Marked extends React.Component {
  render() {
    const { children, md, ...rest } = this.props;
    return (
      <div {...rest} className="markdown-body" dangerouslySetInnerHTML={{__html: marked(md)}}>
        {children}
      </div>
    );
  }
}

export default Marked;
// export default withStyles(typographyStyle)(A);
