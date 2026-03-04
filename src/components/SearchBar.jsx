import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice.js'

const SearchBar = () => {

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form id='searchForm' onSubmit={(e) => {
        submitHandler(e)
      }} className='flex justify-center bg-(--c1) gap-5 px-10 py-5'>
        <input
          required
          className='w-full border-2 px-4 py-2 text-xl rounded outline-none'
          type="text"
          placeholder='Search anything...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar