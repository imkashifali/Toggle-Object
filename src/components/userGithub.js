import axios from "axios"
import { useState, useEffect } from "react";
import { endpoint } from '../config/endPoint';

export function UserGithub() {
    const [user, setUser] = useState({})
    const [loading, setloading] = useState(false)
    const [followers, setFollowers] = useState([]);
    const [list, setList] = useState([{
        route: '/login',
        title: "login"
    },
    {
        route: '/user',
        title: "user"
    },
    {
        route: '/signup',
        title: "signup"
    }
    ])



    const fetchfollowers = async () => {
        try {
            setloading(true)
            let res = await axios.get(`${endpoint}/users/kashifshafati/following`);
            setFollowers(res.data);



        } catch (error) {
            console.log("error", error.message);

        } finally {
            setloading(false)
        }
    }

    const fetchGithubUser = async (params) => {
        try {
            setloading(true)
            let res = await axios.get(`${endpoint}/users/kashifshafati`);
            setUser(res.data);

        } catch (error) {
            console.log("error", error.message);
        }
        finally {
            setloading(false)
        }
    }

    const deleteProduct = async () => {
        try {
            setloading(true)
            let res = await axios.delete("https://fakestoreapi.com/products/8");
            // setUser(res.data);
            console.log("res fakestore api", res);

        } catch (error) {
            console.log("error", error.message);
        }
        finally {
            setloading(false)
        }

    }


    const addNewProduct = async () => {

        try {
            let dataSendToServer = {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
            setloading(true)
            let res = await axios.post("https://fakestoreapi.com/products", dataSendToServer);
            // setUser(res.data);
            console.log("res fakestore api", res);

        } catch (error) {
            console.log("error", error.message);
        }
        finally {
            setloading(false)
        }
    }


    const updateProduct = async () => {

        try {
            let dataSendToServer = {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
            setloading(true)
            let res = await axios.put("https://fakestoreapi.com/products/7", dataSendToServer);
            // setUser(res.data);
            console.log("res fakestore api", res);

        } catch (error) {
            console.log("error", error.message);
        }
        finally {
            setloading(false)
        }
    }

    useEffect(() => {
        fetchGithubUser();
        // deleteProduct();
        // addNewProduct();
        // updateProduct();
    }, []);

    return [user, followers, loading, list, fetchfollowers];
}

// export default UserGithub;
