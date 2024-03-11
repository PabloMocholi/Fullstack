# Fullstack
Ejercicios Fullstack

Ejercicio 1: [Ejercicio1]     
Ejercicio 2: [Ejercicio2]   
Ejercicio 3: [Ejercicio3]   
Ejercicio 4: [Ejercicio4]   
Ejercicio Rick y Morty: [Ejercicio RM]

[Ejercicio1]: https://pablomocholi.github.io/Fullstack/Ejercicio1/index.html
[Ejercicio2]: https://pablomocholi.github.io/Fullstack/Ejercicio2/index.html
[Ejercicio3]: https://pablomocholi.github.io/Fullstack/Ejercicio3/index.html
[Ejercicio4]: https://github.com/PabloMocholi/Fullstack/blob/main/REACT/Ejercicio4/Ejercicio4/src/App.jsx
[Ejercicio RM]: https://github.com/PabloMocholi/Fullstack/blob/main/REACT/EjercicioRickMorty/rickmorty/index.html


![image](https://github.com/PabloMocholi/Fullstack/assets/148113056/9960ee60-414c-4ec1-a3a9-480c8b42181d)
users [icon: user] {
    id int pk auto
    name string 
    username string "@...."
    password string
    email string
    birthdate DateTime
    location string
    profile_img string
    background_img string
    description string
    is_verified boolean
}

followers{
  id int pk auto
  id_user int
  id_user_followed int
}

posts [icon: twitter] {
  id int pk auto
  content string
  retweets int
  likes int
  views int
  is_comment boolean
  is_retweet boolean
}

retweets{
  id int pk auto
  id_retweet int 
  id_post int
}

comments{
  id int pk auto
  id_retweet int 
  id_post int
}


link_user_post [icon: link]{
  id int pk auto
  id_user int
  id_post int
}


users.id <> followers.id_user
followers.id_user_followed <> users.id


users.id < link_user_post.id_user
link_user_post.id_post < posts.id

posts.id < retweets.id_post
retweets.id_retweet > posts.id

posts.id < comments.id_post
comments.id_retweet > posts.id



