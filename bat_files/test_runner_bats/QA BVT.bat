@echo off
echo Executing MaxSoft IntelliAPI QA BVT API Test Automation Suite.............

cd ..
cd .. 

call mvn test-compile gauge:execute -DspecsDir="specs\Pre Test" -Denv="QA"
call mvn test-compile gauge:execute -DspecsDir="specs\Data Stores,specs\Other" -Denv="QA"

call mvn clean -DemailConfigEnv=QA install exec:java

echo Exit Code = %ERRORLEVEL%
if not "%ERRORLEVEL%" == "0" exit /b
