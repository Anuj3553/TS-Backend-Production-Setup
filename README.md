# What is .gitkeep

## The .gitkeep file is a placeholder file used in Git repositories to ensure that empty directories are included in version control. Git does not track empty directories by default, which can be problematic if you want to preserve a specific directory structure in your repository. By adding a .gitkeep file to an empty directory, you signal to Git that the directory should be tracked, even if it's empty

# Docker

## Development

### docker build -t backend-app:dev -f docker/development/Dockerfile .

### docker run --rm -it -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node_modules -p 3000:3000 backend-app:dev


## Production

### docker build -t backend-app:dev -f docker/development/Dockerfile .

### docker run --rm -d -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node_modules -p 3000:3000 backend-app:1.0.0
