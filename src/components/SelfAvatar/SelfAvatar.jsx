import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import image from './self.jpg';
import styles from './SelfAvatar.module.css';

const SelfAvatar = () => (
  <div className={styles.container}>
    <Avatar className={styles.avatar} src={image} />
  </div>
);

export default SelfAvatar;
