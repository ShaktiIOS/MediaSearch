import { useSelector, useDispatch } from 'react-redux'
import CollectionCard from '../components/CollectionCard.jsx'
import { clearCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const { items } = useSelector((state) => state.collection)

  const dispatch = useDispatch()

  const clearCollections = () => {
    dispatch(clearCollection())
    dispatch(removeToast('Removed all collections!'))
  }

  if (items.length === 0) return <h1 className='text-center mt-20 text-2xl'>Your collection is empty.</h1>

  return (
    <div className='overflow-auto px-10 py-5'>
      <div className='flex justify-between mb-5'>
        <h2 className='text-xl font-medium'>Your Collection ({items.length})</h2>
        <button onClick={() => { clearCollections() }} className="bg-red-600 active:scale-95 transition text-white text-base px-5 py-2 rounded font-medium cursor-pointer">Clear Collection</button>
      </div>
      <div className='flex justify-start w-full flex-wrap gap-6'>
        {items.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage