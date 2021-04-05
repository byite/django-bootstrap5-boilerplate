# Django 3.1.7 - Bootstrap 5 (Beta 3) Boilerplate project

## Setup
### Installing dependancies
- Pyhton
Click the link [HERE]() to follow the steps to set up your python virtual environment for development.

Once your virtual environment is configured and running, install python dependancies using the following command:
```pip install -r requirements.txt```

- Node
Ensure node and NPM are installed on your system or follow the steps [HERE]()

Install all Node dependancies by running the following command:
```npm install```

### Required environment variables
To run this project, a number of environment variables are required. These can be set using your teminal or in your development environments activate script.

The required variables are as follows:
- __DJANGO_DEBUG__ (String) Either 1 or 0 to indicate djang debug status.
- __DJANGO_ALLOWED_HOSTS__ (String. Comma separed values) Single string containing all allowed hosts, each separated by a comma.
- __DJANGO_SECRET_KEY__ (String) Django secret key.
- __DATABASE_HOST__ (String) Database host identifier
- __DATABASE_NAME__ (String) Database name identifier
- __DATABASE_USER__ (String) Database user identifier
- __DATABASE_PASSWORD__ (String) Database password identifier
- __AWS_ACCESS_KEY_ID__ (String) AWS Access key identifier
- __AWS_SECRET_ACCESS_KEY__ (String) AWS Secret key identifier
- __AWS_STORAGE_BUCKET_NAME__ (String) AWS S3 bucket name identifier
- __EMAIL_USER__ (String) Email address used for emailing out from application
- __EMAIL_PASSWORD__ (String) Password for the above email address

### Updating project name from django_project
If you wish to update the name of this django project from the generic "django_project" name. A number of files will require some minor updates. The affected files are as follows:

- manage.py
- django_project/settings.py
- django_project/urls.py
- django_project/asgi.py
- django_project/wsgi.py
- package.json
- package-lock.json

All that is required is to open each file and change each occurance of "django_project" to your desired project name, along with the "django_project" directory to match.