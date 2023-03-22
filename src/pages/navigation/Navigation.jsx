import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from '@/styles/Nav.module.css'

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', color: 'black' }}>
      <Tabs className={styles.Tab} value={value} onChange={handleChange} centered>
        <Tab className={styles.tabs} label="Item One" />
        <Tab className={styles.tabs} label="Item Two" />
        <Tab className={styles.tabs} label="Item Three" />
      </Tabs>
    </Box>
  );
}
