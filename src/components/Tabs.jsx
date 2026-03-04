import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice"

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']
    const dispatch = useDispatch()
    const activeTab = useSelector(state => state.search.activeTab)

    return (
        <div className="flex gap-5 px-10 mt-5">
            {tabs.map((tab, idx) => {
                return (
                    <button
                        key={idx}
                        className={`${(tab === activeTab ? 'bg-blue-700' : 'bg-gray-500')} transition px-5 py-2 uppercase rounded cursor-pointer active:scale-95`}
                        onClick={() => {
                            dispatch(setActiveTab(tab))
                        }}
                    >
                        {tab}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs