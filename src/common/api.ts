async function getData(
    path = '',
    // data = {}
) {
    const url = new URL(API.endpoint + path)
    // const keys = Object.keys(data)
    // const values = Object.values(data)
    // for (let i = 0; i < values.length; i++) {
    //     let value = values[i]
    //     if (typeof value == 'object') {
    //         value = JSON.stringify(value)
    //     }
    //     url.searchParams.set(keys[i], value)
    // }
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
    return response
}

export const API = {
    endpoint: import.meta.env.VITE_API_URL,
    results: function (
        eventId: string = ''
    ) {
        return getData(`/results/${eventId}`)
    }
}