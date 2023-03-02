import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ypsi4Ojgs5LgrlAvhCll-hE83uE4mB9Lyz0pdtikp8Y19KiM09HlFJaGKVZO4rUptAoPjLjy6RnraneowmBvMRyYFvYco0vg1RtYfz5ecwAHNa3LwswP3xA8NIL_Y3Yx',
    }
})