import Card from '@material-ui/core/Card';
import React from 'react';
import styles from './MainContent.module.css';

const MainContent = ({ children, avatar }) => (
  <Card className={styles.contentPanel}>
    {avatar}
    <div className={styles.content}>{children}</div>
  </Card>
);

export default MainContent;
