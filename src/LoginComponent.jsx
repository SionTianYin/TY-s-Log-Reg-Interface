import React from "react"
import { useState } from "react"
/*
  useState: React常用的Hook，用于在函数组件中添加状态。可以使用它来定义一个状态变量，该变量会在组件渲染时初始化，并在后续渲染中保存其值。
  语法：const [state, setState] = useState(initialState);
        其中，state 是当前的状态变量，setState 是一个函数，用于更新状态变量的值。initialState 是状态变量的初始值。useState 返回一个数组，第一个元素是当前的状态变量，第二个元素是一个函数，用于更新状态变量的值。
*/

/*
  状态：
  在 React 中，状态是指组件在运行时可以修改的值。状态是 React 组件中的一种特殊类型的数据，可以在组件中通过 state 属性来访问和修改。
  状态是为了存储组件的变化，以便在组件的生命周期中进行更新。当状态发生变化时，React 会自动重新渲染组件，并更新组件的显示内容。由于状态的变化会导致组件的重新渲染，因此状态可以用于实现交互式 UI，以及对用户输入的响应。
  在 React 中，状态是通过 useState Hook 来创建的。
*/

/* 
  props作为参数，包含onFormSwitch的属性，切换到注册界面的按钮通过调用 props.onFormSwitch 函数来触发父组件（App.js）中的事件处理函数。
*/

export const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => { // e 为事件参数
    e.preventDefault()          //通过调用 e.preventDefault() 方法来阻止表单的默认提交行为
    console.log(email, password)
  }

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN INTERFACE</h2>
        <label htmlfor='email'>E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id='email' placeholder="abc123@youremail.com" />
        <label htmlfor='password'>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id='password' placeholder="********" />
        <button type='submit'>LOG IN!</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account?Register here.</button>
    </div>

  )
}

/*
  form 表单：https://www.w3school.com.cn/html/html_forms.asp
    <form> 元素
    HTML 表单用于收集用户输入。
    <form> 元素定义 HTML 表单：
    <form action="action_page.php">
      First name:<br>
      <input type="text" name="firstname" value="Mickey">
      <br>
      Last name:<br>
      <input type="text" name="lastname" value="Mouse">
      <br><br>
      <input type="submit" value="Submit">
    </form> 
*/

/*
  label标签：负责显示文字
  <label> 标签为 input 元素定义标注（标记）。
  label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。
  <label> 标签的 for 属性应当与相关元素的 id 属性相同。
  input标签：这个和HTML中的label同种用法 
*/

/*
  onSubmit 是 HTML 表单元素的一个事件，用于指定表单提交时所要执行的函数。在使用 onSubmit 时，需要注意以下几点：
    1. onSubmit 必须添加到表单元素上，而不是按钮或其他表单组件上。
    2. onSubmit 函数必须返回一个布尔值，返回 true 将继续提交表单，返回 false 将取消表单提交。
    3. 在 onSubmit 函数中，可以使用 event.preventDefault() 方法来阻止表单的默认提交行为。
*/

/*
  onSubmit={handleSubmit} 是 React 中一个表单元素的事件处理程序，用于在表单提交时调用 handleSubmit 函数。在 React 中，可以使用 onSubmit 属性来指定一个函数，该函数会在表单提交时被调用，从而可以执行一些自定义的逻辑，比如验证表单数据、发送请求等。

  handleSubmit 函数通常包含了对表单数据的处理逻辑，例如获取表单输入的值、进行表单数据验证、将表单数据发送到服务器等。通常情况下，handleSubmit 函数会被传递给表单的 onSubmit 属性中，以便在表单提交时被调用。
*/

/*
  箭头函数：常用于定义函数组件或类组件中的方法
    使用箭头函数可以简化代码，并且确保函数内部的 this 始终指向当前组件。

  实例：

    import React, { useState } from 'react';

    function MyComponent() {
      // 使用 useState 定义一个状态变量
      const [count, setCount] = useState(0);

      // 定义一个箭头函数作为按钮点击事件的处理函数
      const handleClick = () => {
        setCount(count + 1);
      };

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={handleClick}>Increment</button>
        </div>
      );
    }

    export default MyComponent;

  在上面的代码中，定义了一个名为 MyComponent 的函数组件，并使用 useState 定义了一个名为 count 的状态变量。然后，定义了一个名为 handleClick 的箭头函数，作为按钮点击事件的处理函数。在函数体内，调用了 setCount 函数来更新 count 状态变量的值。最后，在组件的 JSX 中使用了 handleClick 函数作为按钮的 onClick 事件处理函数。

  需要注意的是，由于箭头函数没有自己的 this，它内部的 this 始终指向外层作用域中的 this。这在类组件中特别有用，因为它可以确保事件处理函数中的 this 始终指向当前组件实例，而不是事件触发时的 this。
*/

/*
  props: 父组件 子组件
    在 React 中，组件是构建用户界面的基本单元，将界面分解为独立的、可重用的部分。组件可以有一个父组件和多个子组件。父组件是包含子组件的组件，子组件则是被包含在父组件中的组件。

    父组件和子组件之间的通信是 React 中的一个重要概念。父组件可以通过 props 属性将数据传递给子组件，子组件则可以通过回调函数将数据传递回父组件。这种单向数据流的设计使得应用程序的状态管理更加可控和可预测。
*/

/*
  onChange={(e) => setEmail(e.target.value)}:
    在 React 中，当用户在表单输入框中输入内容时，这些内容会被存储在表单元素的 value 属性中。为了在 React 中实现双向数据绑定（Two-Way Binding），需要将表单元素的 value 属性与 React 中的状态（state）进行绑定，使得当用户输入内容时，React 中的状态也会相应地更新。

    在你提供的代码中，使用 onChange 事件监听用户在输入框中输入的内容，每当用户在输入框中输入一个字符，事件处理函数会被调用，并且会将当前输入框的值 e.target.value 更新到 React 中的 email 状态中，从而实现了双向数据绑定。
*/