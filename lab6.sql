--7 From the COURSE_SECTION table where term_id is equal to 6, sum of the max_enrl, the average max_enrl,the maximum max_enrl and the minimum max_enrl for term_id = 6. This should be one SELECT statement to determine all of the requested values
SELECT 
    SUM(max_enrl) AS total_enrollment,
    AVG(max_enrl) AS average_enrollment,
    MAX(max_enrl) AS maximum_enrollment,
    MIN(max_enrl) AS minimum_enrollment
FROM 
    course_section
WHERE 
    term_id = 6;


--8 Northwoods University requires a report that will display the bldg_code for each building as well as the totalcapacity for all the rooms located in each building. Order the output of this output by bldg_code. Use anappropriate column alias the 
SELECT 
    bldg_code, 
    SUM(capacity) AS total_building_capacity
FROM 
    location
GROUP BY 
    bldg_code
ORDER BY 
    bldg_code;

 
    
--9 The enrollment table contains the grades for each student at Northwoods. How many grades in the enrollmenttable are there for s_id = 1.

SELECT COUNT(grade)
FROM enrollment
WHERE s_id = 1;


--10 Modify question 3 so it displays the s_id value for each student and the number course sections they are enrolledin (c_sec_id)) also count rows where there are NULL values for grades because the grades have not been entered yet

SELECT 
    s_id,
    COUNT(c_sec_id) AS total_enrollments,
    COUNT(grade) AS grades_entered,
    COUNT(*) - COUNT(grade) AS grades_missing
FROM enrollment
GROUP BY s_id;

--11 Rewrite question 2 so it will only display the building codes and capacities of the building if they are greater than or equal to 100. Order the output in ascending sequence by the capacity
SELECT bldg_code, capacity
FROM location
WHERE capacity >= 100
ORDER BY capacity ASC;



--12 How many course sections are being taught by each of the faculty members?
SELECT f_id, COUNT(*) AS section_count
FROM course_section
GROUP BY f_id;



--13 Rewrite question 3 so it displays the student last name and the number of grades in the enrollment table for eachstudent.

SELECT s.s_last AS lastname, COUNT(e.grade) AS number_of_grades
FROM enrollment e
JOIN student s ON e.s_id = s.s_id
GROUP BY s.s_last;


