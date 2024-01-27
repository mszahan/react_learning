import styles from '../styles/Alert.module.css';
import { useState, ReactNode } from 'react';

type Props = {
  type?: string;
  heading: string;
  children: ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  // const [visible, setVisible] = useState <boolean> ();
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return <div>gone</div>;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.header}>
        <span 
        role="img" 
        aria-label={type === 'warning' ? 'Warning' : 'Information'}
        className={styles.headerIcon}
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>

        <span className={styles.headerText}>{heading}</span>
        {closable && (
          <button 
          aria-label="Close" 
          onClick={handleCloseClick}
          className={styles.closeButton}
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>


      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Alert;
