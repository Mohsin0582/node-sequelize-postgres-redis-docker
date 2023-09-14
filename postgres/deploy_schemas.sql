-- -- deploy fresh database tables
-- -- after adding table files from postgres tables(user, post and comment) folder to containers tables folder as instructed in Dockerfile
-- -- excute the commands to create tables, \i - means excute
-- -- order of table creations matter 
-- \i '/docker-entrypoint-initdb.d/tables/user.sql'
-- \i '/docker-entrypoint-initdb.d/tables/post.sql'
-- \i '/docker-entrypoint-initdb.d/tables/comment.sql'

-- -- insert dummy data from the seed.sql file
-- \i '/docker-entrypoint-initdb.d/seed/seed.sql'