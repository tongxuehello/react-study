import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// react组件的另外一种写法，直接写render函数，它的参数是什么？（parent component props）
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div style={{border:"1px solid blue",padding:"5px"}}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// 这句话的作用？如果不写这句话可以吗？
AddTodo = connect()(AddTodo)

export default AddTodo