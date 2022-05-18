import Counter from "../../components/counter"
import { useNavigate } from 'react-router-dom'
function Index() {
const navigateTo = useNavigate();
const handleClick = () => navigateTo('/admin/formulario')
return (
<div className="">
    <h1 className="text-3xl font-bold ">
        Admin!
    </h1>
    <button type="button" onClick={handleClick}>
        Go Form
    </button>
    <Counter />
</div>
)
}

export default Index