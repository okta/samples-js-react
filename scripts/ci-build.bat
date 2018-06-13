:: This batch file will be called by bacon CI for windows testing
call npm install
call npm run pretest
call npm run test:e2e
