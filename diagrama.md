![image](https://github.com/PabloMocholi/Fullstack/assets/148113056/c7887286-150f-4086-b8f6-ca5c760a4eb0)

# Estructura de las tablas

users [icon: user] {
    id int pk auto
    name string 
    tagname string "@...."
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
  comments int
  likes int
  views int
  is_comment boolean
  is_retweet boolean
  is_post boolean
}

retweets{
  id int pk auto
  id_retweet int 
  id_post_origen int
}

comments{
  id int pk auto
  id_comment int 
  id_post_origen int
}

likes{
  id int pk auto
  id_user_like int 
  id_post_liked int
}

link_user_post [icon: link]{
  id int pk auto
  id_user int
  id_post int
}

# Relaciones
users.id <> followers.id_user
followers.id_user_followed <> users.id


users.id < link_user_post.id_user
link_user_post.id_post < posts.id

posts.id < retweets.id_post_origen
retweets.id_retweet > posts.id

posts.id < comments.id_post_origen
comments.id_comment  > posts.id

posts.id > likes.id_post_liked
likes.id_user_like <> users.id




