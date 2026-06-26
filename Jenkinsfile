pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Executar Testes Playwright') {
            steps {
                sh '''
                    docker run --rm \
                    -v $WORKSPACE:/work \
                    -w /work \
                    mcr.microsoft.com/playwright:v1.54.2-noble \
                    bash -c "
                    npm install &&
                    npx playwright install &&
                    npx playwright test
                    "
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/*.png', allowEmptyArchive: true
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}