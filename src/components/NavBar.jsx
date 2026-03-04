import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center py-5 px-10 bg-(--c2)'>
            <Link to='/' className='text-2xl font-medium'>MediaSearch</Link>
            <div className='flex gap-5 text-base items-center'>
                <Link to='/' className='ml-5 bg-(--c4) active:scale-95 text-(--c1) px-3 py-1 rounded font-medium cursor-pointer'>Search</Link>
                <Link to='/collection' className='bg-(--c4) active:scale-95 text-(--c1) px-3 py-1 rounded font-medium cursor-pointer'>Collection</Link>
            </div>
        </div>
    )
}

export default NavBar