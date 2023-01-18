import { useState } from "react";

const useGetAll = (param) => {

    const [data, setData] = useState(async () => {

        await fetch(param)
            .then((res) => res.json())
            .then((data) => setData(data))

    })

    return [data]
}

export default useGetAll;