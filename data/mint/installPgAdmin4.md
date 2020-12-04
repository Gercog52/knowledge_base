Installing pgAdmin 4 on Linux Mint 20 (ulyana)
Jeremiah Ogunyemi
Jeremiah Ogunyemi
Jul 12·4 min read

Image for post
pgAdmin4
What Exactly is pgAdmin?
pgAdmin is a management tool for PostgreSQL and derivative relational databases such as EnterpriseDB’s EDB Advanced Server. It may be run either as a web or desktop application.
pgAdmin is the most popular and feature rich Open Source administration and development platform for PostgreSQL, the most advanced Open Source database in the world.
source(pgadmin.org)
As at the time of writing this, PgAdmin 4.23 is the latest version and from the official download page, this can be installed using the apt-get install method, though for now only Ubuntu 16.04 (Xenial), 18.04 (Bionic), 19.10 (Eoan), 20.04 (Focal) are officially available through the apt-get method, that leaves a headache for the users of the Latest Linux mint (version codename ulyana).
I’M SURE THE PGADMIN TEAM IS WORKING ON ADDING apt-get support for ulyana (it's still relatively new) but this is a workaround to get the latest version of pgAdmin4
This method also works for any Linux version
Running the command 
$ cat /etc/os-release 
can be used to get full details about your Linux os
Image for post
Follow the following steps to install pgAdmin4 on your Linux/Ubuntu machine
lets Get started
Update the system
I've seen this on so many installation guides and guess what ill ask you to do first, UPDATE!!!!!
Src: https://giphy.com/
$ sudo apt-get update
2. install PostgreSQL (if you don't have it installed already)
$ sudo apt-get install postgresql postgresql-contrib
Create the username and password for PostgreSQL database. Type the following command in the terminal to add login credentials for the user, Postgres
$ sudo -u postgres psql postgres
# \password postgres
3. Install the required packages
$ sudo apt-get install build-essential libssl-dev libffi-dev libgmp3-dev
$ sudo apt-get install python3-virtualenv libpq-dev python3-dev
4. Create a virtual environment
Run the following commands navigate to your home directory, create a new folder named pgAdmin4 and create the virtual environment.
$ cd ~
$ mkdir pgAdmin4
$ cd pgAdmin4
$ virtualenv venv
5. Activate the virtual environment
$ source venv/bin/activate
6. Fetch and install the latest version of pgaAdmin4 using pip install
$ pip install https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v4.23/pip/pgadmin4-4.23-py3-none-any.whl
7. Configure and run pgAdmin 4
Create a new file named config_local.py in lib/python3.8/site-packages/pgadmin4
$ nano venv/lib/python3.8/site-packages/pgadmin4/config_local.py
Then add this to the file
import os
DATA_DIR = os.path.realpath(os.path.expanduser(u'~/.pgadmin/'))
LOG_FILE = os.path.join(DATA_DIR, 'pgadmin4.log')
SQLITE_PATH = os.path.join(DATA_DIR, 'pgadmin4.db')
SESSION_DB_PATH = os.path.join(DATA_DIR, 'sessions')
STORAGE_DIR = os.path.join(DATA_DIR, 'storage')
SERVER_MODE = False
Image for post
8. Test the installation by running the command below
python venv/lib/python3.8/site-packages/pgadmin4/pgAdmin4.py
This should start pgAdmin4
Image for post
Navigate to 127.0.0.1:5050  to start using pgaAdmin4
9. Create an alias in your ~/.bashrc file
$ echo "alias startPg='~/pgAdmin4/venv/bin/python ~/pgAdmin4/venv/lib/python3.8/site-packages/pgadmin4/pgAdmin4.py'" >> ~/.bashrc
A brief explanation of the above snippet
"~/pgAdmin4/venv/bin/python ~/pgAdmin4/venv/lib/python3.8/site-packages/pgadmin4/pgAdmin4.py" is the command we are creating an alias d=for and it can be broken into two parts
1) ~/pgAdmin4/venv/bin/python
    This is to use the virtual environment we created earlier without having to "source" it 
2) ~/pgAdmin4/venv/lib/python3.8/site-packages/pgadmin4/pgAdmin4.py
    This is the command that starts the pgAdmin4 server
10. You can easily start The Pgadmin using the “startPg” command
$ startPg
Done!
we are good to go
Image for post
NB : Using virtual environment isn’t necessary. You can install pgadmin4 as your local package (e.g. at ~/.local/lib/python3.8/site-packages/pgadmin4) instead of installing in a virtual environment. BUT IT IS ADVISABLE TO USE A VIRTUAL ENVIRONMENT
CREDITS
https://www.pgadmin.org/faq
https://www.pgadmin.org/docs/
https://giphy.com/