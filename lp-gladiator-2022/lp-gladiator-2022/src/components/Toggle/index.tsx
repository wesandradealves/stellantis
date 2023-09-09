import React from 'react';

import styles from './styles.module.scss';

interface ToggleProps {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = ({id, value, onChange}: ToggleProps) => {
  return <div className={styles.toggle}>
    <input type="checkbox" id={id} value={value} onChange={onChange} /><label htmlFor={id} />
  </div>;
}

export default Toggle;