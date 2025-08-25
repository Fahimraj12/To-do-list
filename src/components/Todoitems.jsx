import React from 'react'
import Todoitem from './Todoitem'
import styles from './Todoitemscss.module.css';
const Todoitems = ({todoitems, onDeleteClick }) => {
  return (
    <>
    <div className={styles.itemsContainer}>
        {todoitems.map(item => <Todoitem key={item.name} todoDate={item.duedate} todoName={item.name} onDeleteClick={onDeleteClick}></Todoitem>)}
     
    </div>
    </>
  )
}

export default Todoitems
