import React, { useEffect, useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Wrapper } from './Search.styles';
import { Link } from 'react-router-dom';
import PostDetail from '../../components/PostDetail/PostDetail';
import { PageHeader } from '../../globalStyles';
import { useQuery } from '../../hooks/useQuery';

export default function Search() {

  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts");
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(() => {
    if (posts) {
      setSearchPosts([]);

      posts.forEach((post) => {
        if (post.title && post.tagsArray)
        {
          if(post.title.toLowerCase().includes(search.toLowerCase()) || post.tagsArray.includes(search.toLowerCase())) {
            setSearchPosts(current => [...current, post]);
          }
        }
      })
    }
  }, [posts, search])
  return (
    <Wrapper>
      <PageHeader>
        <h2>Search: {search}</h2>
      </PageHeader>
      <div>

        {!searchPosts && (
          <div>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to='/'>Voltar</Link>
          </div>
        )}

        {searchPosts && searchPosts.length === 0 && (
          <div>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to='/'>Voltar</Link>
          </div>
        )}

        {searchPosts &&
          searchPosts.map((post) => (
            <PostDetail key={post.id} data={post} />
          ))}
      </div>
    </Wrapper>
  )
}
