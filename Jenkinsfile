pipeline {
    agent any

    stages {
        stage('Executar Testes Playwright') {
            steps {
                sh '''
                docker run --rm \
                  -v /mnt/jenkins/workspace/teste-login-site:/work \
                  -w /work \
                  mcr.microsoft.com/playwright:v1.61.1-noble \
                  bash -c "npm install && npx playwright test"
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}