const API_ENDPOINT = ''

export default class API {
    /**
     * @param {string} path 
     * @param {*} options 
     * @returns {Promise<[any | null, Error | null]>}
    */
    static async get(path, options={}) {
        try {
            const response = await fetch(path, options)

            if(!response.ok) {
                return [null, new Error(response.statusText())]
            }

            return [response, null]
        } catch(error) {
            return [null, error]
        }
    }
}