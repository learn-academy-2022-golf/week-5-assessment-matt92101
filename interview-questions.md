# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer:
Super works with the the initialize command and holds the argument name. It is used to to borrow  the initialize method to assign an instance variable.
Researched answer:
Super calls a method to the parent class with the same name as the method super invoked. Some important things to know about super is that it can only be used inside a methed and it returns the result from the parent method. Also, it can be called multiple times.

2. Whapt is a gem?

Your answer:
A gem is packaged ruby code that provide custom functionality.

Researched answer:
RubyGems is a package manager for custom written codes created by developers. Gems are easily shared between users to provide better streamlining in Ruby applications. T

3. What is a relational database? Are there other kinds of databases?

Your answer:
Relational databases hold a collection of data usually structured in rows and columns. The data in relational databases are all related to each other.

Researched answer:
There are several differnt kinds of databases. Some of these databases include hierarchical databases, network databases, and object oriented databases. Hierarchical databases catagorizes its data using a top down approach. Network databases are similar to hierarchical databases but allows child records to associate with different parent records. Data stored in object oriented databases are stored as objects. These objects have attributes which are the elements defined in the database

4. What are primary keys? Why are they important?

Your answer:
Primary keys are a unique identifier that provide reference to data in databases. For example, a unique primary key such as a number will be assigned for each person in a database because there may be multiple people with the same first and last name.

Researched answer:
Relational databases would not work without primary keys. A table of data can only take one set of primary keys to uniquely identify specific rows in a databaes.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
There are several HTTP verbs. These include POST, GET, PUT, PATCH, and DELETE
Researched answer:
Create - POST and PUT
Read - GET
UPDATE - PUT, PATCH, AND POST
DELETE - DELETE

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
RESTful routes are standards used to create reusable routes when mapping the HTTP verbs to CRUD actions.

2. Ruby on Rails:
Ruby on Rails is web application framework written in Ruby. It supports model view controller (MVC) architecture that supports structure for databases and web pages. 

3. Database migrations:
Database migration is the process of carrying over data from one or more database to other databases. Database migrations require down time for web application thus thoughtful planning when migrating is required.


4. Params:
Params are methods that accesses data in Rails. Params can map to form fields or URL parameters. 

5. ERB:
ERB is a templating system for Ruby. Ruby code can be added to any text document for the purpose of mixing HTML and Ruby. This allows the developer to generate web pages using data from databases.
