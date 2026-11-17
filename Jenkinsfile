pipeline {
    agent any

    tools {
        // Optional: specify configured NodeJS tool name in Jenkins Global Tool Configuration
        // nodejs 'NodeJS-LTS'
    }

    options {
        timeout(time: 15, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
        ansiColor('xterm')
    }

    environment {
        CI = 'true'
        PROJECT_NAME = 'personal-portfolio-paras'
        STUDENT_NAME = 'Paras Mansing Thorat'
        STUDENT_TITLE = 'Final Year Computer Engineering Student'
    }

    stages {
        stage('Checkout Source Code') {
            steps {
                echo "=================================================="
                echo " 1. Checking out source code from Git / GitHub"
                echo " Project: ${env.PROJECT_NAME}"
                echo " Student: ${env.STUDENT_NAME} (${env.STUDENT_TITLE})"
                echo "=================================================="
                checkout scm
            }
        }

        stage('Environment & Tooling Verification') {
            steps {
                echo "=================================================="
                echo " 2. Verifying NodeJS & NPM Environment"
                echo "=================================================="
                script {
                    if (isUnix()) {
                        sh 'node --version'
                        sh 'npm --version'
                        sh 'git --version'
                    } else {
                        bat 'node --version'
                        bat 'npm --version'
                        bat 'git --version'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "=================================================="
                echo " 3. Clean installing dependencies via npm ci"
                echo "=================================================="
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm ci'
                    }
                }
            }
        }

        stage('Build Production Bundle') {
            steps {
                echo "=================================================="
                echo " 4. Compiling & bundling via Vite (npm run build)"
                echo "=================================================="
                script {
                    if (isUnix()) {
                        sh 'npm run build'
                    } else {
                        bat 'npm run build'
                    }
                }
            }
        }

        stage('Verify Build Artifacts') {
            steps {
                echo "=================================================="
                echo " 5. Verifying that dist/ directory was generated"
                echo "=================================================="
                script {
                    if (isUnix()) {
                        sh '''
                            if [ ! -d "dist" ]; then
                                echo "ERROR: dist directory was not created!"
                                exit 1
                            fi
                            if [ ! -f "dist/index.html" ]; then
                                echo "ERROR: dist/index.html is missing!"
                                exit 1
                            fi
                            echo "SUCCESS: dist directory verified!"
                            ls -la dist
                        '''
                    } else {
                        bat '''
                            if not exist dist (
                                echo ERROR: dist directory was not created!
                                exit /b 1
                            )
                            if not exist dist\\index.html (
                                echo ERROR: dist\\index.html is missing!
                                exit /b 1
                            )
                            echo SUCCESS: dist directory verified!
                            dir dist
                        '''
                    }
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                echo "=================================================="
                echo " 6. Archiving production dist bundle"
                echo "=================================================="
                archiveArtifacts artifacts: 'dist/**', fingerprint: true, allowEmptyArchive: false
            }
        }
    }

    post {
        success {
            echo """
=============================================================================
 [SUCCESS] Jenkins CI/CD Pipeline Completed Successfully!
 ---------------------------------------------------------------------------
 Project:       ${env.PROJECT_NAME}
 Author:        ${env.STUDENT_NAME}
 Designation:   ${env.STUDENT_TITLE}
 Practical:     Final Year Computer Engineering Lab Practical
 Build Number:  #${env.BUILD_NUMBER}
 Result:        Vite production bundle compiled and verified in dist/
 Timestamp:     ${new Date().format('yyyy-MM-dd HH:mm:ss')}
=============================================================================
            """
        }
        failure {
            echo """
=============================================================================
 [FAILURE] Jenkins CI/CD Pipeline Failed!
 ---------------------------------------------------------------------------
 Please inspect console output above for error logs.
=============================================================================
            """
        }
        always {
            cleanWs deleteDirs: false, notFailBuild: true
        }
    }
}
