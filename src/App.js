import React, {useState} from 'react'
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'аааа', body: 'яяяя'},
        {id: 2, title: 'бббб 2', body: 'дддд'},
        {id: 3, title: 'яяяя 3', body: 'ееее'}
    ])
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            {/*<Counter />*/}
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect defaultValue='Сортировка'
                          value={selectedSort}
                          onChange={sortPosts}
                          option={[
                              {value: 'title', name: 'По названию'},
                              {value: 'body', name: 'По описанию'}
                          ]}/>
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={'Список постов 1'}/>
                : <h1 style={{textAlign: 'center'}}>Список постов пуст!</h1>
            }

        </div>
    )
}
export default App;
