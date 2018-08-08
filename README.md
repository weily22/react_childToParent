# react_childToParent
The react child component passes parameters to the parent component，react中子组件传递参数给父组件

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

##React组件间传递

> 基础知识了解（简要介绍）：
>
> react 组件之间的关系有这几种情况：
>
> - 父 传递 子
>   - 父 => 子
>   - 父 => 子 => 子 (多层嵌套)
> - 子 传递 父
> - 兄弟组件 => 兄弟组件
>
> 1. 父 传递 子： 
>    1. 通过传 props 的方式
>    2. ... 运算符传递  （对应多层嵌套）
> 2. 子 传递 父： (下面详细介绍)
>    1.  props + 自身作用域 
> 3. 兄弟组件 => 兄弟组件
>    1. 借助父组件，参考 `子 传递 父 `的方式，再由父组件作为中间介，传递给兄弟组件
>    2. Redux
>
> ### 子 传递 父
>
> **props + 自身作用域 **
>
> 父组件通过`props`传递子组件一个方法：  **this.getChildValue**
>
> ```react
> <Child base={msg => this.getChildValue(msg)}/>
> ```
>
> 子组件调用其方法，并将改变的参数传递给父组件：
>
> ```react
> // 子组件
> changeHandle = (name,event) => {
>    this.setState(Object.assign(this.state,{
>             [name]: event.target.value
>         }))
>    this.props.base(this.state)
> }
> // ====================render=============
> <input type="text" placeholder="Enter project name hear" 
>   value={this.state.name} 
>   onChange={this.changeHandle.bind(null, 'name')}/>
> ```
>
> 实现效果如下：
>
> 

