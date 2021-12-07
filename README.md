## Simple express app wrapped in docker
this was to demonstrate how to create a Docker Image and container from a simple app
## Docker commands:
`docker ps`
shows containers that are running
`docker build -t myimagename:1.0.1 .`
builds a docker image from the dockerfile in the cureent folder using tag “myimagename:1.0.1”.
`docker run -p 5050:8080 myimagename:1.0.1`
runs the docker image.
`docker run -p 5050:8080 -v /Users/myuser/code/myproject/:/src/ myimagename:1.0.1`
Runs docker image with volume mapped to local folder
`docker kill 123`
kills the container with the Container ID beginning with 123
