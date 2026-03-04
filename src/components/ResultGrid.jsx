import { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi.js'
import { setLoading, setError, setResults } from '../redux/features/searchSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard.jsx'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((state) => state.search)

    const getData = async () => {
        try {
            dispatch(setLoading())
            let response
            let data = []
            if (activeTab === 'photos') {
                response = await fetchPhotos(query)
                data = response.results.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src: item.urls.full,
                    url: item.links.html
                }))
            } else if (activeTab === 'videos') {
                response = await fetchVideos(query)
                data = response.videos.map((item) => ({
                    id: item.id,
                    type: 'video',
                    title: item.user.name || 'Video',
                    thumbnail: item.image,
                    src: item.video_files[0].link,
                    url: item.url
                }))
            } else {
                response = await fetchGif(query)
                data = response.data.map((item) => ({
                    id: item.id,
                    type: item.type,
                    title: item.title,
                    thumbnail: item.images.fixed_height_small.url,
                    src: item.images.original.url,
                    url: item.url
                }))
            }

            dispatch(setResults(data))
        } catch (error) {
            dispatch(setError(error.message))
        }
    }

    useEffect(() => {
        if (!query) return
        getData()
    }, [query, activeTab])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className='flex justify-start px-10 py-6 w-full flex-wrap gap-6 overflow-auto '>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid