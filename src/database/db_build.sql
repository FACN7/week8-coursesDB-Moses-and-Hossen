
BEGIN;
    DROP TABLE IF EXISTS courses
    CASCADE;

CREATE TABLE courses
(
    course_id serial PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_details VARCHAR(1000) NOT NULL,
    author VARCHAR(50) NOT NULL,
    img VARCHAR(50) NOT NULL,
    link varchar(100) NOT NULL

);

INSERT INTO courses
    (course_name,course_details,author,img,link)
VALUES('node js', 'This course was just completely refilmed to give you everything you need to master Node.js in 2019!
This includes new content, updated versions, new features, and more.', 'Andre Mead', '1.jpg', 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/');

INSERT INTO courses
    (course_name,course_details,author,img,link)
VALUES('react', 'This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future', 'Maximilian Schwarzmüller', '2.jpg', 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/');
COMMIT;

INSERT INTO courses
    (course_name,course_details,author,img,link)
VALUES('html', 'Build Responsive Real World Websites with HTML5 and CSS3', 'Jonas Schmedtmann', '3.jpg', 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/');
COMMIT;