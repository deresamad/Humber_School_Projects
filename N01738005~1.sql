 --  A listing is needed to show the author last name and the author first name. Display the fname column first and the lname column second in your output. Create an alias for fname called First Name and an alias for lnamem called Last Name
SELECT fname AS "First Name", lname AS "Last Name"
FROM author;

--Management needs a customer listing displaying the last name, first name, city, state and zip of all customers
SELECT lastname, firstname, city, state, zip
FROM customers;

--A listing is needed form the orders table showing the order#, order date, and the ship date
SELECT order#, orderdate, shipdate
FROM orders;

--Display the contents of the promotion table in order with the gift followed by the minretail followed by the maxretail. List the column names for each column in the table
SELECT gift, minretail, maxretail
FROM promotion;

--Display the total of each book purchased from the orderitems table. You can use the quantity and paideachcolumns to accomplish this. Create an alias for this column called Total Sale. Also display the order# andthe ISBN in the output
SELECT order#, isbn, (quantity * paideach) AS "Total Sale"
FROM orderitems;



