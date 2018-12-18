# Base Image
FROM node:8

RUN mkdir -p /app

WORKDIR /app

# Install npm modules
ADD ./ /app
RUN npm install

# Expose port
EXPOSE 3000

# Run server
CMD ['npm', 'start']
