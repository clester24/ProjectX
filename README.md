# ProjectX
Final Project 

MONGO DB SETUP

In MongoDB Atlas
>Create new Cluster 
>Create Database called "california_lakes"
>Create 2 collections in "california_lakes".  One called "lake_oroville".  The other called "lake_shasta".
>Under your new cluster, select "CONNECT", then "Connect your application"
>Copt the generated connection string in the text box

In MongoDB Compass
>Paste your connection string where it says "paste your connection string"
>Make sure to replace <password> with the password for your <USERNAME>. Replace myFirstDatabase with the name of the database "california_lakes" that connections will use by default. Ensure any option params are URL encoded.
>Select the database "california_lakes", which should have the 2 collections correlating to the database
>Select each database and upload the corresponding csv file (either oroville_completed or shasta_completed)

In the app.py file, the only line you should have to change is line 9 of the code to update it with YOUR MONGODB ATLAS username and password
>cluster = MongoClient("mongodb+srv://USERNAME:PASSWORD@cluster0.ou3yi.mongodb.net/california_lakes?retryWrites=true&w=majority")

The app routes /lake_oroville & /lake_shasta each show the json data for corresponsing csv files for each lake.
