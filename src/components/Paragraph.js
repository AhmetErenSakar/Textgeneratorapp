import axios from 'axios'




import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


function Paragraph() {

    const [data, setData] = useState();
    const [num, setNum] = useState();

    const paras = useSelector((state) => state.text.paras)
    const type = useSelector((state) => state.text.type)

    console.log(paras, 'paras');

    const getText = async () => {
        const data = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${+type}&format=${paras}`)
        return data.data
    }
    const main = async () => {
        try {
            const result = await getText();
            console.log(result);
            setData(result);
            return result
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        main();
    }, [type, paras])



    return (
        <div className='parag'><p>{data}</p></div>
    )
}

export default Paragraph