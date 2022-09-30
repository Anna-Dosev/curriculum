-- select * from cities

select students.firstName, students.lastName, cities.city
from students
join cities on students.city_id = cities.id;
