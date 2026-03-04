import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {

    const { query } = useSelector((state) => state.search)

    return (
        <div>
            <SearchBar />

            {query &&
                <>
                    <Tabs />
                    <ResultGrid />
                </>
            }
        </div>
    )
}

export default HomePage