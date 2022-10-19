import React from 'react'
import * as C from './styles'

const Search = () => {
  return (
    <C.Busca>
        <input type="search" name="s-bob" id="s-bob" placeholder="Buscar personagem..."/>
    </C.Busca>
  )
}

export default Search