import React, {useMemo, useState} from 'react'
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'аааа', body: 'яяяя'},
        {id: 2, title: 'бббб 2', body: 'дддд'},
        {id: 3, title: 'яяяя 3', body: 'ееее'}
    ])

    const [filter, setFilter] = useState({sort:'', query:''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            {/*<Counter />*/}
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter} />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'}/>



        </div>
    )
}
export default App;
