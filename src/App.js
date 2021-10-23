import React, {useState} from 'react'
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])

    return (
        <div className="App">
            {/*<Counter />*/}
            <form>
                <MyInput type="text" placeholder="название"/>
                <MyInput type="text" placeholder="описание"/>
                <MyButton disabled>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Список постов 1'}/>
        </div>
    )
}
export default App;
