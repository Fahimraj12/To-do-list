import React from 'react'
import styles from './Appnamecss.module.css';
import { RiTodoLine } from "react-icons/ri";

const Appname = () => {
  return (
    <>
    <h1 className={styles.todoheading}><RiTodoLine />ToDo App</h1>
    </>
  )
}

export default Appname
