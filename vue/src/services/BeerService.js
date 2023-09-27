import axios from 'axios';

export default {
    
    getBeers() {
        return axios.get('/allBeers');
    },
    getBeerByID(id) {
        return axios.get(`/beers/${id}`)
    },
    addBeer(beer) {
        return axios.post('addBeer', beer)
    },
    updateBeer(beer){
        return axios.put(`/beers`, beer)
    },
    deleteBeer(id){
        return axios.delete(`beers/${id}`)
    },
}