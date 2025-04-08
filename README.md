CI/CD

This project is a simple Node.js application demonstrating a complete CI/CD pipeline using *Jenkins, **Docker, and **AWS EC2*.

# Features

- Basic Express server in Node.js
- Dockerized application
- Jenkins pipeline with:
  - Code Checkout
  - Docker Build & Push
  - Docker Run
- Hosted on AWS EC2

# Folder Structure

simple-node-app/ ├── Dockerfile ├── Jenkinsfile ├── app.js ├── package.json └── README.md

# Technologies Used

- Node.js
- Express.js
- Docker
- Jenkins
- GitHub
- AWS EC2

# Prerequisites

- Docker installed on EC2
- Jenkins running on EC2
- GitHub repository with Jenkinsfile and source code
- Port 3000 open in EC2 security group

# Setup Instructions

# 1. Clone the repo

```bash
git clone https://github.com/tharunkatta10/simple-node-app.git
cd simple-node-app

2. Build and Run with Docker

docker build -t simple-node-app .
docker run -d -p 3000:3000 simple-node-app

Visit: http://<EC2-PUBLIC-IP>:3000

3. Jenkins Pipeline Configuration

In Jenkins, create a new pipeline project

Configure the GitHub repo URL: https://github.com/tharunkatta10/simple-node-app.git

Make sure Jenkins has permission to access Docker

The Jenkinsfile contains the pipeline stages


4. Jenkinsfile Preview

pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/tharunkatta10/simple-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simple-node-app .'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests (mock stage)"'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f simple-node-app || true'
                sh 'docker run -d -p 3000:3000 --name simple-node-app simple-node-app'
            }
        }
    }
}

Output

Once deployed, visit:
http://184.72.196.136:3000
You should see:
Hello from Jenkins CI/CD Pipeline


---
Author

Tharun Katta
GitHub: tharunkatta10
