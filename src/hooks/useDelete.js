
const useDelete = async (url, formulario) => {

    try {

        const OptionsRegister = {
            body: JSON.stringify(formulario),
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(url, OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    return window.alert('Sucesso')
                } else {
                    return window.alert('erro')
                }
            })

    } catch (error) {
        console.log(error)
    }
}

export default useDelete;

