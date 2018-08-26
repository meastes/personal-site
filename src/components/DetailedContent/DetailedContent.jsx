import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import DomainIcon from '@material-ui/icons/Domain';
import ChartIcon from '@material-ui/icons/InsertChart';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import styles from './DetailedContent.module.css';

const DetailedContent = () => (
  <Tabs value={0} centered>
    <Tab label="Bio" icon={<PersonIcon className={styles.icon} />} />
    <Tab label="Professional Experience" icon={<DomainIcon className={styles.icon} />} />
    <Tab label="Conference Talks" icon={<ChartIcon className={styles.icon} />} />
  </Tabs>
);

export default DetailedContent;
