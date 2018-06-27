@echo off
echo Executing MaxSoft IntelliAPI Demo API BVT Test Automation Suite.............

cd ..

call mvn gauge:execute -DspecsDir="specs\Access Token\Get Production PI Token.spec,specs\Staging BVT" -Denv="UAT"

call mvn clean -DemailConfigEnv=UAT install exec:java
echo Exit Code = %ERRORLEVEL%
if not "%ERRORLEVEL%" == "0" exit /b