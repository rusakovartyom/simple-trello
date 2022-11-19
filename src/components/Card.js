import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      ref={props.innerRef}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={styles.Card}
    >
      {props.children}
    </div>
  );
};
export default Card;
