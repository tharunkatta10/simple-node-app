pipeline {
    agent any

    environment {
        IMAGE_NAME = "simple-node-app"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/tharunkatta/simple-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running test..."'
                sh 'node app.js & sleep 3 && curl -f http://localhost:3000'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 $IMAGE_NAME'
            }
        }
    }
}
