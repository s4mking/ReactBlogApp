export default {
    url: 'http://edu2.shareyourtime.fr',
    createUser: (data) => {
        return new Promise((resolve) => {
            fetch('http://blog.etherial.fr/users',{
                method: 'POST', 
                // body: JSON.stringify(data),
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((data) => {
                console.dir(data)
                    data.json().then((json)=> {
                        console.log(json)
                        resolve(json)
                    } )
                })
            })
        },
    connectUser: (email,password) => {
        return new Promise((resolve) => {
            fetch('http://blog.etherial.fr/auth',{
                method: 'POST',
                body: JSON.stringify({email:email,password:password}), 
                headers: {
                    'Content-Type': "application/json"
                }}).then((data) => {
                    data.json().then((json)=> {
                        resolve(json)
                    } )
                })
            })
        },
    getUserInformation: () => {
        return new Promise((resolve) => {
             var myToken = localStorage.getItem('token');
            fetch( 'http://blog.etherial.fr/users/me',{
                method: 'GET', 
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': myToken
                    }
            }).then((data) => {
                    data.json().then((json)=> {
                        resolve(json)
                    } )
                })
            })
        }, 
    getAllArticles: () => {
        return new Promise((resolve) => {
             
            fetch( 'http://blog.etherial.fr/articles',{
                method: 'GET', 
                headers:{
                    'Content-Type':'application/json',
                    }
            }).then((data) => {
                    data.json().then((json)=> {
                        resolve(json)
                    } )
                })
            })
        }, 
    getArticle: () => {
        return new Promise((resolve) => {
            var myToken = localStorage.getItem('token');
            fetch( 'http://blog.etherial.fr/users/me',{
                method: 'GET', 
                headers:{
                    'Content-Type':'application/json',
                    // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1NTUzMTY0NjV9.BsDbKginp9LAY8LJBysLpxAb-QVlsT345EtNzHOhIFU'
                    'Authorization': myToken    
                }
                    // body:"message="+messageInput
            }).then((data) => {
                    data.json().then((json)=> {
                        console.dir(json)
                        resolve(json)
                    } )
                })
            })
        },
    updatePassword: (actualpass,newpass,repass) => {
        return new Promise((resolve) => {
            var myToken = localStorage.getItem('token');
            fetch( 'http://blog.etherial.fr/users/me/password',{
                method: 'PUT', 
                body:JSON.stringify({password_old:actualpass,password_new:newpass,password_new_verif:repass}),
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': myToken    
                    }
            }).then((data) => {
                    data.json().then((json)=> {
                        console.dir(json)
                        resolve(json)
                    } )
                })
            })
        },
    updateUser: (firstname,lastname,birthday) => {
            return new Promise((resolve) => {
                var myToken = localStorage.getItem('token');
                fetch( 'http://blog.etherial.fr/users/me',{
                    method: 'PUT', 
                    body:JSON.stringify({firstname:firstname,lastname:lastname,birthdate:birthday}),
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': myToken
                    }
                }).then((data) => {
                        data.json().then((json)=> {
                            console.dir(json)
                            resolve(json)
                        } )
                    })
                })
            },
        createArticle: (title,content,category) => {
            return new Promise((resolve) => {
                var myToken = localStorage.getItem('token');
                fetch( 'http://blog.etherial.fr/articles',{
                    method: 'POST', 
                    body: JSON.stringify({title:title,content:content,'article_category_id':category}), 
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': myToken
                        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1NTUzMTY0NjV9.BsDbKginp9LAY8LJBysLpxAb-QVlsT345EtNzHOhIFU'
                        }
                }).then((data) => {
                        data.json().then((json)=> {
                            console.dir(json)
                            resolve(json)
                        } )
                    })
                })
            }      
}