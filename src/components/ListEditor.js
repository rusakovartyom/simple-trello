import { useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './ListEditor.module.css';

const ListEditor = (props) => {
  const ref = useRef();

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.saveList();
    }
  };

  // Custom hook for detecting click outside of the element
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };

  // Calling hook
  useOnClickOutside(ref, () => props.onClickOutside(false));

  return (
    <div className={styles.ListTitleEdit} ref={ref}>
      <TextareaAutosize
        className={styles.ListTitleTextarea}
        autoFocus
        placeholder="Enter list title..."
        value={props.title}
        onChange={props.handleChangeTitle}
        onKeyDown={onEnter}
      />
      {props.deleteList && <ion-icon name="trash" onClick={props.deleteList} />}
    </div>
  );
};
export default ListEditor;