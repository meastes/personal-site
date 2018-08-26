import Card from '@material-ui/core/Card';
import React from 'react';
import styles from './Content.module.css';

const Content = ({ children }) => <Card className={styles.content}>{children}</Card>;

export default Content;
