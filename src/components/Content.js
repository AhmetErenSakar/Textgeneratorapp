import { useState } from 'react'

import { updateParas, updateType } from '../redux/textSlice'
import { useDispatch, useSelector } from 'react-redux'




function Content() {

    const [num, setNum] = useState(4)

    const params = useSelector(state => state.text.items)
    const dispatch = useDispatch()


    function handleType(a) {
        dispatch(updateType(a));
        setNum(a)
    }
    function handleNum(x) {
        dispatch(updateParas(x));
    }


    return (
        <form className="form-inline">
            <div className="form-group1">
                <div>
                    <label>paragraph</label>
                </div>
                <input type={"number"} min="1" value={num} onChange={(e) => { handleType(e.target.value) }} />
            </div>
            <div className="form-group2">
                <div>
                    <label>Include HTML</label>
                </div>
                <select name="html" className='section' onChange={(e) => { handleNum(e.target.value) }}>
                    <option value="html">Yes</option>
                    <option value="text">No</option>
                </select>
            </div>

        </form>
    )
}

export default Content