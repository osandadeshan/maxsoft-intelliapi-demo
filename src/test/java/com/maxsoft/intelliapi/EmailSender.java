package com.maxsoft.intelliapi;

import com.maxsoft.intelliapi.util.email.Email;
import com.maxsoft.intelliapi.util.reader.JsonReport;

/**
 * Created by Osanda on 3/31/2018.
 */


public class EmailSender {

    public static void main(String[] args) {
        Email.send(JsonReport.getExecutionResults());
    }


}
