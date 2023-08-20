import React, {useState} from 'react';

const SearchBar = (props) => {

const [search, updateSearch] = useState('')

const handleSearch = () => {

}

  return (
    <form className="mt-10 text text-black text-xl">
      <input type={'text'} placeholder={'Have a Question? search for asnwers...'} className="w-11/12 h-14" onChange={(e) => {
        handleSearch(e)
      }}/>
    </form>
  )
}


export default SearchBar;