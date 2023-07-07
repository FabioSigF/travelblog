import React, { useState } from 'react'
import { Icon, Wrapper } from './Search.styles'
import { useStateContext } from '../../context/ContextProvider'
import { iconList } from '../../globalStyles';
import { useNavigate } from 'react-router-dom';

export default function Search() {

  const [query, setQuery] = useState("");
  const { setOpenMenu } = useStateContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      setOpenMenu(false);
      return navigate(`/search?q=${query}`);
    }
  }

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder='Pesquise um artigo...'
        />
        <Icon>
          {iconList.search}
        </Icon>
      </form>
    </Wrapper>
  )
}
