pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('e2e Tests') {
            steps {
                sh 'npm run cypress:ci'
            }
        }
    }

    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}