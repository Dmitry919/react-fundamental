import React, {useEffect, useRef, useState} from 'react'
import '../styles/App.css'
import {usePosts} from "../components/hookc/usePosts";
import {useFetching} from "../components/hookc/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../util/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import PostFilter from "../components/PostFilter";
import {useObserver} from "../components/hookc/useObserver";
import MySelect from "../components/UI/select/MySelect";


const Posts = () => {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const lastElement = useRef()


    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })


    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePages = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '25px'}} onClick={() => setModal(true)}>
                Создать Пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
            <MySelect value={limit}
                      onChange={value => setLimit(value)}
                      defaultValue='Кол-во элементов на странице'
                      option={[
                          {value: 5, name: '5'},
                          {value: 10, name: '10'},
                          {value: 25, name: '25'},
                          {value: -1, name: 'Показать все'},
                      ]}
            />
            {postsError &&
            <h1> Произошла ошибка ${postsError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'}/>
            <div ref={lastElement} style={{height: '20px', background: 'red'}}></div>
            {isPostsLoading
            && <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}><Loader/></div>
            }
            <Pagination totalPages={totalPages} changePages={changePages} page={page}/>
        </div>
    )
}
export default Posts;