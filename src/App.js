import React, {useState} from 'react'
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Pyton', body: 'Description'},
        {id: 2, title: 'Pyton 2', body: 'Description'},
        {id: 3, title: 'Pyton 3', body: 'Description'}
    ])

    return (
        <div className="App">
            {/*<Counter />*/}
            <PostList posts={posts} title={'Список постов 1'}/>
            <PostList posts={posts2} title={'Список постов 2'}/>
        </div>
    )
}
export default App;
