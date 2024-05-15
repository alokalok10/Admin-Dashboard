import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
    return (
        <div style={{backgroundColor: 'cyan', textAlign: 'center'}} className="AppFooter">
            <Typography.Link href="tel: +91123456789">+911234567890</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>Terms of Use</Typography.Link>
            <Typography.Text>
                <span style={{ color: 'red' }}>&hearts;</span> Created by Alok
            </Typography.Text>
        </div>
    );
};

export default AppFooter;
