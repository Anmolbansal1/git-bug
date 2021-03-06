import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import React from 'react';

const styles = theme => ({
  author: {
    ...theme.typography.body2,
  },
  bold: {
    fontWeight: 'bold',
  },
});

const Author = ({ author, bold, classes }) => {
  const klass = bold ? [classes.author, classes.bold] : [classes.author];

  if (!author.email) {
    return <span className={klass.join(' ')}>{author.displayName}</span>;
  }

  return (
    <Tooltip title={author.email}>
      <span className={klass.join(' ')}>{author.displayName}</span>
    </Tooltip>
  );
};

export default withStyles(styles)(Author);
