import React from 'react';
import {SWRConfig} from 'swr'
import PokeContainer from './Pokemon/PokeContainer';
import fetcher from './Pokemon/fetcher';


// styles

import {StyledPokedex,StyledTitle} from './Pokemon/Pokemon.Styled';

function App() {
  return (
    <>
    <StyledTitle>Pokedex</StyledTitle>
    
    <SWRConfig
    value={{
    fetcher,
    suspense: true,
    }}
    >
    <StyledPokedex>
    <PokeContainer />
    </StyledPokedex>
    </SWRConfig>
    </>
  )
}

export default App;
