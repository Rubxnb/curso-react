import React, {useEffect, useState} from 'react';
import { getAllLPagedUsers, getAllUsers, getUserDetails } from '../../services/fetchService';

const FetchExample = () => {

    const [userList, setUserList] = useState()
    const [selectedUser, setSelectedUser] = useState()
    const [totalUsers, setTotalUsers] = useState()
    const [userPerPage, setUserPerPage] = useState()
    const [pages, setPages] = useState()

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        getAllUsers()
            .then(res => {
                console.log('All Users: ', res.data)
                setUserList(res.data)
                setTotalUsers(res.total)
                setUserPerPage(res.per_page)
                setPages(res.total_pages)
            })
            .catch(error => alert(`Something went wrong: ${error}`))
            .finally(() => {
                console.log('Ended obtaining data')
                console.table(userList)
            })
    }

    const getPagedUsers = (page) => {
        getAllLPagedUsers(page)
        .then(res => {
            console.log('All Paged Users: ', res.data)
            setUserList(res.data)
            setTotalUsers(res.total)
            setUserPerPage(res.per_page)
            setPages(res.total_pages)
        })
        .catch(error => alert(`Something went wrong: ${error}`))
        .finally(() => {
            console.log('Ended obtaining data')
            console.table(userList)
        })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        .then(res => {
            console.log('User ID: ', res.data)
            setSelectedUser(res.data)
        })
        .catch(error => alert(`Something went wrong: ${error}`))
        .finally(() => {
            console.log('Ended obtaining data')
        })
    }

    return (
        <div>
             <h2>Users: </h2>
             {
               userList && userList.map((user, index) => (<p key={index} onClick={()=> obtainUserDetails(index+1)}>{user.first_name}</p>))
             }
             <p>Showing {userPerPage} users of {totalUsers}</p>
             
            <button onClick={() => (getPagedUsers(1))}>Page 1</button>
            <button onClick={() => (getPagedUsers(2))}>Page 2</button>

             <div>
                <h3>UserDetails</h3>
             </div>
            {selectedUser && (
                <div>
                    <p>{selectedUser.first_name}</p>
                    <p>{selectedUser.last_name}</p>
                    <p>{selectedUser.email}</p>
                    <img src={selectedUser.avatar} alt={`${selectedUser.first_name} avatar`} style={{height: '150px', width: '150px'}}/>
                </div>
                )}
        </div>
    );
}

export default FetchExample;
