import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from "../redux/features/collectionSlice"

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch()

    const removeInCollection = (itemId) => {
        dispatch(removeCollection(itemId))
        dispatch(removeToast('Removed from collection!'))
    }

    return (
        <div className="w-[17.4vw] relative h-80 bg-white rounded-xl overflow-hidden">
            <a className="h-full" href={item.url} target="_blank" rel="noopener noreferrer">
                {
                    item.type === 'photo' || item.type === 'gif' ?
                        <img className="w-full h-full object-cover object-center" src={item.src} alt={item.title} /> :
                        <video className="w-full h-full object-cover object-center" src={item.src} autoPlay loop muted />
                }
            </a>
            <div id="bottom" className="flex justify-between items-center w-full px-2 py-5 gap-3 absolute bottom-0 text-white">
                <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">{item.title}</h2>
                <button onClick={() => removeInCollection(item.id)} className="bg-red-600 active:scale-95 text-white rounded px-3 py-1 font-medium cursor-pointer">Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard