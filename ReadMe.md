## Setup Guide

### Pre Requisites
1. Java
2. Maven

### How to Install and Configure Gauge
1. Install Chocolatey by executing the following command. \
` @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString(‘https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`

2. Install Gauge by executing the following command. \
`choco install gauge`

3. Open Command Prompt and execute following commands. \
`gauge install java` \
`gauge install html-report` \
`gauge install json-report` \
`gauge install xml-report` \
`gauge install spectacle` \
`gauge install flash`

4. You can check the installation using the following command. \
`gauge -v`

	If the installation is success, it will output like this:

```markdown
    Gauge version: <version number>
    Plugins
    -------
    flash (<version number>)
    html-report (<version number>)
    java (<version number>)
    json-report (<version number>)
    spectacle (<version number>)
    xml-report (<version number>)
```

### MaxSoft IntelliAPI Tutorials
1. [MaxSoft — IntelliAPI](https://medium.com/@osanda.deshan/maxsoft-ata-framework-for-api-test-automation-9cffd25a0b15 "MaxSoft — IntelliAPI")
2. [How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 1](https://medium.com/@osanda.deshan/how-to-use-maxsoft-ata-framework-for-api-test-automation-e5966185fa33 "How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 1")
3. [How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 2](https://medium.com/@osanda.deshan/how-to-use-maxsoft-ata-framework-for-api-test-automation-tutorial-2-53b50c613f42 "How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 2")
4. [How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 3](https://medium.com/@osanda.deshan/how-to-use-maxsoft-ata-framework-for-api-test-automation-tutorial-3-160f81e404f1 "How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 3")
5. [How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 4](https://medium.com/@osanda.deshan/how-to-use-maxsoft-ata-framework-for-api-test-automation-tutorial-4-5fb265ca5eaf "How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 4")
6. [How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 5](https://medium.com/@osanda.deshan/how-to-use-maxsoft-ata-framework-for-api-test-automation-tutorial-5-3b2c22328233 "How to use MaxSoft IntelliAPI for API Test Automation? — Tutorial 5")
