import React from 'react'
import { Loader } from "react-feather";

interface Props {

}

const Spinner: React.FC<Props> = () =>  {
    return (
        <div>
            <Loader />
        </div>
    )
}

export default Spinner
