import React from "react";
import marked from 'marked';

class Marked extends React.Component {
  render() {
    const { children, md, ...rest } = this.props;
    return (
      <div {...rest} dangerouslySetInnerHTML={{__html: marked(md)}}>
        {children}
      </div>
    );
  }
}

export default Marked;
// export default withStyles(typographyStyle)(A);
