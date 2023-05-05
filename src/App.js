import React from 'react'
import { useState } from 'react'
import './App.css'  //css file

/* import {组件名} from '组件所在jsx文件所在位置' */
import { Login } from './LoginComponent'
import { Register } from './RegisterComponent'

function App () {
  const [currentForm, setCurrentForm] = useState('login')

  const toogleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
      }
      <footer>
        <p>Copyright © 2023 TianYin</p>
      </footer>
      {/* 在上面的代码中，我们使用 useState hook 来定义一个名为 currentForm 的状态变量，用于记录当前应该显示哪个表单。在 handleFormSwitch 函数中，我们通过调用 setCurrentForm 函数来更新 currentForm 变量的值。当用户在登录表单中单击 "Don't have an account? Register here." 按钮时，会触发 onFormSwitch 函数，并调用 handleFormSwitch 函数来切换表单的显示状态。*/}
      {/* <Login></Login>
      <Register></Register> */}
    </div>
  )
}

export default App

/*
  React 事件处理：
  在 React 中，事件处理函数是通过将函数传递给事件处理属性（例如 onClick，onSubmit 等）来指定的。例如，如果要在 React 中处理表单的提交事件，可以将 handleSubmit 函数传递给表单的 onSubmit 属性，就像这样：
    <form onSubmit={handleSubmit}>
      ...
    </form>
  当表单被提交时，React 将自动调用 handleSubmit 函数，并将事件对象作为其第一个参数传递。使用事件对象，我们可以访问表单中的输入值，并执行任何其他必要的操作，例如阻止表单的默认提交行为。
  此外，在 React 中，为了避免出现不必要的副作用和性能问题，建议使用箭头函数或绑定方法来定义事件处理函数。这样可以确保函数的上下文始终为组件本身，并避免在每次渲染时都创建新的函数实例。因此，通常会将事件处理函数定义为组件的方法或使用箭头函数，如下所示：
    class MyComponent extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      // do something
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          ...
        </form>
      );
    }
  }
  或者，使用箭头函数：
    function MyComponent() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // do something
    }

    return (
      <form onSubmit={handleSubmit}>
        ...
      </form>
    );
  }
*/