import {
    useNavigate,
} from 'react-router-dom'

function Index() {
    const navigateTo = useNavigate();

    const handleClick = () => navigateTo('/admin')

    return (
    <div className="bg-indigo-500 ">
        <h1 className="text-3xl font-bold text-blue-600 ">
            Index!
        </h1>
        <button type="button" onClick={handleClick}>
            Go home
        </button>
        
    </div>
    )
}

export default Index