const API_ENDPOINT = 'http://localhost:3000'

export default class API {
    /**
     * @param {string} path 
     * @param {*} options 
     * @returns {Promise<[Response | null, Error | null]>}
    */
    static async get(path, options={}) {
        path = API_ENDPOINT + path

        try {
            const response = await fetch(path, options)

            if(!response.ok) {
                return [null, new Error(response.statusText)]
            }

            return [response, null]
        } catch(error) {
            return [null, error]
        }
    }

    static async getUsers() {
        const [res, error] = await this.get('/users')

        if(error) return [null, error]

        return [await res.json(), null]
    }

    static async getEvents() {
        const [res, error] = await this.get('/events')

        if(error) return [null, error]

        return [await res.json(), null]
    }

    static async getBusinesses() {
        const [res, error] = await this.get('/businesses')

        if(error) return [null, error]

        return [await res.json(), null]
    }

    static async getOrganizers() {
        const [res, error] = await this.get('/events/organizer/jo')

        if(error) return [null, error]

        return [await res.json(), null]
    }
}