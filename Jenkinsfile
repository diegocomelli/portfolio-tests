pipeline {
    agent any

    stages {
        stage('Instalar dependências') {
            steps {
                sh '''
                    npm install
                    npx playwright install --with-deps
                '''
            }
        }

        stage('Executar testes Playwright') {
            steps {
                sh '''
                    npx playwright test
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